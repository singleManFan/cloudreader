(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{1745:function(t,e,n){"use strict";var o=n("5e3c"),r=n.n(o);r.a},"1beb":function(t,e,n){"use strict";(function(t){n("ac90"),n("921b");o(n("66fd"));var e=o(n("715b"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"5e3c":function(t,e,n){},"715b":function(t,e,n){"use strict";n.r(e);var o=n("a4c6"),r=n("f31e");for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);n("1745");var i,u=n("f0c5"),a=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"83c86004",null,!1,o["a"],i);e["default"]=a.exports},"984b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("4795"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,o,r,s,i){try{var u=t[s](i),a=u.value}catch(c){return void n(c)}u.done?e(a):Promise.resolve(a).then(o,r)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function u(t){s(i,o,r,u,a,"next",t)}function a(t){s(i,o,r,u,a,"throw",t)}u(void 0)}))}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={computed:{dataHave:function(){return!!this.$store.state.qsList.length},hideTags:function(){return!!this.$store.state.typing},showNoResul:function(){return!this.$store.state.qsList.length&&this.$store.state.typing},userInfo:function(){return this.$store.state.userInfo}},data:function(){var t;return t={showToTop:!1,scrollTop:0,old:{scrollTop:0}},u(t,"showToTop",!1),u(t,"route",""),u(t,"qs",""),u(t,"hot__tags",[{name:"言情",id:1},{name:"穿越",id:2},{name:"紫阳帝尊",id:3}]),u(t,"history__tags",[]),t},methods:{getHistory:function(){var t=this;return i(o.default.mark((function e(){var n;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wx.cloud.callFunction({name:"getHistories"});case 2:n=e.sent,n.result.data.length&&n.result.data[0].histories.length&&(t.history__tags=n.result.data[0].histories);case 4:case"end":return e.stop()}}),e)})))()},goTopHandle:function(){var t=this;this.scrollTop=0,this.scrollTop=this.old.scrollTop,this.$nextTick((function(){t.scrollTop=0}))},scrollHandle:function(t){this.old.scrollTop=t.detail.scrollTop,t.detail.scrollTop>666?this.showToTop=!0:this.showToTop=!1},qsHandle:function(t){this.qs=t},clearHandle:function(){this.history__tags.length&&(this.history__tags=[],wx.cloud.callFunction({name:"clearHistories"}))}},onLoad:function(){var e=i(o.default.mark((function e(n){var r,s,i,u,a;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.qs&&(r=n.qs,s=decodeURIComponent(r).split("/"),this.qs=s),i=getCurrentPages(),u=i[i.length-1],a=u.route,this.route=a,this.$store.commit("qsList",[]),this.$store.commit("typing",!1),t.showLoading({title:"加载中..."}),e.next=10,this.getHistory();case 10:t.hideLoading();case 11:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}()};e.default=a}).call(this,n("543d")["default"])},a4c6:function(t,e,n){"use strict";var o={Search:function(){return Promise.all([n.e("common/vendor"),n.e("components/Search/Search")]).then(n.bind(null,"aa14"))},QueryList:function(){return n.e("components/QueryList/QueryList").then(n.bind(null,"bf81"))},NoResult:function(){return n.e("components/NoResult/NoResult").then(n.bind(null,"aa0b"))},ToTop:function(){return n.e("components/ToTop/ToTop").then(n.bind(null,"754c"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,{position:"absolute",bottom:"15vh",right:"6vw"});t.$mp.data=Object.assign({},{$root:{a0:n}})},s=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return o}))},f31e:function(t,e,n){"use strict";n.r(e);var o=n("984b"),r=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,(function(){return o[t]}))}(s);e["default"]=r.a}},[["1beb","common/runtime","common/vendor"]]]);