"use strict";(self["webpackChunkkomga_webui"]=self["webpackChunkkomga_webui"]||[]).push([[190],{14717:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=i(13812),n=i(22369),r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"pa-6"},[e(n.A,{attrs:{align:"center",justify:"center"}},[e(s.A,{attrs:{src:i(63935),"max-width":t.logoWidth}})],1)],1)},a=[],o=(i(28743),i(85471)),c=o.Ay.extend({name:"StartupView",computed:{logoWidth(){let t=100;switch(this.$vuetify.breakpoint.name){case"xs":t=100;case"sm":case"md":t=200;case"lg":case"xl":default:t=300}return t}},async mounted(){try{if(this.$route.query.xAuthToken)try{await this.$komgaLogin.setCookie(this.$route.query.xAuthToken.toString())}catch(t){this.$debug(t.message)}await this.$store.dispatch("getMe"),await this.$store.dispatch("getLibraries"),this.$router.back()}catch(t){this.$router.push({name:"login",query:{redirect:this.$route.query.redirect}})}}}),l=c,h=i(81656),d=(0,h.A)(l,r,a,!1,null,"8932c766",null),u=d.exports},40125:function(){},22369:function(t,e,i){i(40125);var s=i(85471),n=i(20910),r=i(69463);const a=["sm","md","lg","xl"],o=["start","end","center"];function c(t,e){return a.reduce(((i,s)=>(i[t+(0,r.Zb)(s)]=e(),i)),{})}const l=t=>[...o,"baseline","stretch"].includes(t),h=c("align",(()=>({type:String,default:null,validator:l}))),d=t=>[...o,"space-between","space-around"].includes(t),u=c("justify",(()=>({type:String,default:null,validator:d}))),g=t=>[...o,"space-between","space-around","stretch"].includes(t),m=c("alignContent",(()=>({type:String,default:null,validator:g}))),p={align:Object.keys(h),justify:Object.keys(u),alignContent:Object.keys(m)},f={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,i){let s=f[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const y=new Map;e.A=s.Ay.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...h,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:g},...m},render(t,{props:e,data:i,children:s}){let r="";for(const n in e)r+=String(e[n]);let a=y.get(r);if(!a){let t;for(t in a=[],p)p[t].forEach((i=>{const s=e[i],n=v(t,i,s);n&&a.push(n)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(r,a)}return t(e.tag,(0,n.Ay)(i,{staticClass:"row",class:a}),s)}})},13812:function(t,e,i){i.d(e,{A:function(){return g}});var s=i(66530),n=i(64724),r=i(72006),a=i(69463),o=(0,r.A)(n.A).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,a.$c)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=i(81582),h=i(20910),d=i(73803);const u="undefined"!==typeof window&&"IntersectionObserver"in window;var g=(0,r.A)(c,l.A).extend({name:"v-img",directives:{intersect:s.A},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.OP)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:n}=t;s||n?(this.naturalWidth=n,this.calculatedAspectRatio=n/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,a.$c)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=c.options.render.call(this,t),i=(0,h.Ay)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},66530:function(t,e,i){function s(t,e,i){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const s=e.modifiers||{},r=e.value,{handler:a,options:o}="object"===typeof r?r:{handler:r,options:{}},c=new IntersectionObserver(((r=[],o)=>{var c;const l=null===(c=t._observe)||void 0===c?void 0:c[i.context._uid];if(!l)return;const h=r.some((t=>t.isIntersecting));!a||s.quiet&&!l.init||s.once&&!h&&!l.init||a(r,o,h),h&&s.once?n(t,e,i):l.init=!0}),o);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:c},c.observe(t)}function n(t,e,i){var s;const n=null===(s=t._observe)||void 0===s?void 0:s[i.context._uid];n&&(n.observer.unobserve(t),delete t._observe[i.context._uid])}const r={inserted:s,unbind:n};e.A=r},64724:function(t,e,i){var s=i(69463),n=i(85471);e.A=n.Ay.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.Dg)(this.height),i=(0,s.Dg)(this.minHeight),n=(0,s.Dg)(this.minWidth),r=(0,s.Dg)(this.maxHeight),a=(0,s.Dg)(this.maxWidth),o=(0,s.Dg)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),r&&(t.maxHeight=r),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},20910:function(t,e,i){i.d(e,{Ay:function(){return a},Zq:function(){return o},wf:function(){return l},zP:function(){return c}});var s=i(69463);const n={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function r(t){const e={};for(const i of t.split(n.styleList)){let[t,r]=i.split(n.styleProp);t=t.trim(),t&&("string"===typeof r&&(r=r.trim()),e[(0,s.PT)(t)]=r)}return e}function a(){const t={};let e,i=arguments.length;while(i--)for(e of Object.keys(arguments[i]))switch(e){case"class":case"directives":arguments[i][e]&&(t[e]=c(t[e],arguments[i][e]));break;case"style":arguments[i][e]&&(t[e]=o(t[e],arguments[i][e]));break;case"staticClass":if(!arguments[i][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[i][e].trim();break;case"on":case"nativeOn":arguments[i][e]&&(t[e]=l(t[e],arguments[i][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][e])break;t[e]||(t[e]={}),t[e]={...arguments[i][e],...t[e]};break;default:t[e]||(t[e]=arguments[i][e])}return t}function o(t,e){return t?e?(t=(0,s.BN)("string"===typeof t?r(t):t),t.concat("string"===typeof e?r(e):e)):t:e}function c(t,e){return e?t&&t?(0,s.BN)(t).concat(e):e:t}function l(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let i=2;i--;){const s=t[i];for(const t in s)s[t]&&(e[t]?e[t]=[].concat(s[t],e[t]):e[t]=s[t])}return e}},63935:function(t,e,i){t.exports=i.p+"img/logo.5a9779c6.svg"}}]);
//# sourceMappingURL=startup.4d5035fd.js.map