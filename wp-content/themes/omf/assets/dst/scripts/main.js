!function t(o,e,n){function i(r,l){if(!e[r]){if(!o[r]){var a="function"==typeof require&&require;if(!l&&a)return a(r,!0);if(s)return s(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=e[r]={exports:{}};o[r][0].call(u.exports,function(t){var e=o[r][1][t];return i(e?e:t)},u,u.exports,t,o,e,n)}return e[r].exports}for(var s="function"==typeof require&&require,r=0;r<n.length;r++)i(n[r]);return i}({1:[function(t){"use strict";t("./modules/menu"),t("./modules/modal"),t("./modules/scroller").init(),t("./modules/ie-fix").init()},{"./modules/ie-fix":2,"./modules/menu":3,"./modules/modal":4,"./modules/scroller":5}],2:[function(t,o){o.exports.init=function(){e()};var e=function(){var t=$(".Image--bleed"),o=t.parent();t.height(o.height())}},{}],3:[function(t,o){var e=(t("tappy-js"),function(){this.init()});e.prototype={$body:$("body"),$menu:$(".Menu"),$button:$(".Header-menu-button"),bodyTransitionClass:"Menu--transition",bodyActiveClass:"Menu--active",transitionDuration:150,isActive:!1},e.prototype.init=function(){this.interactions()},e.prototype.interactions=function(){var t=this;this.$button.on("tap",function(o){o.preventDefault(),t.toggle()})},e.prototype.toggle=function(){this.isActive?this.close():this.open()},e.prototype.open=function(){var t=this;this.$body.addClass(this.bodyTransitionClass),this.$body.addClass(this.bodyActiveClass),this.transitionEnd(function(){t.$body.removeClass(t.bodyTransitionClass),t.$menu.trigger("focus"),t.isActive=!0})},e.prototype.transitionEnd=function(t){return setTimeout(t,this.transitionDuration)},e.prototype.close=function(t){var o=this;this.$body.addClass(this.bodyTransitionClass),this.$body.removeClass(this.bodyActiveClass),this.transitionEnd(function(){o.$body.removeClass(o.bodyTransitionClass),o.isActive=!1,t&&(window.location.href=t)})},o.exports=new e},{"tappy-js":7}],4:[function(t){var o=(t("tappy-js"),function(t,o){this.$el=t,this.$modal=$("#"+o),this.init()});o.prototype={$body:$("body"),bodyTransitionClass:"State--modal-transition",bodyActiveClass:"State--modal-active",modalActiveClass:"Modal--active",transitionDuration:150,isActive:!1},o.prototype.init=function(){var t=this,o=[27],e=[];this.$el.on("tap",function(o){o.preventDefault(),t.toggle()}),$(document).on("keydown",function(n){if(-1!==$.inArray(n.which,o))switch(n.which){case 27:e[27]||(t.close(),e[27]=!0)}}),$(document).on("keyup",function(t){var o=t.keycode?t.keycode:t.which;e[o]=!1}),this.$modal.on("tap",function(o){$(o.target);0===$(o.target).parents("[data-modal-prevent-dismiss]").length&&t.toggle()})},o.prototype.toggle=function(){this.isActive?this.close():this.open()},o.prototype.open=function(){var t=this;this.$body.addClass(this.bodyTransitionClass),this.$body.addClass(this.bodyActiveClass),this.$modal.addClass(this.modalActiveClass),this.transitionEnd(function(){t.$body.removeClass(t.bodyTransitionClass),t.$modal.trigger("focus"),t.isActive=!0})},o.prototype.transitionEnd=function(t){return setTimeout(t,this.transitionDuration)},o.prototype.close=function(t){var o=this;this.$body.addClass(this.bodyTransitionClass),this.$body.removeClass(this.bodyActiveClass),this.$modal.removeClass(this.modalActiveClass),this.transitionEnd(function(){o.$body.removeClass(o.bodyTransitionClass),o.isActive=!1,t&&(window.location.href=t)})},$.fn.modal=function(){return this.each(function(){var t=$(this),e=t.data("modal");new o(t,e)})},$("[data-modal]").modal()},{"tappy-js":7}],5:[function(t,o){t("jquery-smooth-scroll/src/jquery.smooth-scroll");var e=$("body");o.exports.init=function(){$("a").smoothScroll({afterScroll:n.scrollComplete})},o.exports.scrollTo=function(t){$.smoothScroll({scrollTarget:t,afterScroll:n.scrollComplete})};var n={scrollComplete:function(){e.trigger("scrollComplete")}}},{"jquery-smooth-scroll/src/jquery.smooth-scroll":6}],6:[function(){!function(t){function o(t){return t.replace(/(:|\.|\/)/g,"\\$1")}var e="1.5.5",n={},i={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},s=function(o){var e=[],n=!1,i=o.dir&&"left"===o.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var o=t(this);o[i]()>0?e.push(this):(o[i](1),n=o[i]()>0,n&&e.push(this),o[i](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===o.el&&e.length>1&&(e=[e[0]]),e};t.fn.extend({scrollable:function(t){var o=s.call(this,{dir:t});return this.pushStack(o)},firstScrollable:function(t){var o=s.call(this,{el:"first",dir:t});return this.pushStack(o)},smoothScroll:function(e,n){if(e=e||{},"options"===e)return n?this.each(function(){var o=t(this),e=t.extend(o.data("ssOpts")||{},n);t(this).data("ssOpts",e)}):this.first().data("ssOpts");var i=t.extend({},t.fn.smoothScroll.defaults,e),s=t.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,r=t(this),l=t.extend({},i,r.data("ssOpts")||{}),a=i.exclude,c=l.excludeWithin,u=0,h=0,d=!0,f={},p=location.hostname===n.hostname||!n.hostname,m=l.scrollTarget||t.smoothScroll.filterPath(n.pathname)===s,y=o(n.hash);if(l.scrollTarget||p&&m&&y){for(;d&&u<a.length;)r.is(o(a[u++]))&&(d=!1);for(;d&&h<c.length;)r.closest(c[h++]).length&&(d=!1)}else d=!1;d&&(l.preventDefault&&e.preventDefault(),t.extend(f,l,{scrollTarget:l.scrollTarget||y,link:n}),t.smoothScroll(f))}),this}}),t.smoothScroll=function(o,e){if("options"===o&&"object"==typeof e)return t.extend(n,e);var i,s,r,l,a,c=0,u="offset",h="scrollTop",d={},f={};"number"==typeof o?(i=t.extend({link:null},t.fn.smoothScroll.defaults,n),r=o):(i=t.extend({link:null},t.fn.smoothScroll.defaults,o||{},n),i.scrollElement&&(u="position","static"===i.scrollElement.css("position")&&i.scrollElement.css("position","relative"))),h="left"===i.direction?"scrollLeft":h,i.scrollElement?(s=i.scrollElement,/^(?:HTML|BODY)$/.test(s[0].nodeName)||(c=s[h]())):s=t("html, body").firstScrollable(i.direction),i.beforeScroll.call(s,i),r="number"==typeof o?o:e||t(i.scrollTarget)[u]()&&t(i.scrollTarget)[u]()[i.direction]||0,d[h]=r+c+i.offset,l=i.speed,"auto"===l&&(a=d[h]-s.scrollTop(),0>a&&(a*=-1),l=a/i.autoCoefficient),f={duration:l,easing:i.easing,complete:function(){i.afterScroll.call(i.link,i)}},i.step&&(f.step=i.step),s.length?s.stop().animate(d,f):i.afterScroll.call(i.link,i)},t.smoothScroll.version=e,t.smoothScroll.filterPath=function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},t.fn.smoothScroll.defaults=i}(jQuery)},{}],7:[function(){!function(t,o){t.tapHandling=!1,t.tappy=!0;var e=function(e){return e.each(function(){function e(t){o(t.target).trigger("tap",[t,o(t.target).attr("href")])}function n(t){var o=t.originalEvent||t,e=o.touches||o.targetTouches;return e?[e[0].pageX,e[0].pageY]:null}function i(t){if(t.touches&&t.touches.length>1||t.targetTouches&&t.targetTouches.length>1)return!1;var o=n(t);c=o[0],a=o[1]}function s(t){if(!u){var o=n(t);o&&(Math.abs(a-o[1])>d||Math.abs(c-o[0])>d)&&(u=!0)}}function r(o){if(clearTimeout(l),l=setTimeout(function(){t.tapHandling=!1,u=!1},1e3),!(o.which&&o.which>1||o.shiftKey||o.altKey||o.metaKey||o.ctrlKey)){if(o.preventDefault(),u||t.tapHandling&&t.tapHandling!==o.type)return void(u=!1);t.tapHandling=o.type,e(o)}}var l,a,c,u,h=o(this),d=10;h.bind("touchstart.tappy MSPointerDown.tappy",i).bind("touchmove.tappy MSPointerMove.tappy",s).bind("touchend.tappy MSPointerUp.tappy",r).bind("click.tappy",r)})},n=function(t){return t.unbind(".tappy")};if(o.event&&o.event.special)o.event.special.tap={add:function(){e(o(this))},remove:function(){n(o(this))}};else{var i=o.fn.bind,s=o.fn.unbind;o.fn.bind=function(t){return/(^| )tap( |$)/.test(t)&&e(this),i.apply(this,arguments)},o.fn.unbind=function(t){return/(^| )tap( |$)/.test(t)&&n(this),s.apply(this,arguments)}}}(this,jQuery)},{}]},{},[1]);