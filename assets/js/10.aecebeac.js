(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{366:function(s,a,t){"use strict";t.r(a);var e=t(25),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"reverseengineering-basic1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reverseengineering-basic1"}},[s._v("#")]),s._v(" ReverseEngineering Basic1")]),s._v(" "),t("TagLinks"),s._v(" "),t("p",[s._v("備忘のためリバースエンジニアリングでアセンブリを読む基礎知識をまとめる。")]),s._v(" "),t("h2",{attrs:{id:"x86の主要レジスタ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x86の主要レジスタ"}},[s._v("#")]),s._v(" x86の主要レジスタ")]),s._v(" "),t("h3",{attrs:{id:"汎用レジスタ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#汎用レジスタ"}},[s._v("#")]),s._v(" 汎用レジスタ")]),s._v(" "),t("h4",{attrs:{id:"eax-accumulator-register"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eax-accumulator-register"}},[s._v("#")]),s._v(" EAX (Accumulator register)")]),s._v(" "),t("p",[s._v("算術演算、戻り値で利用される。")]),s._v(" "),t("h4",{attrs:{id:"edx-data-register"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edx-data-register"}},[s._v("#")]),s._v(" EDX (Data register)")]),s._v(" "),t("p",[s._v("基本的な役割はEAXと同じだが、戻り値に利用できない。")]),s._v(" "),t("h4",{attrs:{id:"ecx-count-register"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ecx-count-register"}},[s._v("#")]),s._v(" ECX (Count register)")]),s._v(" "),t("p",[s._v("ループを実行するときのカウントに利用する。\nただし、加算処理（"),t("code",[s._v("i++")]),s._v("）ではなく、事前にループ回数をECXに格納し減算処理 ("),t("code",[s._v("i--")]),s._v(")を行いECXが0になるまでカウントする。汎用レジスタと使用しても使用される。")]),s._v(" "),t("h4",{attrs:{id:"ebx-base-register"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ebx-base-register"}},[s._v("#")]),s._v(" EBX (Base register)")]),s._v(" "),t("p",[s._v("特定の目的を持って作られたレジスタではない。ECX,EDX,ECXが足りない場合に利用される。データのポインターとして使われることが多い。")]),s._v(" "),t("h3",{attrs:{id:"インデックスレジスタ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インデックスレジスタ"}},[s._v("#")]),s._v(" インデックスレジスタ")]),s._v(" "),t("h4",{attrs:{id:"esi-source-index-register-edi-destination-index-register"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#esi-source-index-register-edi-destination-index-register"}},[s._v("#")]),s._v(" ESI(Source Index register),EDI(Destination Index register)")]),s._v(" "),t("p",[s._v("主に文字列やデータ処理、繰り返しの処理、メモリの内容の移動に使われる。\nソースアドレス、ディスティネーションアドレスを入ることが多い。")]),s._v(" "),t("h3",{attrs:{id:"セグメントレジスタ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#セグメントレジスタ"}},[s._v("#")]),s._v(" セグメントレジスタ")]),s._v(" "),t("p",[s._v("メモリアクセスの種類に応じて暗黙のうちにセグメントレジスタが選択される。")]),s._v(" "),t("h4",{attrs:{id:"cs-ds-ss-es"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cs-ds-ss-es"}},[s._v("#")]),s._v(" CS/DS/SS/ES")]),s._v(" "),t("ul",[t("li",[s._v("CS (code segment):命令フェッチ")]),s._v(" "),t("li",[s._v("DS (data segment): データの読み書き")]),s._v(" "),t("li",[s._v("SS (stack segment): スタックへのアクセス")]),s._v(" "),t("li",[s._v("ES (extra segment): データの読み書き")])]),s._v(" "),t("h2",{attrs:{id:"主要なオペコード"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要なオペコード"}},[s._v("#")]),s._v(" 主要なオペコード")]),s._v(" "),t("h3",{attrs:{id:"データ移送"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#データ移送"}},[s._v("#")]),s._v(" データ移送")]),s._v(" "),t("ul",[t("li",[s._v("PUSH: スタックに値を入れる命令")]),s._v(" "),t("li",[s._v("POP: スタックの値を取得する命令")]),s._v(" "),t("li",[s._v("MOV: 値を入れる命令")]),s._v(" "),t("li",[s._v("LEA: アドレスを入れる命令")])]),s._v(" "),t("h3",{attrs:{id:"算術論理演算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#算術論理演算"}},[s._v("#")]),s._v(" 算術論理演算")]),s._v(" "),t("ul",[t("li",[s._v("ADD: ソースからディスティネーションに値を加算する命令")]),s._v(" "),t("li",[s._v("SUB: ソースからディスティネーションに値を減算する命令")]),s._v(" "),t("li",[s._v("INC: "),t("code",[s._v("i++")]),s._v("と同じ")]),s._v(" "),t("li",[s._v("DEC: "),t("code",[s._v("i--")]),s._v("と同じ")]),s._v(" "),t("li",[s._v("AND,OR,XOR: そのまま")])]),s._v(" "),t("h3",{attrs:{id:"制御"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#制御"}},[s._v("#")]),s._v(" 制御")]),s._v(" "),t("ul",[t("li",[s._v("CALL: 関数を呼び出し、戻りアドレスをスタック上にプッシュする命令")]),s._v(" "),t("li",[s._v("NOP: 何もしない命令")]),s._v(" "),t("li",[s._v("INT: 割り込みを発生させる命令、後ろに付くオペランドの数字によって異なる処理を行う\n"),t("ul",[t("li",[s._v("例 "),t("code",[s._v("0xCC INT 3")]),s._v(" -> DebugBreak()")])])]),s._v(" "),t("li",[s._v("CMP,JMP: 比較してジャンプする命令")])]),s._v(" "),t("h2",{attrs:{id:"c言語の逆アセンブル"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c言語の逆アセンブル"}},[s._v("#")]),s._v(" C言語の逆アセンブル")]),s._v(" "),t("p",[s._v("リバースエンジニアリングにおいて、各関数がどのような役割を持っているか把握することが重要である。最終的には "),t("code",[s._v("CALL")]),s._v(" される関数がどのような引数を取り、どのような処理をするかを解明して行けるようにする。")]),s._v(" "),t("h3",{attrs:{id:"関数の基本的な構造"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#関数の基本的な構造"}},[s._v("#")]),s._v(" 関数の基本的な構造")]),s._v(" "),t("h4",{attrs:{id:"関数の始まり方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#関数の始まり方"}},[s._v("#")]),s._v(" 関数の始まり方")]),s._v(" "),t("p",[s._v("x86では呼び出し元関数のスタック領域を保持するため、呼び出し元のスタックのベースアドレスを保存する。")]),s._v(" "),t("div",{staticClass:"language-nasm extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nasm"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v("            push      "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; スタックのベースアドレスを保存")]),s._v("\n8B EC         mov       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("esp")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; 現在のスタックポインタアドレスをベースアドレスにする")]),s._v("\n")])])]),t("h4",{attrs:{id:"スタックを使う関数の始まり"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#スタックを使う関数の始まり"}},[s._v("#")]),s._v(" スタックを使う関数の始まり")]),s._v(" "),t("p",[s._v("関数内で使用するローカル変数などを確保するために、ESPを使用するデータサイズの大きさ確保する。")]),s._v(" "),t("div",{staticClass:"language-nasm extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nasm"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v("            push      "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),s._v("\n8B EC         mov       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("esp")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v(" EC "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("      sub       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("esp")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50h")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; 50hのサイズをローカル変数のスタックとして利用する")]),s._v("\n")])])]),t("h4",{attrs:{id:"終わり方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#終わり方"}},[s._v("#")]),s._v(" 終わり方")]),s._v(" "),t("p",[s._v("呼び出し元のスタックのベースアドレスを ESB に戻し、関数を終了する。なお、関数の終了時にはEAXに返り値が格納される。")]),s._v(" "),t("div",{staticClass:"language-nasm extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nasm"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),s._v(" EC         mov    "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("esp")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5D")]),s._v("            pop    "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; 呼び出し元のスタックのベースアドレスを戻す")]),s._v("\n")])])]),t("h3",{attrs:{id:"代表的な関数の呼び出し規約"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代表的な関数の呼び出し規約"}},[s._v("#")]),s._v(" 代表的な関数の呼び出し規約")]),s._v(" "),t("h4",{attrs:{id:"cdecl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdecl"}},[s._v("#")]),s._v(" __cdecl")]),s._v(" "),t("ul",[t("li",[s._v("インテルx86ベースのシステム上のC/C++で使われることが多い")]),s._v(" "),t("li",[s._v("関数への引数は右から左の順でスタックに積まれる")]),s._v(" "),t("li",[s._v("関数の戻り値は EAXに格納される")]),s._v(" "),t("li",[s._v("呼び出された側の関数ではEAX, ECX, EDXのレジスタの元の値を保存することなく使用してよい")]),s._v(" "),t("li",[s._v("呼び出し側の関数では必要ならば呼び出す前にそれらのレジスタをスタック上などに保存する")]),s._v(" "),t("li",[t("strong",[s._v("スタックポインターの処理は呼び出し側で行う")]),s._v(" "),t("ul",[t("li",[s._v("スタックポインターの値を引数を積む前の値に戻す処理")])])])]),s._v(" "),t("h4",{attrs:{id:"stdcall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stdcall"}},[s._v("#")]),s._v(" __stdcall")]),s._v(" "),t("ul",[t("li",[s._v("主にWin32 APIにおけるデファクトスタンダード")]),s._v(" "),t("li",[s._v("関数への引数は右から左の順でスタックに積まれる")]),s._v(" "),t("li",[s._v("関数の戻り値は EAXに格納される")]),s._v(" "),t("li",[t("strong",[s._v("関数内でスタックポインターの処理を行う")]),s._v(" "),t("ul",[t("li",[s._v("スタックポインターの値を引数を積む前の値に戻す処理")]),s._v(" "),t("li",[t("code",[s._v("retn 8")]),s._v(" のような形で関数が終わる")]),s._v(" "),t("li",[s._v("ただし、引数が可変長のときは、"),t("strong",[s._v("スタックポインターの処理は呼び出し側で行う")])])])])]),s._v(" "),t("h4",{attrs:{id:"fastcall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fastcall"}},[s._v("#")]),s._v(" __fastcall")]),s._v(" "),t("ul",[t("li",[s._v("高速処理ををしたいときに利用")]),s._v(" "),t("li",[s._v("関数の引数が2つ以下の場合、"),t("code",[s._v("push")]),s._v("を使用せず、ECX,EDXを経由して渡す")])]),s._v(" "),t("h4",{attrs:{id:"thiscall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thiscall"}},[s._v("#")]),s._v(" __thiscall")]),s._v(" "),t("ul",[t("li",[s._v("C++ のメンバー関数を呼ぶのに用いる")]),s._v(" "),t("li",[s._v("現在のオブジェクトポインターをECXに渡す")]),s._v(" "),t("li",[s._v("基本的な処理は__stdcallと同じ")])]),s._v(" "),t("h5",{attrs:{id:"thiscallの例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thiscallの例"}},[s._v("#")]),s._v(" __thiscallの例")]),s._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[s._v("Class CTemp\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  public"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MemberFunc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("div",{staticClass:"language-nasm extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nasm"}},[t("code",[s._v("mov    "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v(", dword ptr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14h")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v("\npush   "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v("\nmov    "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("edx")]),s._v(", dword ptr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10h")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v("\npush   "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("edx")]),s._v("\nlea    "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ecx")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; callの前にオブジェクトポインタをecxに格納")]),s._v("\ncall   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("402000h")]),s._v("\n")])])]),t("h3",{attrs:{id:"基本的なif文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本的なif文"}},[s._v("#")]),s._v(" 基本的なif文")]),s._v(" "),t("p",[s._v("条件文のコードは以下の流れで行われる。")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("cmp")]),s._v("でオペランドを比較し、フラグレジスタを更新")]),s._v(" "),t("li",[s._v("後に"),t("code",[s._v("jnz")]),s._v(","),t("code",[s._v("jz")]),s._v("でフラグレジスタの内容を確認し、条件分岐を決定")])]),s._v(" "),t("h3",{attrs:{id:"基本的なループ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本的なループ"}},[s._v("#")]),s._v(" 基本的なループ")]),s._v(" "),t("p",[s._v("以下の例は、ローカル変数の加算処理を行い"),t("code",[s._v("i++")]),s._v("、ループ条件と比較する部分。特定の値と比較し、結果的に処理を再び行うとこを判定しているものはループだと思えば良い。")]),s._v(" "),t("div",{staticClass:"language-nasm extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nasm"}},[t("code",[s._v("mov  "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v(","),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; [ebp-8] にループカウンターが格納されている")]),s._v("\nadd  "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v(","),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; カウンターの値を加算")]),s._v("\nmov  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v(","),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; ループを更新")]),s._v("\ncmp  dword ptr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100h")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; カウンターの値と 100h を比較")]),s._v("\njg   short loc_401035        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; [ebp-8]の値が 100hより大きい場合ジャンプ")]),s._v("\n")])])]),t("h3",{attrs:{id:"構造体とapiコール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#構造体とapiコール"}},[s._v("#")]),s._v(" 構造体とAPIコール")]),s._v(" "),t("p",[s._v("C言語の文法において構造体は重要な要素である。プログラムを分析する際には構造体の各メンバーがどのように使用されているか確認する必要がある。リバースエンジニアリングにおいて、スタックポインターをみて、構造体の大きさやそのメンバーを把握する必要がある。いつスタックを確保し、確保したスタックをどのように使用したかによって、構造体がどのようなものか推定していく必要がある。\n以下の例は、CreateProcessの呼び出しにおいて構造体 "),t("code",[s._v("STARTUPINFO")]),s._v(" と構造体 "),t("code",[s._v("PROCESS_INFORMATION")]),s._v(" を使ったCのコードとそのアセンブリコードである。")]),s._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// process_create.c")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("RunProcess")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  STARTUPINFO si"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  PROCESS_INFORMATION pi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ZeroMemory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("si"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sizeof")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("si"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  si"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cb "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sizeof")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("si"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ZeroMemory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("pi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sizeof")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Start the child process.")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("CreateProcess")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ChildProcess"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" FALSE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("si"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("pi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CreateProcess failed.\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Wait until child process exit")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("WaitForSingleObject")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" pi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hProcess"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" INFINITE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Close process and thread handles.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("CloseHandle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" pi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hProcess "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("CloseHandle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" pi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hThread "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("div",{staticClass:"language-nasm extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nasm"}},[t("code",[s._v("push      "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),s._v("\nmov       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("esp")]),s._v("\nsub       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("esp")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("54h")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; 0x54byte分のスタックを増加している")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("44h")]),s._v("                          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; ZeroMemory( &si, sizeof(si)); に対応する部分")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; スタックの0x44byteを初期化")]),s._v("\nlea       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v(",dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ss")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v("                          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";")]),s._v("\ncall      calling.004011A0             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; ZeroMemoryの呼び出し")]),s._v("\nadd       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("esp")]),s._v(",0C\nmov       dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ss")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v(","),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("44h")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; movで構造体の１番目のメンバー変数の処理。si.cb = sizeof(si)に該当")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("                           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; ZeroMemory( &pi, sizeof(pi)) に対応する部分")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; スタックの0x10byteを初期化")]),s._v("\nlea       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ecx")]),s._v(",dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ss")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ecx")]),s._v("                          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v(";")]),s._v("\ncall      calling.004011A0             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; ZeroMemoryの呼び出し")]),s._v("\nadd       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("esp")]),s._v(",0C\nlea       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("edx")]),s._v(",dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ss")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("edx")]),s._v("                          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; CreateProcessAの最後の引数をスタックに積む。ここでは`&pi`に該当。")]),s._v("\nlea       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v(",dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ss")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v("                          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; CreateProcessAの後ろから2番目の引数を積む。ここでは`&si`に該当。")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\npush      calling"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".00407030")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; CreateProcessAの呼び出し")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ncall      dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ds")]),s._v(":CreateProcessA\ntest      "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v(","),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v("                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; CreateProicessAの実行結果の確認。test eax,eax で値が0であるか確認。")]),s._v("\n                                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; test は and と実行している演算は同じ。レジストリフラグの更新が異なる。")]),s._v("\njnz       short calling"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".00401061")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("; NULLリターン時のエラー処理")]),s._v("\npush      calling"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".00407040")]),s._v("\ncall      calling.0040116F\nadd       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("esp")]),s._v(","),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\njmp       short calling"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".00401081")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmov       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ecx")]),s._v(",dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ss")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ecx")]),s._v("\ncall      dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ds")]),s._v(":WaitForSingleObject\nmov       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("edx")]),s._v(",dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ss")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("edx")]),s._v("\ncall      dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ds")]),s._v(":CloseHandle\nmov       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v(",dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ss")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("C"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("]")]),s._v("\npush      "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("eax")]),s._v("\ncall      dword ptr "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ds")]),s._v(":CloseHandle\nmov       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("esp")]),s._v(","),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),s._v("\npop       "),t("span",{pre:!0,attrs:{class:"token register variable"}},[s._v("ebp")]),s._v("\nretn\n")])])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[s._v("リバースエンジニアリングバイブル コード再創造の美学\n"),t("ul",[t("li",[s._v("https://book.impress.co.jp/books/1113101030")])])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);