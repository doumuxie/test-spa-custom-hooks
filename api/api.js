import { request } from '@/utils/request.js'

export function wxLogin(data) {
    return request({
        url: '/api/v1/mini/auth/business/login',
        method: 'post',
        data:data
    })
}


export function cities() {
    return request({
        url: '/api/v1/movie/cities',
        method: 'post',
        data:{}
    })
}



export function hotMovieList(data) {
    return request({
        url: '/api/v1/movie/hotList',
        method: 'post',
        data:data
    })
}


export function comingMovieList(data) {
    return request({
        url: '/api/v1/movie/comingList',
        method: 'post',
        data:data
    })
}

// 获取轮播图
export function GetswiperList(data) {
    return request({
        url: '/api/v1/headerImg/list',
        method: 'post',
        data:data
    })
}

// 获取城市列表
export function GetCities(data) {
    return request({
        url: '/api/v1/movie/cities',
        method: 'post',
        data:data
    })
}
// 获取电影院列表
export function GetCinema(data) {
    return request({
        url: '/api/v1/movie/cinemaList',
        method: 'post',
        data:data
    })
}

// 获取某电影的影院列表
export function GetCinemaByFilm(data) {
    return request({
        url: '/api/v1/movie/movieScheduleList',
        method: 'post',
        data:data
    })
}
// 获取某电影的排片日期列表
export function GetShowDateByFilm(data) {
    return request({
        url: '/api/v1/movie/showDate',
        method: 'post',
        data:data
    })
}
// 获取影院的上映电影列表（场次排期）
export function GetCinemaScheduleList(data) {
    return request({
        url: '/api/v1/movie/cinemaScheduleList',
        method: 'post',
        data:data
    })
}
// 座位数据
export function GetSeatInfo(data) {
    return request({
        url: '/api/v1/movie/seat',
        method: 'post',
        data:data
    })
}
// 提交订单
export function orderSubmit(data) {
    return request({
        url: '/api/v1/order/submit',
        method: 'post',
        data:data
    })
}

// 订单状态
export function orderState(data) {
    return request({
        url: '/api/v1/order/state',
        method: 'post',
        data:data
    })
}

// 订单状态
export function GetUserPhone() {
    return request({
        url: '/api/v1/user/getPhone',
        method: 'get'
    })
}

// 订单列表分页
export function GetOrderPage(data) {
    return request({
        url: '/api/v1/order/page',
        method: 'post',
        data:data
    })
}
// 订单详情
export function GetOrderDetail(data) {
    return request({
        url: '/api/v1/order/detail',
        method: 'post',
        data:data
    })
}
// 用户信息
export function GetUserInfo(data) {
    return request({
        url: '/api/v1/mini/auth/user/info',
        method: 'post',
        data:data
    })
}
// 用户主页看板数据
export function GetUserDashboard(data) {
    return request({
        url: '/api/v1/user/dashboard',
        method: 'post',
        data:data
    })
}

export function GetUserFansPage(data) {
    return request({
        url: '/api/v1/user/fansPage',
        method: 'post',
        data: data
    })
}
export function GetUserFansDashboard() {
    return request({
        url: '/api/v1/user/fansDashBoard',
        method: 'get',
    })
}
export function GetUserFansOrderDashboard() {
    return request({
        url: '/api/v1/rewardLog/fansOrderDashboard',
        method: 'get',
    })
}
export function GetFansOrderPage(data) {
    return request({
        url: '/api/v1/rewardLog/fansOrderPage',
        method: 'post',
        data: data
    })
}

export function SubAdvise(data) {
    return request({
        url: '/api/v1/advise/submit',
        method: 'post',
        data: data
    })
}

export function GetShareTemplatePage(data) {
    return request({
        url: '/api/v1/shareTemplate/page',
        method: 'post',
        data: data
    })
}



export function GetShareImg(id, data) {
    return request({
        url: '/api/v1/share/generate/' + id,
        method: 'post',
        data: data
    })
}

export function GetAreaList(data) {
    return request({
        url: '/api/v1/movie/areaList',
        method: 'post',
        data: data
    })
}



export function GetAppConfig() {
    return request({
        url: '/app/v1/config/query',
        method: 'post',
    })
}







