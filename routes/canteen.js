var express = require('express');
const canteen_controlers= require('../controllers/canteen');
var router = express.Router();

/* GET canteen */

router.get('/', canteen_controlers.canteen_view_all_Page ); 
router.get('/canteen/:id', canteen_controlers.canteen_detail);

// GET detail canteen page.
router.get('/detail', canteen_controlers.canteen_view_one_Page); 
/* GET create cantenn page */ 
router.get('/create', canteen_controlers.canteen_create_Page);
/* GET create update page */ 
router.get('/update', canteen_controlers.canteen_update_Page); 
module.exports = router;

