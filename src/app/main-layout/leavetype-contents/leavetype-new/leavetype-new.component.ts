import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { LeaveTypeService } from 'src/app/services/leave-type.service';

@Component({
  selector: 'app-leavetype-new',
  templateUrl: './leavetype-new.component.html',
  styleUrls: ['./leavetype-new.component.css']
})
export class LeavetypeNewComponent implements OnInit {


  leaveTypeForm!:FormGroup;
  submitted= false; 
  leaveType_req_msg!:string;
  public has_error = false;
  horizontalPosition!: MatSnackBarHorizontalPosition;
  verticalPosition!: MatSnackBarVerticalPosition;
  
  constructor(private formBuilder:FormBuilder, private _leaveTypeService :  LeaveTypeService,private snackBar : MatSnackBar) { }

  ngOnInit(): void {
    
    /**
     * Apply the validators for the form items
     */
    this.leaveTypeForm = this.formBuilder.group({
      typeName:['',[Validators.required, Validators.minLength(3)]],
      status: ['ACTIVE', Validators.required]

    });
    this.horizontalPosition = 'center';
    this.verticalPosition='top';
  }

  /**
   * Get the entire form as the reference value
   */
  get f(){return this.leaveTypeForm.controls;}

  /**
   *  Invoke on submitting the form
   */
  onSubmit(){

    this.submitted = true; 

    /*
     *  Validating the form
     */
    if(this.leaveTypeForm.invalid){
      return; 
    }

    /**
     * Once the validation passed, invoke the API call as below. Subscribe the result to see
     * either success or failure. Show the appropriate message in snackBar.
     */
    this._leaveTypeService.createLeaveType(this.leaveTypeForm.value).subscribe(res=>{
      this.submitted = false;
      this.has_error = false;
      this.leaveTypeForm.reset();
      this.leaveType_req_msg = 'Leave Type Successfully Created!!';
      this.snackBar.open(this.leaveType_req_msg, 'Dismiss', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
    }, error => {
      this.has_error = true;
      this.leaveType_req_msg=error.error.message;
      this.snackBar.open(this.leaveType_req_msg, 'Dismiss', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
      console.log("Error occured!!");
    }
    )

  }

}
