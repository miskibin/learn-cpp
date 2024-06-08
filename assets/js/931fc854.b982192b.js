"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[876],{6489:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(4848),i=s(8453);const r={},a="Maps",o={id:"maps",title:"Maps",description:"Maps in C++ are associative containers that store elements formed by a combination of a key value and a mapped value. The key value is used to uniquely identify the element, and the mapped value is the content associated with the key. Maps are a part of the Standard Template Library (STL) and are very useful for efficiently searching, inserting, and deleting elements based on keys.",source:"@site/docs/101-maps.md",sourceDirName:".",slug:"/maps",permalink:"/learn-cpp/docs/maps",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/101-maps.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Strings and string literals",permalink:"/learn-cpp/docs/strings"}},l={},d=[{value:"Basics of <code>std::map</code>",id:"basics-of-stdmap",level:3},{value:"Key Characteristics",id:"key-characteristics",level:3},{value:"Common Operations",id:"common-operations",level:3},{value:"When to use <code>std::map</code>",id:"when-to-use-stdmap",level:3},{value:"Alternatives to <code>std::map</code>",id:"alternatives-to-stdmap",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"maps",children:"Maps"}),"\n",(0,t.jsx)(n.p,{children:"Maps in C++ are associative containers that store elements formed by a combination of a key value and a mapped value. The key value is used to uniquely identify the element, and the mapped value is the content associated with the key. Maps are a part of the Standard Template Library (STL) and are very useful for efficiently searching, inserting, and deleting elements based on keys."}),"\n",(0,t.jsxs)(n.h3,{id:"basics-of-stdmap",children:["Basics of ",(0,t.jsx)(n.code,{children:"std::map"})]}),"\n",(0,t.jsxs)(n.p,{children:["Here's a basic introduction to using ",(0,t.jsx)(n.code,{children:"std::map"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\n#include <map>\n\nint main() {\n    // Create a map of integers to strings\n    std::map<int, std::string> employee;\n\n    // Insert elements using insert function\n    employee.insert(std::pair<int, std::string>(101, "John"));\n    employee.insert(std::pair<int, std::string>(102, "Alice"));\n\n    // Insert elements using array index notation\n    employee[103] = "Bob";\n\n    // Access elements\n    std::cout << "Employee with ID 101: " << employee[101] << std::endl;\n\n    // Iterate over elements\n    for (auto& emp : employee) {\n        std::cout << "ID: " << emp.first << ", Name: " << emp.second << std::endl;\n    }\n\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"key-characteristics",children:"Key Characteristics"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Ordering"}),": The elements in a ",(0,t.jsx)(n.code,{children:"std::map"})," are always sorted by their keys; the default criteria is to use the ",(0,t.jsx)(n.code,{children:"<"})," operator. This ordering facilitates efficient lookups and range queries."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Unique Keys"}),": Each key in a ",(0,t.jsx)(n.code,{children:"std::map"})," must be unique. No two elements can have the same key."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Element Access"}),": Elements can be accessed using their keys. If you access a key that does not exist, ",(0,t.jsx)(n.code,{children:"std::map"})," will automatically create a new element with that key."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Insertions and Deletions"}),": These operations do not invalidate pointers, references, and iterators to other elements in the map."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"common-operations",children:"Common Operations"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Insert"}),": Inserts new elements or initializes elements if the key does not already exist."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Erase"}),": Removes elements by their key or by their iterator."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Find"}),": Searches the container for an element with a specific key and returns an iterator to it if found, otherwise returns an iterator to ",(0,t.jsx)(n.code,{children:"end()"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Count"}),": Returns the number of elements matching a specific key (1 or 0 since all keys are unique)."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"when-to-use-stdmap",children:["When to use ",(0,t.jsx)(n.code,{children:"std::map"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When you need a natural ordering of the elements by key."}),"\n",(0,t.jsx)(n.li,{children:"When you require elements to be indexed by a key."}),"\n",(0,t.jsx)(n.li,{children:"When you need to ensure every key is unique."}),"\n",(0,t.jsx)(n.li,{children:"When you need efficient lookup and removal of elements based on a key."}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"alternatives-to-stdmap",children:["Alternatives to ",(0,t.jsx)(n.code,{children:"std::map"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"std::unordered_map"})}),": Offers faster operations in many scenarios because it uses a hash table internally. However, it does not order elements."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"std::multimap"})}),": Similar to ",(0,t.jsx)(n.code,{children:"std::map"})," but allows multiple elements to have the same key."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"These maps are powerful data structures that are integral for data handling where associating unique keys with specific values is necessary. They enhance the efficiency and readability of the code, making operations on the data straightforward and optimal in terms of performance."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);