import  express  from "express";
import { DeletePost, UpdatePost, createPost, getPost, getTimelinePost, likePost } from "../Controllers/PostController.js";
const router =express.Router()

router.post('/',createPost)
router.get('/:id',getPost)
router.put('/:id',UpdatePost)
router.delete('/:id',DeletePost)
router.put('/:id/like',likePost)
router.get('/:id/timeline',getTimelinePost)

export default router;