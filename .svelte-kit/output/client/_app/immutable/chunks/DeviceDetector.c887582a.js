import{S as O,i as k,s as y,I,g as b,p as _,E as A,q as m,C as S,d as p,D as q,x as v,z as C,A as z,B as N}from"./index.f3cbe732.js";import{U as P}from"./ua-parser.44220aa4.js";function D(l){let t;const r=l[5].default,e=v(r,l,l[4],null);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,o){e&&e.m(s,o),t=!0},p(s,o){e&&e.p&&(!t||o&16)&&C(e,r,s,s[4],t?N(r,s[4],o,null):z(s[4]),null)},i(s){t||(_(e,s),t=!0)},o(s){m(e,s),t=!1},d(s){e&&e.d(s)}}}function U(l){let t,r,e=l[0]&&D(l);return{c(){e&&e.c(),t=I()},l(s){e&&e.l(s),t=I()},m(s,o){e&&e.m(s,o),b(s,t,o),r=!0},p(s,[o]){s[0]?e?(e.p(s,o),o&1&&_(e,1)):(e=D(s),e.c(),_(e,1),e.m(t.parentNode,t)):e&&(A(),m(e,1,1,()=>{e=null}),S())},i(s){r||(_(e),r=!0)},o(s){m(e),r=!1},d(s){e&&e.d(s),s&&p(t)}}}function E(l,t,r){let{$$slots:e={},$$scope:s}=t,{showInDevice:o=void 0}=t,{showInBrowser:a=void 0}=t,{showInOs:c=void 0}=t,h=!1;q(()=>{const n=new P;let f=n.getBrowser(),d=n.getDevice(),B=n.getOS(),u=!0;o&&!w(g(d),o)&&(u=!1),a&&!w(i(f.name),a)&&(u=!1),c&&!w(i(B.name),c)&&(u=!1),r(0,h=u)});const g=n=>n.type?i(n.type):"desktop",i=n=>n.toLowerCase().normalize("NFD").replace(/ /g,"").replace(/[^\w\s]/gi,"").replace(/[\u0300-\u036f]/g,""),w=(n,f)=>Array.isArray(f)?f.some(d=>n===i(d)):n===i(f);return l.$$set=n=>{"showInDevice"in n&&r(1,o=n.showInDevice),"showInBrowser"in n&&r(2,a=n.showInBrowser),"showInOs"in n&&r(3,c=n.showInOs),"$$scope"in n&&r(4,s=n.$$scope)},[h,o,a,c,s,e]}class M extends O{constructor(t){super(),k(this,t,E,U,y,{showInDevice:1,showInBrowser:2,showInOs:3})}}export{M as D};
