const { Pool } = require('pg')
const pool = new Pool({
    user: 'volleyad415',
    password: '9818053236',
    database: 'postgres',
    host: 'try123.cyxyozhdltc4.ap-south-1.rds.amazonaws.com',
    port: '5432',
})

pool.connect(()=>{
    console.log(" connection established")
})
module.exports=pool;
