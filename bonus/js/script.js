// **Consegna**

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emette un messaggio in console con il numero della cella cliccata.

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
let gridGenerated = false; // mi dice se la grid è stata generata gia o meno
let choise = document.getElementById("select"); // variabile legata al menu a tendina della difficolta
console.log(choise.value);

// #################################################################################################################
// FUNZIONI

/**
 * Description mi genera la griglia con gli elementi, dipendentemente dal numero di elementi in argomento
 * @param {numberSquare} numberOfSquares che sarebbe numberSquare
 * @void
 */
function generateGrid(numberOfSquares) {
    let currentElem ="";
    let lastClass = choise.value;
    console.log(lastClass);
    grid.innerHTML = "";
    for (let k = 1; k <= numberOfSquares; k++) {
        currentElem = document.createElement("div"); //creo un elemento nel dom
        currentElem.classList.add("grid-elem", lastClass); //aggiungo la classe stilizzata in css all'elemento appena creato
        currentElem.innerText = k; // imposto il test (o numero) che dovrà poi comparire nella casella nel DOM
        grid.appendChild(currentElem); //aggiungo l'elemento alla griglia       
    }
     return currentElem;
}


// CREO funzione che in base alla scelta dell'utente mi cambia anche il numero degli elementi della grid
function regulationGrid (modeUser) {
    let numberSquare = 0;
    if (modeUser === "easy"){
        numberSquare = 100 ;

    } else if (modeUser === "medium") {
        numberSquare = 81 ;
    }else if (modeUser === "hard"){
        numberSquare = 49 ;
    }

    return numberSquare;
}


function itemClick() {
    console.log(this.innerText);    
    this.classList.add("click");    
}

// #####################################################################################################################


// EVENTO IN CUI LA FUNZIONE SOPRA DESCRITTA generateGrid AVVENGA SOLO SE CLICCO IL BTN, inoltre
// la griglia deve essere creata una sola volta, e solo una volta creata posso aggiungere
// eventlistner sul click di ogni singolo elemento della grid


btn.addEventListener('click', function() {
    const mode = choise.value; // modalita scelta dal menu a tendina
    console.log(mode);
    const numberOfSquare = regulationGrid(mode); //richiamo funzione per dare il numero di elementi della grid
    console.log(numberOfSquare);
    const lastNumberGrid = generateGrid(numberOfSquare); 
    grid.append(lastNumberGrid);  
    console.log(lastNumberGrid);     
});






