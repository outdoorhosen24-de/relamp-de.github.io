(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{294:function(e,t,n){"use strict";n.r(t);n(200);var o=n(19),r=n(141),l={name:"brandComponent",head:function(){return{title:o.seo.hersteller?o.seo.hersteller.title:o.seo.mainKeyword+" Shop",meta:[{hid:"description",name:"description",content:o.seo.hersteller&&o.seo.hersteller.metaDescription?o.seo.hersteller.metaDescription:o.seo.mainKeyword+" Shop"},{hid:"robots",name:"robots",content:o.seo.hersteller&&o.seo.hersteller.robots?o.seo.hersteller.robots:"noindex, follow"}]}},data:function(){var e=r.sort((function(a,b){return a.key>b.key?1:-1}));return{config:o,brands:e}}},c=n(16),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container-fluid py-5"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-12 fadeInUp"},[n("ul",{staticClass:"list-group text-center"},e._l(e.brands,(function(t,o){return n("li",{key:o,staticClass:"list-group-item h2"},[n("nuxt-link",{attrs:{to:"/marken/"+t.slug+"/",title:e.config.seo.mainKeyword+" von "+t.name},domProps:{innerHTML:e._s(t.name)}})],1)})),0)])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);