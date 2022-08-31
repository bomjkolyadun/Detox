"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4100],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:o,block:d,defaultValue:m,values:h,groupId:f,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:x}=(0,s.U)(),[N,T]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==N&&g.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,a=j.indexOf(t),n=g[a].value;n!==N&&(O(t),T(n),null!=f&&x(f,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;a=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var r;const t=j.indexOf(e.currentTarget)-1;a=null!=(r=j[t])?r:j[j.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:D,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},8405:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={id:"mocha",slug:"guide/mocha",title:"Mocha Setup Guide",sidebar_label:"Mocha Setup Guide"},s=void 0,u={unversionedId:"mocha",id:"version-19.x/mocha",title:"Mocha Setup Guide",description:"Mocha Setup Guide",source:"@site/versioned_docs/version-19.x/Guide.Mocha.md",sourceDirName:".",slug:"/guide/mocha",permalink:"/Detox/docs/guide/mocha",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.Mocha.md",tags:[],version:"19.x",frontMatter:{id:"mocha",slug:"guide/mocha",title:"Mocha Setup Guide",sidebar_label:"Mocha Setup Guide"},sidebar:"tutorialSidebar",previous:{title:"Jest Setup Guide",permalink:"/Detox/docs/guide/jest"},next:{title:"Parallel Test Execution",permalink:"/Detox/docs/guide/parallel-test-execution"}},c={},p=[{value:"Mocha Setup Guide",id:"mocha-setup-guide",level:2},{value:"Installation",id:"installation",level:3},{value:"1. Install Mocha",id:"1-install-mocha",level:4},{value:"2. Set up Test-code Scaffolds",id:"2-set-up-test-code-scaffolds",level:4}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mocha-setup-guide"},"Mocha Setup Guide"),(0,r.kt)("p",null,"This guide describes how to install ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org"},"Mocha")," as a test runner to be used by Detox for running the E2E tests."),(0,r.kt)("p",null,"Note that while Mocha is lightweight and easy to set up, we nevertheless encourage usage of ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/guide/jest"},"Jest")," instead, for 2 main reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Mocha does not support parallel-test execution (i.e. splitting the test suites between concurrently running test devices/emulators)."),(0,r.kt)("li",{parentName:"ol"},"Advanced integration features such as taking device screenshots on failures will not be as timely accurate as with working with Jest.")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disclaimer:")," Here we focus on installing Detox on ",(0,r.kt)("em",{parentName:"p"},"new projects"),". If you\u2019re migrating a project with an existing Detox installation, please apply some common sense while using this guide."),(0,r.kt)("h4",{id:"1-install-mocha"},"1. Install Mocha"),(0,r.kt)("p",null,"Before starting with Mocha setup, be sure to complete the preliminary sections of the ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/introduction/getting-started"},"Getting Started")," guide."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install mocha --save-dev --no-package-lock\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add mocha --dev --no-lockfile\n")))),(0,r.kt)("h4",{id:"2-set-up-test-code-scaffolds"},"2. Set up Test-code Scaffolds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"detox init -r mocha\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," errors occurring in the process may appear in red.")),(0,r.kt)("p",null,"If things go well, you should to have this set up:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"e2e/")," folder in your project root"),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"e2e/.mocharc.json")," file; ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native/e2e/.mocharc.json"},"example")),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"e2e/init.js")," file; ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native/e2e/init.js"},"example")),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"e2e/firstTest.spec.js")," file with content similar to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native/e2e/example.spec.js"},"this"),".")))}m.isMDXComponent=!0}}]);