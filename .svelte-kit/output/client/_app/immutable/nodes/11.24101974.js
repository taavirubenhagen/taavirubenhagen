import{S as B,i as F,s as G,l as w,c as H,n as S,o as D,a as N,h as o,r as J,g,m as P,t as R,b as U,d as z,x as K,j as b,e as p,k,f as $,p as E,w as c,y}from"../chunks/index.a46aface.js";/* empty css                       */import{L as O}from"../chunks/LargeHeading.3154333b.js";import"../chunks/paths.810aefbb.js";import{S as Q}from"../chunks/Section.c45f2ef5.js";function W(i){let n,s,l,t,a,f,u;return{c(){n=p(i[0]),s=p(":"),l=p(i[1]),t=p(":"),a=p(i[2]),f=p(":"),u=p(i[3])},l(e){n=$(e,i[0]),s=$(e,":"),l=$(e,i[1]),t=$(e,":"),a=$(e,i[2]),f=$(e,":"),u=$(e,i[3])},m(e,r){g(e,n,r),g(e,s,r),g(e,l,r),g(e,t,r),g(e,a,r),g(e,f,r),g(e,u,r)},p(e,r){r&1&&y(n,e[0]),r&2&&y(l,e[1]),r&4&&y(a,e[2]),r&8&&y(u,e[3])},d(e){e&&o(n),e&&o(s),e&&o(l),e&&o(t),e&&o(a),e&&o(f),e&&o(u)}}}function X(i){let n,s,l,t,a,f,u,e,r,I,m,V,M,v,C,T;return s=new O({props:{$$slots:{default:[W]},$$scope:{ctx:i}}}),{c(){n=w("div"),H(s.$$.fragment),l=b(),t=w("div"),a=w("div"),f=p("Tage"),u=b(),e=w("div"),r=p("Stunden"),I=b(),m=w("div"),V=p("Minuten"),M=b(),v=w("div"),C=p("Sekunden"),this.h()},l(d){n=S(d,"DIV",{class:!0});var h=D(n);N(s.$$.fragment,h),l=k(h),t=S(h,"DIV",{class:!0});var _=D(t);a=S(_,"DIV",{class:!0});var L=D(a);f=$(L,"Tage"),L.forEach(o),u=k(_),e=S(_,"DIV",{class:!0});var j=D(e);r=$(j,"Stunden"),j.forEach(o),I=k(_),m=S(_,"DIV",{class:!0});var q=D(m);V=$(q,"Minuten"),q.forEach(o),M=k(_),v=S(_,"DIV",{class:!0});var A=D(v);C=$(A,"Sekunden"),A.forEach(o),_.forEach(o),h.forEach(o),this.h()},h(){E(a,"class","center_row"),E(e,"class","center_row"),E(m,"class","center_row"),E(v,"class","center_row"),E(t,"class","w-full grid grid-cols-4 text-white"),E(n,"class","flex flex-col gap-2")},m(d,h){g(d,n,h),P(s,n,null),c(n,l),c(n,t),c(t,a),c(a,f),c(t,u),c(t,e),c(e,r),c(t,I),c(t,m),c(m,V),c(t,M),c(t,v),c(v,C),T=!0},p(d,h){const _={};h&271&&(_.$$scope={dirty:h,ctx:d}),s.$set(_)},i(d){T||(R(s.$$.fragment,d),T=!0)},o(d){U(s.$$.fragment,d),T=!1},d(d){d&&o(n),z(s)}}}function Y(i){let n,s,l;return s=new Q({props:{className:"bg-green-900 center_col text-white",$$slots:{default:[X]},$$scope:{ctx:i}}}),{c(){n=w("div"),H(s.$$.fragment),this.h()},l(t){n=S(t,"DIV",{style:!0});var a=D(n);N(s.$$.fragment,a),a.forEach(o),this.h()},h(){J(n,"font-family",'"Roboto Serif"')},m(t,a){g(t,n,a),P(s,n,null),l=!0},p(t,[a]){const f={};a&271&&(f.$$scope={dirty:a,ctx:t}),s.$set(f)},i(t){l||(R(s.$$.fragment,t),l=!0)},o(t){U(s.$$.fragment,t),l=!1},d(t){t&&o(n),z(s)}}}function Z(i,n,s){let l,t,a,f,u,e,r;function I(){function m(V,M){const v=Math.floor(a%V/M);return v/10<1?"0"+v.toString():v}l=new Date,t=new Date("04/01/2024 12:00 AM"),a=t.getTime()-l.getTime(),s(0,f=m(31556952e3,864e5)),s(1,u=m(864e5,36e5)),s(2,e=m(36e5,6e4)),s(3,r=m(6e4,1e3))}return setInterval(I,1e3),K(I),[f,u,e,r]}class ae extends B{constructor(n){super(),F(this,n,Z,Y,G,{})}}export{ae as component};
