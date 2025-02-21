import HomePage from "~app/page";

import { render } from "./test-utils";

describe("Landing page home component", () => {
  it("should be have one `div` with className 'landing'", () => {
    const { container } = render(<HomePage />);
    const landing = container.getElementsByClassName("landing");
    expect(landing.length).toBe(1);
    expect(landing[0]?.tagName).toBe("DIV");
  });

  it("there should be a background image with the url '/assets/svg/background.svg'", () => {
    const { container } = render(<HomePage />);
    const landing = container.getElementsByClassName("landing");
    expect(landing[0]).toHaveStyle("background-image: url(/assets/svg/background.svg)");
  });
});
