import{S as C,i as E,s as H,j as G,c as g,a as b,m as v,v as J,t as m,b as _,d as k,C as R,l as d,n as D,o as $,q as S,p as j,h as f,E as V,r as p,H as I,g as h,G as W,w as A,A as F,F as K}from"../chunks/index.80fa91c9.js";import"../chunks/ua-parser.953621d9.js";import{I as M}from"../chunks/icon.ca3d3691.js";import{R as N}from"../chunks/RawButton.db9fec15.js";import"../chunks/paths.26efd599.js";import{S as P}from"../chunks/Section.1566d7a2.js";const{window:w}=R;function q(l,e,a){const i=l.slice();return i[4]=e[a],i}function L(l){let e,a,i,n;return a=new M({props:{name:l[4][0]}}),{c(){e=d("div"),g(a.$$.fragment),i=D(),this.h()},l(t){e=$(t,"DIV",{class:!0});var c=j(e);b(a.$$.fragment,c),c.forEach(f),i=S(t),this.h()},h(){p(e,"class","backdrop-blur-sm rounded-2xl bg-white bg-opacity-25 p-4 pb-0 aspect-square")},m(t,c){h(t,e,c),v(a,e,null),h(t,i,c),n=!0},p:K,i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){_(a.$$.fragment,t),n=!1},d(t){t&&f(e),k(a),t&&f(i)}}}function y(l){let e,a;function i(){return l[3](l[4])}return e=new N({props:{onClick:i,$$slots:{default:[L]},$$scope:{ctx:l}}}),{c(){g(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,t){v(e,n,t),a=!0},p(n,t){l=n;const c={};t&128&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(n){a||(m(e.$$.fragment,n),a=!0)},o(n){_(e.$$.fragment,n),a=!1},d(n){k(e,n)}}}function O(l){let e,a,i,n,t,c=[["open-new-window","https://thezukunft.de/"],["home","/"],["instagram","https://www.instagram.com/taavirubenhagen"]],r=[];for(let s=0;s<3;s+=1)r[s]=y(q(l,c,s));const B=s=>_(r[s],1,1,()=>{r[s]=null});return{c(){e=d("img"),i=D(),n=d("div");for(let s=0;s<3;s+=1)r[s].c();this.h()},l(s){e=$(s,"IMG",{src:!0,alt:!0,class:!0}),i=S(s),n=$(s,"DIV",{class:!0,style:!0});var u=j(n);for(let o=0;o<3;o+=1)r[o].l(u);u.forEach(f),this.h()},h(){V(e.src,a="/politics/jugendparlament/wahlplakat_hochformat.png")||p(e,"src",a),p(e,"alt","Jung, dynamisch, zielstrebig. Dein Kandidat für das Braunschweiger Jugendparlament."),p(e,"class","max-h-screen"),p(n,"class","absolute bottom-20 flex justify-between text-5xl"),I(n,"width",(l[0]>l[1]?l[1]/(16/9):l[0])-64+"px")},m(s,u){h(s,e,u),h(s,i,u),h(s,n,u);for(let o=0;o<3;o+=1)r[o]&&r[o].m(n,null);t=!0},p(s,u){if(u&0){c=[["open-new-window","https://thezukunft.de/"],["home","/"],["instagram","https://www.instagram.com/taavirubenhagen"]];let o;for(o=0;o<3;o+=1){const z=q(s,c,o);r[o]?(r[o].p(z,u),m(r[o],1)):(r[o]=y(z),r[o].c(),m(r[o],1),r[o].m(n,null))}for(W(),o=3;o<3;o+=1)B(o);A()}(!t||u&3)&&I(n,"width",(s[0]>s[1]?s[1]/(16/9):s[0])-64+"px")},i(s){if(!t){for(let u=0;u<3;u+=1)m(r[u]);t=!0}},o(s){r=r.filter(Boolean);for(let u=0;u<3;u+=1)_(r[u]);t=!1},d(s){s&&f(e),s&&f(i),s&&f(n),F(r,s)}}}function Q(l){let e,a,i,n;return G(l[2]),e=new P({props:{className:"bg-black font-[Dongle] center_row",$$slots:{default:[O]},$$scope:{ctx:l}}}),{c(){g(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,c){v(e,t,c),a=!0,i||(n=J(w,"resize",l[2]),i=!0)},p(t,[c]){const r={};c&131&&(r.$$scope={dirty:c,ctx:t}),e.$set(r)},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){k(e,t),i=!1,n()}}}function T(l,e,a){let i,n;function t(){a(0,i=w.innerWidth),a(1,n=w.innerHeight)}return[i,n,t,r=>window.location.href=r[1]]}class te extends C{constructor(e){super(),E(this,e,T,Q,H,{})}}export{te as component};
