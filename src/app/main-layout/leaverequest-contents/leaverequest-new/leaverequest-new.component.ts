import { LeaveRequestService } from './../../../services/leave-request.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { LeaveTypeService } from 'src/app/services/leave-type.service';
import { AuthService } from 'src/app/auth/auth.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-leaverequest-new',
  templateUrl: './leaverequest-new.component.html',
  styleUrls: ['./leaverequest-new.component.css']
})
export class LeaverequestNewComponent implements OnInit {

  leaveRequestForm!:FormGroup;
  submitted=false;
  leaveTypes!:Observable<any>;
  listofLeaveTypes:any;
  horizontalPosition!: MatSnackBarHorizontalPosition;
  verticalPosition!: MatSnackBarVerticalPosition;

  constructor(private formBuilder:FormBuilder, private _leaveTypeService : LeaveTypeService, private _employeeService: EmployeeService, 
              private _leaveRequestService : LeaveRequestService, private _authservice: AuthService, private snackBar : MatSnackBar) { }

  ngOnInit(): void {

    this.horizontalPosition = "center";
    this.verticalPosition="top";
    

    this.leaveRequestForm = this.formBuilder.group({

      leaveReason:['',[Validators.required, Validators.minLength(3)]],
      leaveType:[,Validators.required],
      fromDate:['', Validators.required],
      toDate: ['', Validators.required]

    });

   this._leaveTypeService.getAllLeaveTypes().subscribe(res =>
      {
        this.listofLeaveTypes = res
      });
  }

  get f(){
    return this.leaveRequestForm.controls;
  }

 
  onSubmit(){

    this.submitted = true;

    if(this.leaveRequestForm.invalid){
      return;
    }

      
    this._leaveRequestService.createEmployeeLeave(this.leaveRequestForm.value).subscribe(res => {
      this.snackBar.open('Leave Request submitted successfully!!', 'Dismiss', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
      this.leaveRequestForm.reset();
    }, error => {
      this.snackBar.open(error.error.message, 'Dismiss', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
      console.log(error.error.message);
      
    });


  }

}
