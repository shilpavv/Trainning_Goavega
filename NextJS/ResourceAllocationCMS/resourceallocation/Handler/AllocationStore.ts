import { proxy } from "valtio";

/* Project Store */
type listDataState = {
    projectData: any[],
    departmentData: any[],
    designationData: any[],
    employeeData: any[],
    quarterData: any[];
    monthData: any[],
    yearData: any[],
}

export const listDataStore = proxy<listDataState>({
    projectData: [],
    departmentData: [],
    designationData: [],
    employeeData: [],
    quarterData: [],
    monthData: [],
    yearData: [],
});

// storing single Data
type selectedDataState = {
    selectedProject?: null | string;
    selectedDepartment?: null | string;
    selectedDesignation?: null | string;
    selectedEmployee?: null | string;
    selectedQuarter: null | string;
    selectedYear?: null | number ;
    selectedStartMonth?: null | number ;
    selectedEndMonth?: any;
    selectedBillableStatus: any;
};
const currentYear = new Date().getFullYear();
export const selectedDataStore = proxy<selectedDataState>({
    selectedProject: null,
    selectedDepartment: null,
    selectedDesignation: null,
    selectedEmployee: null,
    selectedQuarter: null,
    selectedYear: currentYear,
    selectedStartMonth: null,
    selectedEndMonth: null,
    selectedBillableStatus: null,
});
// storing data first time generated
type DataStoreStateType = {
    resourceData: any[];
};
export const dataStore= proxy<DataStoreStateType>({
    resourceData: [],
});
// filtered Data
export const filteredDataStore=proxy<DataStoreStateType>({
    resourceData: [],
});

type UserLoginType={
    userLoginData: {
            email:string,
            username:string,
    }
}
export const LoginStore = proxy<UserLoginType>({
    userLoginData: {
            email:"",
            username:"",

    }
});