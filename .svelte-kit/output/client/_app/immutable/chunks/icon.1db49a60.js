import{S as h,i as _,s as o,l as g,o as v,E as C,r,H as c,g as z,F as f,h as d}from"./index.84ea942b.js";import{t as I}from"./ua-parser.da195932.js";function q(n){let e,l,s;return{c(){e=g("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,alt:!0,class:!0,style:!0}),this.h()},h(){C(e.src,l=n[3])||r(e,"src",l),r(e,"alt",n[0]),r(e,"class",s=n[1]?"invert":""),c(e,"height",n[2]/16*1.25+"rem")},m(t,a){z(t,e,a)},p(t,[a]){a&1&&r(e,"alt",t[0]),a&2&&s!==(s=t[1]?"invert":"")&&r(e,"class",s),a&4&&c(e,"height",t[2]/16*1.25+"rem")},i:f,o:f,d(t){t&&d(e)}}}function y(n,e,l){let{name:s}=e,{inverted:t=!1}=e,{size:a=16}=e,{textClass:m=""}=e;const u=`./${I}/${s}.svg`;return n.$$set=i=>{"name"in i&&l(0,s=i.name),"inverted"in i&&l(1,t=i.inverted),"size"in i&&l(2,a=i.size),"textClass"in i&&l(4,m=i.textClass)},[s,t,a,u,m]}class E extends h{constructor(e){super(),_(this,e,y,q,o,{name:0,inverted:1,size:2,textClass:4})}}export{E as I};
