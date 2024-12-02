import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCampingComponent } from './list-camping/list-camping.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { AddCampingComponent } from './add-camping/add-camping.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCampingComponent,
    AddCampingComponent,
  //  AddStageComponent,
    //NotFoundComponent,
   // DetailstageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
