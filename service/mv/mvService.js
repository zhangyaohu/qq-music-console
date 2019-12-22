
var HttpAPI = require('../../utils/http');
let getAllMVService = async (param, res, req, next) => {
 HttpAPI('/mv/fcgi-bin/getmv_by_tag', 'get', param, 'c')
 .then((response) => {
	 res.status('200').send(response);
 })
}

module.exports = {
	GetAllMVService: getAllMVService
}