import{S as h,i as d,s as C,e as v,f as g,g as k,k as u,l as f,m as p,C as m,c as b,p as c,N as B,u as I,q,r as y,t as E,v as N,x as R}from"./index.d7191f4d.js";import{c as _}from"./state.db657d8b.js";/* empty css               */function S(t){let e,s;return{c(){e=v("i"),this.h()},l(n){e=g(n,"I",{class:!0}),k(e).forEach(u),this.h()},h(){f(e,"class",s="relative "+t[1]+" iconoir-"+t[0])},m(n,i){p(n,e,i)},p(n,[i]){i&3&&s!==(s="relative "+n[1]+" iconoir-"+n[0])&&f(e,"class",s)},i:m,o:m,d(n){n&&u(e)}}}function T(t,e,s){let{name:n}=e,{textClass:i=""}=e;return t.$$set=r=>{"name"in r&&s(0,n=r.name),"textClass"in r&&s(1,i=r.textClass)},[n,i]}class j extends h{constructor(e){super(),d(this,e,T,S,C,{name:0,textClass:1})}}function w(t){let e,s,n,i;const r=t[2].default,a=b(r,t,t[1],null);return{c(){e=v("button"),a&&a.c(),this.h()},l(l){e=g(l,"BUTTON",{class:!0});var o=k(e);a&&a.l(o),o.forEach(u),this.h()},h(){f(e,"class","relative z-20")},m(l,o){p(l,e,o),a&&a.m(e,null),s=!0,n||(i=[c(e,"mouseenter",t[3]),c(e,"mouseleave",t[4]),c(e,"click",function(){B(t[0])&&t[0].apply(this,arguments)})],n=!0)},p(l,[o]){t=l,a&&a.p&&(!s||o&2)&&I(a,r,t,t[1],s?y(r,t[1],o,null):q(t[1]),null)},i(l){s||(E(a,l),s=!0)},o(l){N(a,l),s=!1},d(l){l&&u(e),a&&a.d(l),n=!1,R(i)}}}function z(t,e,s){let{$$slots:n={},$$scope:i}=e,{onClick:r}=e;const a=()=>_.set(!0),l=()=>_.set(!1);return t.$$set=o=>{"onClick"in o&&s(0,r=o.onClick),"$$scope"in o&&s(1,i=o.$$scope)},[r,i,n,a,l]}class A extends h{constructor(e){super(),d(this,e,z,w,C,{onClick:0})}}export{j as I,A as R};
