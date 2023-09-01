import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddStoreComponent } from './components/addstore/addstore.component';
import { BaseUrlService } from './services/baseurl.service';
import { AccountAPIService } from './services/accountapi.service';


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent, 
    ProductComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    AddStoreComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule],

  providers: [
    BaseUrlService,
    AccountAPIService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
