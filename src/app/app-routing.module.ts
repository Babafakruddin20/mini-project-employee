import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { AllemployeesDetailsComponent } from './allemployees-details/allemployees-details.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"createemployee",component:CreateemployeeComponent},
    {path:"allemployees",component:AllemployeesComponent},
    {path:"allemployees-details/:id",component:AllemployeesDetailsComponent},
    
  ]},
  {path:"",component:LoginComponent},
  {path:"**",component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
