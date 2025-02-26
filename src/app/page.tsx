import Home from "~components/home";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theodo Dojo",
};

export default function HomePage(): JSX.Element {
  return <Home />;
}
