<template>
        <div @click.stop="ClickItem(item)" class="tree-item" v-for="item in list">
        <input type="checkbox" v-model="item.flag"><span>{{ item.name }}</span>
        <!-- vue3中 可以直接使用文件名作为递归组件调用   -->
        <!-- 方式一 直接使用  -->
        <!-- <tree v-if="item?.children?.length" :list='item?.children'></tree> -->
          <!-- 方式二 通过script标签先导出  重命名 然后使用重命名后的文件  -->
        <TreeItem v-if="item?.children?.length" :list='item?.children' ></TreeItem>
        <!-- 方式三 使用插件 --  -->
        </div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue';
interface Tree {
    name: string;
    flag: boolean;
    children?: Tree[];
}

const props = defineProps<{
    list?:Tree[]
}>()


const ClickItem = (item:Tree) =>{
    // 点击第一层的时候没有问题 点击第二层或者更深层次的时候会产生冒泡
    console.log(item)  
}
</script>

<script lang="ts">
export default {
    name:'TreeItem'
}
</script>

<style lang='less' scoped>
.tree-item{
    margin-left: 10px;
}
</style>
