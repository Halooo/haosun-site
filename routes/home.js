/**
 * Created by hsun on 2016-12-31.
 */

var express = require('express');
var router = express.Router();
module.exports = function(router) {
    router.get('/', function(req, res, next) {
        res.render('../views/index', { title: 'Hao Sun' });
    });
    return router;
};
