import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, retry } from 'rxjs/operators';
import { Customer } from '../model/customer.model';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers : new HttpHeaders({
    'content-type' : 'application-json',
    'Access-Control-Allow-Origin': 'PUT'
  })

};

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'api/v1/customers';
  //private url = 'api/customer';
  

  constructor(private httpClient: HttpClient) { }

  getAllCustomers():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>  
     (this.url)
    .pipe(
      tap(cases => console.log('fetched cases')),
      catchError(this.handleError('fetching customers', []))
    );
  }

  addCustomers(data : Customer){
    return this.httpClient.post(this.url, data);
  }

  updateCustomers(id: any, data: any){
    return this.httpClient.put(this.url+"/"+id, data);
  }

  deleteCustomer(id:any){
    return this.httpClient.delete(this.url+"/del/"+id);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
