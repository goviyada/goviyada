import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './intercepter/auth.guard';
const routes: Routes = [
  
    {path:'',component:LoginComponent, canActivate: [AuthGuard]},
    {path:'loginsuccess',component:LoginsuccessComponent},
    {path:'registeration',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'forgetPassword',component:LoginComponent}
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
