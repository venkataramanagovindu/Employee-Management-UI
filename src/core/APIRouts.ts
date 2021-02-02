import { environment } from "src/environments/environment"

export class APIRouts {
    public static getEmployees = environment.apiBaseUrl + "Employee";
    public static createEmployee = environment.apiBaseUrl + "Employee/Addemployee";
    public static getEmployee = environment.apiBaseUrl + "Employee/GetEmployee";
    public static deleteEmployee = environment.apiBaseUrl + "Employee/DeleteEmployee";
    public static updateEmployee = environment.apiBaseUrl + "Employee/UpdateEmployee";
}
