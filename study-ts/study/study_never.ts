type A_2 = string & number; // 这时候 A_2 就是never

// function fn_1():void{
//     throw new Error('抛出错误')
// }

// function fn_2():never{
//     throw new Error('抛出错误')
// }

// 是函数内部抛出的错误 不是没有返回值 所以使用never合适
// 另外 假如函数内部有个死循环 也可以使用never 表明不是没有返回值

// fn_2()
type fn_t = '唱' | '跳' | 'rap' | '篮球' | '鸡你太美';
function fn_1(value: fn_t) {
    switch (value) {
        case '唱':
            break;
        case '跳':
            break;
        case 'rap':
            break;
        case '篮球':
            break;
        case '鸡你太美':
            break;
        default:
            // 兜底逻辑 -- 假如上方新增之后 这边会报错 
            const error:never = value;
            break
    }
}
