export class Conta{

    agencia;
    _cliente;
   // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
   _saldo = 0;
    

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
          throw new Error("Você não deveria instanciar um objeto do tipo conta")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;

    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
           
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor){
        if(valor <= 100)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);     
    }

}