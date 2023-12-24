const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    tweets : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Tweet'
        }
    ]
}, {timestamps : true});

//To make Unique:
hashtagSchema.index({title: 1} , {unique: true});


const Hashtag = mongoose.model('Hashtag',hashtagSchema);
module.exports = Hashtag;