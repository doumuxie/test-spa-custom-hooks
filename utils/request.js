export const baseUrl = 'http://localhost:9003';

import store from '../store'
export const request = (options) => {
	let baseUrls =  baseUrl;
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrls + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			header: {
				'appCode': uni.getAccountInfoSync().miniProgram.appId,
				'token': store.getters.getToken || ''
			},
			success: (res) => {
				setTimeout(()=>{
					uni.stopPullDownRefresh()
				},500);
				if (res.statusCode !== 200) {
					if (res.statusCode == 400) {}
					reject(res);
					return uni.showToast({
						icon:'none',
						title: res.data.message
					})
				}
				resolve(res.data);
			},
			fail: (err) => {
				setTimeout(()=>{
					uni.stopPullDownRefresh()
					uni.hideToast()
				},800)
				uni.showToast({
					title: "IP接口错误！"+ err
				})
				console.log('err', err)
				reject(err)
			}
		})
	})
}
