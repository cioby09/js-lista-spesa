// Creiamo l'array con la lista della spesa
const shoppingList = ["latte", "pane", "uova", "mele", "carote"];
const listElem = document.querySelector("ul");

// Inizializzo la variabile del contatore
let i = 0;
let listItems = "";

while (i < shoppingList.length) {

    // Stampo in console l'elemento dell'array
    console.log(shoppingList[i]);

    // Attribuisco il list item di HTML a "listItems"
    listItems += `<li>${shoppingList[i]}</li>`

    // Incremento la variabile del contatore
    i++;

}

// Aggiungo gli elementi al file HTML
listElem.innerHTML = listItems;