import{S as H,i as I,s as M,a as E,c as N,e as $,b as W,d as j,f as k,g as v,h as D,k as h,j as G,l as T,m as z,o as S,n as L,p as B,u as U,q as V,r as X,t as O,v as P,w as y,x as F,G as J,A as q,B as A,C as K}from"../chunks/index.2613787b.js";/* empty css                       */import{S as Q}from"../chunks/SmallParagraph.3c320427.js";const{setTimeout:Y}=J;function R(a){let e;return{c(){e=q("Back to top")},l(s){e=A(s,"Back to top")},m(s,o){z(s,e,o)},d(s){s&&h(e)}}}function Z(a){let e,s;return{c(){e=$("s1"),s=q("This page is still under development.")},l(o){e=k(o,"S1",{});var n=v(e);s=A(n,"This page is still under development."),n.forEach(h)},m(o,n){z(o,e,n),S(e,s)},p:K,d(o){o&&h(e)}}}function x(a){let e=!1,s=()=>{e=!1},o,n,i,c,r,_,m,u,w,b;E(a[5]),E(a[6]),r=new Q({props:{$$slots:{default:[R]},$$scope:{ctx:a}}});const f=a[4].default,p=N(f,a,a[7],null),d=p||Z();return{c(){n=$("main"),i=$("div"),c=$("button"),W(r.$$.fragment),m=j(),d&&d.c(),this.h()},l(t){n=k(t,"MAIN",{class:!0});var l=v(n);i=k(l,"DIV",{class:!0});var g=v(i);c=k(g,"BUTTON",{class:!0});var C=v(c);D(r.$$.fragment,C),C.forEach(h),g.forEach(h),m=G(l),d&&d.l(l),l.forEach(h),this.h()},h(){T(c,"class","transition-all duration-200 hover:scale-[102%] shadow-md rounded-lg h-10 bg-background px-4"),T(i,"class",_="transition-all duration-400 fixed z-40 "+a[3]+" w-screen center_row"),T(n,"class","max-w-screen min-h-screen background")},m(t,l){z(t,n,l),S(n,i),S(i,c),L(r,c,null),S(n,m),d&&d.m(n,null),u=!0,w||(b=[B(window,"resize",a[5]),B(window,"scroll",()=>{e=!0,clearTimeout(o),o=Y(s,100),a[6]()}),B(c,"click",ee)],w=!0)},p(t,[l]){l&1&&!e&&(e=!0,clearTimeout(o),scrollTo(window.pageXOffset,t[0]),o=Y(s,100));const g={};l&128&&(g.$$scope={dirty:l,ctx:t}),r.$set(g),(!u||l&8&&_!==(_="transition-all duration-400 fixed z-40 "+t[3]+" w-screen center_row"))&&T(i,"class",_),p&&p.p&&(!u||l&128)&&U(p,f,t,t[7],u?X(f,t[7],l,null):V(t[7]),null)},i(t){u||(O(r.$$.fragment,t),O(d,t),u=!0)},o(t){P(r.$$.fragment,t),P(d,t),u=!1},d(t){t&&h(n),y(r),d&&d.d(t),w=!1,F(b)}}}const ee=()=>{};function te(a,e,s){let o,{$$slots:n={},$$scope:i}=e,c,r;function _(f){const p=u-f;return u=f,f===0||p<=-8?"-bottom-10":Math.abs(p)<=16?o:(setTimeout(()=>s(3,o=_(m)),8e3),"bottom-8")}let m=0,u=0;function w(){s(1,c=window.innerHeight),s(2,r=window.innerWidth)}function b(){s(0,m=window.pageYOffset)}return a.$$set=f=>{"$$scope"in f&&s(7,i=f.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&s(3,o=_(m))},[m,c,r,o,n,w,b,i]}class ne extends H{constructor(e){super(),I(this,e,te,x,M,{})}}export{ne as component};
