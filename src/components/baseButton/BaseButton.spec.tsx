import { render, userEvent } from "~__test__/test-utils";
import { BaseButton } from "~components/baseButton";

describe("BaseButton component", () => {
  const defaultProps = {
    text: "Hello World",
    onClick: jest.fn(),
  };

  let buttonElement: HTMLElement;

  beforeEach(() => {
    // reset the mock
    jest.clearAllMocks();
    const buttonComponent = render(<BaseButton text={defaultProps.text} onClick={defaultProps.onClick}></BaseButton>);
    buttonElement = buttonComponent.getByRole("button", { name: defaultProps.text });
  });

  it("should be in the DOM", () => {
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call the onClick handler when clicked", async () => {
    const user = userEvent.setup();
    await user.click(buttonElement);
    expect(defaultProps.onClick).toBeCalledTimes(1);
  });

  it("should call the onClick handler twice when clicked twice", async () => {
    const user = userEvent.setup();
    await user.click(buttonElement);
    await user.click(buttonElement);
    expect(defaultProps.onClick).toBeCalledTimes(2);
  });
});
