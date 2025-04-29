import mysql, { Connection, RowDataPacket } from 'mysql2/promise';

export class MySQLConnection {
    connection: Connection | undefined;

    async init() {
        try {
            console.log('[+] CONNECTING TO MySQL');
            this.connection = await mysql.createConnection({
                host: process.env.DEV_DB_MYSQL_HOST,
                user: process.env.DEV_DB_MYSQ_USER,
                password: process.env.DEV_DB_MYSQ_PASSWORD,
                database: process.env.DEV_DB_MYSQ_DATABASE
            });
            console.log('\n[+] SUCCESS !');
        } catch (error) {
            console.error('\n[-] ERROR EN CONEXIÓN DE BASE DE DATOS: ', error.message);
            throw error;
        }
    }
}