"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[1985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=d({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??m;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(m(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:p},i,{className:(0,o.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},6107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={id:"category-configuration",title:"Category Configuration"},s=void 0,c={unversionedId:"cosmetics/configuration/category-configuration",id:"cosmetics/configuration/category-configuration",title:"Category Configuration",description:"BedWars1058 Cosmetics Addon's each category has its own configuration file since the 1.0.1 version.",source:"@site/docs/cosmetics/configuration/category-configuration.md",sourceDirName:"cosmetics/configuration",slug:"/cosmetics/configuration/category-configuration",permalink:"/cosmetics/configuration/category-configuration",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/cosmetics/configuration/category-configuration.md",tags:[],version:"current",lastUpdatedBy:"Mher Zaqaryan",lastUpdatedAt:1691504343,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"category-configuration",title:"Category Configuration"},sidebar:"cosmetics",previous:{title:"Main Configuration",permalink:"/cosmetics/configuration/main-configuration"},next:{title:"Language Configuration",permalink:"/cosmetics/configuration/language-configuration"}},u={},m=[{value:"Configuration Structure",id:"configuration-structure",level:2},{value:"Enabled",id:"enabled",level:2},{value:"Obtaining Methods",id:"obtaining-methods",level:2},{value:"None",id:"none",level:3},{value:"Coin",id:"coin",level:3},{value:"Permission",id:"permission",level:3},{value:"Unlock Permission",id:"unlock-permission",level:2},{value:"Price",id:"price",level:2},{value:"Rarity",id:"rarity",level:2}],p={toc:m},h="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"BedWars1058 Cosmetics Addon's each category has its own configuration file since the ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0.1")," version."),(0,r.kt)(o.Z,{groupId:"dependency-plugin",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"Folder location: ",(0,r.kt)("code",null,"plugins/BedWars1058/Addons/Cosmetics/Categories")),(0,r.kt)(i.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"Folder location: ",(0,r.kt)("code",null,"plugins/BedWarsProxy/Addons/Cosmetics/Categories")),(0,r.kt)(i.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"Folder location: ",(0,r.kt)("code",null,"plugins/BedWars1058-Cosmetics/Categories"))),(0,r.kt)("p",null,"Each file contains cosmetics for the corresponding category, you may add more cosmetics for various categories, learn more about them here."),(0,r.kt)("h2",{id:"configuration-structure"},"Configuration Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cosmetics/configuration/category-configuration#enabled"},"Enabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cosmetics/configuration/category-configuration#obtaining-methods"},"Obtaining Methods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cosmetics/configuration/category-configuration#unlock-permission"},"Unlock Permission")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cosmetics/configuration/main-configuration#material"},"Material")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cosmetics/configuration/main-configuration#amount"},"Amount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cosmetics/configuration/main-configuration#enchantment"},"Enchanted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cosmetics/configuration/category-configuration#price"},"Price")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cosmetics/configuration/category-configuration#rarity"},"Rarity"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"example:\n  enabled: true\n  obtaining-methods: COIN,PERMISSION\n  unlock-permission: example-unlock-permit\n  material: DIAMOND_BLOCK\n  amount: 1\n  enchanted: false\n  price: 100000\n  rarity: legendary\n")),(0,r.kt)("h2",{id:"enabled"},"Enabled"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"example:\n  enabled: # true or false\n  obtaining-methods: ...\n  unlock-permission: ...\n  material: ...\n  amount: ...\n  enchanted: ...\n  price: ...\n  rarity: ...\n")),(0,r.kt)("p",null,"This is a configuration section to make the cosmetics either enabled or disabled."),(0,r.kt)("p",null,"When this configuration is set to ",(0,r.kt)("strong",{parentName:"p"},"false"),", the cosmetic will not be shown in the category menu for the corresponding cosmetic category."),(0,r.kt)("p",null,"When this configuration is set to ",(0,r.kt)("strong",{parentName:"p"},"true"),", the cosmetic will be available in the category menu for the corresponding cosmetic category."),(0,r.kt)("h2",{id:"obtaining-methods"},"Obtaining Methods"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"example:\n  enabled: # true or false\n  obtaining-methods: # NONE, COIN and PERMISSION\n  unlock-permission: ...\n  material: ...\n  amount: ...\n  enchanted: ...\n  price: ...\n  rarity: ...\n")),(0,r.kt)("p",null,"There is a configuration section for each cosmetic to modify the obtaining way of a cosmetic."),(0,r.kt)("p",null,"There are three types of obtaining methods ",(0,r.kt)("strong",{parentName:"p"},"NONE"),", ",(0,r.kt)("strong",{parentName:"p"},"COIN"),", and ",(0,r.kt)("strong",{parentName:"p"},"PERMISSION"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You may use multiple obtaining methods by separating them with commas, like ",(0,r.kt)("strong",{parentName:"p"},"PERMISSION"),",",(0,r.kt)("strong",{parentName:"p"},"COIN"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you use the ",(0,r.kt)("strong",{parentName:"p"},"NONE")," obtaining method with other obtaining methods, then only the other ones should be counted as methods.")),(0,r.kt)("h3",{id:"none"},"None"),(0,r.kt)("p",null,"This obtaining method will prevent the player from buying, and even after purchasing the cosmetic, will prevent the player to get it even when the player has the corresponding permission for a cosmetic"),(0,r.kt)("h3",{id:"coin"},"Coin"),(0,r.kt)("p",null,"This obtaining method will only let the players buy the cosmetics with coins only, having corresponding permission for corresponding cosmetics will not make the player have the cosmetic when you use this method only."),(0,r.kt)("h3",{id:"permission"},"Permission"),(0,r.kt)("p",null,"This obtaining method will only let the player obtain cosmetics with corresponding permission only. If you use this as a method only you may not be able to buy cosmetics with coins."),(0,r.kt)("h2",{id:"unlock-permission"},"Unlock Permission"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"example:\n  enabled: # true or false\n  obtaining-methods: # NONE, COIN and PERMISSION\n  unlock-permission: # The unlock permission(s) (seperated by commas)\n  material: ...\n  amount: ...\n  enchanted: ...\n  price: ...\n  rarity: ...\n")),(0,r.kt)("p",null,"Unlock permissions are the permissions that can be attached to some specific cosmetics which will prevent purchasing (even if the player has the permission to own the cosmetic) the corresponding cosmetic without having that specific permission."),(0,r.kt)("p",null,"Read more about how to create unlock permissions ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/cosmetics/configuration/main-configuration#unlock-permission"},"here")),"."),(0,r.kt)("h2",{id:"price"},"Price"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"example:\n  enabled: # true or false\n  obtaining-methods: # NONE, COIN and PERMISSION\n  unlock-permission: # The unlock permission(s) (seperated by commas)\n  material: # The material for the cosmetic to show in the menu\n  amount: # The amount for the icon\n  enchanted: # Either true or false\n  price: # The price that the player has to pay (Only when the COIN obtaining method is available)\n  rarity: ...\n")),(0,r.kt)("p",null,"This is the price of a cosmetic that the player could purchase when the obtaining ",(0,r.kt)("a",{parentName:"p",href:"/cosmetics/configuration/category-configuration#coin"},"COIN")," method exists, this feature only works when ",(0,r.kt)("a",{parentName:"p",href:"/cosmetics/hooks/vault-support"},"Vault economy")," is enabled."),(0,r.kt)("h2",{id:"rarity"},"Rarity"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"example:\n  enabled: # true or false\n  obtaining-methods: # NONE, COIN and PERMISSION\n  unlock-permission: # The unlock permission(s) (seperated by commas)\n  material: # The material for the cosmetic to show in the menu\n  amount: # The amount for the icon\n  enchanted: # Either true or false\n  price: # The price that the player has to pay (Only when the COIN obtaining method is available)\n  rarity: # Defaults are COMMON, RARE, EPIC and LEGENDARY\n")),(0,r.kt)("p",null,"This is the rarity of a cosmetic, that will help players to know that the higher the rarity is the cooler the cosmetic must be, you may add new rarities, change the colors, and the priorities of each cosmetic."),(0,r.kt)("p",null,"Read more about how to create rarities ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/cosmetics/tutorials/create-rarities"},"here")),"."))}d.isMDXComponent=!0}}]);