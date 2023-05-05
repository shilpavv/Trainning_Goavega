import { User } from "../models";
import { PostService } from "../services/PostService";
import { loadingStore, postStore, userStore } from "../store";

export class PostManager {
  static getAll = async () => {
    const user = userStore.selectedUser;
    const posts = await PostService.getAll(user?.id);
    if (!posts) return;

    postStore.posts = posts;
    userStore.selectedUser = user;
  };
}

