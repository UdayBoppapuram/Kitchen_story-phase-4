import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact/contact-us.component';
import { AdminComponent } from './admin/admin.component';

import { PaymentComponent } from './payment/payment.component';


import { HomeComponent } from './home/home.component';


const routes: Routes = [
  //path to redirect
  {"path":"home",component:HomeComponent},
  {"path":"about",component:AboutusComponent},
  {"path":"contact",component:ContactUsComponent},
  {"path":"admin",component:AdminComponent},
  {"path":"payment",component:PaymentComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
