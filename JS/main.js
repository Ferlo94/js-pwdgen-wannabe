// PER FAR USCIRE FINESTRA CON SCRITTA
// alert("Hello Word!");

// PER SCRIVERE NELL HTML
// document.writeln("Hello Word!");

// PER INDERIRE UN TESTO NELL ID DI UN HTML
// document.getElementById("title").innerHTML = "Hello Word!";

// PER SCRIVERE SULLA CONSOLE
// console.log("Hello Word!!!");

// PER FAR USCIRE FINESTRA IN CUI SCRIVERE
// prompt("Come ti chiami?");

// VARIABILE COSTANTE NON MODIFICABILE
// const anniAlessandro = 28;


// --------------------------------

// VARIABILE MODIFICABILE 
// let anniAlessandro = 28;
// console.log(anniAlessandro);

// anniAlessandro = 29;
// console.log(anniAlessandro);

// --------------------------------

// SOMMA DI DUE VARIABILI 
// let variabile = 'pippo';
// let variabileNew = 'pluto'
// variabile = variabileNew + ' ' + variabileNew;
// RISULTATO: pippo pluto 

// DUE MESSAGGI IN SEQUENZA
// let nomeVariabile;
// nomeVariabile = 'ciao';
// alert(nomeVariabile);

// nomeVariabile = 'arrivederci';
// alert(nomeVariabile);

// --------------------------------


// NOME E COGNOME COMPLETO IN CONSOLE
// const nome = "Gianluca";
// const cognome = "Laferla"

// const nomeCompleto = `${nome} ${cognome}`; // modo per sommare stringhe piu' semplice

// console.log(nomeCompleto)


// ESEMPIO DI AGGIUNTA SPAN IN HTML
// const nome = "Gianluca";
// const cognome = "Laferla"

// const nomeCompleto = `<span class="nome">${nome}</span> ${cognome}`; // modo per sommare stringhe piu' semplice

// console.log(nomeCompleto)


// ES DI OPERAZIONI 
// let somma = 4 + 4; 
// let sottr = somma - 3;

// console.log(sottr)

// il risultato in console sara' 5 

alert("CIAO! Rispondi a queste TRE semplici domande e genereremo una PASSWORD SUPER SICURA fatta apposta per te!");

const Name = prompt("Qual'e' il tuo nome?");

const surname = prompt("Qual'e' il tuo cognome?");

const color = prompt("Qual'e' il tuo colore preferito?");

document.getElementById("password").innerHTML = `${Name}${surname}${color}21`;

console.log(`${Name}${surname}${color}21`)