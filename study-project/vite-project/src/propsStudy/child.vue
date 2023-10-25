<template>
    <div>子组件</div>
    <br />
    <!-- 通过defineProps 直接取值 -->
    <!-- 
        <p>{{ msg }}</p>
     -->
    <!-- 定义变量接收后 -->
    <!-- <p>{{ msg }}</p> -->
    <!-- 通过ts的方式 -->
    <!-- <p>{{ msg }}</p>
     <p>{{ arr }}</p> -->

    <!-- <button @click="Transmit">子组件给父组件传值</button> -->
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
//假如没有使用ts
// const props = defineProps({
//     msg:{
//         type:String,
//         default:'11'
//     }
// })

// 直接打印msg会报错  -- msg is not defined
// console.log(msg);
// 需要通过一个变量接收defineProps
// console.log(props.msg);

// 通过ts方式
// defineProps<{
//     msg:string,
//     arr:number[]
// }>()

// ts 特有的定义默认值  withDefaults  接收的第一个参数必须是 defineProps
// withDefaults(defineProps<{
//     msg:string,
//     arr:number[]
// }>(),{
//     msg:'msg的默认值',
//     arr:()=>[0,0,0]   //复杂类型需要一个函数返回
// })

// 子组件传递值给父组件  defineEmits

/*
//方式一
const emit = defineEmits(['on-click','on-click']);
const Transmit = ()=>{
    emit('on-click','子组件传递给父组件的值','这是第二个值')
}
 */

/* 
 // 方式二
 const emit = defineEmits<{
    (e:'on-click',msg:string,msg2:string):void   //onclick 表示事件 msg等表示参数 可以多个 void 表示无返回值
    // (e:'on-click',msg:string,msg2:string):void  可以添加多个事件
    // (e:'on-click',msg:string,msg2:string):void
}>();
const Transmit = ()=>{
    emit('on-click','子组件传递给父组件的值','这是第二个值')
}
*/

// 子组件可以暴露方法或者数据 来供父组件使用
// 适用场景案例就是form表单的 校验、重置函数
defineExpose({
    msg:'子组件暴露的参数',
    open:()=>{
        console.log('子组件暴露的方法')
    }
})
</script>

<style lang="less" scoped></style>
