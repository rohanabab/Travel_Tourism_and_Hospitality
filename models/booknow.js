const mongoose = require('mongoose');
const booknow = new mongoose.Schema(
    {
        first_name:{
            type: String,
            require: true
        },
        last_name:{
            type: String,
            require: true
        },
        email_id:{
            type: String,
            require: true
        },
        modeoftransport:{
            type: String,
            require: true
        },
        phone_no:{
            type: Number,
            require: true
        },
        date:{
            type: Date,
            require: true
        },
        Destination:{
            type: String,
            require: true,
            hidden:true
        },
        StartingPoint:{
            type: String,
            require: true
        },
        state:{
            type: String,
            require: true
        },
        price:{
            type: Number,
            require: true
        },
        persons:{
            type:Number,
            require:true
        }
    }
);

module.exports =mongoose.model('booknowdetails',booknow)