
var HttpAPI = require('../../utils/http');
let getSongSuggestService = async (param, res, req, next) => {
 HttpAPI('', 'get', param, 'u')
 .then((response) => {
	 res.status('200').send(response);
 })
}

module.exports = {
	GetSongSuggestService: getSongSuggestService
}