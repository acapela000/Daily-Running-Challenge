import { Streak } from '../models/streak';
import { Result } from '../models/result';

export class StreakService {
    async getUserStreak(userId: string): Promise<number> {
        const streak = await Streak.findOne({ where: { user_id: userId } });
        return streak ? streak.streak_count : 0;
    }

    async updateStreak(userId: string, result: Result): Promise<void> {
        const streak = await Streak.findOne({ where: { user_id: userId } });

        if (streak) {
            streak.streak_count += 1;
            await streak.save();
        } else {
            await Streak.create({ data: { user_id: userId, streak_count: 1 } });
        }
    }

    async resetStreak(userId: string): Promise<void> {
        await Streak.upsert({
            where: { user_id: userId },
            update: { streak_count: 0 },
            create: { user_id: userId, streak_count: 0 },
        });
    }
}