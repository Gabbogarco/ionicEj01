import { Component } from '@angular/core';
import{AnimalesService} from '../api/animales.service'
@Component({
  	selector: 'app-tab1',
  	templateUrl: 'tab1.page.html',
  	styleUrls: ['tab1.page.scss']
	})
export class Tab1Page {
		Oanimales:any;

	constructor(private servicio_animales:AnimalesService){

	}
	ngOnInit(){
    	  	this.servicio_animales.getAnimales().subscribe(data=>{
        	console.log(data);
      		this.Oanimales=data.animales;
        	console.log(this.Oanimales)
      });
   }
}
