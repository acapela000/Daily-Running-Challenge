import { Challenge } from "../models/challenge";
import { db } from "../db/index";

export class ChallengeService {
  async createChallenge(challengeData: Partial<Challenge>): Promise<Challenge> {
    const challenge = await db.challenge.create({
      data: challengeData,
    });
    return challenge;
  }

  async getChallenges(): Promise<Challenge[]> {
    const challenges = await db.challenge.findMany();
    return challenges;
  }

  async updateChallenge(
    id: number,
    challengeData: Partial<Challenge>
  ): Promise<Challenge> {
    const updatedChallenge = await db.challenge.update({
      where: { id },
      data: challengeData,
    });
    return updatedChallenge;
  }

  async deleteChallenge(id: number): Promise<Challenge> {
    const deletedChallenge = await db.challenge.delete({
      where: { id },
    });
    return deletedChallenge;
  }
}
