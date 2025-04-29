import mysql, { Connection, RowDataPacket } from 'mysql2/promise';
import { loadingInterval } from '@/utils';
import { Stretch } from '@/interfaces';


export class CargaDatos {
    connection: Connection | undefined;

    async run() {
        await this.connectDatabase();
        await this.execute();
    }

    async connectDatabase() {

        const interval = loadingInterval()

        try {
            console.log('[+] CONECTANDO');
            this.connection = await mysql.createConnection({
                host: process.env.DB_TESTING_HOST,
                user: process.env.DB_TESTING_USER,
                password: process.env.DB_TESTING_PASSWORD,
                database: process.env.DB_TESTING_DATABASE
            });
            clearInterval(interval)
            console.log('\n[+] SUCCESS !');
        } catch (error) {
            clearInterval(interval)
            console.error('\n[-] ERROR EN CONEXIÓN DE BASE DE DATOS: ', error.message);
            throw error;
        }
    }

    async execute() {
        try {
            if (!this.connection) {
                console.error('\n[-] No hay conexión a la base de datos.');
                return;
            }
            const [rows] = await this.connection.execute<RowDataPacket[]>('SELECT * FROM f_stretches LIMIT 100') as [Stretch[], any];

            rows.forEach(row => {
                console.log(row.id);
            });

        } catch (error) {
            console.error('\n[-] ERROR DURANTE LAS OPERACIONES EN LA BASE DE DATOS: ', error);
            throw error;
        } finally {
            if (this.connection) {
                await this.connection.end();
                console.log('\n[-] CONEXIÓN CERRADA.');
            }
        }
    }

}

// (async () => {
//     await new CargaDatos().init();
// })();