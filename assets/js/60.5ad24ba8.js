(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{380:function(t,s,a){"use strict";a.r(s);var e=a(33),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"插槽，具名插槽，作用域插槽-slot-scope，provide-和-inject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插槽，具名插槽，作用域插槽-slot-scope，provide-和-inject"}},[t._v("#")]),t._v(" 插槽，具名插槽，作用域插槽 slot-scope，provide 和 inject")]),t._v(" "),a("h3",{attrs:{id:"插槽：我们在去定义一个组件的时候，有时候在这个组件里面，要去显示的一部分内容。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插槽：我们在去定义一个组件的时候，有时候在这个组件里面，要去显示的一部分内容。"}},[t._v("#")]),t._v(" 插槽：我们在去定义一个组件的时候，有时候在这个组件里面，要去显示的一部分内容。")]),t._v(" "),a("p",[t._v("那么我们希望是在去调用这个组件的时候，再到里面去写。比如：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/vue-11-1.png",alt:"在这里插入图片描述"}}),t._v("\n按照我们 html 节点的使用方式来讲，我们定义了这个组件之后，它里面肯定是可以放内容的：\n"),a("img",{attrs:{src:"/img/vue-11-2.png",alt:"在这里插入图片描述"}}),t._v("\n但是我们发现这么写，Vue 并没有帮我们把内容给显示出来，这是因为 component 它是一个组件，并不是我们传统的 html 节点。")]),t._v(" "),a("p",[t._v("它没有模板里面的上下层级关系。它在解析的时候，在 component 组件内部会定义好，有一个变量去调用我们去申明的东西")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("但是，我们并没有给 Vue 通知，我们把它里面传进来的这些东西放到哪个地方去显示。这就是 slot，插槽组件。\n"),a("img",{attrs:{src:"/img/vue-11-3.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("h3",{attrs:{id:"具名插槽："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具名插槽："}},[t._v("#")]),t._v(" 具名插槽：")]),t._v(" "),a("p",[t._v("那如果有两段内容，并且需要放到不同的地方去呢？")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/vue-11-4.png",alt:"在这里插入图片描述"}}),t._v("\n这就是具名插槽的概念。有了这些东西，我们在使用组件的时候，它的自定义内容就会变的非常方便，可以去实现一些功能强大的组件。")]),t._v(" "),a("p",[t._v("作用域插槽：")]),t._v(" "),a("p",[t._v("那么有些情况，我们定义了模板，但是我们想要使用的是 component 里面的一些属性，怎么办呢？\n"),a("img",{attrs:{src:"/img/vue-11-5.png",alt:"在这里插入图片描述"}}),t._v("\n我们给 slot-scope 传一个名字 props 。然后我们就可以使用 props.xxx 去引用到 component 组件里面，定义在 slot 上面的 xxx 属性。")]),t._v(" "),a("p",[t._v("它们会作为一个对象上面的内容，放到 props 上面。然后我们就可以通过 props.xxx 来调用它们。")]),t._v(" "),a("p",[t._v("所谓的作用域插槽，就是说这个插槽上面，它是有它自己的作用域的，我们可以使用它这个作用域里面传出去的任何值。")]),t._v(" "),a("p",[t._v("同样的，我们也可以使用 v-bind 的方式，动态传值：\n"),a("img",{attrs:{src:"/img/vue-11-6.png",alt:"在这里插入图片描述"}}),t._v("\n同时，我们也可以调用本地的 val：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/vue-11-7.png",alt:"在这里插入图片描述"}}),t._v("\n当我们给组件和标签都加上 ref 的时候，会得到什么东西？\n"),a("img",{attrs:{src:"/img/vue-11-8.png",alt:"在这里插入图片描述"}}),t._v("\n我们可以看到，第一个是 VueComponent，第二个是 html 的节点。这就是 ref 用在组件和 html 原生标签上面的区别。")]),t._v(" "),a("p",[t._v("我们可以在 ref 上调用到组件的变量或者方法，但是一般不要使用这种方式去做。")]),t._v(" "),a("p",[t._v("如果你要去操作一个组件，你可以通过 props 去传一些属性，组件提供 props 的目的就是为了让你去操作的。")]),t._v(" "),a("p",[t._v("如果直接通过 ref 去操作，可能会出现一些问题，在团队协作中，也会让其他人看不懂你的代码。")]),t._v(" "),a("p",[t._v("当然如果遇到了一些特殊的情况，或者在写一些高级组件的时候，确实需要这么去做，也可以使用这种方式去实现你的需求。")]),t._v(" "),a("p",[t._v("但是尽量不要乱用。")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"子组件可以调用父组件，那么孙子组件可以调用爷爷组件吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件可以调用父组件，那么孙子组件可以调用爷爷组件吗？"}},[t._v("#")]),t._v(" 子组件可以调用父组件，那么孙子组件可以调用爷爷组件吗？")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/vue-11-9.png",alt:"在这里插入图片描述"}}),t._v("\n我们在 provide 初始化的时候，Vue 对象其实还没有真正的初始化成功，如果我们要进行一些和 Vue 对象上面挂钩的一些值的传递的时候。")]),t._v(" "),a("p",[t._v("我们要提供给 provide 一个 function，然后我们在里面去 return 这个对象，就和 data 一样。")]),t._v(" "),a("p",[t._v("Vue 的组件结构是一个树状结构，在 new Vue() 这个组件下面的所有节点，都可以拿到 provide 的对象。")]),t._v(" "),a("p",[t._v("在 Vue 的官方文档里面说到，这个方法不推荐去使用，因为将来这种使用方式可能会被改掉。")]),t._v(" "),a("p",[t._v("但是你要知道 provide 和 inject 帮我们解决了一些什么问题：")]),t._v(" "),a("p",[t._v("在不是父子组件关系，而是跨层级的关系里面，去提供一个上下文关系的时候，我们就需要去使用到 provide")])])}),[],!1,null,null,null);s.default=n.exports}}]);