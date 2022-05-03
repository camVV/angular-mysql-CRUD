import {Router} from 'express';
import TareasController from '../controllers/tareasController';



class TareasRoutes{
   public router: Router = Router();

   constructor(){
       this.config();
   }
//definimos las rutas para el CRUD
   config(): void{
      this.router.get('/', TareasController.list);
      this.router.get('/:id', TareasController.getOne);
      this.router.post('/',TareasController.create);
      this.router.delete('/:id',TareasController.delete);
      this.router.put('/:id',TareasController.update);
   }
}

const tareasRoutes = new TareasRoutes();
export default tareasRoutes.router;