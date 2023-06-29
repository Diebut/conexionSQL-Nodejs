const {Pool} = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'zxc123',
    database: 'libreria'
}
const pool = new Pool(config);

const getLibros = async ()=>{
    try {
        const res = await pool.query('select * from libros');
        console.log(res.rows);
        pool.end();
    } catch (e) {
        console.log(e);
    }
};
const insertUser = async ()=>{

    try {
        const text = 'INSERT INTO users (username, password) VALUES ($1, $2)'
        const values =['diego', 'die123']

        const res = await pool.query(text, values);
        console.log(res);
        pool.end();
    } catch (e) {
        console.log(e);
    }
    
}

const deleteUser = async () =>{
    
}

insertUser();