"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[6029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),s=n(2466),i=n(6550),l=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,p]=h({queryString:n,groupId:r}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),y=(()=>{const e=l??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var y=n(2389);const f="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=p[n].value;r!==i&&(c(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",g,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function T(e){const t=k(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",f)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return a.createElement(T,(0,r.Z)({key:String(t)},e))}},5205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),s=n(5162);const i={id:"shopkeeper-skin",title:"Create Shopkeeper Skins"},l=void 0,p={unversionedId:"cosmetics/tutorials/create-cosmetics/shopkeeper-skin",id:"cosmetics/tutorials/create-cosmetics/shopkeeper-skin",title:"Create Shopkeeper Skins",description:"If you need additional help, we'll be happy to help you on our Discord server.",source:"@site/docs/cosmetics/tutorials/create-cosmetics/shopkeeper-skin.md",sourceDirName:"cosmetics/tutorials/create-cosmetics",slug:"/cosmetics/tutorials/create-cosmetics/shopkeeper-skin",permalink:"/cosmetics/tutorials/create-cosmetics/shopkeeper-skin",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/cosmetics/tutorials/create-cosmetics/shopkeeper-skin.md",tags:[],version:"current",lastUpdatedBy:"Mher Zaqaryan",lastUpdatedAt:1691504295,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"shopkeeper-skin",title:"Create Shopkeeper Skins"},sidebar:"cosmetics",previous:{title:"Create Island Topper",permalink:"/cosmetics/tutorials/create-cosmetics/island-topper"},next:{title:"Create Kill Messages",permalink:"/cosmetics/tutorials/create-cosmetics/kill-message"}},u={},c=[{value:"Shopkeeper Skin category configuration file.",id:"shopkeeper-skin-category-configuration-file",level:2},{value:"Adding a new Shopkeeper Skin cosmetic.",id:"adding-a-new-shopkeeper-skin-cosmetic",level:2},{value:"Type SYSTEM",id:"type-system",level:3},{value:"Type ENTITY",id:"type-entity",level:3},{value:"Type SKIN",id:"type-skin",level:3},{value:"Type MIRROR",id:"type-mirror",level:3}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you need additional help, we'll be happy to help you on our ",(0,a.kt)("a",{parentName:"p",href:"https://mher.club/discord"},"Discord")," server.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use entity types from ",(0,a.kt)("a",{parentName:"p",href:"/cosmetics/configuration/useful-resources"},"useful resources")," for your server version.")),(0,a.kt)("h2",{id:"shopkeeper-skin-category-configuration-file"},"Shopkeeper Skin category configuration file."),(0,a.kt)(o.Z,{groupId:"dependency",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWars1058/Addons/Cosmetics/Categories/shopkeeper-skin.yml")),(0,a.kt)(s.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWarsProxy/Addons/Cosmetics/Categories/shopkeeper-skin.yml")),(0,a.kt)(s.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWars1058-Cosmetics/Categories/shopkeeper-skin.yml"))),(0,a.kt)("h2",{id:"adding-a-new-shopkeeper-skin-cosmetic"},"Adding a new Shopkeeper Skin cosmetic."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"#shopkeeper-skin-category-configuration-file"},"shopkeeper skin's configuration file")," and add a new row under the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"cosmetics")),", as shown in the snippet below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="shopkeeper-skin.yml (snippet)"',title:'"shopkeeper-skin.yml','(snippet)"':!0},"your-shopkeeper-skin-identifier:\n  enabled: true\n  material: # The icon's item material.\n  amount: # The icon's item amount.\n  enchanted: # True if you want to have an enchanted icon otherwise false.\n  price: # The price (e.g 5.000, 10.000, 100.000).\n  rarity: # The rarity (e.g common, rare, epic, legendary).\n  type: # Type could be SYSTEM, ENTITY, PLAYER, and MIRROR\n")),(0,a.kt)("h3",{id:"type-system"},"Type SYSTEM"),(0,a.kt)("p",null,"You may add path option when using type ",(0,a.kt)("strong",{parentName:"p"},"SYSTEM"),". You may use the in-built skins' paths for this option which is set by default when loading the addon for the first time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="shopkeeper-skin.yml (snippet)"',title:'"shopkeeper-skin.yml','(snippet)"':!0},"your-shopkeeper-skin-identifier:\n  ...\n  type: SYSTEM\n  path: system-skin # There are lots of system skins available which set as default.\n")),(0,a.kt)("h3",{id:"type-entity"},"Type ENTITY"),(0,a.kt)("p",null,"You may add type option when using type ENTITY. You should specify the entity type for this option (e.g ZOMBIE, CREEPER, etc.)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="shopkeeper-skin.yml (snippet)"',title:'"shopkeeper-skin.yml','(snippet)"':!0},"your-shopkeeper-skin-identifier:\n  ...\n  type: ENTITY\n  entity: SKELETON # The entity type.\n")),(0,a.kt)("h3",{id:"type-skin"},"Type SKIN"),(0,a.kt)("p",null,"You may add ",(0,a.kt)("inlineCode",{parentName:"p"},"skin")," option when using type ",(0,a.kt)("strong",{parentName:"p"},"SKIN"),", this lets you add your own custom skin. To add the skin, get the URL address of your skin's image, go to ",(0,a.kt)("a",{parentName:"p",href:"https://mher.club/skin-generator"},"this")," website, then click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate!")," button and you should get the skin's unique id, signature, and texture values, copy each of them and put them under skin option with the order as shown below."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you already have the skin credentials, put each of them in the paths.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="shopkeeper-skin.yml (snippet)"',title:'"shopkeeper-skin.yml','(snippet)"':!0},"your-shopkeeper-skin-identifier:\n  ...\n  type: PLAYER\n  skin: \n    unique-id: # Unique ID\n    signature: # Signature\n    texture: # Texture\n")),(0,a.kt)("h3",{id:"type-mirror"},"Type MIRROR"),(0,a.kt)("p",null,"This is a type that let us display the player's skin that is using the Shopkeeper Skin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="shopkeeper-skin.yml (snippet)"',title:'"shopkeeper-skin.yml','(snippet)"':!0},"your-shopkeeper-skin-identifier:\n  ...\n  type: MIRROR\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Open your desired language file for your ",(0,a.kt)("a",{parentName:"li",href:"../../compatibility#dependencies"},"mode")," and then add a new row under the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"addons.cosmetics.cosmetics.shopkeeper-skin"))," path, as shown in the snippet below.")),(0,a.kt)(o.Z,{groupId:"dependency",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWars1058/Languages/messages_(lang).yml")),(0,a.kt)(s.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWarsProxy/Languages/messages_(lang).yml")),(0,a.kt)(s.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWars1058-Cosmetics/Languages/messages_(lang).yml"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="messages_(lang).yml (snippet)"',title:'"messages_(lang).yml','(snippet)"':!0},"your-shopkeeper-skin-identifier:\n  display-name: # The display name for the current language.\n  description: # The description for the current language.\n  - 'Description line 1'\n  - 'Description line 2'\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Save all these files and restart your server."),(0,a.kt)("li",{parentName:"ol"},"You're done, now you should see your custom Shopkeeper Skin on the Shopkeeper Skins menu via ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"/cosmetic menu shopkeeper-skin")),".")))}m.isMDXComponent=!0}}]);