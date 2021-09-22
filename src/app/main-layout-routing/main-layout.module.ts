import { EditEmployeeDialogComponent } from './../main-layout/dialog/editemployee.dialog.component';
import { LeavetypeComponent } from './../main-layout/leavetype-contents/leavetype/leavetype.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularMaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { EmployeeComponent } from '../main-layout/employee-contents/employee/employee.component';
import { EmployeeNewComponent } from '../main-layout/employee-contents/employee-new/employee-new.component';
import { EmployeeDetailComponent } from '../main-layout/employee-contents/employee-detail/employee-detail.component';
import { MatTableModule } from '@angular/material/table';
import { LeavetypeNewComponent } from '../main-layout/leavetype-contents/leavetype-new/leavetype-new.component';
import { LeavetypeDetailComponent } from '../main-layout/leavetype-contents/leavetype-detail/leavetype-detail.component';
import { LeaverequestComponent } from '../main-layout/leaverequest-contents/leaverequest/leaverequest.component';
import { LeaverequestNewComponent } from '../main-layout/leaverequest-contents/leaverequest-new/leaverequest-new.component';
import { LeaverequestDetailComponent } from '../main-layout/leaverequest-contents/leaverequest-detail/leaverequest-detail.component';
import { ProfileComponent } from '../main-layout/profile-contents/profile/profile.component';
import { LeaverequestManageComponent } from '../main-layout/leaverequest-contents/leaverequest-manage/leaverequest-manage.component';
import { ProcessDialogComponent } from '../main-layout/dialog/process.dialog.component';
import { ProfileInfoComponent } from '../main-layout/profile-contents/profile-info/profile-info.component';
import { ProfileUpdateComponent } from '../main-layout/profile-contents/profile-update/profile-update.component';
import { DashboardComponent } from '../main-layout/dashboard-contents/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [    
    EmployeeComponent,
    EmployeeNewComponent,
    EmployeeDetailComponent,
    LeavetypeComponent,
    LeavetypeNewComponent,
    LeavetypeDetailComponent,
    LeaverequestComponent,
    LeaverequestNewComponent,
    LeaverequestDetailComponent,
    LeaverequestManageComponent,
    ProfileComponent,
    ProfileInfoComponent,
    ProfileUpdateComponent,
    DashboardComponent,
    //Dialog component
    ProcessDialogComponent,
    EditEmployeeDialogComponent

  ],
  imports: [ 
    CommonModule,
    MainLayoutRoutingModule,
    MatFormFieldModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    ChartsModule
  
    

  ],
  providers: []
})
export class MainLayoutModule {}