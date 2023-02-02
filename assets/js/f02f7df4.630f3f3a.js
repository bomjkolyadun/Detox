"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8521],{5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),o=n(7294),i=n(6010),r=n(2466),l=n(6550),d=n(1980),s=n(7392),p=n(12);function u(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function c(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[d,s]=g({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=d??u;return m({value:e,tabValues:i})?e:null})();(0,o.useEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),h(e)}),[s,h,i]),tabValues:i}}var k=n(2389);const f="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:l,selectValue:d,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=s[n].value;a!==l&&(u(t),d(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},r,{className:(0,i.Z)("tabs__item",y,r?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function x(e){const t=h(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",f)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return o.createElement(x,(0,a.Z)({key:String(t)},e))}},5132:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(814);const i=e=>{let{flavors:t,children:n,header:i,footer:r,...l}=e;return a.createElement(o.Z,l,i,t.map(n).join("\n"),r)}},7387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>N,default:()=>I,frontMatter:()=>x,metadata:()=>T,toc:()=>C});var a=n(7462),o=(n(7294),n(3905)),i=n(814),r=n(4866),l=n(5162);const d={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Out of the box, Detox offers you a first-class integration with ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io"},"Jest"),", the most popular testing framework for React Native. That's why your first step will be to install or update Jest in your project."),(0,o.kt)("p",null,"Go to your project's root folder, i.e., where ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," is found, and run:"),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npm install "jest@^29" --save-dev\n'))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'yarn add "jest@^29" --dev\n')))),(0,o.kt)("admonition",{title:"Info",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The command above will install the ",(0,o.kt)("strong",{parentName:"p"},"latest supported Jest version"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"@^29")," override is recommended in the first place to prevent you from getting an outdated Jest version unknowingly, under the influence of package lock files. For example, in React Native boilerplate projects, the ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json")," is apt to restrict ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install jest")," to installing an older, unsupported version ",(0,o.kt)("inlineCode",{parentName:"p"},"26.x"),".")),(0,o.kt)("p",null,"Now it's time to install Detox itself:"),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install detox --save-dev\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add detox --dev\n")))))}s.isMDXComponent=!0;const p={toc:[]};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," in your project's root by running this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,o.kt)("p",null,"Remember to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," folder to your ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," file.\nNow you are ready to install the Detox itself. Run:"),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install detox --save-dev\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add detox --dev\n")))),(0,o.kt)("p",null,"The next step is to ",(0,o.kt)("strong",{parentName:"p"},"install a test runner"),". Out of the box, Detox offers you a first-class integration\nwith ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io"},"Jest"),", a popular and proven choice in the JavaScript community:"),(0,o.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install jest --save-dev\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add jest --dev\n")))),(0,o.kt)("p",null,"If you are not familiar with Jest, we recommend you to read the ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/getting-started"},"Jest: Getting Started")," guide."))}u.isMDXComponent=!0;var c=n(5132);const m={toc:[]};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Open your Detox config and replace ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_APP")," placeholder with the actual app name, e.g.:"),(0,o.kt)(c.Z,{language:"diff",title:".detoxrc.js",header:"   apps: {\n",flavors:["Debug","Release"],mdxType:"FlavorizedCodeBlock"},(e=>`     'ios.${e.toLowerCase()}': {\n       type: 'ios.app',\n-      binaryPath: 'ios/build/Build/Products/${e}-iphonesimulator/YOUR_APP.app',\n+      binaryPath: 'ios/build/Build/Products/${e}-iphonesimulator/example.app',\n-      build: 'xcodebuild -workspace ios/YOUR_APP.xcworkspace -scheme YOUR_APP -configuration ${e} -sdk iphonesimulator -derivedDataPath ios/build'\n+      build: 'xcodebuild -workspace ios/example.xcworkspace -scheme example -configuration ${e} -sdk iphonesimulator -derivedDataPath ios/build'\n     },`)),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If your app uses ",(0,o.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"CocoaPods")," (all modern React Native projects do since ",(0,o.kt)("inlineCode",{parentName:"p"},"0.60.0"),"), make sure\nto run ",(0,o.kt)("inlineCode",{parentName:"p"},"pod install")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"ios/")," folder before building with Detox."),(0,o.kt)("p",{parentName:"admonition"},"If your project doesn't use the pods, then you won't have any ",(0,o.kt)("inlineCode",{parentName:"p"},"YourApp.xcworkspace")," in your iOS project directory.\nYou should search instead for something like ",(0,o.kt)("inlineCode",{parentName:"p"},"YourApp.xcodeproj")," there, and adjust your build command accordingly:"),(0,o.kt)(c.Z,{language:"diff",header:"   apps: {\n",flavors:["Debug","Release"],mdxType:"FlavorizedCodeBlock"},(e=>`     'ios.${e.toLowerCase()}': {\n       type: 'ios.app',\n       binaryPath: 'ios/build/Build/Products/${e}-iphonesimulator/example.app',\n-      build: 'xcodebuild -workspace ios/YOUR_APP.xcworkspace -scheme YOUR_APP -configuration ${e} -sdk iphonesimulator -derivedDataPath ios/build'\n+      build: 'xcodebuild -project ios/example.xcodeproj -scheme example -sdk -configuration ${e} iphonesimulator -derivedDataPath ios/build'\n     },`))))}g.isMDXComponent=!0;const h={toc:[]};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Check ",(0,o.kt)("strong",{parentName:"p"},"binaryPath")," and ",(0,o.kt)("strong",{parentName:"p"},"build")," configs for ",(0,o.kt)("inlineCode",{parentName:"p"},"android.debug")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"android.release")," mode in your Detox config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".detoxrc.js"',title:'".detoxrc.js"'},"module.exports = {\n  apps: {\n    'android.debug': {\n      type: 'android.apk',\n      // highlight-start\n      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',\n      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug'\n      // highlight-end\n    },\n    'android.release': {\n      type: 'android.apk',\n      // highlight-start\n      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',\n      build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release'\n      // highlight-end\n    },\n    // ...\n  },\n  // ...\n};\n")),(0,o.kt)("p",null,"If you have a typical React Native project, these values should already be correct."),(0,o.kt)("p",null,"On the other hand, if your app has extra ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/build-variants#product-flavors"},(0,o.kt)("inlineCode",{parentName:"a"},"productFlavors")),"\n(let's imagine you have ",(0,o.kt)("inlineCode",{parentName:"p"},"driver")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"passenger")," flavors of a taxi application), then you should rewrite your apps config\nfor both ",(0,o.kt)("strong",{parentName:"p"},"debug")," and ",(0,o.kt)("strong",{parentName:"p"},"release")," configurations, e.g.:"),(0,o.kt)(c.Z,{language:"diff",header:"   apps: {\n",flavors:["Driver","Passenger"],mdxType:"FlavorizedCodeBlock"},(e=>`     '${e.toLowerCase()}.android.debug': {\n       type: 'android.apk',\n-      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',\n+      binaryPath: 'android/app/build/outputs/apk/${e.toLowerCase()}/debug/app-${e.toLowerCase()}-debug.apk',\n-      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',\n+      build: 'cd android && ./gradlew assemble${e}Debug assemble${e}DebugAndroidTest -DtestBuildType=debug',\n     },`)))}k.isMDXComponent=!0;const f={toc:[]};function y(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To check if a specific device type (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"iPhone 12"),") is installed locally, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"xcrun simctl list devicetypes\n")),(0,o.kt)("p",null,"If it is available, you'll see it among the other device types in the output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"== Device Types ==\niPhone 4s (com.apple.CoreSimulator.SimDeviceType.iPhone-4s)\niPhone 5 (com.apple.CoreSimulator.SimDeviceType.iPhone-5)\n\u2026\niPhone SE (2nd generation) (com.apple.CoreSimulator.SimDeviceType.iPhone-SE--2nd-generation-)\niPhone 12 mini (com.apple.CoreSimulator.SimDeviceType.iPhone-12-mini)\n// highlight-next-line\niPhone 12 (com.apple.CoreSimulator.SimDeviceType.iPhone-12)\niPhone 12 Pro (com.apple.CoreSimulator.SimDeviceType.iPhone-12-Pro)\n\u2026\n")),(0,o.kt)("p",null,"If there is no such device type, you can replace it with another from the list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"   simulator: {\n     type: 'ios.simulator',\n     device: {\n-      type: 'iPhone 12',\n+      type: 'iPhone 13 Pro',\n     },\n   },\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If the device type list is empty or you need a specific iOS version,\ngo to ",(0,o.kt)("inlineCode",{parentName:"p"},"Xcode > Preferences > Components")," and install a proper Simulator version from the list:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{src:n(7391).Z,width:"942",height:"662"}))))}y.isMDXComponent=!0;const b={toc:[]};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To check if a specific Android virtual device (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Pixel_3a_API_30_x86"),") is installed locally, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"emulator -list-avds\n")),(0,o.kt)("p",null,"You should see an output like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"// highlight-next-line\nPixel_3a_API_30_x86\nPixel_API_30\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you see ",(0,o.kt)("inlineCode",{parentName:"p"},"zsh: command not found")," (or a similar message), please go back to\n",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/getting-started#setting-up-the-environment"},"Setting up the environment")," section\nwhere we were redirecting you to the official ",(0,o.kt)("strong",{parentName:"p"},"React Native CLI Quickstart"),", and make sure you\nhave completed it."),(0,o.kt)("p",{parentName:"admonition"},"Provided you have ",(0,o.kt)("inlineCode",{parentName:"p"},"ANDROID_SDK_ROOT")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"ANDROID_HOME"),") environment variables\ndefined, using an explicit path to ",(0,o.kt)("inlineCode",{parentName:"p"},"emulator")," should help:"),(0,o.kt)(r.Z,{groupId:"desktopOS",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"darwin",label:"MacOS",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},"$ANDROID_SDK_ROOT/emulator/emulator -list-avds")),(0,o.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"bash",mdxType:"CodeBlock"},"$ANDROID_SDK_ROOT/emulator/emulator -list-avds")),(0,o.kt)(l.Z,{value:"win32",label:"Windows",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"plain text",mdxType:"CodeBlock"},"%ANDROID_HOME%\\emulator\\emulator -list-avds")))),(0,o.kt)("p",null,"If you don't see that AVD name, you might use another one from the list \u2013 just replace it in Detox config, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"   emulator: {\n     type: 'android.emulator',\n     device: {\n-      avdName: 'Pixel_3a_API_30_x86',\n+      avdName: 'Pixel_API_30',\n     },\n   },\n")),(0,o.kt)("p",null,"If the output is completely blank, then you need to open Android Studio and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/managing-avds#createavd"},"create a new virtual device (AVD)"),"\nfirst. Experienced users might do that via ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/command-line/avdmanager"},(0,o.kt)("inlineCode",{parentName:"a"},"avdmanager")),", if Android Studio is not installed (e.g. on CI)."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you wish to use an attached Android device (via USB or wireless network), make sure it is available:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"adb devices\n")),(0,o.kt)("p",{parentName:"admonition"},"If the device is properly connected, you should get an output like this:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"List of devices attached\n2F6315NVPH      device\n")),(0,o.kt)("p",{parentName:"admonition"},"Assuming the device is available (troubleshooting ",(0,o.kt)("em",{parentName:"p"},"adb")," issues is out of scope of this tutorial), you just\nneed to use ",(0,o.kt)("inlineCode",{parentName:"p"},"android.att.*")," Detox configurations instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"android.emu.*")," where required."),(0,o.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f If you have multiple devices connected, replace that loose regular expression (",(0,o.kt)("inlineCode",{parentName:"p"},"adbName: '.*'"),")\nin your Detox config with a specific device name.")))}v.isMDXComponent=!0;const x={},N="Project Setup",T={unversionedId:"introduction/project-setup",id:"introduction/project-setup",title:"Project Setup",description:"This article mainly covers standard React Native projects.",source:"@site/../docs/introduction/project-setup.mdx",sourceDirName:"introduction",slug:"/introduction/project-setup",permalink:"/Detox/docs/next/introduction/project-setup",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/introduction/project-setup.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment Setup",permalink:"/Detox/docs/next/introduction/getting-started"},next:{title:"Your First Test",permalink:"/Detox/docs/next/introduction/your-first-test"}},w={},C=[{value:"Step 1: Bootstrap",id:"step-1-bootstrap",level:2},{value:"Step 2: App configs",id:"step-2-app-configs",level:2},{value:"Step 3: Device configs",id:"step-3-device-configs",level:2},{value:"Step 4: Additional Android configuration",id:"step-4-additional-android-configuration",level:2},{value:"4.1. Patching build scripts",id:"41-patching-build-scripts",level:3},{value:"4.2. Adding an auxiliary Android test",id:"42-adding-an-auxiliary-android-test",level:3},{value:"4.3. Enabling unencrypted traffic for Detox",id:"43-enabling-unencrypted-traffic-for-detox",level:3},{value:"Step 5: Build the app",id:"step-5-build-the-app",level:2}],D={toc:C};function I(e){let{components:t,...d}=e;return(0,o.kt)("wrapper",(0,a.Z)({},D,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project-setup"},"Project Setup"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article mainly covers standard React Native projects.\nIf some steps don't look applicable to your project, please adapt them accordingly, relying on the common sense \u2013\nlook for other file locations, use custom build commands and so on."),(0,o.kt)("p",{parentName:"admonition"},"If you're using ",(0,o.kt)("strong",{parentName:"p"},"Expo"),", please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.expo.dev/build-reference/e2e-tests"},"setup guide")," from their documentation website instead.\nThe setup for Expo projects is different and is not covered in this article.")),(0,o.kt)("h2",{id:"step-1-bootstrap"},"Step 1: Bootstrap"),(0,o.kt)(r.Z,{groupId:"appType",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"start-rn",label:"React Native",default:!0,mdxType:"TabItem"},(0,o.kt)(s,{mdxType:"PrepareBootstrapRN"})),(0,o.kt)(l.Z,{value:"start-other",label:"Native iOS",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"PrepareBootstrapOther"}))),(0,o.kt)("p",null,"Now, when all the dependencies are installed, initialize Detox in your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"detox init\n")),(0,o.kt)("p",null,"Normally you should see an output like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"Created a file at path: .detoxrc.js\nCreated a file at path: e2e/jest.config.js\nCreated a file at path: e2e/starter.test.js\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you see a message like ",(0,o.kt)("inlineCode",{parentName:"p"},"command not found: detox"),", make sure you have ",(0,o.kt)("a",{parentName:"p",href:"#1-command-line-tools-detox-cli"},"installed Detox command line tools"),".")),(0,o.kt)("p",null,"After Detox generated these files in your project's root, you still have some work to do with them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".detoxrc.js")," \u2013 Detox config file;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"e2e/jest.config.js")," \u2013 Jest configuration;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"e2e/starter.test.js")," \u2013 dummy first test.")),(0,o.kt)("h2",{id:"step-2-app-configs"},"Step 2: App configs"),(0,o.kt)("p",null,"In this step you need to provide Detox with the right ",(0,o.kt)("strong",{parentName:"p"},"commands to build")," your app for iOS and Android,\nand also the right ",(0,o.kt)("strong",{parentName:"p"},"paths to the app binaries")," so that Detox can install your app on the device before\nactually starting the tests."),(0,o.kt)(r.Z,{groupId:"mobileOs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"iOS",label:"iOS",default:!0,mdxType:"TabItem"},(0,o.kt)(g,{mdxType:"PrepareAppConfigsIos"})),(0,o.kt)(l.Z,{value:"Android",label:"Android",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"PrepareAppConfigsAndroid"}))),(0,o.kt)("h2",{id:"step-3-device-configs"},"Step 3: Device configs"),(0,o.kt)("p",null,"By default, Detox config suggests default device types for iOS and Android:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".detoxrc.js"',title:'".detoxrc.js"'},"/** @type {Detox.DetoxConfig} */\nmodule.exports = {\n  // ...\n  devices: {\n    simulator: {\n      type: 'ios.simulator',\n      device: {\n        // highlight-next-line\n        type: 'iPhone 12',\n      },\n    },\n    attached: {\n      type: 'android.attached',\n      device: {\n        // highlight-next-line\n        adbName: '.*', // any attached device\n      },\n    },\n    emulator: {\n      type: 'android.emulator',\n      device: {\n        // highlight-next-line\n        avdName: 'Pixel_3a_API_30_x86',\n      },\n    },\n  },\n};\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you plan to use cloud devices instead, check out the ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/guide/genymotion-saas"},"Genymotion SaaS guide"),", which will help you to set up remote Android devices.\nThis tutorial, however, focuses on devices running locally.")),(0,o.kt)("p",null,"Here's how you can check they are correct and change them if you need something else:"),(0,o.kt)(r.Z,{groupId:"mobileOs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"iOS",label:"iOS",mdxType:"TabItem"},(0,o.kt)(y,{mdxType:"PrepareDeviceConfigsIos"})),(0,o.kt)(l.Z,{value:"Android",label:"Android",default:!0,mdxType:"TabItem"},(0,o.kt)(v,{mdxType:"PrepareDeviceConfigsAndroid"}))),(0,o.kt)("h2",{id:"step-4-additional-android-configuration"},"Step 4: Additional Android configuration"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to try out your tests right away on iOS,\nyou can skip to ",(0,o.kt)("a",{parentName:"p",href:"#step-5-build-the-app"},"Step 5: Build the app"),"\nand revisit it when you're ready to move forward with Android.")),(0,o.kt)("p",null,"Assuming you have a regular React Native project, these are the files you normally would need to\npatch or create if they are missing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Build scripts:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/build.gradle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Native test code:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/app/src/androidTest/java/com/<your.package>/DetoxTest.java")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Manifests:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/app/src/main/AndroidManifest.xml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android/app/src/main/res/xml/network_security_config.xml"))))),(0,o.kt)("h3",{id:"41-patching-build-scripts"},"4.1. Patching build scripts"),(0,o.kt)("p",null,"Open your main build script and apply the suggested changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="android/build.gradle"',title:'"android/build.gradle"'},' buildscript {\n   ext {\n     buildToolsVersion = "31.0.0"\n// highlight-next-line\n     minSdkVersion = 21 // (1)\n     compileSdkVersion = 30\n     targetSdkVersion = 30\n// highlight-next-line\n+    kotlinVersion = \'X.Y.Z\' // (2)\n   }\n \u2026\n   dependencies {\n     classpath("com.android.tools.build:gradle:7.1.1")\n     classpath("com.facebook.react:react-native-gradle-plugin")\n     classpath("de.undercouch:gradle-download-task:5.0.1")\n// highlight-next-line\n+    classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion") // (3)\n \u2026\n\n allprojects {\n   repositories {\n   \u2026\n   google()\n// highlight-start\n+  maven { // (4)\n+    url("$rootDir/../node_modules/detox/Detox-android")\n+  }\n// highlight-end\n   maven { url \'https://www.jitpack.io\' }\n }\n')),(0,o.kt)("p",null,"Here is the explanation of those changes, numbered 1-4:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure your ",(0,o.kt)("inlineCode",{parentName:"li"},"minSdkVersion")," is at least 18 or higher."),(0,o.kt)("li",{parentName:"ol"},"We recommend you to define a global ",(0,o.kt)("inlineCode",{parentName:"li"},"kotlinVersion")," constant you would use in the next step.\nReplace ",(0,o.kt)("inlineCode",{parentName:"li"},"X.Y.Z")," with the actual version number.\nTo get one, open ",(0,o.kt)("strong",{parentName:"li"},"Android Studio"),", go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Preferences > Languages\xa0&\xa0Frameworks > Kotlin")," and\nlook at ",(0,o.kt)("inlineCode",{parentName:"li"},"Current Kotlin plugin version")," field. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"211-1.5.30-release-408-AS7442.40"),"\nmeans you have version ",(0,o.kt)("inlineCode",{parentName:"li"},"1.5.30"),".\n",(0,o.kt)("img",{src:n(8883).Z,width:"1012",height:"840"})),(0,o.kt)("li",{parentName:"ol"},"The line adds ",(0,o.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.jetbrains.kotlin/kotlin-gradle-plugin"},"Kotlin Gradle plugin"),"\nto the build script. If your project is not entirely new, there's a chance you might have it already, so make sure\nyou aren't adding it twice. \ud83d\ude09"),(0,o.kt)("li",{parentName:"ol"},"Last, we add Detox as a precompiled native dependency, ",(0,o.kt)("inlineCode",{parentName:"li"},".aar"),". If you need to have Detox as a\n",(0,o.kt)("em",{parentName:"li"},"compiling dependency")," instead, consult the respective section in ",(0,o.kt)("a",{parentName:"li",href:"/Detox/docs/next/introduction/debugging#native-application-code"},"Debugging")," guide.")),(0,o.kt)("p",null,"Now let's move on to the next build script and prepare it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="android/app/build.gradle"',title:'"android/app/build.gradle"'}," \u2026\n\n android {\n   \u2026\n   defaultConfig {\n     \u2026\n     versionCode 1\n     versionName \"1.0\"\n+    testBuildType System.getProperty('testBuildType', 'debug')\n+    testInstrumentationRunner 'androidx.test.runner.AndroidJUnitRunner'\n   \u2026\n   buildTypes {\n     release {\n       minifyEnabled true\n       proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'\n+      proguardFile \"${rootProject.projectDir}/../node_modules/detox/android/detox/proguard-rules-app.pro\"\n\n       signingConfig signingConfigs.release\n     }\n   }\n   \u2026\n\n dependencies {\n+  androidTestImplementation('com.wix:detox:+')\n+  implementation 'androidx.appcompat:appcompat:1.1.0'\n   implementation fileTree(dir: \"libs\", include: [\"*.jar\"])\n")),(0,o.kt)("admonition",{title:"ProGuard notice",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Detox relies on\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/java/lang/reflect/package-summary"},"Android Reflection API"),"\nto integrate with React Native on Android, that's why you have to exempt some of its native code from\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/build/shrink-code"},"ProGuard minification"),".\nOtherwise, you'll see Detox crashing or hanging up infinitely upon an attempt to\nrun tests with your app built in ",(0,o.kt)("strong",{parentName:"p"},"release mode"),".")),(0,o.kt)("h3",{id:"42-adding-an-auxiliary-android-test"},"4.2. Adding an auxiliary Android test"),(0,o.kt)("p",null,"Detox requires that your project has a single dummy native Android test with some special content,\nwhich will be picked up by ",(0,o.kt)("inlineCode",{parentName:"p"},"testRunner")," that you just added in the previous step, so let's create it now."),(0,o.kt)("p",null,"Copy the snippet below to create a file under the following path (where ",(0,o.kt)("inlineCode",{parentName:"p"},"<your.package>")," is your actual\npackage name):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="android/app/src/androidTest/java/com/<your.package>/DetoxTest.java" showLineNumbers',title:'"android/app/src/androidTest/java/com/<your.package>/DetoxTest.java"',showLineNumbers:!0},"// highlight-next-line\npackage com.<your.package>; // (1)\n\nimport com.wix.detox.Detox;\nimport com.wix.detox.config.DetoxConfig;\n\nimport org.junit.Rule;\nimport org.junit.Test;\nimport org.junit.runner.RunWith;\n\nimport androidx.test.ext.junit.runners.AndroidJUnit4;\nimport androidx.test.filters.LargeTest;\nimport androidx.test.rule.ActivityTestRule;\n\n@RunWith(AndroidJUnit4.class)\n@LargeTest\npublic class DetoxTest {\n    @Rule // (2)\n// highlight-next-line\n    public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(MainActivity.class, false, false);\n\n    @Test\n    public void runDetoxTests() {\n        DetoxConfig detoxConfig = new DetoxConfig();\n        detoxConfig.idlePolicyConfig.masterTimeoutSec = 90;\n        detoxConfig.idlePolicyConfig.idleResourceTimeoutSec = 60;\n        detoxConfig.rnContextLoadTimeoutSec = (BuildConfig.DEBUG ? 180 : 60);\n\n        Detox.runTests(mActivityRule, detoxConfig);\n    }\n}\n")),(0,o.kt)("p",null,"You can see there are two lines (1 and 18) that require extra care:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Replace with your package name. To look it up, you could copy and paste the first line from ",(0,o.kt)("inlineCode",{parentName:"li"},"android/app/src/main/java/com/<your.package>/MainActivity.java"),"."),(0,o.kt)("li",{parentName:"ol"},"Usually not the case, but you might have a custom activity name instead of a default ",(0,o.kt)("inlineCode",{parentName:"li"},"MainActivity"),". To check whether it is so or not, open your ",(0,o.kt)("inlineCode",{parentName:"li"},"android/app/src/main/AndroidManifest.xml"),",\nand check what your main activity is called:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},'\u2026\n  <activity\n// highlight-next-line\n    android:name=".MainActivity"\n    android:label="@string/app_name"\n    android:launchMode="standard"\n')),(0,o.kt)("h3",{id:"43-enabling-unencrypted-traffic-for-detox"},"4.3. Enabling unencrypted traffic for Detox"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For Detox to work, its native code running on Android device has to be able to connect to the Node.js host running tests.\nIt sends an unencrypted HTTP traffic via virtual ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," interface, that's why you need to create a new file which\nadds a couple of exceptions to the security rules."),(0,o.kt)("p",{parentName:"admonition"},"If properly configured, this approach in no way compromises the security settings of your app.\nFor more details, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/training/articles/security-config"},"Android\u2019s security-config guide"),"\nand the ",(0,o.kt)("a",{parentName:"p",href:"https://android-developers.googleblog.com/2016/04/protecting-against-unintentional.html"},"dedicated article"),"\nin the Android developers blog.")),(0,o.kt)("p",null,"Create a new network security config file for Android (or patch it if you have one):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="android/app/src/main/res/xml/network_security_config.xml"',title:'"android/app/src/main/res/xml/network_security_config.xml"'},'<?xml version="1.0" encoding="utf-8"?>\n<network-security-config>\n    <domain-config cleartextTrafficPermitted="true">\n        <domain includeSubdomains="true">10.0.2.2</domain>\n        <domain includeSubdomains="true">localhost</domain>\n    </domain-config>\n</network-security-config>\n')),(0,o.kt)("p",null,"If you had no network security config before, it means you also have to register it after creation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="android/app/src/main/AndroidManifest.xml"',title:'"android/app/src/main/AndroidManifest.xml"'},' <manifest>\n   <application\n   \u2026\n+    android:networkSecurityConfig="@xml/network_security_config">\n   </application>\n </manifest>\n')),(0,o.kt)("p",null,"\ud83c\udfc6 Pat yourself on the back! The hardest part is over, now your Android app is ready to be used with Detox."),(0,o.kt)("h2",{id:"step-5-build-the-app"},"Step 5: Build the app"),(0,o.kt)(r.Z,{groupId:"configurationName",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ios.sim.debug",label:"iOS (Debug)",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"detox build --configuration ios.sim.debug")),(0,o.kt)(l.Z,{value:"ios.sim.release",label:"iOS (Release)",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"detox build --configuration ios.sim.release")),(0,o.kt)(l.Z,{value:"android.emu.debug",label:"Android (Debug)",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"detox build --configuration android.emu.debug")),(0,o.kt)(l.Z,{value:"android.emu.release",label:"Android (Release)",mdxType:"TabItem"},(0,o.kt)(i.Z,{language:"sh",mdxType:"CodeBlock"},"detox build --configuration android.emu.release"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If the build is failing, try out our ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/next/troubleshooting/building-the-app"},"Troubleshooting")," section."),(0,o.kt)("p",{parentName:"admonition"},"Note that Detox CLI just executes the build command you specified in your Detox config (",(0,o.kt)("inlineCode",{parentName:"p"},".detoxrc.js"),")\nfor a specific configuration. In the other words, it has no extra logic \u2013 it just takes the command and runs it,\nnothing more and nothing less.")),(0,o.kt)("p",null,"Once your build is ready to use, please proceed to the next article."))}I.isMDXComponent=!0},8883:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get-kotlin-version-5bf1b64e70538828da86c454736d592a.png"},7391:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/install-simulator-runtime-3977048ac8afedf9a27d5945cdc44e73.png"}}]);