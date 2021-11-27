import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private httpClient:HttpClient ) { }

  // https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json
  url:string="/server/datiodierni.json"

  url_nazionale:string="/server/dpc-covid19-ita-andamento-nazionale.json"
  url_DatiLastRawGitHubApi:string="https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json"
  url_DatiFullRawGitHubApi:string="https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json"

  public getDatiApi(): Observable<any> {
    return this.httpClient.get(this.url) 
  }

  public getDatiStoricoApi(): Observable<any> {
    return this.httpClient.get(this.url_nazionale) 
  }

  public getDatiLastRawGitHubApi(): Observable<any> {
    return this.httpClient.get(this.url_DatiLastRawGitHubApi) 
  }

  public getDatiFullRawGitHubApi(): Observable<any> {
    return this.httpClient.get(this.url_DatiFullRawGitHubApi) 
  }


}
