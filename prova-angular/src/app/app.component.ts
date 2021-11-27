import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { ServiceApiService } from './service-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'prova-angular';
}
