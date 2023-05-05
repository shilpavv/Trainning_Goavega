import { listDataStore } from "@/Handler/AllocationStore";
import { AllocationManager } from "@/Manager/AllocationManager";
import React, { useEffect } from "react";
import { useSnapshot } from "valtio";


const QuarterList = () => {
  const dataStore = useSnapshot(listDataStore);

  const handleClick =(event: React.ChangeEvent<HTMLSelectElement>)=> {
    AllocationManager.selectQuarter(event.target.value);
  }

  useEffect(()=>{
    AllocationManager.getQuarterList();
  },[]);

    return (<select
        style={{width: "240px", marginInlineStart: "26px", cursor: "pointer"}}
        className="form-select mt-3"
        aria-label="Default select example"
        // value={selectedDataStore.selectedDepartment ? selectedDataStore.selectedDepartment : ''}
        onChange={handleClick}
      >
        <option value={""}>Quarter</option>
        {dataStore.quarterData.map((quarter) => (
          <option key={quarter.attributes.id} value={quarter.attributes.Quarter}>
            {`Quarter ${quarter.id}`}
          </option>
        ))}
      </select>);
}
 
export default QuarterList;