import api  from './JsonPlaceholder';
import { userType } from "../model";
export class userService{
    static getAll =async () => {
        const response=await api.get<userType[]>("/users");
        return response.data;
    };
}

