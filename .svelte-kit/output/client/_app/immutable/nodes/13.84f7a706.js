import{S as Y,i as C,s as N,e as g,k as E,v as $,c as d,a as w,l as P,w as h,d as u,f as m,g as I,m as S,h as i,p as U,q as y,r as B,D as j,t as D,b as L}from"../chunks/index.f3cbe732.js";import{c as H,P as M,a as R}from"../chunks/index.7265af3d.js";/* empty css                       */import{L as T}from"../chunks/LargeHeading.875d398a.js";import{T as W}from"../chunks/text_button.b9b6ebbc.js";function q(o){let t;return{c(){t=D("Join Waitlist")},l(e){t=L(e,"Join Waitlist")},m(e,n){I(e,t,n)},d(e){e&&u(t)}}}function J(o){let t;return{c(){t=D("Sign up")},l(e){t=L(e,"Sign up")},m(e,n){I(e,t,n)},d(e){e&&u(t)}}}function O(o){let t,e,n,l,_,c,x,p,v,r,f;return e=new T({props:{$$slots:{default:[q]},$$scope:{ctx:o}}}),r=new W({props:{large:!0,primary:!0,$$slots:{default:[J]},$$scope:{ctx:o}}}),{c(){t=g("main"),E(e.$$.fragment),n=$(),l=g("div"),_=$(),c=g("input"),x=$(),p=g("div"),v=$(),E(r.$$.fragment),this.h()},l(s){t=d(s,"MAIN",{class:!0});var a=w(t);P(e.$$.fragment,a),n=h(a),l=d(a,"DIV",{class:!0}),w(l).forEach(u),_=h(a),c=d(a,"INPUT",{type:!0,placeholder:!0,class:!0}),x=h(a),p=d(a,"DIV",{class:!0}),w(p).forEach(u),v=h(a),P(r.$$.fragment,a),a.forEach(u),this.h()},h(){m(l,"class","h-16"),m(c,"type","text"),m(c,"placeholder","Enter E-Mail"),m(c,"class","outline-none rounded-full border-2 border-primary w-full md:w-1/2 h-16 text-center text-xl"),m(p,"class","h-16"),m(t,"class","max-w-screen min-h-screen p-8 flex flex-col justify-center items-start md:items-center font-sans")},m(s,a){I(s,t,a),S(e,t,null),i(t,n),i(t,l),i(t,_),i(t,c),i(t,x),i(t,p),i(t,v),S(r,t,null),f=!0},p(s,[a]){const b={};a&8&&(b.$$scope={dirty:a,ctx:s}),e.$set(b);const A={};a&8&&(A.$$scope={dirty:a,ctx:s}),r.$set(A)},i(s){f||(U(e.$$.fragment,s),U(r.$$.fragment,s),f=!0)},o(s){y(e.$$.fragment,s),y(r.$$.fragment,s),f=!1},d(s){s&&u(t),B(e),B(r)}}}function V(o){let t;async function e(){let{data:n,error:l}=await t.auth.signInWithPassword({email:"taavi.ruebenhagen@gmail.com",password:"tZgvsgsYoRYBAHxDItij"});n!=null&&n.user||await t.auth.signUp({email:"taavi.ruebenhagen@gmail.com",password:"tZgvsgsYoRYBAHxDItij"})}return j(()=>{t=H(R,M),e()}),[]}class G extends Y{constructor(t){super(),C(this,t,V,O,N,{})}}export{G as component};