import { User } from "../models";
import { UserService } from "../services/UserService";
import { userStore } from "../store";
import { PostManager } from "./PostManager";

export class UserManager {
  static getAll = async () => {
    const users = await UserService.getAll();
    if (!users) return;
    userStore.users = users;
  };
  static selectUser = (user: User) => {
    userStore.selectedUser = user;
    PostManager.getAll()
  };
}