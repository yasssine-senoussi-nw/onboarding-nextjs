import MuiThemeProvider from "~app/muiThemeProvider/MuiThemeProvider";
import HomePage from "~app/page";

import { render } from "./test-utils";

jest.mock("next/navigation");

const bgImageUrl = "/assets/svg/background.svg";

describe("Landing page home component", () => {
  it("should be have one `div` with className 'landing'", () => {
    const { container } = render(
      <MuiThemeProvider>
        <HomePage />
      </MuiThemeProvider>,
    );
    const landing = container.getElementsByClassName("landing");
    expect(landing.length).toBe(1);
    expect(landing[0]?.tagName).toBe("DIV");
  });

  it(`should be have a background image with the url '${bgImageUrl}'`, () => {
    const { container } = render(
      <MuiThemeProvider>
        <HomePage />
      </MuiThemeProvider>,
    );
    const landing = container.getElementsByClassName("landing");
    expect(landing[0]).toHaveStyle(`background-image: url(${bgImageUrl})`);
  });
});
