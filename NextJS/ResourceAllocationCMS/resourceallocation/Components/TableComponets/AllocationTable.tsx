import { dataStore } from "@/Handler/AllocationStore";
import { useSnapshot } from "valtio";

const AllocationTable = () => {
    const resourceData = useSnapshot(dataStore);
    return (
    <div className="mx-5 table-responsive" >
    <table className="table table-hover">
    <thead className="table-light" >
    <tr >
      <th scope="col">Name</th>
      <th scope="col">Project</th>
      <th scope="col">Designation</th>
      <th scope="col">Department</th>
      <th scope="col">Month</th>
      <th scope="col">Year</th>
      <th scope="col">Quarter</th>
      <th scope="col">Salary</th>
      <th scope="col">Cost</th>
      <th scope="col">BilledAmount</th>
      <th scope="col">Profit</th>
      <th scope="col">ProfitPercentage</th>
      <th scope="col">PercentageBilled</th>
    </tr>
  </thead>
  <tbody className="p-5">
    {resourceData.resourceData.map((item)=>(
    <tr>
      <td>{item.attributes.employee.data.attributes.Name}</td>
      <td>{item.attributes.project.data.attributes.Title}</td>
      <td>{item.attributes.employee.data.attributes.designation.data.attributes.Title}</td>
      <td>{item.attributes.employee.data.attributes.department.data.attributes.Title}</td>
      <td>{item.attributes.month.data.attributes.Month}</td>
      <td>{item.attributes.Year}</td>
      <td>{item.attributes.month.data.attributes.quarter.data.attributes.Quarter}</td>
      <td>{item.attributes.Salary}</td>
      <td>{item.attributes.Cost}</td>
      <td>{item.attributes.BilledAmount}</td>
      <td>{item.attributes.Profit}</td>
      <td>{item.attributes.ProfitPercentage}</td>
      <td>{item.attributes.PercentageBilled}</td>
    </tr>
    ))}
        </tbody>
    </table>
</div>);
}

export default AllocationTable;