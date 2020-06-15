(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{387:function(e,v,_){"use strict";_.r(v);var t=_(33),p=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"路由配置和组件内的导航守卫"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#路由配置和组件内的导航守卫"}},[e._v("#")]),e._v(" 路由配置和组件内的导航守卫")]),e._v(" "),_("p",[e._v("我们除了在全局可以设置导航守卫之外，在路由的配置里面，也是可以增加路由守卫钩子的。")]),e._v(" "),_("p",[e._v("beforeEnter：这个钩子只有在我们进入这个路由之前，它才会被调用。如下图：")]),e._v(" "),_("p",[_("img",{attrs:{src:"/img/vue-18-1.png",alt:"在这里插入图片描述"}})]),e._v(" "),_("p",[e._v("然后我们再来看一下，还能在组件内部给它增加钩子，如下图：")]),e._v(" "),_("p",[_("img",{attrs:{src:"/img/vue-18-2.png",alt:"在这里插入图片描述"}}),e._v("\n清空控制台后，我们从 /login，点击进入到 /hello：")]),e._v(" "),_("p",[e._v("我们可以看到，全局的 beforeResolve 是要等到全局的 beforeEach，然后路由配置的 beforeEnter，再是组件内的 beforeRouteEnter 都触发了之后，它才会被真正的触发。")]),e._v(" "),_("p",[e._v("也就是说，我们在前面任何一个地方阻止了这个操作，那么全局的 beforeResolve 它都不会被触发。")]),e._v(" "),_("p",[e._v("最后，我们全局的 afterEach 最后才会被触发。")]),e._v(" "),_("p",[e._v("那这里有一个问题，就是我们组件内的 beforeRouteUpdate 和 beforeRouteLeave 什么时候被触发呢？")]),e._v(" "),_("p",[e._v("beforeRouteUpdate 就是我们，在同一个组件，不同的路由下面，同时它都是用这个组件去显示的时候，它才会被触发。")]),e._v(" "),_("p",[e._v("比如 path: '/hello/:id' 这种情况下，它后面的 id 不同，但它使用的都是 Hello 组件，那么这个 Hello 组件它是会被复用的。")]),e._v(" "),_("p",[e._v("它不会说会被销毁，然后在重新新建一个 Hello 的组。它会直接复用这个组件。但是这个参数会不一样。如下图：\n"),_("img",{attrs:{src:"/img/vue-18-3.png",alt:"在这里插入图片描述"}})]),e._v(" "),_("p",[e._v("我们可以看到，当我们从 /hello/123 进入到 /hello/456 的时候，组件内的 beforeRouteUpdate 触发了。")]),e._v(" "),_("p",[e._v("也就是说，我们组件内的 beforeRouteUpdate 这个钩子，只有在我们使用 params 路由的时候，也就是同样的路由形式，进行一个切换的时候，它才会真正的触发。")]),e._v(" "),_("p",[e._v("那这种情况我们有什么用呢？")]),e._v(" "),_("p",[e._v("我们这个 Hello 组件的数据，如果是要根据它后面传的这个参数，也就是它的 params，根据 id 去获取对应的数据的时候，我们就可以在这里面去做。")]),e._v(" "),_("p",[e._v("因为如果我们不通过这种方式去做的话，我们可能就要在我们的组件内部，通过 watch，通过路由映射传进来的这个 id，我们去监听这个 id，当它有变化的时候，我们才去做。")]),e._v(" "),_("p",[e._v("那么这样就会增加一个 watch 的开销，而且增加一个 watch，可能会给我们的应用增加一些复杂度。")]),e._v(" "),_("p",[e._v("我们通过这个钩子就会非常明白了，就是每次我们的路由进行更新的时候，它都会去触发这个钩子。")]),e._v(" "),_("p",[e._v("所以我们就可以在这里面去获取数据，而且在它里面我们还可以进行一个更新和控制。")]),e._v(" "),_("p",[e._v("如果我们的数据获取出错了，我们可以通过 next，把它撤销掉，同时我们还可以弹出一个错误提醒。")]),e._v(" "),_("p",[e._v("所以这就是我们使用 beforeRouteUpdate 的一个场景。")]),e._v(" "),_("p",[e._v("然后我们的 beforeRouteEnter，其实它也是差不多的，我们可以在它里面，在这个路由真正进入之前。")]),e._v(" "),_("p",[e._v("我们去根据 id，或者其他参数去获取这个页面要用到的数据。")]),e._v(" "),_("p",[e._v("这样的话我们在数据获取到之后，才真正的把这个页面给显示出来。")]),e._v(" "),_("p",[e._v("但是这边要注意一点的是，我们在钩子里面是拿不到组件的 this 的。")]),e._v(" "),_("p",[e._v("因为我们在没有 next() 之前，这个组件根本就没有被创建。")]),e._v(" "),_("p",[e._v("所以我们拿不到这个 this，你不能去调用 this 上面任何的东西，你也不可以给 this 上面去赋值。如下图：\n"),_("img",{attrs:{src:"/img/vue-18-4.png",alt:"在这里插入图片描述"}})]),e._v(" "),_("p",[e._v("既然拿不到 this 是 undefined，但是我们刚才又说了，在 beforeRouteEnter 里面拿到数据，再把数据塞到我们的组件里面，那我们怎么做呢？")]),e._v(" "),_("p",[e._v("我们可以通过 next 来做这个操作，在 next 里面，它也可以接收一个回调函数。")]),e._v(" "),_("p",[e._v("这个回调函数，它可以接收一个参数 vm，也就是我们组件在被创建之后它的 this 对象。然后在 vm 上面，我们就可以做对应的操作了。\n"),_("img",{attrs:{src:"/img/vue-18-5.png",alt:"在这里插入图片描述"}})]),e._v(" "),_("p",[e._v("所以这就是路由钩子在我们组件内的一些应用。")]),e._v(" "),_("p",[e._v("一般来说，我们这边会去做数据的获取，然后把它塞到我们的对象当中，这样的话，我们页面进入的时候，数据就已经获取好了。")]),e._v(" "),_("p",[e._v("然后 beforeRouteUpdate 也是一样的效果。")]),e._v(" "),_("p",[e._v("那么我们的 beforeRouteLeave 是用来做什么的呢？我们可以做一些，比如提醒的功能。")]),e._v(" "),_("p",[e._v("比如说一个很大的表单，用户填写了一半，然后不小心点了一个别的路由链接，那么就会导致这个表单，他修改的数据可能一下子就没了。")]),e._v(" "),_("p",[e._v("那这种情况，你可以在 beforeRouteLeave 的时候，判断当前这个表单是否已经做了一些修改。")]),e._v(" "),_("p",[e._v("然后你就给他弹一个提示框，是否离开。")]),e._v(" "),_("p",[e._v("如果确认离开再执行 next，这样的话，你就可以把数据给保存下来，就能给我们的应用提供一些安全性和用户体验。")]),e._v(" "),_("p",[e._v("比如：\n"),_("img",{attrs:{src:"/img/vue-18-6.png",alt:"在这里插入图片描述"}})]),e._v(" "),_("p",[e._v("如果点取消，就还是当前这个路由不变。如果点了确定，那么它就会离开。所以这就是我们用来控制页面离开的一个行为方式。")]),e._v(" "),_("p",[e._v("关于 beforeRouteUpdate，这里我们多讲一点：")]),e._v(" "),_("p",[e._v("如果我们路由跳转的时候，两个参数不一样，但是他们显示的内容又是同一个组件的情况，它的生命周期，会不会被触发？")]),e._v(" "),_("p",[e._v("因为很多情况，我们都是直接在 created 和 mounted 这些生命周期里面，去控制数据的获取，基本上我们也都是这么做的。")]),e._v(" "),_("p",[e._v("如下图：")]),e._v(" "),_("p",[_("img",{attrs:{src:"/img/vue-18-7.png",alt:"在这里插入图片描述"}})]),e._v(" "),_("p",[e._v("第一次，我们从 /login 进入到 /hello 123，因为是第一次进入到 Hello 组件，所以它的 mounted 是会被触发的。")]),e._v(" "),_("p",[_("img",{attrs:{src:"/img/vue-18-8.png",alt:"在这里插入图片描述"}})]),e._v(" "),_("p",[e._v("然后我们再从 /hello 123 进入到 /hello 456，我们发现 mounted 它就不会被触发了。")]),e._v(" "),_("p",[e._v("也就是说，如果你不使用 beforeRouteUpdate，而是使用 mounted 去做一个数据初始化的获取。")]),e._v(" "),_("p",[e._v("那么你在类似相同的路径下，然后又显示的是同一个组件的这种情况下，你的第二次路由跳转，它的 mounted 是不会触发的。")]),e._v(" "),_("p",[e._v("也就是说，它里面的数据不会更新。那这种情况就会导致你的应用出现一定的错误。")]),e._v(" "),_("p",[e._v("所以如果你遇到这种情况，一定要去使用 beforeRouteUpdate，或者你可以使用 watch。")]),e._v(" "),_("p",[e._v("但是 watch 相对会比较麻烦一点，而且它也不能控制路由的一个跳转行为。")])])}),[],!1,null,null,null);v.default=p.exports}}]);