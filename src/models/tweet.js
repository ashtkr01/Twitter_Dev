import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    // content always be there
    content : {
        type : String,
        required : true,
        max : [250 , 'Tweet cannot be more than 250 characters']
    },
} , {timestamps : true});

//Automatic Mongo will make collection to be pluralise i.e Tweet --> Tweets:
const Tweet = mongoose.model('Tweet' , tweetSchema);
export default Tweet;