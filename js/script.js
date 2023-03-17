// **Consegna**

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// **Bonus**

// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// **Consigli del giorno:** 

// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


// DICHIARAZIONI
// definisco in primis alcune variabili che mi serviranno con scope globale 
const btn = document.querySelector(".btn"); // questo è il buttone che mi indicherà poi la difficoltà
const grid = document.querySelector(".grid") // griglia le cui caselle dipenderanno dalal difficoltà selezionata
let numberSquare = 100; //numero di caselle, di default 100, ma cambiando difficoltà cambieranno
let gridGenerated = true;

// FUNZIONI

/**
 * Description mi genera la griglia con gli elementi, dipendentemente dal numero di elementi in argomento
 * @param {text} numberOfSquare che sarebbe numberSquare
 * @returns {array}
 */
function generateGrid(numberOfSquare) {
    for (let k = 1; k <= numberOfSquare; k++) {
        let currentElem = document.createElement("div"); //creo un elemento nel dom
        currentElem.classList.add("grid-elem"); //aggiungo la classe stilizzata in css all'elemento appena creato
        currentElem.innerText = k; // imposto il test (o numero) che dovrà poi comparire nella casella nel DOM
        grid.appendChild(currentElem); //aggiungo l'elemento alla griglia

    }
    return currentElem;
}


// EVENTO IN CUI LA FUNZIONE SOPRA DESCRITTA AVVENGA SOLO SE CLICCO IL BTN
btn.addEventListener('click', function() {
    while (gridGenerated) {
      generateGrid(numberSquare);
      gridGenerated = false;
    }
  });

