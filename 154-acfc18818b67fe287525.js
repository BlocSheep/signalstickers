(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{"./.linaria-cache/src/components/pack/NsfwModal.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/Sticker.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/StickerPackDetail.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/Tag.linaria.css":function(e,t,a){},"./config/modernizr-config.json":function(e,t){!function(t){var a="Modernizr"in t,r=t.Modernizr;!function(e,t,a,r){function n(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function s(){return"function"!=typeof a.createElement?a.createElement(arguments[0]):x?a.createElementNS.call(a,"http://www.w3.org/2000/svg",arguments[0]):a.createElement.apply(a,arguments)}function c(e,t,r,n){var o,c,l,i,d="modernizr",u=s("div"),m=function(){var e=a.body;return e||((e=s(x?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(l=s("div")).id=n?n[r]:d+(r+1),u.appendChild(l);return(o=s("style")).type="text/css",o.id="s"+d,(m.fake?m:u).appendChild(o),m.appendChild(u),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(a.createTextNode(e)),u.id=d,m.fake&&(m.style.background="",m.style.overflow="hidden",i=E.style.overflow,E.style.overflow="hidden",E.appendChild(m)),c=t(u,e),m.fake?(m.parentNode.removeChild(m),E.style.overflow=i,E.offsetHeight):u.parentNode.removeChild(u),!!c}function l(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function i(e,a){var n=e.length;if("CSS"in t&&"supports"in t.CSS){for(;n--;)if(t.CSS.supports(l(e[n]),a))return!0;return!1}if("CSSSupportsRule"in t){for(var o=[];n--;)o.push("("+l(e[n])+":"+a+")");return c("@supports ("+(o=o.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"===function(e,a,r){var n;if("getComputedStyle"in t){n=getComputedStyle.call(t,e,a);var o=t.console;if(null!==n)r&&(n=n.getPropertyValue(r));else if(o){o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else n=!a&&e.currentStyle&&e.currentStyle[r];return n}(e,null,"position")}))}return r}function d(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,a){return t+a.toUpperCase()})).replace(/^-/,"")}function u(e,t,a,c){function l(){m&&(delete S.style,delete S.modElem)}if(c=!n(c,"undefined")&&c,!n(a,"undefined")){var u=i(e,a);if(!n(u,"undefined"))return u}for(var m,f,p,k,b,g=["modernizr","tspan","samp"];!S.style&&g.length;)m=!0,S.modElem=s(g.shift()),S.style=S.modElem.style;for(p=e.length,f=0;f<p;f++)if(k=e[f],b=S.style[k],o(k,"-")&&(k=d(k)),S.style[k]!==r){if(c||n(a,"undefined"))return l(),"pfx"!==t||k;try{S.style[k]=a}catch(e){}if(S.style[k]!==b)return l(),"pfx"!==t||k}return l(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,a,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),c=(e+" "+y.join(s+" ")+s).split(" ");return n(t,"string")||n(t,"undefined")?u(c,t,r,o):function(e,t,a){var r;for(var o in e)if(e[o]in t)return!1===a?e[o]:n(r=t[e[o]],"function")?m(r,a||t):r;return!1}(c=(e+" "+j.join(s+" ")+s).split(" "),t,a)}function p(e,t,a){return f(e,r,r,t,a)}var k=[],b={_version:"3.10.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var a=this;setTimeout((function(){t(a[e])}),0)},addTest:function(e,t,a){k.push({name:e,fn:t,options:a})},addAsyncTest:function(e){k.push({name:null,fn:e})}},g=function(){};g.prototype=b,g=new g;var h=[],v="Moz O ms Webkit",y=b._config.usePrefixes?v.split(" "):[];b._cssomPrefixes=y;var E=a.documentElement,x="svg"===E.nodeName.toLowerCase(),w={elem:s("modernizr")};g._q.push((function(){delete w.elem}));var S={style:w.elem.style};g._q.unshift((function(){delete S.style}));var j=b._config.usePrefixes?v.toLowerCase().split(" "):[];b._domPrefixes=j,b.testAllProps=f,b.testAllProps=p,g.addTest("backdropfilter",p("backdropFilter")),function(){var e,t,a,r,o,s;for(var c in k)if(k.hasOwnProperty(c)){if(e=[],(t=k[c]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(a=0;a<t.options.aliases.length;a++)e.push(t.options.aliases[a].toLowerCase());for(r=n(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(s=e[o].split(".")).length?g[s[0]]=r:(g[s[0]]&&(!g[s[0]]||g[s[0]]instanceof Boolean)||(g[s[0]]=new Boolean(g[s[0]])),g[s[0]][s[1]]=r),h.push((r?"":"no-")+s.join("-"))}}(),delete b.addTest,delete b.addAsyncTest;for(var L=0;L<g._q.length;L++)g._q[L]();e.Modernizr=g}(t,t,document),e.exports=t.Modernizr,a?t.Modernizr=r:delete t.Modernizr}(window)},"./src/components/pack/NsfwModal.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/linaria/react.js"),o=a("./config/modernizr-config.json"),s=a.n(o),c=a("./node_modules/react-router-dom/esm/react-router-dom.js"),l=a("./node_modules/react/index.js"),i=a.n(l),d=a("./node_modules/react-octicon/lib/index.js"),u=a.n(d);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},f=Object(n.styled)("div")({name:"NsfwModal",class:"n11e8w11",vars:{"n11e8w11-0":[function(){return s.a.backdropfilter?.75:1}]}}),p=function(){Object(l.useEffect)((function(){$("#nsfw-modal").modal({show:!0,keyboard:!1,backdrop:"static"}),$("#nsfw-modal").addClass("fade"),$(".modal-backdrop").css("display","none")}),[]);return i.a.createElement(f,{id:"nsfw-modal",className:"modal",role:"dialog"},i.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h3",{className:"modal-title"},i.a.createElement(u.a,{name:"alert"})," Content Warning")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("p",null,"This pack has been marked ",i.a.createElement("i",null,"Not Safe For Work")," (",i.a.createElement("a",{href:"https://www.urbandictionary.com/define.php?term=NSFW",target:"_blank",rel:"noopener noreferrer"},"NSFW"),").",i.a.createElement("br",null),"This means that it may contain nudity, sexual content, or other potentially disturbing subject matter."),i.a.createElement("p",null,"You should not view this pack at work, or with children around.")),i.a.createElement("div",{className:"modal-footer"},i.a.createElement(c.b,{to:"/",className:"btn btn-secondary",title:"Go back home"},"Go back home"),i.a.createElement("button",{className:"btn btn-primary",onClick:function(){$("#nsfw-modal").modal("hide")}},"Show the pack")))))};m(p,"useEffect{}");var k,b,g=p;t.a=g,a("./.linaria-cache/src/components/pack/NsfwModal.linaria.css"),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(k.register(f,"NsfwModal","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx"),k.register(p,"NsfwModalComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx"),k.register(g,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/Sticker.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/@babel/runtime/regenerator/index.js"),o=a.n(n),s=a("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),c=a.n(s),l=a("./node_modules/@babel/runtime/helpers/slicedToArray.js"),i=a.n(l),d=a("./node_modules/react/index.js"),u=a.n(d),m=a("./node_modules/linaria/react.js"),f=a("./node_modules/use-async-effect/index.js"),p=a.n(f),k=a("./src/lib/stickers.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=Object(m.styled)("div")({name:"Sticker",class:"sahlm9h"}),h=function(e){var t=e.packId,a=e.packKey,r=e.stickerId,n=Object(d.useState)(""),s=i()(n,2),l=s[0],m=s[1],f=Object(d.useState)(""),b=i()(f,2),h=b[0],v=b[1];return p()(c()(o.a.mark((function e(){var n,s,c,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(k.c)(t,a,r),Object(k.b)(t,a,r)]);case 2:n=e.sent,s=i()(n,2),c=s[0],l=s[1],m(c),v(l);case 8:case"end":return e.stop()}}),e)}))),[]),l&&h?u.a.createElement(g,{className:"shadow-sm m-3 p-4"},u.a.createElement("div",{className:"emoji"},l),u.a.createElement("img",{src:h,alt:"Sticker"})):null};b(h,"useState{[emoji, setEmoji]('')}\nuseState{[stickerSrc, setStickerSrc]('')}\nuseAsyncEffect{}",(function(){return[p.a]}));var v,y,E=h;t.a=E,a("./.linaria-cache/src/components/pack/Sticker.linaria.css"),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(g,"Sticker","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),v.register(h,"StickerComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),v.register(E,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/StickerPackDetail.tsx":function(e,t,a){"use strict";a.r(t),function(e){var r,n=a("./node_modules/@babel/runtime/regenerator/index.js"),o=a.n(n),s=a("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),c=a.n(s),l=a("./node_modules/@babel/runtime/helpers/slicedToArray.js"),i=a.n(l),d=a("./node_modules/react/index.js"),u=a.n(d),m=a("./node_modules/react-router/esm/react-router.js"),f=a("./node_modules/react-router-dom/esm/react-router-dom.js"),p=a("./node_modules/react-linkify/dist/index.js"),k=a.n(p),b=a("./node_modules/linaria/react.js"),g=a("./node_modules/react-octicon/lib/index.js"),h=a.n(g),v=a("./node_modules/use-async-effect/index.js"),y=a.n(v),E=a("./src/hooks/use-query.ts"),x=a("./src/lib/stickers.ts"),w=a("./src/components/pack/Sticker.tsx"),S=a("./src/components/pack/StickerPackError.tsx"),j=a("./src/components/pack/Tag.tsx"),L=a("./src/contexts/StickersContext.tsx"),N=a("./src/components/pack/NsfwModal.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var H="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},G=Object(b.styled)("div")({name:"StickerPackDetail",class:"s11r72gg"});function _(e,t,a){return u.a.createElement("a",{href:e,key:a,target:"_blank",rel:"noreferrer"},t)}var C=function(){var e=Object(m.h)().packId,t=Object(E.a)().get("key")||void 0,a=Object(d.useState)(),r=i()(a,2),n=r[0],s=r[1],l=Object(d.useState)(""),p=i()(l,2),b=p[0],g=p[1],v=Object(d.useContext)(L.b).setSearchQuery,H=Object(m.f)();if(y()(c()(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,e){a.next=3;break}return a.abrupt("return");case 3:return a.t0=s,a.next=6,Object(x.d)(e,t);case 6:a.t1=a.sent,(0,a.t0)(a.t1),a.next=13;break;case 10:a.prev=10,a.t2=a.catch(0),a.t2.code&&g(a.t2.code);case 13:case"end":return a.stop()}}),a,null,[[0,10]])}))),[]),!e||!n){if(b)switch(b){case"NO_KEY_PROVIDED":return u.a.createElement(S.a,null,u.a.createElement("p",null,"This sticker pack is not listed in the Signal Stickers directory. However, if you have the pack's ",u.a.createElement("strong",null,"key"),", you can still preview the sticker pack by supplying a ",u.a.createElement("code",null,"key")," parameter in the URL."),u.a.createElement("p",null,"For example: ",u.a.createElement("code",null,"/pack/".concat(e,"?key=sticker-pack-key"))));case"MANIFEST_DECRYPT":return u.a.createElement(S.a,null,u.a.createElement("p",null,"The provided key is invalid."));default:return u.a.createElement(S.a,null,u.a.createElement("p",null,"An unknown error occurred (",b,")."))}return null}var C=n.meta.source||"N/A",P=n.manifest.stickers.length,T=n.manifest.author.trim()?n.manifest.author:"Anonymous",M=n.meta.tags||[],O="https://signal.art/addstickers/#pack_id=".concat(e,"&pack_key=").concat(n.meta.key);return u.a.createElement(G,{className:"px-1 px-sm-4 py-4 mt-0 mt-sm-5 mb-5"},n.meta.nsfw?u.a.createElement(N.a,null):null,u.a.createElement("div",{className:"row mb-4 flex-column-reverse flex-lg-row"},u.a.createElement("div",{className:"col-12 col-lg-8 mt-4 mt-lg-0"},u.a.createElement("div",{className:"title"},n.manifest.title),u.a.createElement("div",{className:"author"},u.a.createElement("a",{title:"View more packs from ".concat(T),href:"",onClick:function(e){e.preventDefault(),v(e.currentTarget.textContent),H.push("/")}},T))),u.a.createElement("div",{className:"col-12 col-lg-4 d-flex d-lg-block justify-content-between text-md-right"},n.meta?u.a.createElement(f.b,{to:"/"},u.a.createElement("button",{type:"button",className:"btn btn-link mr-2"},"Home")):null,u.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer",title:"Add to Signal"},u.a.createElement("button",{className:"btn btn-primary"},u.a.createElement(h.a,{name:"plus"})," Add to Signal")))),n.meta?u.a.createElement("div",{className:"row mb-4"},u.a.createElement("div",{className:"col-12 col-lg-6"},u.a.createElement("ul",{className:"list-group"},n.meta.original?u.a.createElement("li",{className:"list-group-item text-wrap text-break"},u.a.createElement(h.a,{name:"star",title:"Original sticker pack"})," This pack has been created exclusively for Signal by the artist, from original artworks."):null,u.a.createElement("li",{className:"list-group-item text-wrap text-break"},u.a.createElement(h.a,{name:"globe",title:"Source"}),u.a.createElement("div",null,u.a.createElement(k.a,{componentDecorator:_},C))),u.a.createElement("li",{className:"list-group-item text-wrap text-break"},u.a.createElement(h.a,{name:"file-directory",title:"Sticker Count"}),P),u.a.createElement("li",{className:"list-group-item"},u.a.createElement(h.a,{name:"tag",title:"Tags"}),u.a.createElement("div",{className:"text-wrap text-break"},0===M.length?"None":M.map((function(e){return u.a.createElement(j.a,{key:e},e)}))))))):null,u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-around"},n.manifest.stickers.map((function(t){return u.a.createElement(w.a,{packId:e,packKey:n.meta.key,stickerId:t.id,key:t.id})}))))))};H(C,"useParams{{\n    packId\n  }}\nuseQuery{}\nuseState{[stickerPack, setStickerPack]}\nuseState{[stickerPackError, setStickerPackError]('')}\nuseContext{{\n    setSearchQuery\n  }}\nuseHistory{history}\nuseAsyncEffect{}",(function(){return[m.h,E.a,m.f,y.a]}));var P,T,M=C;t.default=M,a("./.linaria-cache/src/components/pack/StickerPackDetail.linaria.css"),(P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(P.register(G,"StickerPackDetail","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),P.register(_,"LinkifyHrefDecorator","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),P.register(C,"StickerPackDetailComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),P.register(M,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx")),(T="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&T(e)}.call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/StickerPackError.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/react/index.js"),o=a.n(n);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,c,l=function(e){return o.a.createElement("div",{className:"p-4 my-4"},o.a.createElement("div",{className:"row mb-4"},o.a.createElement("div",{className:"col-10 offset-1 alert alert-danger"},o.a.createElement("h3",{className:"alert-heading mt-1 mb-3"},"Error"),e.children)))},i=l;t.a=i,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(l,"StickerPackError","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx"),s.register(i,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/Tag.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/react/index.js"),o=a.n(n),s=a("./node_modules/linaria/react.js"),c=a("./node_modules/react-router/esm/react-router.js"),l=a("./src/contexts/StickersContext.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},d=Object(s.styled)("button")({name:"Tag",class:"t1fwmllz"}),u=function(e){var t=Object(n.useContext)(l.b).setSearchQuery,a=Object(c.f)();return o.a.createElement(d,{className:"btn",onClick:function(e){e.preventDefault(),t(e.currentTarget.textContent),a.push("/")},title:'View more packs with tag "'.concat(e.children,'"')},e.children)};i(u,"useContext{{\n    setSearchQuery\n  }}\nuseHistory{history}",(function(){return[c.f]}));var m,f,p=u;t.a=p,a("./.linaria-cache/src/components/pack/Tag.linaria.css"),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(d,"Tag","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx"),m.register(u,"TagComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx"),m.register(p,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/hooks/use-query.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var r,n,o,s=a("./node_modules/react-router/esm/react-router.js");function c(){return new URLSearchParams(Object(s.g)().search)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(c,"useLocation{}",(function(){return[s.g]})),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(c,"useQuery","/home/travis/build/signalstickers/signalstickers/src/hooks/use-query.ts"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=154-acfc18818b67fe287525.js.map