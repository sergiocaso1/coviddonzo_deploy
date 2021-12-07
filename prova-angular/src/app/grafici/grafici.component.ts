import { Component, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-grafici',
  templateUrl: './grafici.component.html',
  styleUrls: ['./grafici.component.css']
})
export class GraficiComponent implements OnInit {

  elementRef: ElementRef;

  constructor(elementRef: ElementRef) {
   this.elementRef = elementRef;
  }

  ngOnInit(): void {
  }

  cambiaGiallo(){
    console.log("yellow() called");
    
   /*  d3.select(this.elementRef.nativeElement).select("h1").duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d * scale); }) */
  }

  cambiaRosso(){
    console.log("red called");
    
    d3.select(this.elementRef.nativeElement).select("h1").style("background-color", "red");
  }

}
