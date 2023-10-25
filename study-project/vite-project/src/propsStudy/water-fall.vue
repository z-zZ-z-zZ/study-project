<template>
    <div class="wrapper">
        <div
            :style="{ left: item.left + 'px', top: item.top + 'px', height: item.height+'px', background: item.background }"
            class="item"
            v-for="item in waterList"
        ></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
const props = defineProps<{
    list: any[];
}>();

const waterList = reactive<any[]>([]);

const heightList: any[] = [];

const init = () => {
    const width = 128;
    const x = document.body.clientWidth;
    const num = Math.floor(x / width);

    for (let i = 0; i < props.list.length; i++) {
        if (i < num) {
            props.list[i].left = i * width;
            props.list[i].top = 18;
            waterList.push(props.list[i]);
            heightList.push(props.list[i].height);
        }else{
            let current = heightList[0];
            let index = 0;
            heightList.forEach((item,i)=>{
                if(current > item){
                    current = item;
                    index = i;
                }
            })
            props.list[i].top = current+8;
            props.list[i].left = index * width;
            heightList[index] = heightList[index] + props.list[i].height + 8
            waterList.push(props.list[i]);
        }
    }
};

onMounted(() => {
    init();
});
</script>

<style lang="less" scoped>
.wrapper {
    position: relative;
    .item {
        position: absolute;
        width: 118px;
    }
}
</style>
