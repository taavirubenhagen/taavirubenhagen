import{N as ge,S as De,i as Ue,s as Ce,m as k,e as h,l as L,x as ye,o as T,a as _,b as v,n as M,d as a,y as we,f as i,g as N,p as n,O as re,z as $e,v as J,t as H,k as Ee,w as Ae,A as ke,G as Se,E as Oe,r as Re,P as Le,q as Me,Q as Ne}from"../chunks/index.7cc8941a.js";/* empty css                       */import{T as Te}from"../chunks/text_button.d72fceee.js";function je(o){const t=o-1;return t*t*t+1}function Be(o,{delay:t=0,duration:e=400,easing:s=je,x:u=0,y:l=0,opacity:c=0}={}){const d=getComputedStyle(o),$=+d.opacity,g=d.transform==="none"?"":d.transform,p=$*(1-c),[E,D]=ge(u),[j,q]=ge(l);return{delay:t,duration:e,easing:s,css:(B,m)=>`
			transform: ${g} translate(${(1-B)*E}${D}, ${(1-B)*j}${q});
			opacity: ${$-p*m}`}}function xe(o,t,e){const s=o.slice();return s[13]=t[e],s[15]=e,s}function Ie(o){let t,e=o[15]+1+"",s,u,l,c,d;function $(){return o[6](o[15])}return{c(){t=h("button"),s=L(e),u=k(),this.h()},l(g){t=_(g,"BUTTON",{class:!0});var p=v(t);s=M(p,e),u=T(p),p.forEach(a),this.h()},h(){i(t,"class",l="transition-all rounded-lg border hover:border-2 border-primary w-12 h-12 "+(o[0]==o[15]?"primary":""))},m(g,p){N(g,t,p),n(t,s),n(t,u),c||(d=J(t,"click",$),c=!0)},p(g,p){o=g,p&1&&l!==(l="transition-all rounded-lg border hover:border-2 border-primary w-12 h-12 "+(o[0]==o[15]?"primary":""))&&i(t,"class",l)},d(g){g&&a(t),c=!1,d()}}}function Pe(o){let t;return{c(){t=L("Listen only")},l(e){t=M(e,"Listen only")},m(e,s){N(e,t,s)},d(e){e&&a(t)}}}function Xe(o){let t;return{c(){t=L("Listen & Download")},l(e){t=M(e,"Listen & Download")},m(e,s){N(e,t,s)},d(e){e&&a(t)}}}function Ve(o){let t,e,s,u;return{c(){t=h("button"),e=h("a"),s=L("✓"),this.h()},l(l){t=_(l,"BUTTON",{});var c=v(t);e=_(c,"A",{download:!0,href:!0,class:!0});var d=v(e);s=M(d,"✓"),d.forEach(a),c.forEach(a),this.h()},h(){i(e,"download","Recorded Audio"),i(e,"href",o[4]),i(e,"class","transition-all ml-8 hover:invert rounded-full border-2 border-primary w-14 h-14 background flex_row_center")},m(l,c){N(l,t,c),n(t,e),n(e,s)},p(l,c){c&16&&i(e,"href",l[4])},i(l){u||Re(()=>{u=Le(t,Be,{duration:1600}),u.start()})},o:Me,d(l){l&&a(t)}}}function qe(o){let t,e,s,u,l,c,d,$,g,p,E,D,j,q,B,m,I,oe,ne,Q,se,V,ae,U,le,A,S,ce,C,O,ie,K,P,z,Y,ue,W,fe,he,F=Array(10),y=[];for(let r=0;r<F.length;r+=1)y[r]=Ie(xe(o,F,r));S=new Te({props:{onClicked:o[10],$$slots:{default:[Pe]},$$scope:{ctx:o}}}),O=new Te({props:{buttonClass:"w-full",onClicked:o[11],$$slots:{default:[Xe]},$$scope:{ctx:o}}});let b=o[4]&&Ve(o);return{c(){t=k(),e=h("main"),s=h("div"),u=h("div"),l=h("t3"),c=L("Convert text to speech."),d=k(),$=h("div"),g=k(),p=h("div"),E=h("div"),D=h("t1"),j=L("Voice"),q=k();for(let r=0;r<y.length;r+=1)y[r].c();B=k(),m=h("div"),I=h("button"),oe=L("X"),ne=k(),Q=h("div"),se=k(),V=h("input"),ae=k(),U=h("textarea"),le=k(),A=h("div"),ye(S.$$.fragment),ce=k(),C=h("div"),ye(O.$$.fragment),ie=k(),b&&b.c(),K=k(),P=h("footer"),z=h("a"),Y=h("t1"),ue=L("Contact"),this.h()},l(r){t=T(r),e=_(r,"MAIN",{class:!0});var f=v(e);s=_(f,"DIV",{class:!0});var x=v(s);u=_(x,"DIV",{});var R=v(u);l=_(R,"T3",{});var w=v(l);c=M(w,"Convert text to speech."),w.forEach(a),d=T(R),$=_(R,"DIV",{class:!0}),v($).forEach(a),R.forEach(a),g=T(x),p=_(x,"DIV",{class:!0});var X=v(p);E=_(X,"DIV",{class:!0});var Z=v(E);D=_(Z,"T1",{class:!0});var _e=v(D);j=M(_e,"Voice"),_e.forEach(a),q=T(Z);for(let de=0;de<y.length;de+=1)y[de].l(Z);Z.forEach(a),B=T(X),m=_(X,"DIV",{class:!0});var G=v(m);I=_(G,"BUTTON",{});var pe=v(I);oe=M(pe,"X"),pe.forEach(a),ne=T(G),Q=_(G,"DIV",{class:!0}),v(Q).forEach(a),se=T(G),V=_(G,"INPUT",{type:!0,min:!0,max:!0,class:!0}),G.forEach(a),X.forEach(a),x.forEach(a),ae=T(f),U=_(f,"TEXTAREA",{class:!0,placeholder:!0}),v(U).forEach(a),le=T(f),A=_(f,"DIV",{class:!0});var ee=v(A);we(S.$$.fragment,ee),ce=T(ee),C=_(ee,"DIV",{class:!0});var te=v(C);we(O.$$.fragment,te),ie=T(te),b&&b.l(te),te.forEach(a),ee.forEach(a),f.forEach(a),K=T(r),P=_(r,"FOOTER",{class:!0});var me=v(P);z=_(me,"A",{href:!0});var ve=v(z);Y=_(ve,"T1",{});var be=v(Y);ue=M(be,"Contact"),be.forEach(a),ve.forEach(a),me.forEach(a),this.h()},h(){i($,"class","h-16"),i(D,"class","mr-4 h-12 flex_row_center"),i(E,"class","flex flex-wrap items-start justify-start gap-1"),i(Q,"class","w-8"),i(V,"type","range"),i(V,"min",30),i(V,"max",300),i(V,"class","accent-primary"),i(m,"class","flex"),i(p,"class","flex justify-between"),i(s,"class","flex sm:flex-col justify-between"),i(U,"class","my-16 rounded-lg border border-primary w-full h-full p-4"),i(U,"placeholder","Enter your text here. You can convert as much text as you like - for free."),i(C,"class","flex"),i(A,"class","grid grid-cols-2 gap-8"),i(e,"class","h-screen p-16 flex flex-col justify-between font-mono"),i(z,"href","/contact"),i(P,"class","h-16 primary flex_row_center font-mono")},m(r,f){N(r,t,f),N(r,e,f),n(e,s),n(s,u),n(u,l),n(l,c),n(u,d),n(u,$),n(s,g),n(s,p),n(p,E),n(E,D),n(D,j),n(E,q);for(let x=0;x<y.length;x+=1)y[x]&&y[x].m(E,null);n(p,B),n(p,m),n(m,I),n(I,oe),n(m,ne),n(m,Q),n(m,se),n(m,V),re(V,o[1]),n(e,ae),n(e,U),re(U,o[2]),n(e,le),n(e,A),$e(S,A,null),n(A,ce),n(A,C),$e(O,C,null),n(C,ie),b&&b.m(C,null),N(r,K,f),N(r,P,f),n(P,z),n(z,Y),n(Y,ue),W=!0,fe||(he=[J(I,"click",o[7]),J(V,"change",o[8]),J(V,"input",o[8]),J(U,"input",o[9])],fe=!0)},p(r,[f]){if(f&1){F=Array(10);let w;for(w=0;w<F.length;w+=1){const X=xe(r,F,w);y[w]?y[w].p(X,f):(y[w]=Ie(X),y[w].c(),y[w].m(E,null))}for(;w<y.length;w+=1)y[w].d(1);y.length=F.length}f&2&&re(V,r[1]),f&4&&re(U,r[2]);const x={};f&65536&&(x.$$scope={dirty:f,ctx:r}),S.$set(x);const R={};f&8&&(R.onClicked=r[11]),f&65536&&(R.$$scope={dirty:f,ctx:r}),O.$set(R),r[4]?b?(b.p(r,f),f&16&&H(b,1)):(b=Ve(r),b.c(),H(b,1),b.m(C,null)):b&&(b.d(1),b=null)},i(r){W||(H(S.$$.fragment,r),H(O.$$.fragment,r),H(b),W=!0)},o(r){Ee(S.$$.fragment,r),Ee(O.$$.fragment,r),W=!1},d(r){r&&a(t),r&&a(e),Ae(y,r),ke(S),ke(O),b&&b.d(),r&&a(K),r&&a(P),fe=!1,Se(he)}}}function ze(o,t,e){let s=3,u=100,l="",c,d,$,g=async(m=1)=>{if(!("speechSynthesis"in window)){alert("Sorry, your browser does not support text-to-speech yet");return}c||(c=new SpeechSynthesisUtterance(l),c.onend=I=>d.state=="recording"?d.stop():I),c.text=l,c.volume=Math.round(m),c.voice=window.speechSynthesis.getVoices()[s],c.rate=Math.fround((u/100)**2+.05),window.speechSynthesis.speak(c)};Oe(()=>{navigator.mediaDevices.getUserMedia({audio:!0}).then(m=>{e(3,d=new MediaRecorder(m,{mimeType:"audio/webm"})),e(3,d.ondataavailable=I=>{console.log("Data available:",I.data),e(4,$=URL.createObjectURL(I.data))},d)}).catch(m=>console.error(`Error setting up the media recorder: ${m}`))});const p=m=>e(0,s=m),E=()=>e(1,u=100);function D(){u=Ne(this.value),e(1,u)}function j(){l=this.value,e(2,l)}return[s,u,l,d,$,g,p,E,D,j,()=>g(1),()=>{d.state!="recording"&&d.start(),g(1)}]}class Ye extends De{constructor(t){super(),Ue(this,t,ze,qe,Ce,{})}}export{Ye as component};
