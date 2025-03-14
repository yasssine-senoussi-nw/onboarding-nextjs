import React from "react";

import { Renderer } from "~__test__/Renderer";
import { screen, userEvent } from "~__test__/test-utils";
import { MyAvatar } from "~components/avatar/MyAvatar";
import txKeys from "~i18n/translations";

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

describe("MyAvatar", () => {
  let avatarElement: HTMLElement;

  beforeEach(() => {
    const result = new Renderer(<MyAvatar />).withAllProviders().render();
    avatarElement = result.getByTestId("avatar-img");
  });

  it("should open and close popover on click", async () => {
    const user = userEvent.setup();

    await user.click(avatarElement);
    expect(screen.getByTestId("avatar-popover")).toBeInTheDocument();

    await user.click(avatarElement);
    expect(screen.queryByTestId("avatar-popover")).toBeNull();
  });

  it("should displays settings, help, and logout options", async () => {
    const user = userEvent.setup();
    await user.click(avatarElement);

    expect(screen.getByText(txKeys.mySpace.settings)).toBeInTheDocument();
    expect(screen.getByText(txKeys.mySpace.help)).toBeInTheDocument();
    expect(screen.getByText(txKeys.mySpace.logOut)).toBeInTheDocument();
  });
});
