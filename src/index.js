import express from 'express';
import { connect } from './config/database.js';

import TweetService from './services/tweet-service.js';

const app = express();

const PORT = 3000;

app.listen( async () =>{
    console.log(`Started listen at ${PORT}`);

    await connect();

    let tweetService = new TweetService();
    let tweet = await tweetService.create({
        content: 'I am a bhakt of #rana , #sangha , #amar '
    });
    console.log(tweet);

    console.log('Database got Connected');
});