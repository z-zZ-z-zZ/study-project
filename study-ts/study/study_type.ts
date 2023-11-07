/* 
    ts 类型 
*/

let str:string = '定义字符串';
let num:number  = 123;
let num1:number = NaN;   // number还可以定义NaN
// tsc -w index.ts  添加监听  然后通过node index.js 就可以查看编写的代码结果了

let bol:boolean= true;

/* 
    非严格模式下 null 和 undefined 可以穿插赋值
*/
let n:null = null;
let n2:undefined = undefined;
/* 
    n = n2;
    n2 = n;
*/

// 严格模式不允许这样定义
//关闭严格模式的话需要 进行 tsc --init  发现tsconfig.json文件 里面配置strict 属性改为false

let v:void = null;
let v1:void  = undefined;

// void经常使用在函数上  表明该函数无返回值
function myFun():void{};

console.log(str)

/* 
    any 任意类型  unknown  不知道的类型
    属于顶级类型（top type） 也就是包含下面所有级别的类型  第二及以下级别同理
        any unknown
        Object
        Number String Boolean 
        number string boolean
        1      '字符串'   false
        never
    any和unknown一样  可以定义各种各样的值；
    但是unknown 只能赋值给自身或者是any类型的变量 any则无此限制；
    unknown定义对象变量的时候 是读取不到对象的属性的
    unknown比any 更加安全  所以在无法确定变量类型的时候 优先使用unknown  其次在考虑使用any
*/

let a:any = 1;
let b:unknown = 2;
let c:number = 0;

a = b;
b = a;
// c = b;

let obj:unknown = {
    message:'unkown类型定义对象是读取不到属性和方法的!'
}
// obj.message   // 读取不到 报错

/*   
    Object  object  {}
*/

/* 
    Object 各个类型的都有个原型 指向的都是Object； 
    因此  它可以定义各种类型
*/
let a1:Object = 1;
let a2:Object = '1';
let a3:Object = true;
let a4:Object = [1,2];
let a5:Object = {
    message:'都可以进行定义'
};
let a6:Object = ()=>{

}

/* 
    object  泛型约束  所有的引用类型都是可以支持的  但是原始类型不行（eg：string number boolean）
*/

// let b1:object = '123'; // 错误 原始类型不支持
// let b2:object = 123; // 错误 原始类型不支持
// let b3:object = true; // 错误 原始类型不支持
let b4:object = ['123']; // 正确 引用类型支持
let b5:object = {
    message:"对象也是可以的！"
};
let b6:object = ()=>{
    console.log('函数也是支持的！')
};

/*  
    {}  相当于 new Object  类似于 Object
    但是通过这种方式定义对象的时候 是没有办法对对象进行修改的
*/

let c1:{} = 1;
let c2:{} = '1';
let c3:{} = true;
let c4:{} = [1,2];
let c5:{} = {
    message:'都可以进行定义'
};
let c6:{} = ()=>{

}