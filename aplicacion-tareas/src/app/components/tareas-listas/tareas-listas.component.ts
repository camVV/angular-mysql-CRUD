//angular
import { Component, HostBinding, OnInit } from '@angular/core';

//Services
import { TareasService } from 'src/app/services/tareas.service';

//font-awesome
import { faPlusSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-tareas-listas',
  templateUrl: './tareas-listas.component.html',
  styleUrls: ['./tareas-listas.component.scss']
})
export class TareasListasComponent implements OnInit {

   @HostBinding('class') classes ='row';//con hostbindig estamos cambiando el diseno anadiendo una row mas
  
  //variables para usar fontawesome
  fatrashalt = faTrashAlt;
  fapencil = faPencil;
  faadd = faPlusSquare;

  
  tarea: any;

  tablaNombres ={
    titulo:'TAREA',
    descripcion: 'DESCRIPCION',
    ubicacion: 'UBICACION',
    edicion: 'EDICION'

  }
  
  
  

  constructor(private tareasService: TareasService,) { }
 


  ngOnInit(): void{
    this.getTareas();//inicialisamos el metodo getTareas para cuando realize algun cambio se actualice automaticamente
   
  }

  getTareas(){
    this.tareasService.getTareas().subscribe(
      {
        next: resp => {
          this.tarea= resp;
          console.log(typeof(this.tarea))
        },
        error: err => {
          console.log(err);
        }
      }      
    );
  }

  eliminarTarea(id: number){
    this.tareasService.deleteTarea(id).subscribe(
      {
        next: resp => {
          console.log(resp);
          this.getTareas();
        },
        error: err => {
          console.log(err);
          
        }
      }  
    );

  }
}
