"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6096],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),d=a(2466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:o,values:m,groupId:c,className:k}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,s.U)(),[v,x]=(0,r.useState)(N),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=c){const e=b[c];null!=e&&e!==v&&f.some((t=>t.value===e))&&x(e)}const D=e=>{const t=e.currentTarget,a=w.indexOf(t),n=f[a].value;n!==v&&(C(t),x(n),null!=c&&y(c,String(n)))},O=e=>{let t=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},k)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>w.push(e),onKeyDown:O,onClick:D},o,{className:(0,l.Z)("tabs__item",u,o?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},6981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={id:"detox-cli",slug:"api/detox-cli",title:"Detox Command Line Tools",sidebar_label:"Detox Command Line Tools"},s=void 0,d={unversionedId:"detox-cli",id:"version-19.x/detox-cli",title:"Detox Command Line Tools",description:"Detox Command Line Tools (detox-cli)",source:"@site/versioned_docs/version-19.x/APIRef.DetoxCLI.md",sourceDirName:".",slug:"/api/detox-cli",permalink:"/Detox/docs/19.x/api/detox-cli",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/APIRef.DetoxCLI.md",tags:[],version:"19.x",frontMatter:{id:"detox-cli",slug:"api/detox-cli",title:"Detox Command Line Tools",sidebar_label:"Detox Command Line Tools"},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/Detox/docs/19.x/introduction/workflows"},next:{title:"Configuration Options",permalink:"/Detox/docs/19.x/config/overview"}},p={},u=[{value:"Detox Command Line Tools (detox-cli)",id:"detox-command-line-tools-detox-cli",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Commands",id:"commands",level:3},{value:"Options",id:"options",level:4},{value:"init",id:"init",level:4},{value:"build",id:"build",level:4},{value:"test",id:"test",level:4},{value:"<code>DETOX_ARGV_OVERRIDE</code>",id:"detox_argv_override",level:5},{value:"run-server",id:"run-server",level:4},{value:"recorder",id:"recorder",level:4},{value:"Cache",id:"cache",level:4}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"detox-command-line-tools-detox-cli"},"Detox Command Line Tools (detox-cli)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"detox-cli")," lets you operate Detox from command line."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"detox-cli")," globally via ",(0,r.kt)("a",{parentName:"p",href:"http://npmjs.org/detox-cli"},"npm"),":"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install detox-cli --global\n"))),(0,r.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add detox-cli\n")))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"detox <command> [options]\n")),(0,r.kt)("h3",{id:"commands"},"Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#init"},"init")),(0,r.kt)("td",{parentName:"tr",align:null},"Create initial E2E tests folder for jest or mocha")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#build"},"build")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Convenience method.")," Run the command defined in 'build' property of the specified configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#test"},"test")),(0,r.kt)("td",{parentName:"tr",align:null},"Initiating your test suite")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#run-server"},"run-server")),(0,r.kt)("td",{parentName:"tr",align:null},"Starts a standalone detox server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#cache"},"build-framework-cache")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"MacOS only.")," Builds Detox.framework to ","~","/Library/Detox. The framework cache is specific for each combination of Xcode and Detox versions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#cache"},"clean-framework-cache")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"MacOS only.")," Deletes all compiled framework binaries from ","~","/Library/Detox, they will be rebuilt on 'npm install' or when running 'build-framework-cache'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#cache"},"rebuild-framework-cache")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"MacOS only.")," Rebuilds the Detox cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#recorder"},"recorder")),(0,r.kt)("td",{parentName:"tr",align:null},"Starts a ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/wix/DetoxRecorder"},"Detox Recorder")," recording")))),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--version"),(0,r.kt)("td",{parentName:"tr",align:null},"Show version number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--help"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help")))),(0,r.kt)("h4",{id:"init"},"init"),(0,r.kt)("p",null,"Scaffolds initial E2E test folder structure for a specific test runner"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"detox init -r <test-runner-name>")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-r, --runner ",(0,r.kt)("inlineCode",{parentName:"td"},"<test-runner-name>")),(0,r.kt)("td",{parentName:"tr",align:null},"test runner name (supported values: mocha, jest)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--help"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help")))),(0,r.kt)("h4",{id:"build"},"build"),(0,r.kt)("p",null,"Run the command defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," property of the specified ",(0,r.kt)("strong",{parentName:"p"},"configuration"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"detox build [options]")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-c, --configuration ",(0,r.kt)("inlineCode",{parentName:"td"},"<device config>")),(0,r.kt)("td",{parentName:"tr",align:null},"Select a device configuration from your defined configurations, if not supplied, and there\u2019s only one configuration, detox will default to it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-C, --config-path ",(0,r.kt)("inlineCode",{parentName:"td"},"<configPath>")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify Detox config file path. If not supplied, detox searches for .detoxrc","[",'.js] or "detox" section in package.json')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-i, --if-missing"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute the build command only if the app binary is missing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-s, --silent"),(0,r.kt)("td",{parentName:"tr",align:null},"Do not fail with error if an app config has no build command.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--help"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help")))),(0,r.kt)("h4",{id:"test"},"test"),(0,r.kt)("p",null,"Initiating your test suite",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"detox test [options] <...testFilePaths>")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-C, --config-path ",(0,r.kt)("inlineCode",{parentName:"td"},"<configPath>")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify Detox config file path. If not supplied, detox searches for .detoxrc","[",'.js] or "detox" section in package.json')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-c, --configuration ",(0,r.kt)("inlineCode",{parentName:"td"},"<device config>")),(0,r.kt)("td",{parentName:"tr",align:null},"Select a device configuration from your defined configurations, if not supplied, and there\u2019s only one configuration, detox will default to it")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-o, --runner-config ",(0,r.kt)("inlineCode",{parentName:"td"},"<config>")),(0,r.kt)("td",{parentName:"tr",align:null},"Test runner config file, defaults to 'e2e/mocha.opts' for mocha and 'e2e/config.json' for jest.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-n, --device-name ","[","name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Override the device name specified in a configuration. Useful for running a single build configuration on multiple devices.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-l, --loglevel ","[","value]"),(0,r.kt)("td",{parentName:"tr",align:null},"Log level: fatal, error, warn, info, verbose, trace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-d, --debug-synchronization ",(0,r.kt)("inlineCode",{parentName:"td"},"<value>")),(0,r.kt)("td",{parentName:"tr",align:null},"Customize how long an action/expectation can take to complete before Detox starts querying the app why it is busy. By default, the app status will be printed if the action takes more than 10s to complete.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-a, --artifacts-location ",(0,r.kt)("inlineCode",{parentName:"td"},"<path>")),(0,r.kt)("td",{parentName:"tr",align:null},"Artifacts (logs, screenshots, etc) root directory.",(0,r.kt)("sup",{parentName:"td",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--record-logs ","[","failing/all/none]"),(0,r.kt)("td",{parentName:"tr",align:null},'Save logs during each test to artifacts directory. Pass "failing" to save logs of failing tests only. The default value is ',(0,r.kt)("strong",{parentName:"td"},"none"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--take-screenshots ","[","manual/failing/all/none]"),(0,r.kt)("td",{parentName:"tr",align:null},'Save screenshots before and after each test to artifacts directory. Pass "failing" to save screenshots of failing tests only. The default value is ',(0,r.kt)("strong",{parentName:"td"},"manual"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--record-videos ","[","failing/all/none]"),(0,r.kt)("td",{parentName:"tr",align:null},'Save screen recordings of each test to artifacts directory. Pass "failing" to save recordings of failing tests only. The default value is ',(0,r.kt)("strong",{parentName:"td"},"none"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--record-performance ","[","all/none]"),(0,r.kt)("td",{parentName:"tr",align:null},"[","iOS Only] Save Detox Instruments performance recordings of each test to artifacts directory. The default value is ",(0,r.kt)("strong",{parentName:"td"},"none"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--record-timeline ","[","all/none]"),(0,r.kt)("td",{parentName:"tr",align:null},"[","Jest Only] Record tests and events timeline, for visual display on the ",(0,r.kt)("a",{parentName:"td",href:"chrome://tracing"},"chrome://tracing")," tool. The default value is ",(0,r.kt)("strong",{parentName:"td"},"none"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--capture-view-hierarchy ","[","enabled/disabled]"),(0,r.kt)("td",{parentName:"tr",align:null},"[","iOS Only] Capture ",(0,r.kt)("inlineCode",{parentName:"td"},"*.uihierarchy")," snapshots on view action errors and ",(0,r.kt)("inlineCode",{parentName:"td"},"device.captureViewHierarchy()")," calls. The default value is ",(0,r.kt)("strong",{parentName:"td"},"disabled"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-R, --retries"),(0,r.kt)("td",{parentName:"tr",align:null},"[","Jest Circus Only] Re-spawn the test runner for individual failing suite files until they pass, or ",(0,r.kt)("inlineCode",{parentName:"td"},"<N>")," times at most.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-r, --reuse"),(0,r.kt)("td",{parentName:"tr",align:null},"Reuse existing installed app (do not delete + reinstall) for a faster run.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-u, --cleanup"),(0,r.kt)("td",{parentName:"tr",align:null},"Shutdown simulator when test is over, useful for CI scripts, to make sure detox exists cleanly with no residue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-w, --workers"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies number of workers the test runner should spawn, requires a test runner with parallel execution support (Detox CLI currently supports Jest). ",(0,r.kt)("em",{parentName:"td"},"Note: For workers > 1, Jest\u2019s spec-level reporting is disabled, by default (can be overridden using --jest-report-specs)."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--jest-report-specs"),(0,r.kt)("td",{parentName:"tr",align:null},"[","Jest Only] Whether to output logs per each running spec, in real-time. By default, disabled with multiple workers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-H, --headless"),(0,r.kt)("td",{parentName:"tr",align:null},"[","Android Only] Launch emulator in headless mode. Useful when running on CI. Only applicable for ",(0,r.kt)("strong",{parentName:"td"},"Google")," emulators.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--gpu"),(0,r.kt)("td",{parentName:"tr",align:null},"[","Android Only] Launch emulator with the specific ",(0,r.kt)("inlineCode",{parentName:"td"},"-gpu")," ",(0,r.kt)("a",{parentName:"td",href:"https://developer.android.com/studio/run/emulator-acceleration#command-gpu"},"gpu mode")," parameter. Only applicable for ",(0,r.kt)("strong",{parentName:"td"},"Google")," emulators.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--device-launch-args"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of passthrough-arguments to use when (if) devices (Android emulator / iOS simulator) are launched by Detox.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"Note: the value must be specified after an equal sign (",(0,r.kt)("inlineCode",{parentName:"strong"},"="),") and inside quotes.")," Usage example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'--device-launch-args="-http-proxy http://1.1.1.1:8000 -no-snapshot-load"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--app-launch-args"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom arguments to pass (through) onto the app every time it is launched. The same ",(0,r.kt)("strong",{parentName:"td"},"note")," applies here, as for ",(0,r.kt)("strong",{parentName:"td"},"--device-launch-args"),".",(0,r.kt)("br",null),"See ",(0,r.kt)("a",{parentName:"td",href:"/Detox/docs/19.x/api/launch-args"},"launch arguments guide")," for complete info.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--no-color"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable colors in log output")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--use-custom-logger"),(0,r.kt)("td",{parentName:"tr",align:null},"Use Detox' custom console-logging implementation, for logging Detox (non-device) logs. Disabling will fallback to node.js / test-runner\u2019s implementation (e.g. Jest / Mocha).",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Default: true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--force-adb-install"),(0,r.kt)("td",{parentName:"tr",align:null},"Due to problems with the ",(0,r.kt)("inlineCode",{parentName:"td"},"adb install")," command on Android, Detox resorts to a different scheme for installing APKs. Setting true will disable that and force usage of ",(0,r.kt)("inlineCode",{parentName:"td"},"adb install"),", instead.",(0,r.kt)("br",null),"This flag is temporary until the Detox way proves stable.",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Default: false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--inspect-brk"),(0,r.kt)("td",{parentName:"tr",align:null},"Uses ",(0,r.kt)("a",{parentName:"td",href:"https://nodejs.org/en/docs/guides/debugging-getting-started/#enable-inspector"},"node\u2019s --inspect-brk")," flag to let users debug the jest/mocha test runner ",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Default: false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--help"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help")))),(0,r.kt)("h5",{id:"detox_argv_override"},(0,r.kt)("inlineCode",{parentName:"h5"},"DETOX_ARGV_OVERRIDE")),(0,r.kt)("p",null,"If you happen to be troubleshooting Detox tests inside a complex script, or a failing CI build\n(e.g., on TeamCity or Jenkins), there is an escape-hatch feature for running Detox with\nsome extra CLI args just by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"DETOX_ARGV_OVERRIDE")," environment variable before\nrerunning it again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"> export DETOX_ARGV_OVERRIDE=\"--forceExit -w 1 --testNamePattern='that hanging test' e2e/sanity/login.test.js\"\n> bash scripts/ci.e2e.sh\n  # ... some output ...\n  > detox test -c ios.sim.release -l verbose --workers 3\n    # ...\n    configuration=ios.sim.release ... jest --maxWorkers 1 --forceExit --testNamePattern='that hanging test' e2e/sanity/login.test.js\n")),(0,r.kt)("p",null,"Consider the example above, where ",(0,r.kt)("inlineCode",{parentName:"p"},"DETOX_ARGV_OVERRIDE")," forces Detox to run Jest in a single worker\nmode with a forceful exit (after 1 second) only for a selected test in a specific file."),(0,r.kt)("p",null,"As you might see, the idea of ",(0,r.kt)("inlineCode",{parentName:"p"},"DETOX_ARGV_OVERRIDE")," is quite similar to ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#cli_node_options_options"},"NODE","_","OPTIONS"),"\nexcept for the fact you use it not for regular flows, but for forced ad-hoc patching of a failing Detox configuration to\nsave your time."),(0,r.kt)("p",null,"Please avoid using it in your regular flows \u2013 instead, use Detox configuration files (",(0,r.kt)("inlineCode",{parentName:"p"},".detoxrc.js"),")\nas your primary choice."),(0,r.kt)("h4",{id:"run-server"},"run-server"),(0,r.kt)("p",null,"Start a standalone Detox server"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"detox run-server [options]")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-p, --port ","[","port]"),(0,r.kt)("td",{parentName:"tr",align:null},"Port number (default: 8099)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-l, --loglevel ","[","value]"),(0,r.kt)("td",{parentName:"tr",align:null},"Log level: fatal, error, warn, info, verbose, trace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--no-color"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable colorful logs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--help"),(0,r.kt)("td",{parentName:"tr",align:null},"Show help")))),(0,r.kt)("h4",{id:"recorder"},"recorder"),(0,r.kt)("p",null,"If you have installed ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/DetoxRecorder"},"Detox Recorder")," in your project, you can use this command to start a new recording."),(0,r.kt)("h4",{id:"cache"},"Cache"),(0,r.kt)("p",null,"Detox stores a cached version of its framework in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/Library/Detox"),". A different cache folder is used for different Xcode and Detox versions. Use the various cache commands to clean or build this cache."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"It should be noted that ",(0,r.kt)("inlineCode",{parentName:"li"},"detox test")," is a convenience method to trigger an execution\nof a supported test runner, so for the most part it reads configuration from CLI args and ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," and remaps it\nto command-line arguments or environment variables that are supported by (or not conflict with) the test runner.\nHence, ",(0,r.kt)("strong",{parentName:"li"},"extra arguments to")," ",(0,r.kt)("inlineCode",{parentName:"li"},"detox test")," ",(0,r.kt)("strong",{parentName:"li"},"will be forwarded to your test runner"),", e.g:\\\n1","."," You run ",(0,r.kt)("inlineCode",{parentName:"li"},"detox test --bail"),", and since ",(0,r.kt)("inlineCode",{parentName:"li"},"--bail")," is an unknown option, it will be forwarded to the test runner as-is.\\\n2","."," If there is a name conflict for some option (between the test runner and ",(0,r.kt)("inlineCode",{parentName:"li"},"detox test"),"), you can pass it explicitly\\\nafter the reserved ",(0,r.kt)("inlineCode",{parentName:"li"},"--")," sequence. For instance, ",(0,r.kt)("inlineCode",{parentName:"li"},"detox test -- --help"),", will pass ",(0,r.kt)("inlineCode",{parentName:"li"},"--help")," to the test runner CLI\nitself.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"--artifacts-location")," path does not end with a slash (",(0,r.kt)("inlineCode",{parentName:"li"},"/"),") or a backslash, then detox CLI will append to the\npath a subdirectory with configuration name and timestamp (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"artifacts/android.emu.release.2018-06-12 05:52:43Z"),").\nIn other words, the path with a slash at the end assumes you do not want a subdirectory inside.\nFor more details, please check the ",(0,r.kt)("a",{parentName:"li",href:"/Detox/docs/19.x/api/artifacts#artifacts"},"Enabling artifacts"),".\nThe default value is ",(0,r.kt)("strong",{parentName:"li"},"artifacts")," (plus a subdirectory).",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);