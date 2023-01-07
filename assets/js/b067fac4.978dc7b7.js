"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[5909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const a={id:"getting-started",title:"Getting Started",description:"Getting started with the Cosmetics Developer API."},o=void 0,s={unversionedId:"cosmetics/developer-api/getting-started",id:"cosmetics/developer-api/getting-started",title:"Getting Started",description:"Getting started with the Cosmetics Developer API.",source:"@site/docs/cosmetics/developer-api/getting-started.md",sourceDirName:"cosmetics/developer-api",slug:"/cosmetics/developer-api/getting-started",permalink:"/cosmetics/developer-api/getting-started",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/cosmetics/developer-api/getting-started.md",tags:[],version:"current",lastUpdatedBy:"MherZaqaryan",lastUpdatedAt:1673095387,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{id:"getting-started",title:"Getting Started",description:"Getting started with the Cosmetics Developer API."},sidebar:"cosmetics",previous:{title:"Contributors",permalink:"/cosmetics/contribute/contributors"},next:{title:"Maven Dependency",permalink:"/cosmetics/developer-api/maven-dependency"}},c={},l=[{value:"1. Adding Cosmetics as a soft dependency.",id:"1-adding-cosmetics-as-a-soft-dependency",level:2},{value:"2. Adding Cosmetics existence check.",id:"2-adding-cosmetics-existence-check",level:2},{value:"3. Initializing the Cosmetics API",id:"3-initializing-the-cosmetics-api",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-adding-cosmetics-as-a-soft-dependency"},"1. Adding Cosmetics as a soft dependency."),(0,r.kt)("p",null,"First, please make sure to add ",(0,r.kt)("inlineCode",{parentName:"p"},"BedWars1058-Cosmetics")," as a ",(0,r.kt)("strong",{parentName:"p"},"soft dependency")," so your plugin will start after Cosmetics addon."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is ",(0,r.kt)("strong",{parentName:"p"},"not")," recommended to use BedWars1058-Cosmetics as a ",(0,r.kt)("strong",{parentName:"p"},"dependency"),", for more information about plugin.yml attributes read ",(0,r.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/wiki/plugin-yml/"},"here"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="plugin.yml"',title:'"plugin.yml"'},"softdepend: [BedWars1058-Cosmetics]\n")),(0,r.kt)("h2",{id:"2-adding-cosmetics-existence-check"},"2. Adding Cosmetics existence check."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"You ",(0,r.kt)("strong",{parentName:"p"},"must")," add a check for BedWars1058-Cosmetics plugin existence, before initializing the Cosmetics API.")),(0,r.kt)("p",null,"Checking if the plugin exists on the server startup, this check is important, otherwise your plugin won't work properly."),(0,r.kt)("p",null,"The sample check below will shut down the server, if it doesn't detect the Cosmetics addon."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Main.java"',title:'"Main.java"'},'@Override\npublic void onEnable() {\n    if (Bukkit.getPluginManager().getPlugin("BedWars1058-Cosmetics") == null) {\n        getLogger().severe("BedWars1058 Cosmetics Addon wasn\'t found. Disabling...");\n        Bukkit.getPluginManager().disablePlugin(this);\n        return;\n    }\n}\n')),(0,r.kt)("h2",{id:"3-initializing-the-cosmetics-api"},"3. Initializing the Cosmetics API"),(0,r.kt)("p",null,"The final step is to initialize the API, below shown the method to access it from Bukkit Services Manager."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Main.java"',title:'"Main.java"'},"CosmeticsAPI cosmeticsApi = Bukkit.getServicesManager().getRegistration(CosmeticsAPI.class).getProvider();\n")))}d.isMDXComponent=!0}}]);