(self["webpackChunkkomga_webui"]=self["webpackChunkkomga_webui"]||[]).push([[2080],{4291:function(e,t,n){"use strict";n.d(t,{A:function(){return h}});var r=n(73847),o=n(16684),i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("vue-read-more-smooth",{attrs:{"no-shadow":"",lines:4,open:e.open},on:{"update:open":function(t){e.open=t}},scopedSlots:e._u([{key:"more",fn:function(n){return[t(r.A,{attrs:{text:"",small:"",color:"grey darken-1"}},[e._v(" "+e._s(n.open?e.$t(e.i18nLess):e.$t(e.i18nMore))+" "),t(o.A,{attrs:{right:""}},[e._v("mdi-chevron-"+e._s(n.open?"up":"down"))])],1)]}}])},[t("div",{staticClass:"body-2",staticStyle:{"white-space":"pre-wrap"}},[e._t("default")],2)])},a=[],s=n(6841),l=n.n(s),d=n(85471),u=d.Ay.extend({name:"ReadMore",components:{VueReadMoreSmooth:l()},data:()=>({open:!1}),watch:{value(e){this.open=e},open(e){this.$emit("input",e)}},props:{value:{type:Boolean,default:!1},i18nMore:{type:String,default:"read_more.more"},i18nLess:{type:String,default:"read_more.less"}}}),c=u,f=n(81656),p=(0,f.A)(c,i,a,!1,null,"0cbc090b",null),h=p.exports},13044:function(e,t,n){"use strict";var r;n.d(t,{E:function(){return r}}),function(e){e["SERIES"]="SERIES",e["READLIST"]="READLIST",e["LIBRARY"]="LIBRARY",e["COLLECTION"]="COLLECTION"}(r||(r={}))},6841:function(e){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({2350:function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"===typeof btoa){var i=r(o),a=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function r(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return"/*# "+n+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r})).join("")},t.i=function(e,n){"string"===typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"===typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"===typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},"499e":function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],l=i[2],d=i[3],u={id:e+":"+o,css:s,media:l,sourceMap:d};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}n.r(t),n.d(t,"default",(function(){return h}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,d=!1,u=function(){},c=null,f="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,o){d=n,c=o||{};var a=r(e,t);return m(a),function(t){for(var n=[],o=0;o<a.length;o++){var s=a[o],l=i[s.id];l.refs--,n.push(l)}t?(a=r(e,t),m(a)):a=[];for(o=0;o<n.length;o++){l=n[o];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete i[l.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(v(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(d)return u;r.parentNode.removeChild(r)}if(p){var o=l++;r=s||(s=g()),t=y.bind(null,r,o,!1),n=y.bind(null,r,o,!0)}else r=g(),t=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function x(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),c.ssrId&&e.setAttribute(f,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},"4d93":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".text-overflow-content[data-v-72c03b2a]{--nlines:3;--lineHeight:1.5;max-height:calc(var(--nlines)*var(--lineHeight));overflow:hidden;-webkit-transition:max-height .3s ease;transition:max-height .3s ease}.text-overflow[data-v-72c03b2a]{position:relative}.no-overflow .text-overflow-content[data-v-72c03b2a]{max-height:100%;overflow:visible}.no-overflow .button-read-more[data-v-72c03b2a],.no-overflow .hide-text[data-v-72c03b2a]{display:none}.read-more-button[data-v-72c03b2a]{cursor:pointer;display:block;position:relative;border-top:1px solid #dbdbdb;height:.1em;margin:2em auto;width:95%;text-align:center}.read-more-button span[data-v-72c03b2a]{background:#fff;color:#b5b5b5;display:inline-block;font-size:.75em;padding:.4em .8em;-webkit-transform:translateY(-1.1em);transform:translateY(-1.1em);text-align:center}.hide-text[data-v-72c03b2a]{--nlines:6;--lineHeight:1.5;background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),color-stop(90%,#fff),to(#fff));background-image:linear-gradient(180deg,hsla(0,0%,100%,0) 0,#fff 90%,#fff);width:100%;height:calc(var(--nlines)*var(--lineHeight));position:absolute;-webkit-transform:translateY(calc(var(--nlines)*-1*var(--lineHeight)));transform:translateY(calc(var(--nlines)*-1*var(--lineHeight)))}.hide-text[data-v-72c03b2a],.read-more-button[data-v-72c03b2a]{-webkit-transition:opacity .3s ease,margin .3s ease;transition:opacity .3s ease,margin .3s ease;opacity:1}.expanded .hide-text[data-v-72c03b2a],.expanded .read-more-button[data-v-72c03b2a]:not(.show-less){opacity:0;margin-top:0;margin-bottom:0;pointer-events:none}",""])},6099:function(e,t,n){var r=n("4d93");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("e6468484",r,!0,{sourceMap:!1,shadowMode:!1})},"6b0e":function(e,t,n){"use strict";var r=n("6099"),o=n.n(r);o.a},f6fd:function(e,t){(function(e){var t="currentScript",n=e.getElementsByTagName("script");t in e||Object.defineProperty(e,t,{get:function(){try{throw new Error}catch(r){var e,t=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(e in n)if(n[e].src==t||"interactive"==n[e].readyState)return n[e];return null}}})})(document)},fb15:function(e,t,n){"use strict";var r;(n.r(t),"undefined"!==typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-overflow",class:{expanded:e.expanded,"no-overflow":e.inMaxRange}},[n("div",{ref:"to",staticClass:"text-overflow-content"},[e._t("default")],2),e.noShadow?e._e():n("div",{ref:"ht",staticClass:"hide-text"}),e.noButton?e._e():n("div",{staticClass:"button-read-more",on:{click:e.toggle}},[e._t("more",[n("div",{staticClass:"read-more-button",class:{"show-less":!e.noLess}},[n("span",[e._v(e._s(e.expanded?e.textLess:e.text))])])],{open:e.expanded})],2)])},i=[],a={name:"vue-read-more-smooth",props:{lines:{type:Number,default:3},gLines:{type:Number,default:null},maxLines:{type:Number,default:null},text:{type:String,default:"Read more"},textLess:{type:String,default:"Read less"},noLess:{type:Boolean,default:!1},openByDefault:{type:Boolean,default:!1},open:{type:Boolean,default:null},noButton:{type:Boolean,default:!1},noShadow:{type:Boolean,default:!1}},data(){return{readmore:!1,expanded:!1,inMaxRange:!1,localMaxLines:1}},watch:{open(e){e!==this.expanded&&this.toggle(!e)}},created(){this.lines&&!this.maxLines?this.localMaxLines=this.lines+1:this.localMaxLines=this.maxLines-1,!0===this.open&&(this.expanded=!0)},mounted(){const e=this.getLineHeight(this.$refs.to);this.lines&&this.$refs.to.style.setProperty("--nlines",this.lines);let t=2;this.gLines?t=this.gLines:this.lines>12?t=4:this.lines>6&&(t=3),this.$refs.ht&&this.$refs.ht.style.setProperty("--nlines",t),!0===this.open&&this.$refs.to.style.setProperty("max-height","100%"),setTimeout((()=>{this.readmore=this.$refs.to.offsetHeight<this.$refs.to.scrollHeight,this.$refs.to.scrollHeight<=this.localMaxLines*e&&(this.inMaxRange=!0),this.$refs.to.style.setProperty("--lineHeight",e+"px"),this.$refs.ht&&this.$refs.ht.style.setProperty("--lineHeight",e+"px"),!0===this.open&&this.$refs.to.style.setProperty("max-height",this.$refs.to.scrollHeight+"px")}))},methods:{toggle(e){const t="boolean"===typeof e?e:this.expanded;t?this.noLess||(this.$refs.to.style.removeProperty("max-height"),this.expanded=!1,this.$emit("update:open",!1)):(this.expanded=!0,this.$emit("update:open",!0),this.$refs.to.style.setProperty("max-height",this.$refs.to.scrollHeight+"px"))},getLineHeight(e){let t=document.createElement(e.children[0].nodeName);const n=getComputedStyle(e.children[0]);t.setAttribute("style","position:absolute;left:-999em;margin:0px;padding:0px;font-family:"+n.fontFamily+";font-size:"+n.fontSize),t.innerHTML="test",t=document.body.appendChild(t);const r=t.clientHeight;return t.parentNode.removeChild(t),r}}},s=a;n("6b0e");function l(e,t,n,r,o,i,a,s){var l,d="function"===typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(d.functional){d._injectStyles=l;var u=d.render;d.render=function(e,t){return l.call(t),u(e,t)}}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l]}return{exports:e,options:d}}var d=l(s,o,i,!1,null,"72c03b2a",null),u=d.exports;t["default"]=u}})["default"]},1231:function(e,t,n){"use strict";n(40125);var r=n(85471),o=n(20910),i=n(69463);const a=["sm","md","lg","xl"],s=(()=>a.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),l=(()=>a.reduce(((e,t)=>(e["offset"+(0,i.Zb)(t)]={type:[String,Number],default:null},e)),{}))(),d=(()=>a.reduce(((e,t)=>(e["order"+(0,i.Zb)(t)]={type:[String,Number],default:null},e)),{}))(),u={col:Object.keys(s),offset:Object.keys(l),order:Object.keys(d)};function c(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+=`-${n}`}return"col"!==e||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const f=new Map;t.A=r.Ay.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:r,parent:i}){let a="";for(const o in t)a+=String(t[o]);let s=f.get(a);if(!s){let e;for(e in s=[],u)u[e].forEach((n=>{const r=t[n],o=c(e,n,r);o&&s.push(o)}));const n=s.some((e=>e.startsWith("col-")));s.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),f.set(a,s)}return e(t.tag,(0,o.Ay)(n,{class:s}),r)}})}}]);
//# sourceMappingURL=2080.38e17e7e.js.map