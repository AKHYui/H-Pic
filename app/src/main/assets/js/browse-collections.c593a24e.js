"use strict";(self["webpackChunkkomga_webui"]=self["webpackChunkkomga_webui"]||[]).push([[1981],{4395:function(t,e,i){i.d(e,{A:function(){return f}});var s=i(73847),n=i(16684),a=i(18748),o=i(94026),l=i(5291),r=i(69791),c=i(30376),h=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(c.A,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e(s.A,t._g({attrs:{icon:""}},i),[e(n.A,[t._v("mdi-view-grid-plus")])],1)]}}])},[e(a.A,{attrs:{dark:t.dark}},[e(l.A,{model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},t._l(t.items,(function(i,s){return e(o.A,{key:s,on:{click:function(e){return t.setPageSize(i)}}},[e(r.UZ,[t._v(t._s(i))])],1)})),1)],1)],1)},u=[],d=i(85471),p=d.Ay.extend({name:"PageSizeSelect",data:()=>({selection:0}),props:{items:{type:Array,default:()=>[20,50,100,200,500]},value:{type:Number,required:!0},dark:{type:Boolean,default:!1}},watch:{value:{handler(t){this.selection=this.items.findIndex((e=>e===t))},immediate:!0}},methods:{setPageSize(t){this.$emit("input",t)}}}),m=p,v=i(81656),g=(0,v.A)(m,h,u,!1,null,"57c54c90",null),f=g.exports},78892:function(t,e,i){i.d(e,{A:function(){return f}});var s=i(73847),n=i(16684),a=i(80700),o=i(40005),l=i(26702),r=i(84551),c=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(a.Yt,{attrs:{"hide-on-leave":""}},[t.value.length>0?e("toolbar-sticky",{attrs:{elevation:5,color:"base"}},[e(s.A,{attrs:{icon:""},on:{click:t.unselectAll}},[e(r.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e(n.A,t._g({},i),[t._v("mdi-close")])]}}],null,!1,4258196469)},[e("span",[t._v(t._s(t.$t("menu.deselect_all")))])])],1),t.showSelectAll?e(s.A,{attrs:{icon:""},on:{click:t.selectAll}},[e(r.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e(n.A,t._g({},i),[t._v("mdi-select-all")])]}}],null,!1,848294631)},[e("span",[t._v(t._s(t.$t("menu.select_all")))])])],1):t._e(),e(l.sw,{staticClass:"mx-2"},[e("span",[t._v(t._s(t.$tc("common.n_selected",t.value.length)))])]),e(o.A),"books"===t.kind||"series"===t.kind?e(s.A,{attrs:{icon:""},on:{click:t.markRead}},[e(r.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e(n.A,t._g({},i),[t._v("mdi-bookmark-check")])]}}],null,!1,2944767412)},[e("span",[t._v(t._s(t.$t("menu.mark_read")))])])],1):t._e(),"books"===t.kind||"series"===t.kind?e(s.A,{attrs:{icon:""},on:{click:t.markUnread}},[e(r.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e(n.A,t._g({},i),[t._v("mdi-bookmark-remove")])]}}],null,!1,2589859700)},[e("span",[t._v(t._s(t.$t("menu.mark_unread")))])])],1):t._e(),t.isAdmin&&("series"===t.kind||"books"===t.kind&&t.oneshots)?e(s.A,{attrs:{icon:""},on:{click:t.addToCollection}},[e(r.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e(n.A,t._g({},i),[t._v("mdi-playlist-plus")])]}}],null,!1,855572914)},[e("span",[t._v(t._s(t.$t("menu.add_to_collection")))])])],1):t._e(),!t.isAdmin||"books"!==t.kind&&"series"!==t.kind?t._e():e(s.A,{attrs:{icon:""},on:{click:t.addToReadList}},[e(r.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e(n.A,t._g({},i),[t._v("mdi-book-plus-multiple")])]}}],null,!1,3391873344)},[e("span",[t._v(t._s(t.$t("menu.add_to_readlist")))])])],1),t.isAdmin&&"books"===t.kind?e(s.A,{attrs:{icon:""},on:{click:t.bulkEdit}},[e(r.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e(n.A,t._g({},i),[t._v("mdi-table-edit")])]}}],null,!1,2794987148)},[e("span",[t._v(t._s(t.$t("menu.bulk_edit_metadata")))])])],1):t._e(),!t.isAdmin||"books"!==t.kind&&"series"!==t.kind?t._e():e(s.A,{attrs:{icon:""},on:{click:t.edit}},[e(r.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e(n.A,t._g({},i),[t._v("mdi-pencil")])]}}],null,!1,1783139550)},[e("span",[t._v(t._s(t.$t("menu.edit_metadata")))])])],1),t.isAdmin?e(s.A,{attrs:{icon:""},on:{click:t.doDelete}},[e(r.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e(n.A,t._g({},i),[t._v("mdi-delete")])]}}],null,!1,2967236346)},[e("span",[t._v(t._s(t.$t("menu.delete")))])])],1):t._e()],1):t._e()],1)},h=[],u=i(85471),d=i(72448),p=u.Ay.extend({name:"MultiSelectBar",components:{ToolbarSticky:d.A},data:()=>({}),props:{value:{type:Array,required:!0},kind:{type:String,required:!0},oneshots:{type:Boolean,default:!1},showSelectAll:{type:Boolean,default:!1}},computed:{isAdmin(){return this.$store.getters.meAdmin}},methods:{unselectAll(){this.$emit("unselect-all")},selectAll(){this.$emit("select-all")},markRead(){this.$emit("mark-read")},markUnread(){this.$emit("mark-unread")},addToCollection(){this.$emit("add-to-collection")},addToReadList(){this.$emit("add-to-readlist")},edit(){this.$emit("edit")},bulkEdit(){this.$emit("bulk-edit")},doDelete(){this.$emit("delete")}}}),m=p,v=i(81656),g=(0,v.A)(m,c,h,!1,null,null,null),f=g.exports},88297:function(t,e,i){i.d(e,{A:function(){return f}});var s=i(73847),n=i(16684),a=i(18748),o=i(94026),l=i(69791),r=i(30376),c=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[t.isAdmin?e(r.A,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:i}){return[e(s.A,t._g({attrs:{icon:""},on:{click:function(t){t.preventDefault()}}},i),[e(n.A,[t._v("mdi-dots-vertical")])],1)]}}],null,!1,863602117)},[e(a.A,{attrs:{dense:""}},[e(o.A,{on:{click:function(e){return t.scan(!1)}}},[e(l.UZ,[t._v(t._s(t.$t("server.server_management.button_scan_libraries")))])],1),e(o.A,{staticClass:"list-warning",on:{click:function(e){return t.scan(!0)}}},[e(l.UZ,[t._v(t._s(t.$t("server.server_management.button_scan_libraries_deep")))])],1),e(o.A,{on:{click:function(e){t.confirmEmptyTrash=!0}}},[e(l.UZ,[t._v(t._s(t.$t("server.server_management.button_empty_trash")))])],1)],1)],1):t._e(),e("confirmation-dialog",{attrs:{title:t.$t("dialog.empty_trash.title"),body:t.$t("dialog.empty_trash.body"),"button-confirm":t.$t("dialog.empty_trash.button_confirm")},on:{confirm:t.emptyTrash},model:{value:t.confirmEmptyTrash,callback:function(e){t.confirmEmptyTrash=e},expression:"confirmEmptyTrash"}})],1)},h=[],u=i(85471),d=i(32837),p=u.Ay.extend({name:"LibrariesActionsMenu",components:{ConfirmationDialog:d.A},data:()=>({confirmEmptyTrash:!1}),computed:{isAdmin(){return this.$store.getters.meAdmin}},methods:{scan(t){this.$store.state.komgaLibraries.libraries.forEach((e=>{this.$komgaLibraries.scanLibrary(e,t)}))},emptyTrash(){this.$store.state.komgaLibraries.libraries.forEach((t=>{this.$komgaLibraries.emptyTrash(t)}))}}}),m=p,v=i(81656),g=(0,v.A)(m,c,h,!1,null,"ca5eba4c",null),f=g.exports},79447:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var s=i(15137),n=i(70793),a=i(6231),o=i(40005),l=i(26702),r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{style:t.$vuetify.breakpoint.xs?"margin-bottom: 56px":void 0},[0===t.selectedCollections.length?e("toolbar-sticky",[t.library?e("library-actions-menu",{attrs:{library:t.library}}):e("libraries-actions-menu"),e(l.sw,[e("span",[t._v(t._s(t.library?t.library.name:t.$t("common.all_libraries")))]),t.totalElements?e(s.A,{staticClass:"mx-4",attrs:{label:""}},[e("span",{staticStyle:{"font-size":"1.1rem"}},[t._v(t._s(t.totalElements))])]):t._e()],1),e(o.A),t.$vuetify.breakpoint.mdAndUp?e("library-navigation",{attrs:{libraryId:t.libraryId}}):t._e(),e(o.A),e("page-size-select",{model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}})],1):t._e(),e("multi-select-bar",{attrs:{kind:"collections","show-select-all":""},on:{"unselect-all":function(e){t.selectedCollections=[]},"select-all":function(e){t.selectedCollections=t.collections},delete:t.deleteCollections},model:{value:t.selectedCollections,callback:function(e){t.selectedCollections=e},expression:"selectedCollections"}}),t.$vuetify.breakpoint.smAndDown?e("library-navigation",{attrs:{libraryId:t.libraryId,"bottom-navigation":""}}):t._e(),e(n.A,{attrs:{fluid:""}},[t.totalPages>1?e(a.A,{attrs:{"total-visible":t.paginationVisible,length:t.totalPages},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e(),e("item-browser",{attrs:{items:t.collections,selectable:t.isAdmin,selected:t.selectedCollections,"edit-function":t.isAdmin?t.editSingleCollection:void 0},on:{"update:selected":function(e){t.selectedCollections=e}}}),t.totalPages>1?e(a.A,{attrs:{"total-visible":t.paginationVisible,length:t.totalPages},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}):t._e()],1)],1)},c=[],h=(i(62554),i(28743),i(72448)),u=i(10734),d=i(57531),p=i(60693),m=i(4395),v=i(52846),g=i(85471),f=i(67036),b=i(78892),y=i(88297),A=g.Ay.extend({name:"BrowseCollections",components:{LibrariesActionsMenu:y.A,LibraryActionsMenu:p.A,ToolbarSticky:h.A,LibraryNavigation:d.A,ItemBrowser:u.A,PageSizeSelect:m.A,MultiSelectBar:b.A},data:()=>({library:void 0,collections:[],selectedCollections:[],page:1,pageSize:20,totalPages:1,totalElements:null,pageUnwatch:null,pageSizeUnwatch:null}),props:{libraryId:{type:String,default:f._}},created(){this.$eventHub.$on(v.Ep,this.reloadCollections),this.$eventHub.$on(v.Gx,this.reloadCollections),this.$eventHub.$on(v.HS,this.reloadCollections),this.$eventHub.$on(v.lD,this.reloadLibrary)},beforeDestroy(){this.$eventHub.$off(v.Ep,this.reloadCollections),this.$eventHub.$off(v.Gx,this.reloadCollections),this.$eventHub.$off(v.HS,this.reloadCollections),this.$eventHub.$off(v.lD,this.reloadLibrary)},mounted(){this.$store.commit("setLibraryRoute",{id:this.libraryId,route:f.k.COLLECTIONS}),this.pageSize=this.$store.state.persistedState.browsingPageSize||this.pageSize,this.$route.query.page&&(this.page=Number(this.$route.query.page)),this.$route.query.pageSize&&(this.pageSize=Number(this.$route.query.pageSize)),this.loadLibrary(this.libraryId),this.setWatches()},beforeRouteUpdate(t,e,i){t.params.libraryId!==e.params.libraryId&&(this.page=1,this.totalPages=1,this.totalElements=null,this.collections=[],this.loadLibrary(t.params.libraryId)),i()},computed:{isAdmin(){return this.$store.getters.meAdmin},paginationVisible(){switch(this.$vuetify.breakpoint.name){case"xs":return 5;case"sm":case"md":return 10;case"lg":case"xl":default:return 15}}},methods:{setWatches(){this.pageSizeUnwatch=this.$watch("pageSize",(t=>{this.$store.commit("setBrowsingPageSize",t),this.updateRouteAndReload()})),this.pageUnwatch=this.$watch("page",(t=>{this.updateRoute(),this.loadPage(this.libraryId,t)}))},unsetWatches(){this.pageUnwatch(),this.pageSizeUnwatch()},updateRouteAndReload(){this.unsetWatches(),this.page=1,this.updateRoute(),this.loadPage(this.libraryId,this.page),this.setWatches()},updateRoute(){this.$router.replace({name:this.$route.name,params:{libraryId:this.$route.params.libraryId},query:{page:`${this.page}`,pageSize:`${this.pageSize}`}}).catch((t=>{}))},reloadCollections(){this.loadLibrary(this.libraryId)},reloadLibrary(t){t.libraryId===this.libraryId&&this.loadLibrary(this.libraryId)},async loadLibrary(t){this.library=this.getLibraryLazy(t),void 0!=this.library&&(document.title=`Komga - ${this.library.name}`),await this.loadPage(t,this.page),0===this.totalElements&&await this.$router.push({name:"browse-libraries",params:{libraryId:t.toString()}})},async loadPage(t,e){this.selectedCollections=[];const i={page:e-1,size:this.pageSize},s=t!==f._?[t]:void 0,n=await this.$komgaCollections.getCollections(s,i);this.totalPages=n.totalPages,this.totalElements=n.totalElements,this.collections=n.content},getLibraryLazy(t){return t!==f._?this.$store.getters.getLibraryById(t):void 0},editSingleCollection(t){this.$store.dispatch("dialogEditCollection",t)},deleteCollections(){this.$store.dispatch("dialogDeleteCollection",this.selectedCollections)}}}),_=A,$=i(81656),k=(0,$.A)(_,r,c,!1,null,null,null),x=k.exports},15137:function(t,e,i){i.d(e,{A:function(){return p}});var s=i(72006),n=i(80700),a=i(54582),o=i(78956),l=i(24568),r=i(81582),c=i(38937),h=i(22235),u=i(33288),d=i(73803),p=(0,s.A)(o.A,u.A,h.A,r.A,(0,l.P)("chipGroup"),(0,c.P)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...h.A.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(h.A.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,d.q4)(t,e,this)}))},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(a.A,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(n.SM,t)},genClose(){return this.$createElement(a.A,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const n=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(n,s),e)}})},30376:function(t,e,i){i.d(e,{A:function(){return b}});var s=i(28071),n=i(41769),a=i(34236),o=i(28492),l=i(48598),r=i(69227),c=i(26863),h=i(81582),u=i(56809),d=i(8177),p=i(72006),m=i(73803),v=i(69463),g=i(18857);const f=(0,p.A)(o.A,a.A,r.A,c.A,h.A,l.A);var b=f.extend({name:"v-menu",directives:{ClickOutside:u.A,Resize:d.A},provide(){return{isInMenu:!0,theme:this.theme}},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"},contentProps:{type:Object,default:()=>({})}},data(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile(){return this.tiles[this.listIndex]},calculatedLeft(){const t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?(0,v.Dg)(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight(){const t=this.auto?"200px":(0,v.Dg)(this.maxHeight);return t||"0"},calculatedMaxWidth(){return(0,v.Dg)(this.maxWidth)||"0"},calculatedMinWidth(){if(this.minWidth)return(0,v.Dg)(this.minWidth)||"0";const t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return(0,v.Dg)(Math.min(e,t))||"0"},calculatedTop(){const t=this.auto?(0,v.Dg)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop();return t||"0"},hasClickableTiles(){return Boolean(this.tiles.find((t=>t.tabIndex>-1)))},styles(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive(t){t||(this.listIndex=-1)},isContentActive(t){this.hasJustFocused=t},listIndex(t,e){if(t in this.tiles){const e=this.tiles[t];e.classList.add("v-list-item--highlighted");const i=this.$refs.content.scrollTop,s=this.$refs.content.clientHeight;i>e.offsetTop-8?(0,g.A)(e.offsetTop-e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content}):i+s<e.offsetTop+e.clientHeight+8&&(0,g.A)(e.offsetTop-s+2*e.clientHeight,{appOffset:!1,duration:300,container:this.$refs.content})}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,m.rq)("full-width",this)},mounted(){this.isActive&&this.callActivate()},methods:{activate(){this.updateDimensions(),requestAnimationFrame((()=>{this.startTransition().then((()=>{this.$refs.content&&(this.calculatedTopAuto=this.calcTopAuto(),this.auto&&(this.$refs.content.scrollTop=this.calcScrollPosition()))}))}))},calcScrollPosition(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active"),i=t.scrollHeight-t.offsetHeight;return e?Math.min(i,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto(){const t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);const i=e.offsetTop-this.calcScrollPosition(),s=t.querySelector(".v-list-item").offsetTop;return this.computedTop-i-s-1},changeListIndex(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==v.uP.tab){if(t.keyCode===v.uP.down)this.nextTile();else if(t.keyCode===v.uP.up)this.prevTile();else if(t.keyCode===v.uP.end)this.lastTile();else if(t.keyCode===v.uP.home)this.firstTile();else{if(t.keyCode!==v.uP.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional(t){const e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes(){const t=n.A.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?{...t,"aria-activedescendant":this.activeTile.id}:t},genActivatorListeners(){const t=l.A.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition(){const t=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[t]):t},genDirectives(){const t=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&t.push({name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:()=>[this.$el,...this.getOpenDependentElements()]}}),t},genContent(){const t={attrs:{...this.getScopeIdAttrs(),...this.contentProps,role:"role"in this.$attrs?this.$attrs.role:"menu"},staticClass:"v-menu__content",class:{...this.rootThemeClasses,...this.roundedClasses,"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive,[this.contentClass.trim()]:!0},style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:t=>{const e=t.target;e.getAttribute("disabled")||this.closeOnContentClick&&(this.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(t.on=t.on||{},t.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(t.on=t.on||{},t.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(t.on=t.on||{},t.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",t,this.getContentSlot())},getTiles(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item, .v-divider, .v-subheader")))},mouseEnterHandler(){this.runDelay("open",(()=>{this.hasJustFocused||(this.hasJustFocused=!0)}))},mouseLeaveHandler(t){this.runDelay("close",(()=>{var e;(null===(e=this.$refs.content)||void 0===e?void 0:e.contains(t.relatedTarget))||requestAnimationFrame((()=>{this.isActive=!1,this.callDeactivate()}))}))},nextTile(){const t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile(){const t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},lastTile(){const t=this.tiles[this.tiles.length-1];t&&(this.listIndex=this.tiles.length-1,-1===t.tabIndex&&this.prevTile())},firstTile(){const t=this.tiles[0];t&&(this.listIndex=0,-1===t.tabIndex&&this.nextTile())},onKeyDown(t){if(!this.disableKeys){if(t.keyCode===v.uP.esc){setTimeout((()=>{this.isActive=!1}));const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}else!this.isActive&&[v.uP.up,v.uP.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((()=>this.changeListIndex(t)))}},onResize(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render(t){const e={staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]};return t("div",e,[!this.activator&&this.genActivator(),this.showLazyContent((()=>[this.$createElement(s.A,{props:{root:!0,light:this.light,dark:this.dark}},[this.genTransition()])]))])}})},6231:function(t,e,i){i.d(e,{A:function(){return c}});var s=i(54582),n=i(8177),a=i(78956),o=i(49274),l=i(81582),r=i(72006),c=(0,r.A)(a.A,(0,o.A)({onVisible:["init"]}),l.A).extend({name:"v-pagination",directives:{Resize:n.A},props:{circle:Boolean,disabled:Boolean,navigationColor:String,navigationTextColor:String,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const i=e%2===0?1:0,s=Math.floor(e/2),n=this.length-s+1+i;if(this.value>s&&this.value<n){const t=1,e=this.length,n=this.value-s+2,a=this.value+s-2-i,o=n-1===t+1?2:"...",l=a+1===e-1?a+1:"...";return[1,o,...this.range(n,a),l,this.length]}if(this.value===s){const t=this.value+s-1-i;return[...this.range(1,t),"...",this.length]}if(this.value===n){const t=this.value-s+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,s),"...",...this.range(n,this.length)]}},watch:{value(){this.init()}},beforeMount(){this.init()},methods:{init(){this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((()=>this.selected=this.value),100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const i=[];t=t>0?t:1;for(let s=t;s<=e;s++)i.push(s);return i},genIcon(t,e,i,n,a){return t("li",[t("button",this.setBackgroundColor(this.navigationColor,{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":a},on:i?{}:{click:n}}),[t(s.A,{props:{color:this.navigationTextColor}},[e])])])},genItem(t,e){const i=e===this.value&&(this.color||"primary"),s=e===this.value,n=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(n,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map(((e,i)=>t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)])))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},26702:function(t,e,i){i.d(e,{MZ:function(){return o},sw:function(){return a}});var s=i(75704),n=i(69463);const a=(0,n.Gn)("v-toolbar__title"),o=(0,n.Gn)("v-toolbar__items");s.A},11545:function(t,e,i){i.d(e,{A:function(){return a}});var s=i(47222),n=i(72006);function a(t,e=[]){return(0,n.A)((0,s.P)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},87375:function(t,e,i){var s=i(94095);e.A=s.C.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return s.C.options.computed.classes.call(this)}},methods:{genData:s.C.options.methods.genData}})}}]);
//# sourceMappingURL=browse-collections.c593a24e.js.map