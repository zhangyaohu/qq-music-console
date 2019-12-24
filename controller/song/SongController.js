
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
module.exports = {
	GetSongSuggestListCtrl: getSongSuggestListCtrl,
	GetSongSearchListCtrl: getSongSearchListCtrl,
}