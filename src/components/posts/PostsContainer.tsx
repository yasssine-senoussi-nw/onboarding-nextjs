"use client";
import { usePostMutation, usePostsQuery } from "~hooks/posts";

export function PostsContainer(): JSX.Element {
  const { loading, posts } = usePostsQuery();
  const { mutate: savePost } = usePostMutation();

  const onSavePost = () => {
    savePost();
  };

  if (loading) return <h1>loading</h1>;

  return (
    <>
      <button className="text-white bg-slate-600 p-2 m-2" onClick={onSavePost}>
        save post example call
      </button>
      <div>
        {posts?.map(({ id, body, title }) => (
          <div key={id}>
            <h1>{title}</h1>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
