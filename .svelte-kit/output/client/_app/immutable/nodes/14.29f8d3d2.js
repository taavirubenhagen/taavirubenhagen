import{S as R,i as q,s as B,c as v,a as b,m as w,t as S,b as k,d as I,l as h,n as D,o as _,p as g,h as m,q as P,r as d,g as p,u as E,M as V,v as N,N as F,F as L,H as T,B as H,J as y,e as J,f as U}from"../chunks/index.84ea942b.js";import{p as j}from"../chunks/stores.f8cbdbb3.js";import"../chunks/ua-parser.506ab6e0.js";import{S as x}from"../chunks/Section.3146adab.js";import{M as z}from"../chunks/MediumParagraph.3e7722ae.js";import{I as A}from"../chunks/icon.e9b531da.js";import{R as G}from"../chunks/RawButton.f3de4b67.js";function K(o){let e,r,t;return r=new A({props:{inverted:!0,name:"arrow-forward"}}),{c(){e=h("div"),v(r.$$.fragment),this.h()},l(n){e=_(n,"DIV",{class:!0});var a=g(e);b(r.$$.fragment,a),a.forEach(m),this.h()},h(){d(e,"class","rounded-r-lg bg-green-900 w-12 h-12 pr-1 center_row")},m(n,a){p(n,e,a),w(r,e,null),t=!0},p:L,i(n){t||(S(r.$$.fragment,n),t=!0)},o(n){k(r.$$.fragment,n),t=!1},d(n){n&&m(e),I(r)}}}function O(o){let e,r,t,n,a,i,c,f,u;return i=new G({props:{onClick:o[7],$$slots:{default:[K]},$$scope:{ctx:o}}}),{c(){e=h("div"),r=h("div"),t=h("input"),a=D(),v(i.$$.fragment),this.h()},l(s){e=_(s,"DIV",{class:!0});var l=g(e);r=_(l,"DIV",{class:!0});var $=g(r);t=_($,"INPUT",{type:!0,class:!0,placeholder:!0}),$.forEach(m),a=P(l),b(i.$$.fragment,l),l.forEach(m),this.h()},h(){d(t,"type","text"),t.autofocus=o[1],d(t,"class","rounded-l-lg outline-none h-full px-1 text-xl"),d(t,"placeholder",o[3]),d(r,"class",n=(o[0]?"invert":"")+" rounded-l-lg border-2 border-green-900"),d(e,"class","flex")},m(s,l){p(s,e,l),E(e,r),E(r,t),V(t,o[4]),E(e,a),w(i,e,null),c=!0,o[1]&&t.focus(),f||(u=[N(t,"input",o[5]),N(t,"keypress",o[6])],f=!0)},p(s,l){(!c||l&2)&&(t.autofocus=s[1]),(!c||l&8)&&d(t,"placeholder",s[3]),l&16&&t.value!==s[4]&&V(t,s[4]),(!c||l&1&&n!==(n=(s[0]?"invert":"")+" rounded-l-lg border-2 border-green-900"))&&d(r,"class",n);const $={};l&20&&($.onClick=s[7]),l&256&&($.$$scope={dirty:l,ctx:s}),i.$set($)},i(s){c||(S(i.$$.fragment,s),c=!0)},o(s){k(i.$$.fragment,s),c=!1},d(s){s&&m(e),I(i),f=!1,F(u)}}}function Q(o){let e,r;return e=new z({props:{$$slots:{default:[O]},$$scope:{ctx:o}}}),{c(){v(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){w(e,t,n),r=!0},p(t,[n]){const a={};n&287&&(a.$$scope={dirty:n,ctx:t}),e.$set(a)},i(t){r||(S(e.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),r=!1},d(t){I(e,t)}}}function W(o,e,r){let{inverted:t=!1}=e,{autofocus:n=!1}=e,{onSubmit:a}=e,{placeholder:i=""}=e,c="";function f(){c=this.value,r(4,c)}const u=l=>l.key==="Enter"?a(c):null,s=()=>a(c);return o.$$set=l=>{"inverted"in l&&r(0,t=l.inverted),"autofocus"in l&&r(1,n=l.autofocus),"onSubmit"in l&&r(2,a=l.onSubmit),"placeholder"in l&&r(3,i=l.placeholder)},[t,n,a,i,c,f,u,s]}class X extends R{constructor(e){super(),q(this,e,W,Q,B,{inverted:0,autofocus:1,onSubmit:2,placeholder:3})}}function C(o){let e;return{c(){e=h("div"),this.h()},l(r){e=_(r,"DIV",{class:!0}),g(e).forEach(m),this.h()},h(){d(e,"class","h-12")},m(r,t){p(r,e,t)},d(r){r&&m(e)}}}function M(o){let e,r;return{c(){e=h("div"),r=J("Login fehlgeschlagen."),this.h()},l(t){e=_(t,"DIV",{class:!0});var n=g(e);r=U(n,"Login fehlgeschlagen."),n.forEach(m),this.h()},h(){d(e,"class","mt-4 h-8 flex items-start text-error")},m(t,n){p(t,e,n),E(e,r)},d(t){t&&m(e)}}}function Y(o){let e=o[0].url.href.split("/").pop()=="failed",r,t,n,a=o[0].url.href.split("/").pop()=="failed",i,c,f=e&&C();t=new X({props:{autofocus:!0,onSubmit:o[1],placeholder:"Passwort"}});let u=a&&M();return{c(){f&&f.c(),r=D(),v(t.$$.fragment),n=D(),u&&u.c(),i=y()},l(s){f&&f.l(s),r=P(s),b(t.$$.fragment,s),n=P(s),u&&u.l(s),i=y()},m(s,l){f&&f.m(s,l),p(s,r,l),w(t,s,l),p(s,n,l),u&&u.m(s,l),p(s,i,l),c=!0},p(s,l){l&1&&(e=s[0].url.href.split("/").pop()=="failed"),e?f||(f=C(),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null),l&1&&(a=s[0].url.href.split("/").pop()=="failed"),a?u||(u=M(),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null)},i(s){c||(S(t.$$.fragment,s),c=!0)},o(s){k(t.$$.fragment,s),c=!1},d(s){f&&f.d(s),s&&m(r),I(t,s),s&&m(n),u&&u.d(s),s&&m(i)}}}function Z(o){let e,r,t;return r=new x({props:{className:"center_col",$$slots:{default:[Y]},$$scope:{ctx:o}}}),{c(){e=h("div"),v(r.$$.fragment),this.h()},l(n){e=_(n,"DIV",{style:!0});var a=g(e);b(r.$$.fragment,a),a.forEach(m),this.h()},h(){T(e,"font-family",'"Roboto Slab"')},m(n,a){p(n,e,a),w(r,e,null),t=!0},p(n,[a]){const i={};a&5&&(i.$$scope={dirty:a,ctx:n}),r.$set(i)},i(n){t||(S(r.$$.fragment,n),t=!0)},o(n){k(r.$$.fragment,n),t=!1},d(n){n&&m(e),I(r)}}}function ee(o,e,r){let t;return H(o,j,a=>r(0,t=a)),[t,a=>{console.log(a),window.location.href="/drafts/hoffmanns-schuppen/admin/access/"+a}]}class ie extends R{constructor(e){super(),q(this,e,ee,Z,B,{})}}export{ie as component};