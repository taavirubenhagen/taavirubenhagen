import{S as N,i as P,s as V,c as W,e as v,a as T,b as k,d as u,f as w,g as I,u as x,h as G,j as J,t as z,k as B,p as H,w as Y,v as L,y as j,x as U,n as b,z as X,q as O,r as ee,A as F,G as te,J as oe,o as K,l as Q,m as R}from"../chunks/index.fc22d793.js";import"../chunks/paths.accc4cb4.js";/* empty css                       */import{I as se}from"../chunks/icon.d820f787.js";function le(a){let e,o;const l=a[1].default,t=W(l,a,a[0],null);return{c(){e=v("t"),t&&t.c(),this.h()},l(s){e=T(s,"T",{class:!0});var i=k(e);t&&t.l(i),i.forEach(u),this.h()},h(){w(e,"class","text-lg md:text-lg font-bold")},m(s,i){I(s,e,i),t&&t.m(e,null),o=!0},p(s,[i]){t&&t.p&&(!o||i&1)&&x(t,l,s,s[0],o?J(l,s[0],i,null):G(s[0]),null)},i(s){o||(z(t,s),o=!0)},o(s){B(t,s),o=!1},d(s){s&&u(e),t&&t.d(s)}}}function ne(a,e,o){let{$$slots:l={},$$scope:t}=e;return a.$$set=s=>{"$$scope"in s&&o(0,t=s.$$scope)},[t,l]}class ae extends N{constructor(e){super(),P(this,e,ne,le,V,{})}}const{setTimeout:M}=oe;function re(a,e,o){const l=a.slice();return l[12]=e[o],l}function ie(a){let e,o,l,t;return o=new se({props:{textClass:"text-2xl",name:a[12][0]}}),{c(){e=v("a"),L(o.$$.fragment),l=Y(),this.h()},l(s){e=T(s,"A",{class:!0,href:!0});var i=k(e);U(o.$$.fragment,i),l=j(i),i.forEach(u),this.h()},h(){w(e,"class","transition-all duration-200 pointer-events-auto opacity-100 hover:opacity-75"),w(e,"href",a[12][1])},m(s,i){I(s,e,i),X(o,e,null),b(e,l),t=!0},p:K,i(s){t||(z(o.$$.fragment,s),t=!0)},o(s){B(o.$$.fragment,s),t=!1},d(s){s&&u(e),F(o)}}}function ce(a){let e;return{c(){e=Q("Back to top")},l(o){e=R(o,"Back to top")},m(o,l){I(o,e,l)},d(o){o&&u(e)}}}function ue(a){let e,o;return{c(){e=v("s1"),o=Q("This page is still under development.")},l(l){e=T(l,"S1",{});var t=k(e);o=R(t,"This page is still under development."),t.forEach(u)},m(l,t){I(l,e,t),b(e,o)},p:K,d(l){l&&u(e)}}}function fe(a){let e=!1,o=()=>{e=!1},l,t,s,i,f,d,c,$,y,g,m,E;H(a[5]),H(a[6]);let Z=[["home","/me/home"],["chat-bubble-empty","/contact"],["arrow-separate","/presenter"],["voice","/tts"],["color-filter","/design"],["github","/me/home"],["instagram","/me/home"]],_=[];for(let n=0;n<7;n+=1)_[n]=ie(re(a,Z,n));c=new ae({props:{$$slots:{default:[ce]},$$scope:{ctx:a}}});const C=a[4].default,S=W(C,a,a[7],null),p=S||ue();return{c(){t=v("main"),s=v("div");for(let n=0;n<7;n+=1)_[n].c();i=Y(),f=v("div"),d=v("button"),L(c.$$.fragment),y=Y(),p&&p.c(),this.h()},l(n){t=T(n,"MAIN",{class:!0});var r=k(t);s=T(r,"DIV",{class:!0});var h=k(s);for(let A=0;A<7;A+=1)_[A].l(h);h.forEach(u),i=j(r),f=T(r,"DIV",{class:!0});var q=k(f);d=T(q,"BUTTON",{class:!0});var D=k(d);U(c.$$.fragment,D),D.forEach(u),q.forEach(u),y=j(r),p&&p.l(r),r.forEach(u),this.h()},h(){w(s,"class","fixed top-0 z-30 pointer-events-none shadow bg-secondary w-screen h-16 md:px-[25%] pt-2 flex justify-around items-center"),w(d,"class","transition-all duration-200 hover:scale-[102%] shadow-md rounded-lg h-10 bg-background px-4"),w(f,"class",$="transition-all duration-400 fixed z-40 "+a[3]+" w-screen center_row"),w(t,"class","max-w-screen min-h-screen background")},m(n,r){I(n,t,r),b(t,s);for(let h=0;h<7;h+=1)_[h]&&_[h].m(s,null);b(t,i),b(t,f),b(f,d),X(c,d,null),b(t,y),p&&p.m(t,null),g=!0,m||(E=[O(window,"resize",a[5]),O(window,"scroll",()=>{e=!0,clearTimeout(l),l=M(o,100),a[6]()}),O(d,"click",de)],m=!0)},p(n,[r]){r&1&&!e&&(e=!0,clearTimeout(l),scrollTo(window.pageXOffset,n[0]),l=M(o,100));const h={};r&128&&(h.$$scope={dirty:r,ctx:n}),c.$set(h),(!g||r&8&&$!==($="transition-all duration-400 fixed z-40 "+n[3]+" w-screen center_row"))&&w(f,"class",$),S&&S.p&&(!g||r&128)&&x(S,C,n,n[7],g?J(C,n[7],r,null):G(n[7]),null)},i(n){if(!g){for(let r=0;r<7;r+=1)z(_[r]);z(c.$$.fragment,n),z(p,n),g=!0}},o(n){_=_.filter(Boolean);for(let r=0;r<7;r+=1)B(_[r]);B(c.$$.fragment,n),B(p,n),g=!1},d(n){n&&u(t),ee(_,n),F(c),p&&p.d(n),m=!1,te(E)}}}const de=()=>{};function me(a,e,o){let l,{$$slots:t={},$$scope:s}=e,i,f;function d(m){const E=$-m;return $=m,m===0||E<=-8?"-bottom-10":Math.abs(E)<=16?l:(setTimeout(()=>o(3,l=d(c)),8e3),"bottom-8")}let c=0,$=0;function y(){o(1,i=window.innerHeight),o(2,f=window.innerWidth)}function g(){o(0,c=window.pageYOffset)}return a.$$set=m=>{"$$scope"in m&&o(7,s=m.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&o(3,l=d(c))},[c,i,f,l,t,y,g,s]}class we extends N{constructor(e){super(),P(this,e,me,fe,V,{})}}export{we as component};
