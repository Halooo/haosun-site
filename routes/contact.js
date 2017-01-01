var express = require('express');
var router = express.Router();

module.exports = function(router) {
    router.get('/contact', function(req, res, next) {
        res.render('../views/contact');
    });

    router.post('/email', function(req,res) {
        res.send('send email')
    });
    return router;
};