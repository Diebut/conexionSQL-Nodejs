const {Pool} = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'zxc123',
    database: 'libreria'
}
const pool = new Pool(config);

const getLibros = ()=>{
    pool.query('select * from libros');
};
getLibros();