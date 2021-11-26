// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;
for (let index = 1; index <= 10; index++) {

  let numberUser = parseInt(prompt("inserisci 10 numeri, uno per volta"));
  console.log(numberUser);
  somma += numberUser;
}
console.log(somma);
