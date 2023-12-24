const { TweetRepository } = require('../repository/index');

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
    }
    //Create:
    async create(data){
        // const content = data.content;
        // const tagss = content.match(/#[a-zA-Z0-9_]+/g); //This regex extracts hashtags
        // tags = tagss.map((tag) => {
        //     tag.substring(1);
        // });
        // console.log(tags);
        // const tweet = await this.tweetRepository.create(data);
        /*
        To do create hashtags and add here
        1: bulkcreate in mongoose
        2: filter title of hashtags based on multiple tags
        3: How to add tweets id inside all the hashtags:
        */
       return TweetService;
    }
}

module.exports = TweetService;

/*
This is my #FIRst #tweet . I am really excited .
*/