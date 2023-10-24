
# vue3新特性

    1.重写了双向数据绑定
    2.VDOM性能瓶颈提升  --- 添加了静态标识 对变量标记出来 只对比变量 不是全量对比了 优化性能
    3.Fragments   --- template 可以添加多个节点了（相当于框架给套了一个最外层盒子） 支持多v-model写法 新增了Suspense 和 teleport
    4.Tree-Sharking的支持   --- 需要的通过import进行引用 其他不需要的  不引用 不会打包
    5.Composition API  -- 添加了 Setup语法糖

vue2 使用的是 Object.defineProperty() 实现的双向数据绑定   并且重写了数组方法（push,pop,shift,unshift,splice,sort,reverse）
vue3 是基于proxy进行的

## vue2中使用的是options API  vue3中使用的是composition API


## vue2(object.define.Property)  和 vue3(proxy) 的响应式原理
### vue2 中的不足
    1. 对象只能劫持设置好的数据，新增的数据需要通过 Vue.set() 也就是$set 
    2. 数组只能操作七种方法（重写的方法），修改某一项的值无法劫持 

# vue3 的目录结构

```bash

    public 存放静态资源 但是不会被打包
    src：
     assets 也是存放静态资源 但是会被打包
     components 存放组件
     app.vue 全局入口文件
     main.ts 全局文件 引入全局样式 或者是全局的一些ts文件之类的
     style.less 全局样式
     index.html   vite使用index.html作为入口文件
     
```



## vue3 组件和生命周期

### 组件
```js
    import {组件名} from {组件路径}  // 引入组件
    //vue2 中使用componetns 注册组件
    components:{
        组件名
    }
    
    // vue3 中不用注册 引入后就可以直接使用
```

   #### 组件的生命周期
   ```js
        vue2 中组件的生命周期
        beforeCreate
        created
        beforeMount
        mounted
        beforeUpdate
        updated
        beforeDestroy
        destroyed


        vue3 中：  
        setup   //（setup语法糖模式中 没有 beforeCreate created 这俩生命周期  是用setup去代替 ）
        onBeforeMount   // 类似于vue2  在这个时候读取不到dom元素 
        onMounted       // 类似于vue2  在这个时候能够读取到dom元素 
        onBeforeUpdate  // 获取更新之前的dom
        onUpdated       // 获取更新之后的dom
        onBeforeUnmount
        onUnmounted

    vue3中还提供了两个钩子函数 用于调试
        onRenderTracked(e=>{
          console.log("onRenderTracked",e)  // 页面个加载执行
        });

        onRenderTriggered(e=>{
          console.log("onRenderTriggered",e)  // 页面发生变化执行
        });


    ```