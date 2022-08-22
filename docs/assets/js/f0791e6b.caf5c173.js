"use strict";(self.webpackChunkhq_tools_docs=self.webpackChunkhq_tools_docs||[]).push([[442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="HQ Toolkit JavaScript SDK",l={unversionedId:"hq-toolkit",id:"hq-toolkit",title:"HQ Toolkit JavaScript SDK",description:"The HQ Toolkit let you integrate easily with the services offered by Headquarters.",source:"@site/docs/hq-toolkit.md",sourceDirName:".",slug:"/hq-toolkit",permalink:"/docs/hq-toolkit",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hq-toolkit.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar"},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Load the SDK",id:"load-the-sdk",level:3},{value:"Initialising the SDK",id:"initialising-the-sdk",level:3},{value:"HQ Multisend",id:"hq-multisend",level:2},{value:"Getting Started (ReactJS)",id:"getting-started-reactjs",level:2},{value:"Using the Multisend component",id:"using-the-multisend-component",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hq-toolkit-javascript-sdk"},"HQ Toolkit JavaScript SDK"),(0,o.kt)("p",null,"The HQ Toolkit let you integrate easily with the services offered by Headquarters."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"load-the-sdk"},"Load the SDK"),(0,o.kt)("p",null,"Load the latest hq-toolkit SDK into your website. Find the latest version on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flowstation/hq-toolkit"},"HQ Toolkit Github page"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="./hq-0.1.1.min.js"><\/script>\n')),(0,o.kt)("h3",{id:"initialising-the-sdk"},"Initialising the SDK"),(0,o.kt)("p",null,"In your JavaScript initialise the HQ Toolkit SDK by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," function. The parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"logoUrl")," are required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.addEventListener('DOMContentLoaded', function () {\n  hq.init({\n    name: 'My Web Project',\n    url: 'https://mywebproject.com',\n    logoUrl: 'https://mywebproject.com/img/logo.svg'\n  })\n})\n")),(0,o.kt)("h2",{id:"hq-multisend"},"HQ Multisend"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://app.hq.xyz/multisend"},"HQ Multisend")," allows you to quickle distribute funds to a list of multiple recipients. Using the HQ Toolkit JavaScript SDKs ",(0,o.kt)("inlineCode",{parentName:"p"},"multisend")," function you can embed a button into your website that provides a link to prefill the HQ Multisend form with a list of recipient wallets and corresponding token amounts."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"HQ Multisend Embed Button",src:n(8110).Z,width:"678",height:"278"})),(0,o.kt)("p",null,"To do so, the ",(0,o.kt)("inlineCode",{parentName:"p"},"multisend")," function expects a DOM element id as ",(0,o.kt)("inlineCode",{parentName:"p"},"elem"),", this is the element the button will be rendered in, a ",(0,o.kt)("inlineCode",{parentName:"p"},"purpose")," describing the transaction and a ",(0,o.kt)("inlineCode",{parentName:"p"},"recipients")," array containing objects with the details of each recipient. An optional ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," text can be passed to change the button label."),(0,o.kt)("p",null,"Calling the function multiple times will update the parameters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"hq.multisend({\n    elem: 'multisend',\n    purpose: 'Distribute funds',\n    label: 'Send transaction with HQ Multisend',\n    recipients: [{\n        address: '0xcEe6FeBe294D5591ed3ec94EBfcE35067cBA901F',\n        token: 'USDC',\n        amount: 0.01,\n        remarks: 'Remarks'\n    }]\n})\n")),(0,o.kt)("h2",{id:"getting-started-reactjs"},"Getting Started (ReactJS)"),(0,o.kt)("p",null,"Import the latest version of the HQ Multisend for React with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install hq-toolkit"),"."),(0,o.kt)("h3",{id:"using-the-multisend-component"},"Using the Multisend component"),(0,o.kt)("p",null,"Import the componenent and make a variable available for use in your React component that holds the following configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Multisend } from 'hq-toolkit'\n\nconst hq_config = {\n    name: 'My Web Project',\n    url: 'https://mywebproject.com',\n    logoUrl: 'https://mywebproject.com/img/logo.svg'\n  }\n")),(0,o.kt)("p",null,"In your React render function, use the Multisend component in the following way and pass ",(0,o.kt)("inlineCode",{parentName:"p"},"recipients")," array, the transfer ",(0,o.kt)("inlineCode",{parentName:"p"},"purpose"),", and the optional button ",(0,o.kt)("inlineCode",{parentName:"p"},"label"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<Multisend\n  config={hq_config}\n  purpose='Distribute funds'\n  label='Send transaction with HQ Multisend'\n  recipients={[{\n    address: '0xcEe6FeBe294D5591ed3ec94EBfcE35067cBA901F',\n    token: 'USDC',\n    amount: 0.01,\n    remarks: 'Remarks'\n  }]}\n/>\n")))}d.isMDXComponent=!0},8110:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hq-multisend-button-d7a62d4d78af39b68a16d1f90c8f21eb.png"}}]);