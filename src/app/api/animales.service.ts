import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  constructor(private http:HttpClient) { 
  }
  getAnimales(){
 	return this.http.get("http://demo0253989.mockable.io/curso-ionic-list")
 //  	return this.http.get("http://localhost:3000/animales")
  
  }
  getMedicosList(){
  	return this.http.get("http://demo0253989.mockable.io/medicos")
  }
}
