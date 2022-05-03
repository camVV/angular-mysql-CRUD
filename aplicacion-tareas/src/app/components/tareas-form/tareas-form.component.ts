//Angular ----------
import { Component, HostBinding, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//model de tarea de aqui traemos los campos de tareas como nombre etc...
import { Tarea } from 'src/app/models/tareas';

import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas-form',
  templateUrl: './tareas-form.component.html',
  styleUrls: ['./tareas-form.component.scss']
})
export class TareasFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
 
 //le pongo valores para previsualizar
  tarea: Tarea | any = {
    nombre: '',
    imagen: '',
    descripcion: '',
    ubicacionCarpeta: '',
    create_at: new Date,
  };
   edit: boolean = false;
  
  //Router permite navegacion entre vistas
  //ActivateRoute nos permite recoger el id de la tarea que queremos editar 
  constructor(private tareaService: TareasService,
              private router: Router, 
              private activeRouter: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    const params=this.activeRouter.snapshot.params;//aqui estamos almacenando dicho id en la variable params
    
    if(params['id']){
      this.tareaService.getTarea(params['id']).subscribe((resp: any) =>
        {
            this.tarea=resp;
            console.log(this.tarea);
            for (let tare of this.tarea){
              this.tarea = tare;
            }
            this.edit = true;
          }
          
      );
    
    }  
    
}
  
  
  guardarTarea(){
    delete this.tarea.create_at;
    this.tareaService.saveTarea(this.tarea).subscribe(
      {
        next: resp => {
          console.log(resp);
          this.router.navigate(['/tareas']);
          
        },
        error: err => {
          console.log(err);
        }
      }      
    );
  }

  updateTarea(){
    delete this.tarea.create_at;
    this.tareaService.updateTarea(this.tarea.id,this.tarea).subscribe(
      {
        next: resp => {
          console.log(resp);
          console.log('hollaa');
          this.router.navigate(['/tareas']);
          
          
        },
        error: err => {
          console.log(err);
        }
      }      
    );
  }
  
}
