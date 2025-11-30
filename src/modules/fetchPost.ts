import { Post } from "../types";

export async function fetchPost(): Promise<Post> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" +
      (Math.floor(Math.random() * 100) + 1)
  );
  const data = await res.json();
  return { title: data.title, body: data.body };
}
