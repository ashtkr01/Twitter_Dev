const express = require('express');

const app = express();

const TweetRepository = require('./repository/tweet-repository')

const Comment = require('./models/comment');

const connect = require('./config/database');

const PORT = 3000;

app.listen( async () =>{
    console.log(`Started listen at ${PORT}`);

    await connect();

    const tweetRepo = new TweetRepository();

    const tweet = await tweetRepo.getWithComments('658471aa29da623ee760b180');
    //Call:
    // const tweet = await tweetRepo.create({
    //     content : 'Latest Content Now',
    //     userEmail : 'ranasangha2@getMaxListeners.com'
    // });
    // console.log(tweet);
    // const comment = await Comment.create({
    //     content : 'THis is the first Comment'
    // });
    // //Push:
    // tweet.comments.push(comment);
    // await tweet.save();

    // console.log(tweet);

    console.log(tweet);

    console.log('Database got Connected');
});