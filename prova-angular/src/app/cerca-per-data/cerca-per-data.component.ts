import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-cerca-per-data',
  templateUrl: './cerca-per-data.component.html',
  styleUrls: ['./cerca-per-data.component.css']
})
export class CercaPerDataComponent implements OnInit {
  DatasourceFullRawGitHub: any = {};

  constructor(private service: ServiceApiService) { }

  ngOnInit(): void {

    this.service.getDatiFullRawGitHubApi().subscribe(res => {


      this.DatasourceFullRawGitHub = res
      console.log('storico')
      console.log(this.DatasourceFullRawGitHub)
    })
  }
  data: any
  prova!: any
  oggetto: any
  arrayy: any;
  arrayyGiornoPrec: any;

  formatt: boolean = false
  visualizzaFormat:boolean=true
  ricercaBollettinoCovid() {

    this.formatt=false
    let pro = new Date(this.data).toISOString()
     let pra = pro.slice(0, 10)
    


    /* console.log(this.DatasourceFullRawGitHub[622].data.slice(0,10))
     console.log(pro)*/


    for (var i = this.DatasourceFullRawGitHub.length; i > 0; i--) {


      if (this.DatasourceFullRawGitHub[i]?.data.slice(0, 10) == pra) {

        this.arrayy = this.DatasourceFullRawGitHub[i]
        this.arrayyGiornoPrec=this.DatasourceFullRawGitHub[i-1]
        console.log(this.arrayy)
        console.log(this.arrayyGiornoPrec)

      }
    }
     let ss= new Date(this.arrayy.data)


    this.prova = this.nomi_giorni[ss.getDay()]+" "+this.arrayy.data.slice(0, 10)
    this.oggetto = Object.keys(this.arrayy)
    console.log(this.oggetto)
    for (let obj of Object.keys(this.arrayy)) {
      console.log('key: ' + obj + ',  value: ' + this.arrayy[obj]);
    }


  }
  
 dataFormatt:string=""
 totale_positivi:string=""
 deceduti:string=""
 guariti:string=""
 ricoverati:string=""
 terapiaI:string=""
 tamponi:string=""
 totale_casi:string=""
 nomi_giorni=new Array("Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato");

  visualizzaFormatt() {

    this.formatt=true


    let date=new Date(this.arrayy.data)
    


this.dataFormatt=this.nomi_giorni[date.getDay()] +" "+String(String(date.getDate())+"/"+String(date.getMonth()+1)+"/"+date.getFullYear()+"\r")
    this.totale_positivi=parseInt( this.arrayy.totale_positivi ).toLocaleString()+'('+(this.arrayy.totale_positivi-this.arrayyGiornoPrec.totale_positivi).toLocaleString()+') \r'
this.deceduti=parseInt( this.arrayy.deceduti ).toLocaleString()+'('+(this.arrayy.deceduti-this.arrayyGiornoPrec.deceduti).toLocaleString()+') \r'
this.guariti=parseInt( this.arrayy.dimessi_guariti ).toLocaleString()+'('+(this.arrayy.dimessi_guariti-this.arrayyGiornoPrec.dimessi_guariti).toLocaleString()+') \r'
this.ricoverati=parseInt( this.arrayy.ricoverati_con_sintomi ).toLocaleString()+'('+(this.arrayy.ricoverati_con_sintomi-this.arrayyGiornoPrec.ricoverati_con_sintomi).toLocaleString()+') \r'
this.terapiaI=parseInt( this.arrayy.terapia_intensiva ).toLocaleString()+'('+(this.arrayy.terapia_intensiva-this.arrayyGiornoPrec.terapia_intensiva).toLocaleString()+') \r'
this.tamponi=parseInt( this.arrayy.tamponi).toLocaleString()+'('+(this.arrayy.tamponi-this.arrayyGiornoPrec.tamponi).toLocaleString()+') \r'
this.totale_casi=parseInt( this.arrayy.totale_casi).toLocaleString()+'('+(this.arrayy.totale_casi-this.arrayyGiornoPrec.totale_casi).toLocaleString()+') \r'
console.log(date)
  }

  copyInputMessage(inputElement:any){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
