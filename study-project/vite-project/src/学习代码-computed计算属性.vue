<template>
    <div>
        <!-- <div>性： <input v-model='firstName' type="text"></div>
        <div>名： <input v-model='secondName' type="text"></div>
        <div>全名： {{ name }}</div>
        <br> -->
        <!-- <button @click="changeName">computed函数set</button> -->

            <div>
                <input type="text" placeholder="搜索">
            </div>
            <div style="margin-top: 30px;">
                <table border width="600" cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>
                            <th>物品名称</th>
                            <th>物品数量</th>
                            <th>物品单价</th>
                            <th>物品总价</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in data" :key="index">
                            <td align="center">{{ item.name }}</td>
                            <td align="center">
                                <button @click=" item.num>1 ? item.num-- : null ">-</button>
                                {{ item.num }}
                                 <button @click=" item.num<99 ? item.num++ : null ">+</button></td>
                            <td align="center">{{ item.price }}</td>
                            <td align="center">{{ item.num * item.price }}</td>
                            <td align="center"><button @click="item.num ++ ">删除</button></td>
                            

                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="5" align="right">
                                总价：{{ $total }}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

    </div>
</template>

<script setup lang='ts'>
import { ref,computed, reactive } from "vue";
// let firstName = ref('张');
// let secondName = ref('三');

// 1. 选项式写法  支持一个对象 传入get函数以及set函数进行自定义操作
    // let name = computed<string>({
    //     // 对值进行读取
    //     get (){
    //         return firstName.value + '-' + secondName.value
    //     },
    //     // 对值进行设置 
    //     set(newVal){
    //         // console.log(newVal)
    //         [firstName.value,secondName.value] = newVal.split('-')
    //     }
    // })

    // const changeName = () => {
    //     name.value = '李-四'
    // }

// 2. 函数式写法 只能支持一个getter函数 不允许修改值
// let name = computed(()=>firstName.value + '*' + secondName.value);




// 案例实现
interface Data {
    name:string,
    price:number,
    num:number,
};
let data = reactive<Data[]>([
    {
        name:'物品1',
        price:49.9,
        num:1
    },
    {
        name:'物品2',
        price:39.9,
        num:1
    },
    {
        name:'物品3',
        price:19.9,
        num:1
    },
    {
        name:'物品4',
        price:29.9,
        num:1
    }
    
])

let $total = ref<Number>(0);
const total = () => {
   $total.value =  data.reduce((pre:number,next:Data)=>{
        return pre + next.num * next.price
    },0)
}
total()
</script>

<style lang='less' scoped>

</style>