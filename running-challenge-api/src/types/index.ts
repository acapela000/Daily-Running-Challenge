export interface User {
    id: number;
    name: string;
    email: string;
    password_hash: string;
    created_at: Date;
}

export interface Challenge {
    id: number;
    title: string;
    description: string;
    target_distance_km: number;
    start_date: Date;
    end_date: Date;
    created_by: number;
}

export interface Result {
    id: number;
    user_id: number;
    challenge_id: number;
    distance_km: number;
    time_minutes: number;
    calories: number;
    date: Date;
    created_at: Date;
}

export interface Streak {
    user_id: number;
    streak_count: number;
}