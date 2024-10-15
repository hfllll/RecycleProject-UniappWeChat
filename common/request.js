// src/common/request.js

const BASE_URL = 'http://192.168.31.238:8081'
// 你的API基础URL

const request = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      ...options,
      url: BASE_URL + options.url,  // 拼接基础 URL 和相对路径
      success: (response) => {
        if (response.statusCode === 200) {
          resolve(response.data);  // 请求成功时返回数据
        } else {
          reject(response);  // 请求失败时处理错误状态
        }
      },
      fail: (error) => {
        reject(error);  // 处理请求失败
      }
    });
  });
};

// GET 请求封装
export const get = (url, params = {}) => {
  return request({
    url,
    method: 'GET',
    data: params,
    header: {
      'Content-Type': 'application/json'
    }
  });
};

// POST 请求封装
export const post = (url, data = {}) => {
  return request({
    url,
    method: 'POST',
    data,
    header: {
      'Content-Type': 'application/json'
    }
  });
};

export default { get, post };
