import React, { useEffect } from "react";
import { PostManager } from "../../managers/PostManager";
import { useSnapshot } from "valtio";
import { postStore } from "../../store";
import PostItem from "./PostItem";

const PostList = () => {
  const { posts } = useSnapshot(postStore);

  const loadPosts = async () => {
    await PostManager.getAll();
  };

  useEffect(() => {
    loadPosts();
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      <ul className="list-group">
        {posts.map((u) => (
          <PostItem post={u} />
        ))}
      </ul>
    </div>
  );
};

export default PostList;
