import express from 'express';
import {createTweet, getTweet}   from '../../controllers/tweet-controller.js';
import {createComment } from '../../controllers/comment-controller.js';
import {toggleLike} from '../../controllers/like-controller.js';
import { login, signUp } from '../../controllers/auth-controller.js';
const router = express.Router();

router.post('/tweets', createTweet);
router.post('/likes/toggle',toggleLike);
router.post('/comments',createComment);
router.post('/signup',signUp);
router.post('/login',login);
router.get('/tweets/:id',getTweet);
export default router;