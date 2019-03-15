import { Component } from '@angular/core';
import{AnimalesService} from '../api/animales.service'
import{NavController} from '@ionic/angular'
@Component({
  	selector: 'app-tab1',
  	templateUrl: 'tab1.page.html',
  	styleUrls: ['tab1.page.scss']
	})
export class Tab1Page {
		Oanimales:any;

	constructor(private servicio_animales: AnimalesService, private navCtrl: NavController){

	}
	ngOnInit(){
    	  	this.servicio_animales.getAnimales().subscribe(data=>{
        	console.log(data.animales);
      	//	this.Oanimales=data.animales;

          this.Oanimales=data.animales;
        	console.log(this.Oanimales);
      });
   }
 medicos(){
          console.log("Para moverme de pagina");
          this.navCtrl.navigateForward('/mipagina');
          }
}
