import { AllocationManager } from "@/Manager/AllocationManager";
import { useEffect } from "react";
import { BillableStatus } from "../FilterComponents/BillableStatus";
import DepartmentList from "../FilterComponents/DepartmentList";
import DesignationList from "../FilterComponents/DesignationList";
import EmployeeList from "../FilterComponents/EmployeeList";
import MonthList from "../FilterComponents/MonthList";
import ProjectList from "../FilterComponents/ProjectList";
import QuarterList from "../FilterComponents/QuarterList";

const SidebarAllocation = () => {

    function filterSubmit() {
        AllocationManager.filterData();
    }
  return (
    <div className="mx-5 mt-5 d-flex flex-row-reverse">
      <button
        className="btn btn-success"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
        style={{width: "90px"}}
      >
        Filter
      </button>

      <div
           className="offcanvas offcanvas-end"
           data-bs-scroll="true"
           id="offcanvasWithBothOptions"
           style={{width: "320px"}}
        >
            <div className="container mt-2">
                <center>
                   <h3><strong>Filters</strong></h3>
                </center>
            </div>
                <hr className="hr" />
                <div className="container" >
                    <ProjectList />
                    <DepartmentList />
                    <DesignationList />
                    <EmployeeList />
                    <QuarterList/>
                    <MonthList />
                    <BillableStatus/>
                   <center>
                    <button  
                        onClick={filterSubmit} 
                        style={{width: "90px"}}   
                        type="button" 
                        className="btn btn-primary mt-4"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions"
                        aria-controls="offcanvasWithBothOptions"
                        >
                    
                    Filter
                    </button>
                </center>
                </div>
         </div>
    </div>
  );
};

export default SidebarAllocation;
