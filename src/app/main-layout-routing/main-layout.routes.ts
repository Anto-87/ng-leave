import { ProfileUpdateComponent } from './../main-layout/profile-contents/profile-update/profile-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from '../main-layout/employee-contents/employee-detail/employee-detail.component';
import { EmployeeNewComponent } from '../main-layout/employee-contents/employee-new/employee-new.component';
import { EmployeeComponent } from '../main-layout/employee-contents/employee/employee.component';
import { LeaverequestDetailComponent } from '../main-layout/leaverequest-contents/leaverequest-detail/leaverequest-detail.component';
import { LeaverequestManageComponent } from '../main-layout/leaverequest-contents/leaverequest-manage/leaverequest-manage.component';
import { LeaverequestNewComponent } from '../main-layout/leaverequest-contents/leaverequest-new/leaverequest-new.component';
import { LeaverequestComponent } from '../main-layout/leaverequest-contents/leaverequest/leaverequest.component';
import { LeavetypeDetailComponent } from '../main-layout/leavetype-contents/leavetype-detail/leavetype-detail.component';
import { LeavetypeNewComponent } from '../main-layout/leavetype-contents/leavetype-new/leavetype-new.component';
import { LeavetypeComponent } from '../main-layout/leavetype-contents/leavetype/leavetype.component';
import { ProfileInfoComponent } from '../main-layout/profile-contents/profile-info/profile-info.component';
import { ProfileComponent } from '../main-layout/profile-contents/profile/profile.component';
import { DashboardComponent } from '../main-layout/dashboard-contents/dashboard/dashboard.component';


export const MAIN_LAYOUT_ROUTES: Routes = [

  {path:'dashboard', component:DashboardComponent},

  {path:'employee', component:EmployeeComponent,

  children :[

    
    {path:'details', component:EmployeeDetailComponent},
    {path:'new', component:EmployeeNewComponent}

    ]
  },
  {path:'leavetype', component:LeavetypeComponent,

  children :[

    {path:'details', component:LeavetypeDetailComponent},
    {path:'new', component:LeavetypeNewComponent}

    ]

  },
  {path:'leaverequest', component:LeaverequestComponent,

  children :[

    {path:'details', component:LeaverequestDetailComponent},
    {path:'new', component:LeaverequestNewComponent},
    {path:'manage', component:LeaverequestManageComponent}
  ]
  },
  {path:'profile', component:ProfileComponent,
  
  children:[
    {path:'info',component: ProfileInfoComponent},
    {path:'update', component:ProfileUpdateComponent}
  ]
  }

];
