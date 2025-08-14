import { Router } from 'express';
import { UserController } from '../controllers/userController';

const router = Router();
const userController = new UserController();

// Route to get user information
router.get('/:id', userController.getUser);

// Route to update user profile
router.put('/:id', userController.updateUser);

export default router;