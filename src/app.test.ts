import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "./app.js";

describe("GET /", () => {
  it("Zwraca status 200 i tekst powitalny", async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);
    expect(res.text).toBe("Serwer działa");
  });

  it("Zwraca 404 dla nieistniejącej ścieżki", async () => {
    const res = await request(app).get("/zla-sciezka");

    expect(res.status).toBe(404);
  });
});
