import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CercaPerDataComponent } from './cerca-per-data/cerca-per-data.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'cerca', component: CercaPerDataComponent},
  { path: '**', component: HomeComponent}
]

@NgModule({
  
  imports: [ RouterModule.forRoot(routes)],
    exports:[RouterModule]
  
})
export class AppRoutingModule { }
