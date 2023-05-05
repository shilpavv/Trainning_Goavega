import api  from './jsonPlaceholder';
import { userType } from "../model";
export class userService{
    static getAll =async () => {
        const response=await api.get<userType[]>("/users");
        return response.data;
    };
}

