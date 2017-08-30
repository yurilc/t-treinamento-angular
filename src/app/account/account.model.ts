export class Account {
    agencia: number;
    conta: number;
    tipo: string;
    saldo: number;
    
    constructor(agencia?: number,
                conta?: number,
                tipo?: string,
                saldo?: number) {
        this.agencia = agencia;
        this.conta = conta;
        this.tipo = tipo;
        this.saldo = saldo;
    }
}