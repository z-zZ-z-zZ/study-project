<template>
    <div class="content">

        <button @click="flag = !flag">switch</button>

        <Transition name="fade">

            <div v-if="flag" class="box"></div>

        </Transition>

    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const flag = ref<boolean>(true);


</script>

<style lang="less" scoped>
.box{
    height: 300px;
    width: 300px;
    background: lightblue;
}
</style>
