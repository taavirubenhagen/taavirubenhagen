import{S as d,i as v,s as C,l as b,n as g,o as k,h as u,p as f,g as w,q as m,z as B,H as c,R as I,A as R,B as S,C as q,t as y,b as z,K as E}from"./index.a46aface.js";import{w as _}from"./index.26562532.js";/* empty css               */const U=_(0),Y=_([0,0]),h=_(!1);function H(t){let e,n;return{c(){e=b("i"),this.h()},l(a){e=g(a,"I",{class:!0}),k(e).forEach(u),this.h()},h(){f(e,"class",n="relative "+(t[1]?"invert":"")+" "+t[2]+" iconoir-"+t[0])},m(a,i){w(a,e,i)},p(a,[i]){i&7&&n!==(n="relative "+(a[1]?"invert":"")+" "+a[2]+" iconoir-"+a[0])&&f(e,"class",n)},i:m,o:m,d(a){a&&u(e)}}}function T(t,e,n){let{name:a}=e,{inverted:i=!1}=e,{textClass:r=""}=e;return t.$$set=s=>{"name"in s&&n(0,a=s.name),"inverted"in s&&n(1,i=s.inverted),"textClass"in s&&n(2,r=s.textClass)},[a,i,r]}class j extends d{constructor(e){super(),v(this,e,T,H,C,{name:0,inverted:1,textClass:2})}}function A(t){let e,n,a,i;const r=t[2].default,s=B(r,t,t[1],null);return{c(){e=b("button"),s&&s.c(),this.h()},l(l){e=g(l,"BUTTON",{class:!0});var o=k(e);s&&s.l(o),o.forEach(u),this.h()},h(){f(e,"class","relative z-20")},m(l,o){w(l,e,o),s&&s.m(e,null),n=!0,a||(i=[c(e,"mouseenter",t[3]),c(e,"mouseleave",t[4]),c(e,"click",function(){I(t[0])&&t[0].apply(this,arguments)})],a=!0)},p(l,[o]){t=l,s&&s.p&&(!n||o&2)&&R(s,r,t,t[1],n?q(r,t[1],o,null):S(t[1]),null)},i(l){n||(y(s,l),n=!0)},o(l){z(s,l),n=!1},d(l){l&&u(e),s&&s.d(l),a=!1,E(i)}}}function K(t,e,n){let{$$slots:a={},$$scope:i}=e,{onClick:r}=e;const s=()=>h.set(!0),l=()=>h.set(!1);return t.$$set=o=>{"onClick"in o&&n(0,r=o.onClick),"$$scope"in o&&n(1,i=o.$$scope)},[r,i,a,s,l]}class D extends d{constructor(e){super(),v(this,e,K,A,C,{onClick:0})}}export{j as I,D as R,h as b,Y as c,U as g};