import axios from 'axios'
import axiosRetry from 'axios-retry';
import store from '@/store/index.js'
import router from "@/router/index.js"

const axiosInstance = axios.create()

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
axiosInstance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    store.commit("setConnectionOffline", false)
  
    let xsrfCookieName = "csrf_access_token"

    if (config.url.includes("/refresh")) {
      xsrfCookieName = "csrf_refresh_token"
    }
    if (config.withCredentials) {
      config.xsrfCookieName = xsrfCookieName
      config.xsrfHeaderName = "X-CSRF-TOKEN"
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  // Trigged if status code is 2xx 
  // Do something with response data
  function (response) {
    return response;
  }, 
  // Trigged if status codes is not 2xx 
  // Do something with response error
  function (error) {
    const response = error.response
    const isLogin = response.config.url.includes("/login")
    const isRefresh = response.config.url.includes("/refresh")
    const status = response.status

    if (status === 401) {
      if (!isLogin && !isRefresh) {
        return store.dispatch("refreshToken")
          .then(() => {
            return axiosInstance.request(error.config)
          })
          .catch((error) => {
            console.log(error)
          })
      }
      store.commit("setAuthenticated", false)
      router.push("/login")
    }
    if (response === undefined || response === null) {
      console.log(" - CONNECTION OFFLINE - ")
      store.commit("setConnectionOffline", true)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance