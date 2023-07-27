import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiRoutes);
//import service from './services/tweet_service.js';
app.listen(port, async() => {
  console.log('server started');
  await connect();
  console.log('mongo db connected');
  //let ser = new service();
  //await ser.create({content : 'done #FUN #try?'})



  


});        