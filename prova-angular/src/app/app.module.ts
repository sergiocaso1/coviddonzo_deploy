import { NgModule } from '@angular/core';
import{HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceApiService } from './service-api.service';
import { CercaPerDataComponent } from './cerca-per-data/cerca-per-data.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    CercaPerDataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  ,
    AppRoutingModule  ,
    FormsModule
  ],
  providers: [
    ServiceApiService
    ],
  bootstrap: [AppComponent]
})


export class AppModule { }
