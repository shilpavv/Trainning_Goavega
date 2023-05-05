// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { dataStore } from "@/Handler/AllocationStore";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};
let filters : string[] = [];
let url = "http://127.0.0.1:1337/api/allocations?populate=project,employee.department,employee.designation,month,month.quarter";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if(req.method == "GET") { 
    const response = await axios.get(url);
    res.status(200).json(response.data);
  }
  if (req.method == "POST") {
    try {
      const {project, designation, department, employee, startMonth, endMonth, billableStatus, year, quarter} = req.body;
      if (filters.length > 0) { 
        filters = []; // Clear the array by assigning an empty array to it
      }

      if(project) {
        filters.push(`filters[project][code]=${project}`);
      }

      if(designation) {
        filters.push(`filters[employee][designation][code]=${designation}`);
      }

      if(department) {
        filters.push(`filters[employee][department][code]=${department}`);
      }

      if(employee) {
        filters.push(`filters[employee][code]=${employee}`);
      }

      if(quarter) {
        filters.push(`filters[month][quarter][Quarter]=${quarter}`);
      }

      if( startMonth || endMonth){
        if(year){
          filters.push(`filters[year]=${year}`);
        }

        if(startMonth){
          filters.push(`filters[month][id][$gte]=${startMonth}`);
        }

        if(endMonth){
          filters.push(`filters[month][id][$lte]=${endMonth}`);
        }
    }

      if(billableStatus || billableStatus == 0){
        if(billableStatus === 100 || billableStatus == 0 ){
          filters.push(`filters[PercentageBilled][$eq]=${billableStatus}`);
        }
        if(billableStatus===1000){
          filters.push(`filters[PercentageBilled][$gt]=${0}&filters[PercentageBilled][$lt]=${100}`);
        }
      }

      const filterURL= filters.length> 0 ? `&${filters.join('&')}`: "";

      const response = await axios.get(`${url}${filterURL}`);
      res.status(200).json(response.data);

    } catch (error) {
      console.log("message", error);
    }
  }
}
