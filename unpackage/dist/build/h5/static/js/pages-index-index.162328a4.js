(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0666":function(t,e,i){"use strict";i.r(e);var n=i("8bbe"),a=i("450a");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("1c54");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"7433d344",null);s.options.__file="uni-nav-bar.vue",e["default"]=s.exports},"0714":function(t,e,i){var n=i("35f9");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("217a366d",n,!0,{sourceMap:!1,shadowMode:!1})},"16f2":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".load-more[data-v-0ed8d87e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.loading-img[data-v-0ed8d87e]{height:24px;width:24px;margin-right:10px}.loading-text[data-v-0ed8d87e]{font-size:%?28?%;color:#777}.loading-img>uni-view[data-v-0ed8d87e]{position:absolute}.load1[data-v-0ed8d87e],.load2[data-v-0ed8d87e],.load3[data-v-0ed8d87e]{height:24px;width:24px}.load2[data-v-0ed8d87e]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-0ed8d87e]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.loading-img>uni-view uni-view[data-v-0ed8d87e]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#777;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-0ed8d87e 1.56s ease infinite}.loading-img>uni-view uni-view[data-v-0ed8d87e]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.loading-img>uni-view uni-view[data-v-0ed8d87e]:nth-child(2){-webkit-transform:rotate(180deg);top:11px;right:0}.loading-img>uni-view uni-view[data-v-0ed8d87e]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.loading-img>uni-view uni-view[data-v-0ed8d87e]:nth-child(4){top:11px;left:0}.load1 uni-view[data-v-0ed8d87e]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-0ed8d87e]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-0ed8d87e]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-0ed8d87e]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-0ed8d87e]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-0ed8d87e]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-0ed8d87e]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-0ed8d87e]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-0ed8d87e]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-0ed8d87e]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-0ed8d87e]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-0ed8d87e]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-0ed8d87e{0%{opacity:1}to{opacity:.2}}",""])},"1c54":function(t,e,i){"use strict";var n=i("91c9"),a=i.n(n);a.a},"2e5c":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-tab-bar"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.ishide,expression:"!ishide"}]},[i("uni-nav-bar",{attrs:{color:"#333333","background-color":"#FFFFFF",fixed:"false","right-icon":"scan"},on:{"click-left":function(e){e=t.$handleEvent(e),t.showCity(e)},"click-right":function(e){e=t.$handleEvent(e),t.scan(e)}}},[i("template",{attrs:{slot:"left"},slot:"left"},[i("v-uni-view",{staticClass:"city"},[i("uni-icon",{attrs:{type:"home",color:"#333333",size:"26"}})],1)],1),i("v-uni-view",{staticClass:"input-view"},[i("uni-icon",{attrs:{type:"search",size:"22",color:"#666666"}}),i("v-uni-input",{staticClass:"input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(e){e=t.$handleEvent(e),t.confirm(e)}}})],1)],2),i("v-uni-view",{staticClass:"page-section swiper"},[i("v-uni-view",{staticClass:"page-section-spacing"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},[i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[t._v("A")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item uni-bg-green"},[t._v("B")])],1),i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"swiper-item uni-bg-blue"},[t._v("C")])],1)],1)],1)],1)],1),i("v-uni-scroll-view",{staticClass:"uni-swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabBars,function(e,n){return i("v-uni-view",{key:e.id,class:["swiper-tab-list",t.tabIndex==n?"active":""],attrs:{id:e.id,"data-current":n},on:{click:function(e){e=t.$handleEvent(e),t.tapTab(n)}}},[t._v(t._s(e.name))])})),i("v-uni-view",{staticClass:"subnav"},[i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.activefn(0)}}},[i("v-uni-text",{class:{active2:0==t.isactive}},[t._v("综合")])],1),i("v-uni-view",{class:{active2:1==t.isactive},on:{click:function(e){e=t.$handleEvent(e),t.activefn(1,t.isup1)}}},[i("v-uni-text",[t._v("价值")]),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:1==t.isup1,expression:"isup1==1"}],staticClass:"test"},[t._v("")]),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:-1==t.isup1,expression:"isup1==-1"}],staticClass:"test"},[t._v("")])],1),i("v-uni-view",{class:{active2:2==t.isactive},on:{click:function(e){e=t.$handleEvent(e),t.activefn(2,t.isup2)}}},[i("v-uni-text",[t._v("最新")]),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:2==t.isup2,expression:"isup2==2"}],staticClass:"test"},[t._v("")]),i("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:-2==t.isup2,expression:"isup2==-2"}],staticClass:"test"},[t._v("")])],1)],1),i("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.tabIndex,duration:"300"},on:{change:function(e){e=t.$handleEvent(e),t.changeTab(e)}}},t._l(t.newsitems,function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-scroll-view",{staticClass:"list",attrs:{"scroll-y":""},on:{scrolltolower:function(e){e=t.$handleEvent(e),t.loadMore(n)},scroll:function(e){e=t.$handleEvent(e),t.scrollyfn(e)}}},[i("v-uni-view",{staticClass:"uni-product-list"},t._l(e.data,function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-product"},[i("v-uni-view",{staticClass:"image-view"},[i("v-uni-image",{staticClass:"uni-product-image",attrs:{src:e.img}})],1),i("v-uni-view",{staticClass:"uni-product-title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"uni-product-des"},[i("v-uni-text",{staticClass:"test taobao"},[t._v("")]),i("v-uni-text",{staticClass:"test pc"},[t._v("")]),i("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))])],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{attrs:{type:"primary",size:"mini",plain:"true"}},[t._v("抢此任务")])],1)],1)})),i("v-uni-view",{staticClass:"uni-tab-bar-loading"},[i("uni-load-more",{attrs:{loadingType:e.loadingType,contentText:t.loadingText}})],1)],1)],1)}))],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"35f9":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.city[data-v-e8e381f6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-left:8px}.input-view[data-v-e8e381f6]{width:92%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#e7e7e7;height:30px;border-radius:15px;padding:0 4%;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:7px 0;line-height:30px}.input-view .uni-icon[data-v-e8e381f6]{line-height:30px!important}.input-view .input[data-v-e8e381f6]{height:30px;line-height:30px;width:94%;padding:0 3%}.swiper-item[data-v-e8e381f6]{height:300px}.uni-swiper-tab[data-v-e8e381f6]{height:35px;line-height:35px}.uni-tab-bar .active[data-v-e8e381f6]{border-bottom:2px solid #007aff}.uni-tab-bar uni-view[data-v-e8e381f6]{line-height:33px}@font-face{font-family:iconfont;src:url(https://at.alicdn.com/t/font_1020696_a2g3hwqe8o6.ttf) format("truetype")}.test[data-v-e8e381f6]{font-family:iconfont}.uni-product-des[data-v-e8e381f6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center}.uni-product-des uni-text[data-v-e8e381f6]{height:%?80?%;line-height:%?80?%}.taobao[data-v-e8e381f6]{font-size:%?48?%;color:#fc6420}.mobile[data-v-e8e381f6],.pc[data-v-e8e381f6]{font-size:%?52?%;color:#2fbbff}.price[data-v-e8e381f6]{color:#ff4000}.btn>uni-button[data-v-e8e381f6]{border:1px solid #ff4000!important;color:#ff4000!important;width:%?300?%}.subnav[data-v-e8e381f6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:30px;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;border-bottom:1px solid #c8c7cc;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center}.subnav uni-text[data-v-e8e381f6]{font-size:%?30?%;color:#6d6d72}.subnav .active2 uni-text[data-v-e8e381f6]{color:#ff4000}',""])},"394a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("da6b")),a=o(i("e390"));function o(t){return t&&t.__esModule?t:{default:t}}var r={components:{uniStatusBar:n.default,uniIcon:a.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:""},shadow:{type:String,default:""}},computed:{isFixed:function(){return"true"===String(this.fixed)},insertStatusBar:function(){switch(String(this.statusBar)){case"true":return!0;case"false":return!1;default:return this.isFixed}},hasShadow:function(){var t=this.backgroundColor;switch(String(this.shadow)){case"true":return!0;case"false":return!1;default:return"transparent"!==t&&t.indexOf("rgba")<0}}},methods:{onClickLeft:function(){this.$emit("clickLeft"),this.$emit("click-left")},onClickRight:function(){this.$emit("clickRight"),this.$emit("click-right")}}};e.default=r},"450a":function(t,e,i){"use strict";i.r(e);var n=i("394a"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},4522:function(t,e,i){"use strict";i.r(e);var n=i("df28"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"5a2d":function(t,e,i){var n=i("f852");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3d7cf611",n,!0,{sourceMap:!1,shadowMode:!1})},"7a1b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-status-bar",style:t.style},[t._t("default")],2)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"8bbe":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-navbar",class:{"uni-navbar-fixed":t.isFixed,"uni-navbar-shadow":t.hasShadow},style:{"background-color":t.backgroundColor}},[t.insertStatusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar-header",style:{color:t.color}},[i("v-uni-view",{staticClass:"uni-navbar-header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickLeft(e)}}},[t.leftIcon.length?i("v-uni-view",[i("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24"}})],1):t._e(),t.leftText.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left")],2),i("v-uni-view",{staticClass:"uni-navbar-container"},[t.title.length?i("v-uni-view",{staticClass:"uni-navbar-container-title"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2),i("v-uni-view",{staticClass:"uni-navbar-header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickRight(e)}}},[t.rightIcon.length?i("v-uni-view",[i("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text"},[t._v(t._s(t.rightText))]):t._e(),t._t("right")],2)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"8ea1":function(t,e,i){"use strict";var n=i("5a2d"),a=i.n(n);a.a},"91c9":function(t,e,i){var n=i("95d7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("02b28ed8",n,!0,{sourceMap:!1,shadowMode:!1})},"95d7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-navbar[data-v-7433d344]{display:block;position:relative;width:100%;background-color:#fff;overflow:hidden}.uni-navbar uni-view[data-v-7433d344]{line-height:44px}.uni-navbar-shadow[data-v-7433d344]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar.uni-navbar-fixed[data-v-7433d344]{position:fixed;z-index:998}.uni-navbar-header[data-v-7433d344]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:44px;line-height:44px;font-size:16px}.uni-navbar-header .uni-navbar-header-btns[data-v-7433d344]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?120?%;padding:0 %?12?%}.uni-navbar-header .uni-navbar-header-btns[data-v-7433d344]:first-child{padding-left:0}.uni-navbar-header .uni-navbar-header-btns[data-v-7433d344]:last-child{width:%?60?%}.uni-navbar-container[data-v-7433d344]{width:100%;margin:0 %?10?%}.uni-navbar-container-title[data-v-7433d344]{font-size:%?30?%;text-align:center;padding-right:%?60?%}",""])},a34a:function(t,e,i){t.exports=i("bbdd")},a6bb:function(t,e,i){"use strict";i.r(e);var n=i("cf13"),a=i("c736");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("c745");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"0ed8d87e",null);s.options.__file="uni-load-more.vue",e["default"]=s.exports},a9a5:function(t,e,i){"use strict";var n=i("0714"),a=i.n(n);a.a},bbdd:function(t,e,i){var n=function(){return this||"object"===typeof self&&self}()||Function("return this")(),a=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=a&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=i("96cf"),a)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(r){n.regeneratorRuntime=void 0}},c3e4:function(t,e,i){var n=i("16f2");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("43b2a582",n,!0,{sourceMap:!1,shadowMode:!1})},c736:function(t,e,i){"use strict";i.r(e);var n=i("f859"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},c745:function(t,e,i){"use strict";var n=i("c3e4"),a=i.n(n);a.a},ceb6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(i("a34a")),a=s(i("0666")),o=s(i("e390")),r=s(i("a6bb"));function s(t){return t&&t.__esModule?t:{default:t}}function l(t,e,i,n,a,o,r){try{var s=t[o](r),l=s.value}catch(u){return void i(u)}s.done?e(l):Promise.resolve(l).then(n,a)}function u(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var o=t.apply(e,i);function r(t){l(o,n,a,r,s,"next",t)}function s(t){l(o,n,a,r,s,"throw",t)}r(void 0)})}}var c={components:{uniNavBar:a.default,uniIcon:o.default,uniLoadMore:r.default},data:function(){return{isup1:1,isup2:2,ishide:!1,isactive:0,city:"北京",background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,loadingText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},scrollLeft:0,isClickChange:!1,tabIndex:0,newsitems:[],data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639,image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90"},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data3:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:69},data4:{article_type:3,image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",datetime:"5分钟前",title:"uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11},tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}]}},onLoad:function(){var t=this;uni.request({url:"https://www.easy-mock.com/mock/5c452857bb90bc4fbccc932c/try/index",method:"GET",data:{},success:function(e){t.newsitems=e.data.newsitems}})},methods:{showCity:function(){uni.showToast({title:"选择城市"})},loadMore:function(t){var e=this;this.newsitems[t].loadingType=1,setTimeout(function(){e.addData(t)},1200)},addData:function(t){if(console.log(t),this.newsitems[t].data.length>30)this.newsitems[t].loadingType=2;else{for(var e=1;e<=10;e++)this.newsitems[t].data.push(this["data"+Math.floor(5*Math.random())]);this.newsitems[t].loadingType=1}},changeTab:function(){var t=u(n.default.mark(function t(e){var i,a,o,r,s,l,u,c,d;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.detail.current,!this.isClickChange){t.next=5;break}return this.tabIndex=i,this.isClickChange=!1,t.abrupt("return");case 5:return t.next=7,this.getElSize("tab-bar");case 7:a=t.sent,o=a.scrollLeft,r=0,s=0;case 11:if(!(s<i)){t.next=19;break}return t.next=14,this.getElSize(this.tabBars[s].id);case 14:l=t.sent,r+=l.width;case 16:s++,t.next=11;break;case 19:return u=uni.getSystemInfoSync().windowWidth,t.next=22,this.getElSize(this.tabBars[i].id);case 22:c=t.sent,d=c.width,r+d-o>u&&(this.scrollLeft=r+d-u),r<o&&(this.scrollLeft=r),this.isClickChange=!1,this.tabIndex=i;case 28:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getElSize:function(t){return new Promise(function(e,i){uni.createSelectorQuery().select("#"+t).fields({size:!0,scrollOffset:!0},function(t){e(t)}).exec()})},tapTab:function(){var t=u(n.default.mark(function t(e){var i,a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.tabIndex!==e){t.next=4;break}return t.abrupt("return",!1);case 4:return t.next=6,this.getElSize("tab-bar");case 6:i=t.sent,a=i.scrollLeft,this.scrollLeft=a,this.isClickChange=!0,this.tabIndex=e;case 11:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),randomfn:function(){for(var t=[],e=0,i=this.tabBars.length;e<i;e++){for(var n={loadingType:0,data:[]},a=1;a<=10;a++)n.data.push(this["data"+Math.floor(5*Math.random())]);t.push(n)}return t},scrollyfn:function(t){this.ishide=t.detail.scrollTop>10},activefn:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isactive=t,1==e||-1==e?this.isup1=-e:this.isup2=-e,this.data1.image_url="http://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/761686079/TB2gh32ov9TBuNjy1zbXXXpepXa_!!761686079.jpg_430x430q90.jpg"}}};e.default=c},cf13:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.loadingType&&t.showImage,expression:"loadingType === 1 && showImage"}],staticClass:"loading-img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"loading-text",style:{color:t.color}},[t._v(t._s(0===t.loadingType?t.contentText.contentdown:1===t.loadingType?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},d387:function(t,e,i){"use strict";i.r(e);var n=i("2e5c"),a=i("ea8d");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("a9a5");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"e8e381f6",null);s.options.__file="index.vue",e["default"]=s.exports},d9b4:function(t,e,i){"use strict";i.r(e);var n=i("e689"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},da18:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},da6b:function(t,e,i){"use strict";i.r(e);var n=i("7a1b"),a=i("d9b4");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("8ea1");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"99412fec",null);s.options.__file="uni-status-bar.vue",e["default"]=s.exports},df28:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},e390:function(t,e,i){"use strict";i.r(e);var n=i("da18"),a=i("4522");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);s.options.__file="uni-icon.vue",e["default"]=s.exports},e689:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={computed:{style:function(){}}};e.default=n},ea8d:function(t,e,i){"use strict";i.r(e);var n=i("ceb6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},f852:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-status-bar[data-v-99412fec]{display:block;width:100%;height:20px;height:0}",""])},f859:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"load-more",props:{loadingType:{type:Number,default:0},showImage:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=n}}]);