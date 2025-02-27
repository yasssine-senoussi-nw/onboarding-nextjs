import { Renderer } from "~__test__/Renderer";
import type { RenderResult } from "~__test__/test-utils";
import { userEvent } from "~__test__/test-utils";
import HomePage from "~app/page";
import txKeys from "~i18n/translations";

enum Constants {
  bgImageUrl = "/assets/svg/background.svg",
}

const mockRouter = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockRouter,
  }),
}));

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("react-i18next", () => ({
  ...jest.requireActual("react-i18next"),
  useTranslation: () => {
    return {
      // eslint-disable-next-line id-length
      t: (str: string) => str,
    };
  },
}));

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

  it("should call mockRouter with 'signin' when the 'Sign In' button was pressed", async () => {
    const homePage = renderHomePage();
    // this should use txKeys and not a hardcoded value
    const signInButton = homePage.getByRole("button", { name: txKeys.home.buttons.join });
    expect(signInButton).not.toBeNull();
    await userEvent.click(signInButton);
    expect(mockRouter).toHaveBeenCalledWith("/signin");
  });

  function renderHomePage(): RenderResult {
    return new Renderer(<HomePage />).withAllProviders().render();
  }
});
