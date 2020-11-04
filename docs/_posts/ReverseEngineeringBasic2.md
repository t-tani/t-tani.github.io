---
title: ReverseEngineering Basic2
description: アセンブリを読むために必要な基礎知識まとめ Part2
date: 2019-03-21
footer: MIT Licensed | Copyright © 2020-present t-tani
sidebar: auto
category: ReverseEngineering
tags:
  - ReverseEngineering
  - C
  - C++
  - Assembly
---

# ReverseEngineering Basic2

<TagLinks />

C++のプログラムを読むために必要となる基礎知識をまとめる。

## C++のクラスとリバースエンジニアリング

C++で作成した実行バイナリを逆アセンブルしても、コードにはメンバー関数であることやクラスの宣言部であることは明示されない。そのため、スタックの使用状況や関数の構造から、クラスを構成する構造体を判別する必要がある。ここでは簡単なC++のコードをコンパイル/逆アセンブルしてthisポインターやクラスのメンバー関数の呼び出し、メンバー変数へのアクセスを確認する。なお、MSVS2017とGCCでコンパイルしたPEファイルを利用する。

### 分析するPEバイナリのソースコード

以下のソースコードには、簡単なクラスからのオブジェクト作成とメンバー関数、メンバー変数へのアクセスが含まれる。

```cpp
// sample.cpp

#include "windows.h"
#include "tchar.h"
#include <stdio.h>

class Employee
{
  public:
    int number;
    char name[128];
    long pay;
    void ShowData();
    void Test();
};

void Employee::ShowData()
{
    printf("number: %d\n", number);
    printf("name: %s\n", name);
    printf("pay: %d\n", pay);
    Test();
}

void Employee::Test()
{
    printf("Test function\n");
    return;
}

//Employee t_tani;
int main(int argc, char *argv[])
{
    Employee t_tani;

    printf("size: %X\n", sizeof(Employee));
    t_tani.number = 0x1111;
    _tcscpy(t_tani.name, _T("t_tani"));
    t_tani.pay = 0x100;
    t_tani.ShowData();

    return 0;
}
```

### Disassemble

以下はサンプルコードをMSVC2017でコンパイルし、IDA Free 7.0.0.2で逆アセンブルした結果である。

Main関数

```nasm
; main()
     sub_401510      proc near               ; CODE XREF: sub_4011B3

     var_94          = byte ptr -94h
     var_90          = dword ptr -90h
     Dest            = byte ptr -8Ch
     var_C           = dword ptr -0Ch
     var_4           = dword ptr -4

55                        push    ebp
8B EC                     mov     ebp, esp
81 EC 94 00 00 00         sub     esp, 94h
57                        push    edi
8D BD 6C FF FF FF         lea     edi, [ebp+var_94]
B9 25 00 00 00            mov     ecx, 25h
B8 CC CC CC CC            mov     eax, 0CCCCCCCCh
F3 AB                     rep stosd
A1 04 90 40 00            mov     eax, ___security_cookie
33 C5                     xor     eax, ebp
89 45 FC                  mov     [ebp+var_4], eax
68 88 00 00 00            push    88h
68 64 6B 40 00            push    offset aSizeX   ; "size: %X\n"
E8 ED FA FF FF            call    sub_401032
83 C4 08                  add     esp, 8
C7 85 70 FF FF FF 11 11+  mov     [ebp+var_90], 1111h
68 70 6B 40 00            push    offset Source   ; "tani"
8D 85 74 FF FF FF         lea     eax, [ebp+Dest]
50                        push    eax             ; Dest
E8 8E 34 00 00            call    strcpy
83 C4 08                  add     esp, 8
C7 45 F4 00 01 00 00      mov     [ebp+var_C], 100h
8D 8D 70 FF FF FF         lea     ecx, [ebp+var_90]
E8 CD FB FF FF            call    sub_401145
33 C0                     xor     eax, eax
52                        push    edx
8B CD                     mov     ecx, ebp
50                        push    eax
8D 15 A8 15 40 00         lea     edx, dword_4015A8
E8 E4 FB FF FF            call    sub_40116D
58                        pop     eax
5A                        pop     edx
5F                        pop     edi
8B 4D FC                  mov     ecx, [ebp+var_4]
33 CD                     xor     ecx, ebp
E8 91 FB FF FF            call    j_@__security_check_cookie@4 ; __security_check_cookie(x)
81 C4 94 00 00 00         add     esp, 94h
3B EC                     cmp     ebp, esp
E8 AC FB FF FF            call    sub_40114F
8B E5                     mov     esp, ebp
5D                        pop     ebp
C3                        retn
          sub_401510      endp
```

メンバー関数 ShowData()

```nasm
; Employee::ShowData(void)
     sub_401470      proc near               ; CODE XREF: sub_401145↑j

     var_4           = dword ptr -4

55                    push    ebp
8B EC                 mov     ebp, esp
51                    push    ecx
C7 45 FC CC CC CC CC  mov     [ebp+var_4], 0CCCCCCCCh
89 4D FC              mov     [ebp+var_4], ecx
8B 45 FC              mov     eax, [ebp+var_4]
8B 08                 mov     ecx, [eax]
51                    push    ecx
68 30 6B 40 00        push    offset aNumberD ; "number: %d\n"
E8 A4 FB FF FF        call    sub_401032
83 C4 08              add     esp, 8
8B 55 FC              mov     edx, [ebp+var_4]
83 C2 04              add     edx, 4
52                    push    edx
68 3C 6B 40 00        push    offset aNameS   ; "name: %s\n"
E8 90 FB FF FF        call    sub_401032
83 C4 08              add     esp, 8
8B 45 FC              mov     eax, [ebp+var_4]
8B 88 84 00 00 00     mov     ecx, [eax+84h]
51                    push    ecx
68 48 6B 40 00        push    offset aPayD    ; "pay: %d\n"
E8 79 FB FF FF        call    sub_401032
83 C4 08              add     esp, 8
8B 4D FC              mov     ecx, [ebp+var_4]
E8 E5 FC FF FF        call    sub_4011A9
83 C4 04              add     esp, 4
3B EC                 cmp     ebp, esp
E8 81 FC FF FF        call    sub_40114F
8B E5                 mov     esp, ebp
5D                    pop     ebp
C3                    retn
      sub_401470      endp
```

メンバー関数 Test()

```nasm
; Employee::Test(void)
     sub_4014E0      proc near               ; CODE XREF: sub_4011A9↑j

     var_4           = dword ptr -4

55                    push    ebp
8B EC                 mov     ebp, esp
51                    push    ecx
C7 45 FC CC CC CC CC  mov     [ebp+var_4], 0CCCCCCCCh
89 4D FC              mov     [ebp+var_4], ecx
68 54 6B 40 00        push    offset aTestFunction ; "Test function\n"
E8 3A FB FF FF        call    sub_401032
83 C4 04              add     esp, 4
83 C4 04              add     esp, 4
3B EC                 cmp     ebp, esp
E8 4A FC FF FF        call    sub_40114F
8B E5                 mov     esp, ebp
5D                    pop     ebp
C3                    retn
      sub_4014E0      endp
```

### thisポインターの分析

リバースエンジニアリングする上で構造体とクラスが持つ共通として、メモリ上でスタックサイズを増やして変数を使用する共通点がある。`main()`の以下のコードで`0x94`を積んでいるので、この関数では`0x94`バイトのデータの塊を使用することが分かり、構造体かクラスで使われることが推測される。

#### main関数でスタックを確保するコード

```nasm
; main()
55                        push    ebp
8B EC                     mov     ebp, esp
81 EC 94 00 00 00         sub     esp, 94h
```

##### main関数でメンバー変数を使用する部分

次に`var_90`に着目する。以下のコードを見ると、`var_90`に直接`0x1111`を代入している。これは、最初のメンバー変数`t_tani.number = 0x1111;`に該当する部分である。そして、その後に`var_94`のアドレスを`ECX`に入れて関数に呼び出し`call`を行っている。通常、クラスのメンバー関数は__thiscallで呼び出され、オブジェクトのポインターを`ECX`にいれて呼び出す。そのため、`ECX`に入った`var_90`がC++でのthisポインターになる。

```nasm
C7 85 70 FF FF FF 11 11+  mov     [ebp+var_90], 1111h
(snip)
8D 8D 70 FF FF FF         lea     ecx, [ebp+var_90]
E8 CD FB FF FF            call    sub_401145
```

##### ShowDataメソッドからメンバー変数へのアクセス

次にShowData()を確認してみる。`ECX`にthisポインターが渡され、thisポインターがローカル変数`var_4`へ格納される。この変数のポインターを増加させながら、クラスの変数を使用することになる。

```nasm
// Employee::ShowData(void)
89 4D FC              mov     [ebp+var_4], ecx   ; ローカル変数var_4へthisポインターを格納
8B 45 FC              mov     eax, [ebp+var_4]   ; EmployeeClassで定義された第1メンバー変数へのポインターを取得
8B 08                 mov     ecx, [eax]         ; 第1メンバー変数の値を取得
51                    push    ecx
68 30 6B 40 00        push    offset aNumberD    ; "number: %d\n"
E8 A4 FB FF FF        call    sub_401032
```

`var_4`を`EDX`に入れて、第1メンバー変数分オフセット4バイト加算し、次のメンバー変数を取得。

```nasm
8B 55 FC              mov     edx, [ebp+var_4]
83 C2 04              add     edx, 4          ; 第一メンバー変数のオフセット4byteを加算し、次のメンバー変数を取得
52                    push    edx
68 3C 6B 40 00        push    offset aNameS   ; "name: %s\n"
```

次に84hバイト加算して、第3のメンバー変数を取得。これは2番目の変数が`char name[128]`であり、1番目のメンバー変数と2番目のメンバー変数分のオフセット 4h+80h バイト加算したものである。さらに、`ECX`にthisポインターである`var_4`を渡して、メンバー関数を`Employee::Test()`呼んでいる。

```nasm
8B 45 FC              mov     eax, [ebp+var_4]
8B 88 84 00 00 00     mov     ecx, [eax+84h]    ; 第3のメンバー変数へアクセスするためオフセット84hバイトを加算
51                    push    ecx
68 48 6B 40 00        push    offset aPayD      ; "pay: %d\n"
E8 79 FB FF FF        call    sub_401032
83 C4 08              add     esp, 8
8B 4D FC              mov     ecx, [ebp+var_4]  ; thisポインターをECXへ格納
E8 E5 FC FF FF        call    sub_4011A9        ; Employee::Test()の呼び出し
```

## コンパイラによる違い

参考までにgccでコンパイル -> 逆アセンブルしたコードを掲載。メンバー変数を呼び出す際には、thisポインターを`ECX`にいれて呼び出す部分には変わりなく、MSVS2017と同じように読める。

```nasm
;main()
55                        push    ebp
89 E5                     mov     ebp, esp
83 E4 F0                  and     esp, 0FFFFFFF0h
81 EC A0 00 00 00         sub     esp, 0A0h
E8 DD 00 00 00            call    ___main
C7 44 24 04 88 00 00 00   mov     dword ptr [esp+4], 88h
C7 04 24 72 90 40 00      mov     dword ptr [esp], offset aSizeX ; this
E8 C9 62 00 00            call    printf(char const*,...)
C7 44 24 18 11 11 00 00   mov     dword ptr [esp+18h], 1111h
8D 44 24 18               lea     eax, [esp+18h]
83 C0 04                  add     eax, 4
C7 00 74 61 6E 69         mov     dword ptr [eax], 'inat'
C6 40 04 00               mov     byte ptr [eax+4], 0
C7 84 24 9C 00 00 00 00+  mov     dword ptr [esp+9Ch], 100h
8D 44 24 18               lea     eax, [esp+18h]
89 C1                     mov     ecx, eax
E8 3A FF FF FF            call    Employee::ShowData(void)
B8 00 00 00 00            mov     eax, 0
C9                        leave
C3                        retn
```

```nasm
;Employee::Showdata(void)
55                    push    ebp
89 E5                 mov     ebp, esp
83 EC 28              sub     esp, 28h
89 4D F4              mov     [ebp+this], ecx
8B 45 F4              mov     eax, [ebp+this]
8B 00                 mov     eax, [eax]
89 44 24 04           mov     [esp+4], eax
C7 04 24 44 90 40 00  mov     dword ptr [esp], offset __format ; "number: %d\n"
E8 42 63 00 00        call    printf(char const*,...)
8B 45 F4              mov     eax, [ebp+this]
83 C0 04              add     eax, 4
89 44 24 04           mov     [esp+4], eax
C7 04 24 50 90 40 00  mov     dword ptr [esp], offset aNameS ; "name: %s\n"
E8 2C 63 00 00        call    printf(char const*,...)
8B 45 F4              mov     eax, [ebp+this]
8B 80 84 00 00 00     mov     eax, [eax+84h]
89 44 24 04           mov     [esp+4], eax
C7 04 24 5A 90 40 00  mov     dword ptr [esp], offset aPayD ; this
E8 13 63 00 00        call    printf(char const*,...)
8B 45 F4              mov     eax, [ebp+this]
89 C1                 mov     ecx, eax
E8 03 00 00 00        call    Employee::Test(void)
90                    nop
C9                    leave
C3                    retn
```

```nasm
;Employee::Test(void)
55                    push    ebp
89 E5                 mov     ebp, esp
83 EC 28              sub     esp, 28h
89 4D F4              mov     [ebp+this], ecx
C7 04 24 63 90 40 00  mov     dword ptr [esp], offset aTestFunction ; "Test function\n"
E8 F1 62 00 00        call    printf(char const*,...)
90                    nop
C9                    leave
C3                    retn
```

## 補足: C++の開発環境の準備

C++で書かれたPEファイルを準備するため、Windowsでのコンパイル開発環境を整える。

- OS 名: Microsoft Windows 10 Pro
- OS バージョン: 10.0.17134 N/A ビルド 17134

### IDE

Visual Studio Code : https://azure.microsoft.com/ja-jp/products/visual-studio-code/

### コンパイラ

コンパイラを入れるため、以下をインストール。

- Visual Studio Community 2017 : https://visualstudio.microsoft.com/ja/downloads/
  - C++によるデスクトップ開発

- Msys2 : http://www.msys2.org/
  - インストールファイル : msys2-x86_64-20180531.exe
    - `pacman -S base-devel`
    - `pacman -S mingw-w64-x86_64-toolchain`
    - `pacman -S mingw-w64-i686-toolchain`

## 参考

- リバースエンジニアリングバイブル コード再創造の美学
  - https://book.impress.co.jp/books/1113101030
- Visual Studio のインストール | Microsoft Docs
  - https://docs.microsoft.com/ja-jp/visualstudio/install/install-visual-studio?view=vs-2017
- MSYS2/MinGW-w64 (64bit/32bit) インストール手順メモ
  - https://gist.github.com/Hamayama/eb4b4824ada3ac71beee0c9bb5fa546d
