"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[9916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=s??m;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var k=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(m(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},o,{className:(0,i.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},3856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162);const l={id:"main-configuration",title:"Main Configuration"},s=void 0,u={unversionedId:"cosmetics/configuration/main-configuration",id:"cosmetics/configuration/main-configuration",title:"Main Configuration",description:"File location: plugins/BedWars1058/Addons/Cosmetics/config.yml",source:"@site/docs/cosmetics/configuration/main-configuration.md",sourceDirName:"cosmetics/configuration",slug:"/cosmetics/configuration/main-configuration",permalink:"/cosmetics/configuration/main-configuration",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/cosmetics/configuration/main-configuration.md",tags:[],version:"current",lastUpdatedBy:"Mher Zaqaryan",lastUpdatedAt:1691504343,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"main-configuration",title:"Main Configuration"},sidebar:"cosmetics",previous:{title:"Wood Skin",permalink:"/cosmetics/cosmetic-categories/wood-skin"},next:{title:"Category Configuration",permalink:"/cosmetics/configuration/category-configuration"}},c={},m=[{value:"Command Function",id:"command-function",level:2},{value:"Player",id:"player",level:3},{value:"Console",id:"console",level:3},{value:"Close",id:"close",level:3},{value:"Material",id:"material",level:2},{value:"Amount",id:"amount",level:3},{value:"Enchantment",id:"enchantment",level:3},{value:"Data",id:"data",level:3},{value:"Custom Textured Player Head",id:"custom-textured-player-head",level:3},{value:"Leather Color",id:"leather-color",level:3},{value:"Fill Empty Slots",id:"fill-empty-slots",level:3},{value:"Sounds",id:"sounds",level:2},{value:"Categories",id:"categories",level:2},{value:"Enabling or Disabling",id:"enabling-or-disabling",level:3},{value:"Default Cosmetic",id:"default-cosmetic",level:3},{value:"Rarities",id:"rarities",level:2},{value:"Priority",id:"priority",level:3},{value:"Color",id:"color",level:3},{value:"Permission Discount",id:"permission-discount",level:2},{value:"Enabled",id:"enabled",level:3},{value:"Identifer",id:"identifer",level:3},{value:"Discount Type",id:"discount-type",level:3},{value:"Value",id:"value",level:3},{value:"Unlock Permission",id:"unlock-permission",level:2},{value:"Permission",id:"permission",level:3},{value:"Priority",id:"priority-1",level:3}],p={toc:m},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{groupId:"dependency-plugin",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,r.kt)("code",null,"plugins/BedWars1058/Addons/Cosmetics/config.yml")),(0,r.kt)(o.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,r.kt)("code",null,"plugins/BedWarsProxy/Addons/Cosmetics/config.yml")),(0,r.kt)(o.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,r.kt)("code",null,"plugins/BedWars1058-Cosmetics/config.yml"))),(0,r.kt)("p",null,"From the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml")," file, you can edit:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./main-configuration#command-function"},"Commend Function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./main-configuration#material"},"Material")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./main-configuration#sounds"},"Sounds")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./main-configuration#categories"},"Categories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./main-configuration#rarities"},"Rarities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./main-configuration#permission-discount"},"Permission Discount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./main-configuration#unlock-permission"},"Unlock Permission"))),(0,r.kt)("h2",{id:"command-function"},"Command Function"),(0,r.kt)("p",null,"For the categories and cosmetics* menu you may add some items which will run a command when a player clicks on it."),(0,r.kt)("h3",{id:"player"},"Player"),(0,r.kt)("p",null,"To make the command run by the player who clicked, you can just simply put your command in the ",(0,r.kt)("inlineCode",{parentName:"p"},"command: example")," config section."),(0,r.kt)("p",null,"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  command: "cosmetics menu"\n  material: ...\n  amount: ...\n  enchanted: ...\n  slot: ...\n')),(0,r.kt)("h3",{id:"console"},"Console"),(0,r.kt)("p",null,"To make the command run by the console, you have to use the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"CONSOLE:command")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"command: CONSOLE:example")," config section. You may use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"{player}"))," placeholder which will be replaced by the player's name who clicked the item."),(0,r.kt)("p",null,"Example Console Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  command: "CONSOLE:eco give {player} 100"\n  material: ...\n  amount: ...\n  enchanted: ...\n  slot: ...\n')),(0,r.kt)("h3",{id:"close"},"Close"),(0,r.kt)("p",null,"To make the click close the inventory use ",(0,r.kt)("inlineCode",{parentName:"p"},"CLOSE")," identifier for the command section."),(0,r.kt)("p",null,"Example Close Inventory Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  command: "CLOSE"\n  material: ...\n  amount: ...\n  enchanted: ...\n  slot: ...\n')),(0,r.kt)("h2",{id:"material"},"Material"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use materials from ",(0,r.kt)("a",{parentName:"p",href:"/cosmetics/configuration/useful-resources"},"useful resources")," for your server version.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  material: "HOPPER"\n  amount: 1\n  enchanted: true\n')),(0,r.kt)("h3",{id:"amount"},"Amount"),(0,r.kt)("p",null,"To set an amount for an item use ",(0,r.kt)("inlineCode",{parentName:"p"},"amount: 1")," config section. The maximum amount is 64."),(0,r.kt)("h3",{id:"enchantment"},"Enchantment"),(0,r.kt)("p",null,"To make an item enchanted you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"enchanted: false")," the config section from ",(0,r.kt)("strong",{parentName:"p"},"false")," to ",(0,r.kt)("strong",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"data"},"Data"),(0,r.kt)("p",null,"To use data for material for only 1.8x-1.12x you can use the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"material:data")," for example ",(0,r.kt)("inlineCode",{parentName:"p"},"WOOL:5")," will be lime wool. Otherwise use the full material name for example ",(0,r.kt)("inlineCode",{parentName:"p"},"LIME_WOOL"),"."),(0,r.kt)("h3",{id:"custom-textured-player-head"},"Custom Textured Player Head"),(0,r.kt)("p",null,"To make a textured player head you must use the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"texture:base64")," for example:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example of custom texture head"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  material: "texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjk4YmM2M2YwNWY2Mzc4YmYyOWVmMTBlM2Q4MmFjYjNjZWI3M2E3MjBiZjgwZjMwYmM1NzZkMGFkOGM0MGNmYiJ9fX0="\n  amount: 1\n  enchanted: false\n')),(0,r.kt)("p",null,"Result will be:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://minecraft-heads.com/media/k2/items/cache/a2447921a9bd1ff016b1779eec7e042c_XS.jpg",alt:"Imgur"})),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://minecraft-heads.com/"},"https://minecraft-heads.com/"))),(0,r.kt)("h3",{id:"leather-color"},"Leather Color"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  material: "LEATHER_LEGGINGS:#FF0000"\n  amount: 1\n  enchanted: false\n')),(0,r.kt)("p",null,"To make colored leather you have to use the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"leather-material:hex-color")," for example ",(0,r.kt)("inlineCode",{parentName:"p"},"LEATHER_LEGGINGS:#FF0000")," will be displayed as red leather leggings."),(0,r.kt)("h3",{id:"fill-empty-slots"},"Fill Empty Slots"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"empty-slots:\n  enabled: false\n  material: STAINED_GLASS_PANE\n  amount: 1\n  enchanted: false\n")),(0,r.kt)("p",null,"To fill the empty slots of the Categories, Cosmetics, and Confirm Purchase menus you have to change the empty-slots path's ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled: false")," section to ",(0,r.kt)("strong",{parentName:"p"},"true"),", to make it fill all the slots which are empty. You may change the material of the filling item. "),(0,r.kt)("h2",{id:"sounds"},"Sounds"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use sounds from ",(0,r.kt)("a",{parentName:"p",href:"/cosmetics/configuration/useful-resources"},"useful resources")," for your server version.")),(0,r.kt)("p",null,"Sounds are used to make some actions more interactive and understandable for players, in the sound section you can configure everything with your desired way."),(0,r.kt)("p",null,"Snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'sounds:\n  cosmetic-select: "NOTE_PLING:1:2"\n  cosmetic-preview: "SUCCESSFUL_HIT"\n')),(0,r.kt)("p",null,"You can configure sounds volume and pitch by using the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"sound:volume:pitch")," for example ",(0,r.kt)("inlineCode",{parentName:"p"},"NOTE_PLING:1:2")," this plays ",(0,r.kt)("strong",{parentName:"p"},"NOTE_PLING")," sound with volume of ",(0,r.kt)("em",{parentName:"p"},"1")," and pitch of ",(0,r.kt)("em",{parentName:"p"},"2"),"."),(0,r.kt)("h2",{id:"categories"},"Categories"),(0,r.kt)("p",null,"Snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'categories:\n  projectile-trail:\n    enabled: true\n    default: "none"\n')),(0,r.kt)("h3",{id:"enabling-or-disabling"},"Enabling or Disabling"),(0,r.kt)("p",null,"To ",(0,r.kt)("strong",{parentName:"p"},"disable")," or ",(0,r.kt)("strong",{parentName:"p"},"enable")," a category set ",(0,r.kt)("strong",{parentName:"p"},"true")," or ",(0,r.kt)("strong",{parentName:"p"},"false")," for the corresponding category's enabled configuration section."),(0,r.kt)("h3",{id:"default-cosmetic"},"Default Cosmetic"),(0,r.kt)("p",null,"To modify the default cosmetic of a category handle to the ",(0,r.kt)("inlineCode",{parentName:"p"},"default:")," configuration section and modify it with the corresponding category's cosmetic identifier."),(0,r.kt)("h2",{id:"rarities"},"Rarities"),(0,r.kt)("p",null,"Rarities are used to sort the cosmetics, so if the cosmetics has a high proiority rarity then that cosmetics is more better than the one that is set to low proiority rarity. Rarities can be applied to the cosmetics which later can be used by the sorter feature to sort the cosmetics by lowest to highest rarity or vice versa."),(0,r.kt)("p",null,"Snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"rarities:\n  common:\n    priority: 1\n    color: GREEN\n")),(0,r.kt)("h3",{id:"priority"},"Priority"),(0,r.kt)("p",null,"The priority will be in the range of 1-\u221e it will help the sorter feature to sort the cosmetics in the menu when using the sorter item."),(0,r.kt)("h3",{id:"color"},"Color"),(0,r.kt)("p",null,"The color for the rarity is the usual chat colors which you can find here. Those colors won't affect the sorting."),(0,r.kt)("h2",{id:"permission-discount"},"Permission Discount"),(0,r.kt)("p",null,"Permission discounts will allow you to make permissions that will discount the price of a cosmetic by a percentage or an amount that is set for the corresponding permission discount, which then could be applied to a player or a group."),(0,r.kt)("p",null,"Example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"permission-discount:\n  enabled: true\n  example-percentage:\n    discount-type: PERCENTAGE\n    value: 20\n  example-amount:\n    discount-type: AMOUNT\n    value: 1000\n")),(0,r.kt)("h3",{id:"enabled"},"Enabled"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," path is set to true this feature will be activated."),(0,r.kt)("h3",{id:"identifer"},"Identifer"),(0,r.kt)("p",null,"The identifier is the base path for example the ",(0,r.kt)("inlineCode",{parentName:"p"},"example-percentage")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"example-amount")," (shown in the example)."),(0,r.kt)("p",null,"Identifier is a part of the permission which is formed like ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bedwars.cosmetics.discount.<identifier>"))),(0,r.kt)("p",null,"For example, if the player has ",(0,r.kt)("strong",{parentName:"p"},"bedwars.cosmetics.discount.example-percentage")," then the player will get a discount by corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"example-percentage")," which is set to 20 percent."),(0,r.kt)("h3",{id:"discount-type"},"Discount Type"),(0,r.kt)("p",null,"Discount types are two, the first one is ",(0,r.kt)("strong",{parentName:"p"},"PERCENTAGE")," which is used to do the discount by the value specified percent, and the second one is ",(0,r.kt)("strong",{parentName:"p"},"AMOUNT")," which will discount the price by the value specified."),(0,r.kt)("h3",{id:"value"},"Value"),(0,r.kt)("p",null,"The value is the number that is used to either do the discount by that percentage or by that amount, check out the ",(0,r.kt)("a",{parentName:"p",href:"main-configuration#discount-type"},"Discount Type")," for more."),(0,r.kt)("h2",{id:"unlock-permission"},"Unlock Permission"),(0,r.kt)("p",null,"Unlock permissions are the permissions that can be attached to some specific cosmetics which will prevent purchasing the corresponding cosmetic without having that specific permission."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"unlock-permission:\n  vip:\n    permission: vip\n    priority: 1\n  mvp-plus:\n    permission: mvp-plus\n    priority: 2\n")),(0,r.kt)("h3",{id:"permission"},"Permission"),(0,r.kt)("p",null,"Permission form: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"bedwars.cosmetics.permit.<identifier>"))),(0,r.kt)("p",null,"The permission's key, the actual permission will look like so when the permission is ",(0,r.kt)("inlineCode",{parentName:"p"},"vip")," for example, then the actual permission will be ",(0,r.kt)("inlineCode",{parentName:"p"},"bedwars.cosmetics.permit.vip")),(0,r.kt)("h3",{id:"priority-1"},"Priority"),(0,r.kt)("p",null,"Can be anything between ",(0,r.kt)("inlineCode",{parentName:"p"},"1-\u221e"),"."),(0,r.kt)("p",null,"This is the priority of the unlock permission, since a cosmetic could have more than one unlock permission, this will be used to determine which permission to demand the player to have (starts from the lower to higher)"))}h.isMDXComponent=!0}}]);