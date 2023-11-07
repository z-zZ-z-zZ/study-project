let s1:symbol = Symbol(1);  // 唯一值  哪怕赋值一样 s1 == s2  返回的也是 false
let s2:symbol = Symbol(1);


console.log(s1 == s2);  //false
console.log(s1 === s2); //false
/* 
    假如让两个symbol 相等  通过for方法
    他会在全局 symbol 中 寻找有没有注册过这个key 有就会直接用 没有就会创建一个
*/  


console.log(Symbol.for('1') === Symbol.for('1')); //true

// 案例
let obj_S ={
    name:'1',
    s1:111,
    s2:222
}
// 在对象中 使用 就防止了 没注意到或者是没有报错的时候  重名覆盖的问题
let obj_S_1 ={
    name:'1',
    [s1]:111,
    [s2]:222
}
// console.log(obj_S);
// console.log(obj_S_1)


// for in  只能读取到name  读取不到 symbol 定义的key
for (let key in obj_S_1){
    console.log(key)
}

// es 新特性  -- 同样读取不到 symbol类型
console.log(Object.keys(obj_S_1),'新特性')  // [ 'name' ] 新特性

// 通过object 内置对象   getOwnPropertyNames   同样读取不到
console.log(Object.getOwnPropertyNames(obj_S_1),'getOwnPropertyNames 内置对象')  // [ 'name' ] getOwnPropertyNames 内置对象


// 通过object 内置对象   getOwnPropertySymbols   可以读取到但是只是symbol类型
console.log(Object.getOwnPropertySymbols(obj_S_1),'getOwnPropertySymbols 内置对象') //[ Symbol(1), Symbol(1) ] getOwnPropertySymbols 内置对象


//es6 新增的特性  反射  可以获取普通和symbol 
console.log(Reflect.ownKeys(obj_S_1)) //[ 'name', Symbol(1), Symbol(1) ]


/* 
    生成器和迭代器  

*/

/* 
    生成器
        function* 函数名(){
            yeild 返回值 (同步异步均可)
        }

*/
function* gen(){
    yield '同步异步均可' 
    yield Promise.resolve('同步异步均可')
    yield '同步异步均可--' 
}

const man_1 = gen(); 

console.log(man_1.next()) // 必须通过 .next  使用 
/*  他会返回一个对象:
    { value: '同步异步均可', done: false }
 */
    console.log(man_1.next())
    console.log(man_1.next())
    console.log(man_1.next())
/* 
    每次都需要使用 .next 去调用  
    当done为空的时候 就证明已经没有可执行的代码了  可以通过done的状态判断
    { value: '同步异步均可', done: false }
    { value: Promise { '同步异步均可' }, done: false }
    { value: '同步异步均可--', done: false }
    { value: undefined, done: true }
*/


/* 
    迭代器
    set map
*/

let set_1:Set<number> = new Set([1,1,2,2,3,3,4,4])  // 天然去重 -- 对象不支持 数字和字符串支持

console.log(set_1)  // Set(4) { 1, 2, 3, 4 }

let map_1:Map<any,any> = new Map();

let arr_1 = [1,2,3];
console.log(map_1,'map_1');  // Map(0) {} map_1
map_1.set(arr_1,'set');
console.log(map_1,'set-after--');  // Map(1) { [ 1, 2, 3 ] => 'set' } set-after--
map_1.get(arr_1);
console.log(map_1,'get')  // Map(1) { [ 1, 2, 3 ] => 'set' } get


const each = (value:any) => {
    let It:any = value[Symbol.iterator]();
    let next:any = {done:false}
    while(!next.done){
        next = It.next();
        if(!next.done){
            // console.log(next,'next');
            console.log(next.value,'next.value');
        }
    }
}

each(map_1) //  [ [ 1, 2, 3 ], 'set' ] next.value
each(set_1) //  1 2 3 4 


/* 
    迭代器的语法糖  for of
    但是类似于 set map dom节点列表（伪数组） 函数参数列表（伪数组） 数组  能够使用 对象是不能够使用的   因为对象不存在 iterator 
*/

for (let value of map_1){
    console.log(value,'map_1')
}
for (let value of set_1){
    console.log(value,'set_1')
}

/* 
    数组解构  底层原理也是调了 iterator
*/
let [a_1,a_2,a_3] = [1,2,3];

let arr_2 = [1,2,3];
let copy_arr_2 = [...arr_2];
// console.log(copy_arr_2)

/*  
    对象支持 for of
    需要自定义 iterator 方法
*/

let obj_4 = {
    max:5,
    current:0,
    [Symbol.iterator](){
        return{
            max:this.max,
            current:this.current,
            next(){
                if(this.current == this.max){
                    return {
                        value:undefined,
                        done:true
                    }
                }else{
                    return {
                        value:this.current++,
                        done:false
                    }
                }
                
            }
        }
    }
}

for (let value of obj_4){
    console.log(value)  // 0 1 2 3 4 
}

let copy_obj_4 = [...obj_4]; // 支持了数组的结构
console.log(copy_obj_4)  // [ 0, 1, 2, 3, 4 ]

let copy_obj_4_obj = {...obj_4}; //自身的解构
console.log(copy_obj_4_obj);
/*
    {
     max: 5,
     current: 0,
     [Symbol(Symbol.iterator)]: [Function: [Symbol.iterator]]
    }
 */


