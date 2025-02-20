"use strict";(self["webpackChunkkomga_webui"]=self["webpackChunkkomga_webui"]||[]).push([[1993],{26029:function(t,e,s){s.r(e),s.d(e,{default:function(){return z}});var o=s(90623),a=s(73847),i=s(15137),r=s(1231),n=s(70793),l=s(16684),d=s(18748),c=s(94026),m=s(5291),b=s(69791),h=s(30376),u=s(22369),k=s(40005),_=s(84551),g=function(){var t=this,e=t._self._c;t._self._setupProxy;return t.$_.isEmpty(t.book)?t._e():e("div",[e("toolbar-sticky",[e(_.A,{attrs:{bottom:"",disabled:!t.isAdmin},scopedSlots:t._u([{key:"activator",fn:function({on:s}){return[e(a.A,t._g({attrs:{icon:"",to:t.parentLocation}},s),[e("rtl-icon",{attrs:{icon:"mdi-arrow-left",rtl:"mdi-arrow-right"}})],1)]}}],null,!1,2434228632)},[t.contextReadList?e("span",[t._v(t._s(t.$t("common.go_to_readlist")))]):e("span",[t._v(t._s(t.$t("common.go_to_series")))])]),t.book?e("book-actions-menu",{attrs:{book:t.book}}):t._e(),t.isAdmin?e(a.A,{attrs:{icon:""},on:{click:t.editBook}},[e(l.A,[t._v("mdi-pencil")])],1):t._e(),e(k.A),t.contextReadList&&t.$vuetify.breakpoint.mdAndUp?e(o.A,{staticClass:"mb-0",attrs:{type:"info",text:"",dense:"",border:"right"}},[t._v(t._s(t.$t("browse_book.navigation_within_readlist",{name:t.contextName}))+" ")]):t._e(),e(a.A,{attrs:{icon:"",disabled:t.$_.isEmpty(t.siblingPrevious),to:{name:t.siblingPrevious.oneshot?"browse-oneshot":"browse-book",params:{seriesId:t.siblingPrevious.seriesId,bookId:t.previousId},query:{context:t.context.origin,contextId:t.context.id}}}},[e("rtl-icon",{attrs:{icon:"mdi-chevron-left",rtl:"mdi-chevron-right"}})],1),e(h.A,{attrs:{bottom:"","offset-y":"","max-height":.7*t.$vuetify.breakpoint.height,"max-width":250},scopedSlots:t._u([{key:"activator",fn:function({on:s}){return[e(a.A,t._g({attrs:{icon:""}},s),[e(l.A,[t._v("mdi-menu")])],1)]}}],null,!1,3153626740)},[e(d.A,{attrs:{flat:""}},[e(m.A,{attrs:{color:"primary"}},t._l(t.siblings,(function(s,o){return e(c.A,{key:o,attrs:{to:{name:s.oneshot?"browse-oneshot":"browse-book",params:{seriesId:s.seriesId,bookId:s.id},query:{context:t.context.origin,contextId:t.context.id}}}},[e(b.UZ,{staticClass:"text-wrap text-body-2"},[t.contextReadList&&!s.oneshot?[t._v(t._s(s.seriesTitle)+" "+t._s(s.metadata.number)+": "+t._s(s.metadata.title)+" ")]:t.contextReadList&&s.oneshot?[t._v(t._s(s.metadata.title))]:[t._v(t._s(s.metadata.number)+" - "+t._s(s.metadata.title))]],2)],1)})),1)],1)],1),e(a.A,{attrs:{icon:"",disabled:t.$_.isEmpty(t.siblingNext),to:{name:t.siblingNext.oneshot?"browse-oneshot":"browse-book",params:{seriesId:t.siblingNext.seriesId,bookId:t.nextId},query:{context:t.context.origin,contextId:t.context.id}}}},[e("rtl-icon",{attrs:{icon:"mdi-chevron-right",rtl:"mdi-chevron-left"}})],1)],1),e(n.A,{staticClass:"pa-6",attrs:{fluid:""}},[e(u.A,[t.contextReadList&&t.$vuetify.breakpoint.smAndDown?e(o.A,{staticClass:"mb-0",attrs:{type:"info",text:"",dense:"",border:"right"}},[t._v(t._s(t.$t("browse_book.navigation_within_readlist",{name:t.contextName}))+" ")]):t._e()],1),e(u.A,[e(r.A,{attrs:{cols:"4",sm:"4",md:"auto",lg:"auto",xl:"auto"}},[t.book.hasOwnProperty("id")?e("item-card",{attrs:{width:"212",item:t.book,"thumbnail-only":"","no-link":"","action-menu":!1}}):t._e(),t.isInProgress?e("div",{staticClass:"text-caption text-center mt-1",attrs:{title:t.$t("common.read_on",{date:t.readProgressDate})}},[t._v(" "+t._s(t.$tc("common.pages_left",t.pagesLeft))+" ")]):t.isRead?e("div",{staticClass:"text-caption text-center mt-1"},[t._v(" "+t._s(t.$t("common.read_on",{date:t.readProgressDate}))+" ")]):t._e()],1),e(r.A,{attrs:{cols:"8"}},[e(n.A,[e(u.A,[e(r.A,{staticClass:"py-1"},[e("router-link",{staticClass:"link-underline text-h5",attrs:{to:{name:"browse-series",params:{seriesId:t.book.seriesId}}}},[t._v(t._s(t.book.seriesTitle)+" ")]),e("router-link",{staticClass:"caption link-underline",class:t.$vuetify.breakpoint.smAndUp?"mx-1":"",style:t.$vuetify.breakpoint.xsOnly?"display: block":"",attrs:{to:{name:"browse-libraries",params:{libraryId:t.book.libraryId}}}},[t._v(t._s(t.$t("searchbox.in_library",{library:t.getLibraryName(t.book)}))+" ")])],1)],1),e(u.A,[e(r.A,{staticClass:"py-1"},[e("div",{staticClass:"text-h6"},[t._v(t._s(t.book.metadata.title))])])],1),e(u.A,{staticClass:"text-caption",attrs:{align:"center"}},[t.book.media.status===t.MediaStatus.UNKNOWN?e(r.A,{attrs:{cols:"auto"}},[t._v(" "+t._s(t.book.metadata.number)+" · "+t._s(t.$t("book_card.unknown"))+" ")]):e(r.A,{attrs:{cols:"auto"}},[t._v(" "+t._s(t.book.metadata.number)+" · "+t._s(t.$tc("common.pages_n",t.book.media.pagesCount))+" ")]),t.book.metadata.releaseDate?e(r.A,{attrs:{cols:"auto"}},[t._v(" "+t._s(new Intl.DateTimeFormat(t.$i18n.locale,{dateStyle:"long",timeZone:"UTC"}).format(new Date(t.book.metadata.releaseDate)))+" ")]):t._e(),t.book.media.status===t.MediaStatus.OUTDATED?e(r.A,{staticClass:"py-1 pe-0",attrs:{cols:"auto"}},[e(_.A,{attrs:{bottom:"",disabled:!t.isAdmin},scopedSlots:t._u([{key:"activator",fn:function({on:s}){return[e(i.A,t._g({attrs:{label:"",small:"",color:"warning"}},s),[t._v(" "+t._s(t.$t("common.outdated"))+" ")])]}}],null,!1,776088094)},[t._v(" "+t._s(t.$t("browse_book.outdated_tooltip"))+" ")])],1):t._e(),t.unavailable?e(r.A,{staticClass:"py-1 pe-0",attrs:{cols:"auto"}},[e(i.A,{attrs:{label:"",small:"",color:"error"}},[t._v(" "+t._s(t.$t("common.unavailable"))+" ")])],1):t._e()],1),t.$vuetify.breakpoint.smAndUp?[e(u.A,{staticClass:"align-center"},[e(r.A,{attrs:{cols:"auto"}},[e(a.A,{attrs:{color:"accent",small:"",title:t.$t("browse_book.read_book"),to:{name:t.readRouteName,params:{bookId:t.bookId},query:{context:t.context.origin,contextId:t.context.id}},disabled:!t.canRead}},[e(l.A,{attrs:{left:"",small:""}},[t._v("mdi-book-open-page-variant")]),t._v(" "+t._s(t.$t("common.read"))+" ")],1)],1),e(r.A,{attrs:{cols:"auto"}},[e(a.A,{attrs:{small:"",title:t.$t("browse_book.read_incognito"),to:{name:t.readRouteName,params:{bookId:t.bookId},query:{context:t.context.origin,contextId:t.context.id,incognito:!0}},disabled:!t.canRead}},[e(l.A,{attrs:{left:"",small:""}},[t._v("mdi-incognito")]),t._v(" "+t._s(t.$t("common.read"))+" ")],1)],1),e(r.A,{attrs:{cols:"auto"}},[e(a.A,{attrs:{title:t.$t("browse_book.download_file"),small:"",disabled:!t.canDownload,href:t.fileUrl}},[e(l.A,{attrs:{left:"",small:""}},[t._v("mdi-file-download")]),t._v(" "+t._s(t.$t("common.download"))+" ")],1)],1)],1),t.book.metadata.summary?e(u.A,[e(r.A,[e("read-more",{model:{value:t.readMore,callback:function(e){t.readMore=e},expression:"readMore"}},[t._v(t._s(t.book.metadata.summary))])],1)],1):t._e()]:t._e()],2)],1)],1),t.$vuetify.breakpoint.xsOnly?[e(u.A,{staticClass:"align-center"},[e(r.A,{attrs:{cols:"auto"}},[e(a.A,{attrs:{color:"accent",small:"",title:t.$t("browse_book.read_book"),to:{name:t.readRouteName,params:{bookId:t.bookId},query:{context:t.context.origin,contextId:t.context.id}},disabled:!t.canRead}},[e(l.A,{attrs:{left:"",small:""}},[t._v("mdi-book-open-page-variant")]),t._v(" "+t._s(t.$t("common.read"))+" ")],1)],1),e(r.A,{attrs:{cols:"auto"}},[e(a.A,{attrs:{small:"",title:t.$t("browse_book.read_incognito"),to:{name:t.readRouteName,params:{bookId:t.bookId},query:{context:t.context.origin,contextId:t.context.id,incognito:!0}},disabled:!t.canRead}},[e(l.A,{attrs:{left:"",small:""}},[t._v("mdi-incognito")]),t._v(" "+t._s(t.$t("common.read"))+" ")],1)],1),e(r.A,{attrs:{cols:"auto"}},[e(a.A,{attrs:{title:t.$t("browse_book.download_file"),small:"",disabled:!t.canDownload,href:t.fileUrl}},[e(l.A,{attrs:{left:"",small:""}},[t._v("mdi-file-download")]),t._v(" "+t._s(t.$t("common.download"))+" ")],1)],1)],1),t.book.metadata.summary?e(u.A,[e(r.A,[e("read-more",{model:{value:t.readMore,callback:function(e){t.readMore=e},expression:"readMore"}},[t._v(t._s(t.book.metadata.summary))])],1)],1):t._e()]:t._e(),t._l(t.displayedRoles,(function(s){return e(u.A,{key:s,staticClass:"align-center text-caption"},[e(r.A,{staticClass:"py-1 text-uppercase",attrs:{cols:"4",sm:"3",md:"2",xl:"1"}},[t._v(" "+t._s(t.$te(`author_roles.${s}`)?t.$t(`author_roles.${s}`):s)+" ")]),e(r.A,{staticClass:"py-1",attrs:{cols:"8",sm:"9",md:"10",xl:"11"}},[e("vue-horizontal",{scopedSlots:t._u([{key:"btn-prev",fn:function(){return[e(a.A,{attrs:{icon:"",small:""}},[e(l.A,[t._v("mdi-chevron-left")])],1)]},proxy:!0},{key:"btn-next",fn:function(){return[e(a.A,{attrs:{icon:"",small:""}},[e(l.A,[t._v("mdi-chevron-right")])],1)]},proxy:!0}],null,!0)},t._l(t.authorsByRole[s],(function(o,a){return e(i.A,{key:a,staticClass:"me-2",attrs:{title:o,to:{name:"browse-series",params:{seriesId:t.book.seriesId},query:{[s]:[o]}},label:"",small:"",outlined:"",link:""}},[t._v(t._s(o)+" ")])})),1)],1)],1)})),t.book.metadata.tags.length>0?e(u.A,{staticClass:"align-center text-caption"},[e(r.A,{staticClass:"py-1 text-uppercase",attrs:{cols:"4",sm:"3",md:"2",xl:"1"}},[t._v(t._s(t.$i18n.t("common.tags")))]),e(r.A,{staticClass:"py-1 text-capitalize",attrs:{cols:"8",sm:"9",md:"10",xl:"11"}},[e("vue-horizontal",{scopedSlots:t._u([{key:"btn-prev",fn:function(){return[e(a.A,{attrs:{icon:"",small:""}},[e(l.A,[t._v("mdi-chevron-left")])],1)]},proxy:!0},{key:"btn-next",fn:function(){return[e(a.A,{attrs:{icon:"",small:""}},[e(l.A,[t._v("mdi-chevron-right")])],1)]},proxy:!0}],null,!1,187429412)},t._l(t.book.metadata.tags,(function(s,o){return e(i.A,{key:o,staticClass:"me-2",attrs:{title:s,to:{name:"browse-series",params:{seriesId:t.book.seriesId},query:{tag:[new t.SearchConditionTag(new t.SearchOperatorIs(s))]}},label:"",small:"",outlined:"",link:""}},[t._v(t._s(s)+" ")])})),1)],1)],1):t._e(),e(u.A,[e(r.A,[e("read-lists-expansion-panels",{attrs:{"read-lists":t.readLists},scopedSlots:t._u([{key:"prepend",fn:function(s){return[e(_.A,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:o}){return[e(a.A,t._g({staticClass:"me-2",attrs:{icon:""},on:{click:function(e){return t.removeFromReadList(s.readlist.id)}}},o),[e(l.A,[t._v("mdi-book-remove")])],1)]}}],null,!0)},[e("span",[t._v(t._s(t.$t("browse_book.remove_from_readlist")))])])]}}],null,!1,3445749044)})],1)],1),t.book.metadata.links.length>0?e(u.A,{staticClass:"align-center text-caption"},[e(r.A,{staticClass:"py-1 text-uppercase",attrs:{cols:"4",sm:"3",md:"2",xl:"1"}},[t._v(t._s(t.$t("browse_book.links")))]),e(r.A,{staticClass:"py-1",attrs:{cols:"8",sm:"9",md:"10",xl:"11"}},t._l(t.book.metadata.links,(function(s,o){return e(i.A,{key:o,staticClass:"me-2",attrs:{href:s.url,rel:"noreferrer",target:"_blank",label:"",small:"",outlined:"",link:""}},[t._v(" "+t._s(s.label)+" "),e(l.A,{staticClass:"ps-1",attrs:{"x-small":"",color:"grey"}},[t._v(" mdi-open-in-new ")])],1)})),1)],1):t._e(),e(u.A,{staticClass:"align-center text-caption"},[e(r.A,{staticClass:"py-1 text-uppercase",attrs:{cols:"4",sm:"3",md:"2",xl:"1"}},[t._v(t._s(t.$t("browse_book.size")))]),e(r.A,{staticClass:"py-1",attrs:{cols:"8",sm:"9",md:"10",xl:"11"}},[t._v(t._s(t.book.size))])],1),t.book.media.comment?e(u.A,{staticClass:"align-center text-caption"},[e(r.A,{staticClass:"py-1 text-uppercase",attrs:{cols:"4",sm:"3",md:"2",xl:"1"}},[t._v(t._s(t.$t("browse_book.comment")))]),e(r.A,{staticClass:"py-1 error--text font-weight-bold",attrs:{cols:"8",sm:"9",md:"10",xl:"11"}},[t._v(t._s(t.mediaComment))])],1):t._e(),e(u.A,{staticClass:"align-center text-caption"},[e(r.A,{staticClass:"py-1 text-uppercase",attrs:{cols:"4",sm:"3",md:"2",xl:"1"}},[t._v(t._s(t.$t("browse_book.format")))]),e(r.A,{staticClass:"py-1",attrs:{cols:"8",sm:"9",md:"10",xl:"11"}},[t._v(t._s(t.format.type))])],1),t.book.metadata.isbn?e(u.A,{staticClass:"align-center text-caption"},[e(r.A,{staticClass:"py-1 text-uppercase",attrs:{cols:"4",sm:"3",md:"2",xl:"1"}},[t._v(t._s(t.$t("browse_book.isbn")))]),e(r.A,{staticClass:"py-1",attrs:{cols:"8",sm:"9",md:"10",xl:"11"}},[t._v(t._s(t.book.metadata.isbn))])],1):t._e(),e(u.A,{staticClass:"align-center text-caption"},[e(r.A,{staticClass:"py-1 text-uppercase",attrs:{cols:"4",sm:"3",md:"2",xl:"1"}},[t._v(t._s(t.$t("browse_book.file")))]),e(r.A,{staticClass:"py-1",attrs:{cols:"8",sm:"9",md:"10",xl:"11"}},[t._v(t._s(t.book.url))])],1),e(u.A,{staticClass:"align-center text-caption"},[e(r.A,{staticClass:"py-1 text-uppercase",attrs:{cols:"4",sm:"3",md:"2",xl:"1"}},[t._v(t._s(t.$t("browse_book.date_created")))]),e(r.A,{staticClass:"py-1",attrs:{cols:"8",sm:"9",md:"10",xl:"11"}},[t._v(t._s(new Intl.DateTimeFormat(t.$i18n.locale,{dateStyle:"long",timeStyle:"short"}).format(new Date(t.book.created)))+" ")])],1),e(u.A,{staticClass:"align-center text-caption"},[e(r.A,{staticClass:"py-1 text-uppercase",attrs:{cols:"4",sm:"3",md:"2",xl:"1"}},[t._v(t._s(t.$t("browse_book.date_modified")))]),e(r.A,{staticClass:"py-1",attrs:{cols:"8",sm:"9",md:"10",xl:"11"}},[t._v(t._s(new Intl.DateTimeFormat(t.$i18n.locale,{dateStyle:"long",timeStyle:"short"}).format(new Date(t.book.lastModified)))+" ")])],1)],2)],1)},p=[],v=(s(14602),s(28743),s(62554),s(51452)),x=s(82753),A=s(72448),y=s(75723),$=s(33060),f=s(50536),I=s(9401),w=s(33513),C=s(79957),R=s(52846),L=s(85471),P=s(95079),S=s(13044),D=s(4291),B=s(40889),N=s(41272),T=s(23850),q=s(24636),E=s(19447),H=L.Ay.extend({name:"BrowseBook",components:{ReadMore:D.A,ToolbarSticky:A.A,ItemCard:x.A,BookActionsMenu:v.A,ReadListsExpansionPanels:P.A,VueHorizontal:B.A,RtlIcon:q.A},data:()=>({MediaStatus:C.nl,SearchConditionTag:E.iT,SearchOperatorIs:E.Tr,book:{},context:{},contextName:"",siblings:[],siblingPrevious:{},siblingNext:{},readLists:[],readMore:!1}),async created(){this.loadBook(this.bookId),this.$eventHub.$on(R.vk,this.bookChanged),this.$eventHub.$on(R.Qg,this.bookDeleted),this.$eventHub.$on(R.pU,this.readProgressChanged),this.$eventHub.$on(R.Ih,this.readProgressChanged),this.$eventHub.$on(R.yn,this.libraryDeleted),this.$eventHub.$on(R.YP,this.readListChanged),this.$eventHub.$on(R._X,this.readListChanged),this.$eventHub.$on(R.Vp,this.readListChanged)},beforeDestroy(){this.$eventHub.$off(R.vk,this.bookChanged),this.$eventHub.$off(R.Qg,this.bookDeleted),this.$eventHub.$off(R.pU,this.readProgressChanged),this.$eventHub.$off(R.Ih,this.readProgressChanged),this.$eventHub.$off(R.yn,this.libraryDeleted),this.$eventHub.$off(R.YP,this.readListChanged),this.$eventHub.$off(R._X,this.readListChanged),this.$eventHub.$off(R.Vp,this.readListChanged)},props:{bookId:{type:String,required:!0}},async beforeRouteUpdate(t,e,s){t.params.bookId!==e.params.bookId&&(this.readMore=!1,this.loadBook(t.params.bookId)),s()},computed:{readRouteName(){return(0,$.Z)(this.book.media)},isAdmin(){return this.$store.getters.meAdmin},unavailable(){return this.book.deleted||this.$store.getters.getLibraryById(this.book.libraryId).unavailable},canRead(){return"READY"===this.book.media.status&&this.$store.getters.mePageStreaming&&!this.unavailable},canDownload(){return this.$store.getters.meFileDownload&&!this.unavailable},thumbnailUrl(){return(0,w.HP)(this.bookId)},fileUrl(){return(0,w.pv)(this.bookId)},format(){return(0,$.d)(this.book.media)},authorsByRole(){return(0,y.R)(this.book.metadata.authors)},isRead(){return(0,f.wP)(this.book)===C.RJ.READ},isUnread(){return(0,f.wP)(this.book)===C.RJ.UNREAD},isInProgress(){return(0,f.wP)(this.book)===C.RJ.IN_PROGRESS},pagesLeft(){return(0,f.yW)(this.book)},readProgressPercentage(){return(0,f.mq)(this.book)},readProgressDate(){if(this.book.readProgress)return new Intl.DateTimeFormat(this.$i18n.locale,{dateStyle:"medium",timeStyle:"short"}).format(this.book.readProgress.readDate)},previousId(){var t;return(null===(t=this.siblingPrevious)||void 0===t||null===(t=t.id)||void 0===t?void 0:t.toString())||"0"},nextId(){var t;return(null===(t=this.siblingNext)||void 0===t||null===(t=t.id)||void 0===t?void 0:t.toString())||"0"},contextReadList(){return this.context.origin===S.E.READLIST},mediaComment(){return(0,T.q)(this.book.media.comment)},parentLocation(){return this.contextReadList?{name:"browse-readlist",params:{readListId:this.context.id}}:{name:"browse-series",params:{seriesId:this.book.seriesId}}},displayedRoles(){const t=this.$_.uniq([...N.B,...this.book.metadata.authors.map((t=>t.role))]);return t.filter((t=>this.authorsByRole[t]))}},methods:{getLibraryName(t){return this.$store.getters.getLibraryById(t.libraryId).name},libraryDeleted(t){t.libraryId===this.book.libraryId&&this.$router.push({name:"home"})},readListChanged(t){(t.bookIds.includes(this.bookId)||this.readLists.map((t=>t.id)).includes(t.readListId))&&this.$komgaBooks.getReadLists(this.bookId).then((t=>this.readLists=t))},bookChanged(t){t.bookId===this.bookId&&this.loadBook(this.bookId)},bookDeleted(t){t.bookId===this.bookId&&this.$router.push({name:"browse-series",params:{seriesId:this.book.seriesId}})},readProgressChanged(t){t.bookId===this.bookId&&this.loadBook(this.bookId)},async loadBook(t){this.book=await this.$komgaBooks.getBook(t),this.book.oneshot&&await this.$router.replace({name:"browse-oneshot",params:{seriesId:this.book.seriesId}}),this.$route.query.contextId&&this.$route.query.context&&Object.values(S.E).includes(this.$route.query.context)&&(this.context={origin:this.$route.query.context,id:this.$route.query.contextId},this.book.context=this.context,this.$komgaReadLists.getOneReadList(this.context.id).then((t=>this.contextName=t.name))),(null===this||void 0===this?void 0:this.context.origin)===S.E.READLIST?this.$komgaReadLists.getBooks(this.context.id,{unpaged:!0}).then((t=>this.siblings=t.content)):this.$komgaBooks.getBooksList({condition:new E.kq(new E.Tr(this.book.seriesId))},{unpaged:!0,sort:["metadata.numberSort"]}).then((t=>this.siblings=t.content)),this.$komgaBooks.getReadLists(this.bookId).then((t=>this.readLists=t)),this.$_.has(this.book,"metadata.title")&&(document.title=`Komga - ${(0,I.P)(this.book.metadata.title,this.book.seriesTitle,this.book.oneshot?void 0:this.book.metadata.number)}`),(null===this||void 0===this?void 0:this.context.origin)===S.E.READLIST?this.$komgaReadLists.getBookSiblingNext(this.context.id,t).then((t=>this.siblingNext=t)).catch((t=>this.siblingNext={})):this.$komgaBooks.getBookSiblingNext(t).then((t=>this.siblingNext=t)).catch((t=>this.siblingNext={})),(null===this||void 0===this?void 0:this.context.origin)===S.E.READLIST?this.$komgaReadLists.getBookSiblingPrevious(this.context.id,t).then((t=>this.siblingPrevious=t)).catch((t=>this.siblingPrevious={})):this.$komgaBooks.getBookSiblingPrevious(t).then((t=>this.siblingPrevious=t)).catch((t=>this.siblingPrevious={}))},analyze(){this.$komgaBooks.analyzeBook(this.book)},refreshMetadata(){this.$komgaBooks.refreshMetadata(this.book)},editBook(){this.$store.dispatch("dialogUpdateBooks",this.book)},removeFromReadList(t){const e=this.readLists.find((e=>e.id==t)),s=Object.assign({},{bookIds:null===e||void 0===e?void 0:e.bookIds.filter((t=>t!=this.bookId))});0==s.bookIds.length?this.$komgaReadLists.deleteReadList(e.id):this.$komgaReadLists.patchReadList(e.id,s)}}}),U=H,M=s(81656),O=(0,M.A)(U,g,p,!1,null,"2cc167c9",null),z=O.exports}}]);
//# sourceMappingURL=browse-book.fe721773.js.map