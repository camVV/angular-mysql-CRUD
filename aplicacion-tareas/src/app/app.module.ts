//modules angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';//comunicacion ente front y api
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //bootstrap 5.0v


//components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TareasFormComponent } from './components/tareas-form/tareas-form.component';
import { TareasListasComponent } from './components/tareas-listas/tareas-listas.component';
import { TareasService } from './services/tareas.service';

//fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TareasFormComponent,
    TareasListasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
   
  ],
  providers: [
    TareasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  }
