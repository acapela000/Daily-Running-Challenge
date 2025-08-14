import { Router } from 'express';
import { ResultController } from '../controllers/resultController';

const router = Router();
const resultController = new ResultController();

// Route for submitting run results
router.post('/submit', resultController.submitResult);

export default router;