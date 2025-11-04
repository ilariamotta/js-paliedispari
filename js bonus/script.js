// Bonus:
// Come creare una funzione che dato una frase si capitalizzano tutte le parole di questa frase

// "pippo studia sviluppo web" --->  "Pippo Studia Sviluppo Web"

const fraseIniziale = "pippo studia sviluppo web";


function toCap(frase) {
    const array = frase.split(" ");
    for (let i = 0; i < array.length; i++) {
    array[i] = array[i].slice(0, 1).toUpperCase() + array[i].slice(1, array[i].length);
    }
    newString = array.join(" ");
    return newString;
}

console.log(toCap(fraseIniziale));