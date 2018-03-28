<template>
  <div class="body-content">
    <div class="content-area">
      <article class="markdown-body" v-html="markdownContent" v-highlight></article>
    </div>
  </div>
</template>

<script>
  import marked from 'marked';
  import Vue from 'vue';
  import 'github-markdown-css';
  import Highlight from '../assets/js/highlightPlugin';

  Vue.use(Highlight);

  export default {
    name: 'body-content',
    data() {
      return {
        markdownSrc: '﻿# Js学习之You don\'t know js\n' +
        '\n' +
        '标签（空格分隔）： js ydkjs this\n' +
        '\n' +
        '---\n' +
        '- [ ] new绑定覆盖明确绑定原理\n' +
        '- [ ] 软绑定？\n' +
        '\n' +
        '> **核心看点**\n' +
        '> * `this`默认运行时绑定，ES6新出的箭头函数会把`this`变为作用域绑定。\n' +
        '> * 你的程序应该是严格模式或不严格模式中的一种，而不是混用。\n' +
        '> * bind() & 柯里化\n' +
        '> * js中基本没有函数和方法的区别，函数不属于对象，只是指针指向一个函数而已。\n' +
        '\n' +
        '## 一、this\n' +
        '\n' +
        '#### 1. 为什么要用？\n' +
        '可以用于简化api设计，增强复用性，可以使用`call(ref, args)`方法传入当前的`this`其效果和直接传入一个上下文对象一样，多用于对象和原型中。\n' +
        '\n' +
        '#### 2. 工作原理\n' +
        '词法作用域和`this`的原理截然不同，可以使用词法作用域hack替代`this`的某些功能，但这样就体会不到`this`的美妙了。\n' +
        '\n' +
        '> `this`不代表此函数自身(函数对象)，如果要取得函数自身需在定义的时候用具名函数的方法定义。\n' +
        '**注意：**`arguments.callee`在旧版本中指向当前函数对象，但是已经被废弃了。\n' +
        '\n' +
        '作用域只可以用作推理，真正的程序中是不能引用到作用域的，他是引擎内部实现。所以讲`this`的时候我们抛开作用域不看。\n' +
        '\n' +
        '`this`完全是**运行时**绑定的，具体绑定到谁身上，完全看调用栈。\n' +
        '\n' +
        '#### 3.调用栈的五定式\n' +
        '\n' +
        '|绑定类型|写法|调用栈|\n' +
        '|--------|---------|---------|\n' +
        '|默认绑定|`foo()`|this指向全局对象，只有在this使用的地方使用严格模式才会有undefined问题。|\n' +
        '|隐含绑定|`var obj={foo:foo}；obj.foo()`|调用点在obj上，this就是obj，如果有调用链，指向最后一个，如o1.o2.foo()指向o2|\n' +
        '|隐含丢失|`var bar=obj.foo();bar()`|this丢失，退回到默认绑定,传参为函数（回调）且直接调用时符合此情景，setTimeout也符合此场景|\n' +
        '|明确绑定|`call(ref)`或`apply()`|绑定this到ref上,但在第三方库或者setTimeOut这种里面没法用明确绑定解决问题|\n' +
        '|硬绑定|`var bar=function(){foo.call(obj)}`|强行弄出一个新的引用来指向硬绑结果，在ES5中官方提供了这种绑定，即`var bar=foo.bind(obj)`官方hack，666|\n' +
        '|new绑定|`var bar=new foo()`|new的过程中会经历四步，见注释，结果new出来的对象this会绑定到新对象上，这就叫new绑定|\n' +
        '\n' +
        '> new的四步骤:\n' +
        '> 1. 在内存中初始化对象\n' +
        '> 2. 新对象被接入原型链\n' +
        '> 3. this绑定到新对象上\n' +
        '> 4. 返回新对象引用\n' +
        '\n' +
        '#### 4.绑定的优先级\n' +
        'new绑定>明确绑定>隐含绑定>默认绑定\n' +
        '判断的时候按由高到低顺序来判断。\n' +
        '\n' +
        '**特例:**当明确绑定使用`null`或`undefined`做参数时，退化为默认绑定。\n' +
        '\n' +
        '在柯里化和散开参数时有用，散开参数在ES6中有...符号作为代替,如`foo(...[1,2])`(ES6写法)=>`foo(1,2)`=>`foo.call(null,[1,2])`，柯里化没有代替方案，但也要注意退化这个现象。\n' +
        '\n' +
        '**空**\n' +
        '空即是`Object.create(null)`，比起`{}`少了原型链，空可以用来代替柯里化里面的`null`，避免this指向global的副作用，好棒棒。\n' +
        '\n' +
        '**奇葩:**\n' +
        '如`(p.foo = o.foo)()`这样赋值的结果是会退化成默认绑定的。\n' +
        '\n' +
        '## 二、this与对象\n' +
        '对象两种创建方式：字面值、new。字面值类似于new的语法糖，便于在创建对象的时候顺便赋予多个属性。\n' +
        '\n' +
        '#### 1.对象的基本类型\n' +
        '`string`,`boolean`,`number`,`undefined`,`null`,`object`(`Function`、`Array`都算这类)、`Symbol`(ES6)\n' +
        '\n' +
        'JS内建对象:\n' +
        'String、Boolean、Number、Object、Function、RegExp、Array、Date、Error。本质为**内建构造函数**。\n' +
        '\n' +
        '|内建对象|字面值写法|\n' +
        '|--------|---------|\n' +
        '|String|`".."`|\n' +
        '|Boolean|`true`or`false`|\n' +
        '|Number|`1`|\n' +
        '|Object|`{..}`|\n' +
        '|Function|`function(){..}`|\n' +
        '|RegExp|`/../`|\n' +
        '|Array|`[..]`|\n' +
        '|Date|无|\n' +
        '|Error|`throw xx`|\n' +
        '\n' +
        '除了字面值写法，每种内建对象都可以用new的方式新建，更灵活，不过字面值写法已经满足大多数场景了，强烈推荐。\n' +
        '\n' +
        '> string、number、boolean都有对应的包装类型(String、Number、Boolean)\n' +
        '\n' +
        '#### 2.Object\n' +
        '\n' +
        '对象的内容存在特定命名的位置(属性)上，属性的访问有两种方式：`obj.a`和`obj[\'a\']`，第一种方式比较方便，第二种方式比较灵活，`[]`中可以填入表达式，按需使用。\n' +
        '\n' +
        'ES6中声明属性的时候也可以用`[]`的方式，大概样子是这样的：`var obj={[a+\'1\']: xx}`。\n' +
        '\n' +
        '> 注意，对象中属性名默认为string，在声明的时候如果用的不是string，会自动执行`.toString()`方法转换为string。\n' +
        '\n' +
        '#### 3.Array\n' +
        '数组就是特殊的对象，其中存储一组数，他们的属性名为顺序增加的整数。我们也可以在数组上赋予其他属性，但是如果属性名为数字的话会影响到`arr.length`，如:\n' +
        '```\n' +
        'var arr = [1,2,3];\n' +
        'arr[5] = 1;\n' +
        'arr.length // 6\n' +
        'arr.toString() // 1,2,3,,,1\n' +
        '```\n' +
        '\n' +
        '#### 4.复制对象的几种方式\n' +
        '浅拷贝:\n' +
        '如果是JSON的对象，可以使用`var newObj = JSON.parse(JSON.stringify(obj))`的方式浅复制。\n' +
        '\n' +
        'ES6中有了`Object.assign(obj1,obj2...)`可以将除第一个参数的所有对象上的**可枚举的属性**通过`=`的方式赋予obj1，即浅拷贝。\n' +
        '\n' +
        '#### 5.对象的属性\n' +
        '对象的属性并不是只有值，每个属性还对应了比较特殊的属性描述符(`writable、enumerable、configurable`)\n' +
        '\n' +
        '定义属性的时候可以这样定义:\n' +
        '```javascript\n' +
        'Object.defineProperty(myObject, \'a\', {\n' +
        '    value: 1,\n' +
        '    writable: true,\n' +
        '    enumerable: true,\n' +
        '    configurable: true,\n' +
        '})\n' +
        '```\n' +
        '如果只通过字面值的方式去声明属性的话，默认三属性都为`true`，如果通过`defineProperty`定义值，却又只定义其中几个属性，则其他属性默认为false（个人猜测undefined直接转为false了）。可以通过`Object.getOwnPropertyDescriptor(obj, \'a\')`的方式去查看。\n' +
        '\n' +
        '###### 1.writable\n' +
        '定义了是否可变value值，如果为false的时候再进行对应属性的赋值的话轻者(在非严格模式)没反应，重者抛错(在严格模式TypeError)。这个只读仅仅是**浅只读**，如果属性对应的是引用，则引用内容仍然可以修改。\n' +
        '\n' +
        '> 在setter中直接抛出TypeError和writeable设为false效果一样。\n' +
        '\n' +
        '###### 2.configurable\n' +
        '定义属性是否可改配置，如果设置为false，在使用defineProperty定义此属性的配置会直接TypeError，无论是否为严格模式。\n' +
        '\n' +
        '> 有个例外：当`configuable:false`时，将`writable`从`true`改为`false`是不会报错的。除此以外都会TypeError\n' +
        '\n' +
        '`configure:false`同样禁止了此属性的`delete`操作，`delete`作用是用来删除属性。语法:`delete obj.a`\n' +
        '\n' +
        '###### 3.enumerable\n' +
        '定义是否可以用作枚举，即`for in`、`for of`等操作。\n' +
        '\n' +
        '###### 4.三属性组合\n' +
        '`writable:false`+`configurable:false`=>常量\n' +
        '`Object.preventExtensions(obj)`=>禁止新增属性（视模式判定报错与否，同前）\n' +
        '`Object.preventExtensions(obj)`+`configurable:false`=> `Object.seal(..)`：属性固定死，但是可以改值。\n' +
        '`Object.seal(..)`+`writable:false`=>`Object.freeze(..)`，终极封印，啥也别动了。同样是**浅逻辑**，属性为引用时并不能封印到引用指向的对象。\n' +
        '```javascript\nfunction $initHighlight(block, cls) {\n' +
        '  try {\n' +
        '    if (cls.search(/\\bno\\-highlight\\b/) != -1)\n' +
        '      return process(block, true, 0x0F) +\n' +
        '             ` class="${cls}"`;\n' +
        '  } catch (e) {\n' +
        '    /* handle exception */\n' +
        '  }\n' +
        '  for (var i = 0 / 2; i < classes.length; i++) {\n' +
        '    if (checkCondition(classes[i]) === undefined)\n' +
        '      console.log(\'undefined\');\n' +
        '  }\n' +
        '}\n' +
        '\n' +
        'export  $initHighlight;\n```',
      };
    },
    computed: {
      markdownContent() {
        return marked(this.markdownSrc);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 900px) {
    .content-area {
      width: 900px;
    }
  }
  @media screen and (max-width: 899px) {
    .content-area {
      width: 100%;
    }
  }
  .content-area {
    margin: 0 auto;
  }

  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }
</style>
