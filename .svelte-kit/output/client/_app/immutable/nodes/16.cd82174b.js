import{S as L,i as Q,s as J,c as T,a as P,m as U,t as h,b as v,d as F,z as ie,l as b,j as D,n as $,o as X,k as E,h as m,p as z,g as p,q as y,A as ue,B as fe,C as ae,D as W,E as Y,v as te,F as ce,e as d,f as w,y as Z,G as me,H as V,P as pe,K as _e,L as be,I as $e,r as G,Q as ge}from"../chunks/index.128d686f.js";import{D as ke}from"../chunks/DeviceDetector.7423ebb0.js";import{p as he}from"../chunks/stores.43745561.js";import{R as de,I as we,b as ve}from"../chunks/RawButton.be12d68b.js";/* empty css                       */import"../chunks/paths.d803d376.js";function ne(a){let e,n;return e=new we({props:{name:"open-new-window",textClass:"relative top-2"}}),{c(){T(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Ce(a){let e,n,t;const s=a[2].default,l=ie(s,a,a[3],null);let r=a[0]&&ne();return{c(){e=b("t"),l&&l.c(),n=D(),r&&r.c(),this.h()},l(f){e=$(f,"T",{class:!0});var o=X(e);l&&l.l(o),n=E(o),r&&r.l(o),o.forEach(m),this.h()},h(){z(e,"class","underline underline-offset-8")},m(f,o){p(f,e,o),l&&l.m(e,null),y(e,n),r&&r.m(e,null),t=!0},p(f,o){l&&l.p&&(!t||o&8)&&ue(l,s,f,f[3],t?ae(s,f[3],o,null):fe(f[3]),null),f[0]?r?o&1&&h(r,1):(r=ne(),r.c(),h(r,1),r.m(e,null)):r&&(W(),v(r,1,1,()=>{r=null}),Y())},i(f){t||(h(l,f),h(r),t=!0)},o(f){v(l,f),v(r),t=!1},d(f){f&&m(e),l&&l.d(f),r&&r.d()}}}function Re(a){let e,n;return e=new de({props:{onClick:a[1],$$slots:{default:[Ce]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p(t,[s]){const l={};s&2&&(l.onClick=t[1]),s&9&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function Ie(a,e,n){let{$$slots:t={},$$scope:s}=e,{openInNew:l=!1}=e,{onClick:r}=e;return a.$$set=f=>{"openInNew"in f&&n(0,l=f.openInNew),"onClick"in f&&n(1,r=f.onClick),"$$scope"in f&&n(3,s=f.$$scope)},[l,r,t,s]}class K extends L{constructor(e){super(),Q(this,e,Ie,Re,J,{openInNew:0,onClick:1})}}function re(a,e,n){const t=a.slice();return t[3]=e[n],t}function Be(a){let e=oe(a[3][0])+"",n;return{c(){n=d(e)},l(t){n=w(t,e)},m(t,s){p(t,n,s)},p(t,s){s&1&&e!==(e=oe(t[3][0])+"")&&Z(n,e)},d(t){t&&m(n)}}}function le(a){let e,n,t,s,l=a[3][1].toUpperCase()+"",r,f,o;function u(){return a[2](a[3])}return t=new K({props:{onClick:u,$$slots:{default:[Be]},$$scope:{ctx:a}}}),{c(){e=b("br"),n=D(),T(t.$$.fragment),s=d(`\r
    [`),r=d(l),f=d("]")},l(i){e=$(i,"BR",{}),n=E(i),P(t.$$.fragment,i),s=w(i,`\r
    [`),r=w(i,l),f=w(i,"]")},m(i,c){p(i,e,c),p(i,n,c),U(t,i,c),p(i,s,c),p(i,r,c),p(i,f,c),o=!0},p(i,c){a=i;const g={};c&3&&(g.onClick=u),c&65&&(g.$$scope={dirty:c,ctx:a}),t.$set(g),(!o||c&1)&&l!==(l=a[3][1].toUpperCase()+"")&&Z(r,l)},i(i){o||(h(t.$$.fragment,i),o=!0)},o(i){v(t.$$.fragment,i),o=!1},d(i){i&&m(e),i&&m(n),F(t,i),i&&m(s),i&&m(r),i&&m(f)}}}function ye(a){let e,n,t,s,l=a[0],r=[];for(let o=0;o<l.length;o+=1)r[o]=le(re(a,l,o));const f=o=>v(r[o],1,1,()=>{r[o]=null});return{c(){e=b("br"),n=D();for(let o=0;o<r.length;o+=1)r[o].c();t=te()},l(o){e=$(o,"BR",{}),n=E(o);for(let u=0;u<r.length;u+=1)r[u].l(o);t=te()},m(o,u){p(o,e,u),p(o,n,u);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(o,u);p(o,t,u),s=!0},p(o,[u]){if(u&3){l=o[0];let i;for(i=0;i<l.length;i+=1){const c=re(o,l,i);r[i]?(r[i].p(c,u),h(r[i],1)):(r[i]=le(c),r[i].c(),h(r[i],1),r[i].m(t.parentNode,t))}for(W(),i=l.length;i<r.length;i+=1)f(i);Y()}},i(o){if(!s){for(let u=0;u<l.length;u+=1)h(r[u]);s=!0}},o(o){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)v(r[u]);s=!1},d(o){o&&m(e),o&&m(n),ce(r,o),o&&m(t)}}}function oe(a){return a[0].toUpperCase()+a.slice(1)}function Te(a,e,n){let{routes:t}=e,{routeChangingFunction:s}=e;const l=r=>s(r);return a.$$set=r=>{"routes"in r&&n(0,t=r.routes),"routeChangingFunction"in r&&n(1,s=r.routeChangingFunction)},[t,s,l]}class x extends L{constructor(e){super(),Q(this,e,Te,ye,J,{routes:0,routeChangingFunction:1})}}const{window:se}=$e;function Pe(a){let e;return{c(){e=b("input"),this.h()},l(n){e=$(n,"INPUT",{type:!0,class:!0}),this.h()},h(){z(e,"type","text"),e.autofocus=!0,z(e,"class","absolute -z-40")},m(n,t){p(n,e,t),a[9](e),e.focus()},p:G,d(n){n&&m(e),a[9](null)}}}function Ue(a){let e;return{c(){e=d("Taavi Rübenhagen")},l(n){e=w(n,"Taavi Rübenhagen")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function Fe(a){let e,n,t,s,l,r,f,o;return r=new K({props:{onClick:a[12],$$slots:{default:[Ee]},$$scope:{ctx:a}}}),{c(){e=b("br"),n=b("br"),t=d(`\r
            The page was either not found or you will be automatically redirected soon.\r
            `),s=b("br"),l=D(),T(r.$$.fragment),f=d(`\r
            [X]`)},l(u){e=$(u,"BR",{}),n=$(u,"BR",{}),t=w(u,`\r
            The page was either not found or you will be automatically redirected soon.\r
            `),s=$(u,"BR",{}),l=E(u),P(r.$$.fragment,u),f=w(u,`\r
            [X]`)},m(u,i){p(u,e,i),p(u,n,i),p(u,t,i),p(u,s,i),p(u,l,i),U(r,u,i),p(u,f,i),o=!0},p(u,i){const c={};i&4&&(c.onClick=u[12]),i&131072&&(c.$$scope={dirty:i,ctx:u}),r.$set(c)},i(u){o||(h(r.$$.fragment,u),o=!0)},o(u){v(r.$$.fragment,u),o=!1},d(u){u&&m(e),u&&m(n),u&&m(t),u&&m(s),u&&m(l),F(r,u),u&&m(f)}}}function je(a){let e,n,t,s;return t=new x({props:{routes:a[5],routeChangingFunction:a[6]}}),{c(){e=b("br"),n=D(),T(t.$$.fragment)},l(l){e=$(l,"BR",{}),n=E(l),P(t.$$.fragment,l)},m(l,r){p(l,e,r),p(l,n,r),U(t,l,r),s=!0},p:G,i(l){s||(h(t.$$.fragment,l),s=!0)},o(l){v(t.$$.fragment,l),s=!1},d(l){l&&m(e),l&&m(n),F(t,l)}}}function Ne(a){let e,n;return e=new x({props:{routes:a[4],routeChangingFunction:a[6]}}),{c(){T(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,s){U(e,t,s),n=!0},p:G,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){F(e,t)}}}function He(a){let e,n,t,s,l,r,f,o,u,i;return u=new x({props:{routes:a[3],routeChangingFunction:a[6]}}),{c(){e=b("br"),n=b("br"),t=d(`\r
            Imprint:\r
            `),s=b("br"),l=b("br"),r=d(`\r
            Taavi Rübenhagen\r
            `),f=b("br"),o=d(`\r
            Pothof 9d, 38122 Braunschweig, Germany\r
            `),T(u.$$.fragment)},l(c){e=$(c,"BR",{}),n=$(c,"BR",{}),t=w(c,`\r
            Imprint:\r
            `),s=$(c,"BR",{}),l=$(c,"BR",{}),r=w(c,`\r
            Taavi Rübenhagen\r
            `),f=$(c,"BR",{}),o=w(c,`\r
            Pothof 9d, 38122 Braunschweig, Germany\r
            `),P(u.$$.fragment,c)},m(c,g){p(c,e,g),p(c,n,g),p(c,t,g),p(c,s,g),p(c,l,g),p(c,r,g),p(c,f,g),p(c,o,g),U(u,c,g),i=!0},p:G,i(c){i||(h(u.$$.fragment,c),i=!0)},o(c){v(u.$$.fragment,c),i=!1},d(c){c&&m(e),c&&m(n),c&&m(t),c&&m(s),c&&m(l),c&&m(r),c&&m(f),c&&m(o),F(u,c)}}}function De(a){let e,n,t,s,l,r;return s=new K({props:{onClick:a[11],$$slots:{default:[qe]},$$scope:{ctx:a}}}),{c(){e=b("br"),n=b("br"),t=d(`\r
            I'm an 18-year-old self-taught entrepreneur, frontend developer and UI/UX designer. My\r
            `),T(s.$$.fragment),l=d(`\r
            [P] include multiple Android and iOS apps and websites.\r
            I'm also reselling apps and currently starting an affiliate marketing business.`)},l(f){e=$(f,"BR",{}),n=$(f,"BR",{}),t=w(f,`\r
            I'm an 18-year-old self-taught entrepreneur, frontend developer and UI/UX designer. My\r
            `),P(s.$$.fragment,f),l=w(f,`\r
            [P] include multiple Android and iOS apps and websites.\r
            I'm also reselling apps and currently starting an affiliate marketing business.`)},m(f,o){p(f,e,o),p(f,n,o),p(f,t,o),U(s,f,o),p(f,l,o),r=!0},p(f,o){const u={};o&4&&(u.onClick=f[11]),o&131072&&(u.$$scope={dirty:o,ctx:f}),s.$set(u)},i(f){r||(h(s.$$.fragment,f),r=!0)},o(f){v(s.$$.fragment,f),r=!1},d(f){f&&m(e),f&&m(n),f&&m(t),F(s,f),f&&m(l)}}}function Ee(a){let e;return{c(){e=d("Return home")},l(n){e=w(n,"Return home")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function qe(a){let e;return{c(){e=d("projects")},l(n){e=w(n,"projects")},m(n,t){p(n,e,t)},d(n){n&&m(e)}}}function ze(a){let e,n,t,s,l,r,f,o=a[2][0].toUpperCase()+a[2].slice(1)+"",u,i,c,g,A,M,R,I,q,S,k;me(a[8]),n=new ke({props:{showInDevice:"desktop",$$slots:{default:[Pe]},$$scope:{ctx:a}}}),r=new K({props:{onClick:a[10],$$slots:{default:[Ue]},$$scope:{ctx:a}}});const j=[De,He,Ne,je,Fe],N=[];function ee(_,C){return _[2]==="about"?0:_[2]==="contact"?1:_[2]==="home"||_[2]==="website"?2:_[2]==="projects"?3:4}return R=ee(a),I=N[R]=j[R](a),{c(){e=b("main"),T(n.$$.fragment),t=D(),s=b("div"),l=b("div"),T(r.$$.fragment),f=d(`\r
            > `),u=d(o),i=D(),c=b("br"),g=d(`\r
        Hi, I'm Taavi Rübenhagen. This website is still under development.\r
        `),A=b("br"),M=d(`\r
        Press the keys in brackets on your keyboard for quick navigation.\r
        `),I.c(),this.h()},l(_){e=$(_,"MAIN",{class:!0});var C=X(e);P(n.$$.fragment,C),t=E(C),s=$(C,"DIV",{class:!0});var B=X(s);l=$(B,"DIV",{class:!0});var H=X(l);P(r.$$.fragment,H),f=w(H,`\r
            > `),u=w(H,o),H.forEach(m),i=E(B),c=$(B,"BR",{}),g=w(B,`\r
        Hi, I'm Taavi Rübenhagen. This website is still under development.\r
        `),A=$(B,"BR",{}),M=w(B,`\r
        Press the keys in brackets on your keyboard for quick navigation.\r
        `),I.l(B),B.forEach(m),C.forEach(m),this.h()},h(){z(l,"class","text-neutral-500 font-bold"),z(s,"class","h-screen p-4 bg-black selection:bg-neutral-300 text-base text-white selection:text-black font-mono"),z(e,"class","overflow-hidden cursor-none")},m(_,C){p(_,e,C),U(n,e,null),y(e,t),y(e,s),y(s,l),U(r,l,null),y(l,f),y(l,u),y(s,i),y(s,c),y(s,g),y(s,A),y(s,M),N[R].m(s,null),q=!0,S||(k=[V(se,"resize",a[8]),V(e,"click",a[13]),V(e,"keypress",pe(a[7]))],S=!0)},p(_,[C]){const B={};C&131074&&(B.$$scope={dirty:C,ctx:_}),n.$set(B);const H={};C&4&&(H.onClick=_[10]),C&131072&&(H.$$scope={dirty:C,ctx:_}),r.$set(H),(!q||C&4)&&o!==(o=_[2][0].toUpperCase()+_[2].slice(1)+"")&&Z(u,o);let O=R;R=ee(_),R===O?N[R].p(_,C):(W(),v(N[O],1,1,()=>{N[O]=null}),Y(),I=N[R],I?I.p(_,C):(I=N[R]=j[R](_),I.c()),h(I,1),I.m(s,null))},i(_){q||(h(n.$$.fragment,_),h(r.$$.fragment,_),h(I),q=!0)},o(_){v(n.$$.fragment,_),v(r.$$.fragment,_),v(I),q=!1},d(_){_&&m(e),F(n),F(r),N[R].d(),S=!1,_e(k)}}}function Ae(a,e,n){let t;be(a,he,k=>n(15,t=k));let s;ve.subscribe(k=>{});let l,r="home";const f=[["email","c","mailto:taavi.ruebenhagen@gmail.com"]],o=[["about","a","route"],["contact","c","route"],["home","h","route"],["projects","p","route"],["search","s","route"]],u=[["website","h","route"],["fenni","1","https://fenni.me"],["presenter","2","https://play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2"]],i=[...o,...u];function c(k){k[2]!=="route"&&(window.location.href=k[2]),n(2,r=k[0])}i.map(k=>k[0]).includes(t.params.route)&&(r=t.params.route);function g(k){console.log("Key pressed: "+k.key),k.key=="x"&&n(2,r="home");for(let j=0;j<i.length;j++)k.key==i[j][1]&&(i[j][2]!=="route"&&(window.location.href=i[j][2]),n(2,r=i[j][0]))}function A(){n(0,s=se.innerHeight)}function M(k){ge[k?"unshift":"push"](()=>{l=k,n(1,l)})}return[s,l,r,f,o,u,c,g,A,M,()=>n(2,r="home"),()=>n(2,r="projects"),()=>n(2,r="home"),k=>l.focus()]}class Ve extends L{constructor(e){super(),Q(this,e,Ae,ze,J,{})}}export{Ve as component};
