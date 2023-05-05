import React, { useEffect } from "react";
import { PostManager } from "../../manager/PostManager";
import { useSnapshot } from "valtio";
import { postStore } from "../../store";
import PostItem from "./PostItem";

const PostList = () => {
  const { posts } = useSnapshot(postStore);
  console.log("post list",posts)
  // const loadPosts = async () => {
  //   await PostManager.getall();
  // };
  // useEffect(() => {
  //   loadPosts();
  // }, []);
  return (
    <div>
      <h1>Posts</h1>
      <ul className="list-group">
        {posts.map((p) => (
          <PostItem post={p} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
