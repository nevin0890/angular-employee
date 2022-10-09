import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
