<template>
    <!-- <div>
        {{ a + 3 }}
    </div>
     <div>
        {{ a ? true : false }}
    </div>
    <div>
        {{b.map(v=>({num:v}))}}
    </div> -->

    <p>REF : {{ obj }}</p>
    <p>ShalowRef : {{ shallowRefObj }}</p>
    <p>customRef : {{ MyObj }}</p>

    <button @click="change">点击修改</button>

    <div ref='domDiv'>
        11
    </div>
</template>

<!-- <script>
export default {
    setup() {
        const a = '111';
        return { a };
    }
}
</script> -->

<script setup lang="ts">
// const a:number = 1
// const b:number[] = [1,2,3,4]

// 这种方式 打印出来的对象已经修改 但是不是响应式的 界面没有变化
// const obj = {
//   name:'vue3学习ref'
// }
// const change = ()=>{
//   obj.name = '点击修改'
//   console.log(obj)
// }

import { ref, isRef, shallowRef, triggerRef, customRef } from 'vue';
import type { Ref } from 'vue';

// 定义泛型
// type O = {
//   name:string
// };
// const obj = ref<O>({
//   name:'vue3学习ref'
// });
// const obj:Ref<O> = ref({
//   name:'vue3学习ref2'
// });

// // 自己进行类型推导
const obj = ref({
    name: 'vue3学习ref3',
});

const shallowRefObj = shallowRef({
    name: 'vue3学习shallowRef',
});

// const notRefO = {name:'这个不是ref对象'}

// 自定义ref  类似ref底层代码
function MyRef<T>(value: T) {
    let timer: any;
    return customRef((track, trigger) => {
        return {
            get() {
                track(); //  收集依赖
                return value;
            },
            set(newVal) {
                // console.log('触发更新') // 每次点击更新数据都会触发一次
                clearTimeout(timer);
                // 防抖 进行多次点击 在最后一次点击后进行调用 --比如接口调用
                timer = setTimeout(() => {
                    console.log('触发更新'); 
                    value = newVal;
                    trigger(); // 触发更新
                }, 500);
            },
        };
    });
}

const MyObj = MyRef<string>('customRef');

// ref返回的是一个class  取值必须加value
const change = () => {
    /*
    ref 和 shallowRef 的区别
       ref 可以做深层次的；
       shallowRef  浅层次的

   */
    // obj.value.name = '点击修改';
    // console.log(isRef(obj));   // 判断是不是ref对象  --true
    // console.log(isRef(notRefO));    // -- false

    // shallowRef 是浅层的 这样对象变化了 但是界面没有变化
    // shallowRefObj.value.name = '点击修改shallowRefObj的值';

    // 这样的才能界面响应
    //  shallowRefObj.value = {
    //   name:'点击修改shallowRefObj的值'
    // };

    // ref 和 shallowRef不能同时出现 shallowref会被影响的；造成视图的更新 原因就是调用了 triggerRef()
    // obj.value.name = '修改的是ref对象的值';
    // shallowRefObj.value.name = '被影响';

    // triggerRef  强制更新
    // shallowRefObj.value.name = '点击修改shallowRefObj的值';
    // triggerRef(shallowRefObj)

    // customRef
    // MyObj.value = '点击修改customRef的值';

    // console.log(MyObj)
    // console.log(obj);
    // console.log(shallowRefObj);

    // 因为外层dom元素还没渲染 是undefined  所以放在点击事件里
    // console.log(domDiv.value?.innerText)

};


// ref 还可以获取元素 -- 需与dom定义的ref名相同； 添加泛型
// const domDiv = ref<HTMLDivElement>();

</script>

<style></style>
