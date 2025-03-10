import { SITE_CONFIG } from "~config/site";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage(): JSX.Element {
  return (
    <div>
      <h1>{SITE_CONFIG.title}</h1>
      <h2>{SITE_CONFIG.description}</h2>
    </div>
  );
}
