---
title: ReverseEngineering Basic1
description: アセンブリを読むために必要な基礎知識まとめ Part1
date: 2019-03-17
footer: MIT Licensed | Copyright © t-tani
sidebar: auto
category: ReverseEngineering
tags:
  - C
  - Assembly
---

# ReverseEngineering Basic1

<TagLinks />

備忘のためリバースエンジニアリングでアセンブリを読む基礎知識をまとめる。

## x86の主要レジスタ

### 汎用レジスタ

#### EAX (Accumulator register)

算術演算、戻り値で利用される。

#### EDX (Data register)

基本的な役割はEAXと同じだが、戻り値に利用できない。

#### ECX (Count register)

ループを実行するときのカウントに利用する。
ただし、加算処理（`i++`）ではなく、事前にループ回数をECXに格納し減算処理 (`i--`)を行いECXが0になるまでカウントする。汎用レジスタと使用しても使用される。

#### EBX (Base register)

特定の目的を持って作られたレジスタではない。ECX,EDX,ECXが足りない場合に利用される。データのポインターとして使われることが多い。

### インデックスレジスタ

#### ESI(Source Index register),EDI(Destination Index register)

主に文字列やデータ処理、繰り返しの処理、メモリの内容の移動に使われる。
ソースアドレス、ディスティネーションアドレスを入ることが多い。

### セグメントレジスタ

メモリアクセスの種類に応じて暗黙のうちにセグメントレジスタが選択される。

#### CS/DS/SS/ES

- CS (code segment):命令フェッチ
- DS (data segment): データの読み書き
- SS (stack segment): スタックへのアクセス
- ES (extra segment): データの読み書き

## 主要なオペコード

### データ移送

- PUSH: スタックに値を入れる命令
- POP: スタックの値を取得する命令
- MOV: 値を入れる命令
- LEA: アドレスを入れる命令

### 算術論理演算

- ADD: ソースからディスティネーションに値を加算する命令
- SUB: ソースからディスティネーションに値を減算する命令
- INC: `i++`と同じ
- DEC: `i--`と同じ
- AND,OR,XOR: そのまま

### 制御

- CALL: 関数を呼び出し、戻りアドレスをスタック上にプッシュする命令
- NOP: 何もしない命令
- INT: 割り込みを発生させる命令、後ろに付くオペランドの数字によって異なる処理を行う
  - 例 `0xCC    INT 3` -> DebugBreak()
- CMP,JMP: 比較してジャンプする命令

## C言語の逆アセンブル

リバースエンジニアリングにおいて、各関数がどのような役割を持っているか把握することが重要である。最終的には `CALL` される関数がどのような引数を取り、どのような処理をするかを解明して行けるようにする。

### 関数の基本的な構造

#### 関数の始まり方

x86では呼び出し元関数のスタック領域を保持するため、呼び出し元のスタックのベースアドレスを保存する。

```nasm
55            push      ebp        ; スタックのベースアドレスを保存
8B EC         mov       ebp, esp   ; 現在のスタックポインタアドレスをベースアドレスにする
```

#### スタックを使う関数の始まり

関数内で使用するローカル変数などを確保するために、ESPを使用するデータサイズの大きさ確保する。

```nasm
55            push      ebp
8B EC         mov       ebp, esp
83 EC 50      sub       esp, 50h  ; 50hのサイズをローカル変数のスタックとして利用する
```

#### 終わり方

呼び出し元のスタックのベースアドレスを ESB に戻し、関数を終了する。なお、関数の終了時にはEAXに返り値が格納される。

```nasm
89 EC         mov    esp, ebp
5D            pop    ebp        ; 呼び出し元のスタックのベースアドレスを戻す
```

### 代表的な関数の呼び出し規約

#### \_\_cdecl

- インテルx86ベースのシステム上のC/C++で使われることが多い
- 関数への引数は右から左の順でスタックに積まれる
- 関数の戻り値は EAXに格納される
- 呼び出された側の関数ではEAX, ECX, EDXのレジスタの元の値を保存することなく使用してよい
- 呼び出し側の関数では必要ならば呼び出す前にそれらのレジスタをスタック上などに保存する
- __スタックポインターの処理は呼び出し側で行う__
  - スタックポインターの値を引数を積む前の値に戻す処理

#### \_\_stdcall

- 主にWin32 APIにおけるデファクトスタンダード
- 関数への引数は右から左の順でスタックに積まれる
- 関数の戻り値は EAXに格納される
- __関数内でスタックポインターの処理を行う__
  - スタックポインターの値を引数を積む前の値に戻す処理
  - `retn 8` のような形で関数が終わる
  - ただし、引数が可変長のときは、__スタックポインターの処理は呼び出し側で行う__

#### \_\_fastcall

- 高速処理ををしたいときに利用
- 関数の引数が2つ以下の場合、`push`を使用せず、ECX,EDXを経由して渡す

#### \_\_thiscall

- C++ のメンバー関数を呼ぶのに用いる
- 現在のオブジェクトポインターをECXに渡す
- 基本的な処理は\_\_stdcallと同じ

##### \_\_thiscallの例

```c
Class CTemp
{
  public:
    int MemberFunc(int a, int b);
};
```

```nasm
mov    eax, dword ptr [ebp-14h]
push   eax
mov    edx, dword ptr [ebp-10h]
push   edx
lea    ecx, [ebp-4]     ; callの前にオブジェクトポインタをecxに格納
call   402000h
```

### 基本的なif文

条件文のコードは以下の流れで行われる。

1. `cmp`でオペランドを比較し、フラグレジスタを更新
2. 後に`jnz`,`jz`でフラグレジスタの内容を確認し、条件分岐を決定

### 基本的なループ

以下の例は、ローカル変数の加算処理を行い`i++`、ループ条件と比較する部分。特定の値と比較し、結果的に処理を再び行うとこを判定しているものはループだと思えば良い。

```nasm
mov  eax,[ebp-8]             ; [ebp-8] にループカウンターが格納されている
add  eax,1                   ; カウンターの値を加算
mov  [ebp-8],eax             ; ループを更新
cmp  dword ptr[ebp-8], 100h  ; カウンターの値と 100h を比較
jg   short loc_401035        ; [ebp-8]の値が 100hより大きい場合ジャンプ
```

### 構造体とAPIコール

C言語の文法において構造体は重要な要素である。プログラムを分析する際には構造体の各メンバーがどのように使用されているか確認する必要がある。リバースエンジニアリングにおいて、スタックポインターをみて、構造体の大きさやそのメンバーを把握する必要がある。いつスタックを確保し、確保したスタックをどのように使用したかによって、構造体がどのようなものか推定していく必要がある。
以下の例は、CreateProcessの呼び出しにおいて構造体 `STARTUPINFO` と構造体 `PROCESS_INFORMATION` を使ったCのコードとそのアセンブリコードである。

```c
// process_create.c
void RunProcess()
{
  STARTUPINFO si;
  PROCESS_INFORMATION pi;

  ZeroMemory( &si, sizeof(si));
  si.cb = sizeof(si);
  ZeroMemory( &pi, sizeof(pi));

  // Start the child process.
  if(!CreateProcess(NULL,"ChildProcess", NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi))
    {
      printf("CreateProcess failed.\n");
      return;
    }

    // Wait until child process exit
    WaitForSingleObject( pi.hProcess, INFINITE );

    // Close process and thread handles.
    CloseHandle( pi.hProcess );
    CloseHandle( pi.hThread );
}
```

```nasm
push      ebp
mov       ebp, esp
sub       esp, 54h                     ; 0x54byte分のスタックを増加している
push      44h                          ; ZeroMemory( &si, sizeof(si)); に対応する部分
push      0                            ; スタックの0x44byteを初期化
lea       eax,dword ptr ss:[ebp-54]    ;
push      eax                          ;
call      calling.004011A0             ; ZeroMemoryの呼び出し
add       esp,0C
mov       dword ptr ss:[ebp-54],44h    ; movで構造体の１番目のメンバー変数の処理。si.cb = sizeof(si)に該当
push      10                           ; ZeroMemory( &pi, sizeof(pi)) に対応する部分
push      0                            ; スタックの0x10byteを初期化
lea       ecx,dword ptr ss:[ebp-10]    ;
push      ecx                          ;
call      calling.004011A0             ; ZeroMemoryの呼び出し
add       esp,0C
lea       edx,dword ptr ss:[ebp-10]
push      edx                          ; CreateProcessAの最後の引数をスタックに積む。ここでは`&pi`に該当。
lea       eax,dword ptr ss:[ebp-54]
push      eax                          ; CreateProcessAの後ろから2番目の引数を積む。ここでは`&si`に該当。
push      0
push      0
push      0
push      0
push      0
push      0
push      calling.00407030             ; CreateProcessAの呼び出し
push      0
call      dword ptr ds:CreateProcessA
test      eax,eax                      ; CreateProicessAの実行結果の確認。test eax,eax で値が0であるか確認。
                                       ; test は and と実行している演算は同じ。レジストリフラグの更新が異なる。
jnz       short calling.00401061       ; NULLリターン時のエラー処理
push      calling.00407040
call      calling.0040116F
add       esp,4
jmp       short calling.00401081
push      -1
mov       ecx,dword ptr ss[ebp-10]
push      ecx
call      dword ptr ds:WaitForSingleObject
mov       edx,dword ptr ss:[ebp-10]
push      edx
call      dword ptr ds:CloseHandle
mov       eax,dword ptr ss:[ebp-C]
push      eax
call      dword ptr ds:CloseHandle
mov       esp,ebp
pop       ebp
retn
```

## 参考

- リバースエンジニアリングバイブル コード再創造の美学
  - https://book.impress.co.jp/books/1113101030
