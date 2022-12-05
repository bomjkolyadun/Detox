"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const i={},r="Dealing With Flakiness in Tests",s={unversionedId:"troubleshooting/flakiness",id:"troubleshooting/flakiness",title:"Dealing With Flakiness in Tests",description:"What is a flaky test?",source:"@site/../docs/troubleshooting/flakiness.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/flakiness",permalink:"/Detox/docs/next/troubleshooting/flakiness",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/troubleshooting/flakiness.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dealing With Synchronization Issues in Tests",permalink:"/Detox/docs/next/troubleshooting/synchronization"},next:{title:"Migration Guide",permalink:"/Detox/docs/next/guide/migration"}},l={},u=[{value:"1. We Feel Your Pain",id:"1-we-feel-your-pain",level:3},{value:"2. Sources of Flakiness",id:"2-sources-of-flakiness",level:3},{value:"3. Get More Data About the Problem",id:"3-get-more-data-about-the-problem",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dealing-with-flakiness-in-tests"},"Dealing With Flakiness in Tests"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"What is a flaky test?")),(0,a.kt)("p",null,"A flaky test is a test that passes most of the time, and sometimes without any apparent reason and without any changes to your app - it fails. This can even happen only on certain machines. For example, on your own machine it always passes, but on a different slower machine, like the CI, it fails."),(0,a.kt)("h3",{id:"1-we-feel-your-pain"},"1. We Feel Your Pain"),(0,a.kt)("p",null,"Flakiness is the greatest challenge in E2E. The good news is that Detox was designed with this mission in mind: dealing with flakiness head on."),(0,a.kt)("p",null,"Assume you have a suite of 100 tests and each test is flaky in 0.5% of executions (failing without an actual bug in your app). The total flakiness of your entire suite is about 40% (the exact formula is ",(0,a.kt)("inlineCode",{parentName:"p"},"1 - (1 - 0.005)^100"),"). This means that there\u2019s 40% chance your suite will fail without an actual bug! This makes your entire suite useless."),(0,a.kt)("h3",{id:"2-sources-of-flakiness"},"2. Sources of Flakiness"),(0,a.kt)("p",null,"It\u2019s important to identify the various sources of flakiness in Detox tests."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Control of the device / simulator - in order to run your tests, Detox must communicate with a simulator and instruct it to install the app, restart it, etc. Simulators don\u2019t always behave and controlling them might occasionally fail. Detox\u2019s underlying simulator control is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/AppleSimulatorUtils"},(0,a.kt)("inlineCode",{parentName:"a"},"AppleSimulatorUtils")),', it is a tool that supports both basic and advanced simulator and device interaction options, it uses some core simulator features which are not always stable and may need time to "warm up" (booting, shutting down, etc.). Detox is set to have a few retries on any of these actions before failing. It will also print all the ',(0,a.kt)("inlineCode",{parentName:"p"},"exec")," commands when using ",(0,a.kt)("inlineCode",{parentName:"p"},"verbose")," log level, and with ",(0,a.kt)("inlineCode",{parentName:"p"},"trace")," level it will print everything.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Asynchronous operations inside your app - every time an E2E test runs, operations might take place in a different order inside your app. This makes E2E tests nondeterministic. Consider an HTTP request made to a server, this request may take a variable time to complete due to external concerns like network congestion and server load. Detox takes this into account by monitoring all asynchronous operations that take place in your app from the inside. Detox knows which network requests are currently in-flight. Detox knows how busy the React Native bridge is. Tests are automatically synchronized to the app and only move forward when the app is idle."))),(0,a.kt)("h3",{id:"3-get-more-data-about-the-problem"},"3. Get More Data About the Problem"),(0,a.kt)("p",null,"In order to identify the source of flakiness you\u2019re suffering from you need more data. If you catch a failing test that should be passing, you need to record as much information as possible in order to investigate."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable ",(0,a.kt)("inlineCode",{parentName:"li"},"trace")," mode in Detox. This will output a lot of information about what happening during the test:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"exec")," commands"),(0,a.kt)("li",{parentName:"ol"},"All communication going over the websocket, both from tester and app")))),(0,a.kt)("p",null,"To enable ",(0,a.kt)("inlineCode",{parentName:"p"},"trace")," mode run your tests in trace log mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"detox test --loglevel trace\n")))}p.isMDXComponent=!0}}]);