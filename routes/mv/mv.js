var express = require('express');
var router = express.Router();
var MVController = require('../../controller/mv/mvController.js');
/* GET home page. */
router.get('/all', function(req, res, next) {
  return MVController.GetAllMVCtrl(req, res, next);
});

module.exports = router;
