import describe = require("node:test");
import test = require("node:test");

const { it } = require("node:test");
const request = require("supertest");
const app = require("../src/app");

test.describe("API Endpoints", () => {
  describe("Auth", () => {
    it("should register a new user", async () => {
      const res = await request(app).post("/api/auth/register").send({
        name: "Test User",
        email: "testuser@example.com",
        password: "password123",
      });
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("email", "testuser@example.com");
    });

    it("should login an existing user", async () => {
      const res = await request(app).post("/api/auth/login").send({
        email: "testuser@example.com",
        password: "password123",
      });
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("token");
    });
  });

  describe("Challenges", () => {
    it("should create a new challenge", async () => {
      const res = await request(app)
        .post("/api/challenges")
        .send({
          title: "5K Daily",
          description: "Run 5km every day",
          target_distance_km: 5,
          start_date: new Date(),
          end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          created_by: 1,
        });
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("title", "5K Daily");
    });

    it("should get all challenges", async () => {
      const res = await request(app).get("/api/challenges");
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe("Results", () => {
    it("should submit a run result", async () => {
      const res = await request(app).post("/api/results/submit").send({
        userId: 1,
        challengeId: 1,
        distanceKm: 5,
        timeMinutes: 30,
        date: new Date(),
      });
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("distance_km", 5);
    });
  });

  describe("Leaderboard", () => {
    it("should get leaderboard for a challenge", async () => {
      const res = await request(app).get("/api/leaderboard/1");
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe("User", () => {
    it("should get user info", async () => {
      const res = await request(app).get("/api/users/1");
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("id", 1);
    });

    it("should update user profile", async () => {
      const res = await request(app)
        .put("/api/users/1")
        .send({ name: "Updated Name" });
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("name", "Updated Name");
    });
  });
});
// Import the expect function from Jest
const { expect } = require("@jest/globals");
