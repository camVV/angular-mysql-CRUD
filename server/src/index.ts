import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import tareasRoutes from './routes/tareasRoutes';

//Configuracion del servidor

class Server{
    app:Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 3000);//puerto que vaos a utilizar
        this.app.use(morgan('dev'));//puedo ver petisiones al server get post etc
        this.app.use(cors());//angular pide datos al server 
        this.app.use(express.json());//gracias a esto mi server entiende json
        this.app.use(express.urlencoded({extended:false}));//mandar form html
    }
    
    //routas para los controladores
    routes():void{
            this.app.use(indexRoutes);
            this.app.use('/api/tareas',tareasRoutes)

    }
    //iniciar 
    start(): void{
        this.app.listen(this.app.get('port'), ()=> {
            console.log('puerto 3000 funcionando o :', this.app.get('port'))
        });
    }
}
//almacenar en constante y arrancar server
const server = new Server();
server.start();