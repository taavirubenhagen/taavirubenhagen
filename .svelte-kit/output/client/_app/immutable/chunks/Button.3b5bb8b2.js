import{S as C,i as I,s as j,b as _,h as g,n as h,t as u,v as c,w as p,e as b,f as w,g as k,k as m,l as d,m as $,c as B,d as N,j as y,o as E,u as q,q as D,r as M,F as R,E as S}from"./index.e6c62ba9.js";/* empty css               */import{M as V}from"./MediumParagraph.d40cd64b.js";import{R as F,I as P}from"./RawButton.903a6fff.js";function v(f){let e,n;return e=new P({props:{name:"open-new-window",textClass:"relative"}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function z(f){let e,n,t,r;const l=f[4].default,a=B(l,f,f[5],null);let s=f[2]&&v();return{c(){e=b("div"),a&&a.c(),n=N(),s&&s.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var o=k(e);a&&a.l(o),n=y(o),s&&s.l(o),o.forEach(m),this.h()},h(){d(e,"class",t="transition duration-200 ease-in hover:invert bg-background px-4 py-2 flex "+(f[2]?"justify-between":"justify-center")+" items-center gap-2")},m(i,o){$(i,e,o),a&&a.m(e,null),E(e,n),s&&s.m(e,null),r=!0},p(i,o){a&&a.p&&(!r||o&32)&&q(a,l,i,i[5],r?M(l,i[5],o,null):D(i[5]),null),i[2]?s?o&4&&u(s,1):(s=v(),s.c(),u(s,1),s.m(e,null)):s&&(R(),c(s,1,1,()=>{s=null}),S()),(!r||o&4&&t!==(t="transition duration-200 ease-in hover:invert bg-background px-4 py-2 flex "+(i[2]?"justify-between":"justify-center")+" items-center gap-2"))&&d(e,"class",t)},i(i){r||(u(a,i),u(s),r=!0)},o(i){c(a,i),c(s),r=!1},d(i){i&&m(e),a&&a.d(i),s&&s.d()}}}function A(f){let e,n,t,r;return n=new V({props:{$$slots:{default:[z]},$$scope:{ctx:f}}}),{c(){e=b("div"),_(n.$$.fragment),this.h()},l(l){e=w(l,"DIV",{class:!0});var a=k(e);g(n.$$.fragment,a),a.forEach(m),this.h()},h(){d(e,"class",t=(f[0]?"invert":"")+" border-2 "+f[1]+" border-onBackground")},m(l,a){$(l,e,a),h(n,e,null),r=!0},p(l,a){const s={};a&36&&(s.$$scope={dirty:a,ctx:l}),n.$set(s),(!r||a&3&&t!==(t=(l[0]?"invert":"")+" border-2 "+l[1]+" border-onBackground"))&&d(e,"class",t)},i(l){r||(u(n.$$.fragment,l),r=!0)},o(l){c(n.$$.fragment,l),r=!1},d(l){l&&m(e),p(n)}}}function G(f){let e,n;return e=new F({props:{onClick:f[3],$$slots:{default:[A]},$$scope:{ctx:f}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,r){h(e,t,r),n=!0},p(t,[r]){const l={};r&8&&(l.onClick=t[3]),r&39&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){c(e.$$.fragment,t),n=!1},d(t){p(e,t)}}}function H(f,e,n){let{$$slots:t={},$$scope:r}=e,{inverted:l=!1}=e,{borderClass:a=""}=e,{openInNew:s=!1}=e,{onClick:i}=e;return f.$$set=o=>{"inverted"in o&&n(0,l=o.inverted),"borderClass"in o&&n(1,a=o.borderClass),"openInNew"in o&&n(2,s=o.openInNew),"onClick"in o&&n(3,i=o.onClick),"$$scope"in o&&n(5,r=o.$$scope)},[l,a,s,i,t,r]}class Q extends C{constructor(e){super(),I(this,e,H,G,j,{inverted:0,borderClass:1,openInNew:2,onClick:3})}}export{Q as B};
