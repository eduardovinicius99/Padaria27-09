import { Clientes } from "src/clientes/clientes";

export class Pedidos {
    id: number;
    orderNumber: number;
    orderDate: Date;
    delivery: Date;
    transport: string;
    total: number;
    customer: Clientes;
}
