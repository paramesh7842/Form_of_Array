import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FomarrayComponent } from './FormArray/fomarray/fomarray.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FomarrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
