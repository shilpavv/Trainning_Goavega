import { listDataStore, selectedDataStore } from "@/Handler/AllocationStore";
import { AllocationManager } from "@/Manager/AllocationManager";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

const MonthList = () => {
  const {monthData}=useSnapshot(listDataStore);
  const handleClickForStartMonth = (event: React.ChangeEvent<HTMLSelectElement>)=> {
    AllocationManager.selectStartMonth(Number(event.target.value));
    console.log("object", event.target.value);
  }

  const handleClickForEndMonth = (event: React.ChangeEvent<HTMLSelectElement>)=> {
    console.log("object", event.target.value);
    AllocationManager.selectEndMonth(Number(event.target.value));
  }

  const handleClickYear = (event: React.ChangeEvent<HTMLSelectElement>)=> {
    AllocationManager.selectYear(Number(event.target.value));
  }


  useEffect(()=> {
    AllocationManager.getAllMonthList();
  },[]);
  
  const yearList = [ 2022, 2023];

  return (
    <div>
    <select
      style={{width: "240px", marginInlineStart: "26px", cursor: "pointer"}}
      className="form-select mt-3"
      aria-label="Default select example"
      onChange={handleClickYear}
      defaultValue={selectedDataStore.selectedYear ? selectedDataStore.selectedYear : NaN}
      >
      <option value={""}>Year</option>
        {yearList.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
    </select>
  <div style={{display: "flex", justifyContent: "space-evenly"}} >
    <select
      style={{width: "106px", cursor: "pointer"}}
      className="form-select mt-3"
      aria-label="Default select example"
      onChange={handleClickForStartMonth}
      >
      <option value={""}>From</option>
        {monthData.map((month) => (
          <option key={month.id} value={month.id}>{month.attributes.Month}</option>
          ))}
      </select>
    <select
      style={{width: "106px", cursor: "pointer"}}
      className="form-select mt-3"
      aria-label="Default select example"
      onChange={handleClickForEndMonth}
      >
      <option value={""}>To</option>
        {monthData.map((month) => (
          <option key={month.id} value={month.id}>{month.attributes.Month}</option>
          ))}
      </select>
    </div>
  </div>
  );
}
 
export default MonthList;
