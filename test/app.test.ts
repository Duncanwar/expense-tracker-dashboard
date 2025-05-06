import request from "supertest";
import app from "../src/app";

describe("My API Tests", () => {
  it("Should return ok 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Welcome to Expense Tracker");
  });
});
