import React from "react";
import Navbar from "../Navbar";
// import Navbar from "@/Components/Common/Navbar";
type Props = {};

export default  function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

