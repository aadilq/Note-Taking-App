import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';
import { error } from 'console';

dotenv.config()

const sqlpool = mysql.createPool({
    host : process.env.DB_HOST,
    port : Number(process.env.DB_PORT), 
    user : process.env.DB_USER, 
    password : process.env.DB_PASSWORD, 
    database : process.env.DB_NAME,
    waitForConnections : true, 
    connectionLimit: 10, 
    queueLimit : 0
});

sqlpool.getConnection()
    .then(Connection =>{
        console.log('Database connected Successfully ✅')
    })
    .catch(error =>{
        console.log('Error connecting to database', error)
    })

export default sqlpool

