import{S as T,i as B,s as S,l as V,c as g,j as D,n as Y,o as A,a as h,k as H,h as d,p as v,g as y,m as b,v as E,t as f,b as p,d as k,e as F,f as j,J as L,G,H as P,E as J,L as M,D as N,O,z as X,A as K,B as Q,C as R}from"../chunks/index.7b7993cb.js";import{p as U,n as W}from"../chunks/stores.b9a305b9.js";import{b as Z,c as I,g as x}from"../chunks/RawButton.af5d6688.js";/* empty css                       */import{L as ee}from"../chunks/LargeHeading.c9438f3c.js";import{B as q}from"../chunks/Button.ad7d6029.js";import"../chunks/paths.426c780e.js";import{P as te}from"../chunks/Page.530faad7.js";import{D as ne}from"../chunks/DeviceDetector.c4aa0fa6.js";function re(s){let e;return{c(){e=F("Contact")},l(r){e=j(r,"Contact")},m(r,t){y(r,e,t)},d(r){r&&d(e)}}}function oe(s){let e;return{c(){e=F("Privacy Policy")},l(r){e=j(r,"Privacy Policy")},m(r,t){y(r,e,t)},d(r){r&&d(e)}}}function se(s){let e,r,t,n,o;return r=new q({props:{borderClass:"border-l-0 border-b-0",onClick:s[2],$$slots:{default:[re]},$$scope:{ctx:s}}}),n=new q({props:{borderClass:"border-l-0 border-b-0",onClick:s[3],$$slots:{default:[oe]},$$scope:{ctx:s}}}),{c(){e=V("div"),g(r.$$.fragment),t=D(),g(n.$$.fragment),this.h()},l(l){e=Y(l,"DIV",{class:!0});var i=A(e);h(r.$$.fragment,i),t=H(i),h(n.$$.fragment,i),i.forEach(d),this.h()},h(){v(e,"class","w-full grid grid-cols-2")},m(l,i){y(l,e,i),b(r,e,null),E(e,t),b(n,e,null),o=!0},p(l,[i]){const m={};i&1&&(m.onClick=l[2]),i&16&&(m.$$scope={dirty:i,ctx:l}),r.$set(m);const _={};i&2&&(_.onClick=l[3]),i&16&&(_.$$scope={dirty:i,ctx:l}),n.$set(_)},i(l){o||(f(r.$$.fragment,l),f(n.$$.fragment,l),o=!0)},o(l){p(r.$$.fragment,l),p(n.$$.fragment,l),o=!1},d(l){l&&d(e),k(r),k(n)}}}function ae(s,e,r){let{contactLink:t}=e,{ppLink:n}=e;const o=()=>window.location.href=t,l=()=>window.location.href=n;return s.$$set=i=>{"contactLink"in i&&r(0,t=i.contactLink),"ppLink"in i&&r(1,n=i.ppLink)},[t,n,o,l]}class ie extends T{constructor(e){super(),B(this,e,ae,se,S,{contactLink:0,ppLink:1})}}function le(s){let e,r,t;return{c(){e=V("div"),this.h()},l(n){e=Y(n,"DIV",{class:!0,style:!0}),A(e).forEach(d),this.h()},h(){v(e,"class",r=(s[0]?"w-8 h-8 opacity-25":"w-4 h-4 opacity-100")+" duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full"),v(e,"style",t="left: "+s[1][0]+"px; top: "+s[1][1]+"px; transition-property: transform, opacity, width, height; "+(s[0]?"transition-timing-function: cubic-bezier(.2, 0, .1, .9);":"transition-timing-function: cubic-bezier(.5, 0, .5, 1);"))},m(n,o){y(n,e,o)},p(n,o){o&1&&r!==(r=(n[0]?"w-8 h-8 opacity-25":"w-4 h-4 opacity-100")+" duration-300 fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none backdrop-invert rounded-full")&&v(e,"class",r),o&3&&t!==(t="left: "+n[1][0]+"px; top: "+n[1][1]+"px; transition-property: transform, opacity, width, height; "+(n[0]?"transition-timing-function: cubic-bezier(.2, 0, .1, .9);":"transition-timing-function: cubic-bezier(.5, 0, .5, 1);"))&&v(e,"style",t)},d(n){n&&d(e)}}}function ce(s){let e,r;return e=new ne({props:{showInDevice:"desktop",$$slots:{default:[le]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){b(e,t,n),r=!0},p(t,[n]){const o={};n&7&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function ue(s,e,r){let t,n;return L(s,Z,o=>r(0,t=o)),L(s,I,o=>r(1,n=o)),[t,n]}class fe extends T{constructor(e){super(),B(this,e,ue,ce,S,{})}}function pe(s){let e;const r=s[4].default,t=X(r,s,s[8],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,o){t&&t.m(n,o),e=!0},p(n,o){t&&t.p&&(!e||o&256)&&K(t,r,n,n[8],e?R(r,n[8],o,null):Q(n[8]),null)},i(n){e||(f(t,n),e=!0)},o(n){p(t,n),e=!1},d(n){t&&t.d(n)}}}function me(s){let e,r;return e=new te({props:{$$slots:{default:[_e]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){b(e,t,n),r=!0},p(t,n){const o={};n&256&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function $e(s){let e;return{c(){e=F("Loading ↺")},l(r){e=j(r,"Loading ↺")},m(r,t){y(r,e,t)},d(r){r&&d(e)}}}function _e(s){let e,r;return e=new ee({props:{$$slots:{default:[$e]},$$scope:{ctx:s}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){b(e,t,n),r=!0},p(t,n){const o={};n&256&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function de(s){let e,r;return e=new ie({props:{contactLink:"/legal/contact",ppLink:"/legal/privacy-policy"}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){b(e,t,n),r=!0},i(t){r||(f(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function ge(s){let e,r,t,n,o,l,i,m,_;G(s[5]),r=new fe({});const C=[me,pe],$=[];function z(a,c){return a[2]?0:1}n=z(s),o=$[n]=C[n](s);let u=s[3]&&de();return{c(){e=V("main"),g(r.$$.fragment),t=D(),o.c(),l=D(),u&&u.c(),this.h()},l(a){e=Y(a,"MAIN",{class:!0});var c=A(e);h(r.$$.fragment,c),t=H(c),o.l(c),l=H(c),u&&u.l(c),c.forEach(d),this.h()},h(){v(e,"class","relative h-screen overflow-x-hidden cursor-none")},m(a,c){y(a,e,c),b(r,e,null),E(e,t),$[n].m(e,null),E(e,l),u&&u.m(e,null),i=!0,m||(_=[P(window,"resize",s[5]),P(e,"mousemove",s[6]),P(e,"scroll",s[7])],m=!0)},p(a,[c]){let w=n;n=z(a),n===w?$[n].p(a,c):(N(),p($[w],1,1,()=>{$[w]=null}),J(),o=$[n],o?o.p(a,c):(o=$[n]=C[n](a),o.c()),f(o,1),o.m(e,l))},i(a){i||(f(r.$$.fragment,a),f(o),f(u),i=!0)},o(a){p(r.$$.fragment,a),p(o),p(u),i=!1},d(a){a&&d(e),k(r),$[n].d(),u&&u.d(),m=!1,M(_)}}}function he(s,e,r){let t,n,o;L(s,U,a=>r(9,t=a)),L(s,I,a=>r(1,n=a)),L(s,W,a=>r(2,o=a));let{$$slots:l={},$$scope:i}=e,m;const _=t.url.href.split("/").slice(3),C=!(_.includes("hoffmanns-schuppen")||_.includes("website"));function $(){r(0,m=window.innerHeight)}const z=a=>O(I,n=[a.clientX,a.clientY],n),u=a=>{var c,w;scrollY=(c=a==null?void 0:a.currentTarget)==null?void 0:c.scrollTop,x.set((w=a==null?void 0:a.currentTarget)==null?void 0:w.scrollTop)};return s.$$set=a=>{"$$scope"in a&&r(8,i=a.$$scope)},[m,n,o,C,l,$,z,u,i]}class De extends T{constructor(e){super(),B(this,e,he,ge,S,{})}}export{De as component};