import { ProjectManager } from "../Manager/ProjectMnager";
import { Project, projectresponse } from "../model/APIProjectResponse";
import api from "../Services/api";

interface Props {
  project: Project;
} 
export const ProjectDetails = ({project}: Props) => {
  const onSelect=()=>{
    ProjectManager.deleteid(project.id)
   }
  return (
    <div className="card  bg-light">
      <div className="card-body">
      <blockquote className="blockquote text-center">
        <h6>Project ID:{project.id}</h6>
        <h1>{project.attributes.project_name}</h1>
        <h6>Project Description:{project.attributes.project_description}</h6>
        <h6>Project Manager:{project.attributes.project_manager}</h6>
        <button onClick={onSelect}>Delete</button>
        <form >
      </form>
      </blockquote>
    </div> 
    </div>  
   
 )
};
export default ProjectDetails;