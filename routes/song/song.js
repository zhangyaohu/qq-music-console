var express = require('express');
var router = express.Router();
var SongController = require('../../controller/song/songController.js');
/* GET home page. */
router.get('/suggest', function(req, res, next) {
  return SongController.GetSongSuggestListCtrl(req, res, next);
});

router.get(`/search/:type`, function(req, res, next) {
  console.log('==============');
  return SongController.GetSongSearchListCtrl(req, res, next);
});

router.get('/detail', function(req, res, next) {
  return SongController.GetSongDetailListCtrl(req, res, next);
})

router.get('/collect', function(req, res, next) {
  return SongController.GetSongCollectCtrl(req, res, next);
})

router.get('/lyric', function(req, res, next) {
  return SongController.GetLyricCtrl(req, res, next);
})

router.get('/info', function(req, res, next) {
  return SongController.GetLyricInfoCtrl(req, res, next);
})
module.exports = router;
