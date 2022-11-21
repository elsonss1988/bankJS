import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./conta/ContaCorrente.js"
import {ContaPoupanca} from "./conta/ContaPoupanca.js"
import {ContaSalario} from "./conta/ContaSalario.js"
import {Diretor} from "./funcionarios/Diretor.js"
import {Gerente } from "./funcionarios/Gerente.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12378945601);
const cliente = new Cliente("Lais", 78945612379, "456");
diretor.cadastrarSenha("123456")
gerente.cadastrarSenha("123")
// cliente.cadastrarSenha("456")  
const estadoLogadoD = SistemaAutenticacao.login(diretor, "123456");
const estadoLogadoG = SistemaAutenticacao.login(gerente, "123");
const estadoLogadoC = SistemaAutenticacao.login(cliente, "456");

// const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

// const conta2 = new ContaCorrente(102, cliente2);

// let valor = 200;
// contaCorrenteRicardo.tranferir(valor, conta2);

const  contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaCorrenteRicardo.sacar(100);

// const conta = new Conta(0,cliente1, 1001)

console.log(contaPoupanca);

console.log(contaCorrenteRicardo);

console.log(cliente)

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario)

console.log('Diretor',estadoLogadoD)
console.log('Gerente',estadoLogadoG)
console.log('Cliente',estadoLogadoC)