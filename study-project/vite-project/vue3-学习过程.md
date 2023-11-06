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
    2. 数组只能操作七种方法（重写的方法） push pop shift unshift  reverse  splice  sort  ，修改某一项的值无法劫持 


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
### vue3 的组件 
    1.局部组件 封装定义后 在页面引用
    2.全局组件 封装定义后 在main.ts中引用
```js
    import 组件名 from ‘组件路径’;

        /* 
         注意：
         在vite创建的项目中
         createApp(App).mount('#app')

         需进行重新编写
         const app = createApp(App)
         app.component('Card',CardVue)
         app.mount('#app')

         在vue-cli脚手架中
         const app = createApp(App)
         app.use(router)
         app.mount('#app')
         
         直接app.component注册即可
    */

    app.component(自定义组件名,组件名)
    // 然后直接就可以在页面中使用自定义组件名引用



```
封装原生Ajax
```js
    // 封装原生ajax

export const axios = {
    get<T>(url:string):Promise<T>{
        return new Promise((resolve)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET',url);   
            xhr.onreadystatechange = ()=>{
                /* 
                    xhr.readyState 返回状态码
                    0 - （未初始化） 还没有调用send方法
                    1 - （载入）  已经调用了send方法 正在发送请求
                    2 - （载入完成） send（）方法执行完成，已经接收到全部响应内容
                    3 - （交互） 正在解析响应内容
                    4 - （完成） 响应内容解析完成 可以在客户端进行调用
                */
                if(xhr.readyState == 4 && xhr.status == 200) {
                    
                    setTimeout(()=>{
                        // 模拟异步
                        resolve(JSON.parse(xhr.responseText));
                    },2000)
                }
            }
            xhr.send(null);
        })
    } 
}
```
#### 代码分包-性能优化
直接使用组件的话 会将所有的东西打包到dist文件下的index的js文件中  
如果组件过多的话 主包就会很大 可能会存在首次加载慢的情况   
使用异步组件的话 会将异步组件拆分出来 单独打包 


#### teleport传送组件

使用绝对居中的时候（position：absolute方式）  假如父级不存在relative  相对于body定位的 也就是可视区居中
但是假如父级存在relative  相对于父级而言的 （假如使用的弹窗的话 弹窗的位置就会发生改变）
这时候就可以使用teleport组件
eg：
<Teleport to=常用的选择器(body) disabled=true||false (设置为true的时候，to属性是不会生效的)>
 <自定义组件></自定义组件>
</Teleport>


#### keep-alive 缓存组件
当组件进行切换时，一般使用方法是不会进行缓存的，如果需要进行缓存就需要通过keep-alive组件
 <keep-alive :include=['A,B']>
          <A v-if></A>
          <B v-else></B>  
</keep-alive>

改组件包含 include 那个组件需要缓存  exclude  那个组件不需要缓存

