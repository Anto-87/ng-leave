import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  
  credentialsUpdate !: FormGroup;
  horizontalPosition!: MatSnackBarHorizontalPosition;
  verticalPosition!: MatSnackBarVerticalPosition;
  

  constructor(private formBuilder:FormBuilder, private employeeService : EmployeeService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.horizontalPosition = 'center';
    this.verticalPosition='top';

    this.credentialsUpdate = this.formBuilder.group({
      oldPassword:['',[Validators.required]],
      newPassword: ['', Validators.required]

    });
  }

  get f(){return this.credentialsUpdate.controls;}

  onSubmit(){
   this.employeeService.updatePassword(this.credentialsUpdate.value.oldPassword, this.credentialsUpdate.value.newPassword).subscribe(res =>{
    this.snackBar.open('Credentials Updated !!', 'Dismiss', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
    },
    error => {
      this.snackBar.open(error.error.message, 'Dismiss', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });
    });
  }

}
