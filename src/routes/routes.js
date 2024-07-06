import { Router } from "express";
import userRoute from '../../users/services/routes.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Welcome to the API');
});
router.use('/user', userRoute);

export default router;
