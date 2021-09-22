import { EmployeeService } from './../services/employee.service';
import { catchError, map } from 'rxjs/operators';
import { Constant } from './../constant/constant';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn  = new BehaviorSubject<boolean>(false);

  public userDetails !: any;

  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  constructor(private http: HttpClient, private router:Router, private snackBar : MatSnackBar) {

    this.horizontalPosition = 'center';
    this.verticalPosition='top';

   }


  get isLoggedIn(){
    return this.loggedIn.asObservable();
  } 
  
  public get authenticatedUserDetails() : any {
    return this.userDetails;
  }

  public set authenticatedUserDetails(user : any) {
    this.userDetails = user;
  }

  public get isUserAdmin() : boolean{

    if(this.authenticatedUserDetails.role == 'ROLE_ADMIN'){
     return true;
    }
    return false;
  }

  login(user: Employee){
  
    return this.http.post<any>(Constant.API_ENDPOINT+"/rest/employees/login", user).subscribe(res => {
      localStorage.setItem("WINDOW_TOKEN_KEY", "token!@#ER");
      this.loggedIn.next(true);
      this.authenticatedUserDetails = res;
      this.router.navigate(['/layout']);
    }, error=> {

      this.snackBar.open('Invalid Credentials!!', 'Dismiss', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      });

    });


  }

  errorHandler(error: any) {
    console.log('Auth Service api error ', error);
    return throwError(error);
  }
  
  logout(){
      localStorage.clear();
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
      
  }

  
}
