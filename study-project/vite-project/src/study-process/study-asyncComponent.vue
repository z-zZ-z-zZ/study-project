<template>
    <div>
        <!-- 展示异步组件必须使用 -->
        <Suspense>
            <template #default>
                <SyncVue></SyncVue>
            </template>
            <template #fallback>
                <!-- 显示加载中的效果或组件-->
                加载中。。。
            </template>

        </Suspense>
       
    </div>
</template>

<script setup lang='ts'>
import {ref,reactive,defineAsyncComponent} from 'vue';

// 异步组件的引用 需要使用  defineAsyncComponent
// 书写方式一 -- 常用
// const SyncVue = defineAsyncComponent(()=> import("../components/asyncStudy.vue"));
// 书写方式二
// const SyncVue = defineAsyncComponent({
//     loadingComponent:,
//     errorComponent:,
//     timeout
// })
</script>

<style lang='less' scoped>

</style>