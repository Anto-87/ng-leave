import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
import { LeaveRequestService } from 'src/app/services/leave-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Leave Requests', 'Approved Requests', 'Rejected Requests', 'Pending Requests'];
  public pieChartData: SingleDataSet = [0, 0, 0, 0];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  
  totalLeaveRequests:number=0;
  totalApprovedRequests:number=0;
  totalRejectedRequests:number=0;
  totalPendingRequests:number=0;


   constructor(private _leaveRequestService: LeaveRequestService) { 

    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    
   }  
  
 ngOnInit() {

  this._leaveRequestService.getcountByStatus("APPROVED").subscribe(res => {
    this.totalApprovedRequests = res.length;

    this._leaveRequestService.getcountByStatus("REJECTED").subscribe(res => {
      this.totalRejectedRequests = res.length;

      this._leaveRequestService.getcountByStatus("SUBMITTED").subscribe(res => {
        this.totalLeaveRequests = res.length + this.totalApprovedRequests + this.totalRejectedRequests;
        this.totalPendingRequests = this.totalLeaveRequests - (this.totalApprovedRequests + this.totalRejectedRequests);
        this.pieChartData =[this.totalLeaveRequests, this.totalApprovedRequests, this.totalRejectedRequests, this.totalPendingRequests];
      });
    
    
    });



  });
  
  
}

}
