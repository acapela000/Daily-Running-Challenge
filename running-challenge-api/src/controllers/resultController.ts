export class ResultController {
    async submitResult(req, res) {
        const { userId, challengeId, distanceKm, timeMinutes, date } = req.body;

        // Validate input
        if (!userId || !challengeId || !distanceKm || !timeMinutes || !date) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        try {
            // Calculate calories burned (assuming a function exists in resultService)
            const calories = this.calculateCalories(distanceKm, req.user.weight);

            // Save result to the database (assuming a function exists in resultService)
            const result = await resultService.saveResult({
                userId,
                challengeId,
                distanceKm,
                timeMinutes,
                calories,
                date,
            });

            return res.status(201).json(result);
        } catch (error) {
            return res.status(500).json({ message: 'Error submitting result', error });
        }
    }

    calculateCalories(distanceKm, weight) {
        // Example calculation: 1 km burns approximately 1 kcal per kg of body weight
        return distanceKm * weight;
    }
}