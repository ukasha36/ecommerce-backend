import { Router } from "express";
import getController from "../controllers/get.js";
import signupController from "../controllers/post.js";

const router = Router();

router.get('/', getController);
router.post('/signup', signupController);

export default router;
