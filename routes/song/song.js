var express = require('express');
var router = express.Router();
var SongController = require('../../controller/song/songController.js');
/* GET home page. */
router.get('/suggest', function(req, res, next) {
  return SongController.GetSongSuggestListCtrl(req, res, next);
});

module.exports = router;
