<template>
    <div class="np-menu">menu菜单文件</div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
</script>

<style lang='scss' scoped>
@include b(menu){
    min-width:150px;
    border-right:1px solid #0061ff;
    height:100%
}
</style>