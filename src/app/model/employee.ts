/**
 * Creating model for employee entity
 */
export class Employee {

    employeeID!: number;
    firstName!: string;
    lastName!: string;
    middleName!:string;
    userName!: string; 
    password!: string;
    role!: string;
    email!:string;
    phoneNumber!:string;
    createdAt!:string;
    status!:string;
    reportingTo!:Employee;
    
    constructor(){

    }
  /*  constructor(id:any){
        this.employeeID = id;
    }*/
    
}
