import{S as G,i as H,s as J,l as p,c as K,n as g,o as w,a as L,h as f,r as O,g as F,m as Q,t as W,b as X,d as Y,u as Z,e as c,j as x,f as d,k as y,p as E,v as t,w as C}from"../chunks/index.7b7993cb.js";/* empty css                       */import"../chunks/paths.c73a8013.js";import{S as ee}from"../chunks/Section.59ff8ae2.js";function te(r){let s,e,l,n,o,m,$,I,S,V,a,_,k,D,T,j,q,M,A,N,b,P;return{c(){s=p("div"),e=p("t"),l=c(r[0]),n=c(":"),o=c(r[1]),m=c(":"),$=c(r[2]),I=c(":"),S=c(r[3]),V=x(),a=p("div"),_=p("div"),k=c("Tage"),D=x(),T=p("div"),j=c("Stunden"),q=x(),M=p("div"),A=c("Minuten"),N=x(),b=p("div"),P=c("Sekunden"),this.h()},l(u){s=g(u,"DIV",{class:!0});var i=w(s);e=g(i,"T",{class:!0});var h=w(e);l=d(h,r[0]),n=d(h,":"),o=d(h,r[1]),m=d(h,":"),$=d(h,r[2]),I=d(h,":"),S=d(h,r[3]),h.forEach(f),V=y(i),a=g(i,"DIV",{class:!0});var v=w(a);_=g(v,"DIV",{class:!0});var R=w(_);k=d(R,"Tage"),R.forEach(f),D=y(v),T=g(v,"DIV",{class:!0});var U=w(T);j=d(U,"Stunden"),U.forEach(f),q=y(v),M=g(v,"DIV",{class:!0});var z=w(M);A=d(z,"Minuten"),z.forEach(f),N=y(v),b=g(v,"DIV",{class:!0});var B=w(b);P=d(B,"Sekunden"),B.forEach(f),v.forEach(f),i.forEach(f),this.h()},h(){E(e,"class","text-5xl md:text-7xl font-bold tracking-wider"),E(_,"class","center_row"),E(T,"class","center_row"),E(M,"class","center_row"),E(b,"class","center_row"),E(a,"class","w-full grid grid-cols-4 text-sm text-white"),E(s,"class","flex flex-col gap-2")},m(u,i){F(u,s,i),t(s,e),t(e,l),t(e,n),t(e,o),t(e,m),t(e,$),t(e,I),t(e,S),t(s,V),t(s,a),t(a,_),t(_,k),t(a,D),t(a,T),t(T,j),t(a,q),t(a,M),t(M,A),t(a,N),t(a,b),t(b,P)},p(u,i){i&1&&C(l,u[0]),i&2&&C(o,u[1]),i&4&&C($,u[2]),i&8&&C(S,u[3])},d(u){u&&f(s)}}}function se(r){let s,e,l;return e=new ee({props:{className:"bg-green-900 center_col text-white",$$slots:{default:[te]},$$scope:{ctx:r}}}),{c(){s=p("div"),K(e.$$.fragment),this.h()},l(n){s=g(n,"DIV",{style:!0});var o=w(s);L(e.$$.fragment,o),o.forEach(f),this.h()},h(){O(s,"font-family",'"Roboto Serif"')},m(n,o){F(n,s,o),Q(e,s,null),l=!0},p(n,[o]){const m={};o&271&&(m.$$scope={dirty:o,ctx:n}),e.$set(m)},i(n){l||(W(e.$$.fragment,n),l=!0)},o(n){X(e.$$.fragment,n),l=!1},d(n){n&&f(s),Y(e)}}}function ne(r,s,e){let l,n,o,m,$,I,S;function V(){function a(_,k){const D=Math.floor(o%_/k);return D/10<1?"0"+D.toString():D}l=new Date,n=new Date("04/01/2024 12:00 AM"),o=n.getTime()-l.getTime(),e(0,m=a(31556952e3,864e5)),e(1,$=a(864e5,36e5)),e(2,I=a(36e5,6e4)),e(3,S=a(6e4,1e3))}return setInterval(V,1e3),Z(V),[m,$,I,S]}class ie extends G{constructor(s){super(),H(this,s,ne,se,J,{})}}export{ie as component};
