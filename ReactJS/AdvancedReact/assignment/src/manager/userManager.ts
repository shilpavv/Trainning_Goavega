
import { userService} from "../service/userServices";
import { userStore } from "../store";

export class UserManager{
    static getAll=async () => {
        const users=await userService.getAll();
         userStore.users=users;
        
    };
}