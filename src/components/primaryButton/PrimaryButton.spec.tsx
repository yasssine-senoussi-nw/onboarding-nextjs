import { render, userEvent } from "~__test__/test-utils";
import muiTheme from "~app/muiThemeProvider/mui-theme";
import { PrimaryButton } from "~components/primaryButton";

import { ThemeProvider } from "@emotion/react";

describe("PrimaryButton component", () => {
  const defaultProps = {
    text: "Hello World",
    onClick: jest.fn(),
  };

  let buttonElement: HTMLElement;

  beforeEach(() => {
    // reset the mock
    jest.clearAllMocks();
    const buttonComponent = render(
      <ThemeProvider theme={muiTheme}>
        <PrimaryButton text={defaultProps.text} onClick={defaultProps.onClick}></PrimaryButton>,
      </ThemeProvider>,
    );
    buttonElement = buttonComponent.getByRole("button", { name: defaultProps.text });
  });

  it("should be in the DOM", () => {
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call the onClick handler when clicked", async () => {
    const user = userEvent.setup();
    await user.click(buttonElement);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("should change the background color when hovered", () => {
    expect(buttonElement).toHaveStyle("background-color: white");
    expect(buttonElement).toHaveStyle(`color: ${muiTheme.palette.secondary.main}`);
  });
});
