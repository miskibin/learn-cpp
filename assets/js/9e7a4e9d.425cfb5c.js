"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[395],{2276:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=s(4848),t=s(8453);const r={},d="Enums",i={id:"enums",title:"Enums",description:"Enums, short for enumerations, are a way of defining a type in C++ that consists of named constants. Enums are used when we know all possible values a variable can have, and we want to restrict it to those values to avoid errors and make the code more readable.",source:"@site/docs/11-enums.md",sourceDirName:".",slug:"/enums",permalink:"/learn-cpp/docs/enums",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/11-enums.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Visibility in classes",permalink:"/learn-cpp/docs/visibility"},next:{title:"Interfaces in C++",permalink:"/learn-cpp/docs/interfaces"}},c={},o=[{value:"Different types of enums",id:"different-types-of-enums",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"enums",children:"Enums"}),"\n",(0,a.jsx)(n.p,{children:"Enums, short for enumerations, are a way of defining a type in C++ that consists of named constants. Enums are used when we know all possible values a variable can have, and we want to restrict it to those values to avoid errors and make the code more readable."}),"\n",(0,a.jsx)(n.p,{children:"Here's a basic example of an enum:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"enum Day {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, ",(0,a.jsx)(n.code,{children:"Day"})," is an enum type that can have one of seven values: ",(0,a.jsx)(n.code,{children:"Sunday"}),", ",(0,a.jsx)(n.code,{children:"Monday"}),", ",(0,a.jsx)(n.code,{children:"Tuesday"}),", ",(0,a.jsx)(n.code,{children:"Wednesday"}),", ",(0,a.jsx)(n.code,{children:"Thursday"}),", ",(0,a.jsx)(n.code,{children:"Friday"}),", or ",(0,a.jsx)(n.code,{children:"Saturday"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"We can declare a variable of this enum type and assign it a value like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"Day today = Monday;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["By default, the first value in an enum (in this case, ",(0,a.jsx)(n.code,{children:"Sunday"}),") has a value of 0, and each subsequent value is one greater than the value of the previous one. So in this example, ",(0,a.jsx)(n.code,{children:"Sunday"})," is 0, ",(0,a.jsx)(n.code,{children:"Monday"})," is 1, ",(0,a.jsx)(n.code,{children:"Tuesday"})," is 2, and so on."]}),"\n",(0,a.jsx)(n.p,{children:"We can also specify the values of the enum members ourselves:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"enum Day {Sunday = 1, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, ",(0,a.jsx)(n.code,{children:"Sunday"})," is 1, ",(0,a.jsx)(n.code,{children:"Monday"})," is 2, ",(0,a.jsx)(n.code,{children:"Tuesday"})," is 3, and so on."]}),"\n",(0,a.jsx)(n.h3,{id:"different-types-of-enums",children:"Different types of enums"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"enum Day : char {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In this example, ",(0,a.jsx)(n.code,{children:"Day"})," is an enum type that uses ",(0,a.jsx)(n.code,{children:"char"})," as its underlying type. This means that each enum member will be stored as a ",(0,a.jsx)(n.code,{children:"char"})," value, which can be useful when you want to save memory or when you need to interact with APIs that expect ",(0,a.jsx)(n.code,{children:"char"})," values."]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var a=s(6540);const t={},r=a.createContext(t);function d(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);