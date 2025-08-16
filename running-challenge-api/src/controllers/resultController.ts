import { Request, Response } from "express";
import { ResultService } from "../services/resultService";

export class ResultController {
  private resultService: ResultService;

  constructor() {
    this.resultService = new ResultService();
  }

  async submitResult(req: Request, res: Response) {
    const { userId, challengeId, distanceKm, timeMinutes, date } = req.body;

    if (!userId || !challengeId || !distanceKm || !timeMinutes || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const calories = this.calculateCalories(distanceKm, 70); // Default weight

      const result = await this.resultService.submitResult(
        userId,
        challengeId,
        distanceKm,
        timeMinutes,
        new Date(date)
      );

      return res.status(201).json(result);
    } catch (error: any) {
      return res
        .status(500)
        .json({ message: "Error submitting result", error: error.message });
    }
  }

  private calculateCalories(distanceKm: number, weight: number = 70): number {
    return distanceKm * weight;
  }
}
