import { ProjectManager } from '../Manager/ProjectMnager';
import {Project, projectresponse, ResponseProject } from '../model/APIProjectResponse';
import api  from './api';

export class ProjectService{
    static getAll =async () => {
        const response=await api.get<projectresponse>("/projects").catch(()=>null);
        if (!response) return null;
        return response.data.data;  
    };
//deleting project
    static delete =async (id:number) => {
        await api.delete<projectresponse>(`/projects/${id}`).catch(()=>null);
        return ProjectManager.getAll()
}
//creating Project response
static addProject =async (project:ResponseProject) => {
    console.log("from service ",project)
    const value={  
        data: {
            project_description: project.data.project_description,
            project_manager: project.data.project_manager,
            project_name: project.data.project_name,
            project_id: project.data.project_id,
          } 
    }
   const resp= await api.post<projectresponse>("/projects",value).catch(()=>null)
    return console.log("Success",resp);
}
}
