import express from 'express';
import bodyParser from 'body-parser';

import { connect } from './config/database.js';

const PORT = 3000;

import apiRoutes from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api', apiRoutes);



app.listen(PORT, async () =>{
    console.log(`Started listen at ${PORT}`);

    await connect();

    console.log('Database got Connected');
});