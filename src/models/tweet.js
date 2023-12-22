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

/*Virtual : "virtuals" refer to fields that are not stored in the database but can be accessed as if they are. Virtuals are useful for computed properties or fields that depend on other data in the document. */
tweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \nCreated by : ${this.userEmail}`;
});


//Automatic Mongo will make collection to be pluralise i.e Tweet --> Tweets:
const Tweet = mongoose.model('Tweet' , tweetSchema);
module.exports = Tweet;