/**
 * Created by hsun on 2016-12-31.
 */
var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('../../config')

smtpTransport = nodemailer.createTransport(smtpTransport({
    service: config.email.service,
    auth: {
        user: config.email.username,
        pass: config.email.password
    }
}));



function sendemail (name ,sender, subject, message) {
    smtpTransport.sendMail({
        from: config.email.username,
        to: config.email.reciever,
        subject: ' <' + sender + '>' + "\n" + subject+ "\n",
        html: message
    }, function (error, response) {
        if (error) {
            console.log(error);
        }
        console.log('email sent successfully')
    });
}

module.exports = sendemail;