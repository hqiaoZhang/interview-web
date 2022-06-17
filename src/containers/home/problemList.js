export default [
  {
    subject: 'JavaScript',
    list: [
      {
        problem: 'js数据类型',
        answer: `基本数据类型：Number、String、Boolean、Null、Undefined、Symbol、bigInt <br />
        引用数据类型：object、Array、Date、Function、RegExp`
      },{
        problem: 'js变量和函数声明的提升',
        answer: `在js中变量和函数的声明会提升到最顶部执行 <br />
        函数的提升高于变量的提升 <br />
        函数内部如果用 var 声明了相同名称的外部变量，函数将不再向上寻找。<br />
        匿名函数不会提升。`
      },{
        problem: '闭包',
        answer: `闭包就是能够读取其他函数内部变量的函数 <br />
        闭包基本上就是一个函数内部返回一个函数 <br />
        好处：1、可以读取函数内部的变量2、将变量始终保持在内存中3、可以封装对象的私有属性和私有方法 <br />
        坏处：比较耗费内存、使用不当会造成内存溢出的问题`
      },{
        problem: '== 和 ===的区别',
        answer: `==是非严格意义上的相等 会做类型转换，再进行值的比较 值相等就相等 <br />
        ===是严格意义上的相等，会做类型转换，再进行值的比较会比较两边的数据类型和值大小 值和引用地址都相等才相等`
      },{
        problem: 'this',
        answer: `this总是指向函数的直接调用者 <br />
        如果有new关键字，this指向new出来的对象 <br />
        在事件中，this指向触发这个事件的对象`
      },{
        problem: 'js数组和对象的遍历方式',
        answer: `for in； for；forEach；for-of`
      },{
        problem: 'for in 和for of的区别',
        answer: `for in是循环读取键名；for of是循环读取键值`
      },{
        problem: 'map与forEach的区别',
        answer: `forEach 方法，是最基本的方法，就是遍历与循环，默认有 3 个传参：分别是遍历的数组内容 item、数组索引 index、和当前遍历数组 Array <br />
        map 方法，基本用法与 forEach 一致，但是不同的，它会返回一个新的数组，所以 callback需要有 return 值，如果没有，会返回 undefined
`
      },{
        problem: '箭头函数与普通函数的区别?',
        answer: `函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象 <br />
        不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误 <br />
        不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 Rest 参数代替 <br />
        不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数 `
      },{
        problem: '同源策略',
        answer: `同源指的是域名、协议、端口号相同 `
      },{
        problem: '如何解决跨域',
        answer: `jsonp跨域 <br />
        document.domain + iframe 跨域 <br />
        nodejs中间件代理跨域 <br />
        后端在头部信息里面设置安全域名`
      },{
        problem: '严格模式的限制',
        answer: `变量必须声明后再使用<br />
        函数的参数不能有同名属性，否则报错<br />
        不能使用 with 语句<br />
        禁止 this 指向全局对象`
      },{
        problem: 'es6新增',
        answer: `新增模板字符串 <br />
        箭头函数 <br />
        for-of（用来遍历数据—例如数组中的值。） <br />
        ES6 将 Promise 对象纳入规范，提供了原生的 Promise 对象。 <br />
        增加了 let 和 const 命令，用来声明变量。<br />
        还有就是引入 module 模块的概念` 
      },{
        problem: 'attribute 和 property 的区别是什么?',
        answer: `attribute 是 dom 元素在文档中作为 html 标签拥有的属性 <br />
        property 就是 dom 元素在 js 中作为对象拥有的属性。 <br />
        对于 html 的标准属性来说，attribute 和 property 是同步的，是会自动更新的 <br />
        但是对于自定义的属性来说，他们是不同步的`
      },{
        problem: '内存泄漏',
        answer: `定义：程序中己动态分配的堆内存由于某种原因程序未释放或无法释放引发的各种问题。 <br />
        js中可能出现的内存泄漏情况：结果：变慢，崩溃，延迟大等 <br />
        js中可能出现的内存泄漏原因1、全局变量2、dom 清空时，还存在引用3、定时器未清除4、子元素存在引起的内存泄露`
      },{
        problem: '数组(array)方法',
        answer: ` map : 遍历数组，返回回调返回值组成的新数组 <br />
        forEach : 无法 break ，可以用 try/catch 中 throw new Error 来停止 <br />
        filter : 过滤 <br />
        some : 有一项返回 true ，则整体为 true <br />
        every : 有一项返回 false ，则整体为 false <br />
        join : 通过指定连接符生成字符串 <br />
        push / pop : 末尾推入和弹出，改变原数组， 返回推入/弹出项 <br />
        unshift / shift : 头部推入和弹出，改变原数组，返回操作项 <br />
        sort(fn) / reverse : 排序与反转，改变原数组 <br />
        concat : 连接数组，不影响原数组， 浅拷贝 <br />
        slice(start, end) : 返回截断后的新数组，不改变原数组 <br />
        splice(start,number,value…): 返回删除元素组成的数组，value 为插入项，改变原数组 <br />
        indexOf / lastIndexOf(value, fromIndex) : 查找数组项，返回对应的下标 <br />
        reduce / reduceRight(fn(prev, cur) ，defaultPrev) : 两两执行，prev 为上次化简函数的return 值，cur 为当前值(从第二项开始)`
      },{
        problem: 'JavaScript 深浅拷贝?',
        answer: `浅拷贝：Object.assign <br />
        深拷贝：可以通过 JSON.parse(JSON.stringify(object)) 来解决
        `
      },{
        problem: '说说面向对象编程思想?',
        answer: `基本思想是使用对象，类，继承，封装等基本概念来进行程序设计<br />
        优点1、易维护2、易扩展3、开发工作的重用性、继承性高，降低重复工作量。4、缩短了开发周期`
      },{
        problem: '说说异步编程的实现方式?',
        answer: `. 回调函数 <br />
        优点：简单、容易理解 <br />
        缺点：不利于维护、代码耦合高 <br />
        . 事件监听 <br />
        优点：容易理解，可以绑定多个事件，每个事件可以指定多个回调函数<br />
        缺点：事件驱动型，流程不够清晰<br />
        . 发布/订阅(观察者模式)<br />
        类似于事件监听，但是可以通过‘消息中心’，了解现在有多少发布者，多少订阅者<br />
        . Promise 对象<br />
        优点：可以利用 then 方法，进行链式写法；可以书写错误时的回调函数<br />
        缺点：编写和理解，相对比较难<br />
        . Generator 函数<br />
        优点：函数体内外的数据交换、错误处理机制<br />
        缺点：流程管理不方便<br />
        . async 函数<br />
        优点：内置执行器、更好的语义、更广的适用性、返回的是 Promise、结构清晰<br />
        缺点：错误处理机制
`
      },{
        problem: '项目性能优化',
        answer: `减少 HTTP 请求数<br />
        减少 DNS 查询 <br />
        使用 CDN <br />
        避免重定向 <br />
        图片懒加载 <br />
        减少 DOM 元素数量 <br />
        减少 DOM 操作 <br />
        使用外部 JavaScript 和 CSS压缩  <br />
        JavaScript、CSS、字体、图片等优化 CSS Sprite使用  <br />
        iconfont多域名分发划分内容到不同域名 <br />
        尽量减少 iframe 使用 <br />
        避免图片 src 为空把 <br />
        样式表放在 link 中 <br />
        把 JavaScript 放在页面底部`
 
      },{
        problem: '什么是单线程，和异步的关系？',
        answer: `单线程 ：只有一个线程，只能做一件事原因 ： <br />
        避免 DOM 渲染的冲突；浏览器需要渲染 DOM；JS 可以修改 DOM 结构； <br />
        JS 执行的时候，浏览器 DOM 渲染会暂停；两段 JS 也不能同时执行（都修改 DOM 就冲突了）；webworker 支持多线程，但是不能访问 DOM
        解决方案 ：异步 `
      },{
        problem: '说说负载均衡？',
        answer: `单台服务器共同协作，不让其中某一台或几台超额工作，发挥服务器的最大作用 <br /> 
        http 重定向负载均衡：调度者根据策略选择服务器以 302 响应请求，缺点只有第一次有效果，后续操作维持在该服务器 dns 负载均衡：解析域名时，访问多个 ip 服务器中的一个（可监控性较弱）原因 - 避免 DOM 渲染的冲突 <br />
        反向代理负载均衡：访问统一的服务器，由服务器进行调度访问实际的某个服务器，对统一的服务器要求大，性能受到 服务器群的数量`
      },{
        problem: '作用域链？',
        answer: `作用域链可以理解为一组对象列表，包含 父级和自身的变量对象，因此我们便能通过作用域链访问到父级里声明的变量或者函数`
      },{
        problem: '什么是原型、原型链、继承？',
        answer: `所有的函数都有prototype属性（原型）<br />
        所有的对象都有__proto__属性 <br />
        在Javascript中，每个函数都有一个原型属性prototype指向自身的原型，而由这个函数创建的对象也有一个proto属性指向这个原型，<br />
        而函数的原型是一个对象，所以这个对象也会有一个proto指向自己的原型，这样逐层深入直到Object对象的原型，这样就形成了原型链。`
      },{
        problem: 'JS垃圾回收机制是怎样的？',
        answer: `1.概述 <br />
        js的垃圾回收机制是为了防止内存泄漏（已经不需要的某一块内存还一直存在着），垃圾回收机制就是不停歇的寻找这些不再使用的变量，并且释放掉它所指向的内存。 <br />
        在JS中，JS的执行环境会负责管理代码执行过程中使用的内存。<br />
        2.变量的生命周期 <br />
        当一个变量的生命周期结束之后，它所指向的内存就会被释放。 <br />
        js有两种变量，局部变量和全局变量，局部变量是在他当前的函数中产生作用，当该函数结束之后，该变量内存会被释放， <br />
        全局变量的话会一直存在，直到浏览器关闭为止。 <br />
        3.js垃圾回收方式有两种方式： 标记清除、引用计数 <br />
        标记清除：大部分浏览器使用这种垃圾回收，当变量进入执行环境(声明变量）的时候，垃圾回收器将该变量进行了标记，当该变量离开环境的时候，将其再度标记，随之进行删除。 <br />
          引用计数：这种方式常常会引起内存的泄露，主要存在于低版本的浏览器。它的机制就是跟踪某一个值得引用次数，当声明一个变量并且将一个引用类型赋值给变量得时候引用次数加1，当这个变量指向其他一个时引用次数减1，当为0时出发回收机制进行回收。
 `
      },{
        problem: '逐进增强和优雅降级',
        answer: `逐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高版本浏览器进行效果、交互等改进和追加功能达到更好的用户体验。 <br />
        优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容`
      },
    ]
  },{
    subject: 'Vue',
    list: [
      {
        problem: 'Vue原理',
        answer: ``
      },{
        problem: 'Vue 中 data 为什么是一个函数',
        answer: `vue组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，<br />
        如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；<br />
        而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。`
      },{
        problem: 'vue 组件的通信',
        answer: `①ref通信 <br />
        ②$children <br />
        ③$parent <br />
        ④props和$emit <br />
            ==>async修饰符 <br />
            ==>this.$emit("update:变量",需要传递的值) <br />
        ⑤eventBus事件总线 <br />
            ==>vue.prototype.$EventBus = new Vue() <br />
            ==>import Vue from 'vue'---export const EventBus = new Vue() <br />
        ⑥provide/inject <br />
        ⑦vuex通信 <br />
        ⑧attrs/listeners 适用于 隔代组件通信 <br />
            ==>inheritAttrs:false <br />
            ==> <childDomChild v-bind="$attrs" v-on="$listeners"></childDomChild> <br />
        ⑨vue2.6新加的v-slot实现作用域插槽通信：在父组件中使用子组件的数据 <br />
            ==><slot name="header" :data='user'>0000000000</slot> <br />
            ==><template v-slot:header='slotprops'> <p>{{slotprops.data}}</p></template> <br />
        `
      },{
        problem: 'vuex 的原理',
        answer: `Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。<br />
        （1）Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。<br />
        （2）改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。<br />
        State: 驱动应用的数据源 <br />
        Actions: 专门用来与后端backend API打交道 <br />
        Mutations: Vuex中专门用于更新state <br />
        Modules:分模块管理vuex <br />
        Getters: 当于组件中的计算属性computed,与state相关，发生变化 <br />
        
        1、可以用mapState、mapGetters在computed进行简写。 <br />
        2、可以用mapMutations、mapActions在methods进行简写。 <br />
        3、this.$store.dispatch触发actions上的方法进行调用后端数据。 <br />
        4、this.$store.commit触发mutations上的方法修改state上的变量。 <br />
        `
      },{
        problem: 'vue 生命周期',
        answer: `vue的生命周期：Vue 实例从创建到销毁的过程；开始创建-->初始化数据-->编译模块-->挂载dom渲染页面-->更新dom渲染页面—>卸载。<br />
        生命周期钩子函数：组件不同阶段会触发相应的钩子函数 <br />
        初始化阶段、模板编译阶段、挂载阶段、卸载阶段 <br />
        beforecreat <br />
            ==> 在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用。 初始化事件、与data属性进行绑定 <br />
            该实例内的所有东西都还没有创建$el,data都是undefined。 <br />
        creacted <br />
            ==>判断是否有el,如果有就继续往下编译，如果没有直到在该实例上调用vm.$mount(el)[也就是动态引入了el]。 <br />
            render函数>template选项>outer Html-------渲染的一个优先级 <br />
        beforeMount
            ==>此时是给vue实例对象添加$el成员，并且替换掉挂载的DOM元素。<br />
        mounted <br />
        beforeUpdate <br />
            ==>当vue发现data中的数据发生变化，会触发对对应组件的重新渲染，<br />
            当数据改变后调用beforeupdata，当渲染完成后调用updated钩子函数。<br />
        updated <br />
        beforeDestroy <br />
            ==>官方解释：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 <br />
            移除事件监听器(EventBus.$off, window.addEventListener("scroll", 方法名))、关闭定时器、销毁所有的子实例 <br />
        destroyed <br />
        activated <br />
            ==>keep-alive(组件激活时触发) <br />
        deactivated <br />
            ==>keep-alive(组件销毁时触发) <br />
        ErrorCaptured <br />
        
        beforeCreate    组件实例被创建之初，组件的属性生效之前 <br />
        created 组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用 <br />
        beforeMount 在挂载开始之前被调用：相关的 render 函数首次被调用 <br />
        mounted el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子 <br />
        beforeUpdate    组件数据更新之前调用，发生在虚拟 DOM 打补丁之前 <br />
        update  组件数据更新之后 <br />
        activited   keep-alive 专属，组件被激活时调用 <br />
        deactivated keep-alive 专属，组件被销毁时调用 <br />
        beforeDestory   组件销毁前调用 <br />
        destoryed   组件销毁后调用`
      },{ 
        problem: 'v-if 与 v-for 的优先级',
        answer: `v-for比v-if优先级高，一起使用会浪费性能，不建议同时使用，如果必要的情况下，可以选择使用computed过滤掉不需要显示的项目。`
      },{
        problem: 'v-if 和 v-show 的区别',
        answer: `v-if是通过控制dom节点的存在与否来控制元素的显隐；v-show是通过设置DOM元素的display样式，block为显示，none为隐藏 <br />
              v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；<br />
              如果是频繁的切换用v-show，否则用v-if`
      },{
        problem: 'vue 中 key 的作用',
        answer: `1、key的作用主要是为了高效的更新虚拟DOM <br />
        2、不能使用index作为v-for中的key；你删除一个数组长度为3的第二项，vue会认为你删除的是第三项，因为index也是连续的 <br />
        3、当页面的数据发生变化时，Diff算法只会比较同一层级的节点 <br />
        4、有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误
        `
      },{
        problem: '虚拟 dom',
        answer: `virtual DOM：是将真实的DOM的数据抽取出来，以对象的形式模拟树形结构 <br />
        template模板（编译）==>渲染函数（执行）==>虚拟dom==>patch（patching算法）==>真实dom（视图） <br />
        虚拟DOM的最终目标是将虚拟节点渲染到视图上
        `
      },{
        problem: 'diff 算法',
        answer: ``
      },{
        problem: 'conputed 和 watch 的区别',
        answer: `conputed <br />
        1. 支持缓存，只有依赖数据发生改变，才会重新进行计算 <br />
        2. 不支持异步，当computed内有异步操作时无效，无法监听数据的变化 <br />
        3.computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值 <br />
        4. 如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed <br />
        5.如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。 <br />
        watch <br />
        1. 不支持缓存，数据改变，直接会触发相应的操作； <br />
        2.watch支持异步； <br />
        3.监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值； <br />
        4. 当一个属性发生变化时，需要执行对应的操作；一对多； <br />
        5. 监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数， <br />
        immediate：组件加载立即触发回调函数执行， <br />
        deep: 深度监听，为了发现对象内部值的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。注意：deep无法监听到数组的变动`
      },{
        problem: '$nextTick',
        answer: `==>在js中属于微任务 <br />
        ==>$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM， <br />
        ==>Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中，原因是在created()钩子函数执行的时候DOM 其实并未进行任何渲染， <br />
        而此时进行DOM操作无异于徒劳`
      },{
        problem: 'v-on 可以监听多个方法',
        answer: `<input type="text" v-on="{ input:onInput,focus:onFocus,blur:onBlur, }">`
      },{
        problem: 'keep-alive',
        answer: `keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。  <br />
          实现keep-alive的方式 <br />
          1、  <router-view v-if="$route.meta.keepAlive"></router-view> <br />
          2、include等于组件名：<keep-alive include="test-keep-alive"> <br />
            <!-- 将缓存name为test-keep-alive的组件 --> <br />
            <component></component> <br />
          </keep-alive>
        `
      },{
        problem: '路由跳转传参 params 和 query 的区别',
        answer: `1、接收参数的方式不同 <br />
        ==>this.$route.params/this.$route.query <br />
          2、query的方法传参url路径会显示传递的参数 <br />
          3、params刷新页面会丢失参数 <br />
          4、params是用name属性，query是用path属性来编写传参地址
          `
      },{
        problem: 'router和route',
        answer: `$router：$router对象是全局路由的实例，是router构造方法的实例 <br />
        $route：$route对象表示当前的路由信息，包含了当前 URL 解析得到的信息。包含当前的路径，参数，query对象等 <br />
        this.$router.push() <br />
        this.$router.replace() <br />
        this.$router.go(n)  <br />
        this.$router.back()`
      },{
        problem: 'Vue-router 跳转和 location.href 有什么区别',
        answer: `①vue-router使用pushState进行路由更新，静态跳转，页面不会重新加载；location.href会触发浏览器，页面重新加载一次 <br />
        ②vue-router使用diff算法，实现按需加载，减少dom操作 <br />
        ③vue-router是路由跳转或同一个页面跳转；location.href是不同页面间跳转；<br />
        ④vue-router是异步加载this.$nextTick(()=>{获取url})；location.href是同步加载
        `
      },{
        problem: 'Vue-router 导航守卫有哪些',
        answer: ``
      },{
        problem: 'vue-router 中常用的 hash 和 history 路由模式实现原理',
        answer: `//hash 路由 <br />
        早期的前端路由的实现就是基于 location.hash 来实现的。其实现原理很简单，location.hash 的值就是 URL 中 # 后面的内容。比如下面这个网站，它的 location.hash 的值为 '#search'：<br />
        以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）<br />
        // history 路由 <br />
        history.pushState() 和 history.repalceState()。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录 <br />
        pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；<br />
        以使用 popstate 事件来监听 url 的变化，从而对页面进行跳转（渲染）<br />
        history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。`
      },{
        problem: 'vuex 和 localStorage 的区别',
        answer: `1、vuex的数据刷新页面会丢失，而localStorage的数据是永久存储的，除非手动清除。 <br />
        2、vuex存储在内存，localstorage（本地存储）则以文件的方式存储在本地,永久保存； <br />
        sessionstorage( 会话存储 ) ,临时保存。localStorage和sessionStorage只能存储字符串类型， <br />
        对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理 <br />
        3、应用场景：vuex用于组件之间的传值，localstorage，sessionstorage则主要用于不同页面之间的传值。 <br />
        4、vuex的数据是响应式的 <br />
        5、localstorage无法存储function.`
      },{
        problem: 'vue 中的动态路由',
        answer: `像后台管理系统的左边菜单的导航栏，要做角色权限的一个控制；路由由后端返回 <br />
        简单的角色权限：管理员权限和普通用户 <br />
        复杂的路由权限：OA系统，门店用户，个人用户，区域用户`
      },{
        problem: 'vue 的插槽 v-slot',
        answer: `父组件需要在子组件内放一些DOM，那么这些DOM是显示、不显示、在哪个地方显示、如何显示，就是slot分发负责的活。<br />
        在vue2.6版本以上使用v-slot代替了slot 和 scope-slot ，vue3.0中也弃用了。<br />
        v-slot 只能添加到template 或自定义组件上 <br />
        可以在子组件上写插槽的默认内容：<slot name='header'>11111111111</slot> <br />
        1、默认的插槽 <br />
            ==>任何没有被包裹在带有 v-slot 的 组件标签 中的内容都会被视为默认插槽的内容。<br />
                    没有名字的 隐含有一个 “default” 名称 <br />
        2、具名插槽 <br />
            ==><template v-slot:header> <p>111111111</p> </template> <br />
            ==><template #header> <p>111111111</p> </template> <br />
        3、作用域插槽 <br />
            ==><slot name="header" :data='user'>0000000000</slot> <br />
            ==><template v-slot:header='slotprops'> <p>{{slotprops.data}}</p></template> <br />
        4、动态插槽名 <br />
            ==><template v-slot:[dynamicSlotName]> 00000000 </template> <br />
        1、父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。 <br />
        2、<slot></slot>标签里面的内容会作为后备内容且有默认的名字default <br />
        3、(特殊：独占默认插槽的缩写语法)---只要出现多个插槽，请始终为所有的插槽使用完整的基于 <template> 的语法，v-slot 只能添加在 <template> 上 <br />
        4、作用域插槽:绑定在 <slot> 元素上的 attribute 被称为插槽 prop <br />
        5、#简写： #default="{ user }"`
      },{
        problem: 'vue 中的混入 minx',
        answer: `1、混入对象的钩子将在组件自身钩子之前调用。 <br />
        mixins:局部混入  <br />
        mixin:全局混入，一旦使用全局混入对象，将会影响到所有之后创建的 Vue 实例`
      },{
        problem: 'vue 中的过滤器',
        answer: `双花括号插值 <br />
        1、 当有局部和全局两个名称相同的过滤器时候，会以就近原则进行调用，即：局部过滤器优先于全局过滤器被调用！ <br />
        2、 一个表达式可以使用多个过滤器。过滤器之间需要用管道符“|”隔开。其执行顺序从左往右`
      },{
        problem: '请谈谈你对 mvvm 的理解',
        answer: `vue是实现了双向数据绑定的mvvm框架，当视图改变更新模型层，当模型层改变更新视图层。在vue中，使用了双向绑定技术，就是View的变化能实时让Model发生变化，而Model的变化也能实时更新到View。<br />
        MVVM 由 Model、View、ViewModel 三部分构成 <br />
        Model： 代表数据模型，也可以在 Model 中定义数据修改和业务逻辑；<br />
        View ：代表 UI 组件，它负责将数据模型转化成 UI 展现出来；<br />
        ViewModel ：是一个同步View 和 Model的对象；<br />
        响应式开发 <br />
        组件化开发 <br />
        Vue的核心思想就是数据驱动页面，所谓数据驱动，就是页面的dom结构由数据的映射产生，开发者不用去管界面的渲染，只需要管理数据的修改 <br /> 
        //暴露的问题 <br />
        1、开发者在代码中大量调用相同的 DOM API, 处理繁琐 ，操作冗余，使得代码难以维护。<br />
        2、大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。 <br />
        3、当 Model 频繁发生变化，开发者需要主动更新到View ；当用户的操作导致 Model 发生变化，开发者同样需要将变化的数据同步到Model 中，这样的工作不仅繁琐，而且很难维护复杂多变的数据状态。<br />
        
        Vue.js 可以说是MVVM 架构的最佳实践，VUE并没有完全遵循MVVM，专注于 MVVM 中的 ViewModel，不仅做到了数据双向绑定，而且也是一款相对比较轻量级的JS 库，API 简洁，很容易上手`
      },{
        problem: 'MVC',
        answer: `MVC 是 Model-View-Controller 的缩写，即 模型—视图—控制器 。 <br />
        Model：后端传递的 数据 。 <br />
        View：所看到的 页面 。<br />
        Controller：页面 业务逻辑 。`
      },{
        problem: 'v-model 双向数据绑定的原理',
        answer: `ue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现。<br />
        数据劫持的实现主要依赖于Object.defineProperty(),通过这个函数可以监听到get,set事件。<br />
        其中observer是最主要的部分， <br />
        用Object.defineProperty来实现数据的劫持， <br />
        然后用他的set,get方法来通知订阅者，触发update方法，从而实现更新视图 <br />
        Object.defineProperty() <br />
            ==>给对象添加一个属性并指定该属性的配置。 <br />
        vue 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；<br />
        核心：关于VUE双向数据绑定，其核心是 Object.defineProperty()方法。`
      },{
        problem: 'vue 中的修饰符',
        answer: `//事件修饰符 <br />
        .stop 阻止单机事件冒泡 <br />
        .prevent 阻止默认行为（比如 @submit.prevent 会阻止提交后刷新页面）<br />
        .capture 添加事件侦听器时使用捕获模式 <br />
        .self 只有事件在元素本身（而不是子元素）触发时触发回调 <br />
        .once 只触发一次（组件也适用） <br />
        .key 触发事件的按键 <br />
        .native 原生点击事件 <br />
        //v-model 修饰符 <br />
          .lazy在输入框中，默认是在input事件中同步输入框的数据，使用 lazy修饰符会转变为在change事件中同步（失去焦点或按回车才更新）。 <br />
          . number将输入转换为Number类型，默认是String <br />
          .trim 自动过滤输入的首尾空格
        `
      },{
        problem: 'vue 中的修饰符',
        answer: `//事件修饰符 <br />
        .stop 阻止单机事件冒泡 <br />
        .prevent 阻止默认行为（比如 @submit.prevent 会阻止提交后刷新页面） <br />
        .capture 添加事件侦听器时使用捕获模式 <br />
        .self 只有事件在元素本身（而不是子元素）触发时触发回调 <br />
        .once 只触发一次（组件也适用）<br />
        .key 触发事件的按键 <br />
        .native 原生点击事件 <br />
        //v-model 修饰符 <br />
        .lazy在输入框中，默认是在input事件中同步输入框的数据，使用 lazy修饰符会转变为在change事件中同步（失去焦点或按回车才更新）。<br />
        . number将输入转换为Number类型，默认是String <br />
        .trim 自动过滤输入的首尾空格
    `
      },{
        problem: 'vue 中的自定义指令',
        answer: `directives: 自定义指令 <br />
        有三个钩子函数 <br />
        bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。  <br />
        inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。 <br />
        update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。 <br />
        el, binding, vnode,oldVnode：四个函数的入参 <br />
        //el：指令所绑定的元素，可以用来直接操作 DOM。 <br />
        //binding：一个对象，包含以下 property： <br />
        //vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。 <br />
        //oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。`
      },{
        problem: 'vue 框架的优点',
        answer: `轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十kb；<br />
        简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习； <br />
        双向数据绑定：保留了angular的特点，在数据操作方面更为简单；<br />
        组件化：保留了react的优点，实现了html的封装和重用，在构建单页面应用方面有着独特的优势；<br />
        视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；<br />
        虚拟DOM：dom操作是非常耗费性能的， 不再使用原生的dom操作节点，极大解放dom操作，但具体操作的还是dom不过是换了另一种方式；<br />
        运行速度更快:相比较与react而言，同样是操作虚拟dom，就性能而言，vue存在很大的优势。`
      },{
        problem: 'vue-loader 是什么',
        answer: `vue文件的一个加载器，将template/js/style转换成js模块。<br />
        用途：js可以写es6、style样式可以scss或less、template可以加jade等`
      },{
        problem: 'axios 的特点有哪些',
        answer: `从浏览器中创建XMLHttpRequests；<br />
        node.js创建http请求；<br />
        支持Promise API；<br />
        拦截请求和响应；<br />
        转换请求数据和响应数据；<br />
        取消请求；<br />
        自动换成json。<br />
        axios中的发送字段的参数是data跟params两个，两者的区别在于params是跟请求地址一起发送的，data的作为一个请求体进行发送 <br />
        params一般适用于get请求，data一般适用于post put 请求。`
      },{
        problem: '封装 vue 组件的过程',
        answer: `1. 建立组件的模板，先把架子搭起来，写写样式，考虑好组件的基本逻辑。(os：思考1小时，码码10分钟，程序猿的准则。) <br />
        2. 准备好组件的数据输入。即分析好逻辑，定好 props 里面的数据、类型。 <br />
        3. 准备好组件的数据输出。即根据组件逻辑，做好要暴露出来的方法。 <br />
        4. 封装完毕了，直接调用即可`
      },{
        problem: '面对对象思想',
        answer: `面向对象的方法就是利用抽象、封装等机制，借助于对象、类、继承、消息传递等概念进行软件系统构造的软件开发方法。<br />
        面向对象，将所需要做的功能抽象成一个“对象”，然后反复调用这个对象来完成你想要的功能
        `
      },{
        problem: 'vue 初始化页面闪动问题',
        answer: `在css里加上[v-cloak] { <br />
          display: none; <br />
          }。 <br />
          如果没有彻底解决问题，则在根元素加上style="display: none;" :style="{display: 'block'}"`
      },{
        problem: 'vue-router 实现路由懒加载',
        answer: `结合 Vue 的异步组件 (opens new window)和 Webpack 的代码分割功能 (opens new window)，轻松实现路由组件的懒加载 <br />
        第一种：vue异步组件技术 ==== 异步加载，vue-router配置路由 , 使用vue的异步组件技术 , 可以实现按需加载 .但是,这种情况下一个组件生成一个js文件。 <br />
        第二种：路由懒加载(使用import)。 <br />
        第三种：webpack提供的require.ensure()，vue-router配置路由，使用webpack的require.ensure技术，也可以实现按需加载。这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。`
      },{
        problem: 'SPA 单页面的理解',
        answer: `优点：<br />

        用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；<br />
        
        基于上面一点，SPA 相对对服务器压力小；<br />
        
        前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；<br />
        
        缺点：<br />
        
        初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；<br />
        
        前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；<br />
        
        SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。`
      },{
        problem: 'Vue 的单向数据流',
        answer: `所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行。<br />

        这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。<br />
        
        额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。<br />
        
        子组件想修改时，只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。`
      },{
        problem: 'Vue 的父组件和子组件生命周期钩子函数执行顺序',
        answer: `Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分： <br />

        加载渲染过程 <br />
        
        父 beforeCreate -> 父 created -> 父 beforeMount -> <br />
         子 beforeCreate -> 子 created -> 子 beforeMount -> <br />
        子 mounted -> 父 mounted  <br />
        
        子组件更新过程 <br />
        
        父 beforeUpdate -> 子 beforeUpdate -> 子 updated -> 父 updated <br />
        
        父组件更新过程 <br />
        
        父 beforeUpdate -> 父 updated <br />
        
        销毁过程 <br />
        
        父 beforeDestroy -> 子 beforeDestroy -> 子 destroyed -> 父 destroyed
        ！！！子组件的updated 、mounted 和destroyed 优先于父组件执行`
      },{
        problem: 'SSR 服务器渲染',
        answer: ` BSR 客户端渲染(前后端分离)：视图与数据的组装是在客户端完成的  <br />
        SSR 服务器渲染(前后端不分离)：视图和数据的组装是在服务端完成的  <br />
        BSR的优势和劣势有哪些？  <br />
            服务器压力小  <br />
          前后端分离,代码更容易维护  <br />
          数据化应用，交互更加丰富  <br />
          前端工程师来讲价值更高  <br />
          在ToC产品上应用更广泛  <br />
        SSR的优势和劣势有哪些？  <br />
          前后端不分离,对后端的要求非常高  <br />
          有利于SEO  <br />
          对客户端的压力比较小，服务器压力较大  <br />
          在ToB产品上应用比较广泛
        `
      },{
        problem: 'vue 项目的前端代码优化',
        answer: `路由懒加载 <br />
            图片懒加载：data-src <br />
            cdn静态资源加速 <br />
            第三方插件的按需引入  <br />
            开启gzip压缩 <br />
            
            防抖和节流 <br />
            减少回流和重绘呀 <br />
            v-if和v-show的使用 <br />
            离开路由时销毁定时器和监听事件
            keep-alive
        `
      },{
        problem: 'vue3 有了解吗',
        answer: `（1）监测机制的改变：Proxy 替换了Object.defineProperty 去监听数据的变化 <br />
        （2）模板： 3.0 把作用域插槽改成了函数的方式，这样只会影响子组件的重新渲染，提升了渲染的性能。 <br />
        （3）对象式的组件声明方式：3.0 修改了组件的声明方式，改成了类式的写法 <br />
        Vue 3.0 正走在发布的路上，Vue 3.0 的目标是让 Vue 核心变得更小、更快、更强大，因此 Vue 3.0 增加以下这些新特性：<br />
        Proxy 的优势如下: <br />
        
        Proxy 可以直接监听对象而非属性；（$set）<br />
        
        Proxy 可以直接监听数组的变化；<br />
        
        Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；<br />
        
        Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；<br />
        
        Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；<br />
        
        Object.defineProperty 的优势如下: <br />
        
        兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。
        `
      },{
        problem: 'webpack',
        answer: `本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器 <br />
        入口(entry): <br />
        输出(output): <br />
        loader: <br />
        插件(plugins):目的在于解决 loader 无法实现的其他事 <br />
        
        Webpack打包顺序流程 <br />
        1.初始化参数：读取命令行传入或者webpack.config.js文件，初始化本次构建的配置参数 <br />
        2.开始编译 用上一步得到的参数初始Compiler对象，加载所有配置的插件，通过执行对象的run方法开始执行编译 <br />
        3.确定入口 根据配置中的 Entry 找出所有入口文件 <br />
        4.编译模块 从入口文件出发，调用所有配置的 Loader 对模块进行编译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理 <br />
        5.完成模块编译 在经过第4步使用 Loader 翻译完所有模块后， 得到了每个模块被编译后的最终内容及它们之间的依赖关系 <br />
        6.输出资源 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk,再将每个 Chunk 转换成一个单独的文件加入输出列表中，这是可以修改输出内容的最后机会 <br />
        7.输出完成 在确定好输出内容后，根据配置确定输出的路径和文件名，将文件的内容写入文件系统中。
        `
      },{
        problem: 'webpack 的常见 loader',
        answer: `file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 <br />
        url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去 <br />
        source-map-loader：加载额外的 Source Map 文件，以方便断点调试 <br />
        image-loader：加载并且压缩图片文件 <br />
        babel-loader：把 ES6 转换成 ES5 <br />
        css-loader：加载 CSS，支持模块化、压缩、文件导入等特性 <br />
        style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。 <br />
        eslint-loader：通过 ESLint 检查 JavaScript 代码`
      },{
        problem: 'webpack',
        answer: ``
      },{
        problem: '',
        answer: ``
      },{
        problem: '',
        answer: ``
      },{
        problem: '',
        answer: ``
      }
    ]
  }
]