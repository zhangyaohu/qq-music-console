
var HttpAPI = require('../../utils/http');
let getSingerListService = async (param, res, req, next) => {
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
	GetSingerListService: getSingerListService,
	GetSongSearchService: getSongSearchService
}