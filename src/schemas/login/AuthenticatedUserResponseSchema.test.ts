import type { AuthenticatedUserResponseType } from "~schemas/login/AuthenticatedUserResponseSchema";
import { AuthenticatedUserResponseSchema } from "~schemas/login/AuthenticatedUserResponseSchema";

describe("AuthenticatedUserResponseSchema", () => {
  it("should validate a correct login response", () => {
    const validData: AuthenticatedUserResponseType = {
      id: "12345",
      name: "user",
      email: "user@example.com",
      role: "admin",
      balance: 0,
    };

    expect(() => AuthenticatedUserResponseSchema.parse(validData)).not.toThrow();
  });

  it("should throw an error for missing fields", () => {
    const invalidData = {
      email: "user@example.com",
      role: "admin",
    };

    expect(() => AuthenticatedUserResponseSchema.parse(invalidData)).toThrow();
  });

  it("should throw an error for incorrect types", () => {
    const invalidData = {
      id: 12345, // Should be a string
      email: 67890, // Should be a string
      role: true, // Should be a string
    };

    expect(() => AuthenticatedUserResponseSchema.parse(invalidData)).toThrow();
  });
});
