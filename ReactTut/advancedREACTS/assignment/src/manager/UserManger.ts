import { userType } from "../model";
import { userService } from "../service/UserServices";
import { userStore } from "../store";
import { PostManager } from "./PostManager";
export class UserManager {
  static getAll = async () => {
    const users = await userService.getAll();
    userStore.users = users;
  };
  static selectuser = (user: userType) => {
    var newUser={...user}
    console.log("from user manger",user)
    userStore.selecteduser = newUser;
    PostManager.getall()
  };
}
