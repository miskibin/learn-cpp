"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[689],{1860:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var t=r(4848),a=r(8453),s=r(1470),i=r(9365);const l={},o="References in C++",c={id:"references",title:"References in C++",description:"What is a reference?",source:"@site/docs/8-references.mdx",sourceDirName:".",slug:"/references",permalink:"/learn-cpp/docs/references",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/8-references.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raw pointers",permalink:"/learn-cpp/docs/pointers"},next:{title:"strings",permalink:"/learn-cpp/docs/strings"}},u={},d=[{value:"What is a reference?",id:"what-is-a-reference",level:3},{value:"Example",id:"example",level:4},{value:"Using Pointers and References in Functions",id:"using-pointers-and-references-in-functions",level:3},{value:"When to Use References Over Pointers",id:"when-to-use-references-over-pointers",level:3},{value:"References in loops:",id:"references-in-loops",level:3}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"references-in-c",children:"References in C++"}),"\n",(0,t.jsx)(n.h3,{id:"what-is-a-reference",children:"What is a reference?"}),"\n",(0,t.jsxs)(n.p,{children:["A reference in C++ is an ",(0,t.jsx)(n.strong,{children:"alias"}),", or an alternative name, for an existing variable. Once a reference is initialized to a variable, either the variable name or the reference name can be used to refer to the variable."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"int x = 5; // Declare an integer variable\nint &ref = x; // Declare a reference to the variable\nLOG(ref); // Outputs: 5\nLOG(&ref); // Outputs: memory address of x (e.g., 0000006CC94FFAF0)\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"references are immutable",type:"warning",children:(0,t.jsx)(n.p,{children:"Once a reference is initialized to a variable, it cannot be changed to refer to another variable. Pointers can."})}),"\n",(0,t.jsx)(n.h3,{id:"using-pointers-and-references-in-functions",children:"Using Pointers and References in Functions"}),"\n",(0,t.jsxs)(s.A,{defaultValue:"pointers",values:[{label:"Using Pointers",value:"pointers"},{label:"Using References",value:"references"}],children:[(0,t.jsx)(i.A,{value:"pointers",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"void increment(int* value) {\n    // value++; // This would increment the address of the pointer, not the value it points to.\n    (*value)++; // This increments the value that the pointer points to.\n}\n\nint main() {\n    int x = 5;\n    increment(&x); // Pass the address of x to the function\n    LOG(x); // Outputs: 6\n}\n"})})}),(0,t.jsx)(i.A,{value:"references",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"void increment(int  &value) {\n    value++;\n}\n\nint main() {\n    int x = 5;\n    increment(x);\n    LOG(x); // Outputs: 6\n}\n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{title:"arrays",type:"warning",children:[(0,t.jsx)(n.p,{children:"arrays decay to pointers when passed to functions, so they can't be passed by reference in the same way as other types. However, you can pass an array by reference by wrapping it in a std::array or std::vector, or by using a reference to a pointer."}),(0,t.jsx)(n.p,{children:"Workaround:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"void increment(int (&arr)[5]) {\n    for (int i = 0; i < 5; i++) {\n        arr[i]++;\n    }\n}\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"when-to-use-references-over-pointers",children:"When to Use References Over Pointers"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simplicity"}),": References are simpler to use than pointers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Safety"}),": References cannot be ",(0,t.jsx)(n.code,{children:"NULL"})," and are guaranteed to refer to a valid object."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Readability"}),": References make the code more readable and less cluttered."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"references-in-loops",children:"References in loops:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"\nfor(auto &element : container){\n    // do something with element\n    element++; // this would increment the value of the element in the container\n}\n\nfor (auto element : container){\n    // do something with element\n    element++; // this would increment the value of the copy of the element in the container\n}\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(6540),a=r(4164),s=r(3104),i=r(6347),l=r(205),o=r(7485),c=r(1682),u=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:r,groupId:a}),[m,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(6540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);