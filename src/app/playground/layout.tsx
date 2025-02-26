import { SITE_CONFIG } from "~config/site";

export const metadata = {
  title: "Playground",
};

export default function PlaygroundLayout({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <div>
      <h1>{SITE_CONFIG.title}</h1>
      <h2>{SITE_CONFIG.description}</h2>

      <h1>Welcome to the greatest app in the world!</h1>
      {children}
    </div>
  );
}
