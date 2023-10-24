<template>
    <div class="np-header">header头部文件</div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
</script>

<style lang='scss' scoped>
@include b(header){
    min-height:30px;
    width:100%;
    border-bottom:1px solid #ccc;
}
</style>