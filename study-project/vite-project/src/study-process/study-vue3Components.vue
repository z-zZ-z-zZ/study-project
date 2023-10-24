<template>
    <div>组件的使用！</div>
    <ComponentsTest v-if="flag"></ComponentsTest>
    <br>
    <button @click="flag = !flag">创建-销毁</button>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue';

import ComponentsTest from '../components/componentsTest.vue';

let flag = ref<boolean>(true)
</script>

<style lang='less' >

</style>