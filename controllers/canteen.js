var Canteen = require('../models/canteen'); 
 
// List of all Canteens 
exports.canteen_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Canteen list'); 
}; 
 
// for a specific Canteen. 
exports.canteen_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Canteen detail: ' + req.params.id); 
}; 
 
// Handle Canteen create on POST. 
exports.canteen_create_post =async function(req, res) { 
    console.log(req.body)
    let document = new Canteen();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Item_name":"regular", "quantity":13, "cost":43.56}
    document.Item_name = req.body.Item_name;
    document.Item_type = req.body.Item_type;
    document.Item_price = req.body.Item_price;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}; 
 
// Handle Canteen delete form on DELETE. 
exports.canteen_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Canteen delete DELETE ' + req.params.id); 
}; 
 
// Handle Canteen update form on PUT. 
exports.canteen_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Canteen update PUT' + req.params.id); 
}; 

// List of all Canteens
exports.canteen_list = async function (req, res) {
    try {
        theCanteen = await Canteen.find();
        res.send(theCanteen);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.canteen_view_all_Page = async function (req, res) {
    try {
        theCanteen = await Canteen.find();
        res.render('canteen', {
            title: 'Canteen Search Results',
            results: theCanteen
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
