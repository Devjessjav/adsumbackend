import {Router} from "express";
import { methods as commentsControllers} from '../controllers/comments.controllers'

const router = Router();

router.get("/", commentsControllers.getComments);
router.post("/comments", commentsControllers.addComment);


export default router;