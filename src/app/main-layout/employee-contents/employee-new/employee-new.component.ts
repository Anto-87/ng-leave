import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  listofEmployees:any;
  horizontalPosition!: MatSnackBarHorizontalPosition;
  verticalPosition!: MatSnackBarVerticalPosition;
  responseMsg!:string; 
  has_error= false; 
  formData : any;

  constructor(private formBuilder: FormBuilder, private _employeeService : EmployeeService, private snackBar : MatSnackBar) { }

  ngOnInit(): void {

    this.horizontalPosition = "center";
    this.verticalPosition="top";
    
    this.registerForm = this.formBuilder.group({
      firstName:['', [Validators.required, Validators.minLength(3)]],
      middleName:[''],
      lastName:['', [Validators.required, Validators.minLength(3)]],
      userName:['', [Validators.required, Validators.minLength(3)]],
      email:[''],
      mobileNo:['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      reportingTo:[''],
      status:['ACTIVE', Validators.required]
    });

    this._employeeService.getAllEmployees().subscribe(res =>{
      this.listofEmployees = res
    });

  }
  
  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }
if(this.registerForm.value.reportingTo != null && this.registerForm.value.reportingTo != ""){
   this.formData =
      {
        "email" : this.registerForm.value.email,
        "firstName": this.registerForm.value.firstName,
        "lastName":this.registerForm.value.lastName,
        "middleName":this.registerForm.value.middleName,
        "mobileNo":this.registerForm.value.mobileNo,
        "reportingTo": 
          {
              "employeeId" :this.registerForm.value.reportingTo
          },
        "status":this.registerForm.value.status,
        "userName":this.registerForm.value.userName
      };
    }else{
      this.formData =
      {
        "email" : this.registerForm.value.email,
        "firstName": this.registerForm.value.firstName,
        "lastName":this.registerForm.value.lastName,
        "middleName":this.registerForm.value.middleName,
        "mobileNo":this.registerForm.value.mobileNo,
        "status":this.registerForm.value.status,
        "userName":this.registerForm.value.userName
      };
  
    }
    
    this._employeeService.createEmployee(this.formData).subscribe(res => {
      this.submitted = false;
      this.has_error = false;
      this.registerForm.reset();
      this.responseMsg = 'Employee Successfully Created!!';
      this.snackBar.open(this.responseMsg, 'Dismiss', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
    }, error => {
      this.responseMsg=error.error.message;
      this.has_error= true;
      this.snackBar.open(this.responseMsg, 'Dismiss', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
      console.log("Error occured!!");
    }
    )


  }


}
