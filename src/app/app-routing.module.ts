import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCampingComponent} from "./list-camping/list-camping.component";
import {AddCampingComponent} from "./add-camping/add-camping.component";

const routes: Routes = [
  { path: 'camping', component:  ListCampingComponent},
  { path: 'camping/add', component: AddCampingComponent },

  // { path: '', redirectTo: '/camping', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
