import axios from 'axios'

const base_url = 'https://isou.io/api'
const request = async (options = {}) => {
	const { method = 'POST', url = '', data = {} } = options
	const requestUrl = base_url + url
	try {
		const result = await axios({
			url: requestUrl,
			method: method,
			data: data,
			timeout: 100000,
			withCredentials: true //是否跨域请求
		})
		if (!result || !result.data) {
			return new Error('未知错误')
		}
		return result.data
	} catch (error) {
		return error
	}
}

export const PostApi = (url = '', data = {}) => {
	return request({
		url,
		data,
		method: 'POST'
	})
}
export const GetApi = (url = '', data = {}) => {
	return request({
		url,
		data,
		method: 'GET'
	})
}