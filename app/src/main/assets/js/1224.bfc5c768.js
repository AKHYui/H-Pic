"use strict";(self["webpackChunkkomga_webui"]=self["webpackChunkkomga_webui"]||[]).push([[1224],{1324:function(t,e,i){i.d(e,{A:function(){return d}});var s=i(3224),n=i(16684),r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-center"},[e(s.A,{attrs:{color:"contrast-1",size:t.size}},[e("div",[""!==t.icon?e(n.A,{attrs:{color:t.iconColor,size:t.iconSize}},[t._v(t._s(t.icon)+" ")]):t._e(),e("h1",{staticClass:"text-h5"},[t._v(t._s(t.title))]),e("p",{staticClass:"text-body-1"},[t._v(t._s(t.subTitle))]),t._t("default")],2)])],1)},a=[],o=i(85471),l=o.Ay.extend({name:"EmptyState",props:{title:String,subTitle:String,icon:String,iconColor:String,iconSize:{type:[Number,String],default:140},size:{type:[Number,String],default:400}}}),c=l,h=i(81656),u=(0,h.A)(c,r,a,!1,null,"64f4a2b5",null),d=u.exports},24632:function(t,e,i){i.d(e,{A:function(){return m}});var s=i(73847),n=i(19292),r=i(16684),a=i(13812),o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(n.A,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.elements,options:t.options,"server-items-length":t.totalElements,loading:t.loading,"footer-props":{itemsPerPageOptions:[10,20,50]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.url",fn:function({item:i}){return[e("router-link",{attrs:{to:{name:"browse-book",params:{bookId:i.bookId}}}},[t._v(t._s(i.url))])]}},{key:"item.bookId",fn:function({item:i}){return[e(a.A,{attrs:{contain:"",height:"200",src:t.bookPageThumbnailUrl(i.bookId,i.pageNumber)}})]}},{key:"item.delete",fn:function({item:i}){return[e(s.A,{attrs:{icon:"",color:"error"},on:{click:function(e){return t.deleteMatch(i)}}},[e(r.A,[t._v("mdi-trash-can-outline")])],1)]}},{key:"footer.prepend",fn:function(){return[e(s.A,{attrs:{icon:""},on:{click:function(e){return t.loadData(t.hash)}}},[e(r.A,[t._v("mdi-refresh")])],1)]},proxy:!0}])})},l=[],c=(i(28743),i(85471)),h=i(33513),u=c.Ay.extend({name:"PageHashMatchesTable",props:{hash:{type:Object}},data(){return{elements:[],totalElements:0,loading:!0,options:{},bookPageThumbnailUrl:h.oG}},watch:{options:{handler(){this.loadData(this.hash)},deep:!0},hash(){this.options.page=1,this.options.sortBy=[],this.options.sortDesc=[],this.elements=[],this.totalElements=0}},computed:{headers(){return[{text:this.$t("common.url").toString(),value:"url"},{text:this.$t("common.filename").toString(),value:"fileName"},{text:this.$t("common.page_number").toString(),value:"pageNumber"},{text:this.$t("common.page").toString(),value:"bookId"},{text:this.$t("menu.delete").toString(),value:"delete"}]}},methods:{async loadData(t){this.loading=!0;const{sortBy:e,sortDesc:i,page:s,itemsPerPage:n}=this.options,r={page:s-1,size:n,sort:[]};for(let o=0;o<e.length;o++)r.sort.push(`${e[o]},${i[o]?"desc":"asc"}`);const a=await this.$komgaPageHashes.getPageHashMatches(t,r);this.totalElements=a.totalElements,this.elements=a.content,this.loading=!1},async deleteMatch(t){await this.$komgaPageHashes.deleteSingleMatch(this.hash,t)}}}),d=u,p=i(81656),g=(0,p.A)(d,o,l,!1,null,null,null),m=g.exports},26949:function(t,e,i){i.d(e,{W:function(){return k},K:function(){return w}});
/**
 * filesize
 *
 * @copyright 2023 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 10.0.12
 */
const s="array",n="bit",r="bits",a="byte",o="bytes",l="",c="exponent",h="function",u="iec",d="Invalid number",p="Invalid rounding method",g="jedec",m="object",v=".",f="round",b="s",y="kbit",_="kB",S=" ",A="string",$="0",C={symbol:{iec:{bits:["bit","Kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["bit","Kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},fullform:{iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]}};function x(t,{bits:e=!1,pad:i=!1,base:x=-1,round:B=2,locale:k=l,localeOptions:E={},separator:w=l,spacer:I=S,symbols:L={},standard:z=l,output:N=A,fullform:M=!1,fullforms:P=[],exponent:T=-1,roundingMethod:R=f,precision:j=0}={}){let O=T,W=Number(t),D=[],G=0,H=l;-1===x&&0===z.length?(x=10,z=g):-1===x&&z.length>0?(z=z===u?u:g,x=z===u?2:10):(x=2===x?2:10,z=10===x||z===g?g:u);const F=10===x?1e3:1024,U=!0===M,Z=W<0,K=Math[R];if("bigint"!==typeof t&&isNaN(t))throw new TypeError(d);if(typeof K!==h)throw new TypeError(p);if(Z&&(W=-W),(-1===O||isNaN(O))&&(O=Math.floor(Math.log(W)/Math.log(F)),O<0&&(O=0)),O>8&&(j>0&&(j+=8-O),O=8),N===c)return O;if(0===W)D[0]=0,H=D[1]=C.symbol[z][e?r:o][O];else{G=W/(2===x?Math.pow(2,10*O):Math.pow(1e3,O)),e&&(G*=8,G>=F&&O<8&&(G/=F,O++));const t=Math.pow(10,O>0?B:0);D[0]=K(G*t)/t,D[0]===F&&O<8&&-1===T&&(D[0]=1,O++),H=D[1]=10===x&&1===O?e?y:_:C.symbol[z][e?r:o][O]}if(Z&&(D[0]=-D[0]),j>0&&(D[0]=D[0].toPrecision(j)),D[1]=L[D[1]]||D[1],!0===k?D[0]=D[0].toLocaleString():k.length>0?D[0]=D[0].toLocaleString(k,E):w.length>0&&(D[0]=D[0].toString().replace(v,w)),i&&!1===Number.isInteger(D[0])&&B>0){const t=w||v,e=D[0].toString().split(t),i=e[1]||l,s=i.length,n=B-s;D[0]=`${e[0]}${t}${i.padEnd(s+n,$)}`}return U&&(D[1]=P[O]?P[O]:C.fullform[z][O]+(e?n:a)+(1===D[0]?l:b)),N===s?D:N===m?{value:D[0],symbol:D[1],exponent:O,unit:H}:D.join(I)}function B({bits:t=!1,pad:e=!1,base:i=-1,round:s=2,locale:n=l,localeOptions:r={},separator:a=l,spacer:o=S,symbols:c={},standard:h=l,output:u=A,fullform:d=!1,fullforms:p=[],exponent:g=-1,roundingMethod:m=f,precision:v=0}={}){return l=>x(l,{bits:t,pad:e,base:i,round:s,locale:n,localeOptions:r,separator:a,spacer:o,symbols:c,standard:h,output:u,fullform:d,fullforms:p,exponent:g,roundingMethod:m,precision:v})}async function k(t,e=t,i="image/jpeg",s={}){const n=await fetch(t,s),r=await n.blob();return new File([r],e,{type:r.type||i})}const E=B({round:1});function w(t){if(t)return E(t)}},80312:function(t,e,i){var s;i.d(e,{s:function(){return s}}),function(t){t["DELETE_AUTO"]="DELETE_AUTO",t["DELETE_MANUAL"]="DELETE_MANUAL",t["IGNORE"]="IGNORE"}(s||(s={}))},56001:function(){},90623:function(t,e,i){i.d(e,{A:function(){return u}});var s=i(37858),n=i(39945),r=i(54582),a=i(38937),o=i(81582),l=i(7038),c=i(72006),h=i(73803),u=(0,c.A)(s.A,a.A,l.A).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(n.A,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(r.A,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(r.A,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...s.A.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||o.A.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,h.q4)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},30089:function(t,e,i){i(56001);var s=i(37858),n=i(78501),r=i(22235),a=i(72006);e.A=(0,a.A)(n.A,r.A,s.A).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...r.A.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.A.options.computed.classes.call(this)}},styles(){const t={...s.A.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=n.A.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},21253:function(t,e,i){i.d(e,{OQ:function(){return o},SL:function(){return r},ZR:function(){return a},ri:function(){return l}});var s=i(30089),n=i(69463);const r=(0,n.Gn)("v-card__actions"),a=(0,n.Gn)("v-card__subtitle"),o=(0,n.Gn)("v-card__text"),l=(0,n.Gn)("v-card__title");s.A},22369:function(t,e,i){i(40125);var s=i(85471),n=i(20910),r=i(69463);const a=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return a.reduce(((i,s)=>(i[t+(0,r.Zb)(s)]=e(),i)),{})}const c=t=>[...o,"baseline","stretch"].includes(t),h=l("align",(()=>({type:String,default:null,validator:c}))),u=t=>[...o,"space-between","space-around"].includes(t),d=l("justify",(()=>({type:String,default:null,validator:u}))),p=t=>[...o,"space-between","space-around","stretch"].includes(t),g=l("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(h),justify:Object.keys(d),alignContent:Object.keys(g)},v={align:"align",justify:"justify",alignContent:"align-content"};function f(t,e,i){let s=v[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const b=new Map;e.A=s.Ay.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...h,justify:{type:String,default:null,validator:u},...d,alignContent:{type:String,default:null,validator:p},...g},render(t,{props:e,data:i,children:s}){let r="";for(const n in e)r+=String(e[n]);let a=b.get(r);if(!a){let t;for(t in a=[],m)m[t].forEach((i=>{const s=e[i],n=f(t,i,s);n&&a.push(n)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(r,a)}return t(e.tag,(0,n.Ay)(i,{staticClass:"row",class:a}),s)}})},40005:function(t,e,i){i(158);var s=i(69463);e.A=(0,s.Gn)("spacer","div","v-spacer")},13812:function(t,e,i){i.d(e,{A:function(){return p}});var s=i(66530),n=i(64724),r=i(72006),a=i(69463),o=(0,r.A)(n.A).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,a.$c)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=o,c=i(81582),h=i(20910),u=i(73803);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var p=(0,r.A)(l,c.A).extend({name:"v-img",directives:{intersect:s.A},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!d||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,u.OP)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:n}=t;s||n?(this.naturalWidth=n,this.calculatedAspectRatio=n/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,a.$c)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=l.options.render.call(this,t),i=(0,h.Ay)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},32240:function(t,e,i){i.d(e,{A:function(){return o}});var s=i(78956),n=i(81582),r=i(38937),a=i(72006),o=(0,a.A)(s.A,n.A,r.A).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})},6231:function(t,e,i){i.d(e,{A:function(){return c}});var s=i(54582),n=i(8177),r=i(78956),a=i(49274),o=i(81582),l=i(72006),c=(0,l.A)(r.A,(0,a.A)({onVisible:["init"]}),o.A).extend({name:"v-pagination",directives:{Resize:n.A},props:{circle:Boolean,disabled:Boolean,navigationColor:String,navigationTextColor:String,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const i=e%2===0?1:0,s=Math.floor(e/2),n=this.length-s+1+i;if(this.value>s&&this.value<n){const t=1,e=this.length,n=this.value-s+2,r=this.value+s-2-i,a=n-1===t+1?2:"...",o=r+1===e-1?r+1:"...";return[1,a,...this.range(n,r),o,this.length]}if(this.value===s){const t=this.value+s-1-i;return[...this.range(1,t),"...",this.length]}if(this.value===n){const t=this.value-s+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,s),"...",...this.range(n,this.length)]}},watch:{value(){this.init()}},beforeMount(){this.init()},methods:{init(){this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((()=>this.selected=this.value),100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const i=[];t=t>0?t:1;for(let s=t;s<=e;s++)i.push(s);return i},genIcon(t,e,i,n,r){return t("li",[t("button",this.setBackgroundColor(this.navigationColor,{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":r},on:i?{}:{click:n}}),[t(s.A,{props:{color:this.navigationTextColor}},[e])])])},genItem(t,e){const i=e===this.value&&(this.color||"primary"),s=e===this.value,n=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(n,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map(((e,i)=>t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)])))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},7038:function(t,e,i){var s=i(85471);e.A=s.Ay.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);
//# sourceMappingURL=1224.bfc5c768.js.map