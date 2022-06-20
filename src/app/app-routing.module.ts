import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FomarrayComponent } from './FormArray/fomarray/fomarray.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '', component: FomarrayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
