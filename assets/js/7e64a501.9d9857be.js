"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[682],{5590:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var t=e(4848),o=e(8453);const c={},r="Implicit and Explicit Conversion",s={id:"implicit_and_explicit",title:"Implicit and Explicit Conversion",description:"Implicit Conversion",source:"@site/docs/17-implicit_and_explicit.md",sourceDirName:".",slug:"/implicit_and_explicit",permalink:"/learn-cpp/docs/implicit_and_explicit",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/17-implicit_and_explicit.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ternary Operators in C++",permalink:"/learn-cpp/docs/ternary_operators"},next:{title:"=, new, delete, ==, +=, etc.",permalink:"/learn-cpp/docs/operators"}},a={},l=[{value:"Implicit Conversion",id:"implicit-conversion",level:2},{value:"Explicit Conversion",id:"explicit-conversion",level:2}];function d(n){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"implicit-and-explicit-conversion",children:"Implicit and Explicit Conversion"}),"\n",(0,t.jsx)(i.h2,{id:"implicit-conversion",children:"Implicit Conversion"}),"\n",(0,t.jsx)(i.p,{children:"In C++, implicit conversion allows us to use a value of one type where a value of another type is expected. This is done automatically by the compiler."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:'class Entity {\n    std::string m_Name;\n    int m_Age;\n\npublic:\n    Entity(const std::string& name)\n        : m_Name(name), m_Age(-1) {}\n    Entity(int age)\n        : m_Name("Unknown"), m_Age(age) {}\n};\n\nint main(){\n    Entity a = "Name"; // calling first constructor\n    Entity b = 12; // calling second constructor (using implicit conversion)\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["In the above code, we're able to assign a string and an integer to an ",(0,t.jsx)(i.code,{children:"Entity"})," object due to implicit conversion."]}),"\n",(0,t.jsxs)(i.p,{children:["Let's consider a function that takes an ",(0,t.jsx)(i.code,{children:"Entity"})," object as a parameter:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:'void PrintEntity(const Entity& entity){\n    //print entity\n}\n\nint main(){\n    PrintEntity("Name"); // It won\'t work!!!\n    PrintEntity(std::string("Name")); // implicit conversion \n    PrintEntity(12); // implicit conversion -> PrintEntity(Entity(12))\n}\n'})}),"\n",(0,t.jsx)(i.admonition,{title:"why it won't work?",type:"warning",children:(0,t.jsxs)(i.p,{children:["we are passing a ",(0,t.jsx)(i.code,{children:"char*"})," instead of ",(0,t.jsx)(i.code,{children:"std::string"}),". Therefore, it would require two implicit conversions to convert ",(0,t.jsx)(i.code,{children:"char*"})," to ",(0,t.jsx)(i.code,{children:"std::string"})," and then to ",(0,t.jsx)(i.code,{children:"Entity"}),". C++ doesn't allow more than one user-defined implicit conversion."]})}),"\n",(0,t.jsx)(i.h2,{id:"explicit-conversion",children:"Explicit Conversion"}),"\n",(0,t.jsxs)(i.p,{children:["Explicit conversion in C++ is a way to prevent implicit conversions for certain class types. This is done using the ",(0,t.jsx)(i.code,{children:"explicit"})," keyword before the constructor that you want to prevent from being used in implicit conversions."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:'class Entity {\n    std::string m_Name;\n    int m_Age;\n\npublic:\n    explicit Entity(const std::string& name)\n        : m_Name(name), m_Age(-1) {}\n    explicit Entity(int age)\n        : m_Name("Unknown"), m_Age(age) {}\n};\n\nint main(){\n    Entity a = "Name"; // Error: no suitable conversion from "const char [5]" to "Entity"\n    Entity b = 12; // Error: no suitable conversion from "int" to "Entity"\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["In the above code, we've marked the constructors as ",(0,t.jsx)(i.code,{children:"explicit"}),", which prevents them from being used in implicit conversions. Now, we must explicitly convert the values to ",(0,t.jsx)(i.code,{children:"Entity"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-cpp",children:'int main(){\n    Entity a = Entity("Name"); // OK\n    Entity b = Entity(12); // OK\n}\n'})})]})}function p(n={}){const{wrapper:i}={...(0,o.R)(),...n.components};return i?(0,t.jsx)(i,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>s});var t=e(6540);const o={},c=t.createContext(o);function r(n){const i=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function s(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(c.Provider,{value:i},n.children)}}}]);