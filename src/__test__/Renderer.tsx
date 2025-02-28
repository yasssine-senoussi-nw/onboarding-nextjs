import type { RenderResult } from "~__test__/test-utils";
import { render as _render } from "~__test__/test-utils";
import MuiThemeProvider from "~app/muiThemeProvider/MuiThemeProvider";
import { TestGlobalStorageProvider } from "~hooks/useGlobalStorage";
import { TestTranslationProvider } from "~i18n";

import type { ComponentType } from "react";
import type { ReactElement } from "react";

export class Renderer {
  private ui: ReactElement;

  public constructor(ui: ReactElement) {
    this.ui = ui;
  }

  public withTranslation(): this {
    return this.withProvider(TestTranslationProvider);
  }

  public withThemeProvider(): this {
    return this.withProvider(MuiThemeProvider);
  }

  public withGlobalStorage(): this {
    return this.withProvider(TestGlobalStorageProvider);
  }

  public withAllProviders(): this {
    return this.withTranslation().withThemeProvider().withGlobalStorage();
  }

  public render(): RenderResult {
    return _render(this.ui);
  }

  private withProvider<T>(Provider: ComponentType<T>, props?: T): this {
    this.ui = <Provider {...(props as T)}>{this.ui}</Provider>;
    return this;
  }
}
