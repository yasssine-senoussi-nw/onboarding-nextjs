import { SigninFormSchema } from "~schemas/SigninFormSchema";
import { SigninFormatConstants } from "~schemas/SigninFormSchema.constants";

describe("Login Validation Schema", () => {
  it("should detect missing email", () => {
    const invalidData = {
      email: "",
      password: "validPassword123",
    };

    const result = SigninFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(SigninFormatConstants.noEmailInput);
    }
  });

  it("should detect invalid email domain", () => {
    const invalidData = {
      email: "test@gmail.com",
      password: "validPassword123",
    };

    const result = SigninFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(SigninFormatConstants.notaTheodoEmail);
    }
  });

  it("should detect missing password", () => {
    const invalidData = {
      email: "valid@theodo.com",
      password: "",
    };

    const result = SigninFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(SigninFormatConstants.noPasswordInput);
    }
  });

  it("should detect short password", () => {
    const invalidData = {
      email: "valid@theodo.com",
      password: "123",
    };

    const result = SigninFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe(SigninFormatConstants.notaValidPassword);
    }
  });

  it("should validate correct credentials", () => {
    const validData = {
      email: "valid@theodo.com",
      password: "validPassword123",
    };

    const result = SigninFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
