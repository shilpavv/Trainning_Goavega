import * as React from 'react';
import { useEffect, useState } from 'react';
import { listDataStore } from '@/Handler/AllocationStore';
import { useSnapshot } from 'valtio';
import { AllocationManager } from '@/Manager/AllocationManager';

const ProjectTable = () => {
  const dataStore = useSnapshot(listDataStore);
  useEffect(()=>{
    AllocationManager.getDepartmentList();
  },[]);

    return (
    <div className='container mt-5'>
      <table className="table table-hover">
      <thead className='table-light' >
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Code</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
          {dataStore.departmentData.map((department)=>(
              <tr>
              <td>{department.id}</td>
              <td>{department.attributes.code}</td>
              <td>{department.attributes.Title}</td>
            </tr>
          ))}
      </tbody>
    </table>
</div>
    );
}
 
export default ProjectTable;
