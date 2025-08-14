export const calculateCaloriesBurned = (distanceKm: number, weightKg: number): number => {
    const MET = 9.8; // Metabolic Equivalent of Task for running
    const caloriesBurned = MET * weightKg * distanceKm;
    return caloriesBurned;
};