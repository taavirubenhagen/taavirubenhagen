import{S as C,i as D,s as N,e as g,q as E,r as $,a as d,b as w,v as P,w as h,d as u,f as m,g as I,y as S,n as i,t as U,k as y,B,I as j,l as L,m as Y}from"../chunks/index.22bfdd9c.js";import{c as H,P as M,a as R}from"../chunks/index.7265af3d.js";/* empty css                       */import{L as T}from"../chunks/LargeHeading.7150e9f5.js";import{T as W}from"../chunks/text_button.ef0d2c8e.js";function q(o){let t;return{c(){t=L("Join Waitlist")},l(e){t=Y(e,"Join Waitlist")},m(e,n){I(e,t,n)},d(e){e&&u(t)}}}function J(o){let t;return{c(){t=L("Sign up")},l(e){t=Y(e,"Sign up")},m(e,n){I(e,t,n)},d(e){e&&u(t)}}}function O(o){let t,e,n,l,_,c,x,f,v,r,p;return e=new T({props:{$$slots:{default:[q]},$$scope:{ctx:o}}}),r=new W({props:{large:!0,primary:!0,$$slots:{default:[J]},$$scope:{ctx:o}}}),{c(){t=g("main"),E(e.$$.fragment),n=$(),l=g("div"),_=$(),c=g("input"),x=$(),f=g("div"),v=$(),E(r.$$.fragment),this.h()},l(s){t=d(s,"MAIN",{class:!0});var a=w(t);P(e.$$.fragment,a),n=h(a),l=d(a,"DIV",{class:!0}),w(l).forEach(u),_=h(a),c=d(a,"INPUT",{type:!0,placeholder:!0,class:!0}),x=h(a),f=d(a,"DIV",{class:!0}),w(f).forEach(u),v=h(a),P(r.$$.fragment,a),a.forEach(u),this.h()},h(){m(l,"class","h-16"),m(c,"type","text"),m(c,"placeholder","Enter E-Mail"),m(c,"class","outline-none rounded-full border-2 border-primary w-full md:w-1/2 h-16 text-center text-xl"),m(f,"class","h-16"),m(t,"class","max-w-screen min-h-screen p-8 flex flex-col justify-center items-start md:items-center font-sans")},m(s,a){I(s,t,a),S(e,t,null),i(t,n),i(t,l),i(t,_),i(t,c),i(t,x),i(t,f),i(t,v),S(r,t,null),p=!0},p(s,[a]){const b={};a&8&&(b.$$scope={dirty:a,ctx:s}),e.$set(b);const A={};a&8&&(A.$$scope={dirty:a,ctx:s}),r.$set(A)},i(s){p||(U(e.$$.fragment,s),U(r.$$.fragment,s),p=!0)},o(s){y(e.$$.fragment,s),y(r.$$.fragment,s),p=!1},d(s){s&&u(t),B(e),B(r)}}}function V(o){let t;async function e(){let{data:n,error:l}=await t.auth.signInWithPassword({email:"taavi.ruebenhagen@gmail.com",password:"tZgvsgsYoRYBAHxDItij"});n!=null&&n.user||await t.auth.signUp({email:"taavi.ruebenhagen@gmail.com",password:"tZgvsgsYoRYBAHxDItij"})}return j(()=>{t=H(R,M),e()}),[]}class G extends C{constructor(t){super(),D(this,t,V,O,N,{})}}export{G as component};
