let alertStr = function () {
    let str = '打印，\n换行';
    let str1 = '打印，\\斜杠';
    let str2 = "打印，'1' 单引号";
    let str3 = '打印，\t 制表符';

    console.log(str);
    console.log(str1);
    console.log(str2);
    console.log(str3);
    console.log(Number.MAX_VALUE);
};
// alertStr();

// 函数表达式
let forFun = function () {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            document.write('<span class="span-class">' + i + ' * ' + j + ' = ' + i * j + '</span>');
        }
        document.write('<br>');
    }
};
// forFun();

// 函数声明 -- 会在代码执行之前被创建 类似var的提升  所以在声明之前调用是可行的
function forFun2() {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            document.write('<span class="span-class">' + i + ' * ' + j + ' = ' + i * j + '</span>');
        }
        document.write('<br>');
    }
}
// forFun2();

// 立即执行函数
// (function () {
//     console.log('这个函数立即执行');
// })();

// 对象的枚举 for in
let ForInFun = function () {
    let obj = {
        name: '名字',
        age: '姓名',
        address: '地址',
    };
    for (let key in obj) {
        console.log('key = ' + key);
        console.log('value = ' + obj[key]);
    }
};
// ForInFun()

// 未定义的变量 相当于全局var定义了一个变量，直接在函数执行后可以访问到
// const a = 10;
// let demo = function(){
//     b = 100
// }
// demo()
// console.log(b)


// 工厂模式创建对象 ---- 创建的对象的类型全是object  无法区分定义的数据
let createTest = function () {
    let createObj = function (name, age) {
        let obj = new Object();
        obj = {
            name: name,
            age: age,
            outPutFun: function () {
                console.log(name);
            },
        };
        return obj;
    };
    let obj = createObj('姓名1', 18);
    let obj2 = createObj('姓名2', 19);

    obj.outPutFun();
    obj2.outPutFun();
};

// createTest()

// 构造函数创建  ---- 构造函数创建一般大写；调用的时候使用new 关键字调用；
/*
    构造函数执行流程
     1 立即创建一个新的对象
     2 将新创建的对象设置为函数中的this  -- 即构造函数的this指向为新建的对象（可以使用this调用创建的对象）
     3 逐行执行函数中的代码
     4 将新建的对象作为返回值返回
*/
// let Person = function(name,age,address){
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.outPut = function(){
//         console.log("他是"+this.name+',家住'+this.address)
//     }
// }
// 使用一个构造函数创建的对象为一类对象，也将一个构造函数称为一个类；
// 将通过构造函数创建的对象称为该构造函数（类）的实例；
// let newPerson1 = new Person('孙悟空',28,'花果山水帘洞');
// let newPerson2 = new Person('猪八戒',28,'高老庄');
// newPerson1.outPut();
// console.log(newPerson1)
// console.log(newPerson1 instanceof Person);

// let Dog = function(name,age){
//     this.name = name;
//     this.age = age;
//     this.outPut = function(){
//         console.log("宠物的姓名是"+this.name+'，年龄是'+this.age+'岁')
//     }
// }

// 使用 instanceof 可以检查对象是否是该类的实例   true 是 false 否
// 所有对象 通过instanceof检测时  都是true
// let newDog1 = new Dog('可乐',1);
// let newDog2 = new Dog('雪碧',2);
// console.log(newDog1 instanceof Dog)

// newDog1.outPut()
// console.log(newDog1)

// 上面的构造函数  每个函数都会添加新的一个output函数；多个实例的方法的功能是相同的，内存消耗会增加，可以进行改造；

// 方法一 定义在全局变量中 会污染全局作用域的命名空间
//                      而且不安全 会被其他不了解情况的程序员所覆盖
// let PersonOut = function(){
//     console.log("他是"+this.name+',家住'+this.address)
// }
// let Person = function(name,age,address){
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.outPut = PersonOut
// };

// let newPerson1 = new Person('孙悟空',28,'花果山水帘洞');
// newPerson1.outPut();

/*
 
方法二  通过原型 prototype
    
        创建的每个函数，解析器都会向函数中添加一个属性prototype （每个函数都是唯一的）
        它对应一个对象  这个对象就是所谓的原型对象；
        如果函数作为普通函数 prototype无意义
        但是如果构造函数调用时，它所创建的对象中都会有一个隐含的属性，执行该构造函数的原型对象，可以通过 _ _prototype _ _ 访问该属性；
        原型对象属于公共空间，所有同一个类的实例都可以访问到该空间
        可以将对象中共有的内容 统一设置到原型对象中
        当访问对象的属性或方法时，先在自身寻找，找到直接使用自身，如果没找到就去原型中寻找。
        可以将对象的共有的属性和方法，统一添加到构造函数的原型中，

*/
// let Person = function(name,age,address){
//     this.name = name;
//     this.age = age;
//     this.address = address;
// };

// Person.prototype.outPut = function(){
//     console.log("他是"+this.name+',家住'+this.address)
// }

// let newPerson1 = new Person('孙悟空',28,'花果山水帘洞');
// newPerson1.outPut();

// let Person = function(){};
// Person.prototype.name = '这是写在原型里面的名字';
// let np = new Person;
// // 使用in 检查对象中是否含有某个属性时，如果对象中不存在但是原型中存在 也会返回true
// console.log("name" in np)
// //可以使用对象的 hasOwnProperty  来检查对象本身是否具有该属性
// console.log(np.hasOwnProperty('name'))   // false

/* 

    原型对象同样也是对象 它同样存在原型
     当使用一个对象的属性或者方法的时候，会先在自身寻找；
      如果自身存在 则直接调用
      如果自身不存在，则去原型对象（eg.__proto__）中寻找,如果有则直接使用
      如果原型对象中也不存在，则去原型对象的原型（eg.__proto__.__proto__）中寻找， 原型对象的原型没有原型
      如果在原型对象的原型中也没有找到，贼返回undefined;
*/

// console.log(np.__proto__.hasOwnProperty('hasOwnProperty')); // false
// console.log(np.__proto__.__proto__.hasOwnProperty('hasOwnProperty')); // true
// console.log(np.__proto__.__proto__.__proto__); // fasle

// toString
let toStringFunTest = function () {
    let Person = function (name, age) {
        this.name = name;
        this.age = age;
    };
    let np1 = new Person('典韦', 28);
    let np2 = new Person('许褚', 26);
    np1.toString = function(){

    }
    // js在页面打印对象的时候 返回的是输出对象的toString() 方法的返回值  [object object]
    // 可以对实例的toString方法重写 （因为该方法不做处理的时候是在原型的原型上存在的）

};
// toStringFunTest()






// es6-es11
/* let 声明的 特性
   1. 变量不能重复声明
   2. 块级作用域   --- if else  while for
   3. 不存在变量提升的过程
   4. 不影响作用域链
   {
       let temp = '已经定义的数据'
       let fun = function(){
           console.log(temp)
       }
       fun()    // 同样可以执行
   }
  */  


   /* conost 声明的 特性
   1. const定义的数据需要附值
   2. 常量的数据不能进行修改
   3. 块级作用域   --- if else  while for
   4. 对于数据的和对象的元素的修改，不算做对常量的修改，不会报错
   const team = ['uzi','mlxg'];
   team.push('ming)
   
   {
       let temp = '已经定义的数据'
       let fun = function(){
           console.log(temp)
       }
       fun()    // 同样可以执行
   }
  */  


// 箭头函数
{
// let fnTest = (a,b)=>{
//     return a + b
// }
// let result = fnTest(1,2);
// console.log(result);

// 箭头函数中 this 是静态的  始终指向函数声明时所在作用域下this的值
function fun1Test(){
    console.log(this.name)
}

let fun2Test = ()=>{
    console.log(this.name)
}

window.name = '箭头函数this指向测试';

const obj = {
    name:'测试this指向'
};
// 直接调用  -- 全部指向全局 -window
// fun1Test();
// fun2Test();

//  使用call方法调用
// fun1Test.call(obj);   //指向obj
// fun2Test.call(obj);   //依然指向window


//  1.箭头函数不能作为构造函数实例化对象
// let Person = (name)=>{
//     this.name = name
// }
// let np = new Person('测试箭头函数能不能作为构造函数')
// console.log('np')   // 报错  Person is not a constructor   不能作为一个构造函数


// 2. 箭头函数不能使用 arguments变量
// let fun3Tset = () =>{
//     console.log(arguments);
// }
// fun3Tset(1,2,3)   //arguments is not defined


// 3. 箭头函数的简写
// 当形参有且仅有一个的时候可以省略（） ； 当代码块只有一行的时候可以省略 {} 且return 必须省略 且函数执行的结果就是函数的返回值
}


// rest 参数
// es6中 使用rest 来获取参数 用来替代 arguments
// es5中获取参数的方式

// {
//     let fun1Test = function(){
//         console.log(arguments)
//     }

//     fun1Test(1,2) 

// }


// es6中获取参数的方式
// {
//     let fun1Test = function(...args){
//         console.log(args)
//     }
//     fun1Test(1,2,3)
// }

// // 但是args必须放到最后 否则会报错
// {
//     let fun1Test = function(a,b,...args){
//         console.log(args)
//     }
//     fun1Test(1,2,3,4,5,6)
// }



// 扩展运算符
// 1. 数组的合并
// const temp1 = [1,2];
// const temp2 = [3,4];
// const temp  = temp1.concat(temp2);
// const temp = [...temp1,...temp2];
// 2. 数组的克隆 --  浅拷贝
// const temp1 = [1,2];
// const temp = [...temp1];
// 3. 将伪数组转为真正数组
// 假如存在好多个html标签 获取之后原型是object
// const divs = document.getElementsByName('div');
// const divArr = [...divs];


// Symbol   -- 定义的第七种类型 是唯一的  不能进行运算 
// let s = Symbol();
// let s1 = Symbol('name');
// let s2 = Symbol('name');
// console.log(s1 === s2);   // false
// // 通过Symbol.for() 创建
// let s3 = Symbol.for('s3');
// let s4 = Symbol.for('s4')
// console.log(s3 === s4);   // true

/*
    给对象的属性或方法添加
*/
let obj = {
    name:'对象名',
    up:function(){
        console.log('对象原有的up方法');
    },
    down:function(){
        console.log('对象原有的down方法');

    }
};

// let methods = {
//     up:Symbol(),
//     down:Symbol()
// };

// obj[methods.up] = function(){
//     console.log('通过methods中的symbol 添加的up');
// };

// obj[methods.down] = function(){
//     console.log('通过methods中的symbol 添加的down');
// };

// console.log(obj)   // 包含原先的up和down方法以及新增的symbol方法


// let games = {
//     name:'英雄联盟',
//     [Symbol('say')]:function(){
//         console.log('对象中直接使用symbol创建')
//     }
// }
// console.log(games.say)
