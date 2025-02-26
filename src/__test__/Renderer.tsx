import React from "react";

import type { RenderResult } from "~__test__/test-utils";
import { render as _render } from "~__test__/test-utils";
import { TranslationProvider } from "~i18n";

import type { ReactElement } from "react";

export class Renderer {
  private ui: ReactElement;

  public constructor(ui: ReactElement) {
    this.ui = ui;
  }

  public withTranslation(): this {
    this.ui = <TranslationProvider>{this.ui}</TranslationProvider>;
    return this;
  }

  public withAllProviders(providers: ReactElement[]): this {
    this.ui = providers.reduceRight((childElement, currentProvider) => {
      return React.cloneElement(currentProvider, {}, childElement);
    }, this.ui);
    return this;
  }

  public render(): RenderResult {
    return _render(this.ui);
  }
}
