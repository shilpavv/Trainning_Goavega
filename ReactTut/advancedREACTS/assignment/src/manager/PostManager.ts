import { PostServices } from "../service/PostServices";
import { postStore, userStore } from "../store";

export class PostManager {
  static getall = async () => {
    const user = userStore. selecteduser;
    const posts = await PostServices.getall(user?.id);
    if (!posts) return null;
    postStore.posts = posts;
  };
}