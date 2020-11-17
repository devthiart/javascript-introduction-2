import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);
const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const ContaCorrenteAlice = new ContaCorrente(1001, cliente2);

ContaCorrenteRicardo.depositar(500);

ContaCorrenteAlice.depositar(200);

let valorATransferir = 250;

ContaCorrenteRicardo.transferir(valorATransferir, ContaCorrenteAlice);

console.log(ContaCorrenteRicardo);
console.log(ContaCorrenteAlice);