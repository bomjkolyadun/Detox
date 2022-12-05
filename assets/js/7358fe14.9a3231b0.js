"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return a?r.createElement(b,o(o({ref:t},d),{},{components:a})):r.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),c=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){const{lazy:t,block:a,defaultValue:o,values:p,groupId:m,className:b}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??k.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,i.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[N,x]=(0,n.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:D}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==N&&f.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,a=w.indexOf(t),r=f[a].value;r!==N&&(D(t),x(r),null!=m&&y(m,String(r)))},T=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},b)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:O},o,{className:(0,l.Z)("tabs__item",u,o?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,n.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},8092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=a(7462),n=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={},s="detox",c={unversionedId:"cli/overview",id:"version-20.x/cli/overview",title:"detox",description:"Detox CLI lets you operate Detox from command line.",source:"@site/versioned_docs/version-20.x/cli/overview.md",sourceDirName:"cli",slug:"/cli/overview",permalink:"/Detox/docs/cli/overview",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-20.x/cli/overview.md",tags:[],version:"20.x",frontMatter:{},sidebar:"apiSidebar",previous:{title:"Test runner",permalink:"/Detox/docs/config/testRunner"},next:{title:"detox init",permalink:"/Detox/docs/cli/init"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Commands",id:"commands",level:2},{value:"Options",id:"options",level:2}],p={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"detox"},"detox"),(0,n.kt)("p",null,"Detox CLI lets you operate Detox from command line."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"detox-cli")," globally via ",(0,n.kt)("a",{parentName:"p",href:"http://npmjs.org/detox-cli"},"npm"),":"),(0,n.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install detox-cli --global\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add detox-cli\n")))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"detox <command> [options]\n")),(0,n.kt)("h2",{id:"commands"},"Commands"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Command"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Detox/docs/cli/init"},"init")),(0,n.kt)("td",{parentName:"tr",align:null},"Create initial E2E tests folder for Detox.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Detox/docs/cli/build"},"build")),(0,n.kt)("td",{parentName:"tr",align:null},"Run the command defined in 'build' property of the specified configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Detox/docs/cli/test"},"test")),(0,n.kt)("td",{parentName:"tr",align:null},"Initiating your test suite.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Detox/docs/cli/recorder"},"recorder")),(0,n.kt)("td",{parentName:"tr",align:null},"Starts a ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/wix/DetoxRecorder"},"Detox Recorder")," recording.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Detox/docs/cli/build-framework-cache"},"build-framework-cache")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"MacOS only.")," Builds Detox.framework to ","~","/Library/Detox. The framework cache is specific for each combination of Xcode and Detox versions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Detox/docs/cli/clean-framework-cache"},"clean-framework-cache")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"MacOS only.")," Deletes all compiled framework binaries from ","~","/Library/Detox, they will be rebuilt on 'npm install' or when running 'build-framework-cache'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Detox/docs/cli/rebuild-framework-cache"},"rebuild-framework-cache")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"MacOS only.")," Rebuilds the Detox cache.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Detox/docs/cli/reset-lock-file"},"reset-lock-file")),(0,n.kt)("td",{parentName:"tr",align:null},"Resets all Detox lock files. Useful when you need to run multiple ",(0,n.kt)("inlineCode",{parentName:"td"},"detox test \u2026 --keepLockFile")," commands in parallel.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/Detox/docs/cli/run-server"},"run-server")),(0,n.kt)("td",{parentName:"tr",align:null},"Starts a standalone Detox server.")))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Options"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"--version"),(0,n.kt)("td",{parentName:"tr",align:null},"Show version number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"--help"),(0,n.kt)("td",{parentName:"tr",align:null},"Show help")))))}m.isMDXComponent=!0}}]);