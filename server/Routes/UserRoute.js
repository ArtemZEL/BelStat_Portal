import  express  from "express";
import { UnfollowUserF, deleteUser, followUserF, getUser, updateUser } from "../Controllers/UserController.js";

const router =express.Router();

router.get('/:id',getUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)
router.put('/:id/follow',followUserF)
router.put('/:id/unfollow',UnfollowUserF)


export default router;


