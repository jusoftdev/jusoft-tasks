(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"2cd8":function(t,e,a){},"3be1":function(t,e,a){"use strict";a("2cd8")},a9c3:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh lpR fFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-toolbar-title",{staticClass:"absolute-center"},[t._v("\n        JuSoft Tasks\n      ")]),t.loggedIn?a("q-btn",{staticClass:"absolute-right",attrs:{"icon-right":"account_circle",label:"Logout",flat:""},on:{click:t.logoutUser}}):a("q-btn",{staticClass:"absolute-right",attrs:{to:"/auth","icon-right":"account_circle",label:"Login",flat:""}})],1)],1),a("q-footer",[a("q-tabs",t._l(t.navs,(function(t){return a("q-route-tab",{key:t.label,attrs:{to:t.to,icon:t.icon,label:t.label}})})),1)],1),a("q-drawer",{attrs:{breakpoint:767,width:250,"show-if-above":"",bordered:"","content-class":"bg-primary"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",{attrs:{dark:""}},[a("q-item-label",{attrs:{header:""}},[t._v("\n        Navigation\n      ")]),t._l(t.navs,(function(e){return a("q-item",{key:e.label,staticClass:"text-grey-4",attrs:{to:e.to,exact:"",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.label))])],1)],1)}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},n=[],l=a("ded3"),r=a.n(l),s=a("2f62"),c={name:"MainLayout",data(){return{leftDrawerOpen:!1,navs:[{label:"Todo",icon:"list",to:"/"},{label:"Settings",icon:"settings",to:"/settings"}]}},computed:r()({},Object(s["d"])("auth",["loggedIn"])),methods:r()({},Object(s["b"])("auth",["logoutUser"]))},i=c,b=(a("3be1"),a("2877")),u=a("4d5a"),d=a("e359"),f=a("65c6"),g=a("6ac5"),q=a("9c40"),p=a("7ff0"),h=a("429b"),m=a("7867"),w=a("9404"),v=a("1c1c"),Q=a("0170"),k=a("66e5"),_=a("4074"),y=a("0016"),O=a("09e3"),T=a("eebe"),I=a.n(T),L=Object(b["a"])(i,o,n,!1,null,null,null);e["default"]=L.exports;I()(L,"components",{QLayout:u["a"],QHeader:d["a"],QToolbar:f["a"],QToolbarTitle:g["a"],QBtn:q["a"],QFooter:p["a"],QTabs:h["a"],QRouteTab:m["a"],QDrawer:w["a"],QList:v["a"],QItemLabel:Q["a"],QItem:k["a"],QItemSection:_["a"],QIcon:y["a"],QPageContainer:O["a"]})}}]);