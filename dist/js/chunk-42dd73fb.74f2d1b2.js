(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42dd73fb"],{"0861":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("Header",{attrs:{title:"夏日温情"}}),n("div",{attrs:{id:"content"}},[n("div",{staticClass:"movie_menu"},[n("router-link",{staticClass:"city_name",attrs:{tag:"div",to:"/movie/city"}},[n("span",[t._v(t._s(t.$store.state.city.nm))]),n("i",{staticClass:"iconfont icon-lower-triangle"})]),n("div",{staticClass:"hot_swtich"},[n("router-link",{staticClass:"hot_item",attrs:{tag:"div",to:"/movie/nowPlaying"}},[t._v("正在热映")]),n("router-link",{staticClass:"hot_item",attrs:{tag:"div",to:"/movie/comingSoon"}},[t._v("即将上映")])],1),n("router-link",{staticClass:"search_entry",attrs:{tag:"div",to:"/movie/search"}},[n("i",{staticClass:"iconfont icon-sousuo"})])],1),n("keep-alive",[n("router-view")],1)],1),n("Tabbar"),n("router-view",{attrs:{name:"detail"}})],1)},i=[],o=n("981c"),c=n("4bdd"),s=n("2b0e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"messageBox"},[n("h2",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.content))]),n("div",[n("div",{on:{touchstart:t.handleCancel}},[t._v(t._s(t.cancel))]),n("div",{on:{touchstart:t.handleOk}},[t._v(t._s(t.ok))])])])},r=[],d={name:"MessageBox"},u=d,v=(n("bfdc"),n("2877")),f=Object(v["a"])(u,l,r,!1,null,"fa4aece8",null),m=f.exports,h=function(){return function(t){var e={title:"",content:"",cancel:"",ok:"",handleCancel:null,handleOk:null},n=s["a"].extend(m);for(var a in t)e[a]=t[a];var i=new n({el:document.createElement("div"),data:{title:e.title,content:e.content,cancel:e.cancel,ok:e.ok},methods:{handleCancel:function(){e.handleCancel&&e.handleCancel.call(this),document.body.removeChild(i.$el)},handleOk:function(){e.handleOk&&e.handleOk.call(this),document.body.removeChild(i.$el)}}});document.body.appendChild(i.$el)}}(),_={name:"Movie",components:{Header:o["a"],Tabbar:c["a"]},mounted:function(){var t=this;setTimeout((function(){t.axios.get("/api/getLocation").then((function(e){var n=e.data.msg;if("ok"===n){var a=e.data.data.nm,i=e.data.data.id;if(t.$store.state.city.id==i)return;h({title:"定位",content:a,cancel:"取消",ok:"切换定位",handleOk:function(){window.localStorage.setItem("nowNm",a),window.localStorage.setItem("nowId",i),window.location.reload()}})}}))}),3e3)}},b=_,k=(n("3080"),Object(v["a"])(b,a,i,!1,null,"0ffeb9b2",null));e["default"]=k.exports},1664:function(t,e,n){},2234:function(t,e,n){"use strict";var a=n("fffc"),i=n.n(a);i.a},"28bb":function(t,e,n){"use strict";var a=n("1664"),i=n.n(a);i.a},3080:function(t,e,n){"use strict";var a=n("8ba0"),i=n.n(a);i.a},"4bdd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"footer"}},[n("ul",[n("router-link",{attrs:{tag:"li",to:"/movie"}},[n("i",{staticClass:"iconfont icon-dianying"}),n("p",[t._v("电影")])]),n("router-link",{attrs:{tag:"li",to:"/cinema"}},[n("i",{staticClass:"iconfont icon-yingyuan"}),n("p",[t._v("影院")])]),n("router-link",{attrs:{tag:"li",to:"mine"}},[n("i",{staticClass:"iconfont icon-wode"}),n("p",[t._v("我的")])])],1)])},i=[],o={},c=o,s=(n("28bb"),n("2877")),l=Object(s["a"])(c,a,i,!1,null,"13feca25",null);e["a"]=l.exports},"5ce6":function(t,e,n){},"8ba0":function(t,e,n){},"981c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"header"}},[t._t("default"),t._v(" "),n("h1",[t._v(t._s(t.title))])],2)},i=[],o={name:"Header",props:{title:{type:String,default:"夏日温情"}}},c=o,s=(n("2234"),n("2877")),l=Object(s["a"])(c,a,i,!1,null,null,null);e["a"]=l.exports},bfdc:function(t,e,n){"use strict";var a=n("5ce6"),i=n.n(a);i.a},fffc:function(t,e,n){}}]);
//# sourceMappingURL=chunk-42dd73fb.74f2d1b2.js.map