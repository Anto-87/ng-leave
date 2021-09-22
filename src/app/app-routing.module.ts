import { MainLayoutModule } from './main-layout-routing/main-layout.module';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {
  path:'layout', component:MainLayoutComponent, 
  loadChildren: () => import('./main-layout-routing/main-layout.module').then(m=>m.MainLayoutModule),
  canActivate:[AuthGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
