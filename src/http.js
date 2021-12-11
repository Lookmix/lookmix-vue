import axios from 'axios'
import axiosRetry from 'axios-retry';
import store from '@/store/index.js'

var axiosInstance = axios.create()

axiosRetry(axiosInstance, { 
  retryDelay: (retryCount) => {
    return retryCount * 1000;
  }, 
  retries: 4,
  retryCondition: (error) => {
    const response = error.response
    if (response !== undefined && response !== null) {
      const status = response.status

      if (status >= 400 && status < 600) {
        return false;
      }
    }
    // retry no matter what
    return true;
  } 
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.state.connectionOffline = false
  console.log("request intercept")
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log("response intercept")
  return response;
}, function (error) {
  console.log(error.response)
  const response = error.response

  if (response === undefined || response === null) {
    console.log("CONECTION OFFLINE ------------------------------------------")
    store.state.connectionOffline = true
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axiosInstance