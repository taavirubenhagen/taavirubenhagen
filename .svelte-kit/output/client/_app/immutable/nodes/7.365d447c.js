import{S as b,i as x,s as g,y as v,e as f,a as u,b as m,d as o,f as _,g as p,p as y,z as $,q as h,A as k}from"../chunks/index.627121b3.js";/* empty css                       */function z(n,e,t){const a=n.slice();return a[2]=e[t],a[4]=t,a}function E(n){let e;return{c(){e=f("i"),this.h()},l(t){e=u(t,"I",{class:!0}),m(e).forEach(o),this.h()},h(){_(e,"class","text-2xl md:text-5xl iconoir-"+n[2])},m(t,a){p(t,e,a)},p:h,d(t){t&&o(e)}}}function I(n){let e,t,a,l;v(n[1]);let w=["home","speech","arrow-separate","github","instagram","chat-bubble-empty"],r=[];for(let s=0;s<6;s+=1)r[s]=E(z(n,w,s));return{c(){e=f("main"),t=f("div");for(let s=0;s<6;s+=1)r[s].c();this.h()},l(s){e=u(s,"MAIN",{class:!0});var c=m(e);t=u(c,"DIV",{class:!0});var i=m(t);for(let d=0;d<6;d+=1)r[d].l(i);i.forEach(o),c.forEach(o),this.h()},h(){_(t,"class","md:w-1/2 flex justify-between"),_(e,"class","h-screen p-16 flex_col_center")},m(s,c){p(s,e,c),y(e,t);for(let i=0;i<6;i+=1)r[i]&&r[i].m(t,null);a||(l=$(window,"resize",n[1]),a=!0)},p:h,i:h,o:h,d(s){s&&o(e),k(r,s),a=!1,l()}}}function q(n,e,t){let a;function l(){t(0,a=window.innerHeight)}return[a,l]}class S extends b{constructor(e){super(),x(this,e,q,I,g,{})}}export{S as component};
