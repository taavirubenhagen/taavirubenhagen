import{S as at,i as it,s as ot,a as st,e as A,c as lt,b as M,g as H,t as P,d as W,f as N,h as q,j as ct,o as Ie,k as ft,l as ut,m as dt,n as $e,p as Y,q as pt,r as _t,u as ht,v as F,w as B,x,y as G,z as J,A as pe}from"./chunks/index-5a593291.js";import{S as nt,I as X,g as He,f as We,a as ke,b as _e,s as Q,i as Ye,c as he,P as Xe,d as mt,e as gt,h as wt}from"./chunks/singletons-9fe8fbc2.js";function yt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function bt(a){return a.split("%25").map(decodeURI).join("%25")}function vt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const Et=["href","pathname","search","searchParams","toString","toJSON"];function $t(a,e){const n=new URL(a);for(const i of Et){let r=n[i];Object.defineProperty(n,i,{get(){return e(),r},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Lt(a){return a.replace(/\/$/,"")+Rt}function St(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ae.delete(Te(a)),me(a,e));const ae=new Map;function Ot(a,e){const n=Te(a,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:r,...p}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ae.set(n,{body:r,init:p,ttl:1e3*Number(t)}),Promise.resolve(new Response(r,p))}return me(a,e)}function It(a,e,n){if(ae.size>0){const i=Te(a,n),r=ae.get(i);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);ae.delete(i)}}return me(e,n)}function Te(a,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${St(e.body)}"]`),i}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Tt(a).map(i=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(r)return e.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(p)return e.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/),l=t.map((s,d)=>{if(d%2){if(s.startsWith("x+"))return Re(String.fromCharCode(parseInt(s.slice(2),16)));if(s.startsWith("u+"))return Re(String.fromCharCode(...s.slice(2).split("-").map(T=>parseInt(T,16))));const g=At.exec(s);if(!g)throw new Error(`Invalid param: ${s}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,$,D,U,k]=g;return e.push({name:U,matcher:k,optional:!!$,rest:!!D,chained:D?d===1&&t[0]==="":!1}),D?"(.*?)":$?"([^/]*)?":"([^/]+?)"}return Re(s)}).join("");return"/"+l}).join("")}/?$`),params:e}}function Nt(a){return!/^\([^)]+\)$/.test(a)}function Tt(a){return a.slice(1).split("/").filter(Nt)}function Dt(a,e,n){const i={},r=a.slice(1);let p="";for(let t=0;t<e.length;t+=1){const l=e[t];let s=r[t];if(l.chained&&l.rest&&p&&(s=s?p+"/"+s:p),p="",s===void 0)l.rest&&(i[l.name]="");else{if(l.matcher&&!n[l.matcher](s)){if(l.optional&&l.chained){let d=r.indexOf(void 0,t);if(d===-1){const g=e[t+1];if((g==null?void 0:g.rest)&&g.chained)p=s;else return}for(;d>=t;)r[d]=r[d-1],d-=1;continue}return}i[l.name]=s}}if(!p)return i}function Re(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(a,e,n,i){const r=new Set(e);return Object.entries(n).map(([l,[s,d,g]])=>{const{pattern:$,params:D}=Pt(l),U={id:l,exec:k=>{const T=$.exec(k);if(T)return Dt(T,D,i)},errors:[1,...g||[]].map(k=>a[k]),layouts:[0,...d||[]].map(t),leaf:p(s)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function p(l){const s=l<0;return s&&(l=~l),[s,a[l]]}function t(l){return l===void 0?l:[r.has(l),a[l]]}}function jt(a){let e,n,i;var r=a[0][0];function p(t){return{props:{data:t[2],form:t[1]}}}return r&&(e=F(r,p(a))),{c(){e&&B(e.$$.fragment),n=A()},l(t){e&&x(e.$$.fragment,t),n=A()},m(t,l){e&&G(e,t,l),M(t,n,l),i=!0},p(t,l){const s={};if(l&4&&(s.data=t[2]),l&2&&(s.form=t[1]),r!==(r=t[0][0])){if(e){H();const d=e;P(d.$$.fragment,1,0,()=>{J(d,1)}),W()}r?(e=F(r,p(t)),B(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&P(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&J(e,t)}}}function Vt(a){let e,n,i;var r=a[0][0];function p(t){return{props:{data:t[2],$$slots:{default:[Kt]},$$scope:{ctx:t}}}}return r&&(e=F(r,p(a))),{c(){e&&B(e.$$.fragment),n=A()},l(t){e&&x(e.$$.fragment,t),n=A()},m(t,l){e&&G(e,t,l),M(t,n,l),i=!0},p(t,l){const s={};if(l&4&&(s.data=t[2]),l&2107&&(s.$$scope={dirty:l,ctx:t}),r!==(r=t[0][0])){if(e){H();const d=e;P(d.$$.fragment,1,0,()=>{J(d,1)}),W()}r?(e=F(r,p(t)),B(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&P(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&J(e,t)}}}function Ct(a){let e,n,i;var r=a[0][1];function p(t){return{props:{data:t[3],form:t[1]}}}return r&&(e=F(r,p(a))),{c(){e&&B(e.$$.fragment),n=A()},l(t){e&&x(e.$$.fragment,t),n=A()},m(t,l){e&&G(e,t,l),M(t,n,l),i=!0},p(t,l){const s={};if(l&8&&(s.data=t[3]),l&2&&(s.form=t[1]),r!==(r=t[0][1])){if(e){H();const d=e;P(d.$$.fragment,1,0,()=>{J(d,1)}),W()}r?(e=F(r,p(t)),B(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&P(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&J(e,t)}}}function qt(a){let e,n,i;var r=a[0][1];function p(t){return{props:{data:t[3],$$slots:{default:[Jt]},$$scope:{ctx:t}}}}return r&&(e=F(r,p(a))),{c(){e&&B(e.$$.fragment),n=A()},l(t){e&&x(e.$$.fragment,t),n=A()},m(t,l){e&&G(e,t,l),M(t,n,l),i=!0},p(t,l){const s={};if(l&8&&(s.data=t[3]),l&2099&&(s.$$scope={dirty:l,ctx:t}),r!==(r=t[0][1])){if(e){H();const d=e;P(d.$$.fragment,1,0,()=>{J(d,1)}),W()}r?(e=F(r,p(t)),B(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&P(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&J(e,t)}}}function Ft(a){let e,n,i;var r=a[0][2];function p(t){return{props:{data:t[4],form:t[1]}}}return r&&(e=F(r,p(a))),{c(){e&&B(e.$$.fragment),n=A()},l(t){e&&x(e.$$.fragment,t),n=A()},m(t,l){e&&G(e,t,l),M(t,n,l),i=!0},p(t,l){const s={};if(l&16&&(s.data=t[4]),l&2&&(s.form=t[1]),r!==(r=t[0][2])){if(e){H();const d=e;P(d.$$.fragment,1,0,()=>{J(d,1)}),W()}r?(e=F(r,p(t)),B(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&P(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&J(e,t)}}}function Bt(a){let e,n,i;var r=a[0][2];function p(t){return{props:{data:t[4],$$slots:{default:[Gt]},$$scope:{ctx:t}}}}return r&&(e=F(r,p(a))),{c(){e&&B(e.$$.fragment),n=A()},l(t){e&&x(e.$$.fragment,t),n=A()},m(t,l){e&&G(e,t,l),M(t,n,l),i=!0},p(t,l){const s={};if(l&16&&(s.data=t[4]),l&2083&&(s.$$scope={dirty:l,ctx:t}),r!==(r=t[0][2])){if(e){H();const d=e;P(d.$$.fragment,1,0,()=>{J(d,1)}),W()}r?(e=F(r,p(t)),B(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&P(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&J(e,t)}}}function Gt(a){let e,n,i;var r=a[0][3];function p(t){return{props:{data:t[5],form:t[1]}}}return r&&(e=F(r,p(a))),{c(){e&&B(e.$$.fragment),n=A()},l(t){e&&x(e.$$.fragment,t),n=A()},m(t,l){e&&G(e,t,l),M(t,n,l),i=!0},p(t,l){const s={};if(l&32&&(s.data=t[5]),l&2&&(s.form=t[1]),r!==(r=t[0][3])){if(e){H();const d=e;P(d.$$.fragment,1,0,()=>{J(d,1)}),W()}r?(e=F(r,p(t)),B(e.$$.fragment),N(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else r&&e.$set(s)},i(t){i||(e&&N(e.$$.fragment,t),i=!0)},o(t){e&&P(e.$$.fragment,t),i=!1},d(t){t&&q(n),e&&J(e,t)}}}function Jt(a){let e,n,i,r;const p=[Bt,Ft],t=[];function l(s,d){return s[0][3]?0:1}return e=l(a),n=t[e]=p[e](a),{c(){n.c(),i=A()},l(s){n.l(s),i=A()},m(s,d){t[e].m(s,d),M(s,i,d),r=!0},p(s,d){let g=e;e=l(s),e===g?t[e].p(s,d):(H(),P(t[g],1,1,()=>{t[g]=null}),W(),n=t[e],n?n.p(s,d):(n=t[e]=p[e](s),n.c()),N(n,1),n.m(i.parentNode,i))},i(s){r||(N(n),r=!0)},o(s){P(n),r=!1},d(s){t[e].d(s),s&&q(i)}}}function Kt(a){let e,n,i,r;const p=[qt,Ct],t=[];function l(s,d){return s[0][2]?0:1}return e=l(a),n=t[e]=p[e](a),{c(){n.c(),i=A()},l(s){n.l(s),i=A()},m(s,d){t[e].m(s,d),M(s,i,d),r=!0},p(s,d){let g=e;e=l(s),e===g?t[e].p(s,d):(H(),P(t[g],1,1,()=>{t[g]=null}),W(),n=t[e],n?n.p(s,d):(n=t[e]=p[e](s),n.c()),N(n,1),n.m(i.parentNode,i))},i(s){r||(N(n),r=!0)},o(s){P(n),r=!1},d(s){t[e].d(s),s&&q(i)}}}function Ze(a){let e,n=a[7]&&Qe(a);return{c(){e=ft("div"),n&&n.c(),this.h()},l(i){e=ut(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=dt(e);n&&n.l(r),r.forEach(q),this.h()},h(){$e(e,"id","svelte-announcer"),$e(e,"aria-live","assertive"),$e(e,"aria-atomic","true"),Y(e,"position","absolute"),Y(e,"left","0"),Y(e,"top","0"),Y(e,"clip","rect(0 0 0 0)"),Y(e,"clip-path","inset(50%)"),Y(e,"overflow","hidden"),Y(e,"white-space","nowrap"),Y(e,"width","1px"),Y(e,"height","1px")},m(i,r){M(i,e,r),n&&n.m(e,null)},p(i,r){i[7]?n?n.p(i,r):(n=Qe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&q(e),n&&n.d()}}}function Qe(a){let e;return{c(){e=pt(a[8])},l(n){e=_t(n,a[8])},m(n,i){M(n,e,i)},p(n,i){i&256&&ht(e,n[8])},d(n){n&&q(e)}}}function Mt(a){let e,n,i,r,p;const t=[Vt,jt],l=[];function s(g,$){return g[0][1]?0:1}e=s(a),n=l[e]=t[e](a);let d=a[6]&&Ze(a);return{c(){n.c(),i=st(),d&&d.c(),r=A()},l(g){n.l(g),i=lt(g),d&&d.l(g),r=A()},m(g,$){l[e].m(g,$),M(g,i,$),d&&d.m(g,$),M(g,r,$),p=!0},p(g,[$]){let D=e;e=s(g),e===D?l[e].p(g,$):(H(),P(l[D],1,1,()=>{l[D]=null}),W(),n=l[e],n?n.p(g,$):(n=l[e]=t[e](g),n.c()),N(n,1),n.m(i.parentNode,i)),g[6]?d?d.p(g,$):(d=Ze(g),d.c(),d.m(r.parentNode,r)):d&&(d.d(1),d=null)},i(g){p||(N(n),p=!0)},o(g){P(n),p=!1},d(g){l[e].d(g),g&&q(i),d&&d.d(g),g&&q(r)}}}function zt(a,e,n){let{stores:i}=e,{page:r}=e,{components:p}=e,{form:t}=e,{data_0:l=null}=e,{data_1:s=null}=e,{data_2:d=null}=e,{data_3:g=null}=e;ct(i.page.notify);let $=!1,D=!1,U=null;return Ie(()=>{const k=i.page.subscribe(()=>{$&&(n(7,D=!0),n(8,U=document.title||"untitled page"))});return n(6,$=!0),k}),a.$$set=k=>{"stores"in k&&n(9,i=k.stores),"page"in k&&n(10,r=k.page),"components"in k&&n(0,p=k.components),"form"in k&&n(1,t=k.form),"data_0"in k&&n(2,l=k.data_0),"data_1"in k&&n(3,s=k.data_1),"data_2"in k&&n(4,d=k.data_2),"data_3"in k&&n(5,g=k.data_3)},a.$$.update=()=>{a.$$.dirty&1536&&i.page.set(r)},[p,t,l,s,d,g,$,D,U,i,r]}class Ht extends at{constructor(e){super(),it(this,e,zt,Mt,ot,{stores:9,page:10,components:0,form:1,data_0:2,data_1:3,data_2:4,data_3:5})}}const Wt="modulepreload",Yt=function(a,e){return new URL(a,e).href},xe={},j=function(e,n,i){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=Yt(r,i),r in xe)return;xe[r]=!0;const p=r.endsWith(".css"),t=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const l=document.createElement("link");if(l.rel=p?"stylesheet":Wt,p||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),p)return new Promise((s,d)=>{l.addEventListener("load",s),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},Xt={},ge=[()=>j(()=>import("./chunks/0-73c7c591.js"),["chunks\\0-73c7c591.js","components\\layout.svelte-f3ab473f.js","chunks\\index-5a593291.js"],import.meta.url),()=>j(()=>import("./chunks/1-e55ed3b0.js"),["chunks\\1-e55ed3b0.js","components\\pages\\_error.svelte-49cb498d.js","assets\\global-8533971e.css","chunks\\index-5a593291.js","chunks\\title_section-132109fd.js","assets\\Cursor-294a27f2.css","chunks\\index-e35228fd.js","chunks\\index-2d3453a6.js","chunks\\icon-22ce8df5.js"],import.meta.url),()=>j(()=>import("./chunks/2-645accbd.js"),["chunks\\2-645accbd.js","components\\pages\\contact\\_layout.svelte-ddda8f58.js","assets\\global-8533971e.css","chunks\\index-5a593291.js"],import.meta.url),()=>j(()=>import("./chunks/3-ef31b5ef.js"),["chunks\\3-ef31b5ef.js","components\\pages\\me\\_layout.svelte-463fda0f.js","assets\\global-8533971e.css","chunks\\index-5a593291.js","chunks\\index-e35228fd.js","chunks\\stores-8b1c977b.js","chunks\\singletons-9fe8fbc2.js","chunks\\index-2d3453a6.js","chunks\\ua-parser-94cd8823.js","chunks\\icon-22ce8df5.js"],import.meta.url),()=>j(()=>import("./chunks/4-4c51da1c.js"),["chunks\\4-4c51da1c.js","components\\pages\\me\\home\\_layout.svelte-73030abb.js","assets\\global-8533971e.css","chunks\\index-5a593291.js"],import.meta.url),()=>j(()=>import("./chunks/5-18d4efde.js"),["chunks\\5-18d4efde.js","components\\pages\\work\\_layout.svelte-db03bc94.js","assets\\Cursor-294a27f2.css","assets\\global-8533971e.css","chunks\\index-5a593291.js","chunks\\ua-parser-94cd8823.js"],import.meta.url),()=>j(()=>import("./chunks/6-e3ffcee4.js"),["chunks\\6-e3ffcee4.js","components\\pages\\_page.svelte-3d1bdfb3.js","chunks\\index-5a593291.js"],import.meta.url),()=>j(()=>import("./chunks/7-27175e59.js"),["chunks\\7-27175e59.js","components\\pages\\contact\\_page.svelte-3ee3b0a3.js","assets\\global-8533971e.css","chunks\\index-5a593291.js","chunks\\text_button-7d6a4a71.js","chunks\\title_section-132109fd.js","assets\\Cursor-294a27f2.css","chunks\\index-e35228fd.js","chunks\\index-2d3453a6.js","chunks\\icon-22ce8df5.js"],import.meta.url),()=>j(()=>import("./chunks/8-09f8d275.js"),["chunks\\8-09f8d275.js","components\\pages\\fenni\\blog\\admin\\post\\_page.svelte-fa8671e4.js","chunks\\index-5a593291.js","chunks\\content_section-4fa842da.js","assets\\Cursor-294a27f2.css","assets\\global-8533971e.css"],import.meta.url),()=>j(()=>import("./chunks/9-f763c8e6.js"),["chunks\\9-f763c8e6.js","components\\pages\\me\\design\\tavy\\icons\\_page.svelte-f45e1979.js","assets\\global-8533971e.css","chunks\\index-5a593291.js","chunks\\text_button-7d6a4a71.js"],import.meta.url),()=>j(()=>import("./chunks/10-271c7538.js"),["chunks\\10-271c7538.js","components\\pages\\me\\design\\tavy\\icons\\explore\\_page.svelte-6e58afab.js","assets\\global-8533971e.css","chunks\\index-5a593291.js","chunks\\text_button-7d6a4a71.js"],import.meta.url),()=>j(()=>import("./chunks/11-aa6838f4.js"),["chunks\\11-aa6838f4.js","components\\pages\\me\\home\\_page.svelte-5012eceb.js","assets\\global-8533971e.css","assets\\Cursor-294a27f2.css","chunks\\index-5a593291.js","chunks\\icon-22ce8df5.js","chunks\\text_button-7d6a4a71.js"],import.meta.url),()=>j(()=>import("./chunks/12-8a5f8acd.js"),["chunks\\12-8a5f8acd.js","components\\pages\\presenter\\web\\_id_\\_page.svelte-f5d190df.js","chunks\\index-5a593291.js","chunks\\ua-parser-94cd8823.js","chunks\\stores-8b1c977b.js","chunks\\singletons-9fe8fbc2.js","chunks\\index-2d3453a6.js","chunks\\content_section-4fa842da.js","assets\\Cursor-294a27f2.css","assets\\global-8533971e.css"],import.meta.url),()=>j(()=>import("./chunks/13-a818e4d2.js"),["chunks\\13-a818e4d2.js","components\\pages\\three\\_page.svelte-d40d4046.js","assets\\_page-0c098dce.css","chunks\\index-5a593291.js"],import.meta.url),()=>j(()=>import("./chunks/14-2c2d08ef.js"),["chunks\\14-2c2d08ef.js","components\\pages\\work\\_page.svelte-2688ed34.js","assets\\Cursor-294a27f2.css","assets\\global-8533971e.css","chunks\\index-5a593291.js","chunks\\title_section-132109fd.js","chunks\\index-e35228fd.js","chunks\\index-2d3453a6.js","chunks\\icon-22ce8df5.js","chunks\\text_button-7d6a4a71.js","chunks\\content_section-4fa842da.js"],import.meta.url)],Zt=[],Qt={"/":[-7],"/contact":[7,[2]],"/fenni/blog/admin/post":[8],"/me/design/tavy/icons":[9,[3]],"/me/design/tavy/icons/explore":[10,[3]],"/me/home":[11,[3,4]],"/presenter/web/[id]":[12],"/three":[13],"/work":[14,[5]]},xt={handleError:({error:a})=>{console.error(a)}};class Ae{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class et{constructor(e,n){this.status=e,this.location=n}}async function en(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,r])=>[i,await r])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const tn=-1,nn=-2,rn=-3,an=-4,on=-5,sn=-6;function ln(a){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function i(r,p=!1){if(r===tn)return;if(r===rn)return NaN;if(r===an)return 1/0;if(r===on)return-1/0;if(r===sn)return-0;if(p)throw new Error("Invalid input");if(r in n)return n[r];const t=e[r];if(!t||typeof t!="object")n[r]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[r]=new Date(t[1]);break;case"Set":const s=new Set;n[r]=s;for(let $=1;$<t.length;$+=1)s.add(i(t[$]));break;case"Map":const d=new Map;n[r]=d;for(let $=1;$<t.length;$+=2)d.set(i(t[$]),i(t[$+1]));break;case"RegExp":n[r]=new RegExp(t[1],t[2]);break;case"Object":n[r]=Object(t[1]);break;case"BigInt":n[r]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[r]=g;for(let $=1;$<t.length;$+=2)g[t[$]]=i(t[$+1]);break}else{const l=new Array(t.length);n[r]=l;for(let s=0;s<t.length;s+=1){const d=t[s];d!==nn&&(l[s]=i(d))}}else{const l={};n[r]=l;for(const s in t){const d=t[s];l[s]=i(d)}}return n[r]}return i(0)}const Le=Ut(ge,Zt,Qt,Xt),Pe=ge[0],Ne=ge[1];Pe();Ne();let ie={};try{ie=JSON.parse(sessionStorage[nt])}catch{}function Se(a){ie[a]=he()}function cn({target:a,base:e}){var Ke;const n=document.documentElement,i=[];let r=null;const p={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},l=!1,s=!1,d=!0,g=!1,$=!1,D=!1,U=!1,k,T=(Ke=history.state)==null?void 0:Ke[X];T||(T=Date.now(),history.replaceState({...history.state,[X]:T},"",location.href));const we=ie[T];we&&(history.scrollRestoration="manual",scrollTo(we.x,we.y));let Z,De,oe;async function Ue(){oe=oe||Promise.resolve(),await oe,oe=null;const o=new URL(location.href),c=ce(o,!0);r=null,await Ve(c,o,[])}async function ye(o,{noScroll:c=!1,replaceState:u=!1,keepFocus:f=!1,state:m={},invalidateAll:h=!1},_,v){return typeof o=="string"&&(o=new URL(o,He(document))),fe({url:o,scroll:c?he():null,keepfocus:f,redirect_chain:_,details:{state:m,replaceState:u},nav_token:v,accepted:()=>{h&&(U=!0)},blocked:()=>{},type:"goto"})}async function je(o){const c=ce(o,!1);if(!c)throw new Error(`Attempted to preload a URL that does not belong to this app: ${o}`);return r={id:c.id,promise:Fe(c).then(u=>(u.type==="loaded"&&u.state.error&&(r=null),u))},r.promise}async function se(...o){const u=Le.filter(f=>o.some(m=>f.exec(m))).map(f=>Promise.all([...f.layouts,f.leaf].map(m=>m==null?void 0:m[1]())));await Promise.all(u)}async function Ve(o,c,u,f,m={},h){var v,y;De=m;let _=o&&await Fe(o);if(_||(_=await Je(c,{id:null},await re(new Error(`Not found: ${c.pathname}`),{url:c,params:{},route:{id:null}}),404)),c=(o==null?void 0:o.url)||c,De!==m)return!1;if(_.type==="redirect")if(u.length>10||u.includes(c.pathname))_=await le({status:500,error:await re(new Error("Redirect loop"),{url:c,params:{},route:{id:null}}),url:c,route:{id:null}});else return ye(new URL(_.location,c).href,{},[...u,c.pathname],m),!1;else((y=(v=_.props)==null?void 0:v.page)==null?void 0:y.status)>=400&&await Q.updated.check()&&await ue(c);if(i.length=0,U=!1,g=!0,f&&f.details){const{details:E}=f,b=E.replaceState?0:1;E.state[X]=T+=b,history[E.replaceState?"replaceState":"pushState"](E.state,"",c)}if(r=null,s?(t=_.state,_.props.page&&(_.props.page.url=c),k.$set(_.props)):Ce(_),f){const{scroll:E,keepfocus:b}=f;if(b||Oe(),await pe(),d){const L=c.hash&&document.getElementById(c.hash.slice(1));E?scrollTo(E.x,E.y):L?L.scrollIntoView():scrollTo(0,0)}}else await pe();d=!0,_.props.page&&(Z=_.props.page),h&&h(),g=!1}function Ce(o){var f,m;t=o.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),Z=o.props.page,k=new Ht({target:a,props:{...o.props,stores:Q},hydrate:!0});const u={from:null,to:{params:t.params,route:{id:(m=(f=t.route)==null?void 0:f.id)!=null?m:null},url:new URL(location.href)},willUnload:!1,type:"enter"};p.after_navigate.forEach(h=>h(u)),s=!0}async function te({url:o,params:c,branch:u,status:f,error:m,route:h,form:_}){var V;const v=u.filter(Boolean);let y="never";for(const I of u)(I==null?void 0:I.slash)!==void 0&&(y=I.slash);o.pathname=yt(o.pathname,y),o.search=o.search;const E={type:"loaded",state:{url:o,params:c,branch:u,error:m,route:h},props:{components:v.map(I=>I.node.component)}};_!==void 0&&(E.props.form=_);let b={},L=!Z;for(let I=0;I<v.length;I+=1){const C=v[I];b={...b,...C.data},(L||!t.branch.some(z=>z===C))&&(E.props[`data_${I}`]=b,L=L||Object.keys((V=C.data)!=null?V:{}).length>0)}return L||(L=Object.keys(Z.data).length!==Object.keys(b).length),(!t.url||o.href!==t.url.href||t.error!==m||_!==void 0||L)&&(E.props.page={error:m,params:c,route:h,status:f,url:new URL(o),form:_!=null?_:null,data:L?b:Z.data}),E}async function be({loader:o,parent:c,url:u,params:f,route:m,server_data_node:h}){var E,b,L,K,V,I,C;let _=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await o();if((E=y.universal)!=null&&E.load){let z=function(...w){for(const R of w){const{href:S}=new URL(R,u);v.dependencies.add(S)}};const de={route:{get id(){return v.route=!0,m.id}},params:new Proxy(f,{get:(w,R)=>(v.params.add(R),w[R])}),data:(b=h==null?void 0:h.data)!=null?b:null,url:$t(u,()=>{v.url=!0}),async fetch(w,R){let S;w instanceof Request?(S=w.url,R={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...R}):S=w;const O=new URL(S,u).href;return z(O),s?It(S,O,R):Ot(S,R)},setHeaders:()=>{},depends:z,parent(){return v.parent=!0,c()}};_=(L=await y.universal.load.call(null,de))!=null?L:null,_=_?await en(_):null}return{node:y,loader:o,server:h,universal:(K=y.universal)!=null&&K.load?{type:"data",data:_,uses:v}:null,data:(V=_!=null?_:h==null?void 0:h.data)!=null?V:null,slash:(C=(I=y.universal)==null?void 0:I.trailingSlash)!=null?C:h==null?void 0:h.slash}}function qe(o,c,u,f,m){if(U)return!0;if(!f)return!1;if(f.parent&&o||f.route&&c||f.url&&u)return!0;for(const h of f.params)if(m[h]!==t.params[h])return!0;for(const h of f.dependencies)if(i.some(_=>_(new URL(h))))return!0;return!1}function ve(o,c){var u,f;return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set((u=o.uses.dependencies)!=null?u:[]),params:new Set((f=o.uses.params)!=null?f:[]),parent:!!o.uses.parent,route:!!o.uses.route,url:!!o.uses.url},slash:o.slash}:(o==null?void 0:o.type)==="skip"&&c!=null?c:null}async function Fe({id:o,invalidating:c,url:u,params:f,route:m}){var de;if((r==null?void 0:r.id)===o)return r.promise;const{errors:h,layouts:_,leaf:v}=m,y=[..._,v];h.forEach(w=>w==null?void 0:w().catch(()=>{})),y.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let E=null;const b=t.url?o!==t.url.pathname+t.url.search:!1,L=t.route?o!==t.route.id:!1,K=y.reduce((w,R,S)=>{var ne;const O=t.branch[S],ee=!!(R!=null&&R[0])&&((O==null?void 0:O.loader)!==R[1]||qe(w.some(Boolean),L,b,(ne=O.server)==null?void 0:ne.uses,f));return w.push(ee),w},[]);if(K.some(Boolean)){try{E=await tt(u,K)}catch(w){return le({status:500,error:await re(w,{url:u,params:f,route:{id:m.id}}),url:u,route:m})}if(E.type==="redirect")return E}const V=E==null?void 0:E.nodes;let I=!1;const C=y.map(async(w,R)=>{var ne;if(!w)return;const S=t.branch[R],O=V==null?void 0:V[R];if((!O||O.type==="skip")&&w[1]===(S==null?void 0:S.loader)&&!qe(I,L,b,(ne=S.universal)==null?void 0:ne.uses,f))return S;if(I=!0,(O==null?void 0:O.type)==="error")throw O;return be({loader:w[1],url:u,params:f,route:m,parent:async()=>{var ze;const Me={};for(let Ee=0;Ee<R;Ee+=1)Object.assign(Me,(ze=await C[Ee])==null?void 0:ze.data);return Me},server_data_node:ve(O===void 0&&w[0]?{type:"skip"}:O!=null?O:null,S==null?void 0:S.server)})});for(const w of C)w.catch(()=>{});const z=[];for(let w=0;w<y.length;w+=1)if(y[w])try{z.push(await C[w])}catch(R){if(R instanceof et)return{type:"redirect",location:R.location};let S=500,O;V!=null&&V.includes(R)?(S=(de=R.status)!=null?de:S,O=R.error):R instanceof Ae?(S=R.status,O=R.body):O=await re(R,{params:f,url:u,route:{id:m.id}});const ee=await Be(w,z,h);return ee?await te({url:u,params:f,branch:z.slice(0,ee.idx).concat(ee.node),status:S,error:O,route:m}):await Je(u,{id:m.id},O,S)}else z.push(void 0);return await te({url:u,params:f,branch:z,status:200,error:null,route:m,form:c?void 0:null})}async function Be(o,c,u){for(;o--;)if(u[o]){let f=o;for(;!c[f];)f-=1;try{return{idx:f+1,node:{node:await u[o](),loader:u[o],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:o,error:c,url:u,route:f}){var E;const m={},h=await Pe();let _=null;if(h.server)try{const b=await tt(u,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;_=(E=b.nodes[0])!=null?E:null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||l)&&await ue(u)}const v=await be({loader:Pe,url:u,params:m,route:f,parent:()=>Promise.resolve({}),server_data_node:ve(_)}),y={node:await Ne(),loader:Ne,universal:null,server:null,data:null};return await te({url:u,params:m,branch:[v,y],status:o,error:c,route:null})}function ce(o,c){if(Ye(o,e))return;const u=bt(o.pathname.slice(e.length)||"/");for(const f of Le){const m=f.exec(u);if(m)return{id:o.pathname+o.search,invalidating:c,route:f,params:vt(m),url:o}}}function Ge({url:o,type:c,intent:u,delta:f}){var v,y,E,b,L;let m=!1;const h={from:{params:t.params,route:{id:(y=(v=t.route)==null?void 0:v.id)!=null?y:null},url:t.url},to:{params:(E=u==null?void 0:u.params)!=null?E:null,route:{id:(L=(b=u==null?void 0:u.route)==null?void 0:b.id)!=null?L:null},url:o},willUnload:!u,type:c};f!==void 0&&(h.delta=f);const _={...h,cancel:()=>{m=!0}};return $||p.before_navigate.forEach(K=>K(_)),m?null:h}async function fe({url:o,scroll:c,keepfocus:u,redirect_chain:f,details:m,type:h,delta:_,nav_token:v,accepted:y,blocked:E}){const b=ce(o,!1),L=Ge({url:o,type:h,delta:_,intent:b});if(!L){E();return}Se(T),y(),$=!0,s&&Q.navigating.set(L),await Ve(b,o,f,{scroll:c,keepfocus:u,details:m},v,()=>{$=!1,p.after_navigate.forEach(K=>K(L)),Q.navigating.set(null)})}async function Je(o,c,u,f){return o.origin===location.origin&&o.pathname===location.pathname&&!l?await le({status:f,error:u,url:o,route:c}):await ue(o)}function ue(o){return location.href=o.href,new Promise(()=>{})}function rt(){let o;n.addEventListener("mousemove",h=>{const _=h.target;clearTimeout(o),o=setTimeout(()=>{f(_,2)},20)});function c(h){f(h.composedPath()[0],1)}n.addEventListener("mousedown",c),n.addEventListener("touchstart",c,{passive:!0});const u=new IntersectionObserver(h=>{for(const _ of h)_.isIntersecting&&(se(new URL(_.target.href).pathname),u.unobserve(_.target))},{threshold:0});function f(h,_){const v=We(h,n);if(!v)return;const{url:y,external:E}=ke(v,e);if(E)return;const b=_e(v);b.reload||(_<=b.preload_data?je(y):_<=b.preload_code&&se(y.pathname))}function m(){u.disconnect();for(const h of n.querySelectorAll("a")){const{url:_,external:v}=ke(h,e);if(v)continue;const y=_e(h);y.reload||(y.preload_code===Xe.viewport&&u.observe(h),y.preload_code===Xe.eager&&se(_.pathname))}}p.after_navigate.push(m),m()}return{after_navigate:o=>{Ie(()=>(p.after_navigate.push(o),()=>{const c=p.after_navigate.indexOf(o);p.after_navigate.splice(c,1)}))},before_navigate:o=>{Ie(()=>(p.before_navigate.push(o),()=>{const c=p.before_navigate.indexOf(o);p.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(g||!s)&&(d=!1)},goto:(o,c={})=>ye(o,c,[]),invalidate:o=>{if(typeof o=="function")i.push(o);else{const{href:c}=new URL(o,location.href);i.push(u=>u.href===c)}return Ue()},invalidateAll:()=>(U=!0,Ue()),preload_data:async o=>{const c=new URL(o,He(document));await je(c)},preload_code:se,apply_action:async o=>{var c;if(o.type==="error"){const u=new URL(location.href),{branch:f,route:m}=t;if(!m)return;const h=await Be(t.branch.length,f,m.errors);if(h){const _=await te({url:u,params:t.params,branch:f.slice(0,h.idx).concat(h.node),status:(c=o.status)!=null?c:500,error:o.error,route:m});t=_.state,k.$set(_.props),pe().then(Oe)}}else if(o.type==="redirect")ye(o.location,{invalidateAll:!0},[]);else{const u={form:o.data,page:{...Z,form:o.data,status:o.status}};k.$set(u),o.type==="success"&&pe().then(Oe)}},_start_router:()=>{var o;history.scrollRestoration="manual",addEventListener("beforeunload",c=>{var f,m;let u=!1;if(!$){const h={from:{params:t.params,route:{id:(m=(f=t.route)==null?void 0:f.id)!=null?m:null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};p.before_navigate.forEach(_=>_(h))}u?(c.preventDefault(),c.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(T);try{sessionStorage[nt]=JSON.stringify(ie)}catch{}}}),(o=navigator.connection)!=null&&o.saveData||rt(),n.addEventListener("click",c=>{if(c.button||c.which!==1||c.metaKey||c.ctrlKey||c.shiftKey||c.altKey||c.defaultPrevented)return;const u=We(c.composedPath()[0],n);if(!u)return;const{url:f,external:m,has:h}=ke(u,e),_=_e(u);if(!f||!(u instanceof SVGAElement)&&f.protocol!==location.protocol&&!(f.protocol==="https:"||f.protocol==="http:")||h.download)return;if(m||_.reload){Ge({url:f,type:"link"})||c.preventDefault(),$=!0;return}const[y,E]=f.href.split("#");if(E!==void 0&&y===location.href.split("#")[0]){D=!0,Se(T),t.url=f,Q.page.set({...Z,url:f}),Q.page.notify();return}fe({url:f,scroll:_.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:f.href===location.href},accepted:()=>c.preventDefault(),blocked:()=>c.preventDefault(),type:"link"})}),n.addEventListener("submit",c=>{var y;if(c.defaultPrevented)return;const u=HTMLFormElement.prototype.cloneNode.call(c.target),f=c.submitter;if(((f==null?void 0:f.formMethod)||u.method)!=="get")return;const h=new URL(((y=c.submitter)==null?void 0:y.hasAttribute("formaction"))&&(f==null?void 0:f.formAction)||u.action);if(Ye(h,e))return;const{noscroll:_,reload:v}=_e(c.target);v||(c.preventDefault(),c.stopPropagation(),h.search=new URLSearchParams(new FormData(c.target)).toString(),fe({url:h,scroll:_?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",c=>{var u;if((u=c.state)!=null&&u[X]){if(c.state[X]===T)return;const f=c.state[X]-T;fe({url:new URL(location.href),scroll:ie[c.state[X]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=c.state[X]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{D&&(D=!1,history.replaceState({...history.state,[X]:++T},"",location.href))});for(const c of document.querySelectorAll("link"))c.rel==="icon"&&(c.href=c.href);addEventListener("pageshow",c=>{c.persisted&&Q.navigating.set(null)})},_hydrate:async({status:o=200,error:c,node_ids:u,params:f,route:m,data:h,form:_})=>{var E;l=!0;const v=new URL(location.href);({params:f={},route:m={id:null}}=ce(v,!1)||{});let y;try{const b=u.map(async(L,K)=>{const V=h[K];return be({loader:ge[L],url:v,params:f,route:m,parent:async()=>{const I={};for(let C=0;C<K;C+=1)Object.assign(I,(await b[C]).data);return I},server_data_node:ve(V)})});y=await te({url:v,params:f,branch:await Promise.all(b),status:o,error:c,form:_,route:(E=Le.find(({id:L})=>L===m.id))!=null?E:null})}catch(b){if(b instanceof et){await ue(new URL(b.location,location.href));return}y=await le({status:b instanceof Ae?b.status:500,error:await re(b,{url:v,params:f,route:m}),url:v,route:m})}Ce(y)}}}async function tt(a,e){var p;const n=new URL(a);n.pathname=Lt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await me(n.href),r=await i.json();if(!i.ok)throw new Error(r);return(p=r.nodes)==null||p.forEach(t=>{var l,s;(t==null?void 0:t.type)==="data"&&(t.data=ln(t.data),t.uses={dependencies:new Set((l=t.uses.dependencies)!=null?l:[]),params:new Set((s=t.uses.params)!=null?s:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),r}function re(a,e){var n;return a instanceof Ae?a.body:(n=xt.handleError({error:a,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}function Oe(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function dn({env:a,hydrate:e,paths:n,target:i,version:r}){mt(n),wt(r);const p=cn({target:i,base:n.base});gt({client:p}),e?await p._hydrate(e):p.goto(location.href,{replaceState:!0}),p._start_router()}export{dn as start};
