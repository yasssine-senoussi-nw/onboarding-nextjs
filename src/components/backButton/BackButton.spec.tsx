import React from "react";

import { Renderer } from "~__test__/Renderer";
import { userEvent } from "~__test__/test-utils";
import { BackButton } from "~components/backButton/BackButton";

const mockRouter = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
}));

describe("back button tests", () => {
  const defaultProps = {
    url: "/",
  };

  let backButton: HTMLElement;

  beforeEach(() => {
    const result = new Renderer(<BackButton {...defaultProps} />).withAllProviders().render();
    backButton = result.getByRole("button");
  });

  it("should render the back button", () => {
    expect(backButton).toBeInTheDocument();
  });

  it("should navigate to url when clicked", async () => {
    const user = userEvent.setup();

    await user.click(backButton);
    expect(mockRouter.push).toBeCalledWith(defaultProps.url);
  });
});
