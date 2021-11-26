// Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.

// // ciclo for
let somma = 0;
for (let index = 1; index <= 10; index++) {

  let numberUser = parseInt(prompt("inserisci 10 numeri, uno per volta"));
  console.log(numberUser);
  somma += numberUser;
}
console.log(somma);
document.writeln('il risultato è: ', somma);

// ciclo while

let somma = 0;
let i = 1;

while (i<=10) {
  let numberUser = parseInt(prompt("inserisci 10 numeri, uno per volta"));
  console.log(numberUser);
  somma += numberUser;
  i++;
}
console.log(somma);
document.writeln('il risultato è: ', somma);
