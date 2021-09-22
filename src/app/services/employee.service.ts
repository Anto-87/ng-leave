import { Constant } from './../constant/constant';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

/**
 *  Handling the REST API call for the entity Employee
 */
export class EmployeeService {

  constructor(private http: HttpClient, private authService : AuthService) { }

  /**
   * Throw the errors
   * @param error 
   * @returns 
   */
  errorHandler(error: any) {
    console.log('Employee api error ', error);
    return throwError(error);
  }

  /**
   * Get all the employees
   * @returns 
   */
  getAllEmployees():Observable<Employee[]>{

    return this.http.get<Employee[]>(Constant.API_ENDPOINT+"/rest/employees")
               .pipe(catchError(this.errorHandler));
  }

  /**
   * Create the new employee record based on reference of EmployeeData
   * @param EmployeeData 
   * @returns 
   */
  createEmployee(EmployeeData:any):Observable<Employee>{
    return this.http.post<any>(Constant.API_ENDPOINT+"/rest/employees", EmployeeData)
               .pipe(catchError(this.errorHandler));
  }

  getEmployeeByUserName(userName: string):Observable<Employee[]>{
    return this.http.get<Employee[]>(Constant.API_ENDPOINT + "/rest/employees/getUserByName/" +  userName)
            .pipe(catchError(this.errorHandler));
    
  }

  updateEmployeeDetails(EmployeeData:any):Observable<Employee>{
    return this.http.put<Employee>(Constant.API_ENDPOINT + "/rest/employees/update", EmployeeData)
    .pipe(catchError(this.errorHandler));

  }
  
  updatePassword(oldPassword: string, newPassword: string):Observable<Employee>{

    return this.http.put<any>(Constant.API_ENDPOINT + '/rest/employees/changePassword/' + this.authService.authenticatedUserDetails.userName + '/oldPassword/'+ oldPassword + "/newPassword/" + newPassword, null)
      .pipe(catchError(this.errorHandler));

  }

}
