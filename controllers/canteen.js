var Canteen = require('../models/canteen');

// List of all Canteens 
exports.canteen_l
ist = function (req, res) {
    res.send('NOT IMPLEMENTED: Canteen list');
};

// for a specific Canteen. 
exports.canteen_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Canteen.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Canteen create on POST. 
exports.canteen_create_post = async function (req, res) {
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
exports.canteen_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Canteen.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Canteen update form on PUT. 
exports.canteen_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Canteen.findById(req.params.id)
        // Do updates of properties 
        if (req.body.Item_name)
            toUpdate.Item_name = req.body.Item_name;
        if (req.body.Item_type) toUpdate.Item_type = req.body.Item_type;
        if (req.body.Item_price) toUpdate.Item_price = req.body.Item_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
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

// Handle a show one view with id specified by query 
exports.costume_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Canteen.findById(req.query.id)
        res.render('canteendetail',
            { title: 'Canteen Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.costume_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('canteencreate', { title: 'Canteen Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
