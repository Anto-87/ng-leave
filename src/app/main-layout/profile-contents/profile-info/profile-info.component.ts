import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  user:any;

  constructor(private _employeeService:EmployeeService, private _authService : AuthService) {
    this.getUserInfo();
   }

  ngOnInit(): void {
  }

  getUserInfo(){

    this._employeeService.getEmployeeByUserName(this._authService.authenticatedUserDetails.userName).subscribe(res =>{
      console.log(res);
      this.user = res;
    });
  }

}
