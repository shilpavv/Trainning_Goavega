import {proxy } from "valtio";
import { userType } from "../model";
import { Post } from "../model";
interface userStoreType{
    users: userType[];
    selecteduser?:userType;
}
export const userStore = proxy<userStoreType>({
    users: [],
});
interface PostStoreType {
    posts: Post[];
  }
export const postStore = proxy<PostStoreType>({
    posts: [],
  });
