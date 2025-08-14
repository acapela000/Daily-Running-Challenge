export const calculatePace = (distanceKm: number, timeMinutes: number): string => {
    if (timeMinutes <= 0 || distanceKm <= 0) {
        throw new Error("Distance and time must be greater than zero.");
    }

    const paceMinutesPerKm = timeMinutes / distanceKm;
    const minutes = Math.floor(paceMinutesPerKm);
    const seconds = Math.round((paceMinutesPerKm - minutes) * 60);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds} min/km`;
};