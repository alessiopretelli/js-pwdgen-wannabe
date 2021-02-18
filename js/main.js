
var nome;
var cognome;
var colore;
const number = 19;

nome = prompt("Ciao! Inserisci il tuo nome...");
console.log(nome);

cognome = prompt("Ora inserisci il tuo cognome...");
console.log(cognome);

colore = prompt("Qual e' il tuo colore preferito?");
console.log(colore);

document.getElementById("id_one").innerHTML = "La tua nuova password e': " + nome + cognome + colore + number;

