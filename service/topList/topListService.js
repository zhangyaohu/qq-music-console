
var HttpAPI = require('../../utils/http');
//获得所有排行榜列表
let getAllTopListService = async (param, res, req, next) => {
	HttpAPI('', 'get', param, 'u')
	.then((response) => {
		res.status('200').send(response);
	})
 }
//查询评论接口
 let getCommentService = async (param, res, req, next) => {
	 HttpAPI('/base/fcgi-bin/fcg_global_comment_h5.fcg', 'get', param, 'c')
	 .then(response => {
		 res.status('200').send(response);
	 }).catch(err => {
		 next(err);
	 })
 }
//点赞接口
 let putPraiseService = async (param, res, req, next) => {
	HttpAPI('/base/fcgi-bin/fcg_global_comment_praise_h5.fcg', 'get', param, 'c')
	.then(response => {
		res.status('200').send(response);
	}).catch(err => {
		next(err);
	})
 }

module.exports = {
	GetAllTopListService: getAllTopListService,
	GetCommentService: getCommentService,
	PutPraiseService:  putPraiseService,
}