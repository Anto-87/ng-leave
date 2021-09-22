import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  isLoggedIn$?: Observable<boolean>;
  loggedUserName?: any; 
  
  constructor(public authService: AuthService, private router:Router){
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.loggedUserName = this.authService.authenticatedUserDetails.userName;  
  }

  ngOnInit(): void {
  }

   /**
   *  TO loogout the application
   */
    onLogout(){
      this.authService.logout();
    }
  
    
}
