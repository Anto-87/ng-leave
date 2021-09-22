import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from './../../../model/leave-request';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LeaveRequestService } from 'src/app/services/leave-request.service';
import { MatDialog } from '@angular/material/dialog';
import { ProcessDialogComponent } from '../../dialog/process.dialog.component';

@Component({
  selector: 'app-leaverequest-manage',
  templateUrl: './leaverequest-manage.component.html',
  styleUrls: ['./leaverequest-manage.component.css']
})
export class LeaverequestManageComponent implements AfterViewInit, OnInit {
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['Employee', 'Reason', 'LeaveType', 'FromDate','ToDate', 'Status', 'CreatedOn', 'actions'];
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
  
   constructor(private _leaveRequestService : LeaveRequestService, private dialog : MatDialog) {

   }

   onRowClicked(row:any) {
    console.log("Row clicked: ", row);
  }

  
  fetchAll(): void {

    this._leaveRequestService.getLeaveDetailsByReportingTo().subscribe((res) =>{
      this.dataSource.data = res;
      console.log(res);
    }, err => {
      console.log(err);
    });    
  }

  reload(){
    this.fetchAll();
  }

  process(leaveId:number){
     const dialogRef = this.dialog.open(ProcessDialogComponent, {
       data : {leaveId: leaveId}
     });
  }

}
