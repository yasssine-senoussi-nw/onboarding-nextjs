import { Renderer } from "~__test__/Renderer";
import type { RenderResult } from "~__test__/test-utils";
import { userEvent } from "~__test__/test-utils";
import HomePage from "~app/page";

const mockRouter = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockRouter,
  }),
}));

enum Constants {
  bgImageUrl = "/assets/svg/background.svg",
}

describe("Landing page home component", () => {
  it("should be have one `div` with className 'landing'", () => {
    const { container } = renderHomePage();
    const landing = container.getElementsByClassName("landing");
    expect(landing.length).toBe(1);
    expect(landing[0]?.tagName).toBe("DIV");
  });

  it(`should be have a background image with the url '${Constants.bgImageUrl}'`, () => {
    const { container } = renderHomePage();
    const landing = container.getElementsByClassName("landing");
    expect(landing[0]).toHaveStyle(`background-image: url(${Constants.bgImageUrl})`);
  });

  it("should call mockRouter.push with 'signin' when the 'Sign In' button was pressed", async () => {
    const homePage = renderHomePage();
    // this should use txKeys and not a hardcoded value
    const signInButton = homePage.getByRole("button", { name: "S'inscrire" });
    expect(signInButton).not.toBeNull();
    await userEvent.click(signInButton);
    expect(mockRouter).toHaveBeenCalledWith("/signin");
  });

  function renderHomePage(): RenderResult {
    return new Renderer(<HomePage />).withAllProviders().render();
  }
});
