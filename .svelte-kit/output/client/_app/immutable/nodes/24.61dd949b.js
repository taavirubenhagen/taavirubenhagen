import{S as L,i as M,s as G,c as V,a as x,m as D,t as d,b as g,d as S,K as H,l as b,n as I,J as z,o as k,p as w,q as E,h as u,r as v,g as h,u as j,L as J,e as B,f as C,F as p,G as K,w as P,A as R}from"../chunks/index.84ea942b.js";import{t as q}from"../chunks/ua-parser.ce0f440b.js";import{M as U}from"../chunks/MediumHeading.53ff1642.js";import{I as O}from"../chunks/icon.f705ef6d.js";import{B as Q}from"../chunks/Button.8d9c975d.js";import{S as T}from"../chunks/Section.5ed59174.js";function A(c,e,n){const o=c.slice();return o[2]=e[n],o}function W(c){let e;return{c(){e=B("tavy icons")},l(n){e=C(n,"tavy icons")},m(n,o){h(n,e,o)},d(n){n&&u(e)}}}function X(c){let e;return{c(){e=B("download")},l(n){e=C(n,"download")},m(n,o){h(n,e,o)},d(n){n&&u(e)}}}function Y(c){return{c:p,l:p,m:p,p,i:p,o:p,d:p}}function Z(c){let e,n,o=c[1],t=[];for(let a=0;a<o.length;a+=1)t[a]=F(A(c,o,a));const l=a=>g(t[a],1,1,()=>{t[a]=null});return{c(){e=b("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=k(a,"DIV",{class:!0});var i=w(e);for(let s=0;s<t.length;s+=1)t[s].l(i);i.forEach(u),this.h()},h(){v(e,"class","-mr-4 flex flex-wrap gap-4")},m(a,i){h(a,e,i);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null);n=!0},p(a,i){if(i&1){o=a[1];let s;for(s=0;s<o.length;s+=1){const $=A(a,o,s);t[s]?(t[s].p($,i),d(t[s],1)):(t[s]=F($),t[s].c(),d(t[s],1),t[s].m(e,null))}for(K(),s=o.length;s<t.length;s+=1)l(s);P()}},i(a){if(!n){for(let i=0;i<o.length;i+=1)d(t[i]);n=!0}},o(a){t=t.filter(Boolean);for(let i=0;i<t.length;i+=1)g(t[i]);n=!1},d(a){a&&u(e),R(t,a)}}}function F(c){let e,n,o,t;return n=new O({props:{name:c[2],size:24}}),{c(){e=b("div"),V(n.$$.fragment),o=I(),this.h()},l(l){e=k(l,"DIV",{class:!0});var a=w(e);x(n.$$.fragment,a),o=E(a),a.forEach(u),this.h()},h(){v(e,"class","rounded-lg shadow min-w-[4rem] aspect-square center_col")},m(l,a){h(l,e,a),D(n,e,null),j(e,o),t=!0},p,i(l){t||(d(n.$$.fragment,l),t=!0)},o(l){g(n.$$.fragment,l),t=!1},d(l){l&&u(e),S(n)}}}function ee(c){let e,n;return{c(){e=b("div"),n=B("loading tavy icons...")},l(o){e=k(o,"DIV",{});var t=w(e);n=C(t,"loading tavy icons..."),t.forEach(u)},m(o,t){h(o,e,t),j(e,n)},p,i:p,o:p,d(o){o&&u(e)}}}function te(c){let e,n,o,t,l,a,i,s,$,y;n=new U({props:{$$slots:{default:[W]},$$scope:{ctx:c}}}),l=new Q({props:{onClick:oe,$$slots:{default:[X]},$$scope:{ctx:c}}});let m={ctx:c,current:null,token:null,hasCatch:!1,pending:ee,then:Z,catch:Y,value:1,blocks:[,,,]};return H(c[0](),m),{c(){e=b("div"),V(n.$$.fragment),o=I(),t=b("a"),V(l.$$.fragment),a=I(),i=b("div"),s=I(),$=z(),m.block.c(),this.h()},l(r){e=k(r,"DIV",{class:!0});var f=w(e);x(n.$$.fragment,f),o=E(f),t=k(f,"A",{download:!0,href:!0});var _=w(t);x(l.$$.fragment,_),_.forEach(u),f.forEach(u),a=E(r),i=k(r,"DIV",{class:!0}),w(i).forEach(u),s=E(r),$=z(),m.block.l(r),this.h()},h(){v(t,"download",""),v(t,"href","/tavy/icons/"+q+"/tavy-icons-"+q+".zip"),v(e,"class","flex justify-between items-center"),v(i,"class","h-16")},m(r,f){h(r,e,f),D(n,e,null),j(e,o),j(e,t),D(l,t,null),h(r,a,f),h(r,i,f),h(r,s,f),h(r,$,f),m.block.m(r,m.anchor=f),m.mount=()=>$.parentNode,m.anchor=$,y=!0},p(r,f){c=r;const _={};f&32&&(_.$$scope={dirty:f,ctx:c}),n.$set(_);const N={};f&32&&(N.$$scope={dirty:f,ctx:c}),l.$set(N),J(m,c,f)},i(r){y||(d(n.$$.fragment,r),d(l.$$.fragment,r),d(m.block),y=!0)},o(r){g(n.$$.fragment,r),g(l.$$.fragment,r);for(let f=0;f<3;f+=1){const _=m.blocks[f];g(_)}y=!1},d(r){r&&u(e),S(n),S(l),r&&u(a),r&&u(i),r&&u(s),r&&u($),m.block.d(r),m.token=null,m=null}}}function ne(c){let e,n;return e=new T({props:{className:"p-8 pt-32",$$slots:{default:[te]},$$scope:{ctx:c}}}),{c(){V(e.$$.fragment)},l(o){x(e.$$.fragment,o)},m(o,t){D(e,o,t),n=!0},p(o,[t]){const l={};t&32&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){n||(d(e.$$.fragment,o),n=!0)},o(o){g(e.$$.fragment,o),n=!1},d(o){S(e,o)}}}const oe=()=>{};function ae(c){async function e(){const n=`https://api.github.com/repositories/581311131/contents/src/tavy/main/icons/${q}`,o=await(await fetch(n)).json();let t=[];console.log(o[0].name);for(let l=0;l<o.length;l++){const a=o[l].name.split(".");a[1]==="svg"&&t.push(a[0])}return t}return[e]}class ue extends L{constructor(e){super(),M(this,e,ae,ne,G,{})}}export{ue as component};
