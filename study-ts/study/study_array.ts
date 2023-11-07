/* 
    数组类型
*/
// 第一种定义方式
 let arr1:number[] = [1,2,3];
let arr2:boolean[] = [true,false];
// 第二种定义方式 泛型
let arr4:Array<number> = [1,23,4];
// 以上是定义数组的普通类型  以下是定义对象数组的方式
interface Obj{
    name:string,
    age?:number
}
let arr5:Obj[] = [{name:'1',age:2},{name:'2'}]
// 定义二维数组
let arr6:number[][] = [[1],[2]];
let arr7:Array<Array<number>> = [[1],[2]];
// 假若数组中存在多种类型 可以使用any
let arr8:any[] = [1,'2',true,{}]


// 函数中使用
function fn2(...args:any[]){
    // console.log(args);
    // console.log(arguments);
    let a:IArguments = arguments;  
    // auguments 推出的是一个伪数组  没有push等方法 所以会报错 但是ts有一个内置类型 -- IArguments 可以直接使用
    console.log(a)
} 
 fn2(1,2,3);

/* 
    函数类型 
    1.在小括号中定义参数的类型 在小括号后面定义返回值的类型
    2.默认值的写法同js
    3.可选参数是在定义类型的冒号前加一个问号 eg:  b?:number  注：可选参数和默认值不能一起使用 会报错
    4.参数是对象的时候可以使用interface 去定义
    5:ts可以定义 this 的类型 但是在js中是无法使用的  必须在第一个参数定义this的类型
    6:函数重载
*/

function add1(a:number,b:number):number{
    return a+b
}
let add2 = (a:number,b:number):number=>a+b

function add3(a:number = 5,b:number = 5):number{
    return a+b
}

function add4(a:number = 5,b?:number):number{
    return a+b  // 因为可能没传值  计算为NAN  因为是数字加undefined  严格模式下会报错
}
console.log(add1(3,3))

console.log(add2(3,4))

console.log(add3(3))

console.log(add4(3))

// 函数参数是一个对象的时候
interface Temp{
    desc:string
}

function temp1(obj:Temp){
    console.log(obj.desc)
}
temp1({desc:'这是函数传入的对象'})

// 函数的this类型
 interface Obj2{
    name:string[]
    age:number[]
    add:(this:Obj2,num?:number) => void
}

let tempObj2:Obj2 = {
    name:['1','2'],
    age:[2,3],
    // add: function(this:Obj2,num:number){
    //     this.age.push(num)
    // }
    add(this:Obj2,num:number){
        this.age.push(num)
    }
}

tempObj2.add(9);
console.log(tempObj2) 

// 函数的重载 -- 可以在一个函数中实现增删改等操作
 let numberTemp:number[] = [1,23,4];
function FindNumber(add:number[]):number[]  // 如果传入的是一个number类型的数组 就执行添加的操作
function FindNumber(id:number):number[]   // 如果传入了id  就执行单个查询 （详情查询）
function FindNumber():number[]   // 如果没有传  就查全部内容
function FindNumber(ids?:number | number[]):number[]{
    if(typeof ids == 'number'){
        return numberTemp.filter(i => i == ids)
    }
    else if (Array.isArray(ids)){
        numberTemp.push(...ids);
        return numberTemp
    }else{
        return numberTemp
    }
}

console.log(FindNumber()); // 显示数组全部内容
console.log(FindNumber(4)); // 显示查询的数据
console.log(FindNumber([6,8,9])); // 插入数据 