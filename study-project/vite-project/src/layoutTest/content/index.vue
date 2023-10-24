<template>
    <div class="np-content">
        <div class="np-content__item" v-for="item in 50">
            {{ item }}
        </div>
    </div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
</script>

<style lang='scss' scoped>
@include b(content){
    flex:1;
    overflow:auto;
    @include e(item){
        padding:8px;
        margin:8px;
        border:1px solid #ccc;
        border-radius:3px
    }

}
</style>