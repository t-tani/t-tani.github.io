(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,5],{309:function(t,s,n){},311:function(t,s,n){},312:function(t,s,n){"use strict";var a=n(309);n.n(a).a},313:function(t,s,n){"use strict";n.r(s);var a={computed:{tags:function(){return this.$page.frontmatter.tags}}},r=(n(312),n(25)),e=Object(r.a)(a,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[t._v("\n  Tags:\n  "),t._l(t.tags,(function(s){return n("router-link",{key:s,staticClass:"tag",attrs:{to:{path:"/tags.html#"+s}}},[t._v("\n    "+t._s(s)+"\n  ")])}))],2)}),[],!1,null,"bcf650bc",null);s.default=e.exports},328:function(t,s,n){"use strict";var a=n(311);n.n(a).a},335:function(t,s,n){"use strict";n.r(s);n(313);var a={name:"BlogCard",props:["post"]},r=(n(328),n(25)),e=Object(r.a)(a,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"container"}},[n("a",{staticClass:"card-link",attrs:{href:t.post.path}},[n("article",{staticClass:"blog-card"},[n("div",{staticClass:"article-details"},[n("h4",{staticClass:"post-category"},[t._v(" Category: "+t._s(t.post.frontmatter.category)+" ")]),t._v(" "),n("h3",{staticClass:"post-title"},[t._v(" "+t._s(t.post.title)+" ")]),t._v(" "),n("p",{staticClass:"post-description"},[t._v(t._s(t.post.frontmatter.description))]),t._v("\n                Tags: \n                "),t._l(t.post.frontmatter.tags,(function(s){return n("router-link",{key:s,staticClass:"tag",attrs:{to:{path:"/blog/#"+s}}},[t._v("\n                    "+t._s(s)+"\n                ")])}))],2)])])])}),[],!1,null,"3f4a22d7",null);s.default=e.exports},363:function(t,s,n){"use strict";n.r(s);n(26),n(335);var a={computed:{posts:function(){return this.$site.pages.filter((function(t){return"post"===t.type}))}}},r=n(25),e=Object(r.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",this._l(this.posts,(function(t){return s("p",[s("BlogCard",{attrs:{post:t}})],1)})),0)}),[],!1,null,null,null);s.default=e.exports}}]);