import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { LeaveType } from 'src/app/model/leave-type';
import { LeaveTypeService } from 'src/app/services/leave-type.service';

@Component({
  selector: 'app-leavetype-detail',
  templateUrl: './leavetype-detail.component.html',
  styleUrls: ['./leavetype-detail.component.css']
})
export class LeavetypeDetailComponent implements AfterViewInit, OnInit {
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['TypeName', 'Status', 'actions'];
  details : any;
  dataSource! : MatTableDataSource<LeaveType>;
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
  
   constructor(private _leaveTypeService : LeaveTypeService) {

   }

   onRowClicked(row:any) {
    console.log("Row clicked: ", row);
  }

  
  fetchAll(): void {

    this._leaveTypeService.getAllLeaveTypes().subscribe((res) =>{
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
