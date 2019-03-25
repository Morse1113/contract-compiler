var solc = require('solc');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express'})
});

router.post('/compile', function (req, res, next) {
    let params = req.body;
    console.log(params.input);
    let output = JSON.parse(solc.compile(params.input));
    res.json(output);
});

module.exports = router;
