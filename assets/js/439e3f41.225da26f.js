"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[976],{1810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(4848),s=t(8453),i=t(1470),a=t(9365);const l={},c=void 0,o={id:"strings",title:"strings",description:"\ud83d\udcca String",source:"@site/docs/13-strings.mdx",sourceDirName:".",slug:"/strings",permalink:"/learn-cpp/docs/strings",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/13-strings.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"References in C++",permalink:"/learn-cpp/docs/references"},next:{title:"Copying and Moving",permalink:"/learn-cpp/docs/copying"}},d={},u=[{value:"\ud83d\udcca String",id:"-string",level:2},{value:"\ud83d\udd0d How does the computer know where the string ends?",id:"-how-does-the-computer-know-where-the-string-ends",level:3},{value:"\ud83c\udff7\ufe0f String literals",id:"\ufe0f-string-literals",level:2},{value:"\ud83d\udd24 Using string literals",id:"-using-string-literals",level:3},{value:"\ud83d\udc40 String views",id:"-string-views",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"-string",children:"\ud83d\udcca String"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"string"})," is a sequence of characters. In C++, strings are represented by the ",(0,r.jsx)(n.code,{children:"std::string"})," class, which is part of the C++ Standard Library. You can create a string by enclosing characters in double quotes."]}),"\n",(0,r.jsxs)(i.A,{defaultValue:"basic",values:[{label:"Basic Usage",value:"basic"},{label:"String Concatenation",value:"concat"}],children:[(0,r.jsx)(a.A,{value:"basic",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'#include <string>\n\nstd::string name = "John Doe";\n\nstd::cout << name << std::endl;  // John Doe\n'})})}),(0,r.jsx)(a.A,{value:"concat",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'std::string firstName = "John";\nfirstName += " Doe";  // John Doe (string has `+=` operator)\nstd::string name = std::string("John") + "Doe"; // also works\n'})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"The following will not work:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'std::string name = "John" + "Doe";  // Error: "John" is not considered as a string\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"-how-does-the-computer-know-where-the-string-ends",children:"\ud83d\udd0d How does the computer know where the string ends?"}),"\n",(0,r.jsxs)(n.p,{children:["The computer knows where the string ends by using a null-terminator character (",(0,r.jsx)(n.code,{children:"\\0"}),"). The null-terminator is a special character that marks the end of a string. When the computer encounters a null-terminator, it knows that the string has ended."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"char str[2] = {'H', 'I'};\nstd::cout << str << std::endl;  // HI\ufffdp\ufffd\ufffd\ufffd\nchar str2[3] = {'H', 'I', '\\0'}; // \\0 is the null-terminator\nstd::cout << str2 << std::endl;  // HI\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\ufe0f-string-literals",children:"\ud83c\udff7\ufe0f String literals"}),"\n",(0,r.jsx)(n.p,{children:"String literals in C++ can have different prefixes to specify their encoding:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Prefix"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Example"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"None (Regular)"}),(0,r.jsxs)(n.td,{children:["A sequence of characters. Can include escape sequences like ",(0,r.jsx)(n.code,{children:"\\n"})," for a newline."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"Hello, World!\\n"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"R"})," (Raw)"]}),(0,r.jsx)(n.td,{children:"A sequence of characters that doesn't process escape sequences."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'R"(C:\\Users\\Username\\Documents)"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"u8"})," (UTF-8)"]}),(0,r.jsx)(n.td,{children:"A sequence of UTF-8 encoded characters."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'u8"\u3053\u3093\u306b\u3061\u306f"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"u"})," (UTF-16)"]}),(0,r.jsx)(n.td,{children:"A sequence of UTF-16 encoded characters."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'u"\\u00B1"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"U"})," (UTF-32)"]}),(0,r.jsx)(n.td,{children:"A sequence of UTF-32 encoded characters."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'U"\\U0001F600"'})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"L"})," (Wide)"]}),(0,r.jsx)(n.td,{children:"A sequence of wide characters."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'L"\u041f\u0440\u0438\u0432\u0435\u0442"'})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"-using-string-literals",children:"\ud83d\udd24 Using string literals"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'using namespace std::string_literals;\n\nstd::string str = "Hello, World!"s + " I am a string"s; // This works! It is a string now.\n'})}),"\n",(0,r.jsx)(n.h2,{id:"-string-views",children:"\ud83d\udc40 String views"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"std::string_view"})," is a non-owning reference to a string. It's more efficient than ",(0,r.jsx)(n.code,{children:"std::string"})," for read-only operations."]}),"\n",(0,r.jsxs)(i.A,{defaultValue:"comparison",values:[{label:"String vs String View",value:"comparison"},{label:"String View Slicing",value:"slicing"}],children:[(0,r.jsx)(a.A,{value:"comparison",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'#include <string>\n#include <string_view>\n#include <iostream>\n\nvoid processString(const std::string& s) {\n    // This potentially creates a copy of the string\n    std::cout << s << std::endl;\n}\n\nvoid processStringView(std::string_view sv) {\n    // This doesn\'t create a copy, just references the original string\n    std::cout << sv << std::endl;\n}\n\nint main() {\n    std::string original = "Hello, World!";\n    \n    processString(original);        // Might create a copy\n    processStringView(original);    // No copy, just a view\n    \n    processString("Hello, World!"); // Creates a temporary std::string\n    processStringView("Hello, World!"); // Uses the string literal directly\n}\n'})})}),(0,r.jsx)(a.A,{value:"slicing",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'#include <string_view>\n#include <iostream>\n\nint main() {\n    std::string_view sv = "Hello, World!";\n    \n    // Efficient substring operations\n    std::cout << sv.substr(0, 5) << std::endl;  // Outputs: Hello\n    std::cout << sv.substr(7) << std::endl;     // Outputs: World!\n    \n    // No memory allocation or copying in these operations\n}\n'})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"std::string_view"})," is typically just a pointer and a length, making it very cheap to copy and pass around. It can be used in constexpr contexts, which ",(0,r.jsx)(n.code,{children:"std::string"})," cannot."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var i=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(6540),s=t(4164),i=t(3104),a=t(6347),l=t(205),c=t(7485),o=t(1682),d=t(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[o,u]=g({queryString:t,groupId:s}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),f=(()=>{const e=o??x;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=l[t].value;s!==r&&(o(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(6540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);