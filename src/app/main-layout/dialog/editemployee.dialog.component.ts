import { Employee } from 'src/app/model/employee';
import { LeaveRequest } from './../../model/leave-request';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/services/leave-request.service';
import { AuthService } from 'src/app/auth/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-editeemployee-dialog.dialog',
  templateUrl: './editemployee.dialog.component.html',
  styleUrls: ['./editemployee.dialog.component.css']
})
export class EditEmployeeDialogComponent implements OnInit {

  listofEmployees : any;

  constructor(public dialog : MatDialogRef<EditEmployeeDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: Employee,
              public api: EmployeeService, public _auth :AuthService, private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getAllEmployees().subscribe(res =>{
      this.listofEmployees = res
    });
  }

  closeDialog(){
    this.dialog.close();
  }

  submit(){
   let toUpdate  = {

      employeeId: this.data.employeeID,
      status:this.data.status,
      reportingTo:{
        employeeId : this.data.reportingTo
      }
      
    };

    this.api.updateEmployeeDetails(toUpdate).subscribe(sucess => {

      this.dialog.close();

    },
    error => {
      console.log(error);
    })

  }
}
