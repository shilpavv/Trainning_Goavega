import { ResponseProject } from "../model/APIProjectResponse";
import {ProjectService} from "../Services/ProjectService "
import { proStore } from "../store";
export class ProjectManager {
  static getAll = async () => {
    const pro = await ProjectService.getAll();
    if(!pro) return null
    proStore.pro =pro;
  };
  //Delete by using id
  static deleteid=async (id:number) => {
    await ProjectService.delete(id);
  };
  //add new project
  static addPro=async (project:ResponseProject) => {
  console.log("project",project)
  ProjectService.getAll();
  await ProjectService.addProject(project);
}
}
