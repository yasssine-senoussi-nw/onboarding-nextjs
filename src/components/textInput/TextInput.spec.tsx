import React from "react";

import { Renderer } from "~__test__/Renderer";
import TextInput from "~components/textInput/TextInput";

describe("TextInput component", () => {
  const defaultProps = {
    type: "test",
    label: "test",
    value: "test",
  };

  let textInputElement: HTMLElement;

  beforeEach(() => {
    const textInputRenderResult = new Renderer(<TextInput {...defaultProps} />).withAllProviders().render();
    expect(textInputRenderResult).not.toBeNull();
    textInputElement = textInputRenderResult.getByLabelText(defaultProps.label);
  });

  it("should be in the DOM", () => {
    expect(textInputElement).toBeInTheDocument();
  });

  it("should render with the provided props", () => {
    expect(textInputElement).toHaveAttribute("type", defaultProps.type);
    expect(textInputElement).toHaveValue(defaultProps.value);
  });
});
