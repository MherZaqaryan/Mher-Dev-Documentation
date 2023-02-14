"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[5511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:r}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=s??d;return p({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var g=n(2389);const b="tabList__CuJ",h="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==l&&(d(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},i,{className:(0,o.Z)("tabs__item",h,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=y(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},3220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={id:"wood-skin",title:"Create Wood Skins"},s=void 0,u={unversionedId:"cosmetics/tutorials/create-cosmetics/wood-skin",id:"cosmetics/tutorials/create-cosmetics/wood-skin",title:"Create Wood Skins",description:"If you need additional help, we'll be happy to help you on our Discord server.",source:"@site/docs/cosmetics/tutorials/create-cosmetics/wood-skin.md",sourceDirName:"cosmetics/tutorials/create-cosmetics",slug:"/cosmetics/tutorials/create-cosmetics/wood-skin",permalink:"/cosmetics/tutorials/create-cosmetics/wood-skin",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/cosmetics/tutorials/create-cosmetics/wood-skin.md",tags:[],version:"current",lastUpdatedBy:"MherZaqaryan",lastUpdatedAt:1676380300,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{id:"wood-skin",title:"Create Wood Skins"},sidebar:"cosmetics",previous:{title:"Create Glyphs",permalink:"/cosmetics/tutorials/create-cosmetics/glyph"},next:{title:"Create Rarities",permalink:"/cosmetics/tutorials/create-rarities"}},c={},d=[{value:"Wood Skin category configuration file.",id:"wood-skin-category-configuration-file",level:2},{value:"Adding a new Wood Skin cosmetic.",id:"adding-a-new-wood-skin-cosmetic",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you need additional help, we'll be happy to help you on our ",(0,a.kt)("a",{parentName:"p",href:"https://mher.club/discord"},"Discord")," server.")),(0,a.kt)("h2",{id:"wood-skin-category-configuration-file"},"Wood Skin category configuration file."),(0,a.kt)(o.Z,{groupId:"dependency",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWars1058/Addons/Cosmetics/Categories/wood-skin.yml")),(0,a.kt)(i.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWarsProxy/Addons/Cosmetics/Categories/wood-skin.yml")),(0,a.kt)(i.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWars1058-Cosmetics/Categories/wood-skin.yml"))),(0,a.kt)("h2",{id:"adding-a-new-wood-skin-cosmetic"},"Adding a new Wood Skin cosmetic."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("a",{parentName:"li",href:"#wood-skin-category-configuration-file"},"glyph's configuration file")," and add a new row under the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"cosmetics"))," path, as shown in the snippet below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="wood-skin.yml (snippet)"',title:'"wood-skin.yml','(snippet)"':!0},"your-wood-skin-identifier:\n  enabled: true\n  material: # The icon's item material.\n  amount: # The icon's item amount.\n  enchanted: # True if you want to have an enchanted icon otherwise false.\n  price: # The price (e.g 5.000, 10.000, 100.000).\n  rarity: # The rarity (e.g common, rare, epic, legendary).\n  skin-material: # The skin material that should be applied in-game.\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Open your desired language file for your ",(0,a.kt)("a",{parentName:"li",href:"../../compatibility#dependencies"},"mode")," and then add a new row under the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"addons.cosmetics.cosmetics.wood-skin"))," path, as shown in the snippet below.")),(0,a.kt)(o.Z,{groupId:"dependency",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWars1058/Languages/messages_(lang).yml")),(0,a.kt)(i.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWarsProxy/Languages/messages_(lang).yml")),(0,a.kt)(i.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,a.kt)("code",null,"plugins/BedWars1058-Cosmetics/Languages/messages_(lang).yml"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="messages_(lang).yml (snippet)"',title:'"messages_(lang).yml','(snippet)"':!0},"your-wood-skin-identifier:\n  display-name: # The display name for current language.\n  description: # The description for current language.\n  - 'Description line 1'\n  - 'Description line 2'\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Save all these files and restart your server."),(0,a.kt)("li",{parentName:"ol"},"You're done, now you should see your custom Wood Skin on the Wood Skins menu via ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"/cosmetic menu wood-skin")),".")))}p.isMDXComponent=!0}}]);