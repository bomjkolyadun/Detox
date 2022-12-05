"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3524],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return t?i.createElement(g,r(r({ref:n},p),{},{components:t})):i.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=t(7462),o=(t(7294),t(3905));const a={id:"running-on-ci",slug:"guide/running-on-ci",title:"Running on CI",sidebar_label:"Running on CI"},r=void 0,s={unversionedId:"running-on-ci",id:"version-19.x/running-on-ci",title:"Running on CI",description:"Running on CI",source:"@site/versioned_docs/version-19.x/Guide.RunningOnCI.md",sourceDirName:".",slug:"/guide/running-on-ci",permalink:"/Detox/docs/19.x/guide/running-on-ci",draft:!1,editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.RunningOnCI.md",tags:[],version:"19.x",frontMatter:{id:"running-on-ci",slug:"guide/running-on-ci",title:"Running on CI",sidebar_label:"Running on CI"},sidebar:"tutorialSidebar",previous:{title:"Developing Your App While Writing Tests",permalink:"/Detox/docs/19.x/guide/developing-while-writing-tests"},next:{title:"Debugging in Xcode During Detox Tests",permalink:"/Detox/docs/19.x/guide/debugging-in-xcode"}},l={},u=[{value:"Running on CI",id:"running-on-ci",level:2},{value:"Step 1: Prepare a Release Configuration for Your App",id:"step-1-prepare-a-release-configuration-for-your-app",level:3},{value:"Step 2: Add <code>build</code> and <code>test</code> Commands to Your CI Script",id:"step-2-add-build-and-test-commands-to-your-ci-script",level:3},{value:"Running Android Tests on CI",id:"running-android-tests-on-ci",level:3},{value:"Appendix",id:"appendix",level:3},{value:"\u2022 Running Detox on Travis CI",id:"-running-detox-on-travis-ci",level:4},{value:"\u2022 Running Detox on Bitrise",id:"-running-detox-on-bitrise",level:4},{value:"\u2022 Running Detox on GitLab CI - Android Only",id:"-running-detox-on-gitlab-ci---android-only",level:4}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"running-on-ci"},"Running on CI"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Disclaimer: This guide is focused on iOS (i.e. lacking info about Android) and is generally out of date.")),(0,o.kt)("p",null,"When your test suite is finally ready, it should be set up to run automatically on your CI server on every git push. This will alert you if new changes to the app break existing functionality."),(0,o.kt)("p",null,"Running Detox on CI is not that different from running it locally. There are two main differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should test a release build rather than a debug build"),(0,o.kt)("li",{parentName:"ul"},"Tell Detox to shut down the simulator when test is over")),(0,o.kt)("h3",{id:"step-1-prepare-a-release-configuration-for-your-app"},"Step 1: Prepare a Release Configuration for Your App"),(0,o.kt)("p",null,"We will need to create a ",(0,o.kt)("a",{parentName:"p",href:"/Detox/docs/19.x/config/overview#device-configurations"},"release device configuration for Detox")," inside ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"detox")," section."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"detox": {\n  "devices": {\n    "simulator": {\n      "type": "ios.simulator",\n      "device": {\n        "type": "iPhone 12 Pro Max"\n      }\n    }\n  },\n  "apps": {\n    "ios.release": {\n      "type": "ios.app",\n      "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/example.app",\n      "build": "xcodebuild -project ios/example.xcodeproj -scheme example -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",\n    }\n  },\n  "configurations": {\n    "ios.sim.release": {\n      "device": "simulator",\n      "app": "ios.release"\n    }\n  }\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TIP: Notice that the name ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," above should be replaced with your actual project name.")),(0,o.kt)("h3",{id:"step-2-add-build-and-test-commands-to-your-ci-script"},"Step 2: Add ",(0,o.kt)("inlineCode",{parentName:"h3"},"build")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"test")," Commands to Your CI Script"),(0,o.kt)("p",null,"Assuming your CI is executing some sort of shell script, add the following commands that should run inside the project root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"detox build --configuration ios.sim.release\ndetox test --configuration ios.sim.release --cleanup\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," Adding ",(0,o.kt)("inlineCode",{parentName:"p"},"--cleanup")," to the test command will make sure detox exits cleanly by shutting down the simulator when the test is over.")),(0,o.kt)("h3",{id:"running-android-tests-on-ci"},"Running Android Tests on CI"),(0,o.kt)("p",null,"Setting up a CI environment capable of running Android tests isn\u2019t as trivial. Fortunately, we\u2019ve written all about it in a ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/wix-engineering/how-to-execute-android-ui-tests-on-ci-and-stay-alive-eb9089d88c1f"},"blogpost on medium!")),(0,o.kt)("h3",{id:"appendix"},"Appendix"),(0,o.kt)("h4",{id:"-running-detox-on-travis-ci"},"\u2022 Running Detox on ",(0,o.kt)("a",{parentName:"h4",href:"https://travis-ci.org/"},"Travis CI")),(0,o.kt)("p",null,"Detox\u2019s own build is running on Travis, check out Detox\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/tree/master/.travis.yml"},(0,o.kt)("inlineCode",{parentName:"a"},".travis.yml"))," file to see how it\u2019s done."),(0,o.kt)("p",null,"This is a simple example configuration to get you started with Detox on Travis:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'language: objective-c\nosx_image: xcode8.3\n\nbranches:\n  only:\n  - master\n\nenv:\n  global:\n  - NODE_VERSION=stable\n\ninstall:\n- brew tap wix/brew\n- brew install applesimutils\n- curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash\n- export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"\n- nvm install $NODE_VERSION\n- nvm use $NODE_VERSION\n- nvm alias default $NODE_VERSION\n\n- npm install react-native-cli --global\n- npm install detox-cli --global\n\nscript:\n- detox build --configuration ios.sim.release\n- detox test --configuration ios.sim.release --cleanup\n\n')),(0,o.kt)("h4",{id:"-running-detox-on-bitrise"},"\u2022 Running Detox on ",(0,o.kt)("a",{parentName:"h4",href:"https://www.bitrise.io/"},"Bitrise")),(0,o.kt)("p",null,"Bitrise is a popular CI service for automating React Native apps. If you are looking to get started with Bitrise, check out ",(0,o.kt)("a",{parentName:"p",href:"https://blog.bitrise.io/post/how-to-set-up-a-react-native-app-on-bitrise"},"this")," guide."),(0,o.kt)("p",null,"You can run Detox on Bitrise by creating a new workflow. Below is an example of the Bitrise ",(0,o.kt)("inlineCode",{parentName:"p"},".yml")," file for a workflow called ",(0,o.kt)("inlineCode",{parentName:"p"},"tests"),"."),(0,o.kt)("p",null,"Additionally, you can use a ",(0,o.kt)("a",{parentName:"p",href:"https://devcenter.bitrise.io/en/apps/webhooks/adding-incoming-webhooks.html"},"webhook")," on Bitrise to post the build status directly into your Slack channel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"---\nformat_version: 1.1.0\ndefault_step_lib_source: https://github.com/bitrise-io/bitrise-steplib.git\ntrigger_map:\n- push_branch: \"*\"\n  workflow: tests\nworkflows:\n  _tests_setup:\n    steps:\n    - activate-ssh-key: {}\n    - git-clone:\n        inputs:\n        - clone_depth: ''\n        title: Git Clone Repo\n    - script:\n        inputs:\n        - content: |-\n            #!/bin/bash\n\n            npm cache verify\n\n            npm install\n        title: Install NPM Packages\n    before_run:\n    after_run:\n  _detox_tests:\n    before_run: []\n    after_run: []\n    steps:\n    - npm:\n        inputs:\n        - command: install -g detox-cli\n        title: Install Detox CLI\n    - npm:\n        inputs:\n        - command: install -g react-native-cli\n        title: Install React Native CLI\n    - script:\n        inputs:\n        - content: |-\n            #!/bin/bash\n\n            brew tap wix/brew\n            brew install applesimutils\n        title: Install Detox Utils\n    - script:\n        inputs:\n        - content: |-\n            #!/bin/bash\n\n            detox build --configuration ios.sim.release\n        title: Detox - Build Release App\n    - script:\n        inputs:\n        - content: |-\n            #!/bin/bash\n\n            detox test --configuration ios.sim.release --cleanup\n        title: Detox - Run E2E Tests\n  tests:\n    before_run:\n    - _tests_setup\n    - _detox_tests\n    after_run: []\n")),(0,o.kt)("h4",{id:"-running-detox-on-gitlab-ci---android-only"},"\u2022 Running Detox on ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.gitlab.com/ee/ci/README.html"},"GitLab CI")," - Android Only"),(0,o.kt)("p",null,"GitLab is also a popular git management service which also include a built-in CI system. They provide free runner up to 2000 minutes for private projects, however, the runners provided by them cannot be used to run Detox due to the lack of KVM support (in order to run Android Emulators). You can, instead, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/runners/README.html"},"create your own runner")," with KVM support. Some example of cloud providers offering this are: ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/products/droplets/"},"Digital Ocean"),", AWS (with ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/instance-types/c5/"},"C5 instance types"),"), ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/instances/enable-nested-virtualization-vm-instances"},"Google Cloud")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/nested-virtualization"},"Azure")),(0,o.kt)("p",null,"One example of such job can be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'detox_e2e:\n  stage: test\n  image: reactnativecommunity/react-native-android\n  variables:\n  before_script:\n    - npm install envinfo detox-cli --global && envinfo\n    # Increase file watcher limit, see more here: https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details\n    - echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p\n    - mkdir -p /root/.android && touch /root/.android/repositories.cfg\n    # The Dockerimage provides two paths for sdkmanager and avdmanager, which the defaults are from $ANDROID_HOME/cmdline-tools\n    # That is not compatible with the one that Detox is using ($ANDROID_HOME/tools/bin)\n    - echo yes | $ANDROID_HOME/tools/bin/sdkmanager --channel=0 --verbose "system-images;android-27;default;x86_64"\n    # Nexus 6P, API 27, XXXHDPI\n    - echo no | $ANDROID_HOME/tools/bin/avdmanager --verbose create avd --force --name "Nexus6P" --package "system-images;android-27;default;x86_64" --sdcard 200M --device 11\n    - adb start-server\n  script:\n    - npx detox build -c android.emu.release.ci\n    - npx detox test -c android.emu.release.ci --headless\n')))}c.isMDXComponent=!0}}]);