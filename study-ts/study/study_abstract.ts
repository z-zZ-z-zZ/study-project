/* 
  基类  抽象类
    通过 abstract 关键字定义的类 都是抽象类
    abstract 所定义的方法都只能描述 不能进行一个实现
    抽象类无法被实例化
*/

abstract class AbClass {
    name:string
    constructor(name?:string) {
        this.name = name   
    }
    // 普通的方法依旧可以进行实现
    getName():string{
        return this.name
    }
    // 加上  abstract 关键字 只能进行描述 可以在派生类中进行实现
    abstract init(name:string):void
}
// new AbClass() // 无法创建一个抽象类的实例

class AbClassChild extends AbClass{
    constructor(){
        super()
    }
    init(name:string){
        console.log(name)
    }
    setName(name:string){
        this.name = name
    }
}

const abt = new AbClassChild();
abt.setName('派生类进行抽象类方法的实现');
console.log(abt.getName())

