const SingerService = require('../../service/singer/singerService');
let {commonParams} = require('../../utils/enum');

let getSingerListCtrl = (req, res, next) => {
	let param = Object.assign({'-': 'getUCGI01828070063591869'}, req.query, commonParams);
	SingerService.GetSingerListService(param, res, req, next);
}

let getSingerDetailListCtrl = (req, res, next) => {
	let param = Object.assign({'-': 'albumSonglist28480535888666014'}, req.query, commonParams);
	SingerService.GetSingerDetailListService(param, res, req, next);
}

module.exports = {
	GetSingerListCtrl: getSingerListCtrl,
}