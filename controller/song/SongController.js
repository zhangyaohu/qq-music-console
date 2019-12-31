
let {commonParams} = require('../../utils/enum'),
SongService = require('../../service/song/songService');

let getSongSuggestListCtrl = (req, res, next) => {
	let param = Object.assign({'-': 'recom06556820014060571'}, req.query, commonParams);
   SongService.GetSongSuggestService(param, res, req, next);
}

let getSongSearchListCtrl = (req, res, next) => {
	let param = Object.assign({'-': 'recom06556820014060571'}, req.query, commonParams);
	SongService.GetSongSearchService(param, res, req, next);
}

let getSongrDetailListCtrl = (req, res, next) => {
	let param = Object.assign({},req.query, commonParams);
	SongService.GetSongDetailListService(param, res, req, next);
}

let getSongCollectCtrl = (req, res, next) => {
	let param = Object.assign({}, req.query, commonParams);
	SongService.GetSongCollectService(param, res, req, next);
}

let getLyricCtrl = (req, res, next) => {
	let param = Object.assign({'-': 'jsonp1'}, req.query, commonParams);
	SongService.GetLyricService(param, res, req, next);
}

let getLyricInfoCtrl = (req, res, next) => {
	let param =  Object.assign({'-': 'getUCGI9466839683664574'}, req.query, commonParams);
	SongService.GetLyricInfoService(param, res, req, next);
} 
module.exports = {
	GetSongSuggestListCtrl: getSongSuggestListCtrl,
	GetSongSearchListCtrl: getSongSearchListCtrl,
	GetSongDetailListCtrl: getSongrDetailListCtrl,
	GetSongCollectCtrl: getSongCollectCtrl,
	GetLyricCtrl: getLyricCtrl,
	GetLyricInfoCtrl: getLyricInfoCtrl,
}