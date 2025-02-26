import { PostsContainer } from "~components/posts/PostsContainer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage(): JSX.Element {
  return <PostsContainer />;
}
