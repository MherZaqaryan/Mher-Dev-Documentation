"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[8288],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),s=a(6550),i=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=f({queryString:a,groupId:n}),[p,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),y(e)}),[c,y,o]),tabValues:o}}var g=a(2389);const b="tabList__CuJ",h="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",h,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=y(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}},1590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const s={id:"island-topper",title:"Create Island Topper"},i=void 0,c={unversionedId:"cosmetics/tutorials/create-cosmetics/island-topper",id:"cosmetics/tutorials/create-cosmetics/island-topper",title:"Create Island Topper",description:"If you need additional help, we'll be happy to help you on our Discord server.",source:"@site/docs/cosmetics/tutorials/create-cosmetics/island-topper.md",sourceDirName:"cosmetics/tutorials/create-cosmetics",slug:"/cosmetics/tutorials/create-cosmetics/island-topper",permalink:"/cosmetics/tutorials/create-cosmetics/island-topper",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/cosmetics/tutorials/create-cosmetics/island-topper.md",tags:[],version:"current",lastUpdatedBy:"MherZaqaryan",lastUpdatedAt:1690928995,formattedLastUpdatedAt:"Aug 1, 2023",frontMatter:{id:"island-topper",title:"Create Island Topper"},sidebar:"cosmetics",previous:{title:"Create Sprays",permalink:"/cosmetics/tutorials/create-cosmetics/spray"},next:{title:"Create Shopkeeper Skins",permalink:"/cosmetics/tutorials/create-cosmetics/shopkeeper-skin"}},u={},p=[{value:"Island Topper category configuration file.",id:"island-topper-category-configuration-file",level:2},{value:"Adding a new Island Topper cosmetic.",id:"adding-a-new-island-topper-cosmetic",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you need additional help, we'll be happy to help you on our ",(0,r.kt)("a",{parentName:"p",href:"https://mher.club/discord"},"Discord")," server.")),(0,r.kt)("admonition",{title:"important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Before moving on, please confirm that you followed ",(0,r.kt)("a",{parentName:"p",href:"/cosmetics/addon-installation/island-topper-installation"},"these")," instructions when making your custom Island Topper.")),(0,r.kt)("h2",{id:"island-topper-category-configuration-file"},"Island Topper category configuration file."),(0,r.kt)(o.Z,{groupId:"dependency",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,r.kt)("code",null,"plugins/BedWars1058/Addons/Cosmetics/Categories/island-topper.yml")),(0,r.kt)(l.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,r.kt)("code",null,"plugins/BedWarsProxy/Addons/Cosmetics/Categories/island-topper.yml")),(0,r.kt)(l.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,r.kt)("code",null,"plugins/BedWars1058-Cosmetics/Categories/island-topper.yml"))),(0,r.kt)("h2",{id:"adding-a-new-island-topper-cosmetic"},"Adding a new Island Topper cosmetic."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get your schematic file and put it in the directory according to your ",(0,r.kt)("a",{parentName:"p",href:"../../compatibility#dependencies"},"mode"),"."),(0,r.kt)(o.Z,{groupId:"dependency",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"Folder location: ",(0,r.kt)("code",null,"plugins/BedWars1058/Addons/Cosmetics/Island-Topper")),(0,r.kt)(l.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"Folder location: ",(0,r.kt)("code",null,"plugins/BedWarsProxy/Addons/Cosmetics/Island-Topper")),(0,r.kt)(l.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"Folder location: ",(0,r.kt)("code",null,"plugins/BedWars1058-Cosmetics/Island-Topper")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("a",{parentName:"p",href:"#island-topper-category-configuration-file"},"island topper's configuration file")," and add a new row under the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"cosmetics"))," path, as shown in the snippet below."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="island-topper.yml (snippet)"',title:'"island-topper.yml','(snippet)"':!0},"your-island-topper-identifier:\n  enabled: true\n  material: # The icon's item material.\n  amount: # The icon's item amount.\n  enchanted: # True if you want to have an enchanted icon otherwise false.\n  price: # The price (e.g 5.000, 10.000, 100.000).\n  rarity: # The rarity (e.g common, rare, epic, legendary).\n  path: # Island Topper's schematic file path (e.g car.schematic, car.schem).\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Open your desired language file for your ",(0,r.kt)("a",{parentName:"li",href:"../../compatibility#dependencies"},"mode")," and then add a new row under the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"addons.cosmetics.cosmetics.island-topper"))," path, as shown in the snippet below.")),(0,r.kt)(o.Z,{groupId:"dependency",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,r.kt)("code",null,"plugins/BedWars1058/Languages/messages_(lang).yml")),(0,r.kt)(l.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,r.kt)("code",null,"plugins/BedWarsProxy/Languages/messages_(lang).yml")),(0,r.kt)(l.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,r.kt)("code",null,"plugins/BedWars1058-Cosmetics/Languages/messages_(lang).yml"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="messages_(lang).yml (snippet)"',title:'"messages_(lang).yml','(snippet)"':!0},"your-island-topper-identifier:\n  display-name: # The display name for current language.\n  description: # The description for current language.\n  - 'Description line 1'\n  - 'Description line 2'\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Save all these files and restart your server."),(0,r.kt)("li",{parentName:"ol"},"You're done, now you should see your custom Island Topper cosmetic on the Island Topper's menu via ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"/cosmetic menu island-topper")),".")))}m.isMDXComponent=!0}}]);