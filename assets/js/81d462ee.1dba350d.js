"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[952],{2214:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var s=i(4848),o=i(8453);const r={},c="Compilers Overview",t={id:"compiler",title:"Compilers Overview",description:"A compiler translates source code into machine code. The process involves several stages:",source:"@site/docs/1-compiler.md",sourceDirName:".",slug:"/compiler",permalink:"/learn-cpp/docs/compiler",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/1-compiler.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Linker",permalink:"/learn-cpp/docs/linker"}},l={},d=[{value:"Preprocessing",id:"preprocessing",level:2},{value:"Compilation to Object File",id:"compilation-to-object-file",level:2},{value:"Some examples of preprocessor directives:",id:"some-examples-of-preprocessor-directives",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"compilers-overview",children:"Compilers Overview"}),"\n",(0,s.jsx)(n.p,{children:"A compiler translates source code into machine code. The process involves several stages:"}),"\n",(0,s.jsx)(n.h2,{id:"preprocessing",children:"Preprocessing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Directives"})," (",(0,s.jsx)(n.code,{children:"#"})," symbol) instruct the compiler for initial processing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"#include"}),": Inserts another file's content."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"#define"}),": Defines macros for code abbreviations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"#if"}),": Conditionally compiles code blocks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"#pragma"}),": Provides compiler-specific instructions, like ",(0,s.jsx)(n.code,{children:"#pragma once"})," to prevent multiple inclusions."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"compilation-to-object-file",children:"Compilation to Object File"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Translation Unit"}),": A single source file plus its included headers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:".i File"}),": Result of preprocessing, further compiled into assembly language."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:".o File"}),": The assembly is then compiled into an object file, a step closer to executable machine code."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"objdump -d -M intel -S file.o"})," to view an object file's assembly code in a readable format."]})}),"\n",(0,s.jsx)(n.h2,{id:"some-examples-of-preprocessor-directives",children:"Some examples of preprocessor directives:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#define LOG(x) std::cout << x << std::endl; // Macro for printing to console\n\n#define INTEGER int // Macro for using 'INTEGER' instead of 'int'\n\nINTEGER add(INTEGER a, INTEGER b) {\n  LOG(a); // Replaced with std::cout << a << std::endl;\n  return a + b;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, ",(0,s.jsx)(n.code,{children:"LOG(x)"})," is a macro that expands to ",(0,s.jsx)(n.code,{children:"std::cout << x << std::endl;"}),", providing a concise way to print messages to the console. Similarly, ",(0,s.jsx)(n.code,{children:"INTEGER"})," is a macro that expands to ",(0,s.jsx)(n.code,{children:"int"}),", making your code more readable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#if 1 // Always true in this case\nint FunctionThatWillHideWhenConditionFails() {\n  // Code here will be included during compilation\n}\n#endif\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>t});var s=i(6540);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);