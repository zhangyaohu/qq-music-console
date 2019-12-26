
let {commonParams} = require('../../utils/enum'),
AlbumService = require('../../service/album/albumService');

let getAllAlbumCtrl = (req, res, next) => {
	let param = Object.assign({'-': 'getUCGI011236625609026385'}, req.query, commonParams);
	console.log(param);
	AlbumService.GetAllAlbumService(param, res, req, next);
}

module.exports = {
	GetAllAlbumCtrl: getAllAlbumCtrl,
}