import { render, userEvent } from "~__test__/test-utils";
import { BaseButton } from "~components/baseButton";

describe("BaseButton component", () => {
  const defaultProps = {
    text: "Hello World",
    onClick: jest.fn(),
  };

  let buttonElement: HTMLElement;

  beforeEach(() => {
    const buttonComponent = render(<BaseButton text={defaultProps.text} onClick={defaultProps.onClick}></BaseButton>);
    buttonElement = buttonComponent.getByRole("button", { name: defaultProps.text });
  });

  it("should be present in the DOM when rendered", () => {
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call the onClick handler once when clicked", async () => {
    const user = userEvent.setup();
    await user.click(buttonElement);
    expect(defaultProps.onClick).toBeCalledTimes(1);
  });
});
