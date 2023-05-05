import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import ProjectTable from "@/Components/TableComponets/ProjectTable";
type Anchor = "right";

export default function Index() {
  return (   
              <>
              <center className="mt-5"><b><span>Project List</span></b></center>
                  <ProjectTable/>
              </>
  );
}
