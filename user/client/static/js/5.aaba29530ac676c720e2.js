webpackJsonp([5],{gAlH:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("j8vk"),i("mtWM");var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"crumbs"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",[i("i",{staticClass:"el-icon-tickets"}),t._v("项目申报指南文件下载")])],1)],1),t._v(" "),i("el-card",{staticStyle:{"border-radius":"15px",height:"auto"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("项目申报指南文件")])]),t._v(" "),i("div",{staticClass:"text item",staticStyle:{"text-align":"left",height:"600px",overflow:"auto"}},t._l(t.fileList,function(e){return i("p",{key:e.id},[i("el-card",{staticStyle:{width:"auto"}},[i("i",{staticClass:"el-icon-document"}),i("a",{staticStyle:{color:"#333333"},attrs:{href:t.rooturl+e.url}},[t._v(t._s(e.name.slice(14)))]),t._v(" "),i("br"),i("span",{staticStyle:{float:"right","font-size":"12px",color:"#6f7180"}},[t._v(t._s("——"+e.type))])])],1)}))])],1)},staticRenderFns:[]};var s=i("VU/8")({data:function(){return{fileList:[],rooturl:"http://49.4.80.58:3000"}},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.$api.get("/api/Notices",null,function(e){t.fileList=e})}}},a,!1,function(t){i("q48j")},"data-v-05b3dbe0",null);e.default=s.exports},j8vk:function(t,e,i){t.exports=i.p+"static/img/pic3.12e356f.jpg"},q48j:function(t,e){}});