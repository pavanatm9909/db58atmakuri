var express = require('express');
const canteen_controlers= require('../controllers/canteen');
var router = express.Router();

/* GET canteen */

router.get('/', canteen_controlers.canteen_view_all_Page );
router.get('/canteen/:id', canteen_controlers.canteen_detail);
module.exports = router;

