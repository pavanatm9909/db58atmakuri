var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var canteen_controller = require('../controllers/canteen');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// canteen ROUTES ///
// POST request for creating a canteen.
router.post('/resource/canteen', canteen_controller.canteen_create_post);
// DELETE request to delete canteen.
router.delete('/resource/canteen/:id', canteen_controller.canteen_delete);
// PUT request to update canteen.
router.put('/resource/canteen/:id', canteen_controller.canteen_update_put);
// GET request for one canteen.
router.get('/resource/canteen/:id', canteen_controller.canteen_detail);
// GET request for list of all canteen items.
router.get('/resource/canteen', canteen_controller.canteen_list);
// GET detail canteen page.
router.get('/canteen/detail', canteen_controller.costume_view_one_Page); 
/* GET create cantenn page */ 
router.get('/canteen/create', canteen_controller.costume_create_Page); 
module.exports = router;