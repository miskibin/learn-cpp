"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[196],{8920:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=s(4848),i=s(8453);const o={},c="Classes",r={id:"classes_and_structs",title:"Classes",description:"Definition",source:"@site/docs/9-classes_and_structs.mdx",sourceDirName:".",slug:"/classes_and_structs",permalink:"/docs/classes_and_structs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/9-classes_and_structs.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"References in C++",permalink:"/docs/references"}},a={},d=[{value:"Definition",id:"definition",level:3}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"classes",children:"Classes"}),"\n",(0,t.jsx)(n.h3,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"class Player {\npublic:\n    int x, y;\n    int speed;\n    \n    void Move(int xa, int ya) {\n        x += xa * speed; \n        y += ya * speed;\n    }\n};\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["Why don't we need ",(0,t.jsx)(n.code,{children:"this"})," keyword here?"]}),(0,t.jsx)(n.p,{children:"it's not necessary to use this to access members within the object's methods, unless there's a naming conflict."})]}),"\n",(0,t.jsx)(n.h1,{id:"structs",children:"Structs"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>r});var t=s(6540);const i={},o=t.createContext(i);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);