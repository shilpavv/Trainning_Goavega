import { listDataStore } from "@/Handler/AllocationStore";
import { AllocationManager } from "@/Manager/AllocationManager";
import React, { useEffect } from "react";
import { useSnapshot } from "valtio";

const EmployeeList = () => {
  const dataStore = useSnapshot(listDataStore);

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>)=> {
    AllocationManager.selectEmployee(event.target.value);
  }

  useEffect(()=>{
    AllocationManager.getEmployeeList();
  },[]);

    return (<select
      style={{width: "240px", marginInlineStart: "26px", cursor: "pointer"}}
      className="form-select mt-3"
      aria-label="Default select example"
      onChange={handleClick}
    >
      <option value={""}>Employee</option>
      {dataStore.employeeData.map((employee) => (
        <option key={employee.id} value={employee.attributes.code}>
          {employee.attributes.Name}
        </option>
      ))}
    </select>);
}
 
export default EmployeeList;