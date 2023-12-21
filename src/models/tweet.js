const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    // content always be there
    content : {
        type : String,
        required : true
    },
    //userEmail may be or may not be present there:
    userEmail : {
        type : String
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]
} , {timestamps : true});


//Automatic Mongo will make collection to be pluralise i.e Tweet --> Tweets:
const Tweet = mongoose.model('Tweet' , tweetSchema);
module.exports = Tweet;