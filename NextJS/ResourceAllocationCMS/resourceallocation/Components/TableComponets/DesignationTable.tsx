import * as React from 'react';
import { useEffect } from 'react';
import { listDataStore } from '@/Handler/AllocationStore';
import { useSnapshot } from 'valtio';
import { AllocationManager } from '@/Manager/AllocationManager';

const DesignationTable = () => {
  const dataStore = useSnapshot(listDataStore);

  useEffect(()=>{
    AllocationManager.getDesignationList();
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
          {dataStore.designationData.map((designation)=>(
              <tr>
              <td>{designation.id}</td>
              <td>{designation.attributes.code}</td>
              <td>{designation.attributes.Title}</td>
            </tr>
          ))}
      </tbody>
    </table>
</div>
    );
}
 
export default DesignationTable;
