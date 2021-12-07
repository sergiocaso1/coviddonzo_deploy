import { NgModule } from '@angular/core';
import{HttpClient, HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceApiService } from './service-api.service';
import { CercaPerDataComponent } from './cerca-per-data/cerca-per-data.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { GraficiComponent } from './grafici/grafici.component';





@NgModule({
  declarations: [
    AppComponent,
    CercaPerDataComponent,
    HomeComponent,
    GraficiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  ,
    AppRoutingModule  ,
    FormsModule,
    
  ],
  providers: [
    ServiceApiService
    ],
  bootstrap: [AppComponent]
})


export class AppModule { }
