import{S as U,i as W,s as X,c as D,a as S,m as N,t as g,b as $,d as V,l as C,j as B,n as E,o as z,k as H,h as p,p as _,g as q,w,D as le,E as se,z as Z,A as y,B as x,C as ee,G as ae,v as ie,H as oe,F as re,I as fe,e as P,f as Y,q as ue}from"../chunks/index.a46aface.js";import"../chunks/paths.810aefbb.js";import{R as ce,I as me,g as de}from"../chunks/RawButton.88861599.js";/* empty css                       */import{S as _e,a as ge}from"../chunks/SmallHeading.646bf36e.js";function pe(s){let e;const n=s[4].default,t=Z(n,s,s[5],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,o){t&&t.m(l,o),e=!0},p(l,o){t&&t.p&&(!e||o&32)&&y(t,n,l,l[5],e?ee(n,l[5],o,null):x(l[5]),null)},i(l){e||(g(t,l),e=!0)},o(l){$(t,l),e=!1},d(l){t&&t.d(l)}}}function Q(s){let e,n;return e=new me({props:{inverted:s[1],name:"open-new-window"}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){N(e,t,l),n=!0},p(t,l){const o={};l&2&&(o.inverted=t[1]),e.$set(o)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function $e(s){let e,n,t,l,o;n=new _e({props:{$$slots:{default:[pe]},$$scope:{ctx:s}}});let a=s[2]&&Q(s);return{c(){e=C("div"),D(n.$$.fragment),t=B(),a&&a.c(),this.h()},l(f){e=E(f,"DIV",{class:!0});var c=z(e);S(n.$$.fragment,c),t=H(c),a&&a.l(c),c.forEach(p),this.h()},h(){_(e,"class",l="inline gap-2 "+(s[0]?"":"underline underline-offset-4"))},m(f,c){q(f,e,c),N(n,e,null),w(e,t),a&&a.m(e,null),o=!0},p(f,c){const u={};c&32&&(u.$$scope={dirty:c,ctx:f}),n.$set(u),f[2]?a?(a.p(f,c),c&4&&g(a,1)):(a=Q(f),a.c(),g(a,1),a.m(e,null)):a&&(le(),$(a,1,1,()=>{a=null}),se()),(!o||c&1&&l!==(l="inline gap-2 "+(f[0]?"":"underline underline-offset-4")))&&_(e,"class",l)},i(f){o||(g(n.$$.fragment,f),g(a),o=!0)},o(f){$(n.$$.fragment,f),$(a),o=!1},d(f){f&&p(e),V(n),a&&a.d()}}}function he(s){let e,n;return e=new ce({props:{onClick:s[3],$$slots:{default:[$e]},$$scope:{ctx:s}}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){N(e,t,l),n=!0},p(t,[l]){const o={};l&8&&(o.onClick=t[3]),l&39&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function be(s,e,n){let{$$slots:t={},$$scope:l}=e,{invisible:o=!1}=e,{inverted:a=!1}=e,{openInNew:f=!1}=e,{onClick:c}=e;return s.$$set=u=>{"invisible"in u&&n(0,o=u.invisible),"inverted"in u&&n(1,a=u.inverted),"openInNew"in u&&n(2,f=u.openInNew),"onClick"in u&&n(3,c=u.onClick),"$$scope"in u&&n(5,l=u.$$scope)},[o,a,f,c,t,l]}class T extends U{constructor(e){super(),W(this,e,be,he,X,{invisible:0,inverted:1,openInNew:2,onClick:3})}}const{window:te}=fe;function ve(s,e,n){const t=s.slice();return t[8]=e[n],t}function we(s){let e;return{c(){e=P("menu")},l(n){e=Y(n,"menu")},m(n,t){q(n,e,t)},d(n){n&&p(e)}}}function ke(s){let e;return{c(){e=P("support me")},l(n){e=Y(n,"support me")},m(n,t){q(n,e,t)},d(n){n&&p(e)}}}function Ie(s){let e;return{c(){e=P(s[8])},l(n){e=Y(n,s[8])},m(n,t){q(n,e,t)},p:ue,d(n){n&&p(e)}}}function Ce(s){let e,n;return e=new ge({props:{$$slots:{default:[Ie]},$$scope:{ctx:s}}}),{c(){D(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,l){N(e,t,l),n=!0},p(t,l){const o={};l&128&&(o.$$scope={dirty:l,ctx:t}),e.$set(o)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){$(e.$$.fragment,t),n=!1},d(t){V(e,t)}}}function Ee(s){let e,n,t,l,o,a,f,c,u,h,b,G,I,A,L,k,M,J;ae(s[4]),l=new T({props:{invisible:!0,onClick:s[5],$$slots:{default:[we]},$$scope:{ctx:s}}}),h=new T({props:{invisible:!0,onClick:s[6],$$slots:{default:[ke]},$$scope:{ctx:s}}});let ne=["home","services","shop","presenter","design","about","contact"],v=[];for(let i=0;i<7;i+=1)v[i]=Ce(ve(s,ne,i));const R=s[3].default,d=Z(R,s,s[7],null);return{c(){e=C("main"),n=C("div"),t=C("div"),D(l.$$.fragment),o=B(),a=C("img"),c=B(),u=C("div"),D(h.$$.fragment),G=B(),I=C("div");for(let i=0;i<7;i+=1)v[i].c();L=B(),d&&d.c(),this.h()},l(i){e=E(i,"MAIN",{class:!0});var r=z(e);n=E(r,"DIV",{class:!0});var m=z(n);t=E(m,"DIV",{class:!0});var j=z(t);S(l.$$.fragment,j),j.forEach(p),o=H(m),a=E(m,"IMG",{src:!0,alt:!0,class:!0}),c=H(m),u=E(m,"DIV",{class:!0});var K=z(u);S(h.$$.fragment,K),K.forEach(p),m.forEach(p),G=H(r),I=E(r,"DIV",{class:!0});var O=z(I);for(let F=0;F<7;F+=1)v[F].l(O);O.forEach(p),L=H(r),d&&d.l(r),r.forEach(p),this.h()},h(){_(t,"class","w-24"),ie(a.src,f="/images/logos/t-r_logo.svg")||_(a,"src",f),_(a,"alt","Logo"),_(a,"class","h-[3.75rem]"),_(u,"class","w-24 flex justify-end"),_(n,"class",b="transition duration-medium fixed z-40 "+s[1]+" bg-background border-b border-primary w-full h-16 px-8 flex justify-between items-center"),_(I,"class",A="transition duration-long fixed z-30 "+(s[2]?"-translate-x-0":"-translate-x-full")+" w-full h-full background p-8 pt-24 flex flex-col gap-1"),_(e,"class","lowercase")},m(i,r){q(i,e,r),w(e,n),w(n,t),N(l,t,null),w(n,o),w(n,a),w(n,c),w(n,u),N(h,u,null),w(e,G),w(e,I);for(let m=0;m<7;m+=1)v[m]&&v[m].m(I,null);w(e,L),d&&d.m(e,null),k=!0,M||(J=oe(te,"resize",s[4]),M=!0)},p(i,[r]){const m={};r&4&&(m.onClick=i[5]),r&128&&(m.$$scope={dirty:r,ctx:i}),l.$set(m);const j={};r&128&&(j.$$scope={dirty:r,ctx:i}),h.$set(j),(!k||r&2&&b!==(b="transition duration-medium fixed z-40 "+i[1]+" bg-background border-b border-primary w-full h-16 px-8 flex justify-between items-center"))&&_(n,"class",b),(!k||r&4&&A!==(A="transition duration-long fixed z-30 "+(i[2]?"-translate-x-0":"-translate-x-full")+" w-full h-full background p-8 pt-24 flex flex-col gap-1"))&&_(I,"class",A),d&&d.p&&(!k||r&128)&&y(d,R,i,i[7],k?ee(R,i[7],r,null):x(i[7]),null)},i(i){if(!k){g(l.$$.fragment,i),g(h.$$.fragment,i);for(let r=0;r<7;r+=1)g(v[r]);g(d,i),k=!0}},o(i){$(l.$$.fragment,i),$(h.$$.fragment,i),v=v.filter(Boolean);for(let r=0;r<7;r+=1)$(v[r]);$(d,i),k=!1},d(i){i&&p(e),V(l),V(h),re(v,i),d&&d.d(i),M=!1,J()}}}function ze(s,e,n){let{$$slots:t={},$$scope:l}=e,o,a="",f=!1;de.subscribe(b=>{console.log(b),n(1,a=b===0?"-translate-y-16":"translate-y-0")});function c(){n(0,o=te.innerHeight)}const u=()=>n(2,f=!f),h=()=>window.location.href="https://buymeacoffee.com/taavirubenhagen";return s.$$set=b=>{"$$scope"in b&&n(7,l=b.$$scope)},[o,a,f,t,c,u,h,l]}class Be extends U{constructor(e){super(),W(this,e,ze,Ee,X,{})}}export{Be as component};
