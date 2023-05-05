import React from "react";
import { useSnapshot } from "valtio";
import { Post } from "../../models";
import { userStore } from "../../store";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return <li className="list-group-item">{post.title}</li>;
};

export default PostItem;
