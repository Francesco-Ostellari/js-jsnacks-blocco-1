// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


ciclo for
const invitati = ['Giovanni', 'Luca', 'Leonardo', 'Martina', 'Emma', 'Veronica'];
const nomeUtente = prompt ('Come ti chiami?');
let find = false;

for (let index = 0; index < invitati.length; index++) {
  const element = invitati[index];
  console.log(element, index);
  if (element == nomeUtente) {
    find = true;
  }
}

if (find) {
  console.log('Puoi partecipare alla festa');
} else {
  console.log ('Non puoi partecipare alla festa');
}

// ciclo while
const invitati = ['Giovanni', 'Luca', 'Leonardo', 'Martina', 'Emma', 'Veronica'];
const nomeUtente = prompt('Come ti chiami?');
let find = false;
let index = 0;

while (index < invitati.length) {
  const element = invitati[index];
  console.log(element, index);
  index++;
  if (element == nomeUtente) {
    find = true;
  }
}

if (find) {
  console.log('Puoi partecipare alla festa');
} else {
  console.log('Non puoi partecipare alla festa');
}