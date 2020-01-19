
var HttpAPI = require('../../utils/http');
let getSongSuggestService = async (param, res, req, next) => {
 HttpAPI('', 'get', param, 'u')
 .then((response) => {
	 res.status('200').send(response);
 })
}

let getSongSearchService = async (param, res, req, next) => {
	HttpAPI(`/splcloud/fcgi-bin/${req.params.type}`, 'get', param, 'c')
	.then((response) => {
		res.status('200').send(response);
	})
 }

let getSongDetailListService = async (param, res, req, next) => {
	console.log(param);
	HttpAPI(`/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg`, 'get', param, 'c')
	.then((response) => {
		res.status('200').send(response);
	}).catch(err => {
		next(err);
	})
}

let getSongCollectService = async (param, res, req, next) => {
	HttpAPI(`/3gmusic/fcgi-bin/3g_dir_order_uinlist`, 'get', param, 'c')
	.then((response) => {
		res.status('200').send(response);
	}).catch(err => {
		next(err);
	})
}

let getLyricService = async (param, res, req, next) => {
	HttpAPI(`/lyric/fcgi-bin/fcg_query_lyric_yqq.fcg`, 'get', param, 'c')
	.then((response) => {
		res.status('200').send(response);
	}).catch(err => {
		next(err);
	})
}

let getLyricInfoService = async (param, res, req, next) => {
	console.log('param ====' + param)
	HttpAPI(``, 'get', param, 'u')
	.then((response) => {
		res.status('200').send(response);
	}).catch(err => {
		next(err);
	})
}

let getPlaySongService = async (param, path, res, req, next) => {
	HttpAPI(`http://isure.stream.qqmusic.qq.com/${path}`, 'get', param, 's')
	.then((response) => {
		res.status('200').send(response);
	}).catch(err => {
		next(err);
	})
} 

let songVkeyService = async (param, res, req, next) => {
	HttpAPI(`/base/fcgi-bin/fcg_music_express_mobile3.fcg`, 'get', param, 'c')
	.then((response) => {
		res.status('200').send(response);
	}).catch(err => {
		next(err);
	})
} 
module.exports = {
	GetSongSuggestService: getSongSuggestService,
	GetSongSearchService: getSongSearchService,
	GetSongDetailListService: getSongDetailListService,
	GetSongCollectService: getSongCollectService,
	GetLyricService: getLyricService,
	GetLyricInfoService: getLyricInfoService,
	GetPlaySongService: getPlaySongService,
	SongVkeyService: songVkeyService
}