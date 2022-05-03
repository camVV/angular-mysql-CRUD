import mysql from 'mysql';

import keys from './keys';

const conexionDB = mysql.createPool(keys.database);

conexionDB.getConnection(function(){
    console.log('DB is conected por fin')
// Connection is automatically released when query resolves
});


export default conexionDB;

