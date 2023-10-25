<template>
    <div>父级</div>
    <br>
    <Child ref="GetData" :arr="arr" :msg="msg" @on-click="GetChildMsg"></Child>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
import Child from './child.vue';

let msg  = ref('父组件传递给子组件');
let arr = ref([1,2,3]);
// 通过这种方式获取子组件暴露出来的参数或者方法   需要定义范型 InstanceType 同样需要检查子组件类型  --- <typeof Child>>
let GetData = ref<InstanceType<typeof Child>>(); 

const GetChildMsg = (msg:string,msg2:string)=>{
    console.log(msg,msg2)
}

// console.log(GetData.value?.msg) // 在这里其实已经可以读取到暴露出来的属性或者方法了
</script>

<style lang='less' scoped>

</style>