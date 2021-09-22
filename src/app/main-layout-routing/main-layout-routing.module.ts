import { MAIN_LAYOUT_ROUTES } from './main-layout.routes';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild(MAIN_LAYOUT_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
