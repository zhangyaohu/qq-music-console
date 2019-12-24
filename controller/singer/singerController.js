const SingerService = require('../../service/singer/singerService');
let {commonParams} = require('../../utils/enum');

let getSingerListCtrl = (req, res, next) => {
	let param = Object.assign({'-': 'getUCGI01828070063591869'}, req.query, commonParams);
	SingerService.GetSingerListService(param, res, req, next);
}

module.exports = {
	GetSingerListCtrl: getSingerListCtrl,
}