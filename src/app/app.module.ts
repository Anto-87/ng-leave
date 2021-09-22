import { MatIconModule } from '@angular/material/icon';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { AngularMaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent
    
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
