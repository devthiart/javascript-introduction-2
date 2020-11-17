import {Cliente} from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContasCorrentes = 0;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        this._saldo = 0;

        ContaCorrente.numeroDeContas++;
    }

    set cliente(clienteRecebido) {
        if(clienteRecebido instanceof Cliente) {
            this._cliente = clienteRecebido;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo () {
        return this._saldo;
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) return;
         
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);

        conta.depositar(valorSacado);
    }
}
