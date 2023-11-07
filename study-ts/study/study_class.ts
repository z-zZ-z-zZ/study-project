

/*  
    Class 类   
    1.通过 implements 关键字 对类进行约束  使用 extends进行继承
    2.类的修饰符 
         readonly -- 只读 eg:  readonly options: Options;  用在属性上
         private  -- 私有  只能在内部使用（只能自己使用） 子类也无法调用 
         protected  -- 给子类和内部使用 外部无法使用 类似于实例的时候 无法使用
         public -- 公有  默认为公有 都可以使用 
    3.super() 的原理 -- 为什么继承之后要在构造器里面使用super函数
        父类的prototype.constructor.call 
        可以在父类的constructor中定义参数 然后通过子类的super函数传参
        eg:
           父类： constructor(name: string) {
                
              }
           子类：  super('字符串')
        也可以直接通过super调用父类的方法
         eg:   super.方法名
    4.静态方法 -- 不通过实例 直接调用 类似于 Promise.all
         static 加在属性前或者是方法前
         static 只能调用static方法或者是属性 是无法调用public之类的属性或者是方法
    5.get 和 set
        get 取值 可以对值进行一些操作
        set 赋值 同样可以对相关的值进行一些操作
*/
interface Options {
    el: string | HTMLElement;
}

interface VueCls {
    options: Options;
    init(): void;
}

// 虚拟dom  简单版
interface Vnode {
    tag: string; // eg:div header
    text?: string;
    children?: Vnode[];
}

class Dom {
    // 创建节点
    createElement(el: string) {
        return document.createElement(el);
    }
    // 填充节点
    setText(el: HTMLElement, text: string | null) {
        el.textContent = text;
    }
    // 渲染节点
    protected render(data: Vnode) {
        let root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item);
                root.appendChild(child);
            });
        } else {
            this.setText(root, data.text);
        }
        return root;
    }
}

// 类vue 继承了 dom类的方法-- render可以使用  同时需要在vue的 constructor 的第一行添加 super()
class Vue extends Dom implements VueCls {
    options: Options;
    init(): void {
        // 虚拟dom 就是通过js渲染 真实的dom元素
        let data: Vnode = {
            tag: 'div',
            children: [
                {
                    tag: 'section',
                    text: '这是子节点1',
                },
                {
                    tag: 'section',
                    text: '这是子节点2',
                },
            ],
        };
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        app.appendChild(this.render(data));
    }
    constructor(options: Options) {
        super();
        // 书写默认的方法
        this.options = options;
        this.init();
    };
    static version(){
    return '1.0'
    }
}

new Vue({
    el:'#app'
}) 

Vue.version() // 静态方法只能这样直接调用 不能通过实例 实例里面是没有的

class Ref{
    _value:any
    constructor(value:any){
        this._value = value
    }
    get value(){
        return this._value + 'gggg'
    }
    set value(newVal){
         this._value  = newVal + 'sss'
    }
}

const ref = new Ref('1111');
ref.value = '11'
console.log(ref.value);