/* 
    接口和对象类型
    interface(接口):
        1.定义的属性 和 对象中的属性需完全一致 
        2.重名的接口会进行重合的操作  -- 两个接口的属性值就会取并集 所有属性都会存在
        3.任意key(索引签名)  当接口数据返回的时候 除了使用的数据 其余多余的数据定义  eg:[propName:string]:any
        4.? 可选操作符 属性值后加  可表示该属性值非必填  eg：info?:string
        5:readonly 只读属性 在不希望修改的属性前加上 readonly  一般适用于后端返回数据的id或者是函数等
         后续只能进行读取操作 无法进行重新赋值 eg:   readonly cb:()=>boolean
        6.接口继承 类似于es语法中的class
        7.使用接口定义函数类型
 */

// 任意key
interface ObjTemp{
    msg:string
    [propName:string]:any
}
/*
    interface ObjTemp{
         msg:string
    }
    interface ObjTemp{
         info:string
    }
    就相当于
    interface ObjTemp{
         msg:string,
         info:string
    } 
 */
let obj1:ObjTemp = {
    msg:'interface的使用',
    info:'重名的接口会将两个接口的属性都放在一起'
}

interface ObjTemp1 extends C{
    msg:string,
    info?:string,
    readonly cb:()=>boolean
}

interface C{
    desc:string
}

let obj2:ObjTemp1 = {
    msg:'信息',
    // info:'信息2',
    cb:()=>{
        return true
    },
    desc:'这是继承之后的属性'
}

interface Fntemp {
    (age:string):number[]
}
let fnInterface:Fntemp = (name:string) => {
    return [1,2,3]
} 