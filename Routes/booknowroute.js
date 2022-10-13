const express1=require('express');
const booknowRouter = express1.Router();
const booknow = require('../models/booknow');

booknowRouter.route('/results').get((req,res,next) => {
    booknow.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
booknowRouter.route('/booking_details').post((req,res,next) => {
    console.log(req.body)
    booknow.create(req.body)
    .then((resp) => {
        console.log('new responce ', resp);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});
module.exports = booknowRouter; 