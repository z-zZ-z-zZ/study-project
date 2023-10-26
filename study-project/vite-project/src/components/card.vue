<template>
    <div class="card-wrapper">
        <header>
            <div>
                主标题
            </div>
            <div>
                副标题
            </div>
        </header>
        <section>
            内容
        </section>
    </div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue'
</script>

<style lang='less' scoped>
@borderColor : #ccc;
.card-wrapper{
    height: 300px;
    width: 280px;
    border: 1px solid @borderColor;
    header{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid @borderColor;
    section{
        height: 280px;
    }
}
}

</style>