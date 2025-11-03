
//PARI E DISPARI
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// funzione che ci dice chi ha vinto il gioco
//1.creazione funzione
//2.chiediamo all'utente se pari o dispari
//3.generazione numero random sia per utente che computer
//4.somma dei due numeri usciti
//5.SE somma corrisponde alla scelta dell'utente ALLORA vince, ALTRIMENTI vince computer

// nome funzione: whoWins
// param: scelta utente e la somma
// return: chi ha vinto (stringa)


function whoWins(sceltaUtente, somma) {
    if (somma % 2 === 0 && sceltaUtente === "pari") {
        return "Hai vinto!";
    } else if (somma % 2 !== 0 && sceltaUtente === "dispari") {
        return "Hai vinto!";
    } else {
        return "Computer ha vinto";
    }

}



sceltaUtente = prompt("Pari o dispari?").toLowerCase()
numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"))
numeroPc = Math.floor(Math.random() * 5) + 1;
somma = numeroUtente + numeroPc;

// whoWins("pari", 8);