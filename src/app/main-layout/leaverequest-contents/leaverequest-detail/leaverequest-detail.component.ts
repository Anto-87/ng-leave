import { LeaveRequest } from './../../../model/leave-request';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LeaveRequestService } from 'src/app/services/leave-request.service';

@Component({
  selector: 'app-leaverequest-detail',
  templateUrl: './leaverequest-detail.component.html',
  styleUrls: ['./leaverequest-detail.component.css']
})
export class LeaverequestDetailComponent implements AfterViewInit, OnInit {
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['Employee', 'Reason', 'LeaveType', 'FromDate','ToDate', 'Status', 'Comments', 'approvedBy', 'CreatedOn', 'actions'];
  details : any;
  dataSource! : MatTableDataSource<LeaveRequest>;
  isLoadingResults = true; 

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  
  ngOnInit(){
    this.fetchAll();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  ngAfterViewInit() {
    
  }
  
   constructor(private _leaveRequestService : LeaveRequestService) {

   }

   onRowClicked(row:any) {
    console.log("Row clicked: ", row);
  }

  
  fetchAll(): void {

    this._leaveRequestService.getAllEmployeeLeaveDetails().subscribe((res) =>{
      this.dataSource.data = res;
      console.log(res);
    }, err => {
      console.log(err);
    });

    /*
    this.api.getAllCustomers().subscribe((res) =>
    {
     // this.customerData = res;
      this.dataSource.data = res;
      console.log(res);
      this.isLoadingResults=false;

    }, err=>{
      console.log(err);
      this.isLoadingResults = false;
    });
    /*this.authService.getUserDetails().subscribe((values)=>{
        this.details = values;
        
    })*/
    
  }

  reload(){
    this.fetchAll();
  }

}
