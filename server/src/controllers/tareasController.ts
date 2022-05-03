import {Request,Response} from 'express';
import conexionDB from '../database';

class TareasController{

    //metodos async por que al realizar consulta utlizamos un await
    //en TareasController realizamos las consultas que mas tarde queremos reflejar en nuestro front end

    public async list (req:Request,res:Response){
       await conexionDB.query("SELECT * FROM tareas", function (err, result,fields){
           if(err) throw err;
           res.json(result);
       });
            }
     public async getOne (req:Request, res: Response){
         const id = req.params.id;
         const sql = "SELECT * FROM tareas WHERE id = '"+[id]+"'";

        await conexionDB.query(sql, (err,result)=>{
            if(!result[0]){
                return res.status(400).json({error: 'no hay resultados para este id: '+[id]})
            }else{
                console.log(result)
                return res.json(result);
            }
        });
                
    }  

   public async create (req:Request, res: Response):Promise<void>{
       await conexionDB.query('INSERT INTO tareas set ?', [req.body], function (err,result){
           if(err) throw err;
           res.json({Text: 'tarea creada'});

       });   
    }

    public async delete (req:Request, res: Response){
        await conexionDB.query("DELETE FROM tareas WHERE id='"+ req.params.id +"'", function (err, result,fields){
            if(err) throw err;
            res.json(result+{text: 'eliminando tarea'});
            
    });
}

    public async update (req:Request, res: Response){
        const id = req.params.id;
       await conexionDB.query("UPDATE tareas set? WHERE id = ?",[req.body,id], (err,result)=>{
           if (err) throw err;
           res.json({text: 'el juego con id: '+[id]+ " se actualizo correctamente"});
       });
    }

}

const tareaController = new TareasController();
export default tareaController;