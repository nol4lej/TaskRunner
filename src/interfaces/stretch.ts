import { RowDataPacket } from "mysql2";

export interface Stretch extends RowDataPacket {
    id: number;
    name: string;
}