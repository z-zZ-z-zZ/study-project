<template>
    <div>
        eg1:
        <input v-model="message" type="text">
        <br>
        eg2:
        <input v-model="message2" type="text">
        <br>
        eg3:
        <input v-model="obj.levelone.leveltwo.message" type="text">
        <br>
        eg4:
        <input v-model="recObj.levelone.leveltwo.message" type="text">
        <br>
        eg5:
        <input v-model="recObj.levelone.leveltwo.name" type="text">

    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, watch } from "vue";

let message = ref<string>('vue3学习过程');
let message2 = ref<string>('这是另外一个字符串');
// 监听单个字符串
// watch(message,(newVal,oldVal)=>{
//     console.log(newVal);
//     console.log(oldVal);
// })
// 监听多个字符串
watch([message,message2],(newVal,oldVal)=>{
    console.log(newVal);
    console.log(oldVal);

})

// 监听对象
let obj =ref({
    levelone:{
        leveltwo:{
            message:'监听对象'
          
        }
    }
});
let recObj=reactive({
    levelone:{
        leveltwo:{
            message:'reactive监听对象',
            name:'学习'
        }
    }
});
// 这样写只能监听浅层  深度监听需要进行配置项配置 -- 这样就可以监听到了 但是监听到的旧值和新值是一样的
// watch(obj,(newVal,oldVal)=>{
//     console.log(newVal);
//     console.log(oldVal)
// },{
//     deep:true // 开启深度监听
// })

// reactive对象中 哪怕不开启deep 也可以监听到 因为在源码中已经隐形开启了 同样监听的新值和旧值是一样的
// watch(recObj,(newVal,oldVal)=>{
//     console.log(newVal);
//     console.log(oldVal)
// })

//直接监听某个对象的属性会进行报错 需要通过将该属性返回出来
watch(() => recObj.levelone.leveltwo.name,(newVal,oldVal)=>{
    console.log(newVal);
    console.log(oldVal)
},{
    // immediate:true // 开始就立即执行一次
    flush:"pre"  // prd 组件更新之前调用 sync 同步执行   post 组件更新之后执行
})

</script>

<style lang='less' >

</style>