export interface Challenge {
    id: number;
    title: string;
    description: string;
    target_distance_km: number;
    start_date: Date;
    end_date: Date;
    created_by: number; // User ID of the creator
    created_at?: Date; // Optional, to track when the challenge was created
}