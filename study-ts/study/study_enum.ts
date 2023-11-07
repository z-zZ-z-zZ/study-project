/* 
    枚举类型
    js中是不存在枚举这个概念的  在ts中通过 enum 关键字定义枚举类型 
    
*/

enum Color{
    red,
    green,
    blue
}
console.log(Color.red);  // 0
console.log(Color.green); // 1
console.log(Color.blue); // 2

enum Color2{
    red = 1,
    green,
    blue
}


console.log(Color2.red);  // 1
console.log(Color2.green); // 2
console.log(Color2.blue); // 3

enum Color3{
    red = 1,
    green = 6,
    blue = 12
}

console.log(Color3.red);  // 1
console.log(Color3.green); // 6
console.log(Color3.blue); // 12
// 以上是数字枚举 可以默认从0递增 也可以定义一个初始值递增 还可以自定义

enum Color4{
    red = 'red',
    green = 'green',
    blue='blue'
}

console.log(Color4.red);  // red
console.log(Color4.green); // green
console.log(Color4.blue); // blue
// 以上是字符串枚举  使用该方式的时候需要每个都定义 不然会报错的 因为不想数字枚举进行了递增

enum EnumTemp{
    yes = 1,
    no = 'no'
}
console.log(EnumTemp.yes); // 1
console.log(EnumTemp.no); // no
// 以上是异构枚举 一般不用

interface EnumTempA{
    red:Color.red
}
// 类型 "{}" 中缺少属性 "red"，但类型 "EnumTempA" 中需要该属性。
let EnumObj:EnumTempA = {
    red:Color.red
}
// 以上是接口枚举


/* 
    let var 都不能声明  只能使用 const
    const 声明的枚举会被编译为常量 而普通声明的枚举是个对象
    可以通过以下实例 通过 tsc index.ts 转为js文件  看普通声明的枚举和const声明枚举的差别
*/

const enum Types{
    success,
    fail
}

// enum Types{
//     success,
//     fail
// }

let code:number = 0
if(code == Types.success){
    console.log('success')
}else{
    console.log('fail')
}
// 以上const枚举


/* 
    反向映射可以通过key 获取 value  也可以通过 value 获取 key
    编译为js后 可以看到 它是通过将key和value进行双向绑定的  所以可以进行反向映射
    自定义为 字符串  是不支持反向映射的
*/

enum Type1{
    success
}

let success:number = Type1.success;
let key = Type1[success]

console.log(`key----${key}`,`value----${success}`)



//以上是反响映射



