import{S as F,i as J,s as K,c as N,a as S,m as V,t as $,b as h,d as j,l as v,j as E,n as k,o as I,k as z,h as g,p as d,g as B,q as _,D as Z,E as y,z as O,A as Q,B as T,C as U,G as x,w as ee,H as te,e as W,f as X}from"../chunks/index.128d686f.js";import"../chunks/paths.26df9e87.js";import{R as ne,I as se,g as le}from"../chunks/RawButton.4753c507.js";/* empty css                       */import{S as ae}from"../chunks/SmallParagraph.132b3681.js";function ie(a){let e;const n=a[4].default,t=O(n,a,a[5],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,i){t&&t.m(s,i),e=!0},p(s,i){t&&t.p&&(!e||i&32)&&Q(t,n,s,s[5],e?U(n,s[5],i,null):T(s[5]),null)},i(s){e||($(t,s),e=!0)},o(s){h(t,s),e=!1},d(s){t&&t.d(s)}}}function P(a){let e,n;return e=new se({props:{inverted:a[1],name:"open-new-window"}}),{c(){N(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p(t,s){const i={};s&2&&(i.inverted=t[1]),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function re(a){let e,n,t,s,i;n=new ae({props:{$$slots:{default:[ie]},$$scope:{ctx:a}}});let l=a[2]&&P(a);return{c(){e=v("div"),N(n.$$.fragment),t=E(),l&&l.c(),this.h()},l(o){e=k(o,"DIV",{class:!0});var r=I(e);S(n.$$.fragment,r),t=z(r),l&&l.l(r),r.forEach(g),this.h()},h(){d(e,"class",s="inline gap-2 "+(a[0]?"":"underline underline-offset-4"))},m(o,r){B(o,e,r),V(n,e,null),_(e,t),l&&l.m(e,null),i=!0},p(o,r){const u={};r&32&&(u.$$scope={dirty:r,ctx:o}),n.$set(u),o[2]?l?(l.p(o,r),r&4&&$(l,1)):(l=P(o),l.c(),$(l,1),l.m(e,null)):l&&(Z(),h(l,1,1,()=>{l=null}),y()),(!i||r&1&&s!==(s="inline gap-2 "+(o[0]?"":"underline underline-offset-4")))&&d(e,"class",s)},i(o){i||($(n.$$.fragment,o),$(l),i=!0)},o(o){h(n.$$.fragment,o),h(l),i=!1},d(o){o&&g(e),j(n),l&&l.d()}}}function oe(a){let e,n;return e=new ne({props:{onClick:a[3],$$slots:{default:[re]},$$scope:{ctx:a}}}),{c(){N(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p(t,[s]){const i={};s&8&&(i.onClick=t[3]),s&39&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){j(e,t)}}}function fe(a,e,n){let{$$slots:t={},$$scope:s}=e,{invisible:i=!1}=e,{inverted:l=!1}=e,{openInNew:o=!1}=e,{onClick:r}=e;return a.$$set=u=>{"invisible"in u&&n(0,i=u.invisible),"inverted"in u&&n(1,l=u.inverted),"openInNew"in u&&n(2,o=u.openInNew),"onClick"in u&&n(3,r=u.onClick),"$$scope"in u&&n(5,s=u.$$scope)},[i,l,o,r,t,s]}class Y extends F{constructor(e){super(),J(this,e,fe,oe,K,{invisible:0,inverted:1,openInNew:2,onClick:3})}}function ue(a){let e;return{c(){e=W("menu")},l(n){e=X(n,"menu")},m(n,t){B(n,e,t)},d(n){n&&g(e)}}}function ce(a){let e;return{c(){e=W("support me")},l(n){e=X(n,"support me")},m(n,t){B(n,e,t)},d(n){n&&g(e)}}}function me(a){let e,n,t,s,i,l,o,r,u,b,q,H,C,A,w,G,M;x(a[3]),s=new Y({props:{invisible:!0,onClick:de,$$slots:{default:[ue]},$$scope:{ctx:a}}}),b=new Y({props:{invisible:!0,onClick:_e,$$slots:{default:[ce]},$$scope:{ctx:a}}});const L=a[2].default,m=O(L,a,a[4],null);return{c(){e=v("main"),n=v("div"),t=v("div"),N(s.$$.fragment),i=E(),l=v("img"),r=E(),u=v("div"),N(b.$$.fragment),H=E(),C=v("div"),A=E(),m&&m.c(),this.h()},l(f){e=k(f,"MAIN",{class:!0});var c=I(e);n=k(c,"DIV",{class:!0});var p=I(n);t=k(p,"DIV",{class:!0});var D=I(t);S(s.$$.fragment,D),D.forEach(g),i=z(p),l=k(p,"IMG",{src:!0,alt:!0,class:!0}),r=z(p),u=k(p,"DIV",{class:!0});var R=I(u);S(b.$$.fragment,R),R.forEach(g),p.forEach(g),H=z(c),C=k(c,"DIV",{class:!0}),I(C).forEach(g),A=z(c),m&&m.l(c),c.forEach(g),this.h()},h(){d(t,"class","w-24"),ee(l.src,o="/images/logos/t-r_logo.svg")||d(l,"src",o),d(l,"alt","Logo"),d(l,"class","h-[3.75rem]"),d(u,"class","w-24 flex justify-end"),d(n,"class",q="transition duration-medium fixed z-40 top-0 "+a[1]+" bg-background border-b border-primary w-full h-16 px-8 flex justify-between items-center"),d(C,"class","w-full h-full background"),d(e,"class","lowercase")},m(f,c){B(f,e,c),_(e,n),_(n,t),V(s,t,null),_(n,i),_(n,l),_(n,r),_(n,u),V(b,u,null),_(e,H),_(e,C),_(e,A),m&&m.m(e,null),w=!0,G||(M=te(window,"resize",a[3]),G=!0)},p(f,[c]){const p={};c&16&&(p.$$scope={dirty:c,ctx:f}),s.$set(p);const D={};c&16&&(D.$$scope={dirty:c,ctx:f}),b.$set(D),(!w||c&2&&q!==(q="transition duration-medium fixed z-40 top-0 "+f[1]+" bg-background border-b border-primary w-full h-16 px-8 flex justify-between items-center"))&&d(n,"class",q),m&&m.p&&(!w||c&16)&&Q(m,L,f,f[4],w?U(L,f[4],c,null):T(f[4]),null)},i(f){w||($(s.$$.fragment,f),$(b.$$.fragment,f),$(m,f),w=!0)},o(f){h(s.$$.fragment,f),h(b.$$.fragment,f),h(m,f),w=!1},d(f){f&&g(e),j(s),j(b),m&&m.d(f),G=!1,M()}}}const de=()=>{},_e=()=>{};function ge(a,e,n){let{$$slots:t={},$$scope:s}=e,i,l="";le.subscribe(r=>{console.log(r),n(1,l=r===0?"-translate-y-16":"translate-y-0")});function o(){n(0,i=window.innerHeight)}return a.$$set=r=>{"$$scope"in r&&n(4,s=r.$$scope)},[i,l,t,o,s]}class ve extends F{constructor(e){super(),J(this,e,ge,me,K,{})}}export{ve as component};
