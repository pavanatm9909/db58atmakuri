var express = require('express');
const canteen_controlers= require('../controllers/canteen');
var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET canteen */

router.get('/', canteen_controlers.canteen_view_all_Page ); 
router.get('/canteen/:id', canteen_controlers.canteen_detail);

// GET detail canteen page.
router.get('/detail', canteen_controlers.canteen_view_one_Page); 
/* GET create canteen page */ 
router.get('/create',secured, canteen_controlers.canteen_create_Page);
/* GET create update page */ 
router.get('/update',secured, canteen_controlers.canteen_update_Page);
/* GET delete canteen page */ 
router.get('/delete',secured, canteen_controlers.canteen_delete_Page);  

module.exports = router;

