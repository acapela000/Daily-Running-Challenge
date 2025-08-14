export class LeaderboardController {
    constructor(private leaderboardService: any) {}

    async getLeaderboard(req: any, res: any) {
        const { challengeId } = req.params;

        try {
            const leaderboard = await this.leaderboardService.getLeaderboard(challengeId);
            return res.status(200).json(leaderboard);
        } catch (error) {
            return res.status(500).json({ message: 'Error retrieving leaderboard', error });
        }
    }
}