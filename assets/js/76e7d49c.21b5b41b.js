"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[7584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={id:"standalone-additions",title:"Standalone Additions"},i=void 0,s={unversionedId:"cosmetics/addon-installation/standalone-additions",id:"cosmetics/addon-installation/standalone-additions",title:"Standalone Additions",description:"If you are using BedWars1058 in SHARED, MULTIARENA, or BUNGEE (with BedWarsProxy) you can skip this page, the database credentials is being filled automatically in these type of servers.",source:"@site/docs/cosmetics/addon-installation/standalone-additions.md",sourceDirName:"cosmetics/addon-installation",slug:"/cosmetics/addon-installation/standalone-additions",permalink:"/cosmetics/addon-installation/standalone-additions",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/cosmetics/addon-installation/standalone-additions.md",tags:[],version:"current",lastUpdatedBy:"MherZaqaryan",lastUpdatedAt:1675098154,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{id:"standalone-additions",title:"Standalone Additions"},sidebar:"cosmetics",previous:{title:"Addon Installation",permalink:"/cosmetics/addon-installation/"},next:{title:"Addon Tutorials",permalink:"/cosmetics/addon-tutorials"}},l={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are using BedWars1058 in ",(0,o.kt)("strong",{parentName:"p"},"SHARED"),", ",(0,o.kt)("strong",{parentName:"p"},"MULTIARENA"),", or ",(0,o.kt)("strong",{parentName:"p"},"BUNGEE")," (with BedWarsProxy) you can skip this page, the database credentials is being filled automatically in these type of servers.")),(0,o.kt)("p",null,"If you have STANDALONE mode server (read ",(0,o.kt)("a",{parentName:"p",href:"../compatibility#dependencies"},"this")," article for modes) you have to fill the credentials of the database in the configuration file of BedWars1058 Cosmetics."),(0,o.kt)("p",null,"You can find the configuration file at ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/BedWars1058-Cosmetics/config.yml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yml"',title:'"config.yml"'},"database: SQLITE # (Options: SQLITE, MYSQL)\nmysql:\n  host: localhost\n  port: 3306\n  database: bedwars1058-cosmetics\n  username: root\n  password: root\n  ssl: false\n")),(0,o.kt)("p",null,"There are two options for database types, you should use ",(0,o.kt)("strong",{parentName:"p"},"MYSQL")," if you have MySQL database to sync the servers, and ",(0,o.kt)("strong",{parentName:"p"},"SQLITE")," if you want to store the data locally (not recommended for ",(0,o.kt)("strong",{parentName:"p"},"STANDALONE"),")."),(0,o.kt)("p",null,"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"database: MYSQL")," is set to ",(0,o.kt)("strong",{parentName:"p"},"MYSQL")," you have to fill the ",(0,o.kt)("strong",{parentName:"p"},"mysql")," credentials below, otherwise if it is ",(0,o.kt)("inlineCode",{parentName:"p"},"database: SQLIE")," just leave it."))}p.isMDXComponent=!0}}]);