import HomePage from "~app/page";

import { render } from "./test-utils";

describe("Landing page home component", () => {
  it("there should be only one and only one 'landing' classname and must be in a div", () => {
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
