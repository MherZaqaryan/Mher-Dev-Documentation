"use strict";(self.webpackChunkmher_club_documentation=self.webpackChunkmher_club_documentation||[]).push([[7948],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(y,l(l({ref:t},c),{},{components:a})):r.createElement(y,l({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=y({queryString:a,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==i&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(g,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(v,(0,r.Z)({key:String(t)},e))}},5160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={id:"create-rarities",title:"Create Rarities"},s=void 0,u={unversionedId:"cosmetics/tutorials/create-rarities",id:"cosmetics/tutorials/create-rarities",title:"Create Rarities",description:"If you need additional help, we'll be happy to help you on our Discord server.",source:"@site/docs/cosmetics/tutorials/create-rarities.md",sourceDirName:"cosmetics/tutorials",slug:"/cosmetics/tutorials/create-rarities",permalink:"/cosmetics/tutorials/create-rarities",draft:!1,editUrl:"https://github.com/MherZaqaryan/Mher-Club-Documentation/edit/master/docs/cosmetics/tutorials/create-rarities.md",tags:[],version:"current",lastUpdatedBy:"Mher Zaqaryan",lastUpdatedAt:1691504343,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{id:"create-rarities",title:"Create Rarities"},sidebar:"cosmetics",previous:{title:"Create Wood Skins",permalink:"/cosmetics/tutorials/create-cosmetics/wood-skin"},next:{title:"Citizens Support",permalink:"/cosmetics/hooks/citizens-support"}},c={},p=[{value:"Default built-in rarities.",id:"default-built-in-rarities",level:2},{value:"Add a new rarity.",id:"add-a-new-rarity",level:2}],d={toc:p},m="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you need additional help, we'll be happy to help you on our ",(0,n.kt)("a",{parentName:"p",href:"https://mher.club/discord"},"Discord")," server.")),(0,n.kt)("p",null,"This addon lets to create custom rarities and apply them to any cosmetic you want."),(0,n.kt)("h2",{id:"default-built-in-rarities"},"Default built-in rarities."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("span",{style:{color:"#55FF55"}},"Common"))," has a priority of 1."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("span",{style:{color:"#55FFFF"}},"Rare"))," has a priority of 2."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("span",{style:{color:"#AA00AA"}},"Epic"))," has a priority of 3."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("span",{style:{color:"#FFAA00"}},"Legendary"))," has a priority of 4.")),(0,n.kt)("h2",{id:"add-a-new-rarity"},"Add a new rarity."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open to the configuration file for you corresponding ",(0,n.kt)("a",{parentName:"li",href:"/cosmetics/compatibility#dependencies"},"mode"),".")),(0,n.kt)(o.Z,{groupId:"dependency-plugin",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWars1058/Addons/Cosmetics/config.yml")),(0,n.kt)(l.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWarsProxy/Addons/Cosmetics/config.yml")),(0,n.kt)(l.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWars1058-Cosmetics/config.yml"))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Add a new row under the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"rarities"))," path as shown in the snippet below.")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"color")," path should be a color from ",(0,n.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html"},"ChatColor"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="config.yml (snippet)"',title:'"config.yml','(snippet)"':!0},"your-rarity-name:\n  priority: # The priority of the rarity (Should be a number).\n  color: # The color of the rarity that's gonna be displayed.\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Open your desired language file for your ",(0,n.kt)("a",{parentName:"li",href:"../../compatibility#dependencies"},"mode")," and then add a new row under the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"addons.cosmetics.rarities"))," path, as shown in the snippet below.")),(0,n.kt)(o.Z,{groupId:"dependency",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"bedwars1058",label:"BedWars1058",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWars1058/Languages/messages_(lang).yml")),(0,n.kt)(l.Z,{value:"bedwarsproxy",label:"BedWarsProxy",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWarsProxy/Languages/messages_(lang).yml")),(0,n.kt)(l.Z,{value:"standalone",label:"Standalone",mdxType:"TabItem"},"File location: ",(0,n.kt)("code",null,"plugins/BedWars1058-Cosmetics/Languages/messages_(lang).yml"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="messages_(lang).yml (snippet)"',title:'"messages_(lang).yml','(snippet)"':!0},"your-rarity-name:\n  display-name: # The name you want it to be displayed for the current language.\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Save all these files."),(0,n.kt)("li",{parentName:"ol"},"You're done, now you can use it for any cosmetic you want, as shown below.")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Example usage of your custom rarity"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"example-cosmetic:\n  enabled: true\n  material: DIAMOND_BLOCK\n  amount: 1\n  enchanted: true\n  price: 500000\n  rarity: your-rarity-name\n"))))}y.isMDXComponent=!0}}]);