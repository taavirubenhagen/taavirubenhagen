import{S as E,i as T,s as B,c as v,a as b,m as $,t as k,b as S,d as w,l as p,j as D,n as _,o as I,h,k as M,p as f,g as P,u as g,w as y,x as C,y as V,v as j}from"./index.f57fbee0.js";/* empty css               */import{M as q,B as F}from"./Button.b9e2ede8.js";import{I as N}from"./RawButton.70d03cf9.js";import"./paths.c9d48398.js";function U(s){let t,a;return t=new N({props:{name:"arrow-right"}}),{c(){v(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,o){$(t,e,o),a=!0},p:j,i(e){a||(k(t.$$.fragment,e),a=!0)},o(e){S(t.$$.fragment,e),a=!1},d(e){w(t,e)}}}function z(s){let t,a,e,o,u,i,l,m,d;return i=new F({props:{borderClass:"border-l-0",onClick:s[7],$$slots:{default:[U]},$$scope:{ctx:s}}}),{c(){t=p("div"),a=p("div"),e=p("input"),u=D(),v(i.$$.fragment),this.h()},l(r){t=_(r,"DIV",{class:!0});var n=I(t);a=_(n,"DIV",{class:!0});var c=I(a);e=_(c,"INPUT",{type:!0,class:!0,placeholder:!0}),c.forEach(h),u=M(n),b(i.$$.fragment,n),n.forEach(h),this.h()},h(){f(e,"type","text"),e.autofocus=s[1],f(e,"class","outline-none h-full px-1 text-xl"),f(e,"placeholder",s[3]),f(a,"class",o=(s[0]?"invert":"")+" border-2 border-primary"),f(t,"class","flex")},m(r,n){P(r,t,n),g(t,a),g(a,e),y(e,s[4]),g(t,u),$(i,t,null),l=!0,s[1]&&e.focus(),m||(d=[C(e,"input",s[5]),C(e,"keypress",s[6])],m=!0)},p(r,n){(!l||n&2)&&(e.autofocus=r[1]),(!l||n&8)&&f(e,"placeholder",r[3]),n&16&&e.value!==r[4]&&y(e,r[4]),(!l||n&1&&o!==(o=(r[0]?"invert":"")+" border-2 border-primary"))&&f(a,"class",o);const c={};n&20&&(c.onClick=r[7]),n&256&&(c.$$scope={dirty:n,ctx:r}),i.$set(c)},i(r){l||(k(i.$$.fragment,r),l=!0)},o(r){S(i.$$.fragment,r),l=!1},d(r){r&&h(t),w(i),m=!1,V(d)}}}function A(s){let t,a;return t=new q({props:{$$slots:{default:[z]},$$scope:{ctx:s}}}),{c(){v(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,o){$(t,e,o),a=!0},p(e,[o]){const u={};o&287&&(u.$$scope={dirty:o,ctx:e}),t.$set(u)},i(e){a||(k(t.$$.fragment,e),a=!0)},o(e){S(t.$$.fragment,e),a=!1},d(e){w(t,e)}}}function G(s,t,a){let{inverted:e=!1}=t,{autofocus:o=!1}=t,{onSubmit:u}=t,{placeholder:i=""}=t,l="";function m(){l=this.value,a(4,l)}const d=n=>n.key==="Enter"?u(l):null,r=()=>u(l);return s.$$set=n=>{"inverted"in n&&a(0,e=n.inverted),"autofocus"in n&&a(1,o=n.autofocus),"onSubmit"in n&&a(2,u=n.onSubmit),"placeholder"in n&&a(3,i=n.placeholder)},[e,o,u,i,l,m,d,r]}class Q extends E{constructor(t){super(),T(this,t,G,A,B,{inverted:0,autofocus:1,onSubmit:2,placeholder:3})}}export{Q as T};
