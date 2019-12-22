
var HttpAPI = require('../../utils/http');
let getSongSuggestService = async (param, res, req, next) => {
 HttpAPI('', 'get', param, 'u')
 .then((response) => {
	 res.status('200').send(response);
 })
}

let getSongSearchService = async (param, res, req, next) => {
	HttpAPI(`/splcloud/fcgi-bin/${req.params.type}`, 'get', param, 'c')
	.then((response) => {
		res.status('200').send(response);
	})
 }
module.exports = {
	GetSongSuggestService: getSongSuggestService,
	GetSongSearchService: getSongSearchService
}