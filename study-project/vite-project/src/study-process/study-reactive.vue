<template>
    <div>
        <!-- 需要阻止form默认的提交事件  所以需要添加prevent -->
        <!-- <form>
            <input v-model="from.title" type="text">
            <br>
            <input v-model="from.message" type="text">
            <br>
           
            <button @click.prevent="submit" >提交</button>
        </form> -->

        <!--
        eg:3.1
        <ul>
            <li v-for="(item,index) in tempArr" :key="index">{{ item }}</li>
        </ul> 
        -->

        <!-- 
            eg:3.2
        <ul>
            <li v-for="(item,index) in tempArr.arr" :key="index">{{ item }}</li>
        </ul>
         -->

        <!-- <button @click="add">数组添加</button> -->

        <!-- readonly -->
        <!-- <button @click="show">查看</button> -->


        <!-- shallowReactive -->
        <p>{{ obj }}</p>
        <button @click="edit">修改 shallowReactive 对象的值</button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive,readonly,shallowReactive} from 'vue';
/*  
        ref reactive 的区别 
            ref：
                1. 支持所有的类型;
                2. 取值和赋值都需要通过 对象.value.值的方式获取
            reactive：
                1. 仅支持引用类型（Aarray Object Map Set）  --- 因为该函数的范型定义为了object
                2. 跟普通的对象一样 直接 对象.值 就可以了
                3. reactive 在异步调用的时候 会存在值 但是界面渲染不出来  因为reactive使用proxy代理的  直接赋值会破坏响应式对象
                    3.1 数组可以使用push和结构赋值来解决
                    3.2 如果不想用push 想直接赋值  那就将其转为对象
 */

//  可以这么写接受类型推论
/* let from = reactive({
    title:'学习vue3',

})
 */

// 也可以自己定一个范型
/* type T = {
    title:string;
}

let from = reactive<T>({
    title:'学习vue3',

}) */

// reactive 常用来绑定一些表单元素
/* let from = reactive({
    title:'学习vue3',
    message:'描述信息'

})
from.title = '修改的form的值'

const submit = ()=>{
    console.log(from)
} */

// eg:3.1
// let tempArr = reactive<number[]>([1,2,3,4,5]);

// eg:3.2
/* let tempArr = reacßtive<{
    arr: number[];
}>({
    arr: [],
}); */

/* const add = () => {
    setTimeout(() => {
        //这样会破坏响应式对象
        // let res = [100,200,500]
        // tempArr = res
        // console.log(tempArr)

        // 解构赋值 eg:3.1
        // let res = [100,200,500]
        // tempArr.push(...res)
        // console.log(tempArr)

        // eg:3.2
        // let res = [100, 200, 500];
        // tempArr.arr = res;
    }, 500);
}; */


// readonly  -- 只读  不能够对只读属性赋值 会报错 但是原先的数据进行更改的时候 会影响只读数据的属性值
/* let tempObj = reactive<{name:string}>({name:'只读内容'});
const obj = readonly(tempObj);

obj.name = '333';
const show = ()=>{
    tempObj.name = '修改'
    console.log(obj,tempObj)
} */


const obj:any = shallowReactive({
    temp1:{
        temp2:{
            message:'shallowReactive'
        }
    }
});

const obj1 = reactive({
    temp1:{
        temp2:{
            message:'shallowReactive'
        }
    }
});
const edit = ()=>{

    // 同shallowRef 数据变更但是界面没有做变化
    // obj.temp1.temp2.message = '修改信息'
    // console.log(obj)

    // 只能修改第一层结构 类似于ref 的.value哪一层
    // obj.temp1 = {message:'第一层结构'}
    // console.log(obj)

    // 类似于ref  写在一起后 修改了reactive的值 shallowReactive的值也会受影响
    obj1.temp1.temp2.message = '修改了 reactive ';
    obj.temp1.temp2.message = '修改信息'
    console.log(obj);
    console.log(obj1)

}



</script>

<style lang="less"></style>
