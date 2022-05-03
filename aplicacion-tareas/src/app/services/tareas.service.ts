// angular----------
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';//http client sirve para comunicarse con un servidor a traves de http

//components-----------
import { Tarea } from '../models/tareas';

//con injectable permitimos que este servicio este disponible en otras partes como en tareas forms
@Injectable()

export class TareasService {

  //en esta variable tipo string almacenamos la direccion de la API donde se encuentra nuestra BD

  API_URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient ) { }

  //metodos para hacer CRUD con estos metodos que creamos estamos llamando a los metodos creados en el backend para obtener dicha informacion en el front


  getTareas(){
    return this.http.get(`${this.API_URL}/tareas`);
  }

  getTarea(id: any){
    
    return this.http.get(`${this.API_URL}/tareas/${id}`);
  }

  saveTarea(tarea: Tarea){
    return this.http.post(`${this.API_URL}/tareas`, tarea);
  }

  deleteTarea(id:any){
    return this.http.delete(`${this.API_URL}/tareas/${id}`);
  }

  updateTarea(id: any, updateTarea: Tarea){
    return this.http.put(`${this.API_URL}/tareas/${id}`, updateTarea);
  }
}
