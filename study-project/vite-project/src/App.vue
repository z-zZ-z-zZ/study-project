<template>
    <div>
        <!-- 瀑布流组件的使用 -->
        <!-- <WaterFall></WaterFall> -->
        <!-- 全局组件 -->
        <!-- <Card></Card>
        <Card></Card>
        <Card></Card> -->
        <!-- 递归组件 -->
        <!-- <TreeVue :list="data"></TreeVue> -->
        <!-- 动态组件 -->
        <!-- <DynamicVue></DynamicVue> -->
        <!-- 插槽 -->
        <!-- <SlotVue></SlotVue> -->
        <!-- 异步组件 -->
        <AsyncVue></AsyncVue>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import WaterFall from './study-process/study-propsExample.vue';
import CardVue from './components/card.vue';
import TreeVue from './components/tree.vue';
import DynamicVue from './study-process/study-dynamicComponents.vue';
import SlotVue from './study-process/study-slot.vue';
import AsyncVue from './study-process/study-asyncComponent.vue'


// 定义tree数据类型

interface Tree {
    name: string;
    flag: boolean;
    children?: Tree[];
}

const data = reactive<Tree[]>([
    {
        name: '1',
        flag: false,
    },
    {
        name: '2',
        flag: false,
    },
    {
        name: '3',
        flag: true,
        children: [
            {
                name: '3-1',
                flag: false,
            },
            {
                name: '3-2',
                flag: false,
            },
            {
                name: '3-3',
                flag: true,
                children: [
                    {
                        name: '3-3-1',
                        flag: false,
                    },
                    {
                        name: '3-3-2',
                        flag: false,
                    },
                    {
                        name: '3-3-3',
                        flag: true,
                    },
                ],
            },
        ],
    },
]);
</script>

<style lang="less" scoped></style>
