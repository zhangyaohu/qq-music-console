
var HttpAPI = require('../../utils/http');
let getAllMVService = async (param, res, req, next) => {
 HttpAPI('', 'get', param, 'c')
 .then((response) => {
	 res.status('200').send(response);
 })
}

module.exports = {
	GetAllMVService: getAllMVService
}