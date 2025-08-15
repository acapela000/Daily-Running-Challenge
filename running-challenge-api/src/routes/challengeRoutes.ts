import { Router } from "express";
import { ChallengeController } from "../controllers/challengeController";

const router = Router();
const challengeController = new ChallengeController();

router.post("/", challengeController.createChallenge.bind(challengeController));
router.get("/", challengeController.getChallenges.bind(challengeController));
router.put(
  "/:id",
  challengeController.updateChallenge.bind(challengeController)
);
router.delete(
  "/:id",
  challengeController.deleteChallenge.bind(challengeController)
);

export default router;
