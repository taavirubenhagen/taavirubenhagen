import{S as N,i as T,s as J,G as Y,c as h,a as v,m as b,H as Z,t as g,b as w,d,I as re,l as H,j as D,n as M,o as z,k as E,h as u,p as k,g as m,v as U,D as le,E as ne,y as R,q,r as B,e as j,f as F,w as y,z as fe,A as ae,B as ie,C as $e,F as oe}from"../chunks/index.78ed22c3.js";/* empty css                       */import{R as ue,I as x}from"../chunks/RawButton.30ccdb18.js";import"../chunks/paths.36523c55.js";import{S as ee,a as te}from"../chunks/SmallHeading.2831e1f0.js";import{S as X}from"../chunks/Section.bafc5e2a.js";const{window:G}=re;function me(i){let t,r,s;return r=new ee({props:{$$slots:{default:[_e]},$$scope:{ctx:i}}}),{c(){t=H("div"),h(r.$$.fragment),this.h()},l(n){t=M(n,"DIV",{class:!0});var l=z(t);v(r.$$.fragment,l),l.forEach(u),this.h()},h(){k(t,"class","h-full p-4 center_col text-center")},m(n,l){m(n,t,l),b(r,t,null),s=!0},p(n,l){const f={};l&257&&(f.$$scope={dirty:l,ctx:n}),r.$set(f)},i(n){s||(g(r.$$.fragment,n),s=!0)},o(n){w(r.$$.fragment,n),s=!1},d(n){n&&u(t),d(r)}}}function ce(i){let t,r;return{c(){t=H("img"),this.h()},l(s){t=M(s,"IMG",{src:!0,alt:!0}),this.h()},h(){R(t.src,r=i[3])||k(t,"src",r),k(t,"alt",i[0])},m(s,n){m(s,t,n)},p(s,n){n&8&&!R(t.src,r=s[3])&&k(t,"src",r),n&1&&k(t,"alt",s[0])},i:q,o:q,d(s){s&&u(t)}}}function pe(i){let t,r,s;return{c(){t=H("iframe"),this.h()},l(n){t=M(n,"IFRAME",{title:!0,src:!0,height:!0,frameborder:!0,class:!0,style:!0}),z(t).forEach(u),this.h()},h(){k(t,"title",i[0]),R(t.src,r="https://"+i[3])||k(t,"src",r),k(t,"height",s=i[5]+"px"),k(t,"frameborder",0),k(t,"class","origin-top-left absolute top-0 pointer-events-none rounded-full aspect-video brightness-75"),B(t,"transform","scale("+128/i[5]+")"),B(t,"border-radius",1*i[5]/128+"rem")},m(n,l){m(n,t,l)},p(n,l){l&1&&k(t,"title",n[0]),l&8&&!R(t.src,r="https://"+n[3])&&k(t,"src",r),l&32&&s!==(s=n[5]+"px")&&k(t,"height",s),l&32&&B(t,"transform","scale("+128/n[5]+")"),l&32&&B(t,"border-radius",1*n[5]/128+"rem")},i:q,o:q,d(n){n&&u(t)}}}function _e(i){let t;return{c(){t=j(i[0])},l(r){t=F(r,i[0])},m(r,s){m(r,t,s)},p(r,s){s&1&&y(t,r[0])},d(r){r&&u(t)}}}function ge(i){let t,r,s,n,l,f,e,$;const I=[pe,ce,me],S=[];function _(o,p){return o[2]?0:o[3]!==""?1:2}return r=_(i),s=S[r]=I[r](i),f=new x({props:{name:"open-new-window",textClass:"scale-150"}}),{c(){t=H("div"),s.c(),n=D(),l=H("div"),h(f.$$.fragment),this.h()},l(o){t=M(o,"DIV",{class:!0});var p=z(t);s.l(p),n=E(p),l=M(p,"DIV",{class:!0});var C=z(l);v(f.$$.fragment,C),C.forEach(u),p.forEach(u),this.h()},h(){k(l,"class",e="absolute bottom-4 w-full center_row "+(i[3]===""?"":"text-white")),k(t,"class","relative shadow rounded-2xl h-32 aspect-video normal-case")},m(o,p){m(o,t,p),S[r].m(t,null),U(t,n),U(t,l),b(f,l,null),$=!0},p(o,p){let C=r;r=_(o),r===C?S[r].p(o,p):(le(),w(S[C],1,1,()=>{S[C]=null}),ne(),s=S[r],s?s.p(o,p):(s=S[r]=I[r](o),s.c()),g(s,1),s.m(t,n)),(!$||p&8&&e!==(e="absolute bottom-4 w-full center_row "+(o[3]===""?"":"text-white")))&&k(l,"class",e)},i(o){$||(g(s),g(f.$$.fragment,o),$=!0)},o(o){w(s),w(f.$$.fragment,o),$=!1},d(o){o&&u(t),S[r].d(),d(f)}}}function we(i){let t,r,s,n;return Y(i[6]),t=new ue({props:{onClick:i[7],$$slots:{default:[ge]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment)},l(l){v(t.$$.fragment,l)},m(l,f){b(t,l,f),r=!0,s||(n=Z(G,"resize",i[6]),s=!0)},p(l,[f]){const e={};f&2&&(e.onClick=l[7]),f&301&&(e.$$scope={dirty:f,ctx:l}),t.$set(e)},i(l){r||(g(t.$$.fragment,l),r=!0)},o(l){w(t.$$.fragment,l),r=!1},d(l){d(t,l),s=!1,n()}}}function he(i,t,r){let{website:s=!1}=t,{title:n=""}=t,{src:l=""}=t,{target:f=""}=t;n===""&&(n="Showcase Item"),f===""&&(f=l);let e,$;function I(){r(4,e=G.innerWidth),r(5,$=G.innerHeight)}const S=()=>{window.location.href="https://"+f};return i.$$set=_=>{"website"in _&&r(2,s=_.website),"title"in _&&r(0,n=_.title),"src"in _&&r(3,l=_.src),"target"in _&&r(1,f=_.target)},[n,f,s,l,e,$,I,S]}class V extends N{constructor(t){super(),T(this,t,he,we,J,{website:2,title:0,src:3,target:1})}}function ve(i){let t;return{c(){t=j(i[0])},l(r){t=F(r,i[0])},m(r,s){m(r,t,s)},p(r,s){s&1&&y(t,r[0])},d(r){r&&u(t)}}}function be(i){let t,r,s,n,l,f,e,$,I;r=new te({props:{$$slots:{default:[ve]},$$scope:{ctx:i}}});const S=i[1].default,_=fe(S,i,i[2],null);return{c(){t=H("div"),h(r.$$.fragment),s=D(),n=H("div"),l=D(),f=H("div"),_&&_.c(),e=D(),$=H("div"),this.h()},l(o){t=M(o,"DIV",{class:!0});var p=z(t);v(r.$$.fragment,p),p.forEach(u),s=E(o),n=M(o,"DIV",{class:!0}),z(n).forEach(u),l=E(o),f=M(o,"DIV",{class:!0});var C=z(f);_&&_.l(C),C.forEach(u),e=E(o),$=M(o,"DIV",{class:!0}),z($).forEach(u),this.h()},h(){k(t,"class","flex gap-8 items-end"),k(n,"class","h-4"),k(f,"class","-mx-8 p-8 pt-4 overflow-x-scroll flex gap-8"),k($,"class","h-16")},m(o,p){m(o,t,p),b(r,t,null),m(o,s,p),m(o,n,p),m(o,l,p),m(o,f,p),_&&_.m(f,null),m(o,e,p),m(o,$,p),I=!0},p(o,[p]){const C={};p&5&&(C.$$scope={dirty:p,ctx:o}),r.$set(C),_&&_.p&&(!I||p&4)&&ae(_,S,o,o[2],I?$e(S,o[2],p,null):ie(o[2]),null)},i(o){I||(g(r.$$.fragment,o),g(_,o),I=!0)},o(o){w(r.$$.fragment,o),w(_,o),I=!1},d(o){o&&u(t),d(r),o&&u(s),o&&u(n),o&&u(l),o&&u(f),_&&_.d(o),o&&u(e),o&&u($)}}}function de(i,t,r){let{$$slots:s={},$$scope:n}=t,{title:l}=t;return i.$$set=f=>{"title"in f&&r(0,l=f.title),"$$scope"in f&&r(2,n=f.$$scope)},[l,s,n]}class A extends N{constructor(t){super(),T(this,t,de,be,J,{title:0})}}function Ie(i,t,r){const s=i.slice();return s[3]=t[r],s}function ke(i){let t;return{c(){t=j("Independent designer, developer, artist, activist and entrepreneur.")},l(r){t=F(r,"Independent designer, developer, artist, activist and entrepreneur.")},m(r,s){m(r,t,s)},d(r){r&&u(t)}}}function Se(i){let t;return{c(){t=j("Scroll.")},l(r){t=F(r,"Scroll.")},m(r,s){m(r,t,s)},d(r){r&&u(t)}}}function De(i){let t,r,s,n,l;return t=new te({props:{$$slots:{default:[ke]},$$scope:{ctx:i}}}),n=new ee({props:{$$slots:{default:[Se]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment),r=D(),s=H("div"),h(n.$$.fragment),this.h()},l(f){v(t.$$.fragment,f),r=E(f),s=M(f,"DIV",{class:!0});var e=z(s);v(n.$$.fragment,e),e.forEach(u),this.h()},h(){k(s,"class","absolute bottom-8")},m(f,e){b(t,f,e),m(f,r,e),m(f,s,e),b(n,s,null),l=!0},p(f,e){const $={};e&64&&($.$$scope={dirty:e,ctx:f}),t.$set($);const I={};e&64&&(I.$$scope={dirty:e,ctx:f}),n.$set(I)},i(f){l||(g(t.$$.fragment,f),g(n.$$.fragment,f),l=!0)},o(f){w(t.$$.fragment,f),w(n.$$.fragment,f),l=!1},d(f){d(t,f),f&&u(r),f&&u(s),d(n)}}}function Ee(i){let t,r,s,n,l,f;return t=new V({props:{target:"play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2",title:"Presentation Master 2"}}),s=new V({props:{target:"play.google.com/store/apps/details?id=fluent.simple.counter",title:"Simple Counter"}}),l=new V({props:{src:"",title:"Outfyx"}}),{c(){h(t.$$.fragment),r=D(),h(s.$$.fragment),n=D(),h(l.$$.fragment)},l(e){v(t.$$.fragment,e),r=E(e),v(s.$$.fragment,e),n=E(e),v(l.$$.fragment,e)},m(e,$){b(t,e,$),m(e,r,$),b(s,e,$),m(e,n,$),b(l,e,$),f=!0},p:q,i(e){f||(g(t.$$.fragment,e),g(s.$$.fragment,e),g(l.$$.fragment,e),f=!0)},o(e){w(t.$$.fragment,e),w(s.$$.fragment,e),w(l.$$.fragment,e),f=!1},d(e){d(t,e),e&&u(r),d(s,e),e&&u(n),d(l,e)}}}function Ce(i){let t,r,s,n,l,f;return t=new V({props:{website:!0,src:"rubenhagen.com/drafts/hoffmanns-schuppen",title:"hoffmanns-schuppen.com"}}),s=new V({props:{website:!0,src:"fenni.me",title:"fenni.me"}}),l=new V({props:{website:!0,src:"rubenhagen.com",title:"rubenhagen.com"}}),{c(){h(t.$$.fragment),r=D(),h(s.$$.fragment),n=D(),h(l.$$.fragment)},l(e){v(t.$$.fragment,e),r=E(e),v(s.$$.fragment,e),n=E(e),v(l.$$.fragment,e)},m(e,$){b(t,e,$),m(e,r,$),b(s,e,$),m(e,n,$),b(l,e,$),f=!0},p:q,i(e){f||(g(t.$$.fragment,e),g(s.$$.fragment,e),g(l.$$.fragment,e),f=!0)},o(e){w(t.$$.fragment,e),w(s.$$.fragment,e),w(l.$$.fragment,e),f=!1},d(e){d(t,e),e&&u(r),d(s,e),e&&u(n),d(l,e)}}}function Ve(i){let t,r,s,n,l,f;return t=new V({props:{target:"play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2",title:"Presentation Master 2"}}),s=new V({props:{src:"",title:"Hoffmann's Schuppen"}}),l=new V({props:{src:"",title:"JuPa Campaign"}}),{c(){h(t.$$.fragment),r=D(),h(s.$$.fragment),n=D(),h(l.$$.fragment)},l(e){v(t.$$.fragment,e),r=E(e),v(s.$$.fragment,e),n=E(e),v(l.$$.fragment,e)},m(e,$){b(t,e,$),m(e,r,$),b(s,e,$),m(e,n,$),b(l,e,$),f=!0},p:q,i(e){f||(g(t.$$.fragment,e),g(s.$$.fragment,e),g(l.$$.fragment,e),f=!0)},o(e){w(t.$$.fragment,e),w(s.$$.fragment,e),w(l.$$.fragment,e),f=!1},d(e){d(t,e),e&&u(r),d(s,e),e&&u(n),d(l,e)}}}function He(i){let t,r,s,n,l,f;return t=new V({props:{src:"",title:"Tavy Design System"}}),s=new V({props:{src:"",title:"Tavy Icons"}}),l=new V({props:{src:"",title:"PM2 Design System"}}),{c(){h(t.$$.fragment),r=D(),h(s.$$.fragment),n=D(),h(l.$$.fragment)},l(e){v(t.$$.fragment,e),r=E(e),v(s.$$.fragment,e),n=E(e),v(l.$$.fragment,e)},m(e,$){b(t,e,$),m(e,r,$),b(s,e,$),m(e,n,$),b(l,e,$),f=!0},p:q,i(e){f||(g(t.$$.fragment,e),g(s.$$.fragment,e),g(l.$$.fragment,e),f=!0)},o(e){w(t.$$.fragment,e),w(s.$$.fragment,e),w(l.$$.fragment,e),f=!1},d(e){d(t,e),e&&u(r),d(s,e),e&&u(n),d(l,e)}}}function Me(i){let t,r,s,n,l,f;return t=new V({props:{src:"",title:"Hoffmann's Schuppen"}}),s=new V({props:{src:"",title:"Affiliate Marketing"}}),l=new V({props:{src:"",title:"Content Creation"}}),{c(){h(t.$$.fragment),r=D(),h(s.$$.fragment),n=D(),h(l.$$.fragment)},l(e){v(t.$$.fragment,e),r=E(e),v(s.$$.fragment,e),n=E(e),v(l.$$.fragment,e)},m(e,$){b(t,e,$),m(e,r,$),b(s,e,$),m(e,n,$),b(l,e,$),f=!0},p:q,i(e){f||(g(t.$$.fragment,e),g(s.$$.fragment,e),g(l.$$.fragment,e),f=!0)},o(e){w(t.$$.fragment,e),w(s.$$.fragment,e),w(l.$$.fragment,e),f=!1},d(e){d(t,e),e&&u(r),d(s,e),e&&u(n),d(l,e)}}}function Pe(i){let t,r;return t=new x({props:{name:i[3],textClass:"text-3xl"}}),{c(){h(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,n){b(t,s,n),r=!0},p:q,i(s){r||(g(t.$$.fragment,s),r=!0)},o(s){w(t.$$.fragment,s),r=!1},d(s){d(t,s)}}}function ze(i){let t,r,s,n,l,f,e,$,I,S,_,o,p,C;t=new A({props:{title:"apps",$$slots:{default:[Ee]},$$scope:{ctx:i}}}),s=new A({props:{title:"websites",$$slots:{default:[Ce]},$$scope:{ctx:i}}}),l=new A({props:{title:"graphic design",$$slots:{default:[Ve]},$$scope:{ctx:i}}}),e=new A({props:{title:"design system",$$slots:{default:[He]},$$scope:{ctx:i}}}),I=new A({props:{title:"other businesses",$$slots:{default:[Me]},$$scope:{ctx:i}}});let se=["instagram","tiktok","youtube","github"],W=[];for(let a=0;a<4;a+=1)W[a]=Pe(Ie(i,se,a));return{c(){h(t.$$.fragment),r=D(),h(s.$$.fragment),n=D(),h(l.$$.fragment),f=D(),h(e.$$.fragment),$=D(),h(I.$$.fragment),S=D(),_=H("div");for(let a=0;a<4;a+=1)W[a].c();o=D(),p=H("div"),this.h()},l(a){v(t.$$.fragment,a),r=E(a),v(s.$$.fragment,a),n=E(a),v(l.$$.fragment,a),f=E(a),v(e.$$.fragment,a),$=E(a),v(I.$$.fragment,a),S=E(a),_=M(a,"DIV",{class:!0});var c=z(_);for(let P=0;P<4;P+=1)W[P].l(c);c.forEach(u),o=E(a),p=M(a,"DIV",{class:!0}),z(p).forEach(u),this.h()},h(){k(_,"class","rounded-2xl w-full h-16 primary flex justify-evenly items-center"),k(p,"class","h-16")},m(a,c){b(t,a,c),m(a,r,c),b(s,a,c),m(a,n,c),b(l,a,c),m(a,f,c),b(e,a,c),m(a,$,c),b(I,a,c),m(a,S,c),m(a,_,c);for(let P=0;P<4;P+=1)W[P]&&W[P].m(_,null);m(a,o,c),m(a,p,c),C=!0},p(a,c){const P={};c&64&&(P.$$scope={dirty:c,ctx:a}),t.$set(P);const O={};c&64&&(O.$$scope={dirty:c,ctx:a}),s.$set(O);const K={};c&64&&(K.$$scope={dirty:c,ctx:a}),l.$set(K);const L={};c&64&&(L.$$scope={dirty:c,ctx:a}),e.$set(L);const Q={};c&64&&(Q.$$scope={dirty:c,ctx:a}),I.$set(Q)},i(a){if(!C){g(t.$$.fragment,a),g(s.$$.fragment,a),g(l.$$.fragment,a),g(e.$$.fragment,a),g(I.$$.fragment,a);for(let c=0;c<4;c+=1)g(W[c]);C=!0}},o(a){w(t.$$.fragment,a),w(s.$$.fragment,a),w(l.$$.fragment,a),w(e.$$.fragment,a),w(I.$$.fragment,a),W=W.filter(Boolean);for(let c=0;c<4;c+=1)w(W[c]);C=!1},d(a){d(t,a),a&&u(r),d(s,a),a&&u(n),d(l,a),a&&u(f),d(e,a),a&&u($),d(I,a),a&&u(S),a&&u(_),oe(W,a),a&&u(o),a&&u(p)}}}function We(i){let t,r,s,n,l,f;return Y(i[2]),t=new X({props:{className:"relative p-16 pb-24 primary center_col gap-8 text-center",$$slots:{default:[De]},$$scope:{ctx:i}}}),s=new X({props:{className:"p-8 pt-16",$$slots:{default:[ze]},$$scope:{ctx:i}}}),{c(){h(t.$$.fragment),r=D(),h(s.$$.fragment)},l(e){v(t.$$.fragment,e),r=E(e),v(s.$$.fragment,e)},m(e,$){b(t,e,$),m(e,r,$),b(s,e,$),n=!0,l||(f=Z(window,"resize",i[2]),l=!0)},p(e,[$]){const I={};$&64&&(I.$$scope={dirty:$,ctx:e}),t.$set(I);const S={};$&64&&(S.$$scope={dirty:$,ctx:e}),s.$set(S)},i(e){n||(g(t.$$.fragment,e),g(s.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),w(s.$$.fragment,e),n=!1},d(e){d(t,e),e&&u(r),d(s,e),l=!1,f()}}}function qe(i,t,r){let s,n;function l(){r(0,s=window.innerWidth),r(1,n=window.innerHeight)}return[s,n,l]}class Ne extends N{constructor(t){super(),T(this,t,qe,We,J,{})}}export{Ne as component};