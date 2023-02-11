import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact/contact-us.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
  
    AboutusComponent,
    ContactUsComponent,
    PaymentComponent,
    AdminComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
