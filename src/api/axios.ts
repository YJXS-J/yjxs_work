import axios from 'axios';
import { Message } from '@arco-design/web-vue';
declare module 'axios' {
    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<any>;
    }
}
// 创建一个 axios 实例
const service = axios.create({
    baseURL: '/', //打包配置
    timeout: 60000, // 请求超时时间毫秒
    headers: {
        token: sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
});

// 添加请求拦截器
service.interceptors.request.use(
    function (config: any) {
        if (config.url?.startsWith(config.baseURL as any)) {
            config.url = config.url?.replace(config.baseURL as any, '');
        }
        return config;
    },
    function (error: any) {
        // 对请求错误做些什么
        console.log(error);
        return Promise.reject(error);
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    function (response: any) {
        // console.log(response);
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        // dataAxios 是 axios 返回数据中的 data
        if (response.data.code && response.data.code != 0 && response.data.code != -1) {
            Message.error(response.data.msg);
            if (response.data.code == 1001) {
                //账户未登录，或者登录已经过期
                setTimeout(function () {
                    //跳转登录页
                    window.location.href = response.data.data.url;
                }, 500);
            } else if (response.data.code == 1002) {
                //无资源访问权限。
            } else {
                //无资源访问权限。
            }
            return Promise.reject(response.data);
        }
        const dataAxios = response.data;
        // 这个状态码是和后端约定的
        //const code = dataAxios.reset;
        return dataAxios;
    },
    function (error: any) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        // console.log(error);
        return Promise.reject(error);
    }
);

export default service;
