import { Constant } from './../constant/constant';
import { AuthService } from 'src/app/auth/auth.service';
import { catchError } from 'rxjs/operators';
import { Observable, pipe, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeaveType } from '../model/leave-type';
import { LeaveRequest } from '../model/leave-request';


@Injectable({
  providedIn: 'root'
})

/**
 * Handling the REST API call for the entity LeaveRequest
 */
export class LeaveRequestService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  errorHandler(error: HttpErrorResponse) {
    console.log('EmployeeLeave api error ', error);
    return throwError(error);
  }

  createEmployeeLeave(EmployeeLeaveData : any): Observable<LeaveRequest> {
    return this.http.post<LeaveRequest>(Constant.API_ENDPOINT + '/rest/leave/' + this.authService.authenticatedUserDetails.employeeID +'/leaveType/' + EmployeeLeaveData.leaveType, EmployeeLeaveData)
      .pipe(catchError(this.errorHandler));
  }

  getAllEmployeeLeaveDetails():Observable<LeaveRequest[]>{
    
    if (this.authService.isUserAdmin){
      return this.http.get<LeaveRequest[]>(Constant.API_ENDPOINT + '/rest/leave')
      .pipe(catchError(this.errorHandler));  
    }else{
    return this.http.get<LeaveRequest[]>(Constant.API_ENDPOINT + '/rest/leave/getByEmployee/' + this.authService.authenticatedUserDetails.employeeID)
      .pipe(catchError(this.errorHandler));
    }

  }

  getLeaveDetailsByReportingTo():Observable<LeaveRequest[]>{
    
    return this.http.get<LeaveRequest[]>(Constant.API_ENDPOINT + '/rest/leave/getEmployeeByReporting/' + this.authService.authenticatedUserDetails.employeeID)
      .pipe(catchError(this.errorHandler));
  }

  updateLeaveDetailStatus(leaveDetails: any):Observable<LeaveRequest>{
    return this.http.put<LeaveRequest>(Constant.API_ENDPOINT + '/rest/leave/update/' + this.authService.authenticatedUserDetails.employeeID, leaveDetails)
      .pipe(catchError(this.errorHandler));
  }

  getcountByStatus(status: string){

    return this.http.get<LeaveRequest[]>(Constant.API_ENDPOINT + '/rest/leave/getCountByStatus/' + this.authService.authenticatedUserDetails.employeeID + '/status/'+ status)
      .pipe(catchError(this.errorHandler));

  }

}