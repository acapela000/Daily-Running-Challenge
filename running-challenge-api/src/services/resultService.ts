import { Result } from '../models/result';
import { User } from '../models/user';
import { Challenge } from '../models/challenge';
import { calculatePace, calculateCalories } from '../utils/caloriesCalculator';
import db from '../db';

export class ResultService {
    async submitResult(userId: number, challengeId: number, distanceKm: number, timeMinutes: number, date: Date) {
        const calories = calculateCalories(distanceKm, userId); // Assuming user weight is stored in User model
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

    async getResultsByUser(userId: number) {
        const results = await db.result.findMany({
            where: { user_id: userId },
        });

        return results;
    }

    async getResultsByChallenge(challengeId: number) {
        const results = await db.result.findMany({
            where: { challenge_id: challengeId },
        });

        return results;
    }

    async calculateUserStreak(userId: number) {
        // Logic to calculate user streak based on results
    }
}