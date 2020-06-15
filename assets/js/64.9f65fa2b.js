(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{384:function(t,v,a){"use strict";a.r(v);var e=a(33),r=Object(e.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fallback，命名路由，meta，children，transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fallback，命名路由，meta，children，transition"}},[t._v("#")]),t._v(" fallback，命名路由，meta，children，transition")]),t._v(" "),a("h3",{attrs:{id:"fallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fallback"}},[t._v("#")]),t._v(" fallback")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/vue-15-1.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("首先，因为不是所有的浏览器都支持 history 形式的前端路由方式。")]),t._v(" "),a("p",[t._v("那么在浏览器不支持的情况下，vue 会自动的给我们 fallback 到 hash 的模式。")]),t._v(" "),a("p",[t._v("如果你觉得你不需要 vue 帮我们这么做，也可以给它设置成 fallback: false。")]),t._v(" "),a("p",[t._v("但是如果这么做，我们的单页应用就会变成多页应用。")]),t._v(" "),a("p",[t._v("我们每次路由跳转都会到我们的后端，然后再去返回新的内容。这个就比较耗时。")]),t._v(" "),a("p",[t._v("所以一般来说，我们都会去设置成 fallback: true，让它自动去处理就可以了。")]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"路由的命名："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由的命名："}},[t._v("#")]),t._v(" 路由的命名：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/vue-15-2.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("我们可以给路由进行一个命名，name: 'xxx'。这个名字可以跟 path 没有任何的关系。")]),t._v(" "),a("p",[t._v("那么它有什么用呢？我们可以通过 name 进行路由的一个跳转。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/vue-15-3.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("我们把原先的 to = '/hello' 改成了 :to = \" { name: 'hello' } \"。")]),t._v(" "),a("p",[t._v("因为我们传的是一个 json 的对象，我们希望 vue 去解析它，而不是把它当做一个字符串来处理，所以我们需要用 v-bind 进行一个数据的绑定。")]),t._v(" "),a("p",[t._v("这个写法和直接写字符串效果是一模一样的，那么为什么要使用它呢？")]),t._v(" "),a("p",[t._v("因为，如果你的项目只是 1，2 个页面用了相同的路由，那么没有太大关系。")]),t._v(" "),a("p",[t._v("如果一个项目中，涉及到相同路由的页面有几十个，后期需要更改某个路由的时候，你需要去到几十个页面中，一个一个的更改，这样就比较难维护了。")]),t._v(" "),a("p",[t._v("而用了 name，只需要在路由配置里面更改一次就可以了。这就是命名路由的用处。")]),t._v(" "),a("h3",{attrs:{id:"meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),a("p",[t._v("meta 其实是用来保存路由里面的一些信息。")]),t._v(" "),a("p",[t._v("因为我们知道，在写 html 的时候，我们在 head 标签里面会写一些 meta，我们称为页面的源信息。")]),t._v(" "),a("p",[t._v("那么这些信息会有利于我们去处理一些 SEO 的东西，比如说我们用了 description。")]),t._v(" "),a("p",[t._v("那么搜索引擎会根据 description 里面的内容，去排列它们的一个搜索结果。")]),t._v(" "),a("p",[t._v("因为这些信息我们在写 vue 组件的时候，很难在组件里面去写这些东西。")]),t._v(" "),a("p",[t._v("那么我们就可以在路由配置里面，去给每个配置加个 meta。我们可以在 meta 里面写任何你想用到的一些东西。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/vue-15-4.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("这些信息，你都可以在拿到路由 route 对象的时候，你可以通过 this.$route.meta 去拿到，然后你可以去进行一些操作。")]),t._v(" "),a("p",[t._v("首先你要知道，你在路由配置里面，不是你传的所有东西，你在拿到路由 route 对象的时候，都可以拿到你写在里面的内容，它是有规定的。")]),t._v(" "),a("p",[t._v("所以一般来说，一些跟路由没什么关系的配置，你基本上都要写在 meta 里面，才能在你想用的时候去拿到它。不然的话会被 vue 进行一个忽视。")]),t._v(" "),a("h3",{attrs:{id:"children"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#children"}},[t._v("#")]),t._v(" children")]),t._v(" "),a("p",[t._v("children 它也是一个数组。它就跟我们路由最外层的列表一样。它是在某个路由下面配置的子路由。比如：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/vue-15-5.png",alt:"在这里插入图片描述"}}),t._v("\n有了这个 children 之后，我们的路径可以去访问 /hello/test。当然我们现在是访问不到的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/vue-15-6.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("我们可以看到，跟我们现在访问的页面，没有任何的区别。这是因为我们没有加 "),a("router-view"),t._v("。")],1),t._v(" "),a("p",[t._v("因为我们路由匹配的内容，其实都是通过 router-view 这个占位符，把它去显示进去的。")]),t._v(" "),a("p",[t._v("也就是说我们声明了这个路径，它的组件是 Login。那么这个 Login 组件要放到哪个地方去呢，就是 router-view 所占据的地方。")]),t._v(" "),a("p",[t._v("当路由匹配到这个路径的时候，它就会占据到 router-view 这个位置。")]),t._v(" "),a("p",[t._v("既然我们是给 /hello 下面去加了一个 children，那么它这个 router-view，就肯定是在 Hello 这个组件里面的。")]),t._v(" "),a("p",[t._v("所以我们要在 Hello 组件里面去放一个 router-view，然后在匹配到 /test 路径的时候，它就会去显示这个 Login。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/vue-15-7.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("这就是一个嵌套路由的概念。就是我们的路由下面，可以放它的子路由，然后子路由显示的内容，你可以根据 router-view 做一个显示。")]),t._v(" "),a("h3",{attrs:{id:"transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transition"}},[t._v("#")]),t._v(" transition")]),t._v(" "),a("p",[t._v("vue 里面是有一个 transition 的东西，也就是一个过渡的动画。我们可以在 router-view 外面，给它包一层 transition。\n"),a("img",{attrs:{src:"/img/vue-15-8.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[t._v("transition 的功能：它可以给我们的组件加上一些，显示和消失，或者是其他的一些东西提供给我们一些过渡的动画。")]),t._v(" "),a("p",[t._v("加了 transition 之后，我们再切换路由就可以看到，有一个渐入渐出的效果了。")]),t._v(" "),a("p",[t._v("如果你要在给单个组件上面，去使用一个 transition 的效果，你只需要把这个 transition 包裹住单个组件就可以了。")]),t._v(" "),a("p",[t._v("你如果包裹住一个 router-view，那么它会作用于每一个路由的切换")])])}),[],!1,null,null,null);v.default=r.exports}}]);