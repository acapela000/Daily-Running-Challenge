import { Result } from "../models/result";
import { User } from "../models/user";
import { Challenge } from "../models/challenge";
import { calculatePace } from "../utils/caloriesCalculator";
import { db } from "../db/index";

export class ResultService {
  async submitResult(
    userId: number,
    challengeId: number,
    distanceKm: number,
    timeMinutes: number,
    date: Date
  ) {
    const calories = this.calculateCalories(distanceKm, 70); // Default weight
    const pace = calculatePace(distanceKm, timeMinutes);

    const result = await db.result.create({
      data: {
        user_id: userId,
        challenge_id: challengeId,
        distance_km: distanceKm,
        time_minutes: timeMinutes,
        calories: calories,
        date: date,
      },
    });

    return result;
  }

  private calculateCalories(distanceKm: number, weight: number): number {
    return distanceKm * weight;
  }

  async getResultsByUser(userId: number) {
    return await db.result.findMany({
      where: { user_id: userId },
    });
  }

  async getResultsByChallenge(challengeId: number) {
    return await db.result.findMany({
      where: { challenge_id: challengeId },
    });
  }

  async calculateUserStreak(userId: number) {
    // Logic to calculate user streak based on results
  }
}
