var express = require('express');
var router = express.Router();
var modelos = require('../models/usuario');

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log('u? ', modelos);
	Usuario.findAll().then(usuarios => {
		console.log("All users:", JSON.stringify(usuarios, null, 4));
		res.send(JSON.stringify(users, null, 4));
	});
	
});

module.exports = router;
