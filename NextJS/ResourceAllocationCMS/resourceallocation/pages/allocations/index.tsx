import { useRouter } from "next/router";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import * as React from "react";
import SidebarAllocation from "@/Components/Common/SidebarAllocation";
import axios from "axios";
import { dataStore} from "@/Handler/AllocationStore";
import AllocationTable from "@/Components/TableComponets/AllocationTable";
type Props = {};
import { LoginStore } from "@/Handler/AllocationStore";
import { withIronSessionSsr } from "iron-session/next";
import { useSnapshot } from "valtio";
;
let filterkey:  null | string | string[] | undefined;
const index = (props: any) => {
  dataStore.resourceData = props.resources.data;
  LoginStore.userLoginData=props.user;
  return (
    <>
        <SidebarAllocation />
        <center className="mt-5"><b><span>Resource Allocation</span></b></center>
        <AllocationTable/>
    </>
  );
}
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }:any) {
    
  const user = req.session.user;
  if(!user){
       return {
         redirect: {
           destination: '/login',
           permanent: false,
          },
        };
    }
    else {   
    
    const response = await axios.get(`http://localhost:3000/api/allocations`);
    const resourcedata = response.data;
     console.log("resourcedata",resourcedata)
    // dataStore.resourceData= resourcedata;
    
    return {
      props: {
        success: true,
        resources: resourcedata, 
        user: user,
    }
  }
    }
  }, 
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
)
export default index;
