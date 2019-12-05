/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';
import {
  Message,
  MessageBox
} from 'element-ui';
import store from '../store';
// import {
//   getToken
// } from 'utils/auth';

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 500000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
//   if (store.getters.token) {
//     config.headers['Authorization'] = getToken(); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
//   }

  // // 时间戳
  // if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
  //   config.data = {
  //     ...config.data,
  //     t: Date.parse(new Date()) / 1000
  //   }
  // } else
  if (config.method === 'get') {
    config.params = {
      t: Date.parse(new Date()) / 1000,
      ...config.params
    }
  }

  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    const res = response.data;
    if (response.status === 401 || res.code === 40101) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('fedLogOutActon').then(() => {
          location.reload(); // 为了重新实例化vue-router对象 避免bug
        });
      })
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('error');
    }
    if (res.code === 40301) {
      Message({ message: '当前用户无相关操作权限！', type: 'error', duration: 4000 });
      return Promise.reject('error');
    }
    if (res.code === 40001) {
      Message({ message: '账户或密码错误！', type: 'error', duration: 4000 });
      return Promise.reject('error');
    }
    if (response.status === 200 && res.code === 200) {
      return response.data;
    } else {
      Message({ message: res.msg, type: 'error', duration: 4000 });
      return Promise.reject('error');
    }
  },
  error => {
    Message({ message: error.message, type: 'error', duration: 4000 });
    return Promise.reject(error);
  }
);

export default service;

