import{S as yi,i as Ei,s as Ti,C as Ai,k as ei,a as Oi,l as ai,m as oi,h as F,c as Si,n as ri,p as Ni,b as Ri,D as ti,E as Mi,F as zi,G as qi,f as Ci,t as Ui}from"../../chunks/index-c99b084d.js";/* empty css                          */var Bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vi={exports:{}};(function(T,p){(function(h,d){var k="0.7.32",v="",A="?",f="function",m="undefined",g="object",O="string",U="major",a="model",o="name",i="type",e="vendor",r="version",_="architecture",R="console",l="mobile",t="tablet",x="smarttv",M="wearable",si="embedded",H=350,W="Amazon",Y="Apple",ni="ASUS",li="BlackBerry",S="Browser",B="Chrome",gi="Edge",P="Firefox",I="Google",bi="Huawei",Z="LG",X="Microsoft",wi="Motorola",L="Opera",K="Samsung",ci="Sharp",j="Sony",J="Xiaomi",Q="Zebra",di="Facebook",ki=function(s,w){var n={};for(var u in s)w[u]&&w[u].length%2===0?n[u]=w[u].concat(s[u]):n[u]=s[u];return n},D=function(s){for(var w={},n=0;n<s.length;n++)w[s[n].toUpperCase()]=s[n];return w},ui=function(s,w){return typeof s===O?z(w).indexOf(z(s))!==-1:!1},z=function(s){return s.toLowerCase()},xi=function(s){return typeof s===O?s.replace(/[^\d\.]/g,v).split(".")[0]:d},$=function(s,w){if(typeof s===O)return s=s.replace(/^\s\s*/,v).replace(/\s\s*$/,v),typeof w===m?s:s.substring(0,H)},q=function(s,w){for(var n=0,u,b,G,c,C,E;n<w.length&&!C;){var fi=w[n],hi=w[n+1];for(u=b=0;u<fi.length&&!C;)if(C=fi[u++].exec(s),C)for(G=0;G<hi.length;G++)E=C[++b],c=hi[G],typeof c===g&&c.length>0?c.length===2?typeof c[1]==f?this[c[0]]=c[1].call(this,E):this[c[0]]=c[1]:c.length===3?typeof c[1]===f&&!(c[1].exec&&c[1].test)?this[c[0]]=E?c[1].call(this,E,c[2]):d:this[c[0]]=E?E.replace(c[1],c[2]):d:c.length===4&&(this[c[0]]=E?c[3].call(this,E.replace(c[1],c[2])):d):this[c]=E||d;n+=2}},ii=function(s,w){for(var n in w)if(typeof w[n]===g&&w[n].length>0){for(var u=0;u<w[n].length;u++)if(ui(w[n][u],s))return n===A?d:n}else if(ui(w[n],s))return n===A?d:n;return s},_i={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},mi={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},pi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[r,[o,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[r,[o,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[o,r],[/opios[\/ ]+([\w\.]+)/i],[r,[o,L+" Mini"]],[/\bopr\/([\w\.]+)/i],[r,[o,L]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[o,r],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[r,[o,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[r,[o,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[r,[o,"WeChat"]],[/konqueror\/([\w\.]+)/i],[r,[o,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[r,[o,"IE"]],[/yabrowser\/([\w\.]+)/i],[r,[o,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[o,/(.+)/,"$1 Secure "+S],r],[/\bfocus\/([\w\.]+)/i],[r,[o,P+" Focus"]],[/\bopt\/([\w\.]+)/i],[r,[o,L+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[r,[o,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[r,[o,"Dolphin"]],[/coast\/([\w\.]+)/i],[r,[o,L+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[r,[o,"MIUI "+S]],[/fxios\/([-\w\.]+)/i],[r,[o,P]],[/\bqihu|(qi?ho?o?|360)browser/i],[[o,"360 "+S]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[o,/(.+)/,"$1 "+S],r],[/(comodo_dragon)\/([\w\.]+)/i],[[o,/_/g," "],r],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[o,r],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[o],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[o,di],r],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[o,r],[/\bgsa\/([\w\.]+) .*safari\//i],[r,[o,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[r,[o,B+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[o,B+" WebView"],r],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[r,[o,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[o,r],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[r,[o,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[r,o],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[o,[r,ii,_i]],[/(webkit|khtml)\/([\w\.]+)/i],[o,r],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[o,"Netscape"],r],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[r,[o,P+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[o,r]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[_,"amd64"]],[/(ia32(?=;))/i],[[_,z]],[/((?:i[346]|x)86)[;\)]/i],[[_,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[_,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[_,"armhf"]],[/windows (ce|mobile); ppc;/i],[[_,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[_,/ower/,v,z]],[/(sun4\w)[;\)]/i],[[_,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[_,z]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[a,[e,K],[i,t]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[a,[e,K],[i,l]],[/\((ip(?:hone|od)[\w ]*);/i],[a,[e,Y],[i,l]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[a,[e,Y],[i,t]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[a,[e,bi],[i,t]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[a,[e,bi],[i,l]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[a,/_/g," "],[e,J],[i,l]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[a,/_/g," "],[e,J],[i,t]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[a,[e,"OPPO"],[i,l]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[a,[e,"Vivo"],[i,l]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[a,[e,"Realme"],[i,l]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[a,[e,wi],[i,l]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[a,[e,wi],[i,t]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[a,[e,Z],[i,t]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[a,[e,Z],[i,l]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[a,[e,"Lenovo"],[i,t]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[a,/_/g," "],[e,"Nokia"],[i,l]],[/(pixel c)\b/i],[a,[e,I],[i,t]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[a,[e,I],[i,l]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[a,[e,j],[i,l]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[a,"Xperia Tablet"],[e,j],[i,t]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[a,[e,"OnePlus"],[i,l]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[a,[e,W],[i,t]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[a,/(.+)/g,"Fire Phone $1"],[e,W],[i,l]],[/(playbook);[-\w\),; ]+(rim)/i],[a,e,[i,t]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[a,[e,li],[i,l]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[a,[e,ni],[i,t]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[a,[e,ni],[i,l]],[/(nexus 9)/i],[a,[e,"HTC"],[i,t]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[e,[a,/_/g," "],[i,l]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[a,[e,"Acer"],[i,t]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[a,[e,"Meizu"],[i,l]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[a,[e,ci],[i,l]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[e,a,[i,l]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[e,a,[i,t]],[/(surface duo)/i],[a,[e,X],[i,t]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[a,[e,"Fairphone"],[i,l]],[/(u304aa)/i],[a,[e,"AT&T"],[i,l]],[/\bsie-(\w*)/i],[a,[e,"Siemens"],[i,l]],[/\b(rct\w+) b/i],[a,[e,"RCA"],[i,t]],[/\b(venue[\d ]{2,7}) b/i],[a,[e,"Dell"],[i,t]],[/\b(q(?:mv|ta)\w+) b/i],[a,[e,"Verizon"],[i,t]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[a,[e,"Barnes & Noble"],[i,t]],[/\b(tm\d{3}\w+) b/i],[a,[e,"NuVision"],[i,t]],[/\b(k88) b/i],[a,[e,"ZTE"],[i,t]],[/\b(nx\d{3}j) b/i],[a,[e,"ZTE"],[i,l]],[/\b(gen\d{3}) b.+49h/i],[a,[e,"Swiss"],[i,l]],[/\b(zur\d{3}) b/i],[a,[e,"Swiss"],[i,t]],[/\b((zeki)?tb.*\b) b/i],[a,[e,"Zeki"],[i,t]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[e,"Dragon Touch"],a,[i,t]],[/\b(ns-?\w{0,9}) b/i],[a,[e,"Insignia"],[i,t]],[/\b((nxa|next)-?\w{0,9}) b/i],[a,[e,"NextBook"],[i,t]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[e,"Voice"],a,[i,l]],[/\b(lvtel\-)?(v1[12]) b/i],[[e,"LvTel"],a,[i,l]],[/\b(ph-1) /i],[a,[e,"Essential"],[i,l]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[a,[e,"Envizen"],[i,t]],[/\b(trio[-\w\. ]+) b/i],[a,[e,"MachSpeed"],[i,t]],[/\btu_(1491) b/i],[a,[e,"Rotor"],[i,t]],[/(shield[\w ]+) b/i],[a,[e,"Nvidia"],[i,t]],[/(sprint) (\w+)/i],[e,a,[i,l]],[/(kin\.[onetw]{3})/i],[[a,/\./g," "],[e,X],[i,l]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[a,[e,Q],[i,t]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[a,[e,Q],[i,l]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[e,a,[i,R]],[/droid.+; (shield) bui/i],[a,[e,"Nvidia"],[i,R]],[/(playstation [345portablevi]+)/i],[a,[e,j],[i,R]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[a,[e,X],[i,R]],[/smart-tv.+(samsung)/i],[e,[i,x]],[/hbbtv.+maple;(\d+)/i],[[a,/^/,"SmartTV"],[e,K],[i,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[e,Z],[i,x]],[/(apple) ?tv/i],[e,[a,Y+" TV"],[i,x]],[/crkey/i],[[a,B+"cast"],[e,I],[i,x]],[/droid.+aft(\w)( bui|\))/i],[a,[e,W],[i,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[a,[e,ci],[i,x]],[/(bravia[\w ]+)( bui|\))/i],[a,[e,j],[i,x]],[/(mitv-\w{5}) bui/i],[a,[e,J],[i,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[e,$],[a,$],[i,x]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[i,x]],[/((pebble))app/i],[e,a,[i,M]],[/droid.+; (glass) \d/i],[a,[e,I],[i,M]],[/droid.+; (wt63?0{2,3})\)/i],[a,[e,Q],[i,M]],[/(quest( 2)?)/i],[a,[e,di],[i,M]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[e,[i,si]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[a,[i,l]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[a,[i,t]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[i,t]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[i,l]],[/(android[-\w\. ]{0,9});.+buil/i],[a,[e,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[r,[o,gi+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[r,[o,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[o,r],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[r,o]],os:[[/microsoft (windows) (vista|xp)/i],[o,r],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[o,[r,ii,mi]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[o,"Windows"],[r,ii,mi]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[r,/_/g,"."],[o,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[o,"Mac OS"],[r,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[r,o],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[o,r],[/\(bb(10);/i],[r,[o,li]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[r,[o,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[r,[o,P+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[r,[o,"webOS"]],[/crkey\/([\d\.]+)/i],[r,[o,B+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[o,"Chromium OS"],r],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[o,r],[/(sunos) ?([\w\.\d]*)/i],[[o,"Solaris"],r],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[o,r]]},y=function(s,w){if(typeof s===g&&(w=s,s=d),!(this instanceof y))return new y(s,w).getResult();var n=s||(typeof h!==m&&h.navigator&&h.navigator.userAgent?h.navigator.userAgent:v),u=w?ki(pi,w):pi;return this.getBrowser=function(){var b={};return b[o]=d,b[r]=d,q.call(b,n,u.browser),b.major=xi(b.version),b},this.getCPU=function(){var b={};return b[_]=d,q.call(b,n,u.cpu),b},this.getDevice=function(){var b={};return b[e]=d,b[a]=d,b[i]=d,q.call(b,n,u.device),b},this.getEngine=function(){var b={};return b[o]=d,b[r]=d,q.call(b,n,u.engine),b},this.getOS=function(){var b={};return b[o]=d,b[r]=d,q.call(b,n,u.os),b},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(b){return n=typeof b===O&&b.length>H?$(b,H):b,this},this.setUA(n),this};y.VERSION=k,y.BROWSER=D([o,r,U]),y.CPU=D([_]),y.DEVICE=D([a,e,i,R,l,x,t,M,si]),y.ENGINE=y.OS=D([o,r]),T.exports&&(p=T.exports=y),p.UAParser=y;var N=typeof h!==m&&(h.jQuery||h.Zepto);if(N&&!N.ua){var V=new y;N.ua=V.getResult(),N.ua.get=function(){return V.getUA()},N.ua.set=function(s){V.setUA(s);var w=V.getResult();for(var n in w)N.ua[n]=w[n]}}})(typeof window=="object"?window:Bi)})(vi,vi.exports);function Pi(T){let p,h,d,k,v;const A=T[1].default,f=Ai(A,T,T[0],null);return{c(){p=ei("main"),h=ei("header"),d=Oi(),k=ei("div"),f&&f.c(),this.h()},l(m){p=ai(m,"MAIN",{class:!0});var g=oi(p);h=ai(g,"HEADER",{class:!0});var O=oi(h);O.forEach(F),d=Si(g),k=ai(g,"DIV",{class:!0,style:!0});var U=oi(k);f&&f.l(U),U.forEach(F),g.forEach(F),this.h()},h(){ri(h,"class","fixed z-20 w-full h-0 flex flex-col md:flex-row justify-start md:justify-center items-center"),ri(k,"class","blur-0 h-screen"),Ni(k,"transition","all 400ms cubic-bezier(0, .2, 1, .4)"),ri(p,"class","w-screen min-h-screen bg-background text-onBackground")},m(m,g){Ri(m,p,g),ti(p,h),ti(p,d),ti(p,k),f&&f.m(k,null),v=!0},p(m,[g]){f&&f.p&&(!v||g&1)&&Mi(f,A,m,m[0],v?qi(A,m[0],g,null):zi(m[0]),null)},i(m){v||(Ci(f,m),v=!0)},o(m){Ui(f,m),v=!1},d(m){m&&F(p),f&&f.d(m)}}}function Ii(T,p,h){let{$$slots:d={},$$scope:k}=p;return T.$$set=v=>{"$$scope"in v&&h(0,k=v.$$scope)},[k,d]}class Di extends yi{constructor(p){super(),Ei(this,p,Ii,Pi,Ti,{})}}export{Di as default};
