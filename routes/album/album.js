var express = require('express');
var router = express.Router();
var AlbumController = require('../../controller/album/albumController.js');
/* GET home page. */
router.get('/all', function(req, res, next) {
  return AlbumController.GetAllAlbumCtrl(req, res, next);
});

module.exports = router;
