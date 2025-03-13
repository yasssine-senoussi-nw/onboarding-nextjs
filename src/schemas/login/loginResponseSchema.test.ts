import type { LoginResponseType } from "~schemas/login/loginResponseSchema";
import { LoginResponseSchema } from "~schemas/login/loginResponseSchema";

describe("loginResponseSchema", () => {
  it("should validate a correct login response", () => {
    const validData: LoginResponseType = {
      id: "12345",
      email: "user@example.com",
      role: "admin",
    };

    expect(() => LoginResponseSchema.parse(validData)).not.toThrow();
  });

  it("should throw an error for missing id", () => {
    const invalidData = {
      email: "user@example.com",
      role: "admin",
    };

    expect(() => LoginResponseSchema.parse(invalidData)).toThrow();
  });

  it("should throw an error for missing email", () => {
    const invalidData = {
      id: "12345",
      role: "admin",
    };

    expect(() => LoginResponseSchema.parse(invalidData)).toThrow();
  });

  it("should throw an error for missing role", () => {
    const invalidData = {
      id: "12345",
      email: "user@example.com",
    };

    expect(() => LoginResponseSchema.parse(invalidData)).toThrow();
  });

  it("should throw an error for incorrect types", () => {
    const invalidData = {
      id: 12345, // Should be a string
      email: 67890, // Should be a string
      role: true, // Should be a string
    };

    expect(() => LoginResponseSchema.parse(invalidData)).toThrow();
  });
});
