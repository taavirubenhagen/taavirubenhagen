import{S as b,i as h,s as g,c as y,e as P,a as k,b as C,d as m,f as c,g as p,u as B,h as T,j as v,t as d,k as _,x as S,y as E,z as j,v as q,J as w,A as z}from"./index.7cc8941a.js";/* empty css               */function A(n){let t,r;const l=n[1].default,e=y(l,n,n[0],null);return{c(){t=P("t"),e&&e.c(),this.h()},l(a){t=k(a,"T",{class:!0});var s=C(t);e&&e.l(s),s.forEach(m),this.h()},h(){c(t,"class","text-xl md:text-xl")},m(a,s){p(a,t,s),e&&e.m(t,null),r=!0},p(a,[s]){e&&e.p&&(!r||s&1)&&B(e,l,a,a[0],r?v(l,a[0],s,null):T(a[0]),null)},i(a){r||(d(e,a),r=!0)},o(a){_(e,a),r=!1},d(a){a&&m(t),e&&e.d(a)}}}function J(n,t,r){let{$$slots:l={},$$scope:e}=t;return n.$$set=a=>{"$$scope"in a&&r(0,e=a.$$scope)},[e,l]}class N extends b{constructor(t){super(),h(this,t,J,A,g,{})}}function O(n){let t;const r=n[5].default,l=y(r,n,n[6],null);return{c(){l&&l.c()},l(e){l&&l.l(e)},m(e,a){l&&l.m(e,a),t=!0},p(e,a){l&&l.p&&(!t||a&64)&&B(l,r,e,e[6],t?v(r,e[6],a,null):T(e[6]),null)},i(e){t||(d(l,e),t=!0)},o(e){_(l,e),t=!1},d(e){l&&l.d(e)}}}function U(n){let t,r,l,e,a,s;return r=new N({props:{$$slots:{default:[O]},$$scope:{ctx:n}}}),{c(){t=P("button"),S(r.$$.fragment),this.h()},l(o){t=k(o,"BUTTON",{class:!0});var u=C(t);E(r.$$.fragment,u),u.forEach(m),this.h()},h(){c(t,"class",l=n[0]+" transition-all duration-200 relative hover:scale-[101%] rounded-full "+(n[2]?"":'border-2 ${( onPrimary ? "border-onPrimary" : "border-onBackground" )}')+" "+(n[3]?"h-16":"h-12")+" "+(n[2]?n[1]?"bg-onPrimary text-onBackground":"bg-primary text-onPrimary":n[1]?"text-onPrimary":"text-onBackground")+" "+(n[3]?"px-16":"px-8"))},m(o,u){p(o,t,u),j(r,t,null),e=!0,a||(s=q(t,"click",function(){w(n[4])&&n[4].apply(this,arguments)}),a=!0)},p(o,[u]){n=o;const f={};u&64&&(f.$$scope={dirty:u,ctx:n}),r.$set(f),(!e||u&15&&l!==(l=n[0]+" transition-all duration-200 relative hover:scale-[101%] rounded-full "+(n[2]?"":'border-2 ${( onPrimary ? "border-onPrimary" : "border-onBackground" )}')+" "+(n[3]?"h-16":"h-12")+" "+(n[2]?n[1]?"bg-onPrimary text-onBackground":"bg-primary text-onPrimary":n[1]?"text-onPrimary":"text-onBackground")+" "+(n[3]?"px-16":"px-8")))&&c(t,"class",l)},i(o){e||(d(r.$$.fragment,o),e=!0)},o(o){_(r.$$.fragment,o),e=!1},d(o){o&&m(t),z(r),a=!1,s()}}}function D(n,t,r){let{$$slots:l={},$$scope:e}=t,{buttonClass:a=""}=t,{onPrimary:s=!1}=t,{primary:o=!1}=t,{large:u=!1}=t,{onClicked:f=()=>{}}=t;return n.$$set=i=>{"buttonClass"in i&&r(0,a=i.buttonClass),"onPrimary"in i&&r(1,s=i.onPrimary),"primary"in i&&r(2,o=i.primary),"large"in i&&r(3,u=i.large),"onClicked"in i&&r(4,f=i.onClicked),"$$scope"in i&&r(6,e=i.$$scope)},[a,s,o,u,f,l,e]}class H extends b{constructor(t){super(),h(this,t,D,U,g,{buttonClass:0,onPrimary:1,primary:2,large:3,onClicked:4})}}export{H as T};
