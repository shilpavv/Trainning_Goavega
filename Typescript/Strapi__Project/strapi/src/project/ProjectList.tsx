import React from 'react';
import { proStore } from "../store";
import { ProjectManager } from '../Manager/ProjectMnager';
import { useSnapshot } from 'valtio';
import ProjectDetails from './ProjectDetails';
const ProjectList=()=> {
     const {pro} = useSnapshot(proStore);
    //  console.log("project",pro)
    const loadProject =async () => {
        await ProjectManager.getAll();
    }
   React.useEffect(()=>{
          loadProject();
    },[]);
  return (
    <div>
      <h1>Project</h1>
      <ul>
        {pro.map((p) => (
          <ProjectDetails project={p} />
        ))}
      </ul>
    </div>
  );
};
export default ProjectList


