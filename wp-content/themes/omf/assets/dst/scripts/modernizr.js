/*! modernizr 3.0.0-alpha.3 (Custom Build) | MIT *
 * http://v3.modernizr.com/download/#-cssanimations-csstransforms-csstransforms3d-csstransitions !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,a;for(var f in h){if(e=[],n=h[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),g.push((s?"":"no-")+a.join("-"))}}function o(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),S.className=n)}function i(){var e=n.body;return e||(e=w("body"),e.fake=!0),e}function a(e,n,t,r){var s,o,a,f,u="modernizr",l=w("div"),d=i();if(parseInt(t,10))for(;t--;)a=w("div"),a.id=r?r[t]:u+(t+1),l.appendChild(a);return s=["&#173;",'<style id="s',u,'">',e,"</style>"].join(""),l.id=u,(d.fake?d:l).innerHTML+=s,d.appendChild(l),d.fake&&(d.style.background="",d.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(d)),o=n(l,e),d.fake?(d.parentNode.removeChild(d),S.style.overflow=f,S.offsetHeight):l.parentNode.removeChild(l),!!o}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?f(s,t||n):s);return!1}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return!!~(""+e).indexOf(n)}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(p(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+p(n[s])+":"+r+")");return o=o.join(" or "),a("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function m(e,n,s,o){function i(){f&&(delete j.style,delete j.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var a=c(e,s);if(!r(a,"undefined"))return a}var f,u,p,m,v;for(j.style||(f=!0,j.modElem=w("modernizr"),j.style=j.modElem.style),p=e.length,u=0;p>u;u++)if(m=e[u],v=j.style[m],d(m,"-")&&(m=l(m)),j.style[m]!==t){if(o||r(s,"undefined"))return i(),"pfx"==n?m:!0;try{j.style[m]=s}catch(y){}if(j.style[m]!=v)return i(),"pfx"==n?m:!0}return i(),!1}function v(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?m(a,n,s,o):(a=(e+" "+z.join(i+" ")+i).split(" "),u(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],h=[],C={_version:"3.0.0-alpha.3",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){h.push({name:e,fn:n,options:t})},addAsyncTest:function(e){h.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var S=n.documentElement,_="CSS"in e&&"supports"in e.CSS,x="supportsCSS"in e;Modernizr.addTest("supports",_||x);var w=function(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):n.createElement.apply(n,arguments)},b=C.testStyles=a,P="Moz O ms Webkit",T=C._config.usePrefixes?P.split(" "):[];C._cssomPrefixes=T;var z=C._config.usePrefixes?P.toLowerCase().split(" "):[];C._domPrefixes=z;var E={elem:w("modernizr")};Modernizr._q.push(function(){delete E.elem});var j={style:E.elem.style};Modernizr._q.unshift(function(){delete j.style}),C.testAllProps=v,C.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!y("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in S.style)){var t;Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",b(t,function(n){e=9===n.offsetLeft&&5===n.offsetHeight})}return e}),Modernizr.addTest("csstransitions",y("transition","all",!0)),s(),o(g),delete C.addTest,delete C.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);