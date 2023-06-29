const {Pool} = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: 'zxc123',
    database: 'libreria'
}
new Pool(config);