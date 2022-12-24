import{S as Xe,i as Ke,s as Je,e as L,b as q,f as O,g as ce,t as S,d as ue,h as x,o as ni,C as Qe,D as ei,E as ii,F as ti,k as M,w as j,a as U,l as R,m as z,x as V,c as P,n as N,p as li,G as B,y as G,z as F,H as xe,I as ci,J as Q,K as ee,q as ye,r as Te,L as Oe,M as Ne,N as Ae}from"../../chunks/index-37bd3a1a.js";import{c as ui,I as fe}from"../../chunks/global-ad420e01.js";function Y(w,{delay:t=0,duration:r=400,easing:e=ui,x:o=0,y:b=0,opacity:a=0}={}){const f=getComputedStyle(w),l=+f.opacity,d=f.transform==="none"?"":f.transform,m=l*(1-a);return{delay:t,duration:r,easing:e,css:(k,i)=>`
			transform: ${d} translate(${(1-k)*o}px, ${(1-k)*b}px);
			opacity: ${l-m*i}`}}var fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ee={exports:{}};(function(w,t){(function(r,e){var o="0.7.32",b="",a="?",f="function",l="undefined",d="object",m="string",k="major",i="model",c="name",n="type",s="vendor",u="version",$="architecture",A="console",h="mobile",p="tablet",I="smarttv",Z="wearable",Se="embedded",be=350,we="Amazon",de="Apple",Be="ASUS",Ie="BlackBerry",H="Browser",ie="Chrome",oi="Edge",te="Firefox",oe="Google",Me="Huawei",me="LG",he="Microsoft",Re="Motorola",re="Opera",pe="Samsung",ze="Sharp",ae="Sony",_e="Xiaomi",ge="Zebra",qe="Facebook",ri=function(_,E){var g={};for(var T in _)E[T]&&E[T].length%2===0?g[T]=E[T].concat(_[T]):g[T]=_[T];return g},se=function(_){for(var E={},g=0;g<_.length;g++)E[_[g].toUpperCase()]=_[g];return E},Ce=function(_,E){return typeof _===m?X(E).indexOf(X(_))!==-1:!1},X=function(_){return _.toLowerCase()},ai=function(_){return typeof _===m?_.replace(/[^\d\.]/g,b).split(".")[0]:e},ve=function(_,E){if(typeof _===m)return _=_.replace(/^\s\s*/,b).replace(/\s\s*$/,b),typeof E===l?_:_.substring(0,be)},K=function(_,E){for(var g=0,T,v,le,y,J,D;g<E.length&&!J;){var Pe=E[g],Le=E[g+1];for(T=v=0;T<Pe.length&&!J;)if(J=Pe[T++].exec(_),J)for(le=0;le<Le.length;le++)D=J[++v],y=Le[le],typeof y===d&&y.length>0?y.length===2?typeof y[1]==f?this[y[0]]=y[1].call(this,D):this[y[0]]=y[1]:y.length===3?typeof y[1]===f&&!(y[1].exec&&y[1].test)?this[y[0]]=D?y[1].call(this,D,y[2]):e:this[y[0]]=D?D.replace(y[1],y[2]):e:y.length===4&&(this[y[0]]=D?y[3].call(this,D.replace(y[1],y[2])):e):this[y]=D||e;g+=2}},ke=function(_,E){for(var g in E)if(typeof E[g]===d&&E[g].length>0){for(var T=0;T<E[g].length;T++)if(Ce(E[g][T],_))return g===a?e:g}else if(Ce(E[g],_))return g===a?e:g;return _},si={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},De={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Ue={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[u,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[u,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,u],[/opios[\/ ]+([\w\.]+)/i],[u,[c,re+" Mini"]],[/\bopr\/([\w\.]+)/i],[u,[c,re]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[c,u],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[u,[c,"UC"+H]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[u,[c,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[u,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[u,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[u,[c,"IE"]],[/yabrowser\/([\w\.]+)/i],[u,[c,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure "+H],u],[/\bfocus\/([\w\.]+)/i],[u,[c,te+" Focus"]],[/\bopt\/([\w\.]+)/i],[u,[c,re+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[u,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[u,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[u,[c,re+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[u,[c,"MIUI "+H]],[/fxios\/([-\w\.]+)/i],[u,[c,te]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360 "+H]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 "+H],u],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],u],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[c,u],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,qe],u],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[c,u],[/\bgsa\/([\w\.]+) .*safari\//i],[u,[c,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[u,[c,ie+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,ie+" WebView"],u],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[u,[c,"Android "+H]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,u],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[u,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[u,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[u,ke,si]],[/(webkit|khtml)\/([\w\.]+)/i],[c,u],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],u],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[u,[c,te+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[c,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[$,"amd64"]],[/(ia32(?=;))/i],[[$,X]],[/((?:i[346]|x)86)[;\)]/i],[[$,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[$,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[$,"armhf"]],[/windows (ce|mobile); ppc;/i],[[$,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[$,/ower/,b,X]],[/(sun4\w)[;\)]/i],[[$,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[$,X]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[i,[s,pe],[n,p]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[i,[s,pe],[n,h]],[/\((ip(?:hone|od)[\w ]*);/i],[i,[s,de],[n,h]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[i,[s,de],[n,p]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[i,[s,Me],[n,p]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[i,[s,Me],[n,h]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[i,/_/g," "],[s,_e],[n,h]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[i,/_/g," "],[s,_e],[n,p]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[i,[s,"OPPO"],[n,h]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[i,[s,"Vivo"],[n,h]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[i,[s,"Realme"],[n,h]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[i,[s,Re],[n,h]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[i,[s,Re],[n,p]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[i,[s,me],[n,p]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[i,[s,me],[n,h]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[i,[s,"Lenovo"],[n,p]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[i,/_/g," "],[s,"Nokia"],[n,h]],[/(pixel c)\b/i],[i,[s,oe],[n,p]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[i,[s,oe],[n,h]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[i,[s,ae],[n,h]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[i,"Xperia Tablet"],[s,ae],[n,p]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[i,[s,"OnePlus"],[n,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[i,[s,we],[n,p]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[i,/(.+)/g,"Fire Phone $1"],[s,we],[n,h]],[/(playbook);[-\w\),; ]+(rim)/i],[i,s,[n,p]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[i,[s,Ie],[n,h]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[i,[s,Be],[n,p]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[i,[s,Be],[n,h]],[/(nexus 9)/i],[i,[s,"HTC"],[n,p]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[s,[i,/_/g," "],[n,h]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[i,[s,"Acer"],[n,p]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[i,[s,"Meizu"],[n,h]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[i,[s,ze],[n,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[s,i,[n,h]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[s,i,[n,p]],[/(surface duo)/i],[i,[s,he],[n,p]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[i,[s,"Fairphone"],[n,h]],[/(u304aa)/i],[i,[s,"AT&T"],[n,h]],[/\bsie-(\w*)/i],[i,[s,"Siemens"],[n,h]],[/\b(rct\w+) b/i],[i,[s,"RCA"],[n,p]],[/\b(venue[\d ]{2,7}) b/i],[i,[s,"Dell"],[n,p]],[/\b(q(?:mv|ta)\w+) b/i],[i,[s,"Verizon"],[n,p]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[i,[s,"Barnes & Noble"],[n,p]],[/\b(tm\d{3}\w+) b/i],[i,[s,"NuVision"],[n,p]],[/\b(k88) b/i],[i,[s,"ZTE"],[n,p]],[/\b(nx\d{3}j) b/i],[i,[s,"ZTE"],[n,h]],[/\b(gen\d{3}) b.+49h/i],[i,[s,"Swiss"],[n,h]],[/\b(zur\d{3}) b/i],[i,[s,"Swiss"],[n,p]],[/\b((zeki)?tb.*\b) b/i],[i,[s,"Zeki"],[n,p]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[s,"Dragon Touch"],i,[n,p]],[/\b(ns-?\w{0,9}) b/i],[i,[s,"Insignia"],[n,p]],[/\b((nxa|next)-?\w{0,9}) b/i],[i,[s,"NextBook"],[n,p]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[s,"Voice"],i,[n,h]],[/\b(lvtel\-)?(v1[12]) b/i],[[s,"LvTel"],i,[n,h]],[/\b(ph-1) /i],[i,[s,"Essential"],[n,h]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[i,[s,"Envizen"],[n,p]],[/\b(trio[-\w\. ]+) b/i],[i,[s,"MachSpeed"],[n,p]],[/\btu_(1491) b/i],[i,[s,"Rotor"],[n,p]],[/(shield[\w ]+) b/i],[i,[s,"Nvidia"],[n,p]],[/(sprint) (\w+)/i],[s,i,[n,h]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[s,he],[n,h]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[i,[s,ge],[n,p]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[i,[s,ge],[n,h]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[s,i,[n,A]],[/droid.+; (shield) bui/i],[i,[s,"Nvidia"],[n,A]],[/(playstation [345portablevi]+)/i],[i,[s,ae],[n,A]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[i,[s,he],[n,A]],[/smart-tv.+(samsung)/i],[s,[n,I]],[/hbbtv.+maple;(\d+)/i],[[i,/^/,"SmartTV"],[s,pe],[n,I]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[s,me],[n,I]],[/(apple) ?tv/i],[s,[i,de+" TV"],[n,I]],[/crkey/i],[[i,ie+"cast"],[s,oe],[n,I]],[/droid.+aft(\w)( bui|\))/i],[i,[s,we],[n,I]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[i,[s,ze],[n,I]],[/(bravia[\w ]+)( bui|\))/i],[i,[s,ae],[n,I]],[/(mitv-\w{5}) bui/i],[i,[s,_e],[n,I]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[s,ve],[i,ve],[n,I]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[n,I]],[/((pebble))app/i],[s,i,[n,Z]],[/droid.+; (glass) \d/i],[i,[s,oe],[n,Z]],[/droid.+; (wt63?0{2,3})\)/i],[i,[s,ge],[n,Z]],[/(quest( 2)?)/i],[i,[s,qe],[n,Z]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[s,[n,Se]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[i,[n,h]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[i,[n,p]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[n,p]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[n,h]],[/(android[-\w\. ]{0,9});.+buil/i],[i,[s,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[u,[c,oi+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[u,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[c,u],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[u,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,u],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[c,[u,ke,De]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[c,"Windows"],[u,ke,De]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[u,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,"Mac OS"],[u,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[u,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,u],[/\(bb(10);/i],[u,[c,Ie]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[u,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[u,[c,te+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[u,[c,"webOS"]],[/crkey\/([\d\.]+)/i],[u,[c,ie+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[c,"Chromium OS"],u],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,u],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],u],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[c,u]]},C=function(_,E){if(typeof _===d&&(E=_,_=e),!(this instanceof C))return new C(_,E).getResult();var g=_||(typeof r!==l&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:b),T=E?ri(Ue,E):Ue;return this.getBrowser=function(){var v={};return v[c]=e,v[u]=e,K.call(v,g,T.browser),v.major=ai(v.version),v},this.getCPU=function(){var v={};return v[$]=e,K.call(v,g,T.cpu),v},this.getDevice=function(){var v={};return v[s]=e,v[i]=e,v[n]=e,K.call(v,g,T.device),v},this.getEngine=function(){var v={};return v[c]=e,v[u]=e,K.call(v,g,T.engine),v},this.getOS=function(){var v={};return v[c]=e,v[u]=e,K.call(v,g,T.os),v},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return g},this.setUA=function(v){return g=typeof v===m&&v.length>be?ve(v,be):v,this},this.setUA(g),this};C.VERSION=o,C.BROWSER=se([c,u,k]),C.CPU=se([$]),C.DEVICE=se([i,s,n,A,h,I,p,Z,Se]),C.ENGINE=C.OS=se([c,u]),w.exports&&(t=w.exports=C),t.UAParser=C;var W=typeof r!==l&&(r.jQuery||r.Zepto);if(W&&!W.ua){var ne=new C;W.ua=ne.getResult(),W.ua.get=function(){return ne.getUA()},W.ua.set=function(_){ne.setUA(_);var E=ne.getResult();for(var g in E)W.ua[g]=E[g]}}})(typeof window=="object"?window:fi)})(Ee,Ee.exports);const bi=Ee.exports;function je(w){let t;const r=w[5].default,e=Qe(r,w,w[4],null);return{c(){e&&e.c()},l(o){e&&e.l(o)},m(o,b){e&&e.m(o,b),t=!0},p(o,b){e&&e.p&&(!t||b&16)&&ei(e,r,o,o[4],t?ti(r,o[4],b,null):ii(o[4]),null)},i(o){t||(O(e,o),t=!0)},o(o){S(e,o),t=!1},d(o){e&&e.d(o)}}}function wi(w){let t,r,e=w[0]&&je(w);return{c(){e&&e.c(),t=L()},l(o){e&&e.l(o),t=L()},m(o,b){e&&e.m(o,b),q(o,t,b),r=!0},p(o,[b]){o[0]?e?(e.p(o,b),b&1&&O(e,1)):(e=je(o),e.c(),O(e,1),e.m(t.parentNode,t)):e&&(ce(),S(e,1,1,()=>{e=null}),ue())},i(o){r||(O(e),r=!0)},o(o){S(e),r=!1},d(o){e&&e.d(o),o&&x(t)}}}function di(w,t,r){let{$$slots:e={},$$scope:o}=t,{showInDevice:b=void 0}=t,{showInBrowser:a=void 0}=t,{showInOs:f=void 0}=t,l=!1;ni(()=>{const i=new bi;let c=i.getBrowser(),n=i.getDevice(),s=i.getOS(),u=!0;b&&!k(d(n),b)&&(u=!1),a&&!k(m(c.name),a)&&(u=!1),f&&!k(m(s.name),f)&&(u=!1),r(0,l=u)});const d=i=>i.type?m(i.type):"desktop",m=i=>i.toLowerCase().normalize("NFD").replace(/ /g,"").replace(/[^\w\s]/gi,"").replace(/[\u0300-\u036f]/g,""),k=(i,c)=>Array.isArray(c)?c.some(n=>i===m(n)):i===m(c);return w.$$set=i=>{"showInDevice"in i&&r(1,b=i.showInDevice),"showInBrowser"in i&&r(2,a=i.showInBrowser),"showInOs"in i&&r(3,f=i.showInOs),"$$scope"in i&&r(4,o=i.$$scope)},[l,b,a,f,o,e]}class $e extends Xe{constructor(t){super(),Ke(this,t,di,wi,Je,{showInDevice:1,showInBrowser:2,showInOs:3})}}function Ve(w,t,r){const e=w.slice();return e[9]=t[r],e[11]=r,e}function Ge(w,t,r){const e=w.slice();return e[9]=t[r],e[11]=r,e}function Fe(w,t,r){const e=w.slice();return e[9]=t[r],e[11]=r,e}function mi(w){let t,r,e,o=w[9][0]+"",b,a,f,l,d,m,k;return{c(){t=M("button"),r=M("a"),e=M("b1"),b=ye(o),l=U(),this.h()},l(i){t=R(i,"BUTTON",{class:!0});var c=z(t);r=R(c,"A",{href:!0});var n=z(r);e=R(n,"B1",{class:!0});var s=z(e);b=Te(s,o),s.forEach(x),n.forEach(x),c.forEach(x),l=P(i),this.h()},h(){var i;N(e,"class","text-right"),N(r,"href",(i=w[9][1])!=null?i:"404"),N(t,"class","w-32")},m(i,c){q(i,t,c),B(t,r),B(r,e),B(e,b),q(i,l,c),d=!0,m||(k=Q(t,"click",w[3]),m=!0)},p:ee,i(i){d||(Oe(()=>{f&&f.end(1),a=Ne(t,Y,{x:10*(2-w[11]),duration:400}),a.start()}),d=!0)},o(i){a&&a.invalidate(),f=Ae(t,Y,{x:10*(2-w[11]),duration:400}),d=!1},d(i){i&&x(t),i&&f&&f.end(),i&&x(l),m=!1,k()}}}function He(w){let t,r;return t=new fe({props:{state:"hover",$$slots:{default:[mi]},$$scope:{ctx:w}}}),{c(){j(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,o){G(t,e,o),r=!0},p(e,o){const b={};o&257&&(b.$$scope={dirty:o,ctx:e}),t.$set(b)},i(e){r||(O(t.$$.fragment,e),r=!0)},o(e){S(t.$$.fragment,e),r=!1},d(e){F(t,e)}}}function hi(w){let t,r,e=w[1]().slice(0,2),o=[];for(let a=0;a<e.length;a+=1)o[a]=He(Fe(w,e,a));const b=a=>S(o[a],1,1,()=>{o[a]=null});return{c(){for(let a=0;a<o.length;a+=1)o[a].c();t=L()},l(a){for(let f=0;f<o.length;f+=1)o[f].l(a);t=L()},m(a,f){for(let l=0;l<o.length;l+=1)o[l].m(a,f);q(a,t,f),r=!0},p(a,f){if(f&3){e=a[1]().slice(0,2);let l;for(l=0;l<e.length;l+=1){const d=Fe(a,e,l);o[l]?(o[l].p(d,f),O(o[l],1)):(o[l]=He(d),o[l].c(),O(o[l],1),o[l].m(t.parentNode,t))}for(ce(),l=e.length;l<o.length;l+=1)b(l);ue()}},i(a){if(!r){for(let f=0;f<e.length;f+=1)O(o[f]);r=!0}},o(a){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)S(o[f]);r=!1},d(a){xe(o,a),a&&x(t)}}}function pi(w){let t,r,e,o,b;return{c(){t=M("button"),r=M("img"),this.h()},l(a){t=R(a,"BUTTON",{class:!0});var f=z(t);r=R(f,"IMG",{src:!0,alt:!0,class:!0}),f.forEach(x),this.h()},h(){ci(r.src,e="full_logo.svg")||N(r,"src",e),N(r,"alt","Logo"),N(r,"class","m-8 h-8"),N(t,"class","z-40 mx-4")},m(a,f){q(a,t,f),B(t,r),o||(b=Q(t,"click",w[4]),o=!0)},p:ee,d(a){a&&x(t),o=!1,b()}}}function We(w){let t,r,e;return{c(){t=M("button"),this.h()},l(o){t=R(o,"BUTTON",{class:!0}),z(t).forEach(x),this.h()},h(){N(t,"class","absolute w-screen h-screen")},m(o,b){q(o,t,b),r||(e=Q(t,"click",w[5]),r=!0)},p:ee,d(o){o&&x(t),r=!1,e()}}}function _i(w){let t,r,e,o=w[9][0]+"",b,a,f,l,d,m,k;return{c(){t=M("button"),r=M("a"),e=M("b1"),b=ye(o),l=U(),this.h()},l(i){t=R(i,"BUTTON",{class:!0});var c=z(t);r=R(c,"A",{href:!0});var n=z(r);e=R(n,"B1",{class:!0});var s=z(e);b=Te(s,o),s.forEach(x),n.forEach(x),c.forEach(x),l=P(i),this.h()},h(){var i;N(e,"class","text-right"),N(r,"href",(i=w[9][1])!=null?i:"404"),N(t,"class","h-16")},m(i,c){q(i,t,c),B(t,r),B(r,e),B(e,b),q(i,l,c),d=!0,m||(k=Q(t,"click",w[6]),m=!0)},p:ee,i(i){d||(Oe(()=>{f&&f.end(1),a=Ne(t,Y,{y:-1.5*(w[11]+2),duration:400}),a.start()}),d=!0)},o(i){a&&a.invalidate(),f=Ae(t,Y,{y:-1.5*(w[11]+2),duration:400}),d=!1},d(i){i&&x(t),i&&f&&f.end(),i&&x(l),m=!1,k()}}}function Ye(w){let t,r;return t=new fe({props:{state:"hover",$$slots:{default:[_i]},$$scope:{ctx:w}}}),{c(){j(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,o){G(t,e,o),r=!0},p(e,o){const b={};o&257&&(b.$$scope={dirty:o,ctx:e}),t.$set(b)},i(e){r||(O(t.$$.fragment,e),r=!0)},o(e){S(t.$$.fragment,e),r=!1},d(e){F(t,e)}}}function gi(w){let t,r,e,o=w[0]&&We(w),b=w[1](),a=[];for(let l=0;l<b.length;l+=1)a[l]=Ye(Ge(w,b,l));const f=l=>S(a[l],1,1,()=>{a[l]=null});return{c(){o&&o.c(),t=U();for(let l=0;l<a.length;l+=1)a[l].c();r=L()},l(l){o&&o.l(l),t=P(l);for(let d=0;d<a.length;d+=1)a[d].l(l);r=L()},m(l,d){o&&o.m(l,d),q(l,t,d);for(let m=0;m<a.length;m+=1)a[m].m(l,d);q(l,r,d),e=!0},p(l,d){if(l[0]?o?o.p(l,d):(o=We(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),d&3){b=l[1]();let m;for(m=0;m<b.length;m+=1){const k=Ge(l,b,m);a[m]?(a[m].p(k,d),O(a[m],1)):(a[m]=Ye(k),a[m].c(),O(a[m],1),a[m].m(r.parentNode,r))}for(ce(),m=b.length;m<a.length;m+=1)f(m);ue()}},i(l){if(!e){for(let d=0;d<b.length;d+=1)O(a[d]);e=!0}},o(l){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)S(a[d]);e=!1},d(l){o&&o.d(l),l&&x(t),xe(a,l),l&&x(r)}}}function vi(w){let t,r,e,o=w[9][0]+"",b,a,f,l,d,m,k;return{c(){t=M("button"),r=M("a"),e=M("b1"),b=ye(o),l=U(),this.h()},l(i){t=R(i,"BUTTON",{class:!0});var c=z(t);r=R(c,"A",{href:!0});var n=z(r);e=R(n,"B1",{class:!0});var s=z(e);b=Te(s,o),s.forEach(x),n.forEach(x),c.forEach(x),l=P(i),this.h()},h(){var i;N(e,"class","text-right"),N(r,"href",(i=w[9][1])!=null?i:"404"),N(t,"class","w-32")},m(i,c){q(i,t,c),B(t,r),B(r,e),B(e,b),q(i,l,c),d=!0,m||(k=Q(t,"click",w[7]),m=!0)},p:ee,i(i){d||(Oe(()=>{f&&f.end(1),a=Ne(t,Y,{x:10*(-1-w[11]),duration:400}),a.start()}),d=!0)},o(i){a&&a.invalidate(),f=Ae(t,Y,{x:10*(-1-w[11]),duration:400}),d=!1},d(i){i&&x(t),i&&f&&f.end(),i&&x(l),m=!1,k()}}}function Ze(w){let t,r;return t=new fe({props:{state:"hover",$$slots:{default:[vi]},$$scope:{ctx:w}}}),{c(){j(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,o){G(t,e,o),r=!0},p(e,o){const b={};o&257&&(b.$$scope={dirty:o,ctx:e}),t.$set(b)},i(e){r||(O(t.$$.fragment,e),r=!0)},o(e){S(t.$$.fragment,e),r=!1},d(e){F(t,e)}}}function ki(w){let t,r,e=w[1]().slice(-2),o=[];for(let a=0;a<e.length;a+=1)o[a]=Ze(Ve(w,e,a));const b=a=>S(o[a],1,1,()=>{o[a]=null});return{c(){for(let a=0;a<o.length;a+=1)o[a].c();t=L()},l(a){for(let f=0;f<o.length;f+=1)o[f].l(a);t=L()},m(a,f){for(let l=0;l<o.length;l+=1)o[l].m(a,f);q(a,t,f),r=!0},p(a,f){if(f&3){e=a[1]().slice(-2);let l;for(l=0;l<e.length;l+=1){const d=Ve(a,e,l);o[l]?(o[l].p(d,f),O(o[l],1)):(o[l]=Ze(d),o[l].c(),O(o[l],1),o[l].m(t.parentNode,t))}for(ce(),l=e.length;l<o.length;l+=1)b(l);ue()}},i(a){if(!r){for(let f=0;f<e.length;f+=1)O(o[f]);r=!0}},o(a){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)S(o[f]);r=!1},d(a){xe(o,a),a&&x(t)}}}function $i(w){let t,r,e,o,b,a,f,l,d,m,k,i,c;e=new $e({props:{showInDevice:"desktop",$$slots:{default:[hi]},$$scope:{ctx:w}}}),b=new fe({props:{state:"hover",$$slots:{default:[pi]},$$scope:{ctx:w}}}),f=new $e({props:{showInDevice:"mobile",$$slots:{default:[gi]},$$scope:{ctx:w}}}),d=new $e({props:{showInDevice:"desktop",$$slots:{default:[ki]},$$scope:{ctx:w}}});const n=w[2].default,s=Qe(n,w,w[8],null);return{c(){t=M("main"),r=M("header"),j(e.$$.fragment),o=U(),j(b.$$.fragment),a=U(),j(f.$$.fragment),l=U(),j(d.$$.fragment),m=U(),k=M("div"),s&&s.c(),this.h()},l(u){t=R(u,"MAIN",{class:!0});var $=z(t);r=R($,"HEADER",{class:!0});var A=z(r);V(e.$$.fragment,A),o=P(A),V(b.$$.fragment,A),a=P(A),V(f.$$.fragment,A),l=P(A),V(d.$$.fragment,A),A.forEach(x),m=P($),k=R($,"DIV",{class:!0,style:!0});var h=z(k);s&&s.l(h),h.forEach(x),$.forEach(x),this.h()},h(){N(r,"class","fixed z-20 w-full h-24 flex flex-col md:flex-row justify-start md:justify-center items-center"),N(k,"class",i=(w[0]?"blur md:blur-0":"blur-0")+" max-h-screen"),li(k,"transition","all 400ms cubic-bezier(0, 0, 1, 1)"),N(t,"class","w-screen min-h-screen bg-background text-onBackground")},m(u,$){q(u,t,$),B(t,r),G(e,r,null),B(r,o),G(b,r,null),B(r,a),G(f,r,null),B(r,l),G(d,r,null),B(t,m),B(t,k),s&&s.m(k,null),c=!0},p(u,[$]){const A={};$&257&&(A.$$scope={dirty:$,ctx:u}),e.$set(A);const h={};$&257&&(h.$$scope={dirty:$,ctx:u}),b.$set(h);const p={};$&257&&(p.$$scope={dirty:$,ctx:u}),f.$set(p);const I={};$&257&&(I.$$scope={dirty:$,ctx:u}),d.$set(I),s&&s.p&&(!c||$&256)&&ei(s,n,u,u[8],c?ti(n,u[8],$,null):ii(u[8]),null),(!c||$&1&&i!==(i=(u[0]?"blur md:blur-0":"blur-0")+" max-h-screen"))&&N(k,"class",i)},i(u){c||(O(e.$$.fragment,u),O(b.$$.fragment,u),O(f.$$.fragment,u),O(d.$$.fragment,u),O(s,u),c=!0)},o(u){S(e.$$.fragment,u),S(b.$$.fragment,u),S(f.$$.fragment,u),S(d.$$.fragment,u),S(s,u),c=!1},d(u){u&&x(t),F(e),F(b),F(f),F(d),s&&s.d(u)}}}function Ei(w,t,r){let{$$slots:e={},$$scope:o}=t,b=!1;function a(){return b?[["Home","home"],["Mission","mission"],["Team","team"],["Contact","contact"]]:[]}const f=()=>r(0,b=!1),l=()=>r(0,b=!b),d=()=>r(0,b=!1),m=()=>r(0,b=!1),k=()=>r(0,b=!1);return w.$$set=i=>{"$$scope"in i&&r(8,o=i.$$scope)},[b,a,e,f,l,d,m,k,o]}class Ti extends Xe{constructor(t){super(),Ke(this,t,Ei,$i,Je,{})}}export{Ti as default};
