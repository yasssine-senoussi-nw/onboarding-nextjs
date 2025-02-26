import MuiThemeProvider from "~app/muiThemeProvider/MuiThemeProvider";
import HomePage from "~app/page";

import { render } from "./test-utils";

jest.mock("next/navigation");

describe("Testing page example", () => {
  it("should render home", () => {
    const { container } = render(
      <MuiThemeProvider>
        <HomePage />
      </MuiThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
