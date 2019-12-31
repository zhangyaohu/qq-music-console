var express = require('express');
var router = express.Router();
var SingerController = require('../../controller/singer/singerController.js');
/* GET home page. */
router.get('/suggest', function(req, res, next) {
  return SongController.GetSongSuggestListCtrl(req, res, next);
});

router.get(`/list`, function(req, res, next) {
  return SingerController.GetSingerListCtrl(req, res, next);
});

module.exports = router;
