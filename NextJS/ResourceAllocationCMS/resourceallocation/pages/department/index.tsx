import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import * as React from "react";
import DepartmentTable from "@/Components/TableComponets/DepartmentTable";
type Anchor = "right";


export default function Index() {
  return (
    <div>
         <>
            <center className="mt-5"><b><span>Department List</span></b></center>
            <DepartmentTable/>
         </>
    </div>
  );
}
