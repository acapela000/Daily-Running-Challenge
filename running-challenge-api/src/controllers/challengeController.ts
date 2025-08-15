import { Request, Response } from "express";
import { ChallengeService } from "../services/challengeService";

export class ChallengeController {
  private challengeService: ChallengeService;

  constructor() {
    this.challengeService = new ChallengeService();
  }

  public async createChallenge(req: Request, res: Response): Promise<Response> {
    try {
      const challengeData = req.body;
      const newChallenge = await this.challengeService.createChallenge(
        challengeData
      );
      return res.status(201).json(newChallenge);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async getChallenges(req: Request, res: Response): Promise<Response> {
    try {
      const challenges = await this.challengeService.getChallenges();
      return res.status(200).json(challenges);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async updateChallenge(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const challengeData = req.body;
      const updatedChallenge = await this.challengeService.updateChallenge(
        id,
        challengeData
      );
      return res.status(200).json(updatedChallenge);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  public async deleteChallenge(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.challengeService.deleteChallenge(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
