var olive = require('../models/icecreamSchema');

// List of all Icecream
exports.olive_list = async function (req, res) {
    // res.send('NOT IMPLEMENTED: Icecream list');
    try {
        theOlives = await olive.find();
        res.send(theOlives);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Olive.
exports.olive_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: olive detail: ' + req.params.id);
};
// Handle olive create on POST.
exports.olive_create_post = async function (req, res) {
    //res.send('NOT IMPLEMENTED: Icecream create POST');
    console.log(req.body)
    let document = new olive();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Olives_color = req.body.Olives_color;
    document.Olives_quantity = req.body.Olives_quantity;
    document.Olives_cost = req.body.Olives_cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Olive delete form on DELETE.
exports.olive_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: olive delete DELETE ' + req.params.id);
};
// Handle Icecream update form on PUT.
exports.olive_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Icecream update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.olive_view_all_Page = async function (req, res) {
    try {
        theOlives = await olive.find();
        res.render('olives', { title: 'Olive Search Results', results: theOlives });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};