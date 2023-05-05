import * as React from "react";
import { listDataStore} from "@/Handler/AllocationStore";
import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { AllocationManager } from "@/Manager/AllocationManager";



const ProjectList = () => {
  const projectData = useSnapshot(listDataStore);
  useEffect(()=>{
    AllocationManager.getProjectList();
  },[])

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    AllocationManager.selectProject(event.target.value);
  }

    return  (
      <select
      style={{width: "240px", marginInlineStart: "26px", cursor: "pointer"}}
      className="form-select mt-3"
      aria-label="Default select example"
      // value={selectedDataStore.selectedProject ? selectedDataStore.selectedProject : ''}
      onChange={handleClick}
    >
      <option value={""}>Project</option>
      {projectData.projectData.map((project) => (
        <option key={project.id} value={project.attributes.code}>
          {project.attributes.Title}
        </option>
      ))}
    </select>
    )
}
 
export default ProjectList;