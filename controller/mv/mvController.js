
let {commonParams} = require('../../utils/enum'),
MVService = require('../../service/mv/mvService');

let getAllMVCtrl = (req, res, next) => {
	let param = Object.assign({'-': 'recom06556820014060571'}, req.query, commonParams);
	MVService.GetAllMVService(param, res, req, next);
}

module.exports = {
	GetAllMVCtrl: getAllMVCtrl,
}