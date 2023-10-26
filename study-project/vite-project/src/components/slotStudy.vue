<template>
    <div>
        <header>
            头部
            <slot name="header"></slot>
        </header>
        <main>
            主体部分
            <!-- 匿名插槽 -->
            <!-- <slot ></slot>   -->
            <!-- 作用域插槽 -->
            <div v-for="(item,index) in data">  
                <slot :data="item" :index="index"></slot>  

            </div>
        </main>
        <footer>
            尾部

            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

// 学习一下插槽的作用域
type names = {
    name: string;
    age: number;
};
const data = reactive<names[]>([
    {
        name: '信息1',
        age: 8,
    },
    {
        name: '信息2',
        age: 18,
    },
    {
        name: '信息3',
        age: 28,
    },
]);
</script>

<style lang="less" scoped></style>
