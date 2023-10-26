<template>
    <div class="tab-wrapper">
        <div @click="ChangeItem(item,index)" :class="['tab-item',activeIndex==index?'active':'']" v-for="(item,index) in list">
            {{ item.name }}
        </div>
    </div>
    <component :is="comId"></component>
</template>

<script setup lang='ts'>
import {ref,reactive,markRaw,shallowRef} from 'vue';
import ModelOne from '../components/dynamicOne.vue';
import ModelTwo from '../components/dynamicTwo.vue';
import ModelThree from '../components/dynamicThree.vue';
// 这么写会报警告 因为proxy劫持了所有的属性  会造成性能的浪费 
// 所以需要组件的定义中 加一个markRaw 会添加一个 __v_skip: true 属性 proxy代理就会跳过
// 同理 在使用中 添加一个 shallowRef 进行浅层的监听
const list =  reactive([
    {
        name:'组件一',
        com:markRaw(ModelOne)
    },
    {
        name:'组件二',
        com:markRaw(ModelTwo)
    },
    {
        name:'组件三',
        com:markRaw(ModelThree)
    },
])

let comId = shallowRef(ModelOne);

let activeIndex = ref(0);

const ChangeItem = (item:any,index:number) =>{
    comId.value = item.com;
    console.log(comId.value)
    activeIndex.value = index
}

</script>

<style lang='less' scoped>
.tab-wrapper{
    display: flex;
    margin: 10px;
    .tab-item{
        width: 120px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:8px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .active{
        background:lightskyblue
    }
}

</style>