import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public _authService : AuthService) { 
  
  }

  ngOnInit(): void {
    
    
  }

}
