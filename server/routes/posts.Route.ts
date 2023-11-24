import { Router } from "express";
import {createPost, getAllPosts} from '../controllers/post.Controllers'
const router = Router();


router.post('/posts', createPost);
router.get('/posts' , getAllPosts);

export default router;
