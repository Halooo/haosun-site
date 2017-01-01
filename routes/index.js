/**
 * Created by hsun on 2016-12-31.
 */
let express = require('express'),
    router = express.Router();

module.exports = [];

function addRouter(path) {
    if(typeof require(path) == "object"){
        console.warn("Warning on loading routes, ",path);
        return;
    }
    module.exports.push(require(path)(router));
}

addRouter('./home');
addRouter('./contact');
