import { proxy } from "valtio";
import { userType } from "../model";

interface userStoreType{
    users: userType[];
}
export const userStore = proxy<userStoreType>({
    users: [],
});