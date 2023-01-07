"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[1798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,y=m["".concat(p,".").concat(u)]||m[u]||l[u]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={id:"maven-dependency",title:"Maven Dependency"},i=void 0,c={unversionedId:"cosmetics/developer-api/maven-dependency",id:"cosmetics/developer-api/maven-dependency",title:"Maven Dependency",description:"You must replace all the x.x.x with the current version, which you can find from here.",source:"@site/docs/cosmetics/developer-api/maven-dependency.md",sourceDirName:"cosmetics/developer-api",slug:"/cosmetics/developer-api/maven-dependency",permalink:"/cosmetics/developer-api/maven-dependency",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/cosmetics/developer-api/maven-dependency.md",tags:[],version:"current",lastUpdatedBy:"MherZaqaryan",lastUpdatedAt:1673093458,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{id:"maven-dependency",title:"Maven Dependency"},sidebar:"cosmetics",previous:{title:"Getting Started",permalink:"/cosmetics/developer-api/getting-started"},next:{title:"Feedback",permalink:"/cosmetics/feedback"}},p={},d=[{value:"1. Get the API .jar file from the Discord server.",id:"1-get-the-api-jar-file-from-the-discord-server",level:2},{value:"2. Creating your Maven project.",id:"2-creating-your-maven-project",level:2},{value:"3. Adding the Maven dependency.",id:"3-adding-the-maven-dependency",level:2}],s={toc:d};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"You ",(0,a.kt)("strong",{parentName:"p"},"must")," replace all the ",(0,a.kt)("inlineCode",{parentName:"p"},"x.x.x")," with the current version, which you can find from ",(0,a.kt)("a",{parentName:"p",href:"https://api.polymart.org/v1/getResourceInfoSimple/?resource_id=1619&key=version"},"here"),".")),(0,a.kt)("p",null,"Currently, there is no repository for Cosmetics API dependency, you must manually upload the API ",(0,a.kt)("strong",{parentName:"p"},".jar")," file and add the dependency with ",(0,a.kt)("em",{parentName:"p"},"system")," scope."),(0,a.kt)("h2",{id:"1-get-the-api-jar-file-from-the-discord-server"},"1. Get the API .jar file from the Discord server."),(0,a.kt)("p",null,"Join my ",(0,a.kt)("a",{parentName:"p",href:"https://mher.club/discord"},"Discord")," server, create a ticket and ask for Cosmetics API ",(0,a.kt)("inlineCode",{parentName:"p"},".jar")," file."),(0,a.kt)("p",null,"The author (Mher) will give you the jar file which must has ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmetics-api-x.x.x.jar")," name, but ",(0,a.kt)("inlineCode",{parentName:"p"},"x.x.x")," replaced with the ",(0,a.kt)("a",{parentName:"p",href:"https://api.polymart.org/v1/getResourceInfoSimple/?resource_id=1619&key=version"},"current version"),"."),(0,a.kt)("h2",{id:"2-creating-your-maven-project"},"2. Creating your Maven project."),(0,a.kt)("p",null,"Create a new ",(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven")," project and put the jar file into the {projectDirectory}/libraries directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"my-project\n\u251c\u2500\u2500 libraries\n\u2502   \u251c\u2500\u2500 cosmetics-api-x.x.x.jar\n")),(0,a.kt)("h2",{id:"3-adding-the-maven-dependency"},"3. Adding the Maven dependency."),(0,a.kt)("p",null,"Now open your project's ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," file and add the block below in dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>club.mher</groupId>\n  <artifactId>cosmetics-api</artifactId>\n  <version>x.x.x</version>\n  <scope>system</scope>\n  <systemPath>${project.basedir}\\libraries\\cosmetics-api-x.x.x.jar</systemPath>\n</dependency>\n")))}l.isMDXComponent=!0}}]);