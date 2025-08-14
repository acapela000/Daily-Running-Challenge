import { Result } from '../models/result';
import { User } from '../models/user';
import { Challenge } from '../models/challenge';
import db from '../db/index';

export class LeaderboardService {
    async getLeaderboard(challengeId: number, period: 'weekly' | 'monthly') {
        const results = await db.result.findMany({
            where: { challenge_id: challengeId },
            include: { user: true },
        });

        const leaderboard = this.calculateScores(results, period);
        return leaderboard;
    }

    private calculateScores(results: Result[], period: 'weekly' | 'monthly') {
        const scores = results.reduce((acc, result) => {
            const userId = result.user_id;
            const distance = result.distance_km;
            const time = result.time_minutes;

            if (!acc[userId]) {
                acc[userId] = { user: result.user, totalDistance: 0, totalTime: 0, score: 0 };
            }

            acc[userId].totalDistance += distance;
            acc[userId].totalTime += time;
            acc[userId].score = this.calculateScore(distance, time);

            return acc;
        }, {});

        return Object.values(scores).sort((a, b) => b.score - a.score);
    }

    private calculateScore(distance: number, time: number) {
        // Example scoring logic: 1 point per km, minus 1 point for every 2 minutes of time
        return distance - (time / 2);
    }
}