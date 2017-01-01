let express = require('express'),
    router = express.Router();
import sendemail from "../public/js/sendmail"

module.exports = function(router) {
    router.get('/contact', function(req, res, next) {
        res.render('../views/contact');
    });

    router.post('/email', function(req,res) {
        sendemail(req.body.email, req.body.subject)
    });
    return router;
};