//引用Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//实例store对象
const store = new Vuex.Store({
    state: {
        //这里放全局参数
        userinfo: {},
        token: ''
    },
    mutations: {
        //这里是set方法
        setUserInfo(state, userinfo){
            state.userinfo = userinfo
        },
        setToken(state, token){
            state.token = token
        }
    },
    getters: {
        //这里是get方法
        getUserInfo: state => state.userinfo,
        getToken: state => state.token,
    },
    actions: {
        //这个部分我暂时用不上
    },
    modules: {
        //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里
    }
})

//导出store对象
export default store

//export default const store或者export const store会报错
