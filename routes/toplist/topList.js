var express = require('express');
var router = express.Router();
var TopListController = require('../../controller/topList/topListController.js');

router.get(`/all`, function(req, res, next) {
  return TopListController.GetTopListAllCtrl(req, res, next);
});

module.exports = router;
