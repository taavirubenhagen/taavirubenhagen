import{S as B,i as W,s as q,z as j,l as V,n as M,o as P,h as u,p as k,g as m,A as J,B as O,C as K,t as c,b as p,G as Z,c as _,a as g,m as w,H as y,d,I as te,j as I,k as S,q as X,D as se,E as re,w as R,r as D,u as A,e as H,f as N,y as x,v as T,F as ne}from"../chunks/index.128d686f.js";/* empty css                       */import"../chunks/paths.d803d376.js";import{I as F}from"../chunks/InlineButton.e890bcac.js";import{R as le,I as fe}from"../chunks/RawButton.be12d68b.js";import{S as ie}from"../chunks/SmallParagraph.e7c145b8.js";import{S as ae}from"../chunks/Section.4d6b7fe1.js";function $e(i){let e,r;const t=i[1].default,n=j(t,i,i[0],null);return{c(){e=V("t"),n&&n.c(),this.h()},l(l){e=M(l,"T",{class:!0});var f=P(e);n&&n.l(f),f.forEach(u),this.h()},h(){k(e,"class","text-3xl md:text-5xl font-bold")},m(l,f){m(l,e,f),n&&n.m(e,null),r=!0},p(l,[f]){n&&n.p&&(!r||f&1)&&J(n,t,l,l[0],r?K(t,l[0],f,null):O(l[0]),null)},i(l){r||(c(n,l),r=!0)},o(l){p(n,l),r=!1},d(l){l&&u(e),n&&n.d(l)}}}function oe(i,e,r){let{$$slots:t={},$$scope:n}=e;return i.$$set=l=>{"$$scope"in l&&r(0,n=l.$$scope)},[n,t]}class ee extends B{constructor(e){super(),W(this,e,oe,$e,q,{})}}const{window:G}=te;function ue(i){let e,r,t;return r=new ie({props:{$$slots:{default:[pe]},$$scope:{ctx:i}}}),{c(){e=V("div"),_(r.$$.fragment),this.h()},l(n){e=M(n,"DIV",{class:!0});var l=P(e);g(r.$$.fragment,l),l.forEach(u),this.h()},h(){k(e,"class","h-full p-4 center_col text-center")},m(n,l){m(n,e,l),w(r,e,null),t=!0},p(n,l){const f={};l&257&&(f.$$scope={dirty:l,ctx:n}),r.$set(f)},i(n){t||(c(r.$$.fragment,n),t=!0)},o(n){p(r.$$.fragment,n),t=!1},d(n){n&&u(e),d(r)}}}function me(i){let e,r;return{c(){e=V("img"),this.h()},l(t){e=M(t,"IMG",{src:!0,alt:!0}),this.h()},h(){R(e.src,r=i[3])||k(e,"src",r),k(e,"alt",i[0])},m(t,n){m(t,e,n)},p(t,n){n&8&&!R(e.src,r=t[3])&&k(e,"src",r),n&1&&k(e,"alt",t[0])},i:D,o:D,d(t){t&&u(e)}}}function ce(i){let e,r,t;return{c(){e=V("iframe"),this.h()},l(n){e=M(n,"IFRAME",{title:!0,src:!0,height:!0,frameborder:!0,class:!0,style:!0}),P(e).forEach(u),this.h()},h(){k(e,"title",i[0]),R(e.src,r="https://"+i[3])||k(e,"src",r),k(e,"height",t=i[5]+"px"),k(e,"frameborder",0),k(e,"class","origin-top-left absolute top-0 pointer-events-none rounded-full aspect-video brightness-75"),A(e,"transform","scale("+128/i[5]+")"),A(e,"border-radius",1*i[5]/128+"rem")},m(n,l){m(n,e,l)},p(n,l){l&1&&k(e,"title",n[0]),l&8&&!R(e.src,r="https://"+n[3])&&k(e,"src",r),l&32&&t!==(t=n[5]+"px")&&k(e,"height",t),l&32&&A(e,"transform","scale("+128/n[5]+")"),l&32&&A(e,"border-radius",1*n[5]/128+"rem")},i:D,o:D,d(n){n&&u(e)}}}function pe(i){let e;return{c(){e=H(i[0])},l(r){e=N(r,i[0])},m(r,t){m(r,e,t)},p(r,t){t&1&&x(e,r[0])},d(r){r&&u(e)}}}function _e(i){let e,r,t,n,l,f,s,a;const h=[ce,me,ue],v=[];function o($,b){return $[2]?0:$[3]!==""?1:2}return r=o(i),t=v[r]=h[r](i),f=new fe({props:{name:"open-new-window",textClass:"scale-150"}}),{c(){e=V("div"),t.c(),n=I(),l=V("div"),_(f.$$.fragment),this.h()},l($){e=M($,"DIV",{class:!0});var b=P(e);t.l(b),n=S(b),l=M(b,"DIV",{class:!0});var C=P(l);g(f.$$.fragment,C),C.forEach(u),b.forEach(u),this.h()},h(){k(l,"class",s="absolute bottom-4 w-full center_row "+(i[3]===""?"":"text-white")),k(e,"class","relative shadow rounded-2xl h-32 aspect-video normal-case")},m($,b){m($,e,b),v[r].m(e,null),X(e,n),X(e,l),w(f,l,null),a=!0},p($,b){let C=r;r=o($),r===C?v[r].p($,b):(se(),p(v[C],1,1,()=>{v[C]=null}),re(),t=v[r],t?t.p($,b):(t=v[r]=h[r]($),t.c()),c(t,1),t.m(e,n)),(!a||b&8&&s!==(s="absolute bottom-4 w-full center_row "+($[3]===""?"":"text-white")))&&k(l,"class",s)},i($){a||(c(t),c(f.$$.fragment,$),a=!0)},o($){p(t),p(f.$$.fragment,$),a=!1},d($){$&&u(e),v[r].d(),d(f)}}}function ge(i){let e,r,t,n;return Z(i[6]),e=new le({props:{onClick:i[7],$$slots:{default:[_e]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment)},l(l){g(e.$$.fragment,l)},m(l,f){w(e,l,f),r=!0,t||(n=y(G,"resize",i[6]),t=!0)},p(l,[f]){const s={};f&2&&(s.onClick=l[7]),f&301&&(s.$$scope={dirty:f,ctx:l}),e.$set(s)},i(l){r||(c(e.$$.fragment,l),r=!0)},o(l){p(e.$$.fragment,l),r=!1},d(l){d(e,l),t=!1,n()}}}function we(i,e,r){let{website:t=!1}=e,{title:n=""}=e,{src:l=""}=e,{target:f=""}=e;n===""&&(n="Showcase Item"),f===""&&(f=l);let s,a;function h(){r(4,s=G.innerWidth),r(5,a=G.innerHeight)}const v=()=>{window.location.href="https://"+f};return i.$$set=o=>{"website"in o&&r(2,t=o.website),"title"in o&&r(0,n=o.title),"src"in o&&r(3,l=o.src),"target"in o&&r(1,f=o.target)},[n,f,t,l,s,a,h,v]}class E extends B{constructor(e){super(),W(this,e,we,ge,q,{website:2,title:0,src:3,target:1})}}function de(i){let e;return{c(){e=H(i[0])},l(r){e=N(r,i[0])},m(r,t){m(r,e,t)},p(r,t){t&1&&x(e,r[0])},d(r){r&&u(e)}}}function be(i){let e,r,t,n,l,f,s,a,h;r=new ee({props:{$$slots:{default:[de]},$$scope:{ctx:i}}});const v=i[1].default,o=j(v,i,i[2],null);return{c(){e=V("div"),_(r.$$.fragment),t=I(),n=V("div"),l=I(),f=V("div"),o&&o.c(),s=I(),a=V("div"),this.h()},l($){e=M($,"DIV",{class:!0});var b=P(e);g(r.$$.fragment,b),b.forEach(u),t=S($),n=M($,"DIV",{class:!0}),P(n).forEach(u),l=S($),f=M($,"DIV",{class:!0});var C=P(f);o&&o.l(C),C.forEach(u),s=S($),a=M($,"DIV",{class:!0}),P(a).forEach(u),this.h()},h(){k(e,"class","flex gap-8 items-end"),k(n,"class","h-4"),k(f,"class","-mx-8 p-8 pt-4 overflow-x-scroll flex gap-8"),k(a,"class","h-16")},m($,b){m($,e,b),w(r,e,null),m($,t,b),m($,n,b),m($,l,b),m($,f,b),o&&o.m(f,null),m($,s,b),m($,a,b),h=!0},p($,[b]){const C={};b&5&&(C.$$scope={dirty:b,ctx:$}),r.$set(C),o&&o.p&&(!h||b&4)&&J(o,v,$,$[2],h?K(v,$[2],b,null):O($[2]),null)},i($){h||(c(r.$$.fragment,$),c(o,$),h=!0)},o($){p(r.$$.fragment,$),p(o,$),h=!1},d($){$&&u(e),d(r),$&&u(t),$&&u(n),$&&u(l),$&&u(f),o&&o.d($),$&&u(s),$&&u(a)}}}function he(i,e,r){let{$$slots:t={},$$scope:n}=e,{title:l}=e;return i.$$set=f=>{"title"in f&&r(0,l=f.title),"$$scope"in f&&r(2,n=f.$$scope)},[l,t,n]}class z extends B{constructor(e){super(),W(this,e,he,be,q,{title:0})}}function ve(i){let e;const r=i[2].default,t=j(r,i,i[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,l){t&&t.m(n,l),e=!0},p(n,l){t&&t.p&&(!e||l&8)&&J(t,r,n,n[3],e?K(r,n[3],l,null):O(n[3]),null)},i(n){e||(c(t,n),e=!0)},o(n){p(t,n),e=!1},d(n){t&&t.d(n)}}}function ke(i){let e,r;return e=new ae({props:{className:i[1]+" "+(i[0]?"pt-16":""),$$slots:{default:[ve]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){w(e,t,n),r=!0},p(t,[n]){const l={};n&3&&(l.className=t[1]+" "+(t[0]?"pt-16":"")),n&8&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function Ie(i,e,r){let{$$slots:t={},$$scope:n}=e,{top:l=!1}=e,{className:f=""}=e;return i.$$set=s=>{"top"in s&&r(0,l=s.top),"className"in s&&r(1,f=s.className),"$$scope"in s&&r(3,n=s.$$scope)},[l,f,t,n]}class Y extends B{constructor(e){super(),W(this,e,Ie,ke,q,{top:0,className:1})}}function Se(i,e,r){const t=i.slice();return t[3]=e[r],t}function Ce(i){let e,r,t;return r=new F({props:{onClick:Le,$$slots:{default:[Ne]},$$scope:{ctx:i}}}),{c(){e=H(` 
                `),_(r.$$.fragment)},l(n){e=N(n,` 
                `),g(r.$$.fragment,n)},m(n,l){m(n,e,l),w(r,n,l),t=!0},i(n){t||(c(r.$$.fragment,n),t=!0)},o(n){p(r.$$.fragment,n),t=!1},d(n){n&&u(e),d(r,n)}}}function Ee(i){let e,r,t;return r=new F({props:{onClick:Ke,$$slots:{default:[Ve]},$$scope:{ctx:i}}}),{c(){e=H(` and
                `),_(r.$$.fragment)},l(n){e=N(n,` and
                `),g(r.$$.fragment,n)},m(n,l){m(n,e,l),w(r,n,l),t=!0},i(n){t||(c(r.$$.fragment,n),t=!0)},o(n){p(r.$$.fragment,n),t=!1},d(n){n&&u(e),d(r,n)}}}function De(i){let e,r,t;return r=new F({props:{onClick:Oe,$$slots:{default:[Me]},$$scope:{ctx:i}}}),{c(){e=H(` 
                `),_(r.$$.fragment)},l(n){e=N(n,` 
                `),g(r.$$.fragment,n)},m(n,l){m(n,e,l),w(r,n,l),t=!0},i(n){t||(c(r.$$.fragment,n),t=!0)},o(n){p(r.$$.fragment,n),t=!1},d(n){n&&u(e),d(r,n)}}}function He(i){let e,r;return e=new F({props:{onClick:Je,$$slots:{default:[Pe]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){w(e,t,n),r=!0},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function Ne(i){let e,r;return{c(){e=H(i[3]),r=H(`,
                `)},l(t){e=N(t,i[3]),r=N(t,`,
                `)},m(t,n){m(t,e,n),m(t,r,n)},p:D,d(t){t&&u(e),t&&u(r)}}}function Ve(i){let e,r;return{c(){e=H(i[3]),r=H(`.
                `)},l(t){e=N(t,i[3]),r=N(t,`.
                `)},m(t,n){m(t,e,n),m(t,r,n)},p:D,d(t){t&&u(e),t&&u(r)}}}function Me(i){let e,r;return{c(){e=H(i[3]),r=I()},l(t){e=N(t,i[3]),r=S(t)},m(t,n){m(t,e,n),m(t,r,n)},p:D,d(t){t&&u(e),t&&u(r)}}}function Pe(i){let e,r;return{c(){e=H(i[3]),r=H(`,
                `)},l(t){e=N(t,i[3]),r=N(t,`,
                `)},m(t,n){m(t,e,n),m(t,r,n)},p:D,d(t){t&&u(e),t&&u(r)}}}function ze(i){let e,r,t,n;const l=[He,De,Ee,Ce],f=[];function s(a,h){return a[3]==="designer"?0:a[3]==="activist"?1:a[3]==="entrepreneur"?2:3}return e=s(i),r=f[e]=l[e](i),{c(){r.c(),t=T()},l(a){r.l(a),t=T()},m(a,h){f[e].m(a,h),m(a,t,h),n=!0},p:D,i(a){n||(c(r),n=!0)},o(a){p(r),n=!1},d(a){f[e].d(a),a&&u(t)}}}function Be(i){let e,r,t,n=["designer","developer","artist","activist","entrepreneur"],l=[];for(let f=0;f<5;f+=1)l[f]=ze(Se(i,n,f));return{c(){e=H(`Independent
        `);for(let f=0;f<5;f+=1)l[f].c();r=T()},l(f){e=N(f,`Independent
        `);for(let s=0;s<5;s+=1)l[s].l(f);r=T()},m(f,s){m(f,e,s);for(let a=0;a<5;a+=1)l[a]&&l[a].m(f,s);m(f,r,s),t=!0},p:D,i(f){if(!t){for(let s=0;s<5;s+=1)c(l[s]);t=!0}},o(f){l=l.filter(Boolean);for(let s=0;s<5;s+=1)p(l[s]);t=!1},d(f){f&&u(e),ne(l,f),f&&u(r)}}}function We(i){let e,r;return e=new ee({props:{$$slots:{default:[Be]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){w(e,t,n),r=!0},p(t,n){const l={};n&64&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){d(e,t)}}}function qe(i){let e,r,t,n,l,f;return e=new E({props:{target:"play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2",title:"Presentation Master 2"}}),t=new E({props:{target:"play.google.com/store/apps/details?id=fluent.simple.counter",title:"Simple Counter"}}),l=new E({props:{src:"",title:"Outfyx"}}),{c(){_(e.$$.fragment),r=I(),_(t.$$.fragment),n=I(),_(l.$$.fragment)},l(s){g(e.$$.fragment,s),r=S(s),g(t.$$.fragment,s),n=S(s),g(l.$$.fragment,s)},m(s,a){w(e,s,a),m(s,r,a),w(t,s,a),m(s,n,a),w(l,s,a),f=!0},p:D,i(s){f||(c(e.$$.fragment,s),c(t.$$.fragment,s),c(l.$$.fragment,s),f=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),p(l.$$.fragment,s),f=!1},d(s){d(e,s),s&&u(r),d(t,s),s&&u(n),d(l,s)}}}function Ae(i){let e,r,t,n,l,f;return e=new E({props:{website:!0,src:"rubenhagen.com/drafts/hoffmanns-schuppen",title:"hoffmanns-schuppen.com"}}),t=new E({props:{website:!0,src:"fenni.me",title:"fenni.me"}}),l=new E({props:{website:!0,src:"rubenhagen.com",title:"rubenhagen.com"}}),{c(){_(e.$$.fragment),r=I(),_(t.$$.fragment),n=I(),_(l.$$.fragment)},l(s){g(e.$$.fragment,s),r=S(s),g(t.$$.fragment,s),n=S(s),g(l.$$.fragment,s)},m(s,a){w(e,s,a),m(s,r,a),w(t,s,a),m(s,n,a),w(l,s,a),f=!0},p:D,i(s){f||(c(e.$$.fragment,s),c(t.$$.fragment,s),c(l.$$.fragment,s),f=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),p(l.$$.fragment,s),f=!1},d(s){d(e,s),s&&u(r),d(t,s),s&&u(n),d(l,s)}}}function Re(i){let e,r,t,n,l,f;return e=new E({props:{target:"play.google.com/store/apps/details?id=tavy.presenter.presentation_master_2",title:"Presentation Master 2"}}),t=new E({props:{src:"",title:"Hoffmann's Schuppen"}}),l=new E({props:{src:"",title:"JuPa Campaign"}}),{c(){_(e.$$.fragment),r=I(),_(t.$$.fragment),n=I(),_(l.$$.fragment)},l(s){g(e.$$.fragment,s),r=S(s),g(t.$$.fragment,s),n=S(s),g(l.$$.fragment,s)},m(s,a){w(e,s,a),m(s,r,a),w(t,s,a),m(s,n,a),w(l,s,a),f=!0},p:D,i(s){f||(c(e.$$.fragment,s),c(t.$$.fragment,s),c(l.$$.fragment,s),f=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),p(l.$$.fragment,s),f=!1},d(s){d(e,s),s&&u(r),d(t,s),s&&u(n),d(l,s)}}}function Te(i){let e,r,t,n,l,f;return e=new E({props:{src:"",title:"Tavy Design System"}}),t=new E({props:{src:"",title:"Tavy Icons"}}),l=new E({props:{src:"",title:"PM2 Design System"}}),{c(){_(e.$$.fragment),r=I(),_(t.$$.fragment),n=I(),_(l.$$.fragment)},l(s){g(e.$$.fragment,s),r=S(s),g(t.$$.fragment,s),n=S(s),g(l.$$.fragment,s)},m(s,a){w(e,s,a),m(s,r,a),w(t,s,a),m(s,n,a),w(l,s,a),f=!0},p:D,i(s){f||(c(e.$$.fragment,s),c(t.$$.fragment,s),c(l.$$.fragment,s),f=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),p(l.$$.fragment,s),f=!1},d(s){d(e,s),s&&u(r),d(t,s),s&&u(n),d(l,s)}}}function Fe(i){let e,r,t,n,l,f;return e=new E({props:{src:"",title:"Hoffmann's Schuppen"}}),t=new E({props:{src:"",title:"Affiliate Marketing"}}),l=new E({props:{src:"",title:"Content Creation"}}),{c(){_(e.$$.fragment),r=I(),_(t.$$.fragment),n=I(),_(l.$$.fragment)},l(s){g(e.$$.fragment,s),r=S(s),g(t.$$.fragment,s),n=S(s),g(l.$$.fragment,s)},m(s,a){w(e,s,a),m(s,r,a),w(t,s,a),m(s,n,a),w(l,s,a),f=!0},p:D,i(s){f||(c(e.$$.fragment,s),c(t.$$.fragment,s),c(l.$$.fragment,s),f=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),p(l.$$.fragment,s),f=!1},d(s){d(e,s),s&&u(r),d(t,s),s&&u(n),d(l,s)}}}function Ge(i){let e,r,t,n,l,f,s,a,h,v;return e=new z({props:{title:"apps",$$slots:{default:[qe]},$$scope:{ctx:i}}}),t=new z({props:{title:"websites",$$slots:{default:[Ae]},$$scope:{ctx:i}}}),l=new z({props:{title:"graphic design",$$slots:{default:[Re]},$$scope:{ctx:i}}}),s=new z({props:{title:"design system",$$slots:{default:[Te]},$$scope:{ctx:i}}}),h=new z({props:{title:"other businesses",$$slots:{default:[Fe]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment),r=I(),_(t.$$.fragment),n=I(),_(l.$$.fragment),f=I(),_(s.$$.fragment),a=I(),_(h.$$.fragment)},l(o){g(e.$$.fragment,o),r=S(o),g(t.$$.fragment,o),n=S(o),g(l.$$.fragment,o),f=S(o),g(s.$$.fragment,o),a=S(o),g(h.$$.fragment,o)},m(o,$){w(e,o,$),m(o,r,$),w(t,o,$),m(o,n,$),w(l,o,$),m(o,f,$),w(s,o,$),m(o,a,$),w(h,o,$),v=!0},p(o,$){const b={};$&64&&(b.$$scope={dirty:$,ctx:o}),e.$set(b);const C={};$&64&&(C.$$scope={dirty:$,ctx:o}),t.$set(C);const L={};$&64&&(L.$$scope={dirty:$,ctx:o}),l.$set(L);const Q={};$&64&&(Q.$$scope={dirty:$,ctx:o}),s.$set(Q);const U={};$&64&&(U.$$scope={dirty:$,ctx:o}),h.$set(U)},i(o){v||(c(e.$$.fragment,o),c(t.$$.fragment,o),c(l.$$.fragment,o),c(s.$$.fragment,o),c(h.$$.fragment,o),v=!0)},o(o){p(e.$$.fragment,o),p(t.$$.fragment,o),p(l.$$.fragment,o),p(s.$$.fragment,o),p(h.$$.fragment,o),v=!1},d(o){d(e,o),o&&u(r),d(t,o),o&&u(n),d(l,o),o&&u(f),d(s,o),o&&u(a),d(h,o)}}}function je(i){let e,r,t,n,l,f;return Z(i[2]),e=new Y({props:{className:"p-16 primary center_col gap-8 text-center",$$slots:{default:[We]},$$scope:{ctx:i}}}),t=new Y({props:{className:"p-8 pt-16",$$slots:{default:[Ge]},$$scope:{ctx:i}}}),{c(){_(e.$$.fragment),r=I(),_(t.$$.fragment)},l(s){g(e.$$.fragment,s),r=S(s),g(t.$$.fragment,s)},m(s,a){w(e,s,a),m(s,r,a),w(t,s,a),n=!0,l||(f=y(window,"resize",i[2]),l=!0)},p(s,[a]){const h={};a&64&&(h.$$scope={dirty:a,ctx:s}),e.$set(h);const v={};a&64&&(v.$$scope={dirty:a,ctx:s}),t.$set(v)},i(s){n||(c(e.$$.fragment,s),c(t.$$.fragment,s),n=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),n=!1},d(s){d(e,s),s&&u(r),d(t,s),l=!1,f()}}}const Je=()=>{},Oe=()=>{},Ke=()=>{},Le=()=>{};function Qe(i,e,r){let t,n;function l(){r(0,t=window.innerWidth),r(1,n=window.innerHeight)}return[t,n,l]}class tt extends B{constructor(e){super(),W(this,e,Qe,je,q,{})}}export{tt as component};
