import { Employee } from './employee';
import { LeaveType } from './leave-type';

export class LeaveRequest {
    leaveId!: number;
    employeeDTO!: Employee;
    leaveTypeDTO!: LeaveType;
    leaveReason!: string;
    dateFrom!: Date;
    dateTo!: Date;
    approved!: number;
    deniedReason!: string;
    status!: string;
    createdAt!: Date;
    reviewedBy!: Employee;

    constructor(){
        
    }
    /*constructor(leaveId:any) {
        this.leaveId = leaveId;
    }*/
}
