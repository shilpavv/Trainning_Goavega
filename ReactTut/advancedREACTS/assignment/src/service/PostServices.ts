import api  from './JsonPlaceholder';
import { Post } from "../model";
export class PostServices{
    static getall=async (userId:number | undefined) => {
        const response=await api.get<Post[]>("/posts",{params:{userId}})
        return response.data
        
 }
}