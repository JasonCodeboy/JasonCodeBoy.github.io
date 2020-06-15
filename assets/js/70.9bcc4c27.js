(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{390:function(t,a,v){"use strict";v.r(a);var e=v(33),p=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"watch-和-unwatch，-on-和-emit，-once-和-on，-forceupdate，-nexttick"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#watch-和-unwatch，-on-和-emit，-once-和-on，-forceupdate，-nexttick"}},[t._v("#")]),t._v(" $watch 和 unWatch，$on 和 $emit，$once 和 $on，$forceUpdate，$nextTick")]),t._v(" "),v("h3",{attrs:{id:"app-watch"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#app-watch"}},[t._v("#")]),t._v(" app.$watch()")]),t._v(" "),v("p",[t._v("$watch 就对应我们在组件内去申明一个 watch，它们的效果是一模一样的。")]),t._v(" "),v("p",[t._v("我们监听 num，它每一次变化的时候，我们都会拿到一个变化之后新的 num，以及在变化之前的 num。")]),t._v(" "),v("p",[t._v("这两个值都是 watch 监听到变化，主动传给我们的。如下图：\n"),v("img",{attrs:{src:"/img/vue-3-1.png",alt:"在这里插入图片描述"}}),t._v("\n那么它有什么用呢？如果我们想去监听某一个值变化的时候，同时去做某些操作，就可以通过 watch 去做。")]),t._v(" "),v("p",[t._v("那么我们在 $options 里面去写 $watch，有什么好处呢？")]),t._v(" "),v("p",[t._v("因为我们的组件是经常要被销毁的。比如说我们跳转一个路由，我们从一个页面跳转到另外一个页面，那么前一个页面的 watch 其实就没用了。")]),t._v(" "),v("p",[t._v("watch 没用的时候，我们其实是要把它注销掉的。不然的话，可能会导致内存溢出。")]),t._v(" "),v("p",[t._v("我们在通过 $watch 这种方式的时候，我们是需要自己去把这个 watch 注销掉的。")]),t._v(" "),v("p",[t._v("我们在使用 $watch 的时候，会得到一个返回值：unWatch 方法。")]),t._v(" "),v("p",[t._v("需要注销的时候，只需要调用一下 unWatch() 就可以了。如下图：\n"),v("img",{attrs:{src:"/img/vue-3-2.png",alt:"在这里插入图片描述"}})]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"app-上面还可以做一些事件监听，如-on-和-emit："}},[v("a",{staticClass:"header-anchor",attrs:{href:"#app-上面还可以做一些事件监听，如-on-和-emit："}},[t._v("#")]),t._v(" app 上面还可以做一些事件监听，如 $on 和 $emit：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/img/vue-3-3.png",alt:"在这里插入图片描述"}}),t._v("\n$on 和 $emit 都只能同时作用于一个 Vue 对象上面，它才会生效。")]),t._v(" "),v("p",[t._v("你监听的是哪一个 Vue 对象，那么你就必须通过这个 Vue 对象去触发这个事件，它才能进行监听。")]),t._v(" "),v("p",[t._v("不然触发在别的对象上面，它是不会调用这个 $on 的，而且它也不会像 DOM 事件一样，往上冒泡。它是不会冒泡的，你只能监听。")]),t._v(" "),v("p",[t._v("还有一个 $once，那么 $once 和 $on 之间有什么区别呢？请看下图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/img/vue-3-4.png",alt:"在这里插入图片描述"}}),t._v(" "),v("img",{attrs:{src:"/img/vue-3-5.png",alt:"在这里插入图片描述"}})]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"app-forceupdate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#app-forceupdate"}},[t._v("#")]),t._v(" app.$forceUpdate")]),t._v(" "),v("p",[t._v("$forceUpdate 是干嘛用的呢？它的作用是，强制我们的组件去渲染一次。")]),t._v(" "),v("p",[t._v("我们先看一个小例子：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/img/vue-3-6.png",alt:"在这里插入图片描述"}}),t._v("\n那么这是为什么呢？因为 Vue 是一个相应式的框架，如果我们在 data 里面声明的某一个对象上面，它的值没有进行声明。")]),t._v(" "),v("p",[t._v("那么它里面的属性，我们直接给它赋值的时候，就是非相应式的。它不会引起 app，就是 Vue 的 instance 进行一个重新渲染的过程。")]),t._v(" "),v("p",[t._v("虽然它里面的值一直在变，但是它不会重新渲染，所以 html 是不会有任何变化的。")]),t._v(" "),v("p",[t._v("这时候 $forceUpdate 就可以帮我们去处理这种情况。如下图：\n"),v("img",{attrs:{src:"/img/vue-3-7.png",alt:"在这里插入图片描述"}})]),t._v(" "),v("p",[t._v("$forceUpdate 的作用很强大，但是我不建议大家去这么做，除非万不得已，不然不要用。")]),t._v(" "),v("p",[t._v("因为它会强制整个组件重新渲染，如果你的频度没有控制好，它会一直在渲染，就会导致你应用的性能变的非常低。")]),t._v(" "),v("p",[t._v("一般情况下，如果一开始没有在 obj 里面用到 a 这个值，后面又需要用的时候，可以先设置成一个空的字符串默认值。")]),t._v(" "),v("p",[t._v("同时，我们也有其他的方法可以解决这个事情，就是 app.$set，如下图：\n"),v("img",{attrs:{src:"/img/vue-3-8.png",alt:"在这里插入图片描述"}})]),t._v(" "),v("p",[t._v("通过 $set 这种方式去设置值，Vue 就会给这个属性进行相应式。相当于给它补上去的。")]),t._v(" "),v("p",[t._v("那么，对应的，有个删除的方法：app.$delete")]),t._v(" "),v("p",[t._v("因为，如果直接把某个属性 delete 掉，但是它的相应式还在，会导致你的内存溢出。")]),t._v(" "),v("p",[t._v("所以要真正的删除某个属性，就通过 $delete 进行删除，这样就是彻底的删掉了")]),t._v(" "),v("hr"),t._v(" "),v("h3",{attrs:{id:"app-nexttick"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#app-nexttick"}},[t._v("#")]),t._v(" app.$nextTick")]),t._v(" "),v("p",[t._v("Vue 的渲染过程其实是异步的，我们每次改了一个值，比如我们连续改了 5 次 num 的值。")]),t._v(" "),v("p",[t._v("它其实没有同步的把我们 html 上面的内容，给刷新掉，它是会有一个异步的队列。")]),t._v(" "),v("p",[t._v("就是我们连续的改了很多次 num 的值，它是一次性把整个值给渲染出来的，而不是每次都会渲染出来。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/img/vue-3-9.png",alt:"在这里插入图片描述"}}),t._v("\n可以看到，不是说我们每一次变化，它都会去重新渲染一次 DOM。这就是它的异步渲染效果。")]),t._v(" "),v("p",[t._v("因为是异步渲染，所以我们有些操作是要去操作 DOM 节点的，我们希望每次 DOM 节点更新之后，再去做对某一个 DOM 的操作。")]),t._v(" "),v("p",[t._v("这个时候，我们要等 DOM 节点渲染完成，那么什么时候才真正的渲染完成呢？")]),t._v(" "),v("p",[t._v("我们可以通过 app.$nextTick 这个方法，这个方法就是在 Vue 下一次进行 DOM 更新的时候，才会真正的调用我们传进去的回调函数。")]),t._v(" "),v("p",[t._v("有时候，我们在写一个组件，发现更新了值，但是 DOM 节点没有变化的时候，就可以通过 $nextTick 进行调试。")]),t._v(" "),v("p",[t._v("关于 Vue 的实例，它上面的属性和方法，就讲到这里。")]),t._v(" "),v("p",[t._v("Vue 的实例，对于我们理解一个 Vue 的项目开发，其实是非常有用的，因为我们每一个组件内部，都是一个 Vue 实例。")]),t._v(" "),v("p",[t._v("你在组件里面调用的 this，其实就是我们这三章讲解的 app。")]),t._v(" "),v("p",[t._v("所以你理解了 Vue 实例上面的属性和方法之后，也就理解了你在组件内部调用 this，其实是做了哪些操作的方法，其实是一模一样的。")])])}),[],!1,null,null,null);a.default=p.exports}}]);