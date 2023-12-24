const express = require('express');
const app = express();
const connect = require('./config/database');

const PORT = 3000;

app.listen( async () =>{
    console.log(`Started listen at ${PORT}`);

    await connect();

    console.log('Database got Connected');
});