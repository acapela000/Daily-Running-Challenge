import { Challenge } from "../models/challenge";
import { db } from "../db/index";

export class ChallengeService {
  async createChallenge(challengeData: Partial<Challenge>): Promise<Challenge> {
    const challenge = await db.challenge.create({
      data: challengeData as any,
    });
    return challenge;
  }

  async getChallenges(): Promise<Challenge[]> {
    const challenges = await db.challenge.findMany();
    return challenges;
  }

  async updateChallenge(
    id: string,
    challengeData: Partial<Challenge>
  ): Promise<Challenge> {
    const updatedChallenge = await db.challenge.update({
      where: { id: parseInt(id) },
      data: challengeData as any,
    });
    return updatedChallenge;
  }

  async deleteChallenge(id: string): Promise<void> {
    await db.challenge.delete({
      where: { id: parseInt(id) },
    });
  }
}
