import Vue from 'Vue'
import axios from 'axios'
Vue.use(axios)

// 
//  GET 方法封装
export const putRequest = (url) => {
    return axios({
      method: 'get',
      url: url
    });
  }

export default {
    putRequest
}