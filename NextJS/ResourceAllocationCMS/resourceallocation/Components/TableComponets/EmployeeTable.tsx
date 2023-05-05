import * as React from 'react';
import { useEffect } from 'react';
import { listDataStore } from '@/Handler/AllocationStore';
import { useSnapshot } from 'valtio';
import { AllocationManager } from '@/Manager/AllocationManager';

const EmployeeTable = () => {
  const dataStore = useSnapshot(listDataStore);

  useEffect(()=>{
    AllocationManager.getEmployeeList();
  },[]);

    return (
      <div className='container mt-5' >
      <table className="table table-hover">
      <thead className='table-light' >
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Designation</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <tbody>
          {dataStore.employeeData.map((employee)=>(
            <tr>
              <td>{employee.attributes.Name}</td>
              <td>{employee.attributes.designation.data.attributes.Title}</td>
              <td>{employee.attributes.department.data.attributes.Title}</td>
            </tr>
          ))}
      </tbody>
    </table>
</div>
    );
}
 
export default EmployeeTable;
