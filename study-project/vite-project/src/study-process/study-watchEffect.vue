<template>
    <div>
        eg1:
        <input id="ipt" v-model="message" type="text">
        <br>
        eg2:
        <input v-model="message2" type="text">
        <br>
        <button @click="stopWatch">停止监听</button>
    </div>
</template>

<script setup lang='ts'>
import {ref,reactive,watchEffect} from 'vue';

let message = ref<string>('学习watchEffect 高级监听');

let message2 = ref<string>('学习watchEffect 高级监听22');

/*
    watchEffect 一进入页面就调用一次 相当于 watch 中的 immediate:true;

    oninvalidata  是个回调函数  
    在数据更改时，会调用 可以提前进行一些数据的操作  下方代码数据更新后执行结果：before-message-message2

    还会返回一个stop函数 触发该函数后 不会再进行监听
 */
// watchEffect((oninvalidata)=>{
//     console.log("message=>>>",message.value);
//     console.log("message2=>>>",message2.value);
//     oninvalidata(()=>{
//         console.log('before')
//     });
    
// })


const stop = watchEffect((oninvalidata)=>{
    // let ipt:HTMLInputElement = document.getElementById('ipt') as HTMLInputElement;
    // console.log("message=>>>",message.value);
    // console.log("message2=>>>",message2.value);
    // console.log(ipt,'11');
    
    oninvalidata(()=>{
        console.log('before')
    });
    
},{
    // flush:'post'   //组件更新后 可以监听到dom元素了 之前是null 监听不到
    // onTrigger(event) {
    //     debugger   // 通过这个函数可以进行调试  
    // },
})
const stopWatch = ()=>stop();
</script>
<style lang='less' >

</style>