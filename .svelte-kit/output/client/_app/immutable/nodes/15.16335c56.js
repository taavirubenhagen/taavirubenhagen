import{S as te,i as ne,s as se,c as z,a as L,m as U,t as C,b as V,d as F,l as w,j as B,n as I,o as b,k as P,h as d,p as k,g as R,w as f,B as le,C as ae,x as re,y as ie,z as oe,A as fe,r as ce,L as ue,e as $,f as h,I as H}from"../chunks/index.f795e419.js";/* empty css                       */import{S as de}from"../chunks/SmallParagraph.e9d24a77.js";import{R as me,I as _e}from"../chunks/RawButton.d7bff77b.js";import"../chunks/paths.330c9fa6.js";import{S as $e}from"../chunks/Section.ff569156.js";function he(r){let e;const t=r[4].default,n=re(t,r,r[5],null);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,l){n&&n.m(s,l),e=!0},p(s,l){n&&n.p&&(!e||l&32)&&ie(n,t,s,s[5],e?fe(t,s[5],l,null):oe(s[5]),null)},i(s){e||(C(n,s),e=!0)},o(s){V(n,s),e=!1},d(s){n&&n.d(s)}}}function ee(r){let e,t;return e=new _e({props:{inverted:r[1],name:"open-new-window"}}),{c(){z(e.$$.fragment)},l(n){L(e.$$.fragment,n)},m(n,s){U(e,n,s),t=!0},p(n,s){const l={};s&2&&(l.inverted=n[1]),e.$set(l)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){V(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function ve(r){let e,t,n,s,l;t=new de({props:{$$slots:{default:[he]},$$scope:{ctx:r}}});let a=r[2]&&ee(r);return{c(){e=w("div"),z(t.$$.fragment),n=B(),a&&a.c(),this.h()},l(i){e=I(i,"DIV",{class:!0});var o=b(e);L(t.$$.fragment,o),n=P(o),a&&a.l(o),o.forEach(d),this.h()},h(){k(e,"class",s="inline gap-2 "+(r[0]?"":"underline underline-offset-4"))},m(i,o){R(i,e,o),U(t,e,null),f(e,n),a&&a.m(e,null),l=!0},p(i,o){const c={};o&32&&(c.$$scope={dirty:o,ctx:i}),t.$set(c),i[2]?a?(a.p(i,o),o&4&&C(a,1)):(a=ee(i),a.c(),C(a,1),a.m(e,null)):a&&(le(),V(a,1,1,()=>{a=null}),ae()),(!l||o&1&&s!==(s="inline gap-2 "+(i[0]?"":"underline underline-offset-4")))&&k(e,"class",s)},i(i){l||(C(t.$$.fragment,i),C(a),l=!0)},o(i){V(t.$$.fragment,i),V(a),l=!1},d(i){i&&d(e),F(t),a&&a.d()}}}function ge(r){let e,t;return e=new me({props:{onClick:r[3],$$slots:{default:[ve]},$$scope:{ctx:r}}}),{c(){z(e.$$.fragment)},l(n){L(e.$$.fragment,n)},m(n,s){U(e,n,s),t=!0},p(n,[s]){const l={};s&8&&(l.onClick=n[3]),s&39&&(l.$$scope={dirty:s,ctx:n}),e.$set(l)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){V(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function pe(r,e,t){let{$$slots:n={},$$scope:s}=e,{invisible:l=!1}=e,{inverted:a=!1}=e,{openInNew:i=!1}=e,{onClick:o}=e;return r.$$set=c=>{"invisible"in c&&t(0,l=c.invisible),"inverted"in c&&t(1,a=c.inverted),"openInNew"in c&&t(2,i=c.openInNew),"onClick"in c&&t(3,o=c.onClick),"$$scope"in c&&t(5,s=c.$$scope)},[l,a,i,o,n,s]}class we extends te{constructor(e){super(),ne(this,e,pe,ge,se,{invisible:0,inverted:1,openInNew:2,onClick:3})}}function Ie(r){let e;return{c(){e=$("Admin")},l(t){e=h(t,"Admin")},m(t,n){R(t,e,n)},d(t){t&&d(e)}}}function be(r){let e,t,n,s,l,a,i,o,c,M,_,v,j,q,p,J,K,N,O,Q,A,W,G,T,D,S;return D=new we({props:{invisible:!0,onClick:r[4],$$slots:{default:[Ie]},$$scope:{ctx:r}}}),{c(){e=w("div"),t=w("t"),n=$(r[0]),s=$(":"),l=$(r[1]),a=$(":"),i=$(r[2]),o=$(":"),c=$(r[3]),M=B(),_=w("div"),v=w("div"),j=$("Tage"),q=B(),p=w("div"),J=$("Stunden"),K=B(),N=w("div"),O=$("Minuten"),Q=B(),A=w("div"),W=$("Sekunden"),G=B(),T=w("div"),z(D.$$.fragment),this.h()},l(u){e=I(u,"DIV",{class:!0});var m=b(e);t=I(m,"T",{class:!0});var g=b(t);n=h(g,r[0]),s=h(g,":"),l=h(g,r[1]),a=h(g,":"),i=h(g,r[2]),o=h(g,":"),c=h(g,r[3]),g.forEach(d),M=P(m),_=I(m,"DIV",{class:!0});var E=b(_);v=I(E,"DIV",{class:!0});var X=b(v);j=h(X,"Tage"),X.forEach(d),q=P(E),p=I(E,"DIV",{class:!0});var Y=b(p);J=h(Y,"Stunden"),Y.forEach(d),K=P(E),N=I(E,"DIV",{class:!0});var Z=b(N);O=h(Z,"Minuten"),Z.forEach(d),Q=P(E),A=I(E,"DIV",{class:!0});var y=b(A);W=h(y,"Sekunden"),y.forEach(d),E.forEach(d),m.forEach(d),G=P(u),T=I(u,"DIV",{class:!0});var x=b(T);L(D.$$.fragment,x),x.forEach(d),this.h()},h(){k(t,"class","text-6xl md:text-7xl font-bold tracking-wider"),k(v,"class","center_row"),k(p,"class","center_row"),k(N,"class","center_row"),k(A,"class","center_row"),k(_,"class","w-full grid grid-cols-4 text-xs text-white"),k(e,"class","flex flex-col gap-2"),k(T,"class","absolute bottom-8 w-full center_row")},m(u,m){R(u,e,m),f(e,t),f(t,n),f(t,s),f(t,l),f(t,a),f(t,i),f(t,o),f(t,c),f(e,M),f(e,_),f(_,v),f(v,j),f(_,q),f(_,p),f(p,J),f(_,K),f(_,N),f(N,O),f(_,Q),f(_,A),f(A,W),R(u,G,m),R(u,T,m),U(D,T,null),S=!0},p(u,m){(!S||m&1)&&H(n,u[0]),(!S||m&2)&&H(l,u[1]),(!S||m&4)&&H(i,u[2]),(!S||m&8)&&H(c,u[3]);const g={};m&512&&(g.$$scope={dirty:m,ctx:u}),D.$set(g)},i(u){S||(C(D.$$.fragment,u),S=!0)},o(u){V(D.$$.fragment,u),S=!1},d(u){u&&d(e),u&&d(G),u&&d(T),F(D)}}}function ke(r){let e,t,n;return t=new $e({props:{className:"bg-green-900 center_col text-white",$$slots:{default:[be]},$$scope:{ctx:r}}}),{c(){e=w("div"),z(t.$$.fragment),this.h()},l(s){e=I(s,"DIV",{style:!0});var l=b(e);L(t.$$.fragment,l),l.forEach(d),this.h()},h(){ce(e,"font-family",'"Caveat Brush"')},m(s,l){R(s,e,l),U(t,e,null),n=!0},p(s,[l]){const a={};l&527&&(a.$$scope={dirty:l,ctx:s}),t.$set(a)},i(s){n||(C(t.$$.fragment,s),n=!0)},o(s){V(t.$$.fragment,s),n=!1},d(s){s&&d(e),F(t)}}}function Ce(r,e,t){let n,s,l,a,i,o,c;function M(){function v(j,q){const p=Math.floor(l%j/q);return p/10<1?"0"+p.toString():p}n=new Date,s=new Date("04/15/2024 11:20 AM"),l=s.getTime()-n.getTime(),t(0,a=v(31556952e3,864e5)),t(1,i=v(864e5,36e5)),t(2,o=v(36e5,6e4)),t(3,c=v(6e4,1e3))}return setInterval(M,1e3),ue(M),[a,i,o,c,()=>window.location.href="/drafts/hoffmanns-schuppen/admin"]}class Ne extends te{constructor(e){super(),ne(this,e,Ce,ke,se,{})}}export{Ne as component};