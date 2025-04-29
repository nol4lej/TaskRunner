const mysql = require('mysql2/promise');

async function execute() {
    let connection;
    try {
        // connection = await mysql.createConnection({
        //     host: process.env.DB_HOST,
        //     user: process.env.DB_USER,
        //     password: process.env.DB_PASSWORD,
        //     database: process.env.DB_DATABASE
        // });
        console.log('[+] CONEXIÓN EXITOSA !');

        // const [rows, fields] = await connection.execute('SELECT * FROM f_stretches LIMIT 100')

        // rows.forEach(row => {
        //     console.log(row.id);
        // });
        
    } catch (error) {
        console.error('[-] ERROR DURANTE LAS OPERACIONES EN LA BASE DE DATOS:', error);
        throw error;
    } finally {
        if (connection) {
            await connection.end();
            console.log('[-] CONEXIÓN CERRADA.');
        }
    }
}

execute();