import axios from 'axios';
import qs from 'qs';
import { Toast } from 'antd-mobile';

const baseUrl = '/opengt';

const request = async (options = {}) => {
    const {
        method = 'POST', url = '', data = {},
    } = options;
    const requestUrl = baseUrl + url;

    //header添加Authorization
    const Authorization = localStorage.getItem('Authorization') || '';

    // 添加请求拦截器
    axios.interceptors.request.use(config => config, error => {
        console.log(error);
        return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(
        response => {
            //如果返回header有access-token 保存到localStorage里面
            if (response.headers['access-token']) {
                localStorage.setItem('Authorization', response.headers['access-token']);
            }
            return response;
        },
        error => {
            // 非200情况下 弹出错误提示
            Toast.hide();
            const { response } = error;
            setTimeout(() => {
                Toast.offline(`${ response.status } ${ response.statusText }`);
            }, 10);
            return Promise.reject(error);
        },
    );

    try {
        const result = await axios({
            url    : requestUrl,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization : Authorization,
            },
            method,
            data           : data,
            timeout        : 10000,
            withCredentials: true,
        });

        //返回data 解密
        return result.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const PostTime = (url = '', data = {}) => {
    const reqData = qs.stringify({ Data: data });
    return request({
        url,
        reqData,
        method: 'POST',
    });
};
export const PostApi = (url = '', data = {}) => request({
    url,
    data,
    method: 'POST',
});
export const GetApi = (url = '', data = {}) => request({
    url,
    data,
    method: 'GET',
});
