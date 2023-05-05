import { listDataStore } from "@/Handler/AllocationStore";
import { AllocationManager } from "@/Manager/AllocationManager";
import React from "react";
import { useEffect } from "react";
import { useSnapshot } from "valtio";


const DesignationList = () => {
  const dataStore = useSnapshot(listDataStore);

  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>)=> {
    AllocationManager.selectDesignation(event.target.value);
  }


  useEffect(()=>{
    AllocationManager.getDesignationList();
  },[]);
  
    return  (<select
      style={{width: "240px", marginInlineStart: "26px", cursor: "pointer"}}
      className="form-select mt-3"
      aria-label="Default select example"
      onChange={handleClick}
    >
      <option value={""}>Designation</option>
      {dataStore.designationData.map((designation) => (
        <option key={designation.id} value={designation.attributes.code}>
          {designation.attributes.Title}
        </option>
      ))}
    </select>);
}
 
export default DesignationList;

/**
 
<div>
    <FormControl sx={{ m: 1, minWidth: 250 }}>
      <InputLabel htmlFor="grouped-select">Designation</InputLabel>
      <Select defaultValue={ selectedDataStore.selectedDesignation ? selectedDataStore.selectedDesignation.attributes.code : null} id="grouped-select" label="Designation">
      <MenuItem value="" onClick={()=> handleClick(null)}><em>None</em></MenuItem>
        {designationData.designationData.map((designation: any) => (
          <MenuItem onClick={()=>handleClick(designation)} value={designation.attributes.code}>{designation.attributes.Title}</MenuItem>
          ))}
      </Select>
    </FormControl>
  </div>;

 */