import{Q as ka,R as ms,T as Va,S as an,i as on,s as ln,k as Kt,a as Ot,l as Jt,m as ti,h as ot,c as Ut,n as ke,b as Bt,G as Mt,J as Sn,g as Ze,v as Ha,d as rt,f as Wa,o as Xa,C as Qi,D as $i,E as er,F as tr,w as gs,e as _s,U as Co,y as Qt,q as ur,z as $t,r as hr,A as en,V as Bn,B as tn,K as Lo,W as fr,H as Do}from"../chunks/index.9a8c495b.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ns="148",nn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},dn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Po=0,xs=1,Ro=2,is=1,Io=2,vi=3,Dn=0,Ct=1,rs=2,Ci=3,pn=0,ii=1,vs=2,Ms=3,ys=4,Fo=5,ei=100,No=101,zo=102,Ss=103,bs=104,Oo=200,Uo=201,Bo=202,Go=203,qa=204,ja=205,ko=206,Vo=207,Ho=208,Wo=209,Xo=210,qo=0,jo=1,Yo=2,Yr=3,Zo=4,Ko=5,Jo=6,Qo=7,Ya=0,$o=1,el=2,Gt=0,tl=1,nl=2,il=3,rl=4,sl=5,Za=300,si=301,ai=302,Zr=303,Kr=304,nr=306,Jr=1e3,Rt=1001,Qr=1002,ft=1003,ws=1004,dr=1005,Tt=1006,al=1007,Si=1008,Pn=1009,ol=1010,ll=1011,Ka=1012,cl=1013,Tn=1014,An=1015,bi=1016,ul=1017,hl=1018,ri=1020,fl=1021,dl=1022,It=1023,pl=1024,ml=1025,Cn=1026,oi=1027,gl=1028,_l=1029,xl=1030,vl=1031,Ml=1033,pr=33776,mr=33777,gr=33778,_r=33779,Es=35840,Ts=35841,As=35842,Cs=35843,yl=36196,Ls=37492,Ds=37496,Ps=37808,Rs=37809,Is=37810,Fs=37811,Ns=37812,zs=37813,Os=37814,Us=37815,Bs=37816,Gs=37817,ks=37818,Vs=37819,Hs=37820,Ws=37821,Xs=36492,Rn=3e3,Ue=3001,Sl=3200,bl=3201,ss=0,wl=1,Nt="srgb",wi="srgb-linear",xr=7680,El=519,qs=35044,js="300 es",$r=1035;class zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const at=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vr=Math.PI/180,Ys=180/Math.PI;function Ei(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[s&255]+at[s>>8&255]+at[s>>16&255]+at[s>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toLowerCase()}function pt(s,e,t){return Math.max(e,Math.min(t,s))}function Tl(s,e){return(s%e+e)%e}function Mr(s,e,t){return(1-t)*s+t*e}function Zs(s){return(s&s-1)===0&&s!==0}function es(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Li(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],v=i[6],b=i[1],M=i[4],S=i[7],w=i[2],L=i[5],N=i[8];return r[0]=o*p+a*b+c*w,r[3]=o*f+a*M+c*L,r[6]=o*v+a*S+c*N,r[1]=l*p+u*b+h*w,r[4]=l*f+u*M+h*L,r[7]=l*v+u*S+h*N,r[2]=d*p+m*b+g*w,r[5]=d*f+m*M+g*L,r[8]=d*v+m*S+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,m=l*r-o*c,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*l-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*c)*p,e[5]=(i*r-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yr.makeScale(e,t)),this}rotate(e){return this.premultiply(yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(yr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yr=new yt;function Ja(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ji(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Sr={[Nt]:{[wi]:Ln},[wi]:{[Nt]:Zi}},ut={legacyMode:!0,get workingColorSpace(){return wi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Sr[e]&&Sr[e][t]!==void 0){const n=Sr[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Qa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ye={r:0,g:0,b:0},Lt={h:0,s:0,l:0},Di={h:0,s:0,l:0};function br(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Pi(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Tl(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=br(o,r,e+1/3),this.g=br(o,r,e),this.b=br(o,r,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ut.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ut.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ut.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ut.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Nt){const n=Qa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ut.fromWorkingColorSpace(Pi(this,Ye),e),pt(Ye.r*255,0,255)<<16^pt(Ye.g*255,0,255)<<8^pt(Ye.b*255,0,255)<<0}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Pi(this,Ye),t);const n=Ye.r,i=Ye.g,r=Ye.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Pi(this,Ye),t),e.r=Ye.r,e.g=Ye.g,e.b=Ye.b,e}getStyle(e=Nt){return ut.fromWorkingColorSpace(Pi(this,Ye),e),e!==Nt?`color(${e} ${Ye.r} ${Ye.g} ${Ye.b})`:`rgb(${Ye.r*255|0},${Ye.g*255|0},${Ye.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Lt),Lt.h+=e,Lt.s+=t,Lt.l+=n,this.setHSL(Lt.h,Lt.s,Lt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Lt),e.getHSL(Di);const n=Mr(Lt.h,Di.h,t),i=Mr(Lt.s,Di.s,t),r=Mr(Lt.l,Di.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ne.NAMES=Qa;let Gn;class $a{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=Ji("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ji("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class eo{constructor(e=null){this.isSource=!0,this.uuid=Ei(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(wr(i[o].image)):r.push(wr(i[o]))}else r=wr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function wr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$a.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Al=0;class St extends zn{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Rt,i=Rt,r=Tt,o=Si,a=It,c=Pn,l=St.DEFAULT_ANISOTROPY,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=Ei(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Za)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case Rt:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case Rt:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=Za;St.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],p=c[2],f=c[6],v=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,S=(m+1)/2,w=(v+1)/2,L=(u+d)/4,N=(h+p)/4,_=(g+f)/4;return M>S&&M>w?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=L/n,r=N/n):S>w?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=L/i,r=_/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=N/r,i=_/r),this.set(n,i,r,t),this}let b=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(h-p)/b,this.z=(d-u)/b,this.w=Math.acos((l+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class In extends zn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class to extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=Rt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||c!==d||l!==m||u!==g){let f=1-a;const v=c*d+l*m+u*g+h*p,b=v>=0?1:-1,M=1-v*v;if(M>Number.EPSILON){const w=Math.sqrt(M),L=Math.atan2(w,v*b);f=Math.sin(f*L)/w,a=Math.sin(a*L)/w}const S=a*b;if(c=c*f+d*S,l=l*f+m*S,u=u*f+g*S,h=h*f+p*S,f===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-a*m,e[t+2]=l*g+u*m+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ks.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ks.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-r*i,h=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+u*-a-h*-o,this.y=u*c+d*-o+h*-r-l*-a,this.z=h*c+d*-a+l*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Er.copy(this).projectOnVector(e),this.sub(Er)}reflect(e){return this.sub(Er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Er=new z,Ks=new Fn;class Ti{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)vn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(vn)}else n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox),Tr.applyMatrix4(e.matrixWorld),this.union(Tr);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fi),Ri.subVectors(this.max,fi),kn.subVectors(e.a,fi),Vn.subVectors(e.b,fi),Hn.subVectors(e.c,fi),cn.subVectors(Vn,kn),un.subVectors(Hn,Vn),Mn.subVectors(kn,Hn);let t=[0,-cn.z,cn.y,0,-un.z,un.y,0,-Mn.z,Mn.y,cn.z,0,-cn.x,un.z,0,-un.x,Mn.z,0,-Mn.x,-cn.y,cn.x,0,-un.y,un.x,0,-Mn.y,Mn.x,0];return!Ar(t,kn,Vn,Hn,Ri)||(t=[1,0,0,0,1,0,0,0,1],!Ar(t,kn,Vn,Hn,Ri))?!1:(Ii.crossVectors(cn,un),t=[Ii.x,Ii.y,Ii.z],Ar(t,kn,Vn,Hn,Ri))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return vn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xt=[new z,new z,new z,new z,new z,new z,new z,new z],vn=new z,Tr=new Ti,kn=new z,Vn=new z,Hn=new z,cn=new z,un=new z,Mn=new z,fi=new z,Ri=new z,Ii=new z,yn=new z;function Ar(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){yn.fromArray(s,r);const a=i.x*Math.abs(yn.x)+i.y*Math.abs(yn.y)+i.z*Math.abs(yn.z),c=e.dot(yn),l=t.dot(yn),u=n.dot(yn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ll=new Ti,di=new z,Cr=new z;class ir{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ll.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;di.subVectors(e,this.center);const t=di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(di,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(di.copy(e.center).add(Cr)),this.expandByPoint(di.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qt=new z,Lr=new z,Fi=new z,hn=new z,Dr=new z,Ni=new z,Pr=new z;class no{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qt.copy(this.direction).multiplyScalar(t).add(this.origin),qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lr.copy(e).add(t).multiplyScalar(.5),Fi.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(Lr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fi),a=hn.dot(this.direction),c=-hn.dot(Fi),l=hn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const p=1/u;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Fi).multiplyScalar(d).add(Lr),m}intersectSphere(e,t){qt.subVectors(e.center,this.origin);const n=qt.dot(this.direction),i=qt.dot(qt)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qt)!==null}intersectTriangle(e,t,n,i,r){Dr.subVectors(t,e),Ni.subVectors(n,e),Pr.crossVectors(Dr,Ni);let o=this.direction.dot(Pr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hn.subVectors(this.origin,e);const c=a*this.direction.dot(Ni.crossVectors(hn,Ni));if(c<0)return null;const l=a*this.direction.dot(Dr.cross(hn));if(l<0||c+l>o)return null;const u=-a*hn.dot(Pr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,c,l,u,h,d,m,g,p,f){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=a,v[13]=c,v[2]=l,v[6]=u,v[10]=h,v[14]=d,v[3]=m,v[7]=g,v[11]=p,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Wn.setFromMatrixColumn(e,0).length(),r=1/Wn.setFromMatrixColumn(e,1).length(),o=1/Wn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,g=a*u,p=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,p=l*h;t[0]=d+p*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,p=l*h;t[0]=d-p*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,g=a*u,p=a*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+p,t[1]=c*h,t[5]=p*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=p-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+p,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dl,e,Pl)}lookAt(e,t,n){const i=this.elements;return xt.subVectors(e,t),xt.lengthSq()===0&&(xt.z=1),xt.normalize(),fn.crossVectors(n,xt),fn.lengthSq()===0&&(Math.abs(n.z)===1?xt.x+=1e-4:xt.z+=1e-4,xt.normalize(),fn.crossVectors(n,xt)),fn.normalize(),zi.crossVectors(xt,fn),i[0]=fn.x,i[4]=zi.x,i[8]=xt.x,i[1]=fn.y,i[5]=zi.y,i[9]=xt.y,i[2]=fn.z,i[6]=zi.z,i[10]=xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],v=n[14],b=n[3],M=n[7],S=n[11],w=n[15],L=i[0],N=i[4],_=i[8],C=i[12],R=i[1],G=i[5],$=i[9],O=i[13],T=i[2],P=i[6],J=i[10],Q=i[14],q=i[3],ne=i[7],K=i[11],V=i[15];return r[0]=o*L+a*R+c*T+l*q,r[4]=o*N+a*G+c*P+l*ne,r[8]=o*_+a*$+c*J+l*K,r[12]=o*C+a*O+c*Q+l*V,r[1]=u*L+h*R+d*T+m*q,r[5]=u*N+h*G+d*P+m*ne,r[9]=u*_+h*$+d*J+m*K,r[13]=u*C+h*O+d*Q+m*V,r[2]=g*L+p*R+f*T+v*q,r[6]=g*N+p*G+f*P+v*ne,r[10]=g*_+p*$+f*J+v*K,r[14]=g*C+p*O+f*Q+v*V,r[3]=b*L+M*R+S*T+w*q,r[7]=b*N+M*G+S*P+w*ne,r[11]=b*_+M*$+S*J+w*K,r[15]=b*C+M*O+S*Q+w*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],v=e[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*m-n*c*m)+p*(+t*c*m-t*l*d+r*o*d-i*o*m+i*l*u-r*c*u)+f*(+t*l*h-t*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+v*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],v=e[15],b=h*f*l-p*d*l+p*c*m-a*f*m-h*c*v+a*d*v,M=g*d*l-u*f*l-g*c*m+o*f*m+u*c*v-o*d*v,S=u*p*l-g*h*l+g*a*m-o*p*m-u*a*v+o*h*v,w=g*h*c-u*p*c-g*a*d+o*p*d+u*a*f-o*h*f,L=t*b+n*M+i*S+r*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return e[0]=b*N,e[1]=(p*d*r-h*f*r-p*i*m+n*f*m+h*i*v-n*d*v)*N,e[2]=(a*f*r-p*c*r+p*i*l-n*f*l-a*i*v+n*c*v)*N,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*m-n*c*m)*N,e[4]=M*N,e[5]=(u*f*r-g*d*r+g*i*m-t*f*m-u*i*v+t*d*v)*N,e[6]=(g*c*r-o*f*r-g*i*l+t*f*l+o*i*v-t*c*v)*N,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*m+t*c*m)*N,e[8]=S*N,e[9]=(g*h*r-u*p*r-g*n*m+t*p*m+u*n*v-t*h*v)*N,e[10]=(o*p*r-g*a*r+g*n*l-t*p*l-o*n*v+t*a*v)*N,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*m-t*a*m)*N,e[12]=w*N,e[13]=(u*p*i-g*h*i+g*n*d-t*p*d-u*n*f+t*h*f)*N,e[14]=(g*a*i-o*p*i-g*n*c+t*p*c+o*n*f-t*a*f)*N,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*N,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,m=r*u,g=r*h,p=o*u,f=o*h,v=a*h,b=c*l,M=c*u,S=c*h,w=n.x,L=n.y,N=n.z;return i[0]=(1-(p+v))*w,i[1]=(m+S)*w,i[2]=(g-M)*w,i[3]=0,i[4]=(m-S)*L,i[5]=(1-(d+v))*L,i[6]=(f+b)*L,i[7]=0,i[8]=(g+M)*N,i[9]=(f-b)*N,i[10]=(1-(d+p))*N,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Wn.set(i[0],i[1],i[2]).length();const o=Wn.set(i[4],i[5],i[6]).length(),a=Wn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Dt.copy(this);const l=1/r,u=1/o,h=1/a;return Dt.elements[0]*=l,Dt.elements[1]*=l,Dt.elements[2]*=l,Dt.elements[4]*=u,Dt.elements[5]*=u,Dt.elements[6]*=u,Dt.elements[8]*=h,Dt.elements[9]*=h,Dt.elements[10]*=h,t.setFromRotationMatrix(Dt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-r),h=(t+e)*c,d=(n+i)*l,m=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wn=new z,Dt=new Xe,Dl=new z(0,0,0),Pl=new z(1,1,1),fn=new z,zi=new z,xt=new z,Js=new Xe,Qs=new Fn;class Ai{constructor(e=0,t=0,n=0,i=Ai.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Js.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Js,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qs.setFromEuler(this),this.setFromQuaternion(Qs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ai.DefaultOrder="XYZ";Ai.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class io{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rl=0;const $s=new z,Xn=new Fn,jt=new Xe,Oi=new z,pi=new z,Il=new z,Fl=new Fn,ea=new z(1,0,0),ta=new z(0,1,0),na=new z(0,0,1),Nl={type:"added"},ia={type:"removed"};class it extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rl++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DefaultUp.clone();const e=new z,t=new Ai,n=new Fn,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new yt}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=it.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=it.DefaultMatrixWorldAutoUpdate,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(ea,e)}rotateY(e){return this.rotateOnAxis(ta,e)}rotateZ(e){return this.rotateOnAxis(na,e)}translateOnAxis(e,t){return $s.copy(e).applyQuaternion(this.quaternion),this.position.add($s.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ea,e)}translateY(e){return this.translateOnAxis(ta,e)}translateZ(e){return this.translateOnAxis(na,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oi.copy(e):Oi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jt.lookAt(pi,Oi,this.up):jt.lookAt(Oi,pi,this.up),this.quaternion.setFromRotationMatrix(jt),i&&(jt.extractRotation(i.matrixWorld),Xn.setFromRotationMatrix(jt),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Nl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ia)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ia)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,e,Il),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,Fl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}it.DefaultUp=new z(0,1,0);it.DefaultMatrixAutoUpdate=!0;it.DefaultMatrixWorldAutoUpdate=!0;const Pt=new z,Yt=new z,Rr=new z,Zt=new z,qn=new z,jn=new z,ra=new z,Ir=new z,Fr=new z,Nr=new z;class rn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pt.subVectors(e,t),i.cross(Pt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Pt.subVectors(i,t),Yt.subVectors(n,t),Rr.subVectors(e,t);const o=Pt.dot(Pt),a=Pt.dot(Yt),c=Pt.dot(Rr),l=Yt.dot(Yt),u=Yt.dot(Rr),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const d=1/h,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zt),Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Zt),c.set(0,0),c.addScaledVector(r,Zt.x),c.addScaledVector(o,Zt.y),c.addScaledVector(a,Zt.z),c}static isFrontFacing(e,t,n,i){return Pt.subVectors(n,t),Yt.subVectors(e,t),Pt.cross(Yt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),Yt.subVectors(this.a,this.b),Pt.cross(Yt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return rn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;qn.subVectors(i,n),jn.subVectors(r,n),Ir.subVectors(e,n);const c=qn.dot(Ir),l=jn.dot(Ir);if(c<=0&&l<=0)return t.copy(n);Fr.subVectors(e,i);const u=qn.dot(Fr),h=jn.dot(Fr);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(qn,o);Nr.subVectors(e,r);const m=qn.dot(Nr),g=jn.dot(Nr);if(g>=0&&m<=g)return t.copy(r);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(jn,a);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return ra.subVectors(r,i),a=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(ra,a);const v=1/(f+p+d);return o=p*v,a=d*v,t.copy(n).addScaledVector(qn,o).addScaledVector(jn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let zl=0;class On extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=ii,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=qa,this.blendDst=ja,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ro extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const We=new z,Ui=new we;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ui.fromBufferAttribute(this,t),Ui.applyMatrix3(e),this.setXY(t,Ui.x,Ui.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix3(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix4(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyNormalMatrix(e),this.setXYZ(t,We.x,We.y,We.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.transformDirection(e),this.setXYZ(t,We.x,We.y,We.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class so extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ao extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ol=0;const Et=new Xe,zr=new it,Yn=new z,vt=new Ti,mi=new Ti,tt=new z;class Vt extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ja(e)?ao:so)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Et.makeRotationFromQuaternion(e),this.applyMatrix4(Et),this}rotateX(e){return Et.makeRotationX(e),this.applyMatrix4(Et),this}rotateY(e){return Et.makeRotationY(e),this.applyMatrix4(Et),this}rotateZ(e){return Et.makeRotationZ(e),this.applyMatrix4(Et),this}translate(e,t,n){return Et.makeTranslation(e,t,n),this.applyMatrix4(Et),this}scale(e,t,n){return Et.makeScale(e,t,n),this.applyMatrix4(Et),this}lookAt(e){return zr.lookAt(e),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];vt.setFromBufferAttribute(r),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,vt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,vt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(vt.min),this.boundingBox.expandByPoint(vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(vt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];mi.setFromBufferAttribute(a),this.morphTargetsRelative?(tt.addVectors(vt.min,mi.min),vt.expandByPoint(tt),tt.addVectors(vt.max,mi.max),vt.expandByPoint(tt)):(vt.expandByPoint(mi.min),vt.expandByPoint(mi.max))}vt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)tt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)tt.fromBufferAttribute(a,l),c&&(Yn.fromBufferAttribute(e,l),tt.add(Yn)),i=Math.max(i,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<a;R++)l[R]=new z,u[R]=new z;const h=new z,d=new z,m=new z,g=new we,p=new we,f=new we,v=new z,b=new z;function M(R,G,$){h.fromArray(i,R*3),d.fromArray(i,G*3),m.fromArray(i,$*3),g.fromArray(o,R*2),p.fromArray(o,G*2),f.fromArray(o,$*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);const O=1/(p.x*f.y-f.x*p.y);isFinite(O)&&(v.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(O),b.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(O),l[R].add(v),l[G].add(v),l[$].add(v),u[R].add(b),u[G].add(b),u[$].add(b))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let R=0,G=S.length;R<G;++R){const $=S[R],O=$.start,T=$.count;for(let P=O,J=O+T;P<J;P+=3)M(n[P+0],n[P+1],n[P+2])}const w=new z,L=new z,N=new z,_=new z;function C(R){N.fromArray(r,R*3),_.copy(N);const G=l[R];w.copy(G),w.sub(N.multiplyScalar(N.dot(G))).normalize(),L.crossVectors(_,G);const O=L.dot(u[R])<0?-1:1;c[R*4]=w.x,c[R*4+1]=w.y,c[R*4+2]=w.z,c[R*4+3]=O}for(let R=0,G=S.length;R<G;++R){const $=S[R],O=$.start,T=$.count;for(let P=O,J=O+T;P<J;P+=3)C(n[P+0]),C(n[P+1]),C(n[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new z,r=new z,o=new z,a=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let v=0;v<u;v++)d[g++]=l[m++]}return new kt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const sa=new Xe,Zn=new no,Or=new ir,gi=new z,_i=new z,xi=new z,Ur=new z,Bi=new z,Gi=new we,ki=new we,Vi=new we,Br=new z,Hi=new z;let sn=class extends it{constructor(e=new Vt,t=new ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Bi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ur.fromBufferAttribute(h,e),o?Bi.addScaledVector(Ur,u):Bi.addScaledVector(Ur.sub(t),u))}t.add(Bi)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),e.ray.intersectsSphere(Or)===!1)||(sa.copy(r).invert(),Zn.copy(e.ray).applyMatrix4(sa),n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=i[p.materialIndex],v=Math.max(p.start,d.start),b=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=v,S=b;M<S;M+=3){const w=a.getX(M),L=a.getX(M+1),N=a.getX(M+2);o=Wi(this,f,e,Zn,l,u,w,L,N),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const v=a.getX(p),b=a.getX(p+1),M=a.getX(p+2);o=Wi(this,i,e,Zn,l,u,v,b,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=i[p.materialIndex],v=Math.max(p.start,d.start),b=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let M=v,S=b;M<S;M+=3){const w=M,L=M+1,N=M+2;o=Wi(this,f,e,Zn,l,u,w,L,N),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const v=p,b=p+1,M=p+2;o=Wi(this,i,e,Zn,l,u,v,b,M),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}};function Ul(s,e,t,n,i,r,o,a){let c;if(e.side===Ct?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Dn,a),c===null)return null;Hi.copy(a),Hi.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Hi);return l<t.near||l>t.far?null:{distance:l,point:Hi.clone(),object:s}}function Wi(s,e,t,n,i,r,o,a,c){s.getVertexPosition(o,gi),s.getVertexPosition(a,_i),s.getVertexPosition(c,xi);const l=Ul(s,e,t,n,gi,_i,xi,Br);if(l){i&&(Gi.fromBufferAttribute(i,o),ki.fromBufferAttribute(i,a),Vi.fromBufferAttribute(i,c),l.uv=rn.getUV(Br,gi,_i,xi,Gi,ki,Vi,new we)),r&&(Gi.fromBufferAttribute(r,o),ki.fromBufferAttribute(r,a),Vi.fromBufferAttribute(r,c),l.uv2=rn.getUV(Br,gi,_i,xi,Gi,ki,Vi,new we));const u={a:o,b:a,c,normal:new z,materialIndex:0};rn.getNormal(gi,_i,xi,u.normal),l.face=u}return l}class ci extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(h,2));function g(p,f,v,b,M,S,w,L,N,_,C){const R=S/N,G=w/_,$=S/2,O=w/2,T=L/2,P=N+1,J=_+1;let Q=0,q=0;const ne=new z;for(let K=0;K<J;K++){const V=K*G-O;for(let B=0;B<P;B++){const se=B*R-$;ne[p]=se*b,ne[f]=V*M,ne[v]=T,l.push(ne.x,ne.y,ne.z),ne[p]=0,ne[f]=0,ne[v]=L>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(B/N),h.push(1-K/_),Q+=1}}for(let K=0;K<_;K++)for(let V=0;V<N;V++){const B=d+V+P*K,se=d+V+P*(K+1),ie=d+(V+1)+P*(K+1),ae=d+(V+1)+P*K;c.push(B,se,ae),c.push(se,ie,ae),q+=6}a.addGroup(m,q,C),m+=q,d+=Q}}static fromJSON(e){return new ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function li(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ht(s){const e={};for(let t=0;t<s.length;t++){const n=li(s[t]);for(const i in n)e[i]=n[i]}return e}function Bl(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function oo(s){return s.getRenderTarget()===null&&s.outputEncoding===Ue?Nt:wi}const Gl={clone:li,merge:ht};var kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kl,this.fragmentShader=Vl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=Bl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lo extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class At extends lo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,Jn=1;class Hl extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new At(Kn,Jn,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new At(Kn,Jn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new At(Kn,Jn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new At(Kn,Jn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new At(Kn,Jn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new At(Kn,Jn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Gt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class co extends St{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:si,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wl extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new co(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ci(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:pn});r.uniforms.tEquirect.value=t;const o=new sn(i,r),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=Tt),new Hl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Gr=new z,Xl=new z,ql=new yt;class bn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Gr.subVectors(n,t).cross(Xl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Gr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ql.getNormalMatrix(e),i=this.coplanarPoint(Gr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new ir,Xi=new z;class as{constructor(e=new bn,t=new bn,n=new bn,i=new bn,r=new bn,o=new bn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],v=n[13],b=n[14],M=n[15];return t[0].setComponents(a-i,h-c,p-d,M-f).normalize(),t[1].setComponents(a+i,h+c,p+d,M+f).normalize(),t[2].setComponents(a+r,h+l,p+m,M+v).normalize(),t[3].setComponents(a-r,h-l,p-m,M-v).normalize(),t[4].setComponents(a-o,h-u,p-g,M-b).normalize(),t[5].setComponents(a+o,h+u,p+g,M+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xi.x=i.normal.x>0?e.max.x:e.min.x,Xi.y=i.normal.y>0?e.max.y:e.min.y,Xi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uo(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function jl(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,m=u.updateRange;s.bindBuffer(h,l),m.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class rr extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,m=[],g=[],p=[],f=[];for(let v=0;v<u;v++){const b=v*d-o;for(let M=0;M<l;M++){const S=M*h-r;g.push(S,-b,0),p.push(0,0,1),f.push(M/a),f.push(1-v/c)}}for(let v=0;v<c;v++)for(let b=0;b<a;b++){const M=b+l*v,S=b+l*(v+1),w=b+1+l*(v+1),L=b+1+l*v;m.push(M,S,L),m.push(S,w,L)}this.setIndex(m),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(p,3)),this.setAttribute("uv",new Ft(f,2))}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Zl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ql=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$l=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ec="vec3 transformed = vec3( position );",tc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,ic=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ac=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,pc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_c=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,xc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mc="gl_FragColor = linearToOutputTexel( gl_FragColor );",yc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ec=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ac=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ic=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Oc=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Uc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Hc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$c=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,su=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,au=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ou=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,lu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,pu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,mu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,gu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Su=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eu=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Au=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Cu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Du=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Pu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ru=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ou=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Uu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Bu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Gu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ku=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Vu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Hu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Wu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Xu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ju=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$u=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,th=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ih=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ah=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ch=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ph=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_h=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:Yl,alphamap_pars_fragment:Zl,alphatest_fragment:Kl,alphatest_pars_fragment:Jl,aomap_fragment:Ql,aomap_pars_fragment:$l,begin_vertex:ec,beginnormal_vertex:tc,bsdfs:nc,iridescence_fragment:ic,bumpmap_pars_fragment:rc,clipping_planes_fragment:sc,clipping_planes_pars_fragment:ac,clipping_planes_pars_vertex:oc,clipping_planes_vertex:lc,color_fragment:cc,color_pars_fragment:uc,color_pars_vertex:hc,color_vertex:fc,common:dc,cube_uv_reflection_fragment:pc,defaultnormal_vertex:mc,displacementmap_pars_vertex:gc,displacementmap_vertex:_c,emissivemap_fragment:xc,emissivemap_pars_fragment:vc,encodings_fragment:Mc,encodings_pars_fragment:yc,envmap_fragment:Sc,envmap_common_pars_fragment:bc,envmap_pars_fragment:wc,envmap_pars_vertex:Ec,envmap_physical_pars_fragment:Oc,envmap_vertex:Tc,fog_vertex:Ac,fog_pars_vertex:Cc,fog_fragment:Lc,fog_pars_fragment:Dc,gradientmap_pars_fragment:Pc,lightmap_fragment:Rc,lightmap_pars_fragment:Ic,lights_lambert_fragment:Fc,lights_lambert_pars_fragment:Nc,lights_pars_begin:zc,lights_toon_fragment:Uc,lights_toon_pars_fragment:Bc,lights_phong_fragment:Gc,lights_phong_pars_fragment:kc,lights_physical_fragment:Vc,lights_physical_pars_fragment:Hc,lights_fragment_begin:Wc,lights_fragment_maps:Xc,lights_fragment_end:qc,logdepthbuf_fragment:jc,logdepthbuf_pars_fragment:Yc,logdepthbuf_pars_vertex:Zc,logdepthbuf_vertex:Kc,map_fragment:Jc,map_pars_fragment:Qc,map_particle_fragment:$c,map_particle_pars_fragment:eu,metalnessmap_fragment:tu,metalnessmap_pars_fragment:nu,morphcolor_vertex:iu,morphnormal_vertex:ru,morphtarget_pars_vertex:su,morphtarget_vertex:au,normal_fragment_begin:ou,normal_fragment_maps:lu,normal_pars_fragment:cu,normal_pars_vertex:uu,normal_vertex:hu,normalmap_pars_fragment:fu,clearcoat_normal_fragment_begin:du,clearcoat_normal_fragment_maps:pu,clearcoat_pars_fragment:mu,iridescence_pars_fragment:gu,output_fragment:_u,packing:xu,premultiplied_alpha_fragment:vu,project_vertex:Mu,dithering_fragment:yu,dithering_pars_fragment:Su,roughnessmap_fragment:bu,roughnessmap_pars_fragment:wu,shadowmap_pars_fragment:Eu,shadowmap_pars_vertex:Tu,shadowmap_vertex:Au,shadowmask_pars_fragment:Cu,skinbase_vertex:Lu,skinning_pars_vertex:Du,skinning_vertex:Pu,skinnormal_vertex:Ru,specularmap_fragment:Iu,specularmap_pars_fragment:Fu,tonemapping_fragment:Nu,tonemapping_pars_fragment:zu,transmission_fragment:Ou,transmission_pars_fragment:Uu,uv_pars_fragment:Bu,uv_pars_vertex:Gu,uv_vertex:ku,uv2_pars_fragment:Vu,uv2_pars_vertex:Hu,uv2_vertex:Wu,worldpos_vertex:Xu,background_vert:qu,background_frag:ju,backgroundCube_vert:Yu,backgroundCube_frag:Zu,cube_vert:Ku,cube_frag:Ju,depth_vert:Qu,depth_frag:$u,distanceRGBA_vert:eh,distanceRGBA_frag:th,equirect_vert:nh,equirect_frag:ih,linedashed_vert:rh,linedashed_frag:sh,meshbasic_vert:ah,meshbasic_frag:oh,meshlambert_vert:lh,meshlambert_frag:ch,meshmatcap_vert:uh,meshmatcap_frag:hh,meshnormal_vert:fh,meshnormal_frag:dh,meshphong_vert:ph,meshphong_frag:mh,meshphysical_vert:gh,meshphysical_frag:_h,meshtoon_vert:xh,meshtoon_frag:vh,points_vert:Mh,points_frag:yh,shadow_vert:Sh,shadow_frag:bh,sprite_vert:wh,sprite_frag:Eh},oe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yt},uv2Transform:{value:new yt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yt}}},zt={basic:{uniforms:ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:ht([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:ht([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:ht([oe.points,oe.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:ht([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:ht([oe.common,oe.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:ht([oe.sprite,oe.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:ht([oe.common,oe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:ht([oe.lights,oe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};zt.physical={uniforms:ht([zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const qi={r:0,b:0,g:0};function Th(s,e,t,n,i,r,o){const a=new Ne(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(f,v){let b=!1,M=v.isScene===!0?v.background:null;M&&M.isTexture&&(M=(v.backgroundBlurriness>0?t:e).get(M));const S=s.xr,w=S.getSession&&S.getSession();w&&w.environmentBlendMode==="additive"&&(M=null),M===null?p(a,c):M&&M.isColor&&(p(M,1),b=!0),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===nr)?(u===void 0&&(u=new sn(new ci(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:li(zt.backgroundCube.uniforms),vertexShader:zt.backgroundCube.vertexShader,fragmentShader:zt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,N,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=M.encoding!==Ue,(h!==M||d!==M.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,m=s.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new sn(new rr(2,2),new Nn({name:"BackgroundMaterial",uniforms:li(zt.background.uniforms),vertexShader:zt.background.vertexShader,fragmentShader:zt.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=M.encoding!==Ue,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,m=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,v){f.getRGB(qi,oo(s)),n.buffers.color.setClear(qi.r,qi.g,qi.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(f,v=1){a.set(f),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(a,c)},render:g}}function Ah(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=f(null);let l=c,u=!1;function h(T,P,J,Q,q){let ne=!1;if(o){const K=p(Q,J,P);l!==K&&(l=K,m(l.object)),ne=v(T,Q,J,q),ne&&b(T,Q,J,q)}else{const K=P.wireframe===!0;(l.geometry!==Q.id||l.program!==J.id||l.wireframe!==K)&&(l.geometry=Q.id,l.program=J.id,l.wireframe=K,ne=!0)}q!==null&&t.update(q,34963),(ne||u)&&(u=!1,_(T,P,J,Q),q!==null&&s.bindBuffer(34963,t.get(q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(T){return n.isWebGL2?s.bindVertexArray(T):r.bindVertexArrayOES(T)}function g(T){return n.isWebGL2?s.deleteVertexArray(T):r.deleteVertexArrayOES(T)}function p(T,P,J){const Q=J.wireframe===!0;let q=a[T.id];q===void 0&&(q={},a[T.id]=q);let ne=q[P.id];ne===void 0&&(ne={},q[P.id]=ne);let K=ne[Q];return K===void 0&&(K=f(d()),ne[Q]=K),K}function f(T){const P=[],J=[],Q=[];for(let q=0;q<i;q++)P[q]=0,J[q]=0,Q[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:J,attributeDivisors:Q,object:T,attributes:{},index:null}}function v(T,P,J,Q){const q=l.attributes,ne=P.attributes;let K=0;const V=J.getAttributes();for(const B in V)if(V[B].location>=0){const ie=q[B];let ae=ne[B];if(ae===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor)),ie===void 0||ie.attribute!==ae||ae&&ie.data!==ae.data)return!0;K++}return l.attributesNum!==K||l.index!==Q}function b(T,P,J,Q){const q={},ne=P.attributes;let K=0;const V=J.getAttributes();for(const B in V)if(V[B].location>=0){let ie=ne[B];ie===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(ie=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(ie=T.instanceColor));const ae={};ae.attribute=ie,ie&&ie.data&&(ae.data=ie.data),q[B]=ae,K++}l.attributes=q,l.attributesNum=K,l.index=Q}function M(){const T=l.newAttributes;for(let P=0,J=T.length;P<J;P++)T[P]=0}function S(T){w(T,0)}function w(T,P){const J=l.newAttributes,Q=l.enabledAttributes,q=l.attributeDivisors;J[T]=1,Q[T]===0&&(s.enableVertexAttribArray(T),Q[T]=1),q[T]!==P&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](T,P),q[T]=P)}function L(){const T=l.newAttributes,P=l.enabledAttributes;for(let J=0,Q=P.length;J<Q;J++)P[J]!==T[J]&&(s.disableVertexAttribArray(J),P[J]=0)}function N(T,P,J,Q,q,ne){n.isWebGL2===!0&&(J===5124||J===5125)?s.vertexAttribIPointer(T,P,J,q,ne):s.vertexAttribPointer(T,P,J,Q,q,ne)}function _(T,P,J,Q){if(n.isWebGL2===!1&&(T.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const q=Q.attributes,ne=J.getAttributes(),K=P.defaultAttributeValues;for(const V in ne){const B=ne[V];if(B.location>=0){let se=q[V];if(se===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(se=T.instanceColor)),se!==void 0){const ie=se.normalized,ae=se.itemSize,H=t.get(se);if(H===void 0)continue;const Z=H.buffer,pe=H.type,ve=H.bytesPerElement;if(se.isInterleavedBufferAttribute){const fe=se.data,Y=fe.stride,Me=se.offset;if(fe.isInstancedInterleavedBuffer){for(let ye=0;ye<B.locationSize;ye++)w(B.location+ye,fe.meshPerAttribute);T.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ye=0;ye<B.locationSize;ye++)S(B.location+ye);s.bindBuffer(34962,Z);for(let ye=0;ye<B.locationSize;ye++)N(B.location+ye,ae/B.locationSize,pe,ie,Y*ve,(Me+ae/B.locationSize*ye)*ve)}else{if(se.isInstancedBufferAttribute){for(let fe=0;fe<B.locationSize;fe++)w(B.location+fe,se.meshPerAttribute);T.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let fe=0;fe<B.locationSize;fe++)S(B.location+fe);s.bindBuffer(34962,Z);for(let fe=0;fe<B.locationSize;fe++)N(B.location+fe,ae/B.locationSize,pe,ie,ae*ve,ae/B.locationSize*fe*ve)}}else if(K!==void 0){const ie=K[V];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(B.location,ie);break;case 3:s.vertexAttrib3fv(B.location,ie);break;case 4:s.vertexAttrib4fv(B.location,ie);break;default:s.vertexAttrib1fv(B.location,ie)}}}}L()}function C(){$();for(const T in a){const P=a[T];for(const J in P){const Q=P[J];for(const q in Q)g(Q[q].object),delete Q[q];delete P[J]}delete a[T]}}function R(T){if(a[T.id]===void 0)return;const P=a[T.id];for(const J in P){const Q=P[J];for(const q in Q)g(Q[q].object),delete Q[q];delete P[J]}delete a[T.id]}function G(T){for(const P in a){const J=a[P];if(J[T.id]===void 0)continue;const Q=J[T.id];for(const q in Q)g(Q[q].object),delete Q[q];delete J[T.id]}}function $(){O(),u=!0,l!==c&&(l=c,m(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:$,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:G,initAttributes:M,enableAttribute:S,disableUnusedAttributes:L}}function Ch(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,l,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Lh(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),f=s.getParameter(36347),v=s.getParameter(36348),b=s.getParameter(36349),M=d>0,S=o||e.has("OES_texture_float"),w=M&&S,L=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:L}}function Dh(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new bn,a=new yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,d,m){const g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,v=s.get(h);if(!i||g===null||g.length===0||r&&!f)r?u(null):l();else{const b=r?0:n,M=b*4;let S=v.clippingState||null;c.value=S,S=u(g,d,M,m);for(let w=0;w!==M;++w)S[w]=t[w];v.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=c.value,g!==!0||f===null){const v=m+p*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(f===null||f.length<v)&&(f=new Float32Array(v));for(let M=0,S=m;M!==p;++M,S+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(f,S),f[S+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function Ph(s){let e=new WeakMap;function t(o,a){return a===Zr?o.mapping=si:a===Kr&&(o.mapping=ai),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Zr||a===Kr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Wl(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ho extends lo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ni=4,aa=[.125,.215,.35,.446,.526,.582],En=20,kr=new ho,oa=new Ne;let Vr=null;const wn=(1+Math.sqrt(5))/2,$n=1/wn,la=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,wn,$n),new z(0,wn,-$n),new z($n,0,wn),new z(-$n,0,wn),new z(wn,$n,0),new z(-wn,$n,0)];class ca{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Vr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vr),e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:bi,format:It,encoding:Rn,depthBuffer:!1},i=ua(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ua(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rh(r)),this._blurMaterial=Ih(r,e,t)}return i}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,n,i){const a=new At(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(oa),u.toneMapping=Gt,u.autoClear=!1;const m=new ro({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new sn(new ci,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(oa),p=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(a.up.set(0,c[v],0),a.lookAt(l[v],0,0)):b===1?(a.up.set(0,0,c[v]),a.lookAt(0,l[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,l[v]));const M=this._cubeSize;ji(i,b*M,v>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===si||e.mapping===ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ha());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;ji(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=la[(i-1)%la.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new sn(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*En-1),p=r/g,f=isFinite(r)?1+Math.floor(u*p):En;f>En&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${En}`);const v=[];let b=0;for(let N=0;N<En;++N){const _=N/p,C=Math.exp(-_*_/2);v.push(C),N===0?b+=C:N<f&&(b+=2*C)}for(let N=0;N<v.length;N++)v[N]=v[N]/b;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const S=this._sizeLods[i],w=3*S*(i>M-ni?i-M+ni:0),L=4*(this._cubeSize-S);ji(t,w,L,3*S,2*S),c.setRenderTarget(t),c.render(h,kr)}}function Rh(s){const e=[],t=[],n=[];let i=s;const r=s-ni+1+aa.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ni?c=aa[o-s+ni-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,v=1,b=new Float32Array(p*g*m),M=new Float32Array(f*g*m),S=new Float32Array(v*g*m);for(let L=0;L<m;L++){const N=L%3*2/3-1,_=L>2?0:-1,C=[N,_,0,N+2/3,_,0,N+2/3,_+1,0,N,_,0,N+2/3,_+1,0,N,_+1,0];b.set(C,p*g*L),M.set(d,f*g*L);const R=[L,L,L,L,L,L];S.set(R,v*g*L)}const w=new Vt;w.setAttribute("position",new kt(b,p)),w.setAttribute("uv",new kt(M,f)),w.setAttribute("faceIndex",new kt(S,v)),e.push(w),i>ni&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ua(s,e,t){const n=new In(s,e,t);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ih(s,e,t){const n=new Float32Array(En),i=new z(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ha(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function fa(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function os(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fh(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zr||c===Kr,u=c===si||c===ai;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new ca(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new ca(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Nh(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zh(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let f=0,v=p.length;f<v;f++)e.update(p[f],34962)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let M=0,S=b.length;M<S;M+=3){const w=b[M+0],L=b[M+1],N=b[M+2];d.push(w,L,L,N,N,w)}}else{const b=g.array;p=g.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const w=M+0,L=M+1,N=M+2;d.push(w,L,L,N,N,w)}}const f=new(Ja(d)?ao:so)(d,1);f.version=p;const v=r.get(h);v&&e.remove(v),r.set(h,f)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Oh(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,m){s.drawElements(r,m,a,d*c),t.update(m,r,1)}function h(d,m,g){if(g===0)return;let p,f;if(i)p=s,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,m,a,d*c,g),t.update(m,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Uh(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bh(s,e){return s[0]-e[0]}function Gh(s,e){return Math.abs(e[1])-Math.abs(s[1])}function kh(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let f=r.get(u);if(f===void 0||f.count!==p){let P=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();const M=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],N=u.morphAttributes.normal||[],_=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),S===!0&&(C=2),w===!0&&(C=3);let R=u.attributes.position.count*C,G=1;R>e.maxTextureSize&&(G=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const $=new Float32Array(R*G*4*p),O=new to($,R,G,p);O.type=An,O.needsUpdate=!0;const T=C*4;for(let J=0;J<p;J++){const Q=L[J],q=N[J],ne=_[J],K=R*G*4*J;for(let V=0;V<Q.count;V++){const B=V*T;M===!0&&(o.fromBufferAttribute(Q,V),$[K+B+0]=o.x,$[K+B+1]=o.y,$[K+B+2]=o.z,$[K+B+3]=0),S===!0&&(o.fromBufferAttribute(q,V),$[K+B+4]=o.x,$[K+B+5]=o.y,$[K+B+6]=o.z,$[K+B+7]=0),w===!0&&(o.fromBufferAttribute(ne,V),$[K+B+8]=o.x,$[K+B+9]=o.y,$[K+B+10]=o.z,$[K+B+11]=ne.itemSize===4?o.w:1)}}f={count:p,texture:O,size:new we(R,G)},r.set(u,f),u.addEventListener("dispose",P)}let v=0;for(let M=0;M<m.length;M++)v+=m[M];const b=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",b),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}else{const g=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let S=0;S<g;S++)p[S]=[S,0];n[u.id]=p}for(let S=0;S<g;S++){const w=p[S];w[0]=S,w[1]=m[S]}p.sort(Gh);for(let S=0;S<8;S++)S<g&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Bh);const f=u.morphAttributes.position,v=u.morphAttributes.normal;let b=0;for(let S=0;S<8;S++){const w=a[S],L=w[0],N=w[1];L!==Number.MAX_SAFE_INTEGER&&N?(f&&u.getAttribute("morphTarget"+S)!==f[L]&&u.setAttribute("morphTarget"+S,f[L]),v&&u.getAttribute("morphNormal"+S)!==v[L]&&u.setAttribute("morphNormal"+S,v[L]),i[S]=N,b+=N):(f&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),v&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const M=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Vh(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const fo=new St,po=new to,mo=new Cl,go=new co,da=[],pa=[],ma=new Float32Array(16),ga=new Float32Array(9),_a=new Float32Array(4);function ui(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=da[i];if(r===void 0&&(r=new Float32Array(i),da[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ke(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Je(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function sr(s,e){let t=pa[e];t===void 0&&(t=new Int32Array(e),pa[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Hh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Wh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;s.uniform2fv(this.addr,e),Je(t,e)}}function Xh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ke(t,e))return;s.uniform3fv(this.addr,e),Je(t,e)}}function qh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;s.uniform4fv(this.addr,e),Je(t,e)}}function jh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Je(t,e)}else{if(Ke(t,n))return;_a.set(n),s.uniformMatrix2fv(this.addr,!1,_a),Je(t,n)}}function Yh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Je(t,e)}else{if(Ke(t,n))return;ga.set(n),s.uniformMatrix3fv(this.addr,!1,ga),Je(t,n)}}function Zh(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Je(t,e)}else{if(Ke(t,n))return;ma.set(n),s.uniformMatrix4fv(this.addr,!1,ma),Je(t,n)}}function Kh(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;s.uniform2iv(this.addr,e),Je(t,e)}}function Qh(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ke(t,e))return;s.uniform3iv(this.addr,e),Je(t,e)}}function $h(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;s.uniform4iv(this.addr,e),Je(t,e)}}function ef(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function tf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;s.uniform2uiv(this.addr,e),Je(t,e)}}function nf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ke(t,e))return;s.uniform3uiv(this.addr,e),Je(t,e)}}function rf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;s.uniform4uiv(this.addr,e),Je(t,e)}}function sf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||fo,i)}function af(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mo,i)}function of(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||go,i)}function lf(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||po,i)}function cf(s){switch(s){case 5126:return Hh;case 35664:return Wh;case 35665:return Xh;case 35666:return qh;case 35674:return jh;case 35675:return Yh;case 35676:return Zh;case 5124:case 35670:return Kh;case 35667:case 35671:return Jh;case 35668:case 35672:return Qh;case 35669:case 35673:return $h;case 5125:return ef;case 36294:return tf;case 36295:return nf;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return lf}}function uf(s,e){s.uniform1fv(this.addr,e)}function hf(s,e){const t=ui(e,this.size,2);s.uniform2fv(this.addr,t)}function ff(s,e){const t=ui(e,this.size,3);s.uniform3fv(this.addr,t)}function df(s,e){const t=ui(e,this.size,4);s.uniform4fv(this.addr,t)}function pf(s,e){const t=ui(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mf(s,e){const t=ui(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gf(s,e){const t=ui(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _f(s,e){s.uniform1iv(this.addr,e)}function xf(s,e){s.uniform2iv(this.addr,e)}function vf(s,e){s.uniform3iv(this.addr,e)}function Mf(s,e){s.uniform4iv(this.addr,e)}function yf(s,e){s.uniform1uiv(this.addr,e)}function Sf(s,e){s.uniform2uiv(this.addr,e)}function bf(s,e){s.uniform3uiv(this.addr,e)}function wf(s,e){s.uniform4uiv(this.addr,e)}function Ef(s,e,t){const n=this.cache,i=e.length,r=sr(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||fo,r[o])}function Tf(s,e,t){const n=this.cache,i=e.length,r=sr(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||mo,r[o])}function Af(s,e,t){const n=this.cache,i=e.length,r=sr(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||go,r[o])}function Cf(s,e,t){const n=this.cache,i=e.length,r=sr(t,i);Ke(n,r)||(s.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||po,r[o])}function Lf(s){switch(s){case 5126:return uf;case 35664:return hf;case 35665:return ff;case 35666:return df;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return xf;case 35668:case 35672:return vf;case 35669:case 35673:return Mf;case 5125:return yf;case 36294:return Sf;case 36295:return bf;case 36296:return wf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Cf}}class Df{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=cf(t.type)}}class Pf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Lf(t.type)}}class Rf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function xa(s,e){s.seq.push(e),s.map[e.id]=e}function If(s,e,t){const n=s.name,i=n.length;for(Hr.lastIndex=0;;){const r=Hr.exec(n),o=Hr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){xa(t,l===void 0?new Df(a,s,e):new Pf(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Rf(a),xa(t,h)),t=h}}}class Ki{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);If(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function va(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let Ff=0;function Nf(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function zf(s){switch(s){case Rn:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ma(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Nf(s.getShaderSource(e),o)}else return i}function Of(s,e){const t=zf(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Uf(s,e){let t;switch(e){case tl:t="Linear";break;case nl:t="Reinhard";break;case il:t="OptimizedCineon";break;case rl:t="ACESFilmic";break;case sl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function Gf(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kf(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Mi(s){return s!==""}function ya(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sa(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ts(s){return s.replace(Vf,Hf)}function Hf(s,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ts(t)}const Wf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ba(s){return s.replace(Wf,Xf)}function Xf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wa(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qf(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===is?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Io?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function jf(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case si:case ai:e="ENVMAP_TYPE_CUBE";break;case nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Zf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ya:e="ENVMAP_BLENDING_MULTIPLY";break;case $o:e="ENVMAP_BLENDING_MIX";break;case el:e="ENVMAP_BLENDING_ADD";break}return e}function Kf(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Jf(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=qf(t),l=jf(t),u=Yf(t),h=Zf(t),d=Kf(t),m=t.isWebGL2?"":Bf(t),g=Gf(r),p=i.createProgram();let f,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Mi).join(`
`),f.length>0&&(f+=`
`),v=[m,g].filter(Mi).join(`
`),v.length>0&&(v+=`
`)):(f=[wa(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),v=[m,wa(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gt?"#define TONE_MAPPING":"",t.toneMapping!==Gt?Ee.tonemapping_pars_fragment:"",t.toneMapping!==Gt?Uf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,Of("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),o=ts(o),o=ya(o,t),o=Sa(o,t),a=ts(a),a=ya(a,t),a=Sa(a,t),o=ba(o),a=ba(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",t.glslVersion===js?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===js?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=b+f+o,S=b+v+a,w=va(i,35633,M),L=va(i,35632,S);if(i.attachShader(p,w),i.attachShader(p,L),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const C=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(w).trim(),G=i.getShaderInfoLog(L).trim();let $=!0,O=!0;if(i.getProgramParameter(p,35714)===!1){$=!1;const T=Ma(i,w,"vertex"),P=Ma(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+T+`
`+P)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(R===""||G==="")&&(O=!1);O&&(this.diagnostics={runnable:$,programLog:C,vertexShader:{log:R,prefix:f},fragmentShader:{log:G,prefix:v}})}i.deleteShader(w),i.deleteShader(L);let N;this.getUniforms=function(){return N===void 0&&(N=new Ki(i,p)),N};let _;return this.getAttributes=function(){return _===void 0&&(_=kf(i,p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Ff++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=L,this}let Qf=0;class $f{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ed(e),t.set(e,n)),n}}class ed{constructor(e){this.id=Qf++,this.code=e,this.usedTimes=0}}function td(s,e,t,n,i,r,o){const a=new io,c=new $f,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,C,R,G,$){const O=G.fog,T=$.geometry,P=_.isMeshStandardMaterial?G.environment:null,J=(_.isMeshStandardMaterial?t:e).get(_.envMap||P),Q=J&&J.mapping===nr?J.image.height:null,q=g[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const ne=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,K=ne!==void 0?ne.length:0;let V=0;T.morphAttributes.position!==void 0&&(V=1),T.morphAttributes.normal!==void 0&&(V=2),T.morphAttributes.color!==void 0&&(V=3);let B,se,ie,ae;if(q){const Y=zt[q];B=Y.vertexShader,se=Y.fragmentShader}else B=_.vertexShader,se=_.fragmentShader,c.update(_),ie=c.getVertexShaderID(_),ae=c.getFragmentShaderID(_);const H=s.getRenderTarget(),Z=_.alphaTest>0,pe=_.clearcoat>0,ve=_.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:_.type,vertexShader:B,fragmentShader:se,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:d,outputEncoding:H===null?s.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Rn,map:!!_.map,matcap:!!_.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Q,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===wl,tangentSpaceNormalMap:_.normalMapType===ss,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Ue,clearcoat:pe,clearcoatMap:pe&&!!_.clearcoatMap,clearcoatRoughnessMap:pe&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!_.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!_.iridescenceMap,iridescenceThicknessMap:ve&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===ii,alphaMap:!!_.alphaMap,alphaTest:Z,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!T.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!O,useFog:_.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:h,skinning:$.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:V,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:_.toneMapped?s.toneMapping:Gt,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===rs,flipSided:_.side===Ct,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function f(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)C.push(R),C.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(v(C,_),b(C,_),C.push(s.outputEncoding)),C.push(_.customProgramCacheKey),C.join()}function v(_,C){_.push(C.precision),_.push(C.outputEncoding),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.combine),_.push(C.vertexUvs),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function b(_,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),_.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),_.push(a.mask)}function M(_){const C=g[_.type];let R;if(C){const G=zt[C];R=Gl.clone(G.uniforms)}else R=_.uniforms;return R}function S(_,C){let R;for(let G=0,$=l.length;G<$;G++){const O=l[G];if(O.cacheKey===C){R=O,++R.usedTimes;break}}return R===void 0&&(R=new Jf(s,C,_,r),l.push(R)),R}function w(_){if(--_.usedTimes===0){const C=l.indexOf(_);l[C]=l[l.length-1],l.pop(),_.destroy()}}function L(_){c.remove(_)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:L,programs:l,dispose:N}}function nd(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function id(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ea(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ta(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,m,g,p,f){let v=s[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},s[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=m,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=p,v.group=f),e++,v}function a(h,d,m,g,p,f){const v=o(h,d,m,g,p,f);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function c(h,d,m,g,p,f){const v=o(h,d,m,g,p,f);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function l(h,d){t.length>1&&t.sort(h||id),n.length>1&&n.sort(d||Ea),i.length>1&&i.sort(d||Ea)}function u(){for(let h=e,d=s.length;h<d;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function rd(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ta,s.set(n,[o])):i>=r.length?(o=new Ta,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function sd(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ne};break;case"SpotLight":t={position:new z,direction:new z,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function ad(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let od=0;function ld(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cd(s,e){const t=new sd,n=ad(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,o=new Xe,a=new Xe;function c(u,h){let d=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let p=0,f=0,v=0,b=0,M=0,S=0,w=0,L=0,N=0,_=0;u.sort(ld);const C=h!==!0?Math.PI:1;for(let G=0,$=u.length;G<$;G++){const O=u[G],T=O.color,P=O.intensity,J=O.distance,Q=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=T.r*P*C,m+=T.g*P*C,g+=T.b*P*C;else if(O.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(O.sh.coefficients[q],P);else if(O.isDirectionalLight){const q=t.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*C),O.castShadow){const ne=O.shadow,K=n.get(O);K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=O.shadow.matrix,S++}i.directional[p]=q,p++}else if(O.isSpotLight){const q=t.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(T).multiplyScalar(P*C),q.distance=J,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,i.spot[v]=q;const ne=O.shadow;if(O.map&&(i.spotLightMap[N]=O.map,N++,ne.updateMatrices(O),O.castShadow&&_++),i.spotLightMatrix[v]=ne.matrix,O.castShadow){const K=n.get(O);K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,i.spotShadow[v]=K,i.spotShadowMap[v]=Q,L++}v++}else if(O.isRectAreaLight){const q=t.get(O);q.color.copy(T).multiplyScalar(P),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),i.rectArea[b]=q,b++}else if(O.isPointLight){const q=t.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*C),q.distance=O.distance,q.decay=O.decay,O.castShadow){const ne=O.shadow,K=n.get(O);K.shadowBias=ne.bias,K.shadowNormalBias=ne.normalBias,K.shadowRadius=ne.radius,K.shadowMapSize=ne.mapSize,K.shadowCameraNear=ne.camera.near,K.shadowCameraFar=ne.camera.far,i.pointShadow[f]=K,i.pointShadowMap[f]=Q,i.pointShadowMatrix[f]=O.shadow.matrix,w++}i.point[f]=q,f++}else if(O.isHemisphereLight){const q=t.get(O);q.skyColor.copy(O.color).multiplyScalar(P*C),q.groundColor.copy(O.groundColor).multiplyScalar(P*C),i.hemi[M]=q,M++}}b>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==p||R.pointLength!==f||R.spotLength!==v||R.rectAreaLength!==b||R.hemiLength!==M||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==L||R.numSpotMaps!==N)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=b,i.point.length=f,i.hemi.length=M,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=L+N-_,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=_,R.directionalLength=p,R.pointLength=f,R.spotLength=v,R.rectAreaLength=b,R.hemiLength=M,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=L,R.numSpotMaps=N,i.version=od++)}function l(u,h){let d=0,m=0,g=0,p=0,f=0;const v=h.matrixWorldInverse;for(let b=0,M=u.length;b<M;b++){const S=u[b];if(S.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),d++}else if(S.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(v),g++}else if(S.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(v),a.identity(),o.copy(S.matrixWorld),o.premultiply(v),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(v),m++}else if(S.isHemisphereLight){const w=i.hemi[f];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(v),f++}}}return{setup:c,setupView:l,state:i}}function Aa(s,e){const t=new cd(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ud(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Aa(s,e),t.set(r,[c])):o>=a.length?(c=new Aa(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class hd extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fd extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function md(s,e,t){let n=new as;const i=new we,r=new we,o=new nt,a=new hd({depthPacking:bl}),c=new fd,l={},u=t.maxTextureSize,h={0:Ct,1:Dn,2:rs},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:dd,fragmentShader:pd}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new sn(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=is,this.render=function(S,w,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;const N=s.getRenderTarget(),_=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),R=s.state;R.setBlending(pn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let G=0,$=S.length;G<$;G++){const O=S[G],T=O.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;i.copy(T.mapSize);const P=T.getFrameExtents();if(i.multiply(P),r.copy(T.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/P.x),i.x=r.x*P.x,T.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/P.y),i.y=r.y*P.y,T.mapSize.y=r.y)),T.map===null){const Q=this.type!==vi?{minFilter:ft,magFilter:ft}:{};T.map=new In(i.x,i.y,Q),T.map.texture.name=O.name+".shadowMap",T.camera.updateProjectionMatrix()}s.setRenderTarget(T.map),s.clear();const J=T.getViewportCount();for(let Q=0;Q<J;Q++){const q=T.getViewport(Q);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),R.viewport(o),T.updateMatrices(O,Q),n=T.getFrustum(),M(w,L,T.camera,O,this.type)}T.isPointLightShadow!==!0&&this.type===vi&&v(T,L),T.needsUpdate=!1}f.needsUpdate=!1,s.setRenderTarget(N,_,C)};function v(S,w){const L=e.update(p);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new In(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,L,d,p,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,L,m,p,null)}function b(S,w,L,N,_,C){let R=null;const G=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(G!==void 0)R=G;else if(R=L.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=R.uuid,O=w.uuid;let T=l[$];T===void 0&&(T={},l[$]=T);let P=T[O];P===void 0&&(P=R.clone(),T[O]=P),R=P}return R.visible=w.visible,R.wireframe=w.wireframe,C===vi?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:h[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,L.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(L.matrixWorld),R.nearDistance=N,R.farDistance=_),R}function M(S,w,L,N,_){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===vi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const G=e.update(S),$=S.material;if(Array.isArray($)){const O=G.groups;for(let T=0,P=O.length;T<P;T++){const J=O[T],Q=$[J.materialIndex];if(Q&&Q.visible){const q=b(S,Q,N,L.near,L.far,_);s.renderBufferDirect(L,null,G,q,S,J)}}}else if($.visible){const O=b(S,$,N,L.near,L.far,_);s.renderBufferDirect(L,null,G,O,S,null)}}const R=S.children;for(let G=0,$=R.length;G<$;G++)M(R[G],w,L,N,_)}}function gd(s,e,t){const n=t.isWebGL2;function i(){let D=!1;const W=new nt;let ee=null;const he=new nt(0,0,0,0);return{setMask:function(_e){ee!==_e&&!D&&(s.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){D=_e},setClear:function(_e,Fe,$e,st,mn){mn===!0&&(_e*=st,Fe*=st,$e*=st),W.set(_e,Fe,$e,st),he.equals(W)===!1&&(s.clearColor(_e,Fe,$e,st),he.copy(W))},reset:function(){D=!1,ee=null,he.set(-1,0,0,0)}}}function r(){let D=!1,W=null,ee=null,he=null;return{setTest:function(_e){_e?Z(2929):pe(2929)},setMask:function(_e){W!==_e&&!D&&(s.depthMask(_e),W=_e)},setFunc:function(_e){if(ee!==_e){switch(_e){case qo:s.depthFunc(512);break;case jo:s.depthFunc(519);break;case Yo:s.depthFunc(513);break;case Yr:s.depthFunc(515);break;case Zo:s.depthFunc(514);break;case Ko:s.depthFunc(518);break;case Jo:s.depthFunc(516);break;case Qo:s.depthFunc(517);break;default:s.depthFunc(515)}ee=_e}},setLocked:function(_e){D=_e},setClear:function(_e){he!==_e&&(s.clearDepth(_e),he=_e)},reset:function(){D=!1,W=null,ee=null,he=null}}}function o(){let D=!1,W=null,ee=null,he=null,_e=null,Fe=null,$e=null,st=null,mn=null;return{setTest:function(Be){D||(Be?Z(2960):pe(2960))},setMask:function(Be){W!==Be&&!D&&(s.stencilMask(Be),W=Be)},setFunc:function(Be,Ht,wt){(ee!==Be||he!==Ht||_e!==wt)&&(s.stencilFunc(Be,Ht,wt),ee=Be,he=Ht,_e=wt)},setOp:function(Be,Ht,wt){(Fe!==Be||$e!==Ht||st!==wt)&&(s.stencilOp(Be,Ht,wt),Fe=Be,$e=Ht,st=wt)},setLocked:function(Be){D=Be},setClear:function(Be){mn!==Be&&(s.clearStencil(Be),mn=Be)},reset:function(){D=!1,W=null,ee=null,he=null,_e=null,Fe=null,$e=null,st=null,mn=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,v=!1,b=null,M=null,S=null,w=null,L=null,N=null,_=null,C=!1,R=null,G=null,$=null,O=null,T=null;const P=s.getParameter(35661);let J=!1,Q=0;const q=s.getParameter(7938);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=Q>=2);let ne=null,K={};const V=s.getParameter(3088),B=s.getParameter(2978),se=new nt().fromArray(V),ie=new nt().fromArray(B);function ae(D,W,ee){const he=new Uint8Array(4),_e=s.createTexture();s.bindTexture(D,_e),s.texParameteri(D,10241,9728),s.texParameteri(D,10240,9728);for(let Fe=0;Fe<ee;Fe++)s.texImage2D(W+Fe,0,6408,1,1,0,6408,5121,he);return _e}const H={};H[3553]=ae(3553,3553,1),H[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Z(2929),c.setFunc(Yr),je(!1),lt(xs),Z(2884),Qe(pn);function Z(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function pe(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function ve(D,W){return m[D]!==W?(s.bindFramebuffer(D,W),m[D]=W,n&&(D===36009&&(m[36160]=W),D===36160&&(m[36009]=W)),!0):!1}function fe(D,W){let ee=p,he=!1;if(D)if(ee=g.get(W),ee===void 0&&(ee=[],g.set(W,ee)),D.isWebGLMultipleRenderTargets){const _e=D.texture;if(ee.length!==_e.length||ee[0]!==36064){for(let Fe=0,$e=_e.length;Fe<$e;Fe++)ee[Fe]=36064+Fe;ee.length=_e.length,he=!0}}else ee[0]!==36064&&(ee[0]=36064,he=!0);else ee[0]!==1029&&(ee[0]=1029,he=!0);he&&(t.isWebGL2?s.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Y(D){return f!==D?(s.useProgram(D),f=D,!0):!1}const Me={[ei]:32774,[No]:32778,[zo]:32779};if(n)Me[Ss]=32775,Me[bs]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Me[Ss]=D.MIN_EXT,Me[bs]=D.MAX_EXT)}const ye={[Oo]:0,[Uo]:1,[Bo]:768,[qa]:770,[Xo]:776,[Ho]:774,[ko]:772,[Go]:769,[ja]:771,[Wo]:775,[Vo]:773};function Qe(D,W,ee,he,_e,Fe,$e,st){if(D===pn){v===!0&&(pe(3042),v=!1);return}if(v===!1&&(Z(3042),v=!0),D!==Fo){if(D!==b||st!==C){if((M!==ei||L!==ei)&&(s.blendEquation(32774),M=ei,L=ei),st)switch(D){case ii:s.blendFuncSeparate(1,771,1,771);break;case vs:s.blendFunc(1,1);break;case Ms:s.blendFuncSeparate(0,769,0,1);break;case ys:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ii:s.blendFuncSeparate(770,771,1,771);break;case vs:s.blendFunc(770,1);break;case Ms:s.blendFuncSeparate(0,769,0,1);break;case ys:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,w=null,N=null,_=null,b=D,C=st}return}_e=_e||W,Fe=Fe||ee,$e=$e||he,(W!==M||_e!==L)&&(s.blendEquationSeparate(Me[W],Me[_e]),M=W,L=_e),(ee!==S||he!==w||Fe!==N||$e!==_)&&(s.blendFuncSeparate(ye[ee],ye[he],ye[Fe],ye[$e]),S=ee,w=he,N=Fe,_=$e),b=D,C=!1}function qe(D,W){D.side===rs?pe(2884):Z(2884);let ee=D.side===Ct;W&&(ee=!ee),je(ee),D.blending===ii&&D.transparent===!1?Qe(pn):Qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const he=D.stencilWrite;l.setTest(he),he&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ze(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(32926):pe(32926)}function je(D){R!==D&&(D?s.frontFace(2304):s.frontFace(2305),R=D)}function lt(D){D!==Po?(Z(2884),D!==G&&(D===xs?s.cullFace(1029):D===Ro?s.cullFace(1028):s.cullFace(1032))):pe(2884),G=D}function Ge(D){D!==$&&(J&&s.lineWidth(D),$=D)}function ze(D,W,ee){D?(Z(32823),(O!==W||T!==ee)&&(s.polygonOffset(W,ee),O=W,T=ee)):pe(32823)}function bt(D){D?Z(3089):pe(3089)}function dt(D){D===void 0&&(D=33984+P-1),ne!==D&&(s.activeTexture(D),ne=D)}function E(D,W,ee){ee===void 0&&(ne===null?ee=33984+P-1:ee=ne);let he=K[ee];he===void 0&&(he={type:void 0,texture:void 0},K[ee]=he),(he.type!==D||he.texture!==W)&&(ne!==ee&&(s.activeTexture(ee),ne=ee),s.bindTexture(D,W||H[D]),he.type=D,he.texture=W)}function x(){const D=K[ne];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function k(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function A(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(D){se.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),se.copy(D))}function me(D){ie.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function Ce(D,W){let ee=h.get(W);ee===void 0&&(ee=new WeakMap,h.set(W,ee));let he=ee.get(D);he===void 0&&(he=s.getUniformBlockIndex(W,D.name),ee.set(D,he))}function Le(D,W){const he=h.get(W).get(D);u.get(W)!==he&&(s.uniformBlockBinding(W,he,D.__bindingPointIndex),u.set(W,he))}function Oe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ne=null,K={},m={},g=new WeakMap,p=[],f=null,v=!1,b=null,M=null,S=null,w=null,L=null,N=null,_=null,C=!1,R=null,G=null,$=null,O=null,T=null,se.set(0,0,s.canvas.width,s.canvas.height),ie.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Z,disable:pe,bindFramebuffer:ve,drawBuffers:fe,useProgram:Y,setBlending:Qe,setMaterial:qe,setFlipSided:je,setCullFace:lt,setLineWidth:Ge,setPolygonOffset:ze,setScissorTest:bt,activeTexture:dt,bindTexture:E,unbindTexture:x,compressedTexImage2D:k,compressedTexImage3D:te,texImage2D:de,texImage3D:ce,updateUBOMapping:Ce,uniformBlockBinding:Le,texStorage2D:I,texStorage3D:ue,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:Se,compressedTexSubImage3D:A,scissor:ge,viewport:me,reset:Oe}}function _d(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,x){return v?new OffscreenCanvas(E,x):Ji("canvas")}function M(E,x,k,te){let re=1;if((E.width>te||E.height>te)&&(re=te/Math.max(E.width,E.height)),re<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const le=x?es:Math.floor,Se=le(re*E.width),A=le(re*E.height);p===void 0&&(p=b(Se,A));const I=k?b(Se,A):p;return I.width=Se,I.height=A,I.getContext("2d").drawImage(E,0,0,Se,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Se+"x"+A+")."),I}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function S(E){return Zs(E.width)&&Zs(E.height)}function w(E){return a?!1:E.wrapS!==Rt||E.wrapT!==Rt||E.minFilter!==ft&&E.minFilter!==Tt}function L(E,x){return E.generateMipmaps&&x&&E.minFilter!==ft&&E.minFilter!==Tt}function N(E){s.generateMipmap(E)}function _(E,x,k,te,re=!1){if(a===!1)return x;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=x;return x===6403&&(k===5126&&(le=33326),k===5131&&(le=33325),k===5121&&(le=33321)),x===33319&&(k===5126&&(le=33328),k===5131&&(le=33327),k===5121&&(le=33323)),x===6408&&(k===5126&&(le=34836),k===5131&&(le=34842),k===5121&&(le=te===Ue&&re===!1?35907:32856),k===32819&&(le=32854),k===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function C(E,x,k){return L(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==ft&&E.minFilter!==Tt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){return E===ft||E===ws||E===dr?9728:9729}function G(E){const x=E.target;x.removeEventListener("dispose",G),O(x),x.isVideoTexture&&g.delete(x)}function $(E){const x=E.target;x.removeEventListener("dispose",$),P(x)}function O(E){const x=n.get(E);if(x.__webglInit===void 0)return;const k=E.source,te=f.get(k);if(te){const re=te[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(E),Object.keys(te).length===0&&f.delete(k)}n.remove(E)}function T(E){const x=n.get(E);s.deleteTexture(x.__webglTexture);const k=E.source,te=f.get(k);delete te[x.__cacheKey],o.memory.textures--}function P(E){const x=E.texture,k=n.get(E),te=n.get(x);if(te.__webglTexture!==void 0&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)s.deleteFramebuffer(k.__webglFramebuffer[re]),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[re]);else{if(s.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let re=0;re<k.__webglColorRenderbuffer.length;re++)k.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[re]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let re=0,le=x.length;re<le;re++){const Se=n.get(x[re]);Se.__webglTexture&&(s.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(x[re])}n.remove(x),n.remove(E)}let J=0;function Q(){J=0}function q(){const E=J;return E>=c&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+c),J+=1,E}function ne(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.encoding),x.join()}function K(E,x){const k=n.get(E);if(E.isVideoTexture&&bt(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(k,E,x);return}}t.bindTexture(3553,k.__webglTexture,33984+x)}function V(E,x){const k=n.get(E);if(E.version>0&&k.__version!==E.version){pe(k,E,x);return}t.bindTexture(35866,k.__webglTexture,33984+x)}function B(E,x){const k=n.get(E);if(E.version>0&&k.__version!==E.version){pe(k,E,x);return}t.bindTexture(32879,k.__webglTexture,33984+x)}function se(E,x){const k=n.get(E);if(E.version>0&&k.__version!==E.version){ve(k,E,x);return}t.bindTexture(34067,k.__webglTexture,33984+x)}const ie={[Jr]:10497,[Rt]:33071,[Qr]:33648},ae={[ft]:9728,[ws]:9984,[dr]:9986,[Tt]:9729,[al]:9985,[Si]:9987};function H(E,x,k){if(k?(s.texParameteri(E,10242,ie[x.wrapS]),s.texParameteri(E,10243,ie[x.wrapT]),(E===32879||E===35866)&&s.texParameteri(E,32882,ie[x.wrapR]),s.texParameteri(E,10240,ae[x.magFilter]),s.texParameteri(E,10241,ae[x.minFilter])):(s.texParameteri(E,10242,33071),s.texParameteri(E,10243,33071),(E===32879||E===35866)&&s.texParameteri(E,32882,33071),(x.wrapS!==Rt||x.wrapT!==Rt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,10240,R(x.magFilter)),s.texParameteri(E,10241,R(x.minFilter)),x.minFilter!==ft&&x.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===ft||x.minFilter!==dr&&x.minFilter!==Si||x.type===An&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===bi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Z(E,x){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",G));const te=x.source;let re=f.get(te);re===void 0&&(re={},f.set(te,re));const le=ne(x);if(le!==E.__cacheKey){re[le]===void 0&&(re[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),re[le].usedTimes++;const Se=re[E.__cacheKey];Se!==void 0&&(re[E.__cacheKey].usedTimes--,Se.usedTimes===0&&T(x)),E.__cacheKey=le,E.__webglTexture=re[le].texture}return k}function pe(E,x,k){let te=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=35866),x.isData3DTexture&&(te=32879);const re=Z(E,x),le=x.source;t.bindTexture(te,E.__webglTexture,33984+k);const Se=n.get(le);if(le.version!==Se.__version||re===!0){t.activeTexture(33984+k),s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const A=w(x)&&S(x.image)===!1;let I=M(x.image,A,!1,u);I=dt(x,I);const ue=S(I)||a,de=r.convert(x.format,x.encoding);let ce=r.convert(x.type),ge=_(x.internalFormat,de,ce,x.encoding,x.isVideoTexture);H(te,x,ue);let me;const Ce=x.mipmaps,Le=a&&x.isVideoTexture!==!0,Oe=Se.__version===void 0||re===!0,D=C(x,I,ue);if(x.isDepthTexture)ge=6402,a?x.type===An?ge=36012:x.type===Tn?ge=33190:x.type===ri?ge=35056:ge=33189:x.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Cn&&ge===6402&&x.type!==Ka&&x.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Tn,ce=r.convert(x.type)),x.format===oi&&ge===6402&&(ge=34041,x.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ri,ce=r.convert(x.type))),Oe&&(Le?t.texStorage2D(3553,1,ge,I.width,I.height):t.texImage2D(3553,0,ge,I.width,I.height,0,de,ce,null));else if(x.isDataTexture)if(Ce.length>0&&ue){Le&&Oe&&t.texStorage2D(3553,D,ge,Ce[0].width,Ce[0].height);for(let W=0,ee=Ce.length;W<ee;W++)me=Ce[W],Le?t.texSubImage2D(3553,W,0,0,me.width,me.height,de,ce,me.data):t.texImage2D(3553,W,ge,me.width,me.height,0,de,ce,me.data);x.generateMipmaps=!1}else Le?(Oe&&t.texStorage2D(3553,D,ge,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,de,ce,I.data)):t.texImage2D(3553,0,ge,I.width,I.height,0,de,ce,I.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Le&&Oe&&t.texStorage3D(35866,D,ge,Ce[0].width,Ce[0].height,I.depth);for(let W=0,ee=Ce.length;W<ee;W++)me=Ce[W],x.format!==It?de!==null?Le?t.compressedTexSubImage3D(35866,W,0,0,0,me.width,me.height,I.depth,de,me.data,0,0):t.compressedTexImage3D(35866,W,ge,me.width,me.height,I.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,W,0,0,0,me.width,me.height,I.depth,de,ce,me.data):t.texImage3D(35866,W,ge,me.width,me.height,I.depth,0,de,ce,me.data)}else{Le&&Oe&&t.texStorage2D(3553,D,ge,Ce[0].width,Ce[0].height);for(let W=0,ee=Ce.length;W<ee;W++)me=Ce[W],x.format!==It?de!==null?Le?t.compressedTexSubImage2D(3553,W,0,0,me.width,me.height,de,me.data):t.compressedTexImage2D(3553,W,ge,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,W,0,0,me.width,me.height,de,ce,me.data):t.texImage2D(3553,W,ge,me.width,me.height,0,de,ce,me.data)}else if(x.isDataArrayTexture)Le?(Oe&&t.texStorage3D(35866,D,ge,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,de,ce,I.data)):t.texImage3D(35866,0,ge,I.width,I.height,I.depth,0,de,ce,I.data);else if(x.isData3DTexture)Le?(Oe&&t.texStorage3D(32879,D,ge,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,de,ce,I.data)):t.texImage3D(32879,0,ge,I.width,I.height,I.depth,0,de,ce,I.data);else if(x.isFramebufferTexture){if(Oe)if(Le)t.texStorage2D(3553,D,ge,I.width,I.height);else{let W=I.width,ee=I.height;for(let he=0;he<D;he++)t.texImage2D(3553,he,ge,W,ee,0,de,ce,null),W>>=1,ee>>=1}}else if(Ce.length>0&&ue){Le&&Oe&&t.texStorage2D(3553,D,ge,Ce[0].width,Ce[0].height);for(let W=0,ee=Ce.length;W<ee;W++)me=Ce[W],Le?t.texSubImage2D(3553,W,0,0,de,ce,me):t.texImage2D(3553,W,ge,de,ce,me);x.generateMipmaps=!1}else Le?(Oe&&t.texStorage2D(3553,D,ge,I.width,I.height),t.texSubImage2D(3553,0,0,0,de,ce,I)):t.texImage2D(3553,0,ge,de,ce,I);L(x,ue)&&N(te),Se.__version=le.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ve(E,x,k){if(x.image.length!==6)return;const te=Z(E,x),re=x.source;t.bindTexture(34067,E.__webglTexture,33984+k);const le=n.get(re);if(re.version!==le.__version||te===!0){t.activeTexture(33984+k),s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,A=x.image[0]&&x.image[0].isDataTexture,I=[];for(let W=0;W<6;W++)!Se&&!A?I[W]=M(x.image[W],!1,!0,l):I[W]=A?x.image[W].image:x.image[W],I[W]=dt(x,I[W]);const ue=I[0],de=S(ue)||a,ce=r.convert(x.format,x.encoding),ge=r.convert(x.type),me=_(x.internalFormat,ce,ge,x.encoding),Ce=a&&x.isVideoTexture!==!0,Le=le.__version===void 0||te===!0;let Oe=C(x,ue,de);H(34067,x,de);let D;if(Se){Ce&&Le&&t.texStorage2D(34067,Oe,me,ue.width,ue.height);for(let W=0;W<6;W++){D=I[W].mipmaps;for(let ee=0;ee<D.length;ee++){const he=D[ee];x.format!==It?ce!==null?Ce?t.compressedTexSubImage2D(34069+W,ee,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(34069+W,ee,me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(34069+W,ee,0,0,he.width,he.height,ce,ge,he.data):t.texImage2D(34069+W,ee,me,he.width,he.height,0,ce,ge,he.data)}}}else{D=x.mipmaps,Ce&&Le&&(D.length>0&&Oe++,t.texStorage2D(34067,Oe,me,I[0].width,I[0].height));for(let W=0;W<6;W++)if(A){Ce?t.texSubImage2D(34069+W,0,0,0,I[W].width,I[W].height,ce,ge,I[W].data):t.texImage2D(34069+W,0,me,I[W].width,I[W].height,0,ce,ge,I[W].data);for(let ee=0;ee<D.length;ee++){const _e=D[ee].image[W].image;Ce?t.texSubImage2D(34069+W,ee+1,0,0,_e.width,_e.height,ce,ge,_e.data):t.texImage2D(34069+W,ee+1,me,_e.width,_e.height,0,ce,ge,_e.data)}}else{Ce?t.texSubImage2D(34069+W,0,0,0,ce,ge,I[W]):t.texImage2D(34069+W,0,me,ce,ge,I[W]);for(let ee=0;ee<D.length;ee++){const he=D[ee];Ce?t.texSubImage2D(34069+W,ee+1,0,0,ce,ge,he.image[W]):t.texImage2D(34069+W,ee+1,me,ce,ge,he.image[W])}}}L(x,de)&&N(34067),le.__version=re.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function fe(E,x,k,te,re){const le=r.convert(k.format,k.encoding),Se=r.convert(k.type),A=_(k.internalFormat,le,Se,k.encoding);n.get(x).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,A,x.width,x.height,x.depth,0,le,Se,null):t.texImage2D(re,0,A,x.width,x.height,0,le,Se,null)),t.bindFramebuffer(36160,E),ze(x)?d.framebufferTexture2DMultisampleEXT(36160,te,re,n.get(k).__webglTexture,0,Ge(x)):(re===3553||re>=34069&&re<=34074)&&s.framebufferTexture2D(36160,te,re,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function Y(E,x,k){if(s.bindRenderbuffer(36161,E),x.depthBuffer&&!x.stencilBuffer){let te=33189;if(k||ze(x)){const re=x.depthTexture;re&&re.isDepthTexture&&(re.type===An?te=36012:re.type===Tn&&(te=33190));const le=Ge(x);ze(x)?d.renderbufferStorageMultisampleEXT(36161,le,te,x.width,x.height):s.renderbufferStorageMultisample(36161,le,te,x.width,x.height)}else s.renderbufferStorage(36161,te,x.width,x.height);s.framebufferRenderbuffer(36160,36096,36161,E)}else if(x.depthBuffer&&x.stencilBuffer){const te=Ge(x);k&&ze(x)===!1?s.renderbufferStorageMultisample(36161,te,35056,x.width,x.height):ze(x)?d.renderbufferStorageMultisampleEXT(36161,te,35056,x.width,x.height):s.renderbufferStorage(36161,34041,x.width,x.height),s.framebufferRenderbuffer(36160,33306,36161,E)}else{const te=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let re=0;re<te.length;re++){const le=te[re],Se=r.convert(le.format,le.encoding),A=r.convert(le.type),I=_(le.internalFormat,Se,A,le.encoding),ue=Ge(x);k&&ze(x)===!1?s.renderbufferStorageMultisample(36161,ue,I,x.width,x.height):ze(x)?d.renderbufferStorageMultisampleEXT(36161,ue,I,x.width,x.height):s.renderbufferStorage(36161,I,x.width,x.height)}}s.bindRenderbuffer(36161,null)}function Me(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const te=n.get(x.depthTexture).__webglTexture,re=Ge(x);if(x.depthTexture.format===Cn)ze(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,re):s.framebufferTexture2D(36160,36096,3553,te,0);else if(x.depthTexture.format===oi)ze(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,re):s.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function ye(E){const x=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Me(x.__webglFramebuffer,E)}else if(k){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=s.createRenderbuffer(),Y(x.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Y(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Qe(E,x,k){const te=n.get(E);x!==void 0&&fe(te.__webglFramebuffer,E,E.texture,36064,3553),k!==void 0&&ye(E)}function qe(E){const x=E.texture,k=n.get(E),te=n.get(x);E.addEventListener("dispose",$),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=x.version,o.memory.textures++);const re=E.isWebGLCubeRenderTarget===!0,le=E.isWebGLMultipleRenderTargets===!0,Se=S(E)||a;if(re){k.__webglFramebuffer=[];for(let A=0;A<6;A++)k.__webglFramebuffer[A]=s.createFramebuffer()}else{if(k.__webglFramebuffer=s.createFramebuffer(),le)if(i.drawBuffers){const A=E.texture;for(let I=0,ue=A.length;I<ue;I++){const de=n.get(A[I]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&ze(E)===!1){const A=le?x:[x];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let I=0;I<A.length;I++){const ue=A[I];k.__webglColorRenderbuffer[I]=s.createRenderbuffer(),s.bindRenderbuffer(36161,k.__webglColorRenderbuffer[I]);const de=r.convert(ue.format,ue.encoding),ce=r.convert(ue.type),ge=_(ue.internalFormat,de,ce,ue.encoding,E.isXRRenderTarget===!0),me=Ge(E);s.renderbufferStorageMultisample(36161,me,ge,E.width,E.height),s.framebufferRenderbuffer(36160,36064+I,36161,k.__webglColorRenderbuffer[I])}s.bindRenderbuffer(36161,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Y(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,te.__webglTexture),H(34067,x,Se);for(let A=0;A<6;A++)fe(k.__webglFramebuffer[A],E,x,36064,34069+A);L(x,Se)&&N(34067),t.unbindTexture()}else if(le){const A=E.texture;for(let I=0,ue=A.length;I<ue;I++){const de=A[I],ce=n.get(de);t.bindTexture(3553,ce.__webglTexture),H(3553,de,Se),fe(k.__webglFramebuffer,E,de,36064+I,3553),L(de,Se)&&N(3553)}t.unbindTexture()}else{let A=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?A=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,te.__webglTexture),H(A,x,Se),fe(k.__webglFramebuffer,E,x,36064,A),L(x,Se)&&N(A),t.unbindTexture()}E.depthBuffer&&ye(E)}function je(E){const x=S(E)||a,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,re=k.length;te<re;te++){const le=k[te];if(L(le,x)){const Se=E.isWebGLCubeRenderTarget?34067:3553,A=n.get(le).__webglTexture;t.bindTexture(Se,A),N(Se),t.unbindTexture()}}}function lt(E){if(a&&E.samples>0&&ze(E)===!1){const x=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,te=E.height;let re=16384;const le=[],Se=E.stencilBuffer?33306:36096,A=n.get(E),I=E.isWebGLMultipleRenderTargets===!0;if(I)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){le.push(36064+ue),E.depthBuffer&&le.push(Se);const de=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(de===!1&&(E.depthBuffer&&(re|=256),E.stencilBuffer&&(re|=1024)),I&&s.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ue]),de===!0&&(s.invalidateFramebuffer(36008,[Se]),s.invalidateFramebuffer(36009,[Se])),I){const ce=n.get(x[ue]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,ce,0)}s.blitFramebuffer(0,0,k,te,0,0,k,te,re,9728),m&&s.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ue,36161,A.__webglColorRenderbuffer[ue]);const de=n.get(x[ue]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ue,3553,de,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function Ge(E){return Math.min(h,E.samples)}function ze(E){const x=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function bt(E){const x=o.render.frame;g.get(E)!==x&&(g.set(E,x),E.update())}function dt(E,x){const k=E.encoding,te=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===$r||k!==Rn&&(k===Ue?a===!1?e.has("EXT_sRGB")===!0&&te===It?(E.format=$r,E.minFilter=Tt,E.generateMipmaps=!1):x=$a.sRGBToLinear(x):(te!==It||re!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),x}this.allocateTextureUnit=q,this.resetTextureUnits=Q,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=se,this.rebindTextures=Qe,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ze}function xd(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Pn)return 5121;if(r===ul)return 32819;if(r===hl)return 32820;if(r===ol)return 5120;if(r===ll)return 5122;if(r===Ka)return 5123;if(r===cl)return 5124;if(r===Tn)return 5125;if(r===An)return 5126;if(r===bi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===fl)return 6406;if(r===It)return 6408;if(r===pl)return 6409;if(r===ml)return 6410;if(r===Cn)return 6402;if(r===oi)return 34041;if(r===dl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===$r)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===gl)return 6403;if(r===_l)return 36244;if(r===xl)return 33319;if(r===vl)return 33320;if(r===Ml)return 36249;if(r===pr||r===mr||r===gr||r===_r)if(o===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===pr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===pr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_r)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Es||r===Ts||r===As||r===Cs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Es)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ts)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===As)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ls||r===Ds)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ls)return o===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Ds)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ps||r===Rs||r===Is||r===Fs||r===Ns||r===zs||r===Os||r===Us||r===Bs||r===Gs||r===ks||r===Vs||r===Hs||r===Ws)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ps)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Is)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ns)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Os)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Us)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ks)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Hs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ws)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Xs)return o===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ri?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class vd extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let yi=class extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Md={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),v=this._getHandJoint(l,p);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class yd extends St{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:Cn,u!==Cn&&u!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Cn&&(n=Tn),n===void 0&&u===oi&&(n=ri),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ft,this.minFilter=c!==void 0?c:ft,this.flipY=!1,this.generateMipmaps=!1}}class Sd extends zn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=null,l=null,u=null,h=null,d=null,m=null;const g=t.getContextAttributes();let p=null,f=null;const v=[],b=[],M=new Set,S=new Map,w=new At;w.layers.enable(1),w.viewport=new nt;const L=new At;L.layers.enable(2),L.viewport=new nt;const N=[w,L],_=new vd;_.layers.enable(1),_.layers.enable(2);let C=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let B=v[V];return B===void 0&&(B=new Wr,v[V]=B),B.getTargetRaySpace()},this.getControllerGrip=function(V){let B=v[V];return B===void 0&&(B=new Wr,v[V]=B),B.getGripSpace()},this.getHand=function(V){let B=v[V];return B===void 0&&(B=new Wr,v[V]=B),B.getHandSpace()};function G(V){const B=b.indexOf(V.inputSource);if(B===-1)return;const se=v[B];se!==void 0&&se.dispatchEvent({type:V.type,data:V.inputSource})}function $(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",O);for(let V=0;V<v.length;V++){const B=b[V];B!==null&&(b[V]=null,v[V].disconnect(B))}C=null,R=null,e.setRenderTarget(p),d=null,h=null,u=null,i=null,f=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",$),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:d}),f=new In(d.framebufferWidth,d.framebufferHeight,{format:It,type:Pn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let B=null,se=null,ie=null;g.depth&&(ie=g.stencil?35056:33190,B=g.stencil?oi:Cn,se=g.stencil?ri:Tn);const ae={colorFormat:32856,depthFormat:ie,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ae),i.updateRenderState({layers:[h]}),f=new In(h.textureWidth,h.textureHeight,{format:It,type:Pn,depthTexture:new yd(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const H=e.properties.get(f);H.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(V){for(let B=0;B<V.removed.length;B++){const se=V.removed[B],ie=b.indexOf(se);ie>=0&&(b[ie]=null,v[ie].disconnect(se))}for(let B=0;B<V.added.length;B++){const se=V.added[B];let ie=b.indexOf(se);if(ie===-1){for(let H=0;H<v.length;H++)if(H>=b.length){b.push(se),ie=H;break}else if(b[H]===null){b[H]=se,ie=H;break}if(ie===-1)break}const ae=v[ie];ae&&ae.connect(se)}}const T=new z,P=new z;function J(V,B,se){T.setFromMatrixPosition(B.matrixWorld),P.setFromMatrixPosition(se.matrixWorld);const ie=T.distanceTo(P),ae=B.projectionMatrix.elements,H=se.projectionMatrix.elements,Z=ae[14]/(ae[10]-1),pe=ae[14]/(ae[10]+1),ve=(ae[9]+1)/ae[5],fe=(ae[9]-1)/ae[5],Y=(ae[8]-1)/ae[0],Me=(H[8]+1)/H[0],ye=Z*Y,Qe=Z*Me,qe=ie/(-Y+Me),je=qe*-Y;B.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(je),V.translateZ(qe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const lt=Z+qe,Ge=pe+qe,ze=ye-je,bt=Qe+(ie-je),dt=ve*pe/Ge*lt,E=fe*pe/Ge*lt;V.projectionMatrix.makePerspective(ze,bt,dt,E,lt,Ge)}function Q(V,B){B===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(B.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;_.near=L.near=w.near=V.near,_.far=L.far=w.far=V.far,(C!==_.near||R!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,R=_.far);const B=V.parent,se=_.cameras;Q(_,B);for(let ae=0;ae<se.length;ae++)Q(se[ae],B);_.matrixWorld.decompose(_.position,_.quaternion,_.scale),V.matrix.copy(_.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const ie=V.children;for(let ae=0,H=ie.length;ae<H;ae++)ie[ae].updateMatrixWorld(!0);se.length===2?J(_,w,L):_.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return _},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(V){h!==null&&(h.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.getPlanes=function(){return M};let q=null;function ne(V,B){if(l=B.getViewerPose(c||o),m=B,l!==null){const se=l.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let ie=!1;se.length!==_.cameras.length&&(_.cameras.length=0,ie=!0);for(let ae=0;ae<se.length;ae++){const H=se[ae];let Z=null;if(d!==null)Z=d.getViewport(H);else{const ve=u.getViewSubImage(h,H);Z=ve.viewport,ae===0&&(e.setRenderTargetTextures(f,ve.colorTexture,h.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(f))}let pe=N[ae];pe===void 0&&(pe=new At,pe.layers.enable(ae),pe.viewport=new nt,N[ae]=pe),pe.matrix.fromArray(H.transform.matrix),pe.projectionMatrix.fromArray(H.projectionMatrix),pe.viewport.set(Z.x,Z.y,Z.width,Z.height),ae===0&&_.matrix.copy(pe.matrix),ie===!0&&_.cameras.push(pe)}}for(let se=0;se<v.length;se++){const ie=b[se],ae=v[se];ie!==null&&ae!==void 0&&ae.update(ie,B,c||o)}if(q&&q(V,B),B.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:B.detectedPlanes});let se=null;for(const ie of M)B.detectedPlanes.has(ie)||(se===null&&(se=[]),se.push(ie));if(se!==null)for(const ie of se)M.delete(ie),S.delete(ie),n.dispatchEvent({type:"planeremoved",data:ie});for(const ie of B.detectedPlanes)if(!M.has(ie))M.add(ie),S.set(ie,B.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ie});else{const ae=S.get(ie);ie.lastChangedTime>ae&&(S.set(ie,ie.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ie}))}}m=null}const K=new uo;K.setAnimationLoop(ne),this.setAnimationLoop=function(V){q=V},this.dispose=function(){}}}function bd(s,e){function t(p,f){f.color.getRGB(p.fogColor.value,oo(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,v,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,M)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(r(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,v,b):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ct&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ct&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const S=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*S}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let b;f.map?b=f.map:f.specularMap?b=f.specularMap:f.displacementMap?b=f.displacementMap:f.normalMap?b=f.normalMap:f.bumpMap?b=f.bumpMap:f.roughnessMap?b=f.roughnessMap:f.metalnessMap?b=f.metalnessMap:f.alphaMap?b=f.alphaMap:f.emissiveMap?b=f.emissiveMap:f.clearcoatMap?b=f.clearcoatMap:f.clearcoatNormalMap?b=f.clearcoatNormalMap:f.clearcoatRoughnessMap?b=f.clearcoatRoughnessMap:f.iridescenceMap?b=f.iridescenceMap:f.iridescenceThicknessMap?b=f.iridescenceThicknessMap:f.specularIntensityMap?b=f.specularIntensityMap:f.specularColorMap?b=f.specularColorMap:f.transmissionMap?b=f.transmissionMap:f.thicknessMap?b=f.thicknessMap:f.sheenColorMap?b=f.sheenColorMap:f.sheenRoughnessMap&&(b=f.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let M;f.aoMap?M=f.aoMap:f.lightMap&&(M=f.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uv2Transform.value.copy(M.matrix))}function r(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,v,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=b*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let M;f.map?M=f.map:f.alphaMap&&(M=f.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ct&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function wd(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function c(b,M){const S=M.program;n.uniformBlockBinding(b,S)}function l(b,M){let S=i[b.id];S===void 0&&(g(b),S=u(b),i[b.id]=S,b.addEventListener("dispose",f));const w=M.program;n.updateUBOMapping(b,w);const L=e.render.frame;r[b.id]!==L&&(d(b),r[b.id]=L)}function u(b){const M=h();b.__bindingPointIndex=M;const S=s.createBuffer(),w=b.__size,L=b.usage;return s.bindBuffer(35345,S),s.bufferData(35345,w,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,M,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=i[b.id],S=b.uniforms,w=b.__cache;s.bindBuffer(35345,M);for(let L=0,N=S.length;L<N;L++){const _=S[L];if(m(_,L,w)===!0){const C=_.__offset,R=Array.isArray(_.value)?_.value:[_.value];let G=0;for(let $=0;$<R.length;$++){const O=R[$],T=p(O);typeof O=="number"?(_.__data[0]=O,s.bufferSubData(35345,C+G,_.__data)):O.isMatrix3?(_.__data[0]=O.elements[0],_.__data[1]=O.elements[1],_.__data[2]=O.elements[2],_.__data[3]=O.elements[0],_.__data[4]=O.elements[3],_.__data[5]=O.elements[4],_.__data[6]=O.elements[5],_.__data[7]=O.elements[0],_.__data[8]=O.elements[6],_.__data[9]=O.elements[7],_.__data[10]=O.elements[8],_.__data[11]=O.elements[0]):(O.toArray(_.__data,G),G+=T.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,C,_.__data)}}s.bindBuffer(35345,null)}function m(b,M,S){const w=b.value;if(S[M]===void 0){if(typeof w=="number")S[M]=w;else{const L=Array.isArray(w)?w:[w],N=[];for(let _=0;_<L.length;_++)N.push(L[_].clone());S[M]=N}return!0}else if(typeof w=="number"){if(S[M]!==w)return S[M]=w,!0}else{const L=Array.isArray(S[M])?S[M]:[S[M]],N=Array.isArray(w)?w:[w];for(let _=0;_<L.length;_++){const C=L[_];if(C.equals(N[_])===!1)return C.copy(N[_]),!0}}return!1}function g(b){const M=b.uniforms;let S=0;const w=16;let L=0;for(let N=0,_=M.length;N<_;N++){const C=M[N],R={boundary:0,storage:0},G=Array.isArray(C.value)?C.value:[C.value];for(let $=0,O=G.length;$<O;$++){const T=G[$],P=p(T);R.boundary+=P.boundary,R.storage+=P.storage}if(C.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,N>0){L=S%w;const $=w-L;L!==0&&$-R.boundary<0&&(S+=w-L,C.__offset=S)}S+=R.storage}return L=S%w,L>0&&(S+=w-L),b.__size=S,b.__cache={},this}function p(b){const M={boundary:0,storage:0};return typeof b=="number"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function f(b){const M=b.target;M.removeEventListener("dispose",f);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function v(){for(const b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:c,update:l,dispose:v}}function Ed(){const s=Ji("canvas");return s.style.display="block",s}function _o(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:Ed(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Rn,this.physicallyCorrectLights=!1,this.toneMapping=Gt,this.toneMappingExposure=1;const p=this;let f=!1,v=0,b=0,M=null,S=-1,w=null;const L=new nt,N=new nt;let _=null,C=e.width,R=e.height,G=1,$=null,O=null;const T=new nt(0,0,C,R),P=new nt(0,0,C,R);let J=!1;const Q=new as;let q=!1,ne=!1,K=null;const V=new Xe,B=new we,se=new z,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return M===null?G:1}let H=t;function Z(y,U){for(let X=0;X<y.length;X++){const F=y[X],j=e.getContext(F,U);if(j!==null)return j}return null}try{const y={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ns}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),H===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),H=Z(U,y),H===null)throw Z(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let pe,ve,fe,Y,Me,ye,Qe,qe,je,lt,Ge,ze,bt,dt,E,x,k,te,re,le,Se,A,I,ue;function de(){pe=new Nh(H),ve=new Lh(H,pe,s),pe.init(ve),A=new xd(H,pe,ve),fe=new gd(H,pe,ve),Y=new Uh,Me=new nd,ye=new _d(H,pe,fe,Me,ve,A,Y),Qe=new Ph(p),qe=new Fh(p),je=new jl(H,ve),I=new Ah(H,pe,je,ve),lt=new zh(H,je,Y,I),Ge=new Vh(H,lt,je,Y),re=new kh(H,ve,ye),x=new Dh(Me),ze=new td(p,Qe,qe,pe,ve,I,x),bt=new bd(p,Me),dt=new rd,E=new ud(pe,ve),te=new Th(p,Qe,qe,fe,Ge,u,o),k=new md(p,Ge,ve),ue=new wd(H,Y,ve,fe),le=new Ch(H,pe,Y,ve),Se=new Oh(H,pe,Y,ve),Y.programs=ze.programs,p.capabilities=ve,p.extensions=pe,p.properties=Me,p.renderLists=dt,p.shadowMap=k,p.state=fe,p.info=Y}de();const ce=new Sd(p,H);this.xr=ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const y=pe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=pe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(C,R,!1))},this.getSize=function(y){return y.set(C,R)},this.setSize=function(y,U,X){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=y,R=U,e.width=Math.floor(y*G),e.height=Math.floor(U*G),X!==!1&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(C*G,R*G).floor()},this.setDrawingBufferSize=function(y,U,X){C=y,R=U,G=X,e.width=Math.floor(y*X),e.height=Math.floor(U*X),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(T)},this.setViewport=function(y,U,X,F){y.isVector4?T.set(y.x,y.y,y.z,y.w):T.set(y,U,X,F),fe.viewport(L.copy(T).multiplyScalar(G).floor())},this.getScissor=function(y){return y.copy(P)},this.setScissor=function(y,U,X,F){y.isVector4?P.set(y.x,y.y,y.z,y.w):P.set(y,U,X,F),fe.scissor(N.copy(P).multiplyScalar(G).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(y){fe.setScissorTest(J=y)},this.setOpaqueSort=function(y){$=y},this.setTransparentSort=function(y){O=y},this.getClearColor=function(y){return y.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(y=!0,U=!0,X=!0){let F=0;y&&(F|=16384),U&&(F|=256),X&&(F|=1024),H.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),dt.dispose(),E.dispose(),Me.dispose(),Qe.dispose(),qe.dispose(),Ge.dispose(),I.dispose(),ue.dispose(),ze.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",he),ce.removeEventListener("sessionend",_e),K&&(K.dispose(),K=null),Fe.stop()};function ge(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const y=Y.autoReset,U=k.enabled,X=k.autoUpdate,F=k.needsUpdate,j=k.type;de(),Y.autoReset=y,k.enabled=U,k.autoUpdate=X,k.needsUpdate=F,k.type=j}function Ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Le(y){const U=y.target;U.removeEventListener("dispose",Le),Oe(U)}function Oe(y){D(y),Me.remove(y)}function D(y){const U=Me.get(y).programs;U!==void 0&&(U.forEach(function(X){ze.releaseProgram(X)}),y.isShaderMaterial&&ze.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,X,F,j,xe){U===null&&(U=ie);const be=j.isMesh&&j.matrixWorld.determinant()<0,Te=wo(y,U,X,F,j);fe.setMaterial(F,be);let Ae=X.index,Ie=1;F.wireframe===!0&&(Ae=lt.getWireframeAttribute(X),Ie=2);const De=X.drawRange,Pe=X.attributes.position;let Ve=De.start*Ie,mt=(De.start+De.count)*Ie;xe!==null&&(Ve=Math.max(Ve,xe.start*Ie),mt=Math.min(mt,(xe.start+xe.count)*Ie)),Ae!==null?(Ve=Math.max(Ve,0),mt=Math.min(mt,Ae.count)):Pe!=null&&(Ve=Math.max(Ve,0),mt=Math.min(mt,Pe.count));const Wt=mt-Ve;if(Wt<0||Wt===1/0)return;I.setup(j,F,Te,X,Ae);let gn,He=le;if(Ae!==null&&(gn=je.get(Ae),He=Se,He.setIndex(gn)),j.isMesh)F.wireframe===!0?(fe.setLineWidth(F.wireframeLinewidth*ae()),He.setMode(1)):He.setMode(4);else if(j.isLine){let Re=F.linewidth;Re===void 0&&(Re=1),fe.setLineWidth(Re*ae()),j.isLineSegments?He.setMode(1):j.isLineLoop?He.setMode(2):He.setMode(3)}else j.isPoints?He.setMode(0):j.isSprite&&He.setMode(4);if(j.isInstancedMesh)He.renderInstances(Ve,Wt,j.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ar=Math.min(X.instanceCount,Re);He.renderInstances(Ve,Wt,ar)}else He.render(Ve,Wt)},this.compile=function(y,U){function X(F,j,xe){F.transparent===!0&&F.side===Ci?(F.side=Ct,F.needsUpdate=!0,wt(F,j,xe),F.side=Dn,F.needsUpdate=!0,wt(F,j,xe),F.side=Ci):wt(F,j,xe)}d=E.get(y),d.init(),g.push(d),y.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(p.physicallyCorrectLights),y.traverse(function(F){const j=F.material;if(j)if(Array.isArray(j))for(let xe=0;xe<j.length;xe++){const be=j[xe];X(be,y,F)}else X(j,y,F)}),g.pop(),d=null};let W=null;function ee(y){W&&W(y)}function he(){Fe.stop()}function _e(){Fe.start()}const Fe=new uo;Fe.setAnimationLoop(ee),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(y){W=y,ce.setAnimationLoop(y),y===null?Fe.stop():Fe.start()},ce.addEventListener("sessionstart",he),ce.addEventListener("sessionend",_e),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,U,M),d=E.get(y,g.length),d.init(),g.push(d),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(V),ne=this.localClippingEnabled,q=x.init(this.clippingPlanes,ne,U),h=dt.get(y,m.length),h.init(),m.push(h),$e(y,U,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort($,O),q===!0&&x.beginShadows();const X=d.state.shadowsArray;if(k.render(X,y,U),q===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(h,y),d.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const F=U.cameras;for(let j=0,xe=F.length;j<xe;j++){const be=F[j];st(h,y,be,be.viewport)}}else st(h,y,U);M!==null&&(ye.updateMultisampleRenderTarget(M),ye.updateRenderTargetMipmap(M)),y.isScene===!0&&y.onAfterRender(p,y,U),I.resetDefaultState(),S=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function $e(y,U,X,F){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Q.intersectsSprite(y)){F&&se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(V);const be=Ge.update(y),Te=y.material;Te.visible&&h.push(y,be,Te,X,se.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Y.render.frame&&(y.skeleton.update(),y.skeleton.frame=Y.render.frame),!y.frustumCulled||Q.intersectsObject(y))){F&&se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(V);const be=Ge.update(y),Te=y.material;if(Array.isArray(Te)){const Ae=be.groups;for(let Ie=0,De=Ae.length;Ie<De;Ie++){const Pe=Ae[Ie],Ve=Te[Pe.materialIndex];Ve&&Ve.visible&&h.push(y,be,Ve,X,se.z,Pe)}}else Te.visible&&h.push(y,be,Te,X,se.z,null)}}const xe=y.children;for(let be=0,Te=xe.length;be<Te;be++)$e(xe[be],U,X,F)}function st(y,U,X,F){const j=y.opaque,xe=y.transmissive,be=y.transparent;d.setupLightsView(X),xe.length>0&&mn(j,U,X),F&&fe.viewport(L.copy(F)),j.length>0&&Be(j,U,X),xe.length>0&&Be(xe,U,X),be.length>0&&Be(be,U,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function mn(y,U,X){const F=ve.isWebGL2;K===null&&(K=new In(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?bi:Pn,minFilter:Si,samples:F&&r===!0?4:0})),p.getDrawingBufferSize(B),F?K.setSize(B.x,B.y):K.setSize(es(B.x),es(B.y));const j=p.getRenderTarget();p.setRenderTarget(K),p.clear();const xe=p.toneMapping;p.toneMapping=Gt,Be(y,U,X),p.toneMapping=xe,ye.updateMultisampleRenderTarget(K),ye.updateRenderTargetMipmap(K),p.setRenderTarget(j)}function Be(y,U,X){const F=U.isScene===!0?U.overrideMaterial:null;for(let j=0,xe=y.length;j<xe;j++){const be=y[j],Te=be.object,Ae=be.geometry,Ie=F===null?be.material:F,De=be.group;Te.layers.test(X.layers)&&Ht(Te,U,X,Ae,Ie,De)}}function Ht(y,U,X,F,j,xe){y.onBeforeRender(p,U,X,F,j,xe),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),j.onBeforeRender(p,U,X,F,y,xe),j.transparent===!0&&j.side===Ci?(j.side=Ct,j.needsUpdate=!0,p.renderBufferDirect(X,U,F,j,y,xe),j.side=Dn,j.needsUpdate=!0,p.renderBufferDirect(X,U,F,j,y,xe),j.side=Ci):p.renderBufferDirect(X,U,F,j,y,xe),y.onAfterRender(p,U,X,F,j,xe)}function wt(y,U,X){U.isScene!==!0&&(U=ie);const F=Me.get(y),j=d.state.lights,xe=d.state.shadowsArray,be=j.state.version,Te=ze.getParameters(y,j.state,xe,U,X),Ae=ze.getProgramCacheKey(Te);let Ie=F.programs;F.environment=y.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(y.isMeshStandardMaterial?qe:Qe).get(y.envMap||F.environment),Ie===void 0&&(y.addEventListener("dispose",Le),Ie=new Map,F.programs=Ie);let De=Ie.get(Ae);if(De!==void 0){if(F.currentProgram===De&&F.lightsStateVersion===be)return fs(y,Te),De}else Te.uniforms=ze.getUniforms(y),y.onBuild(X,Te,p),y.onBeforeCompile(Te,p),De=ze.acquireProgram(Te,Ae),Ie.set(Ae,De),F.uniforms=Te.uniforms;const Pe=F.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=x.uniform),fs(y,Te),F.needsLights=To(y),F.lightsStateVersion=be,F.needsLights&&(Pe.ambientLightColor.value=j.state.ambient,Pe.lightProbe.value=j.state.probe,Pe.directionalLights.value=j.state.directional,Pe.directionalLightShadows.value=j.state.directionalShadow,Pe.spotLights.value=j.state.spot,Pe.spotLightShadows.value=j.state.spotShadow,Pe.rectAreaLights.value=j.state.rectArea,Pe.ltc_1.value=j.state.rectAreaLTC1,Pe.ltc_2.value=j.state.rectAreaLTC2,Pe.pointLights.value=j.state.point,Pe.pointLightShadows.value=j.state.pointShadow,Pe.hemisphereLights.value=j.state.hemi,Pe.directionalShadowMap.value=j.state.directionalShadowMap,Pe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Pe.spotShadowMap.value=j.state.spotShadowMap,Pe.spotLightMatrix.value=j.state.spotLightMatrix,Pe.spotLightMap.value=j.state.spotLightMap,Pe.pointShadowMap.value=j.state.pointShadowMap,Pe.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ve=De.getUniforms(),mt=Ki.seqWithValue(Ve.seq,Pe);return F.currentProgram=De,F.uniformsList=mt,De}function fs(y,U){const X=Me.get(y);X.outputEncoding=U.outputEncoding,X.instancing=U.instancing,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function wo(y,U,X,F,j){U.isScene!==!0&&(U=ie),ye.resetTextureUnits();const xe=U.fog,be=F.isMeshStandardMaterial?U.environment:null,Te=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Rn,Ae=(F.isMeshStandardMaterial?qe:Qe).get(F.envMap||be),Ie=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,De=!!F.normalMap&&!!X.attributes.tangent,Pe=!!X.morphAttributes.position,Ve=!!X.morphAttributes.normal,mt=!!X.morphAttributes.color,Wt=F.toneMapped?p.toneMapping:Gt,gn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,He=gn!==void 0?gn.length:0,Re=Me.get(F),ar=d.state.lights;if(q===!0&&(ne===!0||y!==w)){const gt=y===w&&F.id===S;x.setState(F,y,gt)}let et=!1;F.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ar.state.version||Re.outputEncoding!==Te||j.isInstancedMesh&&Re.instancing===!1||!j.isInstancedMesh&&Re.instancing===!0||j.isSkinnedMesh&&Re.skinning===!1||!j.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Ae||F.fog===!0&&Re.fog!==xe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==x.numPlanes||Re.numIntersection!==x.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==De||Re.morphTargets!==Pe||Re.morphNormals!==Ve||Re.morphColors!==mt||Re.toneMapping!==Wt||ve.isWebGL2===!0&&Re.morphTargetsCount!==He)&&(et=!0):(et=!0,Re.__version=F.version);let _n=Re.currentProgram;et===!0&&(_n=wt(F,U,j));let ds=!1,hi=!1,or=!1;const ct=_n.getUniforms(),xn=Re.uniforms;if(fe.useProgram(_n.program)&&(ds=!0,hi=!0,or=!0),F.id!==S&&(S=F.id,hi=!0),ds||w!==y){if(ct.setValue(H,"projectionMatrix",y.projectionMatrix),ve.logarithmicDepthBuffer&&ct.setValue(H,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),w!==y&&(w=y,hi=!0,or=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const gt=ct.map.cameraPosition;gt!==void 0&&gt.setValue(H,se.setFromMatrixPosition(y.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ct.setValue(H,"isOrthographic",y.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||j.isSkinnedMesh)&&ct.setValue(H,"viewMatrix",y.matrixWorldInverse)}if(j.isSkinnedMesh){ct.setOptional(H,j,"bindMatrix"),ct.setOptional(H,j,"bindMatrixInverse");const gt=j.skeleton;gt&&(ve.floatVertexTextures?(gt.boneTexture===null&&gt.computeBoneTexture(),ct.setValue(H,"boneTexture",gt.boneTexture,ye),ct.setValue(H,"boneTextureSize",gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lr=X.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&ve.isWebGL2===!0)&&re.update(j,X,F,_n),(hi||Re.receiveShadow!==j.receiveShadow)&&(Re.receiveShadow=j.receiveShadow,ct.setValue(H,"receiveShadow",j.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(xn.envMap.value=Ae,xn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),hi&&(ct.setValue(H,"toneMappingExposure",p.toneMappingExposure),Re.needsLights&&Eo(xn,or),xe&&F.fog===!0&&bt.refreshFogUniforms(xn,xe),bt.refreshMaterialUniforms(xn,F,G,R,K),Ki.upload(H,Re.uniformsList,xn,ye)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ki.upload(H,Re.uniformsList,xn,ye),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ct.setValue(H,"center",j.center),ct.setValue(H,"modelViewMatrix",j.modelViewMatrix),ct.setValue(H,"normalMatrix",j.normalMatrix),ct.setValue(H,"modelMatrix",j.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const gt=F.uniformsGroups;for(let cr=0,Ao=gt.length;cr<Ao;cr++)if(ve.isWebGL2){const ps=gt[cr];ue.update(ps,_n),ue.bind(ps,_n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _n}function Eo(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function To(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(y,U,X){Me.get(y.texture).__webglTexture=U,Me.get(y.depthTexture).__webglTexture=X;const F=Me.get(y);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=X===void 0,F.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const X=Me.get(y);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,X=0){M=y,v=U,b=X;let F=!0,j=null,xe=!1,be=!1;if(y){const Ae=Me.get(y);Ae.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),F=!1):Ae.__webglFramebuffer===void 0?ye.setupRenderTarget(y):Ae.__hasExternalTextures&&ye.rebindTextures(y,Me.get(y.texture).__webglTexture,Me.get(y.depthTexture).__webglTexture);const Ie=y.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);const De=Me.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(j=De[U],xe=!0):ve.isWebGL2&&y.samples>0&&ye.useMultisampledRTT(y)===!1?j=Me.get(y).__webglMultisampledFramebuffer:j=De,L.copy(y.viewport),N.copy(y.scissor),_=y.scissorTest}else L.copy(T).multiplyScalar(G).floor(),N.copy(P).multiplyScalar(G).floor(),_=J;if(fe.bindFramebuffer(36160,j)&&ve.drawBuffers&&F&&fe.drawBuffers(y,j),fe.viewport(L),fe.scissor(N),fe.setScissorTest(_),xe){const Ae=Me.get(y.texture);H.framebufferTexture2D(36160,36064,34069+U,Ae.__webglTexture,X)}else if(be){const Ae=Me.get(y.texture),Ie=U||0;H.framebufferTextureLayer(36160,36064,Ae.__webglTexture,X||0,Ie)}S=-1},this.readRenderTargetPixels=function(y,U,X,F,j,xe,be){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Me.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&be!==void 0&&(Te=Te[be]),Te){fe.bindFramebuffer(36160,Te);try{const Ae=y.texture,Ie=Ae.format,De=Ae.type;if(Ie!==It&&A.convert(Ie)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=De===bi&&(pe.has("EXT_color_buffer_half_float")||ve.isWebGL2&&pe.has("EXT_color_buffer_float"));if(De!==Pn&&A.convert(De)!==H.getParameter(35738)&&!(De===An&&(ve.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-F&&X>=0&&X<=y.height-j&&H.readPixels(U,X,F,j,A.convert(Ie),A.convert(De),xe)}finally{const Ae=M!==null?Me.get(M).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(y,U,X=0){const F=Math.pow(2,-X),j=Math.floor(U.image.width*F),xe=Math.floor(U.image.height*F);ye.setTexture2D(U,0),H.copyTexSubImage2D(3553,X,0,0,y.x,y.y,j,xe),fe.unbindTexture()},this.copyTextureToTexture=function(y,U,X,F=0){const j=U.image.width,xe=U.image.height,be=A.convert(X.format),Te=A.convert(X.type);ye.setTexture2D(X,0),H.pixelStorei(37440,X.flipY),H.pixelStorei(37441,X.premultiplyAlpha),H.pixelStorei(3317,X.unpackAlignment),U.isDataTexture?H.texSubImage2D(3553,F,y.x,y.y,j,xe,be,Te,U.image.data):U.isCompressedTexture?H.compressedTexSubImage2D(3553,F,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,be,U.mipmaps[0].data):H.texSubImage2D(3553,F,y.x,y.y,be,Te,U.image),F===0&&X.generateMipmaps&&H.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(y,U,X,F,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=y.max.x-y.min.x+1,be=y.max.y-y.min.y+1,Te=y.max.z-y.min.z+1,Ae=A.convert(F.format),Ie=A.convert(F.type);let De;if(F.isData3DTexture)ye.setTexture3D(F,0),De=32879;else if(F.isDataArrayTexture)ye.setTexture2DArray(F,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,F.flipY),H.pixelStorei(37441,F.premultiplyAlpha),H.pixelStorei(3317,F.unpackAlignment);const Pe=H.getParameter(3314),Ve=H.getParameter(32878),mt=H.getParameter(3316),Wt=H.getParameter(3315),gn=H.getParameter(32877),He=X.isCompressedTexture?X.mipmaps[0]:X.image;H.pixelStorei(3314,He.width),H.pixelStorei(32878,He.height),H.pixelStorei(3316,y.min.x),H.pixelStorei(3315,y.min.y),H.pixelStorei(32877,y.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(De,j,U.x,U.y,U.z,xe,be,Te,Ae,Ie,He.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(De,j,U.x,U.y,U.z,xe,be,Te,Ae,He.data)):H.texSubImage3D(De,j,U.x,U.y,U.z,xe,be,Te,Ae,Ie,He),H.pixelStorei(3314,Pe),H.pixelStorei(32878,Ve),H.pixelStorei(3316,mt),H.pixelStorei(3315,Wt),H.pixelStorei(32877,gn),j===0&&F.generateMipmaps&&H.generateMipmap(De),fe.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?ye.setTextureCube(y,0):y.isData3DTexture?ye.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ye.setTexture2DArray(y,0):ye.setTexture2D(y,0),fe.unbindTexture()},this.resetState=function(){v=0,b=0,M=null,fe.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Td extends _o{}Td.prototype.isWebGL1Renderer=!0;class Ad extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class xo extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new z,La=new z,Da=new Xe,Xr=new no,Yi=new ir;class Cd extends it{constructor(e=new Vt,t=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ca.fromBufferAttribute(t,i-1),La.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ca.distanceTo(La);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(i),Yi.radius+=r,e.ray.intersectsSphere(Yi)===!1)return;Da.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(Da);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new z,u=new z,h=new z,d=new z,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let M=v,S=b-1;M<S;M+=m){const w=g.getX(M),L=g.getX(M+1);if(l.fromBufferAttribute(f,w),u.fromBufferAttribute(f,L),Xr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),b=Math.min(f.count,o.start+o.count);for(let M=v,S=b-1;M<S;M+=m){if(l.fromBufferAttribute(f,M),u.fromBufferAttribute(f,M+1),Xr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Pa=new z,Ra=new z;class Ld extends Cd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Pa.fromBufferAttribute(t,i),Ra.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Pa.distanceTo(Ra);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vo extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dd extends On{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ss,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Mo extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const qr=new Xe,Ia=new z,Fa=new z;class Pd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ia.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ia),Fa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fa),t.updateMatrixWorld(),qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rd extends Pd{constructor(){super(new ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}let Id=class extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DefaultUp),this.updateMatrix(),this.target=new it,this.shadow=new Rd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Fd=class extends Mo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};class Na{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Nd extends Ld{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ne(n),i=new Ne(i);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,m=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const p=d===r?n:i;p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3,p.toArray(l,m),m+=3}const u=new Vt;u.setAttribute("position",new Ft(c,3)),u.setAttribute("color",new Ft(l,3));const h=new xo({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ns}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ns);const yo={},za={};function Un(s){const e=ms(yo),t=ms(za)||e.scene;return s&&(ka(za,s),t.add(s),Va(()=>{t.remove(s),e.invalidate()})),{root:e,parent:t,self:s}}function zd(s){return ka(yo,s),s}function Oa(s){let e;const t=s[37].default,n=Qi(t,s,s[36],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&32)&&$i(n,t,i,i[36],e?tr(t,i[36],r,null):er(i[36]),null)},i(i){e||(Ze(n,i),e=!0)},o(i){rt(n,i),e=!1},d(i){n&&n.d(i)}}}function Od(s){let e,t,n,i,r,o,a=s[0].scene&&Oa(s);return{c(){e=Kt("div"),t=Kt("canvas"),n=Ot(),a&&a.c(),this.h()},l(c){e=Jt(c,"DIV",{class:!0});var l=ti(e);t=Jt(l,"CANVAS",{class:!0}),ti(t).forEach(ot),n=Ut(l),a&&a.l(l),l.forEach(ot),this.h()},h(){ke(t,"class","svelte-1uqz219"),ke(e,"class","container svelte-1uqz219")},m(c,l){Bt(c,e,l),Mt(e,t),s[38](t),Mt(e,n),a&&a.m(e,null),s[39](e),i=!0,r||(o=Sn(window,"resize",s[2]),r=!0)},p(c,l){c[0].scene?a?(a.p(c,l),l[0]&1&&Ze(a,1)):(a=Oa(c),a.c(),Ze(a,1),a.m(e,null)):a&&(Ha(),rt(a,1,1,()=>{a=null}),Wa())},i(c){i||(Ze(a),i=!0)},o(c){rt(a),i=!1},d(c){c&&ot(e),s[38](null),a&&a.d(),s[39](null),r=!1,o()}}}function Ud(s,e,t){let{$$slots:n={},$$scope:i}=e,{background:r=null}=e,{environment:o=null}=e,{fog:a=null}=e,{overrideMaterial:c=null}=e,{precision:l="highp"}=e,{powerPreference:u="default"}=e,{alpha:h=!1}=e,{premultipliedAlpha:d=!0}=e,{antialias:m=!1}=e,{stencil:g=!0}=e,{preserveDrawingBuffer:p=!1}=e,{failIfMajorPerformanceCaveat:f=!1}=e,{depth:v=!0}=e,{logarithmicDepthBuffer:b=!1}=e,{autoClear:M=!0}=e,{autoClearColor:S=!0}=e,{autoClearDepth:w=!0}=e,{autoClearStencil:L=!0}=e,{checkShaderErrors:N=!0}=e,{gammaFactor:_=2}=e,{localClippingEnabled:C=!1}=e,{physicallyCorrectLights:R=!1}=e,{outputEncoding:G=void 0}=e,{clippingPlanes:$=[]}=e,{shadows:O=void 0}=e,{toneMapping:T=Gt}=e,{toneMappingExposure:P=1}=e,{width:J=void 0}=e,{height:Q=void 0}=e,{pixelRatio:q=typeof devicePixelRatio<"u"?devicePixelRatio:1}=e;function ne(){return Z.renderer.info}let K,V,B,se=null;const ie=Y=>Y(),ae=()=>{se||(se=requestAnimationFrame(()=>{se=null,H.forEach(ie),Z.renderer.render(Z.scene,Z.camera.object)}))},H=[],Z=zd({canvas:null,scene:null,renderer:null,camera:{object:null,callback:()=>{console.warn("no camera is set")},set:(Y,Me)=>{t(0,Z.camera.object=Y,Z),t(0,Z.camera.callback=Me,Z),Z.controls.callback&&Z.controls.callback(Z.camera.object,Z.canvas),ae()}},controls:{object:null,callback:null,set:Y=>{t(0,Z.controls.callback=Y,Z),Z.camera.object&&t(0,Z.controls.object=Y(Z.camera.object,Z.canvas),Z)}},before_render(Y){H.push(Y),Va(()=>{const Me=H.indexOf(Y);H.splice(Me,1)})},invalidate:ae});Xa(()=>(t(0,Z.renderer=new _o({canvas:Z.canvas,precision:l,powerPreference:u,alpha:h,premultipliedAlpha:d,antialias:m,stencil:g,preserveDrawingBuffer:p,failIfMajorPerformanceCaveat:f,depth:v,logarithmicDepthBuffer:b}),Z),t(0,Z.scene=new Ad,Z),pe(),()=>{console.log("disposing of renderer"),Z.renderer.forceContextLoss(),Z.renderer.dispose()}));const pe=()=>{J===void 0&&t(34,K=B.clientWidth/q),Q===void 0&&t(35,V=B.clientHeight/q)};function ve(Y){gs[Y?"unshift":"push"](()=>{Z.canvas=Y,t(0,Z),t(3,r),t(4,o),t(5,a),t(6,c),t(17,M),t(18,S),t(19,w),t(20,L),t(21,N),t(22,_),t(23,C),t(24,R),t(25,G),t(26,$),t(28,T),t(29,P),t(27,O)})}function fe(Y){gs[Y?"unshift":"push"](()=>{B=Y,t(1,B)})}return s.$$set=Y=>{"background"in Y&&t(3,r=Y.background),"environment"in Y&&t(4,o=Y.environment),"fog"in Y&&t(5,a=Y.fog),"overrideMaterial"in Y&&t(6,c=Y.overrideMaterial),"precision"in Y&&t(7,l=Y.precision),"powerPreference"in Y&&t(8,u=Y.powerPreference),"alpha"in Y&&t(9,h=Y.alpha),"premultipliedAlpha"in Y&&t(10,d=Y.premultipliedAlpha),"antialias"in Y&&t(11,m=Y.antialias),"stencil"in Y&&t(12,g=Y.stencil),"preserveDrawingBuffer"in Y&&t(13,p=Y.preserveDrawingBuffer),"failIfMajorPerformanceCaveat"in Y&&t(14,f=Y.failIfMajorPerformanceCaveat),"depth"in Y&&t(15,v=Y.depth),"logarithmicDepthBuffer"in Y&&t(16,b=Y.logarithmicDepthBuffer),"autoClear"in Y&&t(17,M=Y.autoClear),"autoClearColor"in Y&&t(18,S=Y.autoClearColor),"autoClearDepth"in Y&&t(19,w=Y.autoClearDepth),"autoClearStencil"in Y&&t(20,L=Y.autoClearStencil),"checkShaderErrors"in Y&&t(21,N=Y.checkShaderErrors),"gammaFactor"in Y&&t(22,_=Y.gammaFactor),"localClippingEnabled"in Y&&t(23,C=Y.localClippingEnabled),"physicallyCorrectLights"in Y&&t(24,R=Y.physicallyCorrectLights),"outputEncoding"in Y&&t(25,G=Y.outputEncoding),"clippingPlanes"in Y&&t(26,$=Y.clippingPlanes),"shadows"in Y&&t(27,O=Y.shadows),"toneMapping"in Y&&t(28,T=Y.toneMapping),"toneMappingExposure"in Y&&t(29,P=Y.toneMappingExposure),"width"in Y&&t(30,J=Y.width),"height"in Y&&t(31,Q=Y.height),"pixelRatio"in Y&&t(32,q=Y.pixelRatio),"$$scope"in Y&&t(36,i=Y.$$scope)},s.$$.update=()=>{if(s.$$.dirty[0]&121&&Z.scene&&(t(0,Z.scene.background=r,Z),t(0,Z.scene.environment=o,Z),t(0,Z.scene.fog=a,Z),t(0,Z.scene.overrideMaterial=c,Z)),s.$$.dirty[0]&1073610753&&Z.renderer&&(t(0,Z.renderer.autoClear=M,Z),t(0,Z.renderer.autoClearColor=S,Z),t(0,Z.renderer.autoClearDepth=w,Z),t(0,Z.renderer.autoClearStencil=L,Z),t(0,Z.renderer.debug.checkShaderErrors=N,Z),t(0,Z.renderer.gammaFactor=_,Z),t(0,Z.renderer.localClippingEnabled=C,Z),t(0,Z.renderer.physicallyCorrectLights=R,Z),G!=null&&t(0,Z.renderer.outputEncoding=G,Z),t(0,Z.renderer.clippingPlanes=$,Z),t(0,Z.renderer.toneMapping=T,Z),t(0,Z.renderer.toneMappingExposure=P,Z),O?(t(0,Z.renderer.shadowMap.enabled=!0,Z),t(0,Z.renderer.shadowMap.autoUpdate=!0,Z),t(0,Z.renderer.shadowMap.type=O===!0?is:O,Z)):t(0,Z.renderer.shadowMap.enabled=!1,Z),ae()),s.$$.dirty[0]&1073741825|s.$$.dirty[1]&27&&Z.renderer){const Y=J!==void 0?J:K,Me=Q!==void 0?Q:V;Z.renderer.setSize(Y,Me,!1),Z.camera.callback(Y,Me),Z.renderer.setPixelRatio(q),ae()}},[Z,B,pe,r,o,a,c,l,u,h,d,m,g,p,f,v,b,M,S,w,L,N,_,C,R,G,$,O,T,P,J,Q,q,ne,K,V,i,n,ve,fe]}class Bd extends an{constructor(e){super(),on(this,e,Ud,Od,ln,{background:3,environment:4,fog:5,overrideMaterial:6,precision:7,powerPreference:8,alpha:9,premultipliedAlpha:10,antialias:11,stencil:12,preserveDrawingBuffer:13,failIfMajorPerformanceCaveat:14,depth:15,logarithmicDepthBuffer:16,autoClear:17,autoClearColor:18,autoClearDepth:19,autoClearStencil:20,checkShaderErrors:21,gammaFactor:22,localClippingEnabled:23,physicallyCorrectLights:24,outputEncoding:25,clippingPlanes:26,shadows:27,toneMapping:28,toneMappingExposure:29,width:30,height:31,pixelRatio:32,info:33},null,[-1,-1])}get info(){return this.$$.ctx[33]}}function ls(s,e,t,n){s.position.set(e[0],e[1],e[2]),s.rotation.set(t[0],t[1],t[2],t[3]),typeof n=="number"?s.scale.set(n,n,n):s.scale.set(n[0],n[1],n[2])}let cs=[0,0,0],us=[0,0,0],hs=[1,1,1],Gd=new Vt,kd=new Dd;function Vd(s){let e;const t=s[6].default,n=Qi(t,s,s[5],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&32)&&$i(n,t,i,i[5],e?tr(t,i[5],r,null):er(i[5]),null)},i(i){e||(Ze(n,i),e=!0)},o(i){rt(n,i),e=!1},d(i){n&&n.d(i)}}}function Hd(s,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=cs}=e,{rotation:o=us}=e,{scale:a=hs}=e,{renderOrder:c=0}=e;const{root:l,self:u}=Un(new yi);return s.$$set=h=>{"position"in h&&t(0,r=h.position),"rotation"in h&&t(1,o=h.rotation),"scale"in h&&t(2,a=h.scale),"renderOrder"in h&&t(3,c=h.renderOrder),"$$scope"in h&&t(5,i=h.$$scope)},s.$$.update=()=>{s.$$.dirty&31&&(t(4,u.renderOrder=c,u),ls(u,r,o,a),l.invalidate())},[r,o,a,c,u,i,n]}class Wd extends an{constructor(e){super(),on(this,e,Hd,Vd,ln,{position:0,rotation:1,scale:2,renderOrder:3})}}function Xd(s){let e;const t=s[11].default,n=Qi(t,s,s[10],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&1024)&&$i(n,t,i,i[10],e?tr(t,i[10],r,null):er(i[10]),null)},i(i){e||(Ze(n,i),e=!0)},o(i){rt(n,i),e=!1},d(i){n&&n.d(i)}}}function qd(s,e,t){let{$$slots:n={},$$scope:i}=e,{geometry:r=Gd}=e,{material:o=kd}=e,{position:a=cs}=e,{rotation:c=us}=e,{scale:l=hs}=e,{castShadow:u=!1}=e,{receiveShadow:h=!1}=e,{frustumCulled:d=!0}=e,{renderOrder:m=0}=e;const{root:g,self:p}=Un(new sn(r,o));return s.$$set=f=>{"geometry"in f&&t(0,r=f.geometry),"material"in f&&t(1,o=f.material),"position"in f&&t(2,a=f.position),"rotation"in f&&t(3,c=f.rotation),"scale"in f&&t(4,l=f.scale),"castShadow"in f&&t(5,u=f.castShadow),"receiveShadow"in f&&t(6,h=f.receiveShadow),"frustumCulled"in f&&t(7,d=f.frustumCulled),"renderOrder"in f&&t(8,m=f.renderOrder),"$$scope"in f&&t(10,i=f.$$scope)},s.$$.update=()=>{s.$$.dirty&1023&&(p.geometry&&r!==p.geometry&&p.geometry.dispose(),t(9,p.geometry=r,p),t(9,p.material=o,p),t(9,p.castShadow=u,p),t(9,p.receiveShadow=h,p),t(9,p.frustumCulled=d,p),t(9,p.renderOrder=m,p),ls(p,a,c,l),g.invalidate())},[r,o,a,c,l,u,h,d,m,p,i,n]}class So extends an{constructor(e){super(),on(this,e,qd,Xd,ln,{geometry:0,material:1,position:2,rotation:3,scale:4,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8})}}function Ua(s){let e;const t=s[6].default,n=Qi(t,s,s[5],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&32)&&$i(n,t,i,i[5],e?tr(t,i[5],r,null):er(i[5]),null)},i(i){e||(Ze(n,i),e=!0)},o(i){rt(n,i),e=!1},d(i){n&&n.d(i)}}}function jd(s){let e,t,n=s[0]&&Ua(s);return{c(){n&&n.c(),e=_s()},l(i){n&&n.l(i),e=_s()},m(i,r){n&&n.m(i,r),Bt(i,e,r),t=!0},p(i,[r]){i[0]?n?(n.p(i,r),r&1&&Ze(n,1)):(n=Ua(i),n.c(),Ze(n,1),n.m(e.parentNode,e)):n&&(Ha(),rt(n,1,1,()=>{n=null}),Wa())},i(i){t||(Ze(n),t=!0)},o(i){rt(n),t=!1},d(i){n&&n.d(i),i&&ot(e)}}}function Yd(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e,{position:o=cs}=e,{rotation:a=us}=e,{scale:c=hs}=e;const{root:l,self:u}=Un(new it);let h;return s.$$set=d=>{"object"in d&&t(0,r=d.object),"position"in d&&t(1,o=d.position),"rotation"in d&&t(2,a=d.rotation),"scale"in d&&t(3,c=d.scale),"$$scope"in d&&t(5,i=d.$$scope)},s.$$.update=()=>{s.$$.dirty&17&&(h&&u.remove(h),r&&u.add(r),t(4,h=r),l.invalidate()),s.$$.dirty&14&&(ls(u,o,a,c),l.invalidate())},[r,o,a,c,h,i,n]}class Zd extends an{constructor(e){super(),on(this,e,Yd,jd,ln,{object:0,position:1,rotation:2,scale:3})}}function Kd(s,e,t){let{fov:n=45}=e,{near:i=.1}=e,{far:r=2e3}=e,{zoom:o=1}=e,{viewOffset:a=void 0}=e,{position:c=[0,0,5]}=e,{target:l=[0,0,0]}=e;const{root:u,self:h}=Un(new At),d=new z;return u.camera.set(h,(m,g)=>{t(7,h.aspect=m/g,h),h.updateProjectionMatrix()}),s.$$set=m=>{"fov"in m&&t(0,n=m.fov),"near"in m&&t(1,i=m.near),"far"in m&&t(2,r=m.far),"zoom"in m&&t(3,o=m.zoom),"viewOffset"in m&&t(4,a=m.viewOffset),"position"in m&&t(5,c=m.position),"target"in m&&t(6,l=m.target)},s.$$.update=()=>{s.$$.dirty&255&&(t(7,h.fov=n,h),t(7,h.near=i,h),t(7,h.far=r,h),t(7,h.zoom=o,h),a&&h.setViewOffset(a.fullWidth,a.fullHeight,a.x,a.y,a.width,a.height),h.position.set(c[0],c[1],c[2]),d.set(l[0],l[1],l[2]),h.lookAt(d),h.updateProjectionMatrix(),u.invalidate())},[n,i,r,o,a,c,l,h]}class Jd extends an{constructor(e){super(),on(this,e,Kd,null,ln,{fov:0,near:1,far:2,zoom:3,viewOffset:4,position:5,target:6})}}const Ba={type:"change"},jr={type:"start"},Ga={type:"end"};class Qd extends zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nn.ROTATE,MIDDLE:nn.DOLLY,RIGHT:nn.PAN},this.touches={ONE:dn.ROTATE,TWO:dn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",dt),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ba),n.update(),r=i.NONE},this.update=function(){const A=new z,I=new Fn().setFromUnitVectors(e.up,new z(0,1,0)),ue=I.clone().invert(),de=new z,ce=new Fn,ge=2*Math.PI;return function(){const Ce=n.object.position;A.copy(Ce).sub(n.target),A.applyQuaternion(I),a.setFromVector3(A),n.autoRotate&&r===i.NONE&&C(N()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Le=n.minAzimuthAngle,Oe=n.maxAzimuthAngle;return isFinite(Le)&&isFinite(Oe)&&(Le<-Math.PI?Le+=ge:Le>Math.PI&&(Le-=ge),Oe<-Math.PI?Oe+=ge:Oe>Math.PI&&(Oe-=ge),Le<=Oe?a.theta=Math.max(Le,Math.min(Oe,a.theta)):a.theta=a.theta>(Le+Oe)/2?Math.max(Le,a.theta):Math.min(Oe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(a),A.applyQuaternion(ue),Ce.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||de.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o?(n.dispatchEvent(Ba),de.copy(n.object.position),ce.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",Qe),n.domElement.removeEventListener("pointercancel",lt),n.domElement.removeEventListener("wheel",bt),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",je),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",dt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Na,c=new Na;let l=1;const u=new z;let h=!1;const d=new we,m=new we,g=new we,p=new we,f=new we,v=new we,b=new we,M=new we,S=new we,w=[],L={};function N(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function C(A){c.theta-=A}function R(A){c.phi-=A}const G=function(){const A=new z;return function(ue,de){A.setFromMatrixColumn(de,0),A.multiplyScalar(-ue),u.add(A)}}(),$=function(){const A=new z;return function(ue,de){n.screenSpacePanning===!0?A.setFromMatrixColumn(de,1):(A.setFromMatrixColumn(de,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ue),u.add(A)}}(),O=function(){const A=new z;return function(ue,de){const ce=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;A.copy(ge).sub(n.target);let me=A.length();me*=Math.tan(n.object.fov/2*Math.PI/180),G(2*ue*me/ce.clientHeight,n.object.matrix),$(2*de*me/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G(ue*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),$(de*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function T(A){n.object.isPerspectiveCamera?l/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function P(A){n.object.isPerspectiveCamera?l*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(A){d.set(A.clientX,A.clientY)}function Q(A){b.set(A.clientX,A.clientY)}function q(A){p.set(A.clientX,A.clientY)}function ne(A){m.set(A.clientX,A.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const I=n.domElement;C(2*Math.PI*g.x/I.clientHeight),R(2*Math.PI*g.y/I.clientHeight),d.copy(m),n.update()}function K(A){M.set(A.clientX,A.clientY),S.subVectors(M,b),S.y>0?T(_()):S.y<0&&P(_()),b.copy(M),n.update()}function V(A){f.set(A.clientX,A.clientY),v.subVectors(f,p).multiplyScalar(n.panSpeed),O(v.x,v.y),p.copy(f),n.update()}function B(A){A.deltaY<0?P(_()):A.deltaY>0&&T(_()),n.update()}function se(A){let I=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?R(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?R(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),I=!0;break}I&&(A.preventDefault(),n.update())}function ie(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{const A=.5*(w[0].pageX+w[1].pageX),I=.5*(w[0].pageY+w[1].pageY);d.set(A,I)}}function ae(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{const A=.5*(w[0].pageX+w[1].pageX),I=.5*(w[0].pageY+w[1].pageY);p.set(A,I)}}function H(){const A=w[0].pageX-w[1].pageX,I=w[0].pageY-w[1].pageY,ue=Math.sqrt(A*A+I*I);b.set(0,ue)}function Z(){n.enableZoom&&H(),n.enablePan&&ae()}function pe(){n.enableZoom&&H(),n.enableRotate&&ie()}function ve(A){if(w.length==1)m.set(A.pageX,A.pageY);else{const ue=Se(A),de=.5*(A.pageX+ue.x),ce=.5*(A.pageY+ue.y);m.set(de,ce)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const I=n.domElement;C(2*Math.PI*g.x/I.clientHeight),R(2*Math.PI*g.y/I.clientHeight),d.copy(m)}function fe(A){if(w.length===1)f.set(A.pageX,A.pageY);else{const I=Se(A),ue=.5*(A.pageX+I.x),de=.5*(A.pageY+I.y);f.set(ue,de)}v.subVectors(f,p).multiplyScalar(n.panSpeed),O(v.x,v.y),p.copy(f)}function Y(A){const I=Se(A),ue=A.pageX-I.x,de=A.pageY-I.y,ce=Math.sqrt(ue*ue+de*de);M.set(0,ce),S.set(0,Math.pow(M.y/b.y,n.zoomSpeed)),T(S.y),b.copy(M)}function Me(A){n.enableZoom&&Y(A),n.enablePan&&fe(A)}function ye(A){n.enableZoom&&Y(A),n.enableRotate&&ve(A)}function Qe(A){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",qe),n.domElement.addEventListener("pointerup",je)),te(A),A.pointerType==="touch"?E(A):Ge(A))}function qe(A){n.enabled!==!1&&(A.pointerType==="touch"?x(A):ze(A))}function je(A){re(A),w.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",qe),n.domElement.removeEventListener("pointerup",je)),n.dispatchEvent(Ga),r=i.NONE}function lt(A){re(A)}function Ge(A){let I;switch(A.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case nn.DOLLY:if(n.enableZoom===!1)return;Q(A),r=i.DOLLY;break;case nn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;q(A),r=i.PAN}else{if(n.enableRotate===!1)return;J(A),r=i.ROTATE}break;case nn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;J(A),r=i.ROTATE}else{if(n.enablePan===!1)return;q(A),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(jr)}function ze(A){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ne(A);break;case i.DOLLY:if(n.enableZoom===!1)return;K(A);break;case i.PAN:if(n.enablePan===!1)return;V(A);break}}function bt(A){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(A.preventDefault(),n.dispatchEvent(jr),B(A),n.dispatchEvent(Ga))}function dt(A){n.enabled===!1||n.enablePan===!1||se(A)}function E(A){switch(le(A),w.length){case 1:switch(n.touches.ONE){case dn.ROTATE:if(n.enableRotate===!1)return;ie(),r=i.TOUCH_ROTATE;break;case dn.PAN:if(n.enablePan===!1)return;ae(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case dn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Z(),r=i.TOUCH_DOLLY_PAN;break;case dn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(jr)}function x(A){switch(le(A),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;fe(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ye(A),n.update();break;default:r=i.NONE}}function k(A){n.enabled!==!1&&A.preventDefault()}function te(A){w.push(A)}function re(A){delete L[A.pointerId];for(let I=0;I<w.length;I++)if(w[I].pointerId==A.pointerId){w.splice(I,1);return}}function le(A){let I=L[A.pointerId];I===void 0&&(I=new we,L[A.pointerId]=I),I.set(A.pageX,A.pageY)}function Se(A){const I=A.pointerId===w[0].pointerId?w[1]:w[0];return L[I.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",Qe),n.domElement.addEventListener("pointercancel",lt),n.domElement.addEventListener("wheel",bt,{passive:!1}),this.update()}}function bo(s){Xa(()=>{let e;return requestAnimationFrame(function t(){e=requestAnimationFrame(t),s()}),()=>{cancelAnimationFrame(e)}})}function $d(s,e,t){let{autoRotate:n=!1}=e,{autoRotateSpeed:i=2}=e,{dampingFactor:r=.05}=e,{enableDamping:o=!1}=e,{enabled:a=!0}=e,{enablePan:c=!0}=e,{enableRotate:l=!0}=e,{enableZoom:u=!0}=e,{keyPanSpeed:h=7}=e,{keys:d={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}}=e,{maxAzimuthAngle:m=1/0}=e,{maxDistance:g=1/0}=e,{maxPolarAngle:p=Math.PI}=e,{maxZoom:f=1/0}=e,{minAzimuthAngle:v=1/0}=e,{minDistance:b=0}=e,{minPolarAngle:M=0}=e,{minZoom:S=0}=e,{mouseButtons:w={LEFT:nn.ROTATE,MIDDLE:nn.DOLLY,RIGHT:nn.PAN}}=e,{panSpeed:L=1}=e,{rotateSpeed:N=1}=e,{screenSpacePanning:_=!0}=e,{touches:C={ONE:dn.ROTATE,TWO:dn.DOLLY_PAN}}=e,{zoomSpeed:R=1}=e,{target:G=[0,0,0]}=e;const{root:$}=Un(),O=Co();let T;return $.controls.set((P,J)=>(t(25,T=new Qd(P,J)),T.addEventListener("start",Q=>{O("start",Q)}),T.addEventListener("end",Q=>{O("end",Q)}),T.addEventListener("change",Q=>{O("change",Q),(!G||T.target.x!==G[0]||T.target.y!==G[1]||T.target.z!==G[2])&&t(0,G=[T.target.x,T.target.y,T.target.z]),$.invalidate()}),T)),bo(()=>{T&&(n||o)&&T.update()}),s.$$set=P=>{"autoRotate"in P&&t(1,n=P.autoRotate),"autoRotateSpeed"in P&&t(2,i=P.autoRotateSpeed),"dampingFactor"in P&&t(3,r=P.dampingFactor),"enableDamping"in P&&t(4,o=P.enableDamping),"enabled"in P&&t(5,a=P.enabled),"enablePan"in P&&t(6,c=P.enablePan),"enableRotate"in P&&t(7,l=P.enableRotate),"enableZoom"in P&&t(8,u=P.enableZoom),"keyPanSpeed"in P&&t(9,h=P.keyPanSpeed),"keys"in P&&t(10,d=P.keys),"maxAzimuthAngle"in P&&t(11,m=P.maxAzimuthAngle),"maxDistance"in P&&t(12,g=P.maxDistance),"maxPolarAngle"in P&&t(13,p=P.maxPolarAngle),"maxZoom"in P&&t(14,f=P.maxZoom),"minAzimuthAngle"in P&&t(15,v=P.minAzimuthAngle),"minDistance"in P&&t(16,b=P.minDistance),"minPolarAngle"in P&&t(17,M=P.minPolarAngle),"minZoom"in P&&t(18,S=P.minZoom),"mouseButtons"in P&&t(19,w=P.mouseButtons),"panSpeed"in P&&t(20,L=P.panSpeed),"rotateSpeed"in P&&t(21,N=P.rotateSpeed),"screenSpacePanning"in P&&t(22,_=P.screenSpacePanning),"touches"in P&&t(23,C=P.touches),"zoomSpeed"in P&&t(24,R=P.zoomSpeed),"target"in P&&t(0,G=P.target)},s.$$.update=()=>{s.$$.dirty&67108862&&T&&(t(25,T.autoRotate=n,T),t(25,T.autoRotateSpeed=i,T),t(25,T.dampingFactor=r,T),t(25,T.enableDamping=o,T),t(25,T.enabled=a,T),t(25,T.enablePan=c,T),t(25,T.enableRotate=l,T),t(25,T.enableZoom=u,T),t(25,T.keyPanSpeed=h,T),t(25,T.keys=d,T),t(25,T.maxAzimuthAngle=m,T),t(25,T.maxDistance=g,T),t(25,T.maxPolarAngle=p,T),t(25,T.maxZoom=f,T),t(25,T.minAzimuthAngle=v,T),t(25,T.minDistance=b,T),t(25,T.minPolarAngle=M,T),t(25,T.minZoom=S,T),t(25,T.mouseButtons=w,T),t(25,T.panSpeed=L,T),t(25,T.rotateSpeed=N,T),t(25,T.screenSpacePanning=_,T),t(25,T.touches=C,T),t(25,T.zoomSpeed=R,T),T.update()),s.$$.dirty&33554433&&G&&(T.target.x!==G[0]||T.target.y!==G[1]||T.target.z!==G[2])&&(T.target.set(G[0],G[1],G[2]),T.update())},[G,n,i,r,o,a,c,l,u,h,d,m,g,p,f,v,b,M,S,w,L,N,_,C,R,T]}class ep extends an{constructor(e){super(),on(this,e,$d,null,ln,{autoRotate:1,autoRotateSpeed:2,dampingFactor:3,enableDamping:4,enabled:5,enablePan:6,enableRotate:7,enableZoom:8,keyPanSpeed:9,keys:10,maxAzimuthAngle:11,maxDistance:12,maxPolarAngle:13,maxZoom:14,minAzimuthAngle:15,minDistance:16,minPolarAngle:17,minZoom:18,mouseButtons:19,panSpeed:20,rotateSpeed:21,screenSpacePanning:22,touches:23,zoomSpeed:24,target:0})}}function tp(s,e,t){let{color:n=16777215}=e,{intensity:i=1}=e;const{root:r,self:o}=Un(new Fd(n,i));return s.$$set=a=>{"color"in a&&t(0,n=a.color),"intensity"in a&&t(1,i=a.intensity)},s.$$.update=()=>{s.$$.dirty&7&&(o.color.set(n),t(2,o.intensity=i,o),r.invalidate())},[n,i,o]}class np extends an{constructor(e){super(),on(this,e,tp,null,ln,{color:0,intensity:1})}}function ip(s,e,t){let{color:n=16777215}=e,{intensity:i=1}=e,{position:r=[0,1,0]}=e,{target:o=[0,0,0]}=e,{shadow:a=null}=e;const{root:c,self:l}=Un(new Id);return s.$$set=u=>{"color"in u&&t(0,n=u.color),"intensity"in u&&t(1,i=u.intensity),"position"in u&&t(2,r=u.position),"target"in u&&t(3,o=u.target),"shadow"in u&&t(4,a=u.shadow)},s.$$.update=()=>{if(s.$$.dirty&47&&(l.color.set(n),t(5,l.intensity=i,l),l.position.set(r[0],r[1],r[2]),l.target.position.set(o[0],o[1],o[2]),c.invalidate()),s.$$.dirty&48){if(a){const{mapSize:u=[512,512],camera:{left:h=-5,bottom:d=-5,right:m=5,top:g=5,near:p=.5,far:f=500}={},bias:v=0,radius:b=1}=a===!0?{}:a;l.shadow.mapSize.set(u[0],u[1]),t(5,l.shadow.camera.left=h,l),t(5,l.shadow.camera.top=g,l),t(5,l.shadow.camera.right=m,l),t(5,l.shadow.camera.bottom=d,l),t(5,l.shadow.camera.near=p,l),t(5,l.shadow.camera.far=f,l),t(5,l.shadow.bias=v,l),t(5,l.shadow.radius=b,l),t(5,l.castShadow=!0,l)}else t(5,l.castShadow=!1,l);c.invalidate()}},[n,i,r,o,a,l]}class rp extends an{constructor(e){super(),on(this,e,ip,null,ln,{color:0,intensity:1,position:2,target:3,shadow:4})}}function sp(s){let e,t,n,i;return e=new So({props:{geometry:new rr(50,50),material:new vo({color:"burlywood"}),rotation:[-Math.PI/2,0,0],receiveShadow:!0}}),n=new Zd({props:{object:new Nd(50,50,"papayawhip","papayawhip"),position:[0,.001,0]}}),{c(){Qt(e.$$.fragment),t=Ot(),Qt(n.$$.fragment)},l(r){$t(e.$$.fragment,r),t=Ut(r),$t(n.$$.fragment,r)},m(r,o){en(e,r,o),Bt(r,t,o),en(n,r,o),i=!0},p:Do,i(r){i||(Ze(e.$$.fragment,r),Ze(n.$$.fragment,r),i=!0)},o(r){rt(e.$$.fragment,r),rt(n.$$.fragment,r),i=!1},d(r){tn(e,r),r&&ot(t),tn(n,r)}}}function ap(s){let e,t,n,i,r,o,a,c,l,u,h,d;return e=new Wd({props:{position:[0,-s[2]/2,0],$$slots:{default:[sp]},$$scope:{ctx:s}}}),n=new So({props:{geometry:new ci,material:new vo({color:16727552}),scale:[s[1],s[2],s[3]],rotation:[0,s[4],0],castShadow:!0}}),r=new Jd({props:{position:[1,1,3],zoom:s[0]*0+1,target:[0,1,2]}}),a=new ep({props:{enableZoom:!0,maxPolarAngle:Math.PI*.51}}),l=new np({props:{intensity:.6}}),h=new rp({props:{intensity:.6,position:[-2,3,2],shadow:{mapSize:[2048,2048]}}}),{c(){Qt(e.$$.fragment),t=Ot(),Qt(n.$$.fragment),i=Ot(),Qt(r.$$.fragment),o=Ot(),Qt(a.$$.fragment),c=Ot(),Qt(l.$$.fragment),u=Ot(),Qt(h.$$.fragment)},l(m){$t(e.$$.fragment,m),t=Ut(m),$t(n.$$.fragment,m),i=Ut(m),$t(r.$$.fragment,m),o=Ut(m),$t(a.$$.fragment,m),c=Ut(m),$t(l.$$.fragment,m),u=Ut(m),$t(h.$$.fragment,m)},m(m,g){en(e,m,g),Bt(m,t,g),en(n,m,g),Bt(m,i,g),en(r,m,g),Bt(m,o,g),en(a,m,g),Bt(m,c,g),en(l,m,g),Bt(m,u,g),en(h,m,g),d=!0},p(m,g){const p={};g&4&&(p.position=[0,-m[2]/2,0]),g&256&&(p.$$scope={dirty:g,ctx:m}),e.$set(p);const f={};g&14&&(f.scale=[m[1],m[2],m[3]]),g&16&&(f.rotation=[0,m[4],0]),n.$set(f);const v={};g&1&&(v.zoom=m[0]*0+1),r.$set(v)},i(m){d||(Ze(e.$$.fragment,m),Ze(n.$$.fragment,m),Ze(r.$$.fragment,m),Ze(a.$$.fragment,m),Ze(l.$$.fragment,m),Ze(h.$$.fragment,m),d=!0)},o(m){rt(e.$$.fragment,m),rt(n.$$.fragment,m),rt(r.$$.fragment,m),rt(a.$$.fragment,m),rt(l.$$.fragment,m),rt(h.$$.fragment,m),d=!1},d(m){tn(e,m),m&&ot(t),tn(n,m),m&&ot(i),tn(r,m),m&&ot(o),tn(a,m),m&&ot(c),tn(l,m),m&&ot(u),tn(h,m)}}}function op(s){let e,t,n,i,r,o,a,c,l,u,h,d,m,g,p,f,v;return e=new Bd({props:{antialias:!0,background:new Ne("papayawhip"),shadows:!0,$$slots:{default:[ap]},$$scope:{ctx:s}}}),{c(){Qt(e.$$.fragment),t=Ot(),n=Kt("div"),i=Kt("label"),r=Kt("input"),o=ur(" width"),a=Ot(),c=Kt("label"),l=Kt("input"),u=ur(" height"),h=Ot(),d=Kt("label"),m=Kt("input"),g=ur(" depth"),this.h()},l(b){$t(e.$$.fragment,b),t=Ut(b),n=Jt(b,"DIV",{class:!0});var M=ti(n);i=Jt(M,"LABEL",{class:!0});var S=ti(i);r=Jt(S,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),o=hr(S," width"),S.forEach(ot),a=Ut(M),c=Jt(M,"LABEL",{class:!0});var w=ti(c);l=Jt(w,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),u=hr(w," height"),w.forEach(ot),h=Ut(M),d=Jt(M,"LABEL",{class:!0});var L=ti(d);m=Jt(L,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),g=hr(L," depth"),L.forEach(ot),M.forEach(ot),this.h()},h(){ke(r,"type","range"),ke(r,"min",.1),ke(r,"max",3),ke(r,"step",.1),ke(r,"class","svelte-zffy9p"),ke(i,"class","svelte-zffy9p"),ke(l,"type","range"),ke(l,"min",.1),ke(l,"max",3),ke(l,"step",.1),ke(l,"class","svelte-zffy9p"),ke(c,"class","svelte-zffy9p"),ke(m,"type","range"),ke(m,"min",.1),ke(m,"max",3),ke(m,"step",.1),ke(m,"class","svelte-zffy9p"),ke(d,"class","svelte-zffy9p"),ke(n,"class","controls svelte-zffy9p")},m(b,M){en(e,b,M),Bt(b,t,M),Bt(b,n,M),Mt(n,i),Mt(i,r),Bn(r,s[1]),Mt(i,o),Mt(n,a),Mt(n,c),Mt(c,l),Bn(l,s[2]),Mt(c,u),Mt(n,h),Mt(n,d),Mt(d,m),Bn(m,s[3]),Mt(d,g),p=!0,f||(v=[Sn(r,"change",s[5]),Sn(r,"input",s[5]),Sn(l,"change",s[6]),Sn(l,"input",s[6]),Sn(m,"change",s[7]),Sn(m,"input",s[7])],f=!0)},p(b,[M]){const S={};M&287&&(S.$$scope={dirty:M,ctx:b}),e.$set(S),M&2&&Bn(r,b[1]),M&4&&Bn(l,b[2]),M&8&&Bn(m,b[3])},i(b){p||(Ze(e.$$.fragment,b),p=!0)},o(b){rt(e.$$.fragment,b),p=!1},d(b){tn(e,b),b&&ot(t),b&&ot(n),f=!1,Lo(v)}}}function lp(s,e,t){let n=1,i=1,r=1,o=1,a=0;bo(()=>{t(0,n-=.0025),t(4,a+=.01)});function c(){i=fr(this.value),t(1,i)}function l(){r=fr(this.value),t(2,r)}function u(){o=fr(this.value),t(3,o)}return[n,i,r,o,a,c,l,u]}class pp extends an{constructor(e){super(),on(this,e,lp,op,ln,{})}}export{pp as default};
