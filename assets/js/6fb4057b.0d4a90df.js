"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6567],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),i=r(6010),o=r(2389),s=r(7392),l=r(7094),p=r(2466);const c="tabList__CuJ",d="tabItem_LNqP";function u(e){const{lazy:t,block:r,defaultValue:o,values:u,groupId:m,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,s.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=(0,l.U)(),[w,x]=(0,a.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:D}=(0,p.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&f.some((t=>t.value===e))&&x(e)}const T=e=>{const t=e.currentTarget,r=N.indexOf(t),n=f[r].value;n!==w&&(D(t),x(n),null!=m&&b(m,String(n)))},O=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=N.indexOf(e.currentTarget)+1;t=N[r]??N[0];break}case"ArrowLeft":{const r=N.indexOf(e.currentTarget)-1;t=N[r]??N[N.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},h)},f.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:O,onClick:T},o,{className:(0,i.Z)("tabs__item",d,o?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(u,(0,n.Z)({key:String(t)},e))}},9831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),i=r(5488),o=r(5162);const s={},l="Third-Party Drivers",p={unversionedId:"articles/third-party-drivers",id:"articles/third-party-drivers",title:"Third-Party Drivers",description:"Detox comes with built-in support for running on Android and iOS by choosing a driver type in your Detox configurations.",source:"@site/../docs/articles/third-party-drivers.md",sourceDirName:"articles",slug:"/articles/third-party-drivers",permalink:"/Detox/docs/next/articles/third-party-drivers",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/articles/third-party-drivers.md",tags:[],version:"current",frontMatter:{},sidebar:"apiSidebar",previous:{title:"How Detox Works",permalink:"/Detox/docs/next/articles/how-detox-works"}},c={},d=[{value:"How to Use a Third-party Driver",id:"how-to-use-a-third-party-driver",level:2},{value:"Writing a New Third-party Driver",id:"writing-a-new-third-party-driver",level:2},{value:"Anatomy of the Drivers",id:"anatomy-of-the-drivers",level:3},{value:"Implementation Details",id:"implementation-details",level:3},{value:"Existing Third-party Drivers",id:"existing-third-party-drivers",level:2}],u={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"third-party-drivers"},"Third-Party Drivers"),(0,a.kt)("p",null,'Detox comes with built-in support for running on Android and iOS by choosing a driver type in your Detox configurations.\nFor example, the following configuration uses the "ios.simulator" driver.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ios.sim": {\n    "type": "ios.simulator",\n    "device": "...",\n    "app": {\n      "type": "ios.app",\n      "binaryPath": "bin/YourApp.app"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"While Detox technically supports Android devices and iOS simulators out of the box, devices running other platforms such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"Web")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/react-native-windows"},"Windows")," can be targeted."),(0,a.kt)("p",null,"If your app targets a third-party platform, you may switch to use a ",(0,a.kt)("a",{parentName:"p",href:"#how-to-use-a-third-party-driver"},"third-party driver")," to run your tests on said platform. If one doesn\u2019t already exist, you can ",(0,a.kt)("a",{parentName:"p",href:"#Writing-a-new-third-party-driver"},"write your own"),"."),(0,a.kt)("h2",{id:"how-to-use-a-third-party-driver"},"How to Use a Third-party Driver"),(0,a.kt)("p",null,"Check to see if a ",(0,a.kt)("a",{parentName:"p",href:"#existing-third-party-drivers"},"third-party driver")," already exists for the platform you wish to target. Mostly likely, the driver will have setup instructions."),(0,a.kt)("p",null,"Overall the setup for any third party driver is fairly simple."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the driver to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," with:"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev detox-driver-package\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev detox-driver-package\n"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a new Detox configuration to your existing configurations with the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," set to driver\u2019s package name."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'+  "thirdparty.driver.config": {\n+    "type": "detox-driver-package",\n+    "app": {\n+      "binaryPath": "bin/YourApp.app",\n+    }\n+  }\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run Detox while specifying the name of your new configuration:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"detox test --configuration thirdparty.driver.config\n")))),(0,a.kt)("h2",{id:"writing-a-new-third-party-driver"},"Writing a New Third-party Driver"),(0,a.kt)("h3",{id:"anatomy-of-the-drivers"},"Anatomy of the Drivers"),(0,a.kt)("p",null,"The architecture of a driver is split into a few different pieces; Understanding the ",(0,a.kt)("a",{parentName:"p",href:"/Detox/docs/next/articles/how-detox-works#Architecture"},"overall architecture of Detox")," will help with this section."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Components running in the context of the test logic execution on the Node.js process on the host computer:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"The Device Drivers layer:")," The layer contains a collection of drivers, implementing - mostly, though not exclusively, the platform-specific details for the Detox ",(0,a.kt)("a",{parentName:"li",href:"/Detox/docs/next/api/device"},(0,a.kt)("inlineCode",{parentName:"a"},"device")," object")," that is exposed in the Detox tests.\nThe implementation is responsible for managing devices your tests will run on, in terms of device allocation, app installation user interactions (e.g. taps) execution and so on."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Matchers:")," code powering the ",(0,a.kt)("inlineCode",{parentName:"li"},"expect"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"element"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"waitFor")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"by")," globals in your tests.\nIn essence, it translates and sends test-logic commands (such as taps and assertions) over the network to the device on which your tests are running. In turn, the device natively performs these commands.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The component running on the device being tested, injected into the test app:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Native Client:")," The driver client communicates with the server over\nwebsocket where it receives information from the serialized matchers, and expectations, and also sends responses\nback of whether each step of your test succeeds or fails. Typically, a device client will use an underlying library specific\nto the platform at hand to implement the expectations.")),(0,a.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,a.kt)("p",null,"In order to introduce a third-party Driver, there is a set of core classes you must implement - each responsible for a different Detox concern:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allocation: The process of launching / selecting a device over which the tests would run."),(0,a.kt)("li",{parentName:"ul"},"Pre-validation: The checkup of the execution-environment (e.g. verifying the Android SDK is installed)."),(0,a.kt)("li",{parentName:"ul"},"Artifact handlers registration: The process where platform-based artifacts generation handlers are registered (e.g. handlers for taking screenshots, which are different between the Android and iOS platforms)."),(0,a.kt)("li",{parentName:"ul"},"Runtime: The ",(0,a.kt)("em",{parentName:"li"},"de facto")," execution of test logic."),(0,a.kt)("li",{parentName:"ul"},"Matchers: The matching of visible elements and visibility assertion.")),(0,a.kt)("p",null,"To understand the exact contract of these classes, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/blob/master/examples/demo-plugin/driver.js"},(0,a.kt)("inlineCode",{parentName:"a"},"examples/demo-plugin/driver.js"))," for a dummy implementation, or to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ouihealth/detox-puppeteer"},"detox-puppeteer")," for an actual implementation of such as driver."),(0,a.kt)("p",null,"Very roughly speaking, this is the expected skeletal implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const DeviceDriverBase = require('detox/src/devices/runtime/drivers/DeviceDriverBase');\n\nclass Cookie {\n  constructor(id) {\n    this.id = id; // hold any info necessary in order to identify the associated device\n  }\n}\n\nclass MyNewAllocationDriver {\n  constructor(deps) {\n    this.emitter = deps.eventEmitter;\n  }\n\n  async allocate(deviceConfig) {\n    // ...\n    return new Cookie(id); // This is where a cookie is formed once for the entire process\n  }\n\n  async free(cookie, options) {\n    // ...\n  }\n}\n\nclass MyNewEnvValidator {\n  validate() {\n    // ...\n  }\n}\n\nclass MyNewArtifactsProvider {\n  declareArtifactPlugins() {\n    // ...\n  }\n}\n\nclass MyNewRuntimeDriver extends DeviceDriverBase {\n  constructor(deps, cookie) {\n    // ...\n  }\n\n  // ...\n}\n\nclass MyExpect {\n  // ...\n}\n\n\nmodule.exports = MyNewDriver;\n")),(0,a.kt)("h2",{id:"existing-third-party-drivers"},"Existing Third-party Drivers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ouihealth/detox-puppeteer"},"detox-puppeteer"))))}m.isMDXComponent=!0}}]);