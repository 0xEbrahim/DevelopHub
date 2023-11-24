import { Router } from 'express';
import { createPost, getAllPosts, updatePost } from '../controllers/post.Controllers';
const router = Router();

router.post('/posts', createPost);
router.get('/posts', getAllPosts);
router.put('/posts/:id', updatePost);
export default router;
