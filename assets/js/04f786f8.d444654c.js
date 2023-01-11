"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[9916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=i,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(6010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),i=n(7294),o=n(6010),r=n(2389),l=n(7392),s=n(7094),m=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:r,defaultValue:p,values:d,groupId:h,className:f}=e,k=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,s.U)(),[w,C]=(0,i.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,m.o5)();if(null!=h){const e=b[h];null!=e&&e!==w&&y.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==w&&(x(t),C(a),null!=h&&N(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},f)},y.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:O,onClick:T},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,i.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},3856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),o=n(5488),r=n(5162);const l={id:"main-configuration",title:"Main Configuration"},s=void 0,m={unversionedId:"cosmetics/configuration/main-configuration",id:"cosmetics/configuration/main-configuration",title:"Main Configuration",description:"File location: plugins/BedWars1058/Addons/Cosmetics/config.yml",source:"@site/docs/cosmetics/configuration/main-configuration.md",sourceDirName:"cosmetics/configuration",slug:"/cosmetics/configuration/main-configuration",permalink:"/cosmetics/configuration/main-configuration",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/cosmetics/configuration/main-configuration.md",tags:[],version:"current",lastUpdatedBy:"MherZaqaryan",lastUpdatedAt:1673451659,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{id:"main-configuration",title:"Main Configuration"},sidebar:"cosmetics",previous:{title:"Wood Skin",permalink:"/cosmetics/cosmetic-categories/wood-skin"},next:{title:"Category Configuration",permalink:"/cosmetics/configuration/category-configuration"}},c={},u=[{value:"Command Function",id:"command-function",level:2},{value:"Player",id:"player",level:3},{value:"Console",id:"console",level:3},{value:"Close",id:"close",level:3},{value:"Material",id:"material",level:2},{value:"Amount",id:"amount",level:3},{value:"Enchantment",id:"enchantment",level:3},{value:"Data",id:"data",level:3},{value:"Custom Textured Player Head",id:"custom-textured-player-head",level:3},{value:"Leather Color",id:"leather-color",level:3},{value:"Fill Empty Slots",id:"fill-empty-slots",level:3},{value:"Sounds",id:"sounds",level:2},{value:"Categories",id:"categories",level:2},{value:"Enabling or Disabling",id:"enabling-or-disabling",level:3},{value:"Default Cosmetic",id:"default-cosmetic",level:3},{value:"Rarities",id:"rarities",level:2},{value:"Priority",id:"priority",level:3},{value:"Color",id:"color",level:3},{value:"Permission Discount",id:"permission-discount",level:2},{value:"Enabled",id:"enabled",level:3},{value:"Identifer",id:"identifer",level:3},{value:"Discount Type",id:"discount-type",level:3},{value:"Value",id:"value",level:3},{value:"Unlock Permission",id:"unlock-permission",level:2},{value:"Permission",id:"permission",level:3},{value:"Priority",id:"priority-1",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{groupId:"dependency-plugin",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,i.kt)("code",null,"plugins/BedWars1058/Addons/Cosmetics/config.yml")),(0,i.kt)(r.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,i.kt)("code",null,"plugins/BedWarsProxy/Addons/Cosmetics/config.yml")),(0,i.kt)(r.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,i.kt)("code",null,"plugins/BedWars1058-Cosmetics/config.yml"))),(0,i.kt)("p",null,"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yml")," file, you can edit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./main-configuration#command-function"},"Commend Function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./main-configuration#material"},"Material")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./main-configuration#sounds"},"Sounds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./main-configuration#categories"},"Categories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./main-configuration#rarities"},"Rarities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./main-configuration#permission-discount"},"Permission Discount")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./main-configuration#unlock-permission"},"Unlock Permission"))),(0,i.kt)("h2",{id:"command-function"},"Command Function"),(0,i.kt)("p",null,"For the categories and cosmetics* menu you may add some items which will run a command when a player clicks on it."),(0,i.kt)("h3",{id:"player"},"Player"),(0,i.kt)("p",null,"To make the command run by the player who clicked, you can just simply put your command in the ",(0,i.kt)("inlineCode",{parentName:"p"},"command: example")," config section."),(0,i.kt)("p",null,"Example Command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  command: "cosmetics menu"\n  material: ...\n  amount: ...\n  enchanted: ...\n  slot: ...\n')),(0,i.kt)("h3",{id:"console"},"Console"),(0,i.kt)("p",null,"To make the command run by the console, you have to use the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"CONSOLE:command")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"command: CONSOLE:example")," config section. You may use ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"{player}"))," placeholder which will be replaced by the player's name who clicked the item."),(0,i.kt)("p",null,"Example Console Command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  command: "CONSOLE:eco give {player} 100"\n  material: ...\n  amount: ...\n  enchanted: ...\n  slot: ...\n')),(0,i.kt)("h3",{id:"close"},"Close"),(0,i.kt)("p",null,"To make the click close the inventory use ",(0,i.kt)("inlineCode",{parentName:"p"},"CLOSE")," identifier for the command section."),(0,i.kt)("p",null,"Example Close Inventory Command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  command: "CLOSE"\n  material: ...\n  amount: ...\n  enchanted: ...\n  slot: ...\n')),(0,i.kt)("h2",{id:"material"},"Material"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use materials from ",(0,i.kt)("a",{parentName:"p",href:"/cosmetics/configuration/useful-resources"},"useful resources")," for your server version.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  material: "HOPPER"\n  amount: 1\n  enchanted: true\n')),(0,i.kt)("h3",{id:"amount"},"Amount"),(0,i.kt)("p",null,"To set an amount for an item use ",(0,i.kt)("inlineCode",{parentName:"p"},"amount: 1")," config section. The maximum amount is 64."),(0,i.kt)("h3",{id:"enchantment"},"Enchantment"),(0,i.kt)("p",null,"To make an item enchanted you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"enchanted: false")," the config section from ",(0,i.kt)("strong",{parentName:"p"},"false")," to ",(0,i.kt)("strong",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"data"},"Data"),(0,i.kt)("p",null,"To use data for material for only 1.8x-1.12x you can use the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"material:data")," for example ",(0,i.kt)("inlineCode",{parentName:"p"},"WOOL:5")," will be lime wool. Otherwise use the full material name for example ",(0,i.kt)("inlineCode",{parentName:"p"},"LIME_WOOL"),"."),(0,i.kt)("h3",{id:"custom-textured-player-head"},"Custom Textured Player Head"),(0,i.kt)("p",null,"To make a textured player head you must use the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"texture:base64")," for example:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example of custom texture head"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  material: "texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjk4YmM2M2YwNWY2Mzc4YmYyOWVmMTBlM2Q4MmFjYjNjZWI3M2E3MjBiZjgwZjMwYmM1NzZkMGFkOGM0MGNmYiJ9fX0="\n  amount: 1\n  enchanted: false\n')),(0,i.kt)("p",null,"Result will be:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://minecraft-heads.com/media/k2/items/cache/a2447921a9bd1ff016b1779eec7e042c_XS.jpg",alt:"Imgur"})),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://minecraft-heads.com/"},"https://minecraft-heads.com/"))),(0,i.kt)("h3",{id:"leather-color"},"Leather Color"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'example-item:\n  material: "LEATHER_LEGGINGS:#FF0000"\n  amount: 1\n  enchanted: false\n')),(0,i.kt)("p",null,"To make colored leather you have to use the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"leather-material:hex-color")," for example ",(0,i.kt)("inlineCode",{parentName:"p"},"LEATHER_LEGGINGS:#FF0000")," will be displayed as red leather leggings."),(0,i.kt)("h3",{id:"fill-empty-slots"},"Fill Empty Slots"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"empty-slots:\n  enabled: false\n  material: STAINED_GLASS_PANE\n  amount: 1\n  enchanted: false\n")),(0,i.kt)("p",null,"To fill the empty slots of the Categories, Cosmetics, and Confirm Purchase menus you have to change the empty-slots path's ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled: false")," section to ",(0,i.kt)("strong",{parentName:"p"},"true"),", to make it fill all the slots which are empty. You may change the material of the filling item. "),(0,i.kt)("h2",{id:"sounds"},"Sounds"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use sounds from ",(0,i.kt)("a",{parentName:"p",href:"/cosmetics/configuration/useful-resources"},"useful resources")," for your server version.")),(0,i.kt)("p",null,"Sounds are used to make some actions more interactive and understandable for players, in the sound section you can configure everything with your desired way."),(0,i.kt)("p",null,"Snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'sounds:\n  cosmetic-select: "NOTE_PLING:1:2"\n  cosmetic-preview: "SUCCESSFUL_HIT"\n')),(0,i.kt)("p",null,"You can configure sounds volume and pitch by using the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"sound:volume:pitch")," for example ",(0,i.kt)("inlineCode",{parentName:"p"},"NOTE_PLING:1:2")," this plays ",(0,i.kt)("strong",{parentName:"p"},"NOTE_PLING")," sound with volume of ",(0,i.kt)("em",{parentName:"p"},"1")," and pitch of ",(0,i.kt)("em",{parentName:"p"},"2"),"."),(0,i.kt)("h2",{id:"categories"},"Categories"),(0,i.kt)("p",null,"Snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'categories:\n  projectile-trail:\n    enabled: true\n    default: "none"\n')),(0,i.kt)("h3",{id:"enabling-or-disabling"},"Enabling or Disabling"),(0,i.kt)("p",null,"To ",(0,i.kt)("strong",{parentName:"p"},"disable")," or ",(0,i.kt)("strong",{parentName:"p"},"enable")," a category set ",(0,i.kt)("strong",{parentName:"p"},"true")," or ",(0,i.kt)("strong",{parentName:"p"},"false")," for the corresponding category's enabled configuration section."),(0,i.kt)("h3",{id:"default-cosmetic"},"Default Cosmetic"),(0,i.kt)("p",null,"To modify the default cosmetic of a category handle to the ",(0,i.kt)("inlineCode",{parentName:"p"},"default:")," configuration section and modify it with the corresponding category's cosmetic identifier."),(0,i.kt)("h2",{id:"rarities"},"Rarities"),(0,i.kt)("p",null,"Rarities are used to sort the cosmetics, so if the cosmetics has a high proiority rarity then that cosmetics is more better than the one that is set to low proiority rarity. Rarities can be applied to the cosmetics which later can be used by the sorter feature to sort the cosmetics by lowest to highest rarity or vice versa."),(0,i.kt)("p",null,"Snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rarities:\n  common:\n    priority: 1\n    color: GREEN\n")),(0,i.kt)("h3",{id:"priority"},"Priority"),(0,i.kt)("p",null,"The priority will be in the range of 1-\u221e it will help the sorter feature to sort the cosmetics in the menu when using the sorter item."),(0,i.kt)("h3",{id:"color"},"Color"),(0,i.kt)("p",null,"The color for the rarity is the usual chat colors which you can find here. Those colors won't affect the sorting."),(0,i.kt)("h2",{id:"permission-discount"},"Permission Discount"),(0,i.kt)("p",null,"Permission discounts will allow you to make permissions that will discount the price of a cosmetic by a percentage or an amount that is set for the corresponding permission discount, which then could be applied to a player or a group."),(0,i.kt)("p",null,"Example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"permission-discount:\n  enabled: true\n  example-percentage:\n    discount-type: PERCENTAGE\n    value: 20\n  example-amount:\n    discount-type: AMOUNT\n    value: 1000\n")),(0,i.kt)("h3",{id:"enabled"},"Enabled"),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"enabled")," path is set to true this feature will be activated."),(0,i.kt)("h3",{id:"identifer"},"Identifer"),(0,i.kt)("p",null,"The identifier is the base path for example the ",(0,i.kt)("inlineCode",{parentName:"p"},"example-percentage")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"example-amount")," (shown in the example)."),(0,i.kt)("p",null,"Identifier is a part of the permission which is formed like ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"bedwars.cosmetics.discount.<identifier>"))),(0,i.kt)("p",null,"For example, if the player has ",(0,i.kt)("strong",{parentName:"p"},"bedwars.cosmetics.discount.example-percentage")," then the player will get a discount by corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"example-percentage")," which is set to 20 percent."),(0,i.kt)("h3",{id:"discount-type"},"Discount Type"),(0,i.kt)("p",null,"Discount types are two, the first one is ",(0,i.kt)("strong",{parentName:"p"},"PERCENTAGE")," which is used to do the discount by the value specified percent, and the second one is ",(0,i.kt)("strong",{parentName:"p"},"AMOUNT")," which will discount the price by the value specified."),(0,i.kt)("h3",{id:"value"},"Value"),(0,i.kt)("p",null,"The value is the number that is used to either do the discount by that percentage or by that amount, check out the ",(0,i.kt)("a",{parentName:"p",href:"main-configuration#discount-type"},"Discount Type")," for more."),(0,i.kt)("h2",{id:"unlock-permission"},"Unlock Permission"),(0,i.kt)("p",null,"Unlock permissions are the permissions that can be attached to some specific cosmetics which will prevent purchasing the corresponding cosmetic without having that specific permission."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"unlock-permission:\n  vip:\n    permission: vip\n    priority: 1\n  mvp-plus:\n    permission: mvp-plus\n    priority: 2\n")),(0,i.kt)("h3",{id:"permission"},"Permission"),(0,i.kt)("p",null,"Permission form: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"bedwars.cosmetics.permit.<identifier>"))),(0,i.kt)("p",null,"The permission's key, the actual permission will look like so when the permission is ",(0,i.kt)("inlineCode",{parentName:"p"},"vip")," for example, then the actual permission will be ",(0,i.kt)("inlineCode",{parentName:"p"},"bedwars.cosmetics.permit.vip")),(0,i.kt)("h3",{id:"priority-1"},"Priority"),(0,i.kt)("p",null,"Can be anything between ",(0,i.kt)("inlineCode",{parentName:"p"},"1-\u221e"),"."),(0,i.kt)("p",null,"This is the priority of the unlock permission, since a cosmetic could have more than one unlock permission, this will be used to determine which permission to demand the player to have (starts from the lower to higher)"))}d.isMDXComponent=!0}}]);