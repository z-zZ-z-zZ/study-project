/*  
    元组类型
*/

let arrTemp1:[number,boolean] = [1,true];
arrTemp1.push(1);
// arrTemp1.push('2') //报错 --   类型“"2"”的参数不能赋给类型“number | boolean”的参数。

//假如通过const 赋值
const arrTemp2:[number,boolean] = [1,true];
arrTemp2[0] = 666 // 同样可以更改
arrTemp2.push(3) // 也可以
// arrTemp2 = [1,false] //  这样不可以
// 假如连属性都不想让改 可以
const arrTemp3: readonly [number,boolean] = [1,true];
//arrTemp3[0] = 666 // 不可以更改了
type first = typeof arrTemp3[0]; // 获取元素的类型
type length = typeof arrTemp3['length']; // 获取数组的长度


// 案例
let arrTemp4:[string,string,number][] = [
    ['猪八戒','男',18],
    ['猪八戒','男',18],
    ['猪八戒','男',18],
    ['猪八戒','男',18],
]

