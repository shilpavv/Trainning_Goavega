import {  dataStore, listDataStore, selectedDataStore } from "@/Handler/AllocationStore";
import axios from "axios";
import { error } from "console";
import { useRouter } from "next/router";
import React, { useEffect } from "react"
import { useSnapshot } from "valtio";
const url="/api/";
let filterPara : string[] = [];
export class AllocationManager {
   
    /* get all project list */
    static getProjectList = async () => {
        const response = await axios.get(`${url}project`).then((resp)=> resp).catch(() => null);
        if(!response) return null;
        listDataStore.projectData=response.data.data;
    }

    static selectProject = async (project: string) => {
        selectedDataStore.selectedProject=project;
    }
    
    /* get all department list */
    static getDepartmentList = async () => {
        const response = await axios.get(`${url}department`).then((resp)=> resp).catch(() => null);
        if(!response) return null;
        listDataStore.departmentData=response.data.data;
    }

    static selectDepartment = (department: string ) => {
        selectedDataStore.selectedDepartment=department;
    }

    /* get all Designation list */
    static getDesignationList = async () => {
        const response = await axios.get(`${url}designation`).then((resp)=> resp).catch(() => null);
        if(!response) return null;
        listDataStore.designationData = response.data.data;
    }
    
    static selectDesignation = (designation: string) => {
        selectedDataStore.selectedDesignation=designation;
    }
    
    /* get all Employee list */
    static getEmployeeList = async () => {
        const response = await axios.get(`${url}employee`).then((resp)=> resp).catch(() => null);
        if(!response) return null;
        listDataStore.employeeData = response.data.data;
    }
    
    static selectEmployee = (employee: string) => {
        selectedDataStore.selectedEmployee=employee;
    }
    
    /* get all Month list */
    static getAllMonthList = async () => {
        const response = await axios.get(`${url}months`).then((resp)=>resp).catch(()=> null);
        if(!response) return null;
        listDataStore.monthData=response.data.data;
    }

    static selectStartMonth = (month: any) => {
        selectedDataStore.selectedStartMonth=month;
    }

    static selectEndMonth = (month: any) => {
        selectedDataStore.selectedEndMonth=month;
    }

    /* Getting Years List */
    static getYearsList = async () => {
        /* need to create seperate tabale of year */

        // const response= await axios.get(`${url}years`).then((response)=>response).catch(()=>null);
        // if(!response) return null;
        // listDataStore.yearData=response.data.data;
    }

    /* Selecting Year */
    static selectYear = (year: number | null ) =>{
        selectedDataStore.selectedYear=year;
    }

    
    /* get Quarter List */
    static getQuarterList = async () => {
        const response= await axios.get(`${url}quarters`).then((response)=>response).catch(()=>null);
        if(!response) return null;
        listDataStore.quarterData=response.data.data;
    }
    
    /* Selecting Quarter */
    static selectQuarter = (quarter: string | null) => {
        selectedDataStore.selectedQuarter=quarter;
    }


    /* Setting Billable Status */
    static selectBillableStatus = (status: any) => {
        selectedDataStore.selectedBillableStatus=status;
    }

    /* Filter According some conditions */
   static filterData = async () => {
        var filter = {
            project: '',
            department: '',
            designation: '',
            employee: '',
            quarter: '',
            year: NaN,
            startMonth: NaN,
            endMonth: NaN,
            billableStatus: null,
        }

        if(selectedDataStore.selectedProject != null) {
            filter.project = selectedDataStore.selectedProject;
        }

        if(selectedDataStore.selectedDepartment != null) {
           filter.department=selectedDataStore.selectedDepartment;
        }

        if(selectedDataStore.selectedDesignation != null) {
            filter.designation=selectedDataStore.selectedDesignation;
        }

        if(selectedDataStore.selectedEmployee != null) {        
            filter.employee=selectedDataStore.selectedEmployee;
        }

        if(selectedDataStore.selectedQuarter != null){
            filter.quarter=selectedDataStore.selectedQuarter;
        }
        
        if(selectedDataStore.selectedStartMonth != null){
            filter.startMonth=selectedDataStore.selectedStartMonth;
        }


        if(selectedDataStore.selectedEndMonth != null){
            filter.endMonth=selectedDataStore.selectedEndMonth.id;
        }

        if(selectedDataStore.selectedBillableStatus != null){
            filter.billableStatus=selectedDataStore.selectedBillableStatus;
        }

        if(selectedDataStore.selectedYear != null){
            filter.year=selectedDataStore.selectedYear;
        }

        const res = await axios.post(`/api/allocations`,filter);
        const resourcedata = res.data.data;
        dataStore.resourceData=resourcedata;
    }

}


