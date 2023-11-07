

/* 
    类型断言 联合类型 交叉类型
*/
// 联合类型
let phone:number | string  = 12

let fn3 = function (type:number|string|boolean):boolean{
    return !!type // 强转 两个叹号
}
console.log(fn3(1))
console.log(fn3("1"))
console.log(fn3(true))

//交叉类型  -- 用单个& 连接  相当于继承
interface PeoPle{
    name:string,
    age:number
}
interface Man{
    sex:number
}
const temp = (man:PeoPle & Man):void=>{
    console.log(man)
}
temp({
    name:'猪八戒',
    age:18,
    sex:1
})

//类型断言  不能滥用 容易导致运行时出错
let fn1 = function (num:number | string){
    console.log((num as string).length)
}
fn1('123')

 interface A {
    run:string
}

interface B{
    bulid:string
}

let fn = function(type:A|B){
    console.log((<A>type).run)
    // console.log((type as A).run)

}

fn({
    bulid:'111'
})  // 返回undefined 


/* 
    ts 默认会进行类型推论 
    当你未定义类型直接赋值的时候 ts会帮你推论出他是什么类型
    但是当你未定义类型也未赋值的时候 只是简单的定义了一个变量 那么ts会默认给他一个any类型
*/

let str_1 = '111';
let str_2 = 111;
let str_3 = [1,2,3];


let str_4;
str_4 = '111';
str_4 = 111;

/* 
   当你觉得string 写的繁琐的时候 可以使用类型别名

*/

type s = string;
type o = {name:string};
let str_5:s = '111';
let obj_1:o={
    name:'这是对象的类型别名'
}
/* 
    type虽然跟interface类似 
    但是interface可以使用extends进行继承 type不可以   可以使用  & 连接
    type 可以定义的时候使用联合类型，interface只能在定义属性的时候使用联合类型
    type 重名的时候不会合并，会提示重复  interface重名的时候会合并
    */
type sn = string | number;
let str_6:sn = '1';
let str_7:sn = 1;

type objAndObjT = {name:string} & {age:number}



interface A_1 extends B_1{
    name:string
}

interface B_1{
    age:number
}



let obj_2:objAndObjT = {
    name:'111',
    age:1
}

let obj_3:A_1 = {
    name:'222',
    age:22
}


/* 
    extends 在 type 里面是包含的意思 extends 左边的值会作为右边类型的子类型
*/

type num_1 = 1 extends number ? 1 : 0;






