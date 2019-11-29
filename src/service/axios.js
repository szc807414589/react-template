import axios from 'axios'

const baseUrl = 'https://isou.io/api'

const request = async (options = {}) => {
	const { method = 'POST', url = '', data = {} } = options
	const requestUrl = baseUrl + url
	try {
		const result = await axios({
			url: requestUrl,
			method,
			data,
			timeout: 10000,
			withCredentials: true
		})
		if (!result || !result.data) {
			return new Error('遇到了一个意料之外的错误')
		}

		return result.data

	} catch (error) {
		console.error(error)
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