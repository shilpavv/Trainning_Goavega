import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import * as React from "react";

import DesignationTable from "@/Components/TableComponets/DesignationTable";
type Anchor = "right";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/designation");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
interface Props {
  data: {
    data: Array<any>[];
  };
}
export default function Index(props: Props) {
  return (
    <>
    <center className="mt-5"><b><span>Designation List</span></b></center>
      <DesignationTable/>
     </>
  );
}
