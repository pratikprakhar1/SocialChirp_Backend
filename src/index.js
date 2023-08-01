import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';
import { UserRepository,TweetRepository } from './repository/index.js'
import LikeService from './services/like_service.js';

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',apiRoutes);
app.listen(port, async() => {
  console.log('server started');
  await connect();
  console.log('mongo db connected');



  // const userRepo = new UserRepository();
  // const tweetRepo = new TweetRepository();
  // const tweets = await tweetRepo.getAll(0,10);
  // const users =  await userRepo.getAll();
  // const likeService = new LikeService();
  // await likeService.toggleLike(tweets[0].id,'Tweet',users[0].id)
  




});        