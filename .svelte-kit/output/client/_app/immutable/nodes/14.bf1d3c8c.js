import{S as C,i as D,s as N,e as $,x as E,m as d,a as h,b as w,y as P,o as _,d as u,f as m,g as I,z as S,p as i,t as U,k as y,A as B,E as j,l as M,n as Y}from"../chunks/index.dffb363a.js";import{c as L,P as R,a as T}from"../chunks/index.7265af3d.js";/* empty css                       */import{M as W}from"../chunks/main_headline.51c21012.js";import{T as H}from"../chunks/text_button.60016ec1.js";function J(o){let t;return{c(){t=M("Join Waitlist")},l(e){t=Y(e,"Join Waitlist")},m(e,s){I(e,t,s)},d(e){e&&u(t)}}}function O(o){let t;return{c(){t=M("Sign up")},l(e){t=Y(e,"Sign up")},m(e,s){I(e,t,s)},d(e){e&&u(t)}}}function V(o){let t,e,s,l,g,c,x,p,v,r,f;return e=new W({props:{$$slots:{default:[J]},$$scope:{ctx:o}}}),r=new H({props:{large:!0,primary:!0,$$slots:{default:[O]},$$scope:{ctx:o}}}),{c(){t=$("main"),E(e.$$.fragment),s=d(),l=$("div"),g=d(),c=$("input"),x=d(),p=$("div"),v=d(),E(r.$$.fragment),this.h()},l(n){t=h(n,"MAIN",{class:!0});var a=w(t);P(e.$$.fragment,a),s=_(a),l=h(a,"DIV",{class:!0}),w(l).forEach(u),g=_(a),c=h(a,"INPUT",{type:!0,placeholder:!0,class:!0}),x=_(a),p=h(a,"DIV",{class:!0}),w(p).forEach(u),v=_(a),P(r.$$.fragment,a),a.forEach(u),this.h()},h(){m(l,"class","h-16"),m(c,"type","text"),m(c,"placeholder","Enter E-Mail"),m(c,"class","outline-none rounded-full border-2 border-primary w-full md:w-1/2 h-16 text-center text-xl"),m(p,"class","h-16"),m(t,"class","max-w-screen min-h-screen p-8 flex flex-col justify-center items-start md:items-center font-sans")},m(n,a){I(n,t,a),S(e,t,null),i(t,s),i(t,l),i(t,g),i(t,c),i(t,x),i(t,p),i(t,v),S(r,t,null),f=!0},p(n,[a]){const b={};a&8&&(b.$$scope={dirty:a,ctx:n}),e.$set(b);const A={};a&8&&(A.$$scope={dirty:a,ctx:n}),r.$set(A)},i(n){f||(U(e.$$.fragment,n),U(r.$$.fragment,n),f=!0)},o(n){y(e.$$.fragment,n),y(r.$$.fragment,n),f=!1},d(n){n&&u(t),B(e),B(r)}}}function Z(o){let t;async function e(){let{data:s,error:l}=await t.auth.signInWithPassword({email:"taavi.ruebenhagen@gmail.com",password:"tZgvsgsYoRYBAHxDItij"});s!=null&&s.user||await t.auth.signUp({email:"taavi.ruebenhagen@gmail.com",password:"tZgvsgsYoRYBAHxDItij"})}return j(()=>{t=L(T,R),e()}),[]}class G extends C{constructor(t){super(),D(this,t,Z,V,N,{})}}export{G as component};