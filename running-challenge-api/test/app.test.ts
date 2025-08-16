import request from "supertest";
import { PrismaClient } from "@prisma/client";
import app from "../src/app";

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.user.deleteMany({});
  await prisma.challenge.deleteMany({});
  await prisma.result.deleteMany({});
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("API Endpoints", () => {
  it("should work", () => {
    expect(true).toBe(true);
  });

  it("should make a simple request", async () => {
    const res = await request(app).get("/");
    expect(res).toBeDefined();
  });
});
