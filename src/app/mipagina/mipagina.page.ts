import { Component, OnInit } from '@angular/core';
import{AnimalesService} from '../api/animales.service';
import{NavController} from '@ionic/angular'
@Component({
  selector: 'app-mipagina',
  templateUrl: './mipagina.page.html',
  styleUrls: ['./mipagina.page.scss'],
})
export class MipaginaPage {
		Omedicos:any;
  		constructor(private servicio_animales: AnimalesService, private navCtrl: NavController){
  		}
 		ngOnInit(){
    	  	this.servicio_animales.getMedicosList().subscribe(data5=>{
        	
      	//	this.Oanimales=data.animales;

          	this.Omedicos=data5.medicos;
        	console.log(this.Omedicos);
      });
   }
medicos(){
          console.log("Para moverme de pagina");
          this.navCtrl.navigateForward('/mipagina');
          }
}
