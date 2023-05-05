import { Post } from "../../model";
interface PostProps {
  post: Post;
}
const PostItem = ({ post }: PostProps) => {
  return (
    <li className="list-group-item">{post.title}</li>
  )
};
export default PostItem; 