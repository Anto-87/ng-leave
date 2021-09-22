import { LeaveRequest } from './../../model/leave-request';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/services/leave-request.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-process-dialog.dialog',
  templateUrl: './process.dialog.component.html',
  styleUrls: ['./process.dialog.component.css']
})
export class ProcessDialogComponent implements OnInit {

  constructor(public dialog : MatDialogRef<ProcessDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: LeaveRequest,
              public api: LeaveRequestService, public _auth :AuthService) { }

  ngOnInit(): void {
  }

  submit() {
   
  }

  closeDialog(){
    this.dialog.close();
  }

  approve(){
    this.update("APPROVED");
  }

  reject(){
    this.update("REJECTED");
  }

  update(status : string){
    
    let toUpdate  = {

      leaveId: this.data.leaveId,
      status:status,
      deniedReason: this.data.deniedReason,
      approvedBy:this._auth.userDetails.employeeID
    };

    this.api.updateLeaveDetailStatus(toUpdate).subscribe(sucess => {

      this.dialog.close();

    },
    error => {
      console.log(error);
    })

  }
}
