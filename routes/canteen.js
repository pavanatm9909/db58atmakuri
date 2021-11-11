var express = require('express');
const canteen_controlers= require('../controllers/canteen');
var router = express.Router();

/* GET canteen */

router.get('/', canteen_controlers.canteen_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('canteen', { title: 'Search Results canteen' });
});

module.exports = router;