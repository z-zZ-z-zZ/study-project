<template>
    <div>这是一个组件</div>
    <p ref="domP">{{ str }}</p>
    <button @click="Change">修改字符串</button>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from 'vue';
let str = ref<string>('组件的生命周期');
let domP = ref<HTMLParagraphElement>()
console.log('setup');
// 挂载
onBeforeMount(() => {
    console.log('创建之前',domP.value);
});
onMounted(() => {
    console.log('创建完成',domP.value);
});
//更新
onBeforeUpdate(() => {
    console.log('更新之前',domP.value?.innerText);
});
onUpdated(() => {
    console.log('更新完成',domP.value?.innerText);
});
//销毁
onBeforeUnmount(() => {
    console.log('销毁之前');
});
onUnmounted(() => {
    console.log('销毁完成');
});

const Change = ()=>{
    str.value = '字符串的内容被更改了！'
}

// 可以通过这两个钩子函数进行调试

onRenderTracked(e=>{
    console.log("onRenderTracked",e)  // 页面个加载执行
});

onRenderTriggered(e=>{
    console.log("onRenderTriggered",e)  // 页面发生变化执行
});


</script>

<style lang="less" scoped></style>
