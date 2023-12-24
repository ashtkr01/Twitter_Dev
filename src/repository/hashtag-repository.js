const Hashtag = require('../models/hashtags');

//Class:
class HashtagRepository{
    async create(data){
        try {
            const hashtag = await Hashtag.create(data);
            //Return:
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }
    //Find:
    async find(data){
        try {
            const hashtag = await Hashtag.find({title : data.title});
            //Return:
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;