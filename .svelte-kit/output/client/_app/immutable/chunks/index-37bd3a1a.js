function p(){}const Q=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function G(){return Object.create(null)}function w(t){t.forEach(U)}function P(t){return typeof t=="function"}function ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Rt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function mt(t){return Object.keys(t).length===0}function W(t,...e){if(t==null)return p;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t){let e;return W(t,n=>e=n)(),e}function Bt(t,e,n){t.$$.on_destroy.push(W(e,n))}function Lt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Ht(t,e,n,i,r,l){if(r){const c=V(e,n,i,l);t.p(c,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Gt(t,e,n){return t.set(n),e}const X=typeof window<"u";let Y=X?()=>window.performance.now():()=>Date.now(),F=X?t=>requestAnimationFrame(t):p;const $=new Set;function Z(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&F(Z)}function tt(t){let e;return $.size===0&&F(Z),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let D=!1;function pt(){D=!0}function yt(){D=!1}function gt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let s=0;s<e.length;s++){const a=e[s];a.claim_order!==void 0&&u.push(a)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let u=0;u<e.length;u++){const s=e[u].claim_order,a=(r>0&&e[n[r]].claim_order<=s?r+1:gt(1,r,_=>e[n[_]].claim_order,s))-1;i[u]=n[a]+1;const f=a+1;n[f]=u,r=Math.max(f,r)}const l=[],c=[];let o=e.length-1;for(let u=n[r]+1;u!=0;u=i[u-1]){for(l.push(e[u-1]);o>=u;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((u,s)=>u.claim_order-s.claim_order);for(let u=0,s=0;u<c.length;u++){for(;s<l.length&&c[u].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(c[u],a)}}function xt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=it("style");return wt(et(t),e),e.sheet}function wt(t,e){return xt(t.head||t,e),e.sheet}function vt(t,e){if(D){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){D&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function nt(t){t.parentNode&&t.parentNode.removeChild(t)}function Kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function Qt(){return H(" ")}function Ut(){return H("")}function Wt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,r=!1){Nt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,r?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function kt(t,e,n,i){return rt(t,r=>r.nodeName===e,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Xt(t,e,n){return kt(t,e,n,it)}function At(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Yt(t){return At(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ee(t,e){return new t(e)}const M=new Map;let z=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:$t(e),rules:{}};return M.set(t,n),n}function st(t,e,n,i,r,l,c,o=0){const u=16.666/i;let s=`{
`;for(let m=0;m<=1;m+=u){const y=e+(n-e)*l(m);s+=m*100+`%{${c(y,1-y)}}
`}const a=s+`100% {${c(n,1-n)}}
}`,f=`__svelte_${Ct(a)}_${o}`,_=et(t),{stylesheet:d,rules:h}=M.get(_)||jt(_,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${a}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${i}ms linear ${r}ms 1 both`,z+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),z-=r,z||qt())}function qt(){F(()=>{z||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&nt(e)}),M.clear())})}let k;function N(t){k=t}function ct(){if(!k)throw new Error("Function called outside component initialization");return k}function ne(t){ct().$$.on_mount.push(t)}function ie(t){ct().$$.after_update.push(t)}const E=[],J=[],j=[],K=[],ot=Promise.resolve();let L=!1;function ut(){L||(L=!0,ot.then(lt))}function re(){return ut(),ot}function A(t){j.push(t)}const T=new Set;let C=0;function lt(){const t=k;do{for(;C<E.length;){const e=E[C];C++,N(e),Mt(e.$$)}for(N(null),E.length=0,C=0;J.length;)J.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];T.has(n)||(T.add(n),n())}j.length=0}while(E.length);for(;K.length;)K.pop()();L=!1,T.clear(),N(t)}function Mt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}let v;function ft(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function O(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const q=new Set;let b;function se(){b={r:0,c:[],p:b}}function ce(){b.r||w(b.c),b=b.p}function zt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function oe(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),b.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const at={duration:0};function ue(t,e,n){const i={direction:"in"};let r=e(t,n,i),l=!1,c,o,u=0;function s(){c&&B(t,c)}function a(){const{delay:_=0,duration:d=300,easing:h=Q,tick:g=p,css:m}=r||at;m&&(c=st(t,0,1,d,_,h,m,u++)),g(0,1);const y=Y()+_,_t=y+d;o&&o.abort(),l=!0,A(()=>O(t,!0,"start")),o=tt(R=>{if(l){if(R>=_t)return g(1,0),O(t,!0,"end"),s(),l=!1;if(R>=y){const I=h((R-y)/d);g(I,1-I)}}return l})}let f=!1;return{start(){f||(f=!0,B(t),P(r)?(r=r(i),ft().then(a)):a())},invalidate(){f=!1},end(){l&&(s(),l=!1)}}}function le(t,e,n){const i={direction:"out"};let r=e(t,n,i),l=!0,c;const o=b;o.r+=1;function u(){const{delay:s=0,duration:a=300,easing:f=Q,tick:_=p,css:d}=r||at;d&&(c=st(t,1,0,a,s,f,d));const h=Y()+s,g=h+a;A(()=>O(t,!1,"start")),tt(m=>{if(l){if(m>=g)return _(0,1),O(t,!1,"end"),--o.r||w(o.c),!1;if(m>=h){const y=f((m-h)/a);_(1-y,y)}}return l})}return P(r)?ft().then(()=>{r=r(i),u()}):u(),{end(s){s&&r.tick&&r.tick(1,0),l&&(c&&B(t,c),l=!1)}}}function fe(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(U).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...c):w(c),t.$$.on_mount=[]}),l.forEach(A)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(E.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,i,r,l,c,o=[-1]){const u=k;N(t);const s=t.$$={fragment:null,ctx:[],props:l,update:p,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:G(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let a=!1;if(s.ctx=n?n(t,e.props||{},(f,_,...d)=>{const h=d.length?d[0]:_;return s.ctx&&r(s.ctx[f],s.ctx[f]=h)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](h),a&&Dt(t,f)),_}):[],s.update(),a=!0,w(s.before_update),s.fragment=i?i(s.ctx):!1,e.target){if(e.hydrate){pt();const f=Et(e.target);s.fragment&&s.fragment.l(f),f.forEach(nt)}else s.fragment&&s.fragment.c();e.intro&&zt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),yt(),lt()}N(u)}class de{$destroy(){Pt(this,1),this.$destroy=p}$on(e,n){if(!P(n))return p;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!mt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const x=[];function he(t,e=p){let n;const i=new Set;function r(o){if(ht(t,o)&&(t=o,n)){const u=!x.length;for(const s of i)s[1](),x.push(s,t);if(u){for(let s=0;s<x.length;s+=2)x[s][0](x[s+1]);x.length=0}}}function l(o){r(o(t))}function c(o,u=p){const s=[o,u];return i.add(s),i.size===1&&(n=e(r)||p),o(t),()=>{i.delete(s),i.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:c}}export{re as A,he as B,Lt as C,Ht as D,It as E,Ft as F,vt as G,Kt as H,Rt as I,Wt as J,p as K,A as L,ue as M,le as N,w as O,Bt as P,Gt as Q,Y as R,de as S,tt as T,Tt as U,Qt as a,Jt as b,Yt as c,ce as d,Ut as e,zt as f,se as g,nt as h,_e as i,ie as j,it as k,Xt as l,Et as m,Vt as n,ne as o,te as p,H as q,At as r,ht as s,oe as t,Zt as u,ee as v,fe as w,ae as x,Ot as y,Pt as z};
