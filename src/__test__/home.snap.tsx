import { Renderer } from "~__test__/Renderer";
import type { RenderResult } from "~__test__/test-utils";
import HomePage from "~app/page";

jest.mock("next/navigation");

describe("Testing page example", () => {
  it("should render home", () => {
    const { container } = renderHomePage();
    expect(container).toMatchSnapshot();
  });

  function renderHomePage(): RenderResult {
    return new Renderer(<HomePage />).withAllProviders().render();
  }
});
