const {Pool} = require('pg');

new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'zxc123',
    database: 'libreria'
});