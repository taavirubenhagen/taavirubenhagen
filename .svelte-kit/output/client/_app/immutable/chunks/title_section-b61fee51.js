import{Q as se,R as ne,B as T,S as P,i as Q,s as R,k as p,l as w,m as y,h as _,M as N,n as u,b as S,G as z,I as oe,w as B,x as D,y as W,H as U,f as h,t as v,z as X,C as le,a as re,c as ie,D as ae,E as ce,F as fe,g as ue,d as de,p as j}from"./index-983822e5.js";import{a as me,I as J}from"./index-40bdc24d.js";/* empty css                                             *//* empty css               */const m={$(s){return typeof s=="string"?document.querySelector(s):s},extend(...s){return Object.assign(...s)},cumulativeOffset(s){let e=0,t=0;do e+=s.offsetTop||0,t+=s.offsetLeft||0,s=s.offsetParent;while(s);return{top:e,left:t}},directScroll(s){return s&&s!==document&&s!==document.body},scrollTop(s,e){let t=e!==void 0;return this.directScroll(s)?t?s.scrollTop=e:s.scrollTop:t?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(s,e){let t=e!==void 0;return this.directScroll(s)?t?s.scrollLeft=e:s.scrollLeft:t?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}},_e={container:"body",duration:500,delay:0,offset:0,easing:me,onStart:T,onDone:T,onAborting:T,scrollX:!1,scrollY:!0},he=s=>{let{offset:e,duration:t,delay:i,easing:r,x:l=0,y:o=0,scrollX:n,scrollY:a,onStart:c,onDone:b,container:g,onAborting:O,element:f}=s;typeof e=="function"&&(e=e());var Y=m.cumulativeOffset(g),q=f?m.cumulativeOffset(f):{top:o,left:l},H=m.scrollLeft(g),V=m.scrollTop(g),K=q.left-Y.left+e,Z=q.top-Y.top+e,x=K-H,$=Z-V;let A=!0,C=!1,E=se()+i,ee=E+t;function te(d,L,k){n&&m.scrollLeft(d,k),a&&m.scrollTop(d,L)}function G(d){d||(C=!0,c(f,{x:l,y:o}))}function I(d){te(g,V+$*d,H+x*d)}function M(){A=!1}return ne(d=>{if(!C&&d>=E&&G(!1),C&&d>=ee&&(I(1),M(),b(f,{x:l,y:o})),!A)return O(f,{x:l,y:o}),!1;if(C){const L=d-E,k=0+1*r(L/t);I(k)}return!0}),G(i),I(0),M},ge=s=>{let e=m.extend({},_e,s);return e.container=m.$(e.container),e.element=m.$(e.element),e},ve=s=>he(ge(s));function pe(s){let e,t,i,r,l;return{c(){e=p("div"),t=p("img"),this.h()},l(o){e=w(o,"DIV",{class:!0});var n=y(e);t=w(n,"IMG",{src:!0,alt:!0,class:!0}),n.forEach(_),this.h()},h(){N(t.src,i="icons/"+s[3]+".svg")||u(t,"src",i),u(t,"alt","Icon"),u(t,"class",r=s[2]+" "+(s[0]?"invert":"")),u(e,"class",l="w-"+s[1]+" h-"+s[1])},m(o,n){S(o,e,n),z(e,t)},p(o,[n]){n&8&&!N(t.src,i="icons/"+o[3]+".svg")&&u(t,"src",i),n&5&&r!==(r=o[2]+" "+(o[0]?"invert":""))&&u(t,"class",r),n&2&&l!==(l="w-"+o[1]+" h-"+o[1])&&u(e,"class",l)},i:T,o:T,d(o){o&&_(e)}}}function we(s,e,t){let{isWhite:i=!1}=e,{size:r="0"}=e,{iconClass:l=""}=e,{name:o}=e;return s.$$set=n=>{"isWhite"in n&&t(0,i=n.isWhite),"size"in n&&t(1,r=n.size),"iconClass"in n&&t(2,l=n.iconClass),"name"in n&&t(3,o=n.name)},[i,r,l,o]}class be extends P{constructor(e){super(),Q(this,e,we,pe,R,{isWhite:0,size:1,iconClass:2,name:3})}}function F(s){let e,t,i;return t=new J({props:{state:"hover",$$slots:{default:[Te]},$$scope:{ctx:s}}}),{c(){e=p("div"),B(t.$$.fragment),this.h()},l(r){e=w(r,"DIV",{class:!0});var l=y(e);D(t.$$.fragment,l),l.forEach(_),this.h()},h(){u(e,"class","absolute left-0 bottom-0")},m(r,l){S(r,e,l),W(t,e,null),i=!0},p(r,l){const o={};l&547&&(o.$$scope={dirty:l,ctx:r}),t.$set(o)},i(r){i||(h(t.$$.fragment,r),i=!0)},o(r){v(t.$$.fragment,r),i=!1},d(r){r&&_(e),X(t)}}}function Te(s){let e,t,i,r,l,o;return i=new be({props:{isWhite:s[1],name:"outfyx_flat_arrow_down"}}),{c(){e=p("button"),t=p("div"),B(i.$$.fragment),this.h()},l(n){e=w(n,"BUTTON",{class:!0});var a=y(e);t=w(a,"DIV",{class:!0,style:!0});var c=y(t);D(i.$$.fragment,c),c.forEach(_),a.forEach(_),this.h()},h(){u(t,"class","w-24 h-24 p-8 hover:p-7"),j(t,"transition-duration","200ms"),j(t,"transition-timing-function","cubic-bezier(.2, 0, .2, 1)"),u(e,"class","w-screen flex_row_center")},m(n,a){S(n,e,a),z(e,t),W(i,t,null),r=!0,l||(o=U(e,"click",s[8]),l=!0)},p(n,a){const c={};a&2&&(c.isWhite=n[1]),i.$set(c)},i(n){r||(h(i.$$.fragment,n),r=!0)},o(n){v(i.$$.fragment,n),r=!1},d(n){n&&_(e),X(i),l=!1,o()}}}function ye(s){let e,t,i,r;const l=s[6].default,o=le(l,s,s[9],null);let n=s[2]&&F(s);return{c(){e=p("section"),o&&o.c(),t=re(),n&&n.c(),this.h()},l(a){e=w(a,"SECTION",{class:!0});var c=y(e);o&&o.l(c),t=ie(c),n&&n.l(c),c.forEach(_),this.h()},h(){u(e,"class",i=s[4]+" w-screen h-screen "+(s[1]?"primary":"background")+" p-8 md:p-16 flex_col_center relative text-center")},m(a,c){S(a,e,c),o&&o.m(e,null),z(e,t),n&&n.m(e,null),r=!0},p(a,c){o&&o.p&&(!r||c&512)&&ae(o,l,a,a[9],r?fe(l,a[9],c,null):ce(a[9]),null),a[2]?n?(n.p(a,c),c&4&&h(n,1)):(n=F(a),n.c(),h(n,1),n.m(e,null)):n&&(ue(),v(n,1,1,()=>{n=null}),de()),(!r||c&18&&i!==(i=a[4]+" w-screen h-screen "+(a[1]?"primary":"background")+" p-8 md:p-16 flex_col_center relative text-center"))&&u(e,"class",i)},i(a){r||(h(o,a),h(n),r=!0)},o(a){v(o,a),v(n),r=!1},d(a){a&&_(e),o&&o.d(a),n&&n.d()}}}function Ce(s){let e,t,i,r;return oe(s[7]),e=new J({props:{state:s[3],$$slots:{default:[ye]},$$scope:{ctx:s}}}),{c(){B(e.$$.fragment)},l(l){D(e.$$.fragment,l)},m(l,o){W(e,l,o),t=!0,i||(r=U(window,"resize",s[7]),i=!0)},p(l,[o]){const n={};o&8&&(n.state=l[3]),o&567&&(n.$$scope={dirty:o,ctx:l}),e.$set(n)},i(l){t||(h(e.$$.fragment,l),t=!0)},o(l){v(e.$$.fragment,l),t=!1},d(l){X(e,l),i=!1,r()}}}function Se(s,e,t){let{$$slots:i={},$$scope:r}=e,{index:l}=e,{primary:o=!1}=e,{scrollButton:n=!0}=e,{sectionCursorState:a=""}=e,{sectionClass:c=""}=e,b;function g(){t(5,b=window.innerHeight)}const O=()=>ve({y:b*(l+1)});return s.$$set=f=>{"index"in f&&t(0,l=f.index),"primary"in f&&t(1,o=f.primary),"scrollButton"in f&&t(2,n=f.scrollButton),"sectionCursorState"in f&&t(3,a=f.sectionCursorState),"sectionClass"in f&&t(4,c=f.sectionClass),"$$scope"in f&&t(9,r=f.$$scope)},[l,o,n,a,c,b,i,g,O,r]}class ke extends P{constructor(e){super(),Q(this,e,Se,Ce,R,{index:0,primary:1,scrollButton:2,sectionCursorState:3,sectionClass:4})}}export{ke as T};
