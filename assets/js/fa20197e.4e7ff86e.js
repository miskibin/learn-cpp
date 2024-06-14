"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[136],{2951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(4848),r=n(8453);const o={},i="Memory",s={id:"memory",title:"Memory",description:"Heap",source:"@site/docs/6-memory.md",sourceDirName:".",slug:"/memory",permalink:"/learn-cpp/docs/memory",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/6-memory.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Header files",permalink:"/learn-cpp/docs/headers"},next:{title:"Raw pointers",permalink:"/learn-cpp/docs/pointers"}},l={},c=[{value:"Heap",id:"heap",level:2},{value:"Stack",id:"stack",level:2},{value:"Stack frame",id:"stack-frame",level:3},{value:"Differences",id:"differences",level:2},{value:"<code>New</code> keyword",id:"new-keyword",level:2},{value:"Delete",id:"delete",level:3},{value:"Debugging",id:"debugging",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"memory",children:"Memory"}),"\n",(0,a.jsx)(t.h2,{id:"heap",children:"Heap"}),"\n",(0,a.jsxs)(t.p,{children:["The heap is a region of your computer's memory that is not managed automatically for you, and is not as tightly managed by the CPU. It is a more free-floating region of memory (and is larger). To allocate memory on the heap, you must use ",(0,a.jsx)(t.code,{children:"new"})," and to deallocate memory, you must use ",(0,a.jsx)(t.code,{children:"delete"}),". Heap is more complex to use since you have to manage memory (allocate and deallocate) yourself, but it allows more flexibility as you can allocate and deallocate memory whenever you need to."]}),"\n",(0,a.jsx)(t.h2,{id:"stack",children:"Stack"}),"\n",(0,a.jsxs)(t.p,{children:["The stack is a region of your computer's memory that stores temporary variables created by each function (including the ",(0,a.jsx)(t.code,{children:"main()"})," function). The stack is a ",(0,a.jsx)(t.strong,{children:'"LIFO"'}),' (last in, first out) data structure, that is managed and optimized by the CPU quite closely. Every time a function declares a new variable, it is "pushed" onto the stack. Then every time a function exits, all of the variables pushed onto the stack by that function, are freed (they are "popped" off the stack). Stack memory is automatically managed for you.']}),"\n",(0,a.jsx)(t.h3,{id:"stack-frame",children:"Stack frame"}),"\n",(0,a.jsx)(t.p,{children:"A stack frame is a block of memory on the stack that stores the local variables, parameters, and return address of a function. When a function is called, a new stack frame is created and pushed onto the stack. When the function returns, the stack frame is popped off the stack."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"\nint* createArrayBad(int size) {\n    int array[size]; // array is created on the stack\n    return array; // returning the address of the array\n}\nint* createArrayOk(int size) {\n    int* array = new int[size]; // array is created on the heap\n    return array; // returning the address of the array\n}\n\nint main() {\n    int* arrayBAD = createArrayBad(10); // it is a dangling pointer\n    int* arrayOK = createArrayOk(10); // it is a dangling pointer\n    delete[] arrayOK; // deallocate the memory\n    // array is deallocated when createArray returns\n    // array is now a dangling pointer\n    return 0;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"differences",children:"Differences"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Lifetime"}),": Variables on the stack are automatically deallocated when they go out of scope. On the other hand, objects on the heap need to be manually deallocated or else you risk memory leak."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Size Limit"}),": The stack has a size limit that is determined at the start of the program, based on your computer's configuration. The heap, on the other hand, is only limited by the size of addressable memory."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Allocation and Deallocation Speed"}),": Allocating memory on the stack is much faster than allocating memory on the heap. This is because allocating memory on the stack is as simple as moving the stack pointer, while allocating memory on the heap requires more complex bookkeeping."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Fragmentation"}),": The heap can become fragmented as blocks of memory are allocated and deallocated in an arbitrary order, which can lead to inefficient use of memory. The stack does not suffer from fragmentation as it always deallocates memory in a LIFO order."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://media.geeksforgeeks.org/wp-content/uploads/20201210222125/Untitled4-660x361.png",alt:"memory"})}),"\n",(0,a.jsxs)(t.h2,{id:"new-keyword",children:[(0,a.jsx)(t.code,{children:"New"})," keyword"]}),"\n",(0,a.jsxs)(t.p,{children:["Finds block of memory that is big enough to hold the object and returns the address of that memory. It is used to allocate memory on the ",(0,a.jsx)(t.strong,{children:"heap"}),".\nIt also calls the constructor of the object."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"Entity *e = new Entity();\n"})}),"\n",(0,a.jsx)(t.p,{children:"It is equivalent to:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"Entity *e = (Entity*)malloc(sizeof(Entity));//allocate memory\nnew(e) Entity();//call constructor\n"})}),"\n",(0,a.jsx)(t.h3,{id:"delete",children:"Delete"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"delete e;\n"})}),"\n",(0,a.jsx)(t.p,{children:"It is equivalent to:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cpp",children:"e->~Entity();//call destructor\nfree(e);//deallocate memory\n"})}),"\n",(0,a.jsx)(t.h2,{id:"debugging",children:"Debugging"}),"\n",(0,a.jsxs)(t.p,{children:["Why there are a lot of ",(0,a.jsx)(t.code,{children:"CC"})," values when we debug the program?"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"CC"})," is a register that holds the address of the next instruction to be executed. It is used by the debugger to show the current instruction."]}),"\n",(0,a.jsx)(t.admonition,{title:"Debbuging slow our program down",type:"tip",children:(0,a.jsxs)(t.p,{children:["Debugger do extra work like setting ",(0,a.jsx)(t.code,{children:"CC"})," values for us. It slows down the program."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(6540);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);