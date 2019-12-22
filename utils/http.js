const axios  = require('axios');
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;text/plain;';
axios.defaults.responseType = 'json;text/plain;charset=utf-8;';

// axios.interceptors.request.use((config) => {
//    console.log(config);
// })

// axios.interceptors.response.use((config) => {
// 	console.log(config);
// })

let HttpAPI = (url, method, options = {}, urlType) => {
	let baseURL= '';
	switch(urlType) {
		case 'y': 
		  baseURL = 'https://y.qq.com' + url;
		  break;
		case 'c':
			baseURL = 'https://c.y.qq.com' + url;
			break;
		case 'u':
			baseURL = 'https://u.y.qq.com/cgi-bin/musicu.fcg' + url;
			break;
		default:
		  baseURL = 'https://c.y.qq.com' + url;
	}
   console.log(baseURL);
  return axios[method](baseURL, {params: options})
    .then((response) => {
        if (!response) {
          throw Error('response is null');
        }
        console.log(`${url} request success`.info);
        return response.data;
		}).catch((error) => {
        console.log(`${url} request error`.error);
        throw error;
		})
}

module.exports = HttpAPI;