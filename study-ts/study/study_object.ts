

/* 
    内置对象
*/
// 1. ecma
let numobj:Number = new Number(1);
let date:Date = new Date();
let reg:RegExp = new RegExp(/\w/);
let error:Error = new Error('错误');
let xhr:XMLHttpRequest = new XMLHttpRequest();

// 2 dom  HTML{元素名}Element HTMLElement 或者是断言为 Element
let div:HTMLDivElement = document.querySelector('div');

// 集合的话可以定义为 NodeList
let div1:NodeList = document.querySelectorAll('div');
// 假如获取元素不固定 可以使用  NodeListOf
let div2:NodeListOf<HTMLDivElement | HTMLElement> = document.querySelectorAll('div footer');

// 3 bom
let local:Storage = localStorage;
let lo:Location = location;
let promise:Promise<string> = new Promise((r)=>r('1'))
promise.then(res=>{
})

let cookie:string = document.cookie;

// 内置对象的案例  -- 代码雨

let canvas: HTMLCanvasElement = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

let string: string[] = 'xsadawfwub1231'.split('');

let arr = Array(Math.ceil(canvas.width / 10)).fill(0);

let rain = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.05)'; // 定义canvas 的背景颜色
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 定义canvas背景色多大面积
    ctx.fillStyle = '#0f0';
    arr.forEach((item, index) => {
        ctx.fillText(string[Math.floor(Math.random() * string.length)], index * 10, item + 10);
        arr[index] = item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
    });
};

setInterval(rain, 50);