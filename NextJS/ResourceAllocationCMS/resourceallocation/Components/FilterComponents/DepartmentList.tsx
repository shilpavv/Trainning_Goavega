import { listDataStore } from "@/Handler/AllocationStore";
import { AllocationManager } from "@/Manager/AllocationManager";
import React from "react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

const DepartmentList = () => {
  const departmentData = useSnapshot(listDataStore);

  useEffect(()=>{
    AllocationManager.getDepartmentList();
  },[]);
  
  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>)=> {
    AllocationManager.selectDepartment(event.target.value);
  }

    return  (<select
    style={{width: "240px", marginInlineStart: "26px", cursor: "pointer"}}
    className="form-select mt-3"
    aria-label="Default select example"
    // value={selectedDataStore.selectedDepartment ? selectedDataStore.selectedDepartment : ''}
    onChange={handleClick}
  >
    <option value={""}>Department</option>
    {departmentData.departmentData.map((department) => (
      <option key={department.id} value={department.attributes.code}>
        {department.attributes.Title}
      </option>
    ))}
  </select>);
}
export default DepartmentList;