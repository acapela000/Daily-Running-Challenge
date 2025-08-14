import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboardController';

const router = Router();
const leaderboardController = new LeaderboardController();

// Route to get the leaderboard based on challenge ID
router.get('/:challengeId', leaderboardController.getLeaderboard.bind(leaderboardController));

export default router;