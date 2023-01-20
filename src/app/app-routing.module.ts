import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  {path:'Welcome',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
