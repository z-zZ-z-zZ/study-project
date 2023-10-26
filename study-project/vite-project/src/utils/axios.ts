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