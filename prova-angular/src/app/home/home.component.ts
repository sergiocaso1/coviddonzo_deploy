import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  DatasourceLastRawGitHub: any={};
  DatasourceFullRawGitHub: any={};
  DatasourceLastMeno2RawGitHub: any={};
  DatasourceUnAnnoFa: any={};
  dataAnnoScorso: string='';

  constructor(private service:ServiceApiService){

    this.chiamaApi()
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  showWord:string="";
  showPreWord:string=""

  Datasource:any={}
  DatasourceStorico:any={}
  dobe:any
  uri:string=""
  

  public chiamaApi(){
    this.service.getDatiApi().subscribe(res =>{
      console.log('res')
      console.log(res)
      this.Datasource=res[0]
      console.log('datasource')
      console.log(this.Datasource)
      

      
      this.showPreWord=""
      this.showWord=""
    })
    this.service.getDatiStoricoApi().subscribe(res=>{
     
      this.DatasourceStorico=res

    })
   

    this.service.getDatiFullRawGitHubApi().subscribe(res=>{
     
      
      this.DatasourceFullRawGitHub=res
      console.log('storico')
      console.log(this.DatasourceFullRawGitHub)

      console.log('res-2')
      this.DatasourceLastMeno2RawGitHub=this.DatasourceFullRawGitHub[ Object.keys(this.DatasourceFullRawGitHub).length-2]
      console.log(this.DatasourceLastMeno2RawGitHub)
      this.DatasourceUnAnnoFa=this.DatasourceFullRawGitHub[ Object.keys(this.DatasourceFullRawGitHub).length-366]
      console.log('res anno scorso')
      console.log(this.DatasourceUnAnnoFa)

      let data=new Date(this.DatasourceUnAnnoFa.data)
      this.dataAnnoScorso=String(data.getDate().toString()+"/"+String(data.getMonth()+1)+"/"+data.getFullYear()) 


    })
 this.service.getDatiLastRawGitHubApi().subscribe(res=>{
      console.log('res2')
      console.log(res[0])
      this.DatasourceLastRawGitHub=res[0]

    })

  }
assegnaDataNascita(){
  /* console.log('data:')
  console.log(this.Datasource.data) */
  let data=new Date(this.DatasourceLastRawGitHub.data)
    this.showPreWord="Data Ultimo Rilevamento :"

  /* console.log('new date:')
  console.log(data)

  console.log(data.getFullYear()) */
this.showWord=String(data.getDate().toString()+"/"+String(data.getMonth()+1)+"/"+data.getFullYear()) 

}

assegnaPositivi(){
  this.showPreWord="Attualmente Positivi :"
  this.showWord=parseInt( this.DatasourceLastRawGitHub.totale_positivi ).toLocaleString()+'(incremento di  '+(this.DatasourceLastRawGitHub.totale_positivi-this.DatasourceLastMeno2RawGitHub.totale_positivi).toLocaleString()+' persone)'
  
}

assegnaGuariti(){
  this.showPreWord="totale Guariti :"
  this.showWord=parseInt( this.DatasourceLastRawGitHub.dimessi_guariti ).toLocaleString()+'(incremento di   '+(this.DatasourceLastRawGitHub.dimessi_guariti-this.DatasourceLastMeno2RawGitHub.dimessi_guariti).toLocaleString()+' persone)'

}

assegnaterapiai(){
  this.showPreWord="Terapie intensive Odierne :"
  
  this.showWord=parseInt( this.DatasourceLastRawGitHub.terapia_intensiva ).toLocaleString()+'(incremento di   '+(this.DatasourceLastRawGitHub.terapia_intensiva-this.DatasourceLastMeno2RawGitHub.terapia_intensiva).toLocaleString()+' persone) ingressi in T.I. :'+this.DatasourceLastRawGitHub.ingressi_terapia_intensiva

}

assegnaPositiviAnnoScorso(){
  this.showPreWord="Numero Positivi Rispetto Anno Scorso ("+this.dataAnnoScorso+" ):"
  this.showWord=parseInt( this.DatasourceLastRawGitHub.totale_positivi ).toLocaleString()+' vs  '+parseInt( this.DatasourceUnAnnoFa.totale_positivi ).toLocaleString()
}

assegnaterapiaiAnnoScorso(){
  this.showPreWord="ricoverati in terapia Intensiva rispetto ad un anno fa("+this.dataAnnoScorso+" ):"
  this.showWord=parseInt( this.DatasourceLastRawGitHub.terapia_intensiva ).toLocaleString()+' vs  '+parseInt( this.DatasourceUnAnnoFa.terapia_intensiva ).toLocaleString()
}
assegnaOspedalizzatiAnnoScorso(){
  this.showPreWord="Ospedalizzati rispetto ad un anno fa("+this.dataAnnoScorso+" ):"
  this.showWord=parseInt( this.DatasourceLastRawGitHub.ricoverati_con_sintomi ).toLocaleString()+' vs  '+parseInt( this.DatasourceUnAnnoFa.ricoverati_con_sintomi ).toLocaleString()

}

}
