<template>
    <div class="np-wrapper">
        <div class="np-wrapper__left">
            <Menu></Menu>
        </div>
        <div class="np-wrapper__right">
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import Header from './header/index.vue';
import Content from './content/index.vue';
import Menu from './menu/index.vue';
</script>

<style scoped lang="scss" >
@include b(wrapper){
    @include bfc;
    display:flex;
    @include e(left){
        height:100%;
    }
    @include e(right){
        display:flex;
        flex-direction:column;
        flex:1,
    }
}

</style>
