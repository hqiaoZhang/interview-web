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
        problem: '',
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
      },{
        problem: '',
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
      },
    ]
  }
]