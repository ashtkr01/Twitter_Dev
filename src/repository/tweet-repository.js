const Tweet = require('../models/tweet');

class TweetRepository{

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id){
        try {
            /*lean() is a method that you can chain to a Mongoose query to improve query performance by returning plain JavaScript objects instead of Mongoose documents.*/
            const tweet = await Tweet.findById(id).populate({path : 'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    
    async destroy(tweetId){
        try {
            const tweet = await Tweet.findByIdAndDelete(tweetId);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    //Sonething think in the direction of Pagination :
    async getAll(offset , limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;