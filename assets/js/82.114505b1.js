(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{402:function(t,v,e){"use strict";e.r(v);var _=e(33),s=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"解绑模块，watch，subscribe-和-subscribeaction，plugins，vuex-整体结构和运行过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解绑模块，watch，subscribe-和-subscribeaction，plugins，vuex-整体结构和运行过程"}},[t._v("#")]),t._v(" 解绑模块，watch，subscribe 和 subscribeAction，plugins，Vuex 整体结构和运行过程")]),t._v(" "),e("h3",{attrs:{id:"vuex-其他的一些-api："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuex-其他的一些-api："}},[t._v("#")]),t._v(" Vuex 其他的一些 API：")]),t._v(" "),e("p",[t._v("解绑模块：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/vuex-6-1.png",alt:"在这里插入图片描述"}})]),t._v(" "),e("h3",{attrs:{id:"store-watch："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#store-watch："}},[t._v("#")]),t._v(" store.watch：")]),t._v(" "),e("p",[t._v("store.watch 和我们 Vue 对象的 $watch 是不太一样的。")]),t._v(" "),e("p",[t._v("首先它接收的第一个参数是一个方法，这个方法第一个参数是 state。拿到 state 之后，我们这边就可以去监听一个我们想要得到的返回值。")]),t._v(" "),e("p",[t._v("第二个参数也是一个方法，这个方法就是在我们第一个参数方法的返回值，有变化的时候，才会去调用第二个方法作为它的一个回调函数。")]),t._v(" "),e("p",[t._v("我们可以把它理解为，我们定义了一个 getters，它相当于就是一个 getters 方法。")]),t._v(" "),e("p",[t._v("它接收一个 state，然后返回一个新的值，只不过它一定要是一个方法的形式，我们不能直接拿 store 里面定义好的 getters，因为定义好的 getters 它是一个 getters 方法，我们直接调用它，返回的是一个值，而不是一个方法。\n"),e("img",{attrs:{src:"/img/vuex-6-2.png",alt:"在这里插入图片描述"}})]),t._v(" "),e("p",[t._v("从上面可以推算出，我们一旦去更改了 state 里面 count 的值，后面的回调函数就会被调用，如果不改就不会被调用。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/vuex-6-3.png",alt:"在这里插入图片描述"}}),t._v("\n可以看到，每次 count 有变化，我们提供的回调都会被调用，然后拿到一个新的值，这就是在 store 里面 watch 的用法。")]),t._v(" "),e("h3",{attrs:{id:"接下来的-2-个-api-基本上我们都是用在-vuex-的插件里面："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接下来的-2-个-api-基本上我们都是用在-vuex-的插件里面："}},[t._v("#")]),t._v(" 接下来的 2 个 API 基本上我们都是用在 Vuex 的插件里面：")]),t._v(" "),e("p",[t._v("store.subscribe 就是订阅，它会拿到所有 mutation 的变化，每次有一个 mutation 被调用，它都会调用我们这边提供的回调函数。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/vuex-6-4.png",alt:"在这里插入图片描述"}})]),t._v(" "),e("p",[e("strong",[t._v("payload")]),t._v(" 就是当前 mutation 它接收到的参数，我们都可以在这个回调里面去拿到。")]),t._v(" "),e("p",[t._v("那么我们在这里面就可以知道我们调用了哪个 mutation 以及我们调这个 mutation 的时候接收的参数。\n"),e("img",{attrs:{src:"/img/vuex-6-5.png",alt:"在这里插入图片描述"}})]),t._v(" "),e("p",[t._v("可以看到，它打印出我们调用的是哪个 mutation，以及我们传入的值。")]),t._v(" "),e("p",[t._v("所以我们可以用它做一些操作或者记录，比如最简单的，我们每次有一个 mutation 被调用了我们都可以去打印个 log，这样的话，如果你出现了重复调用的过程，那么你可以很快的就知道，是哪个 mutation 被重复调用了，当然你也可以去做一些 Vuex 的插件来帮助你去提升你的工作效率。")]),t._v(" "),e("p",[t._v("与 "),e("strong",[t._v("mutation")]),t._v("对应的，我们还有一个 "),e("strong",[t._v("store.subscribeAction")]),t._v("，就是监听 "),e("strong",[t._v("action")]),t._v("了：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/vuex-6-6.png",alt:"在这里插入图片描述"}})]),t._v(" "),e("p",[t._v("相信大家看到这 2 个 subscribe 的插件使用方法之后，就知道为什么 Vuex 一定要去规定我们的 mutation 和 action，它接收的第二个参数必须是一个 object，而且它不接收第三个参数。")]),t._v(" "),e("p",[t._v("因为只有通过这种方法，我们在 subscribe 的时候，才能把所有的参数都拿到，能够一目了然的去操作一些东西。")]),t._v(" "),e("p",[t._v("这就是我们在写 Vuex 它提供的一些去监听我们的 mutation 和 action 被调用的一个方法，有了这些方法之后，我们就可以每次有数据变化的时候，都可以拿到这个变化的过程，然后你可以去做一些操作。")]),t._v(" "),e("p",[t._v("这 2 个 API 主要是用在去制作一些插件，既然说到了插件，我们来讲一下如何去定义一个 Vuex 的插件。")]),t._v(" "),e("p",[t._v("Vuex 的插件其实非常简单，它就是一个 function。")]),t._v(" "),e("p",[t._v("在我们去申明一个 Vuex.Store 的时候，我们可以传入一个 plugins，它是一个数组，你可以放很多的 plugin，它们会按顺序去执行。")]),t._v(" "),e("p",[t._v("然后 plugin 它其实就是一个方法，它在初始化的时候会接收到 store 这个参数，就是我们申明的 store 对象。")]),t._v(" "),e("p",[t._v("这个方法只会执行一次，但是在这个方法执行完之后，也就可以去申明一些订阅的东西了。\n"),e("img",{attrs:{src:"/img/vuex-6-7.png",alt:"在这里插入图片描述"}})]),t._v(" "),e("p",[t._v("我们可以看到，在 Vue 初始化的时候，它就会去调用这个 plugin。")]),t._v(" "),e("p",[t._v("plugin 它的申明就是这么简单，然后其实最主要的是 plugin 去通过 subscribe 或者 watch 去做一些操作，具体什么操作你可以根据你的需求去定义。")]),t._v(" "),e("p",[t._v("关于 Vuex 基本就这么多了，Vuex 相对的内容不是特别的多，但是它的功能非常的强大。")]),t._v(" "),e("p",[t._v("你必须要弄清楚我们为什么要去使用 Vuex。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/vuex-6-8.png",alt:"在这里插入图片描述"}}),t._v("\n首先，我们可以看到，在顶部，我们申明了一个 root，就是我们 new Vue()对象，如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/vuex-6-9.png",alt:"在这里插入图片描述"}})]),t._v(" "),e("p",[t._v("我们 new 了这个 Vue 对象，然后通过它把我们整个应用都挂载到我们的#app 节点上面。")]),t._v(" "),e("p",[t._v("然后这个应用，它渲染的是 App 这个节点，所以我们可以看到，root -> new Vue() 下面最直接的，它就是渲染的 App 这个节点。")]),t._v(" "),e("p",[t._v("然后在 App 里面，我们去承担了一个路由的操作，也就是它相对来说有 2 个子节点，一个是 Route1，一个是 Route2。")]),t._v(" "),e("p",[t._v("这个 Route 就是我们在 routes 里面去申明的，对应不同的路由，它会去使用哪个节点去渲染。")]),t._v(" "),e("p",[t._v("比如我们的 Route1 渲染的就是 Login 组件。相对应的，我们的 Route2 它渲染的就是 Hello 组件。")]),t._v(" "),e("p",[t._v("然后 Hello 组件它里面也可以有很多的子节点，child1，child2 等等就不列出来了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/vuex-6-10.png",alt:"在这里插入图片描述"}}),t._v("\n那么整个 Vue 应用就是一个树形的节点，我们从 root 节点，然后去一层一层的往下去渲染，把所有的节点渲染出来之后，就形成了我们最终看到的那个 HTML 的节点。")]),t._v(" "),e("p",[t._v("然后呢，我们有一个独立于我们 Vue 的节点树的一个 Store，它类似于一个数据库。")]),t._v(" "),e("p",[t._v("然后这个 Store 通过我们在申明 Vue 对象的时候，把它放到我们这个对象里面，去注入到我们整个组件树里面。")]),t._v(" "),e("p",[t._v("注入进去之后，我们的 App，Hello，Login，以及其他所有的节点，就都可以通过 $store 这个对象去调用我们这个 Store 里面的内容了。")]),t._v(" "),e("p",[t._v("然后在我们的节点内就可以通过 commit 或者 dispatch 去分别调用它们的 mutations 以及 actions，以这种方法让我们可以在我们的节点里面去修改我们的 Store 数据。")]),t._v(" "),e("p",[t._v("但是要注意：我们真正的修改是在 Store 里面去做的。")]),t._v(" "),e("p",[t._v("也就是说，Store 它自己对自己做了一个真正的修改，而不是说我们通过 commit 或 dispatch 在 App 或者节点里面去操作的。")]),t._v(" "),e("p",[t._v("而是通过这种方法告诉我们的 Store，它要去做这个修改。")]),t._v(" "),e("p",[t._v("我们就是通过这种树形的，向下的来扩展我们整个的一个组件树。")]),t._v(" "),e("p",[t._v("然后 Store 是完全独立于我们整个组件树的，它通过注入的方式，让我们可以调用它。")]),t._v(" "),e("p",[t._v("然后我们可以通过一个通知的方式 commit 或者 dispatch，然后去修改我们 Store 的数据，它就是这样的一个过程。")])])}),[],!1,null,null,null);v.default=s.exports}}]);