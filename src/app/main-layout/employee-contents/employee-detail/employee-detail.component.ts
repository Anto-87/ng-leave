import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from './../../../model/leave-request';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/model/employee';
import { EditEmployeeDialogComponent } from '../../dialog/editemployee.dialog.component';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements AfterViewInit, OnInit {
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['EmployeeName', 'UserName', 'ReportingTo', 'Role', 'Status', 'actions'];
  details : any;
  dataSource! : MatTableDataSource<Employee>;
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
  
   constructor(private _employeeService : EmployeeService, private matDialog : MatDialog) {

   }

   onRowClicked(row:any) {
    console.log("Row clicked: ", row);
  }

  
  fetchAll(): void {

    this._employeeService.getAllEmployees().subscribe((res) =>{
      this.dataSource.data = res;
      console.log(res);
    }, err => {
      console.log(err);
    });
    
  }

  reload(){
    this.fetchAll();
  }

  edit(employeeID:number){


    const dialogRef = this.matDialog.open(EditEmployeeDialogComponent, {
      data : {
        employeeID: employeeID,
            }
    });

  }

}
