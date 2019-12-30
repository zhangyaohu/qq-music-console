
let {commonParams} = require('../../utils/enum'),
TopListService = require('../../service/topList/topListService');

let getTopListAllCtrl = (req, res, next) => {
	let param = Object.assign({'-': 'getUCGI9857142517555484'}, req.query, commonParams);
	TopListService.GetAllTopListService(param, res, req, next);
}

let getCommentCtrl = (req, res, next) => {
	let param = Object.assign({}, req.query, commonParams);
	TopListService.GetCommentService(param, res, req, next);
}

let putPraise = (req, res, next) => {
	let param = Object.assign({}, req.query, commonParams);
	TopListService.PutPraiseService(param, res, req, next);
}

module.exports = {
	GetTopListAllCtrl: getTopListAllCtrl,
	GetCommentCtrl: getCommentCtrl,
	PutPraise: putPraise,
}