"use strict";(self.webpackChunkcpp_learn=self.webpackChunkcpp_learn||[]).push([[604],{2863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=t(4848),i=t(8453);const r={},a="Interfaces in C++",c={id:"interfaces",title:"Interfaces in C++",description:"In C++, interfaces are implemented using abstract classes, defined by having at least one pure virtual function. These classes cannot be instantiated directly and must be extended by other classes. Interfaces enforce that all derived classes implement specific behaviors.",source:"@site/docs/12-interfaces.md",sourceDirName:".",slug:"/interfaces",permalink:"/learn-cpp/docs/interfaces",draft:!1,unlisted:!1,editUrl:"https://github.com/michalskibinski109/learn-cpp/tree/main/docs/12-interfaces.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Enums",permalink:"/learn-cpp/docs/enums"},next:{title:"Strings and string literals",permalink:"/learn-cpp/docs/strings"}},l={},o=[{value:"Simple Interface Example",id:"simple-interface-example",level:2},{value:"More Complex Interface",id:"more-complex-interface",level:2},{value:"Key Points",id:"key-points",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"interfaces-in-c",children:"Interfaces in C++"}),"\n",(0,s.jsx)(n.p,{children:"In C++, interfaces are implemented using abstract classes, defined by having at least one pure virtual function. These classes cannot be instantiated directly and must be extended by other classes. Interfaces enforce that all derived classes implement specific behaviors."}),"\n",(0,s.jsx)(n.admonition,{title:"in python it would be",type:"note",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from abc import ABC, abstractmethod\n\nclass Interface(ABC):\n    @abstractmethod\n    def method(self):\n        pass\n"})})}),"\n",(0,s.jsx)(n.h2,{id:"simple-interface-example",children:"Simple Interface Example"}),"\n",(0,s.jsx)(n.p,{children:"Here's a straightforward example using a pure virtual function to define an interface in C++:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'class Entity {\npublic:\n    virtual void getClassName() = 0;  // Pure virtual function\n};\n\nclass Player : public Entity {\npublic:\n    void getClassName() override {\n        std::cout << "Player" << std::endl;\n    }\n};\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this setup, ",(0,s.jsx)(n.code,{children:"Entity"})," serves as an interface, and ",(0,s.jsx)(n.code,{children:"Player"})," is a concrete class that implements the interface."]}),"\n",(0,s.jsx)(n.h2,{id:"more-complex-interface",children:"More Complex Interface"}),"\n",(0,s.jsx)(n.p,{children:"Interfaces can be used for more complex behaviors, such as enforcing a printable capability on various objects:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'class Printable {\npublic:\n    virtual std::string print() = 0;  // Interface method\n};\n\nclass Entity : public Printable {\npublic:\n    std::string name;\n    Entity(const std::string& name) : name(name) {}\n    std::string print() override {\n        return name;\n    }\n};\n\nclass Player : public Entity {\npublic:\n    using Entity::Entity;  // Inherits constructor\n};\n\nvoid print(Printable* obj) {\n    std::cout << obj->print() << std::endl;\n}\n\nint main() {\n    Entity e("Entity");\n    print(&e);\n    print(new Player("Player"));  // Uses Entity\'s print as Player doesn\'t override it\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"key-points",children:"Key Points"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pure Virtual Functions"}),": Define a pure virtual function with ",(0,s.jsx)(n.code,{children:"= 0"})," to make a class abstract."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Override"}),": Derived classes must override all pure virtual functions to be instantiated."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Memory Management"}),": Be cautious with raw pointers; use smart pointers like ",(0,s.jsx)(n.code,{children:"std::unique_ptr"})," for safer memory management."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Polymorphism"}),": Abstract classes enable polymorphism, allowing methods to operate on objects of different classes through interface pointers."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);