import{S,i as q,s as x,k as f,q as _,a as k,l as d,m as g,r as h,h as u,c as y,b as m,D as v,u as $,I as E,L as C}from"../chunks/index-9292dee3.js";import{s as D}from"../chunks/singletons-c37d2099.js";const H=()=>{const s=D;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},I={subscribe(s){return H().page.subscribe(s)}};function L(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=_(r),n=k(),i=f("p"),l=_(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=y(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function P(s,t,r){let o;return C(s,I,n=>r(0,o=n)),[o]}class z extends S{constructor(t){super(),q(this,t,P,L,x,{})}}export{z as default};
