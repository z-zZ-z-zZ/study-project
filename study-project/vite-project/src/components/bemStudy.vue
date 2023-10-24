<template>
    <div class="np-test">
        块
        <div class="np-test__inner">元素</div>
        <div class="np-test--mo">bem中的m</div>

    </div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
</script>

<style lang='scss' scoped>
@include b(test){
    color: red;
    @include e(inner){
        color: blue;
    }
    @include m(mo){
        color: yellow;
    }
}

</style>