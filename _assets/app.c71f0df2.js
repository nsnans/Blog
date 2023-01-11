import{r as e,m as t,n,i as a,w as o,o as r,a as s,b as i,h as l,c,d,e as u,f as h,g as f,j as m,k as g,l as p,t as v,p as A,q as b,s as k,F as y,u as w,v as P,x as C,y as M,z as S,A as x,B as I,C as L,D as B,T as E,E as j}from"./common-bec3f312.js";const T=Symbol();function O(){return function(){const e=a(T);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function D(e,t,n=!1){const a=document.getElementById("app").offsetTop,o=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(o){const e=o.offsetTop-a-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}function N(e,t){const n=Array.from(document.querySelectorAll("meta"));let a=!0;const r=e=>{a?a=!1:(n.forEach((e=>document.head.removeChild(e))),n.length=0,e&&e.length&&e.forEach((e=>{const t=function([e,t,n]){const a=document.createElement(e);for(const e in t)a.setAttribute(e,t[e]);n&&(a.innerHTML=n);return a}(e);document.head.appendChild(t),n.push(t)})))};o((()=>{const n=e.value,a=t.value,o=n&&n.title;document.title=(o?o+" | ":"")+a.title,r([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:a.description}],...a.head,...n&&n.frontmatter.head||[]])}))}const F=Symbol();function R(){const e=a(F);if(!e)throw new Error("usePageData() is called without provider.");return e}const U="undefined"!=typeof window;function $(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),U){const e="/blog/";t=t.slice(e.length).replace(/\//g,"_")+".md";t=`${e}_assets/${t}.${__VP_HASH_MAP__[t]}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const H=new Set,_=()=>document.createElement("link");let V;const q=U&&(V=_())&&V.relList&&V.relList.supports&&V.relList.supports("prefetch")?e=>{const t=_();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const W={setup(){const e=O();return function(){if(!U)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const a=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:a}=t;if(!H.has(a)){H.add(a);const e=$(a);q(e)}}}))})),t((()=>{document.querySelectorAll(".vitepress-content a").forEach((e=>{const{target:t,hostname:a,pathname:o}=e;"_blank"!==t&&a===location.hostname&&(o!==location.pathname?n.observe(e):H.add(o))}))}))};r(a),s(a),i((()=>{n&&n.disconnect()}))}(),()=>e.contentComponent?l(e.contentComponent):null}};const z=c((G='{"lang":"en-US","title":"南笙","description":"A VitePress site","base":"/blog/","head":[["meta",{"name":"viewport","content":"width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}],["meta",{"name":"keywords","content":"纪年"}],["link",{"rel":"icon","href":"/favicon.ico"}],["link",{"rel":"stylesheet","href":"https://lib.baomitu.com/gitalk/1.7.0/gitalk.min.css"}],["script",{"src":"https://lib.baomitu.com/gitalk/1.7.0/gitalk.min.js"}],["script",{"src":"https://lib.baomitu.com/axios/0.21.1/axios.js"}]],"themeConfig":{"displayAllHeaders":true,"logo":"/favicon.ico","pages":[{"frontMatter":{"date":"2021-09-02","title":"纪年 |【第四期】浅析 co 源码","tags":["源码","说"],"describe":"浅析 co 源码"},"regularPath":"/docs/co.html","relativePath":"docs/co.md"},{"frontMatter":{"date":"2021-08-25","title":"纪年 |【第三期】Vue3 Release 源码解读记录","tags":["源码","vue3"],"describe":"Vue3 Release 源码解读"},"regularPath":"/docs/vue3-release.html","relativePath":"docs/vue3-release.md"},{"frontMatter":{"date":"2021-08-18","title":"纪年 |【第二期】Vue3 源码中的基础工具函数","tags":["源码","vue3"],"describe":"Vue3 中的工具函数源码解读记录"},"regularPath":"/docs/vue3-utils.html","relativePath":"docs/vue3-utils.md"},{"frontMatter":{"date":"2021-08-11","title":"纪年 |【第一期】launch-editor 源码解读记录","tags":["源码","vue3"],"describe":"launch-editor 源码解读记录"},"regularPath":"/docs/launch-editor.html","relativePath":"docs/launch-editor.md"}],"author":"南笙","search":true,"nav":[{"text":"🏠 首页","link":"/"},{"text":"📅 归档","link":"/more/docs"},{"text":"📂 分类","link":"/more/tags"}]},"locales":{}}',d(JSON.parse(G))));var G;function J(){return z}const X="undefined"!=typeof window;function Q(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return n}(t,Object.keys(e));return n?e[n]:void 0}function K(e,t){t=function(e,t){if(!X)return t;const n=e.base,a=n.endsWith("/")?n.slice(0,-1):n;return t.slice(a.length)}(e,t);const n=Q(e.locales||{},t)||{},a=Q(e.themeConfig&&e.themeConfig.locales||{},t)||{};return{...e,...n,themeConfig:{...e.themeConfig,...a,locales:{}},locales:{}}}function Y(e=O()){return u((()=>K(z.value,e.path)))}const Z=/#.*$/,ee=/\.(md|html)$/,te=/^[a-z]+:/i;function ne(e){return(J().value.base+e).replace(/\/+/g,"/")}function ae(e){return decodeURI(e).replace(Z,"").replace(ee,"")}const oe={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},re=m("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),se=m("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1);const ie={render:function(e,t){return h(),f("svg",oe,[re,se])}},le=e=>((e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.html$/,"")).endsWith("/")&&(e+="index"),e);var ce=g({components:{OutboundLink:ie},props:{item:{type:Object,required:!0}},setup(e){const t=e.item,n=O(),a=u((()=>({active:o.value,external:r.value}))),o=u((()=>le(ne(t.link))===le(n.path))),r=u((()=>{return e=t.link,te.test(e);var e})),s=u((()=>r.value?t.link:ne(t.link))),i=u((()=>t.target?t.target:r.value?"_blank":"")),l=u((()=>t.rel?t.rel:r.value?"noopener noreferrer":""));return{classes:a,isActiveLink:o,isExternalLink:r,href:s,target:i,rel:l}}});const de={class:"nav-item"};ce.render=function(e,t,n,a,o,r){const s=b("OutboundLink");return h(),f("div",de,[m("a",{class:["nav-link",e.classes],href:"/"===e.href?"/":e.href+".html",target:e.target,rel:e.rel,"aria-label":e.item.ariaLabel},[p(v(e.item.text)+" ",1),e.isExternalLink?(h(),f(s,{key:0})):A("v-if",!0)],10,["href","target","rel","aria-label"])])};var ue=g({name:"DropdownLink",components:{NavBarLink:ce},props:{item:{type:Object,required:!0}},setup(e){const t=c(!1),n=O();k((()=>n.path),(()=>{t.value=!1}));return{open:t,setOpen:e=>{t.value=e},isLastItemOfArray:(e,t)=>t.length&&t.indexOf(e)===t.length-1}}});const he={class:"nav-dropdown"},fe={key:0},me={key:1,class:"dropdown-subitem-wrapper"};ue.render=function(e,t,n,a,o,r){const s=b("NavBarLink");return h(),f("div",{class:["dropdown-wrapper",{open:e.open}]},[m("button",{class:"dropdown-title",type:"button","aria-label":e.item.ariaLabel,onClick:t[1]||(t[1]=t=>e.setOpen(!e.open))},[m("span",null,v(e.item.text),1),m("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),m("ul",he,[(h(!0),f(y,null,w(e.item.items,((t,n)=>(h(),f("li",{key:t.link||n,class:"dropdown-item"},[t.items?(h(),f("h4",fe,v(t.text),1)):A("v-if",!0),t.items?(h(),f("ul",me,[(h(!0),f(y,null,w(t.items,(n=>(h(),f("li",{key:n.link,class:"dropdown-subitem"},[m(s,{item:n,onFocusout:a=>e.isLastItemOfArray(n,t.items)&&e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"])])))),128))])):(h(),f(s,{key:2,item:t,onFocusout:n=>e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"]))])))),128))])],2)};const ge=["GitHub","GitLab","Bitbucket"].map((e=>[e,new RegExp(e,"i")]));var pe={components:{NavBarLink:ce,NavDropdownLink:ue},setup(){const e=Y(),t=J(),n=O(),a=u((()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;let a=e.repoLabel;if(n){const e=/^https?:/.test(n)?n:"https://github.com/"+n;if(!a){const t=e.match(/^https?:\/\/[^/]+/);if(t){const e=t[0],n=ge.find((([t,n])=>n.test(e)));a=n&&n[0]}}return{link:e,text:a||"Source"}}return null})),o=u((()=>{const e=t.value.themeConfig.locales;if(!e)return null;const a=Object.keys(e);if(a.length<=1)return null;const o=U?t.value.base:"/",r=o.endsWith("/")?o.slice(0,-1):o,s=n.path.slice(r.length),i=a.find((e=>"/"!==e&&s.startsWith(e))),l=i?s.substring(i.length-1):s,c=a.map((t=>{const n=t.endsWith("/")?t.slice(0,-1):t;return{text:e[t].label||e[t].lang,link:`${n}${l}`}})),d=i||"/";return{text:e[d].selectText?e[d].selectText:"Languages",items:c}}));return{navData:u((()=>e.value.themeConfig.nav)),repoInfo:a,localeCandidates:o}}};const ve={key:0,class:"nav-links"};pe.render=function(e,t,n,a,o,r){const s=b("NavDropdownLink"),i=b("NavBarLink");return e.navData||e.repoInfo?(h(),f("nav",ve,[e.navData?(h(!0),f(y,{key:0},w(e.navData,(e=>(h(),f(y,null,[e.items?(h(),f(s,{key:0,item:e},null,8,["item"])):(h(),f(i,{key:1,item:e},null,8,["item"]))],64)))),256)):A("v-if",!0),e.localeCandidates?(h(),f(s,{key:1,item:e.localeCandidates},null,8,["item"])):A("v-if",!0),e.repoInfo?(h(),f(i,{key:2,item:e.repoInfo},null,8,["item"])):A("v-if",!0)])):A("v-if",!0)};var Ae={components:{NavBarLinks:pe},setup:()=>({withBase:ne})};const be=m("div",{class:"flex-grow"},null,-1);Ae.render=function(e,t,n,a,o,r){const s=b("NavBarLinks");return h(),f(y,null,[m("a",{class:"title","aria-label":e.$site.title+", back to home",href:e.$site.base},[A(' <img\r\n      class="logo"\r\n      v-if="$theme.logo"\r\n      :src="withBase($theme.logo)"\r\n      alt="logo"\r\n    /> '),m("span",null,v(e.$site.title),1)],8,["aria-label","href"]),be,m(s,{class:"hide-mobile"}),P(e.$slots,"search")],64)};var ke={setup:()=>({data:{platform:[{href:"https://juejin.cn/user/3175045313607534",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABfVBMVEX///8Ad/8AgP8AgP8AgP8Aff8AgP8Af/8AgP8AVf8Af/8Af/8AgP8AgP8Af/8Afv8AAP8Afv8Afv8Aef8AgP8AdP8Afv8AgP8AgP8Acf8Ae/8AgP8Af/8AgP8Af/8Af/8AfP8Afv8AgP8Af/8Af/8Afv8Afv8AgP8Afv8AgP8Af/8Af/8AgP8AgP8Afv8AgP8Af/8AgP8AgP8AgP8Ae/8Afv8Af/8AgP8Af/8AgP8Af/8Af/8Aff8Af/8Abf8AgP8Af/8AgP8Af/8Af/8Afv8AgP8AgP8Afv8Afv8AgP8Af/8Aff8AgP8Afv8AgP8Aff8AgP8AfP8AgP8Ae/8AgP8Af/8AgP8AgP8AgP8Afv8AgP8AgP8AgP8Afv8AgP8AgP8AgP8AgP8AgP8Af/8AgP8Af/8Af/8Aev8Af/8AgP8Aff8Afv8AgP8AgP8AgP8Af/8AgP8Af/8Af/8AgP8Afv8AgP8AgP8AgP8AgP8Af/8AeP8Af/8Af/8Af//////rzEHnAAAAfXRSTlMAD7CCAivatxIDx5EMrP19AXdLEwgLR+6iCR/M0yLRzyFF7JupSXn8cw6v60Q0QeqzKtgeG237HMne850/6Qeq7QaZ+WdydHtj+OM3qENCMRYl1B3K2U7wnlWE/mhlirjkODa9FN/BF7/iNV/2kASNZpX1Wlf03C4stRGxgUPclqoAAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEaBzgZ4yeM3AAAAT9JREFUOMvNUldbwkAQvCAqsSBoABE7asSOBRUVVBQNNuy9996789+9cMFAMHnVebmdm+/bmdtbQv4dOFOW2UjPzgFyLfo6nweKfIMOBYWwFtmMPGz2Yj2pJI0JDq3udJW6VVbmKa9I192VQFV1ktXUAl5NB0cd4KpnORqsEO2ZIRpF9gJfE9Dckqq0KuZt7UAH5+8EPF3spjsRpCeQNO/tA/qDwIDA+OCQbBoKA8NOdjMySgcZGVM6jwcgRuUiSs0nlPFNSrEpJfU0jTLD6llqbvKxei7OzvkFNQohi0vAsj81+MoqsCaoPOQFgus/1LyxichW+hS2JWCHZ7VlF9jb187pIAYcHiViHAMnp5mTjJ8B5xeEXF4B1ze/fTh/C0h398DDI9HB07O8ci+vRBdvdGnfP4gBuM8vw7X/G3wDmFhFZEdxzjMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDEtMjZUMDc6NTY6MjUrMDE6MDA67pVWAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAxLTI2VDA3OjU2OjI1KzAxOjAwS7Mt6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAWdEVYdFRpdGxlAGp1ZWppbl9sb2dvIGNvcHlxapmKAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"}]}})};ke.render=function(e,t,n,a,o,r){return h(),f("div",null,[A(' <footer class="page-edit">\r\n      <a v-for="(item,index) in data.platform" :key="index" :href="item.href">\r\n        <img class="imgIcon" :src="item.icon" />\r\n      </a>\r\n    </footer> '),A(' <p class="platform">\r\n      以上皆为\r\n      <a href="javascript:;">纪年</a> 文章发布平台\r\n    </p> '),A(' <p class="platform">\r\n      Copyright &copy; 2020-2021\r\n      <a href="https://github.com/jexlau">@JexLau</a>\r\n    </p> ')])};var ye=g({components:{NavBarLink:ce,PageEdit:ke},setup(){const t=R(),n=J(),a=u((()=>t.value.frontmatter)),o=u((()=>({link:a.value.actionLink,text:a.value.actionText}))),r=u((()=>ne(a.value.heroImage))),s=u((()=>n.value.title)),i=u((()=>n.value.description));let l=u((()=>n.value.themeConfig.pages));const c=e({page:0,pageSize:5}),d=(()=>{var e=new Array(Math.ceil(l.value.length/c.pageSize));for(let t=0;t<e.length;t++)e[t]=new Array;for(let t=0;t<l.value.length;t++)e[parseInt(t/c.pageSize)][t%c.pageSize]=l.value[t];return e})(),h=e({currentData:d[c.page],totalPages:d.length});return{data:a,actionLink:o,heroImageSrc:r,dynamicPage:h,base:"/blog",getChangePage:e=>{c.page+1===h.totalPages&&0===c.page||(c.page+=e,h.currentData=d[c.page])},siteTitle:s,initPage:c,siteDescription:i}}});const we=C("data-v-19e92702");x("data-v-19e92702");const Pe={class:"article-header"},Ce={class:"title"},Me=m("div",{class:"line"},null,-1),Se={class:"describe"},xe={class:"paging"};I();const Ie=we((function(e,t,n,a,o,r){const s=b("PageEdit");return h(),f("div",null,[(h(!0),f(y,null,w(e.dynamicPage.currentData,((t,n)=>M((h(),f("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[m("div",Pe,[m("div",Ce,v(t.frontMatter.title||""),1),m("time",{datetime:t.frontMatter.date,class:"time"},v(t.frontMatter.date||""),9,["datetime"])]),Me,m("p",Se,v(t.frontMatter.describe||""),1)],8,["href"])),[[S,!t.frontMatter.home]]))),128)),m("div",xe,[0!==e.initPage.page?(h(),f("div",{key:0,class:"prev",onClick:t[1]||(t[1]=t=>e.getChangePage(-1))})):A("v-if",!0),m("span",null,v(e.dynamicPage.totalPages)+" - "+v(e.initPage.page+1),1),e.initPage.page+1!==e.dynamicPage.totalPages?(h(),f("div",{key:1,class:"next",onClick:t[2]||(t[2]=t=>e.getChangePage(1))})):A("v-if",!0)]),m(s)])}));ye.render=Ie,ye.__scopeId="data-v-19e92702";var Le={emits:["toggle"]};const Be=m("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[m("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1);function Ee(){let e=null,t=null;const n=decodeURIComponent,a=e=>e&&e.classList.remove("active"),o=n=>{if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${n}"]`),t){t.classList.add("active");const n=t.closest(".sidebar > ul > li");n&&n!==t.parentElement?(e=n.querySelector("a"),e&&e.classList.add("active")):e=null}},l=()=>{const e=[].slice.call(document.querySelectorAll(".sidebar a")),t=[].slice.call(document.querySelectorAll(".header-anchor")).filter((t=>e.some((e=>e.hash===t.hash)))),a=document.getElementById("app").offsetTop,r=window.scrollY,s=e=>e.parentElement.offsetTop-a-15;for(let e=0;e<t.length;e++){const a=t[e],i=t[e+1];if(0===e&&0===r||r>=s(a)&&(!i||r<s(i))){const e=n(a.hash);return history.replaceState(null,document.title,e),void o(e)}}},c=function(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),a=!0,setTimeout((()=>{a=!1}),t))}}(l,300);r((()=>{l(),window.addEventListener("scroll",c)})),s((()=>{o(n(location.hash))})),i((()=>{window.removeEventListener("scroll",c)}))}Le.render=function(e,t,n,a,o,r){return h(),f("div",{class:"sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[Be])};const je=e=>{const{item:{link:t,text:n,children:a}}=e,o=O(),r=R(),s=J(),i=(c=s.value.base,(d=t||"")?d.startsWith("#")?d:function(e,t){const n=e.endsWith("/"),a=t.startsWith("/");return n&&a?e.slice(0,-1)+t:n||a?e+t:`${e}/${t}`}(c,d):void 0);var c,d;const u=function(e,t){return void 0!==t&&ae(e.path)===ae(t)}(o,i),h=r.value.headers;return l("li",{class:"sidebar-item"},[Ne(u,n,i),Fe(u,a,h)])};var Te={components:{NavBarLinks:pe,SideBarItem:je},setup(){const e=R(),t=Y(),n=O();return Ee(),{items:u((()=>{const{headers:a,frontmatter:{sidebar:o,sidebarDepth:r=2}}=e.value;if("auto"===o)return Oe(a,r);if(Array.isArray(o))return De(o);if(!1===o)return[];{const{sidebar:e}=t.value.themeConfig;if("auto"===e)return Oe(a,r);if(Array.isArray(e))return De(e);if(!1===e)return[];if("object"==typeof e)return function(e,t,n,a){const o=[t,Object.keys(e)[0]].map((t=>e[function(e){const t=e.split("/");return t[t.length-1]&&t.pop(),function(e){return/(\.html|\/)$/.test(e)?e:e+"/"}(t.join("/"))}(t)])).find(Boolean);if(Array.isArray(o))return De(o);if("auto"===o)return Oe(n,a);return[]}(e,n.path,a,r)}}))}}};function Oe(e,t){const n=[];if(void 0===e)return[];let a=void 0;return e.forEach((({level:e,title:o,slug:r})=>{if(e-1>t)return;const s={text:o,link:"#"+r};2===e?(a=s,n.push(s)):a&&(a.children||(a.children=[])).push(s)})),n}function De(e,t){return e}function Ne(e,t,n){return l(n?"a":"p",{class:{"sidebar-link":!0,active:e},href:n},t)}function Fe(e,t,n){return t&&t.length>0?l("ul",{class:"sidebar-items"},t.map((e=>l(je,{item:e})))):e&&n?Fe(!1,function(e){return Re(function(e){let t;return(e=e.map((e=>Object.assign({},e)))).forEach((e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((e=>2===e.level))}(e))}(n)):null}function Re(e){return e.map((e=>({text:e.title,link:"#"+e.slug,children:e.children?Re(e.children):void 0})))}const Ue={class:"sidebar"};Te.render=function(e,t,n,a,o,r){const s=b("NavBarLinks"),i=b("SideBarItem");return h(),f(y,null,[m(s,{class:"show-mobile"}),P(e.$slots,"top"),m("ul",Ue,[(h(!0),f(y,null,w(e.items,(e=>(h(),f(i,{item:e},null,8,["item"])))),256))]),P(e.$slots,"bottom")],64)};var $e={setup(){const e=R(),t=J(),n=e=>{let n;return Object.keys(t.value.themeConfig.sidebar).some((a=>t.value.themeConfig.sidebar[a].some((t=>(Array.isArray(t.children)&&(n=t.children.find((t=>t.link===e))),!!n))))),n},a=u((()=>{if(!1!==e.value.frontmatter.next)return"string"==typeof e.value.frontmatter.next?n(e.value.frontmatter.next):e.value.next})),o=u((()=>{if(!1!==e.value.frontmatter.prev)return"string"==typeof e.value.frontmatter.prev?n(e.value.frontmatter.prev):e.value.prev})),r=u((()=>!!a||!!o));return{next:a,prev:o,hasLinks:r}}};const He={key:0,class:"links-wrapper"},_e={class:"prev-link"},Ve={key:0},qe=p(" ← "),We={class:"next-link"},ze={key:0},Ge=p(" → ");$e.render=function(e,t,n,a,o,r){return e.hasLinks?(h(),f("div",He,[m("div",_e,[e.prev?(h(),f("div",Ve,[qe,m("a",{href:e.prev.link},v(e.prev.text),9,["href"])])):A("v-if",!0)]),m("div",We,[e.next?(h(),f("div",ze,[m("a",{href:e.next.link},v(e.next.text),9,["href"]),Ge])):A("v-if",!0)])])):A("v-if",!0)};var Je={components:{NextAndPrevLinks:$e,PageEdit:ke},setup:()=>({pageData:R()}),data:()=>({clickShowImg:!1,ImgUrl:""}),mounted(){this.$nextTick((()=>{setTimeout((()=>{var e=document.getElementsByTagName("img");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(e=>{this.ImgUrl=e.target.src,this.clickShowImg=!0}),!1)}),500)})),function(e){var t,n={},a="jinrishici-token";function o(){return document.getElementById("jinrishici-sentence")||0!=document.getElementsByClassName("jinrishici-sentence").length}function r(){n.load((function(e){var t=document.getElementById("jinrishici-sentence"),n=document.getElementsByClassName("jinrishici-sentence");if(t&&(t.innerText=e.data.content),0!==n.length)for(var a=0;a<n.length;a++)n[a].innerText=e.data.content}))}function s(e,t){var n=new XMLHttpRequest;n.open("get",t),n.withCredentials=!0,n.send(),n.onreadystatechange=function(t){if(4===n.readyState){var a=JSON.parse(n.responseText);"success"===a.status?e(a):console.error("今日诗词API加载失败，错误原因："+a.errMessage)}}}n.load=function(t){return e.localStorage&&e.localStorage.getItem(a)?(n=t,o=e.localStorage.getItem(a),s(n,"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token="+encodeURIComponent(o))):function(t){return s((function(n){e.localStorage.setItem(a,n.token),t(n)}),"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2")}(t);var n,o},e.jinrishici=n,o()?r():(t=function(){o()&&r()},"loading"!=document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",(function(){"complete"==document.readyState&&t()})))}(window)}};const Xe={class:"content"},Qe={class:"md-header"},Ke={class:"md-title"},Ye=m("span",{id:"jinrishici-sentence"},"正在加载今日诗词....",-1),Ze={class:"md-date"},et={class:"catalog"};Je.render=function(e,t,n,a,o,r){const s=b("Content"),i=b("NextAndPrevLinks"),l=b("PageEdit");return h(),f(y,null,[m("div",Xe,[P(e.$slots,"top"),m("div",Qe,[m("div",Ke,v(a.pageData.title),1),Ye,m("div",Ze,v(a.pageData.frontmatter.date),1)]),m("ul",et,[(h(!0),f(y,null,w(a.pageData.headers,(e=>(h(),f("li",{class:"catalog-item",key:e},[2==e.level?(h(),f("a",{key:0,class:"level level-2",href:"#"+e.slug},v(e.title),9,["href"])):A("v-if",!0),3==e.level?(h(),f("a",{key:1,class:"level level-3",href:"#"+e.slug},v(e.title),9,["href"])):A("v-if",!0)])))),128))]),m(s),m(i),m(l),P(e.$slots,"bottom")]),A(" 只想点击背景才关闭 请使用 .self 修饰符 "),M(m("div",{onClick:t[1]||(t[1]=e=>o.clickShowImg=!1),class:"imgBox"},[m("img",{src:o.ImgUrl},null,8,["src"])],512),[[S,o.clickShowImg]])],64)};var tt="/blog/_assets/t.c9f6e53a.png",nt={props:{config:{type:Object,required:!0},style:{type:Object,required:!1}},data:()=>({src:tt,showModal:!1,modalUrl:""}),computed:{},methods:{showModalClick(e){console.log(e),this.modalUrl=e,this.showModal=!0}},created(){},mounted(){}};const at=C("data-v-146644a2");x("data-v-146644a2");const ot={class:"card"},rt={class:"console"},st=m("div",{class:"circle-yellow"},null,-1),it={class:"content"},lt={class:"card-title"},ct={class:"social"},dt={class:"nickName"},ut={class:"skill-wrap"},ht={class:"introduce"};I();const ft=at((function(e,t,n,a,o,r){return h(),f(E,{name:"bounce"},{default:at((()=>[M(m("div",ot,[m("div",rt,[m("div",{onClick:t[1]||(t[1]=e=>n.config.showCard=!1),class:"circle-red"}),st,m("div",{onClick:t[2]||(t[2]=(...t)=>e.getMagnify(...t)),class:"circle-green"})]),m("div",it,[m("div",lt,[m("img",{src:n.config.headImg},null,8,["src"]),m("div",ct,[(h(!0),f(y,null,w(n.config.iconArray,((e,t)=>(h(),f("a",{class:["iconfont",e.icon],href:e.link?e.link:"javascript:;",[L(e.event.type)]:t=>r.showModalClick(e.event.imgUrl),key:e},null,16,["href"])))),128))])]),m("h4",dt,v(n.config.nickName),1),m("div",ut,[(h(!0),f(y,null,w(n.config.skill,((e,t)=>(h(),f("span",{class:"skill",key:e},v(e),1)))),128))]),m("p",ht,v(n.config.synopsis),1),o.showModal?(h(),f("div",{key:0,class:"modal",onClick:t[3]||(t[3]=B((e=>o.showModal=!1),["self"]))},[m("div",null,[m("img",{src:o.modalUrl},null,8,["src"])])])):A("v-if",!0)])],512),[[S,n.config.showCard]])])),_:1})}));nt.render=ft,nt.__scopeId="data-v-146644a2";var mt={updated(){this.modeSelect(localStorage.getItem("mode"))},mounted(){this.modeSelect(localStorage.getItem("mode"))},components:{Home:ye,NavBar:Ae,ToggleSideBarButton:Le,SideBar:Te,Page:Je,Card:nt},data:()=>({themeMode:"theme",cardConfig:{showCard:!0,headImg:tt,iconArray:[{icon:"icon-weixin",link:!1,event:{type:"click",imgUrl:"/blog/_assets/mycode.7db3e400.jpg"}},{icon:"icon-github",link:"https://github.com/nsnans",event:!1}],nickName:"南笙",skill:["Vue","React"],synopsis:"精通 Ai、Fw、Fl、Br、Ae、Pr、Id、Ps 等软件的安装与卸载，\n          精通 CSS、JavaScript、TypeScript、PHP、ASP、C、C++、C#、Java、Ruby、Perl、Lisp、Python、Objective-C、ActionScript、Pascal 等单词的拼写，\n          熟悉 Windows、Linux、OS X、Android、iOS、WP8 等系统的开关机。"}}),methods:{modeSelect(e){e&&(this.themeMode=e,localStorage.setItem("mode",e),document.querySelector("html").style.setProperty("background-color","theme"===this.themeMode?"#fff":"#0d1117"))}},setup(){const e=O(),t=R(),n=J(),a=Y(),o=c(!1),r=u((()=>!!t.value.frontmatter.home)),s=u((()=>{const{themeConfig:e}=a.value,{frontmatter:o}=t.value;return!1!==o.navbar&&!1!==e.navbar&&(n.value.title||e.logo||e.repo||e.nav)})),i=u((()=>{const{frontmatter:e}=t.value,{themeConfig:n}=a.value;return!e.home&&!1!==e.sidebar&&("object"==typeof n.sidebar&&0!=Object.keys(n.sidebar).length||Array.isArray(n.sidebar)&&0!=n.sidebar.length)})),l=u((()=>[{"no-navbar":!s.value,"sidebar-open":o.value,"no-sidebar":!i.value}])),d=e=>{o.value="boolean"==typeof e?e:!o.value},h=d.bind(null,!1);return k(e,h),{showNavbar:s,showSidebar:i,openSideBar:o,pageClasses:l,enableHome:r,toggleSidebar:d}}};const gt=C("data-v-1db0015f");x("data-v-1db0015f");const pt={key:0,class:"navbar useselect-none"},vt={key:1,class:"home","aria-labelledby":"main-title"},At={key:2},bt={class:"theme-select"};I();const kt=gt((function(e,t,n,a,o,r){const s=b("NavBar"),i=b("ToggleSideBarButton"),l=b("SideBar"),c=b("Home"),d=b("Card"),u=b("Page"),g=b("Debug");return h(),f(y,null,[m("div",{id:"containerColor",class:[a.pageClasses,o.themeMode]},[a.showNavbar?(h(),f("header",pt,[m(s,null,{search:gt((()=>[P(e.$slots,"navbar-search")])),_:1}),m(i,{onToggle:a.toggleSidebar},null,8,["onToggle"])])):A("v-if",!0),m("aside",{class:[{open:a.openSideBar},"useselect-none"]},[m(l,null,{top:gt((()=>[P(e.$slots,"sidebar-top")])),bottom:gt((()=>[P(e.$slots,"sidebar-bottom")])),_:1})],2),A(' <div class="home-bg useselect-none" v-if="enableHome">\r\n      <div class="content-bg">\r\n        <h1>\r\n          <p>人间总有一两风 填我十万八千梦</p>\r\n        </h1>\r\n      </div>\r\n    </div> '),A(" TODO: make this button accessible "),m("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=e=>a.toggleSidebar(!1))}),a.enableHome?(h(),f("main",vt,[m(c,{style:{flex:"1"}},{hero:gt((()=>[P(e.$slots,"home-hero")])),features:gt((()=>[P(e.$slots,"home-features")])),footer:gt((()=>[P(e.$slots,"home-footer")])),_:1}),m(d,{config:o.cardConfig,class:"Card"},null,8,["config"])])):(h(),f("main",At,[m(u,null,{top:gt((()=>[P(e.$slots,"page-top")])),bottom:gt((()=>[P(e.$slots,"page-bottom")])),_:1})])),m("div",bt,[m("ul",null,[m("li",{onClick:t[2]||(t[2]=e=>r.modeSelect("theme")),class:"theme"==o.themeMode?"active":""},"☀️",2),m("li",{onClick:t[3]||(t[3]=e=>r.modeSelect("theme themeDark")),class:"theme"!==o.themeMode?"active":""},"🌙",2)])])],2),m(g)],64)}));mt.render=kt,mt.__scopeId="data-v-1db0015f";const yt=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];var wt={setup:()=>({getMsg:()=>yt[Math.floor(Math.random()*yt.length)]})};const Pt={class:"theme"},Ct=m("h1",null,"404",-1);wt.render=function(e,t,n,a,o,r){return h(),f("div",Pt,[Ct,m("blockquote",null,v(e.getMsg()),1),m("a",{href:e.$site.base,"aria-label":"go to home"}," Take me home. ",8,["href"])])};const Mt={Layout:mt,NotFound:wt};var St=g({setup(){const e=J();return{data:u((()=>function(e){const t=[];let n=0,a=-1;for(let o=0;o<e.length;o++){const r=e[o],s=r.frontMatter.date.split("-")[0];s==n?t[a].push(r):(a++,t[a]=[],t[a].push(r),n=s)}return t}(e.value.themeConfig.pages))),base:"/blog"}}});const xt=C("data-v-e0977160");x("data-v-e0977160");const It={class:""},Lt={class:"year"},Bt={class:"title"},Et={class:"date"};I();const jt=xt((function(e,t,n,a,o,r){return h(),f("div",It,[(h(!0),f(y,null,w(e.data,((t,n)=>(h(),f("div",{class:"years",key:n+t},[m("div",Lt,v(t[0].frontMatter.date.split("-")[0]),1),(h(!0),f(y,null,w(t,((t,n)=>M((h(),f("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[m("div",Bt,v(t.frontMatter.title||""),1),m("div",Et,v(t.frontMatter.date.slice(5)||""),1)],8,["href"])),[[S,!t.frontMatter.home]]))),128))])))),128))])}));St.render=jt,St.__scopeId="data-v-e0977160";var Tt=g({setup(){const e=J(),t=O(),n=u((()=>function(e){const t={};for(let n=0;n<e.length;n++){const a=e[n];a.frontMatter.tags.forEach((e=>{t[e]||(t[e]=[]),t[e].push(a)}))}return t}(e.value.themeConfig.pages)));let a=c("");return{data:n,route:t,toggleTag:e=>{a.value=e},selectTag:a,base:"/blog"}}});const Ot=C("data-v-47003d4a");x("data-v-47003d4a");const Dt={class:"tags"},Nt={class:"title"},Ft={class:"date"};I();const Rt=Ot((function(e,t,n,a,o,r){return h(),f(y,null,[A(' <div class="header">{{ selectTag }}</div> '),m("div",Dt,[(h(!0),f(y,null,w(e.data,((t,n,a)=>(h(),f("span",{onClick:t=>e.toggleTag(n),class:["tag",e.selectTag==n&&"bgc"],key:a+n},v(n),11,["onClick"])))),128))]),(h(!0),f(y,null,w(e.data[e.selectTag],((t,n)=>M((h(),f("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[m("div",Nt,v(t.frontMatter.title||""),1),m("div",Ft,v(t.frontMatter.date||""),1)],8,["href"])),[[S,!t.frontMatter.home]]))),128))],64)}));Tt.render=Rt,Tt.__scopeId="data-v-47003d4a";var Ut={name:"blog-comments",mounted(){const e={enable:!0,clientID:"c53de9cc581356de3271",clientSecret:"e233c1f4878512622e31e27e86f17d53a09a0ab4",repo:"blog-comments",owner:"nans",admin:["nans"],githubID:"nans",id:decodeURI(window.location.pathname),language:"zh-CN",distractionFreeMode:!0};new Gitalk(e).render("gitalk-container")}};const $t={id:"gitalk-container"};function Ht(){window.onbeforeprint=function(e){console.log(e)},window.onafterprint=function(t){window.document.body.innerHTML=e,location.reload()},location.hash="";let e=window.document.body.innerHTML,t="\x3c!--startPrint--\x3e",n=e.substr(e.indexOf(t)+t.length);n=n.substring(0,n.indexOf("\x3c!--endPrint--\x3e")),window.document.body.innerHTML=n,window.print()}Ut.render=function(e,t,n,a,o,r){return h(),f("div",$t)};var _t=g({setup:()=>({goPrint:Ht})});const Vt=C("data-v-48934957")((function(e,t,n,a,o,r){return h(),f("button",{class:"goPrint",onClick:t[1]||(t[1]=t=>e.goPrint())},"📄 打印")}));_t.render=Vt,_t.__scopeId="data-v-48934957";var qt={data:()=>({img:tt,FriendshipData:[]}),mounted(){}};const Wt=C("data-v-1ff3d8d5");x("data-v-1ff3d8d5");const zt={class:"Friendship"},Gt={class:"introduce"},Jt={class:"nickName"};I();const Xt=Wt((function(e,t,n,a,o,r){return h(),f("div",zt,[(h(!0),f(y,null,w(o.FriendshipData,((e,t)=>(h(),f("a",{href:e.link,key:t+e.link,target:"_blank",rel:"noopener noreferrer"},[A(' <img :src="item.imgUrl" > '),m("div",{class:"img-div",style:{background:"url("+e.imgUrl+") center center / cover no-repeat"}},null,4),m("div",Gt,[m("p",Jt,v(e.nickName),1),m("p",null,v(e.introduce),1)])],8,["href"])))),128))])}));qt.render=Xt,qt.__scopeId="data-v-1ff3d8d5";var Qt={...Mt,enhanceApp({app:e,router:t,siteData:n}){e.component("Comment",Ut),e.component("Tags",Tt),e.component("Docs",St),e.component("Friendship",qt),e.component("Print",_t)}};const Kt=Qt.NotFound||(()=>"404 Not Found");function Yt(){const a=c();let o,r=U;const s=function(a,o){const r=e({path:"/",contentComponent:null}),s="undefined"!=typeof window;function i(e){e=e||(s?location.href:"/");const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),s&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),l(e)}async function l(e,i=0){const l=new URL(e,"http://a.com"),c=r.path=l.pathname;try{let e=a(r);if("then"in e&&"function"==typeof e.then&&(e=await e),r.path===c){if(!e)throw new Error("Invalid route component: "+e);r.contentComponent=t(e),s&&n((()=>{if(l.hash&&!i){const e=document.querySelector(decodeURIComponent(l.hash));if(e)return void D(e,l.hash)}window.scrollTo(0,i)}))}}catch(e){e.message.match(/fetch/)||console.error(e),r.path===c&&(r.contentComponent=o?t(o):null)}}return s&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:a,hostname:o,pathname:r,hash:s,target:l}=t,c=window.location;e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===l||a!==c.protocol||o!==c.hostname||(e.preventDefault(),r===c.pathname?s&&s!==c.hash&&(history.pushState(null,"",s),D(t,s,t.classList.contains("header-anchor"))):i(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{l(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:r,go:i}}((e=>{let t=$(e.path);if(r&&(o=t),(r||o===t)&&(t=t.replace(/\.js$/,".lean.js")),U)return r=!1,import(t).then((e=>(e.__pageData&&(a.value=d(JSON.parse(e.__pageData))),e.default)));{const e=require(t);return a.value=JSON.parse(e.__pageData),e.default}}),Kt),i=j(Qt.Layout);i.provide(T,s),i.provide(F,a),i.component("Content",W),i.component("Debug",(()=>null));const l=Y(s.route);return U&&N(a,l),Object.defineProperties(i.config.globalProperties,{$site:{get:()=>z.value},$siteByRoute:{get:()=>l.value},$page:{get:()=>a.value},$theme:{get:()=>l.value.themeConfig}}),Qt.enhanceApp&&Qt.enhanceApp({app:i,router:s,siteData:l}),{app:i,router:s}}if(U){const{app:e,router:t}=Yt();t.go().then((()=>{e.mount("#app")}))}export{Yt as createApp};