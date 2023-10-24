<template>
    <!-- <div>
        {{ obj }}
    </div>
    <hr>
    <div>
       toRef： {{ desc }}
    </div>
    <hr>
    <button @click="change">修改非响应式对象的值</button> -->

    <!-- <p>{{ refsname }} --- {{ refstype }} --- {{ refsdesc }}</p>
    <button @click="refsChange">refsChange</button> -->

    <button @click="toRawChange">toRawChange</button>
</template>

<script setup lang="ts">
import { toRef, reactive, toRefs, toRaw } from 'vue';


// 这是非响应式对象，事件对数据进行的更改，但是界面未响应变化
// toRef 只能修改响应式对象的值，非响应式对象视图无变化
// const obj = {
//     message:"学习",
//     type:1,
//     desc:'study'
// }
// const desc = toRef(obj,'desc'); // toRef(对象，对象属性名)

// 将obj改为响应式对象
const obj = reactive({
    message: '学习',
    type: 1,
    desc: 'study',
});
const desc = toRef(obj, 'desc'); // toRef(对象，对象属性名)

/*
    toRef 的一般应用场景
    假如存在一个函数，需要传参，但是你的参数里面是一个reactive对象，就可以通过toRef将对象的某个属性值单独提出来
        eg: demo(toRef(obj,'desc')){};
 */

let change = () => {
    //非响应式对象 只做数据修改 界面没变
    // obj.desc = '进行了修改';
    // console.log(obj);

    // desc.value = '数据更改，界面不变';   // 当非响应式对象的时候
    // console.log(desc)

    desc.value = '数据更改，界面变化'; // 当响应式对象的时候
    console.log(desc);
};


// toRefs  --- 适用于结构赋值  相当于一个对象所有的属性值 都转为了ref对象
const refsObj = reactive({ refsname: 'toRefsObj', refstype: 2, refsdesc: 'toRefs学习过程' });

// 手写简单toRefs实现原理
// const toRefsTemp = <T extends object>(object: T) => {
//     const map: any = {};
//     for (let key in object) {
//         map[key] = toRef(object, key);
//     }
//     return map;
// };
// 通过refs解构赋值 然后转为ref对象  是响应式的
// let { refsname, refstype, refsdesc } = toRefsTemp(refsObj);
let { refsname, refstype, refsdesc } = toRefs(refsObj);


// 如果不加toRefs  就是普通对象 假如操作数据 数据会变化 但是界面视图不变
// let { refsname, refstype, refsdesc } = refsObj;


const refsChange = () => {
    // 通过toRefs 解构出来的值可以进行赋值
    // refsname.value = '1111'
    // console.log(refsname, refstype, refsdesc);


    // 不使用toRefs  而是直接结构赋值 打印出来的数据变化 但是界面无变化
    // refsname = '1111'
    // console.log(refsname, refstype, refsdesc);

};


// toRaw  从reactive对象中 接出来 变为非响应式对象
const toRawChange = () => {
    console.log(obj,toRaw(obj))
};



</script>

<style lang="less"></style>
