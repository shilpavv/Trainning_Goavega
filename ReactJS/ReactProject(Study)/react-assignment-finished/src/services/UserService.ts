import api from "./jsonPlaceholder";
import { User } from "../models";

export class UserService {
  static getAll = async () => {
    const response = await api.get<User[]>("/users").catch(() => null);
    if (!response) return null;
    return response.data;
  };
}
