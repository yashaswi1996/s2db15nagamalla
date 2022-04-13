var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var olive_controller = require('../controllers/olive');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// Icecream ROUTES ///
// POST request for creating a Icecream.
router.post('/olives', olive_controller.olive_create_post);
// DELETE request to delete Icecream.
router.delete('/olivess/:id', olive_controller.olive_delete);
// PUT request to update Icecream.
router.put('/olives/:id', olive_controller.olive_update_put);
// GET request for one Icecream.
router.get('/olives/:id', olive_controller.olive_detail);
// GET request for list of all Icecream items.
router.get('/olives', olive_controller.olive_list);

module.exports = router;