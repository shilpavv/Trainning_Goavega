 import { ApiResponse } from "./APIResponse";
 export interface Project{
    id:number;
    attributes:{
        project_id:number,
        project_name:string,
        project_description:string,
        project_manager:string
    }
}
 export interface projectresponse extends ApiResponse <Project>{}

 //Response project
 export interface ResponseProject{
        data: {
          project_description: string,
          project_manager: string,
          project_name: string,
          project_id: number,
        }
    }