import { catchError } from 'rxjs/operators';
import { Observable, pipe, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeaveType } from '../model/leave-type';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})

/**
 * Handling the REST API call for the entity LeaveRequest
 */
export class LeaveTypeService {

  
  constructor(private http: HttpClient) { }

  /**
   * Handling the error , when it occurs throw the mesage.
   * @param error 
   * @returns 
   */
  errorHandler(error: HttpErrorResponse) {
    console.log('LeaveType api error ', error);
    return throwError(error);
  }
  
  /**
   * Creating the new leave type entry
   * @param LeaveTypeData 
   * @returns 
   */
  createLeaveType(LeaveTypeData:any):Observable<LeaveType[]>{

    return this.http.post<any>(Constant.API_ENDPOINT + '/rest/leave-types', LeaveTypeData)
          .pipe(catchError(this.errorHandler)); 

  }

  /**
   * Fetching all the LeaveTypes data
   * @returns 
   */
  getAllLeaveTypes(): Observable<LeaveType[]>{
    return this.http.get<LeaveType[]>(Constant.API_ENDPOINT+"/rest/leave-types")
            .pipe(catchError(this.errorHandler))
        
  }

}
