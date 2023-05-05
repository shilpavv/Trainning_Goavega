import * as React from 'react';
import axios from 'axios';
import EmployeeTable from '@/Components/TableComponets/EmployeeTable';



export async function getServerSideProps() {
  // fetch data for employee table
  const res1 = await axios.get("http://localhost:3000/api/employee");
  const employee = res1.data;

  return {
    props: {
      employee, 
    }
  }
}

interface employeeType {
  attributes: any[],
  id: number,
}

interface Props {
  employee: {
        data: employeeType[]
  }
}

const index = (props: Props) => {
  console.log("props",props);
    return (
    <>
          <center className="mt-5"><b><span>Employee List</span></b></center>
          <EmployeeTable />
    </>
    )
};

export default index;
