"use strict";(self["webpackChunkkomga_webui"]=self["webpackChunkkomga_webui"]||[]).push([[2837],{32837:function(t,e,i){i.d(e,{A:function(){return b}});var n=i(73847),s=i(30089),o=i(21253),r=i(72710),l=i(1231),a=i(70793),c=i(92872),h=i(22369),d=i(40005),u=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(c.A,{attrs:{"max-width":"450"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[e(s.A,[e(o.ri,[t._v(t._s(t.title))]),e(o.OQ,[e(a.A,{attrs:{fluid:""}},[e(h.A,[t.body&&!t.bodyHtml?e(l.A,[t._v(t._s(t.body))]):t._e(),t.bodyHtml?e(l.A,{domProps:{innerHTML:t._s(t.bodyHtml)}}):t._e()],1),t.confirmText?e(h.A,[e(l.A,[e(r.A,{attrs:{color:t.buttonConfirmColor},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(" "+t._s(t.confirmText)+" ")]},proxy:!0}],null,!1,1982615865),model:{value:t.confirmation,callback:function(e){t.confirmation=e},expression:"confirmation"}})],1)],1):t._e()],1)],1),e(o.SL,[e(d.A),e(n.A,{attrs:{text:""},on:{click:t.dialogCancel}},[t._v(t._s(t.buttonCancel||t.$t("common.cancel")))]),t.buttonAlternate?e(n.A,{attrs:{text:"",disabled:t.confirmText&&!t.confirmation},on:{click:t.dialogAlternate}},[t._v(t._s(t.buttonAlternate)+" ")]):t._e(),e(n.A,{attrs:{color:t.buttonConfirmColor,disabled:t.confirmText&&!t.confirmation},on:{click:t.dialogConfirm}},[t._v(t._s(t.buttonConfirm)+" ")])],1)],1)],1)},m=[],v=i(85471),p=v.Ay.extend({name:"ConfirmationDialog",data:()=>({modal:!1,confirmation:!1}),props:{value:Boolean,title:{type:String,required:!0},body:{type:String,required:!1},bodyHtml:{type:String,required:!1},confirmText:{type:String,required:!1},buttonCancel:{type:String,required:!1},buttonConfirm:{type:String,required:!0},buttonConfirmColor:{type:String,default:"primary"},buttonAlternate:{type:String,required:!1}},watch:{value(t){this.modal=t},modal(t){!t&&this.dialogCancel()}},methods:{dialogCancel(){this.confirmation=!1,this.$emit("input",!1)},dialogConfirm(){this.$emit("confirm"),this.$emit("input",!1)},dialogAlternate(){this.$emit("alternate"),this.$emit("input",!1)}}}),f=p,y=i(81656),g=(0,y.A)(f,u,m,!1,null,"07d9d237",null),b=g.exports},15601:function(){},72710:function(t,e,i){i.d(e,{A:function(){return r}});i(15601);var n=i(54582),s=i(66682),o=i(49706),r=o.A.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...s.A.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick((()=>this.inputIndeterminate=t))},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n.A,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},92872:function(t,e,i){i.d(e,{A:function(){return p}});var n=i(28071),s=i(41769),o=i(28492),r=i(87086),l=i(90826),a=i(69227),c=i(22011),h=i(56809),d=i(72006),u=i(73803),m=i(69463);const v=(0,d.A)(o.A,r.A,l.A,a.A,c.A,s.A);var p=v.extend({name:"v-dialog",directives:{ClickOutside:h.A},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,u.rq)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l.A.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m.uP.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(e)))){const t=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find((t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')));e&&e.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(n.A,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:(0,m.Dg)(this.maxWidth),width:(0,m.Dg)(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},1231:function(t,e,i){i(40125);var n=i(85471),s=i(20910),o=i(69463);const r=["sm","md","lg","xl"],l=(()=>r.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),a=(()=>r.reduce(((t,e)=>(t["offset"+(0,o.Zb)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>r.reduce(((t,e)=>(t["order"+(0,o.Zb)(e)]={type:[String,Number],default:null},t)),{}))(),h={col:Object.keys(l),offset:Object.keys(a),order:Object.keys(c)};function d(t,e,i){let n=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");n+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(n+=`-${i}`,n.toLowerCase()):n.toLowerCase()}}const u=new Map;e.A=n.Ay.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...a,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:n,parent:o}){let r="";for(const s in e)r+=String(e[s]);let l=u.get(r);if(!l){let t;for(t in l=[],h)h[t].forEach((i=>{const n=e[i],s=d(t,i,n);s&&l.push(s)}));const i=l.some((t=>t.startsWith("col-")));l.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),u.set(r,l)}return t(e.tag,(0,s.Ay)(i,{class:l}),n)}})},90826:function(t,e,i){i.d(e,{A:function(){return l}});var n=i(32240),s=n.A,o=i(69463),r=i(85471),l=r.Ay.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new s({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,o.fl)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,o.d7)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[o.uP.up,o.uP.pageup],i=[o.uP.down,o.uP.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const i=e.shiftKey||e.deltaX?"x":"y",n="y"===i?e.deltaY:e.deltaX||e.deltaY;let s,o;"y"===i?(s=0===t.scrollTop,o=t.scrollTop+t.clientHeight===t.scrollHeight):(s=0===t.scrollLeft,o=t.scrollLeft+t.clientWidth===t.scrollWidth);const r=n<0,l=n>0;return!(s||!r)||(!(o||!l)||!(!s&&!o||!t.parentNode)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,o.K9)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,i=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(i,e))||!this.shouldScroll(e,t)}for(let i=0;i<e.length;i++){const n=e[i];if(n===document)return!0;if(n===document.documentElement)return!0;if(n===this.$refs.content)return!0;if(this.hasScrollbar(n))return!this.shouldScroll(n,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,o.P4)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},49706:function(t,e,i){i.d(e,{A:function(){return h}});var n=i(66682),s=i(29938),o=i(85471),r=o.Ay.extend({name:"rippleable",directives:{ripple:s.A},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),l=i(35061),a=i(72006);function c(t){t.preventDefault()}var h=(0,a.A)(n.A,r,l.A).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=n.A.options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})}}]);
//# sourceMappingURL=2837.c58ccdb8.js.map