(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{309:function(t,s,a){},311:function(t,s,a){},312:function(t,s,a){"use strict";var n=a(309);a.n(n).a},313:function(t,s,a){"use strict";a.r(s);var n={computed:{tags:function(){return this.$page.frontmatter.tags}}},r=(a(312),a(25)),e=Object(r.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._v("\n  Tags:\n  "),t._l(t.tags,(function(s){return a("router-link",{key:s,staticClass:"tag",attrs:{to:{path:"/tags.html#"+s}}},[t._v("\n    "+t._s(s)+"\n  ")])}))],2)}),[],!1,null,"bcf650bc",null);s.default=e.exports},328:function(t,s,a){"use strict";var n=a(311);a.n(n).a},335:function(t,s,a){"use strict";a.r(s);a(313);var n={name:"BlogCard",props:["post"]},r=(a(328),a(25)),e=Object(r.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"container"}},[a("a",{staticClass:"card-link",attrs:{href:t.post.path}},[a("article",{staticClass:"blog-card"},[a("div",{staticClass:"article-details"},[a("h4",{staticClass:"post-category"},[t._v(" Category: "+t._s(t.post.frontmatter.category)+" ")]),t._v(" "),a("h3",{staticClass:"post-title"},[t._v(" "+t._s(t.post.title)+" ")]),t._v(" "),a("p",{staticClass:"post-description"},[t._v(t._s(t.post.frontmatter.description))]),t._v("\n                Tags: \n                "),t._l(t.post.frontmatter.tags,(function(s){return a("router-link",{key:s,staticClass:"tag",attrs:{to:{path:"/blog/#"+s}}},[t._v("\n                    "+t._s(s)+"\n                ")])}))],2)])])])}),[],!1,null,"3f4a22d7",null);s.default=e.exports}}]);