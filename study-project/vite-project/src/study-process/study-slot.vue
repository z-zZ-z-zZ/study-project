<template>
    <div>
        <Slot>
            <!-- <template v-slot:header>
                这是具名插槽 -- 头部
            </template>
            <template #default="{data,index}">
                这是匿名插槽 -- 获取子组件传过来的数据 --- 简写方式
                {{ data }} --- {{ index }}
            </template> -->
            <!-- <template v-slot="{data,index}">
                这是匿名插槽 -- 获取子组件传过来的数据
                {{ data }} --- {{ index }}
            </template> -->
            <!-- <template v-slot>
                这是匿名插槽 -- 直接使用 
            </template> -->
            <!-- <template #footer>
                这是具名插槽 -- 底部 -- 简写方式
            </template>  -->
            <!-- <template v-slot:footer>
                这是具名插槽 -- 底部
            </template> -->

            <!-- 动态插槽 -->
            <template #[name]>
                <div>
                    {{ message }}
                </div>
            </template>
        </Slot>
        <button @click="ChangeSlot">
            点击修改插槽的地方
        </button>
    </div>
</template>

<script setup lang='ts'>
import {ref,reactive} from 'vue';
import Slot from '../components/slotStudy.vue';

let name = ref('footer');
let message = ref('动态插槽 -- 尾部')

let ChangeSlot = () => {
    name.value = 'header';
    message.value = '动态插槽 -- 头部';
}
</script>

<style lang='less' scoped>

</style>