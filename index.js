const {Pool} = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: '',
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
    
};

const deleteUser = async () =>{
    try {
        const text = 'DELETE FROM users WHERE username = $1';
        const value =['joe'];
        const res = await pool.query(text, value);
        console.log(res);

    } catch (e) {
        console.log(e);
    }
};

const editUser = async ()=>{

    try {
        const text = 'UPDATE users SET username = $1, password = $2 WHERE username = $3';
        const values = ['Bruce', 'bruce123', 'diego'];
        const res = await pool.query(text, values);
        console.log(res);
        
    } catch (e) {
        console.log(e);
    }
};

editUser();