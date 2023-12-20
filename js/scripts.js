/*
Consegna:
Dato un array di oggetti letterali con:
 - url dell'immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup 
statico: costruiamo il container e inseriamo l'immagine grande in modo da poter 
stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l'array di oggetti letterali per 
popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva 
diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la slide attiva è la 
prima e l'utente clicca la freccia verso destra, la slide che deve attivarsi 
sarà l'ultima e viceversa per l'ultima slide se l'utente clicca la freccia verso sinistra.
Buon lavoro e buon divertimento!

SVOLGIMENTO
1)creo un array che contiene degli oggetti letterali con:
    -url
    -titolo
    -descrizione
2)creo tramite markup statico il carousel in pagina index
3)rimuovo la parte di mark up statico e vado a creare dinamicamente la stessa tramite l'array dato
4)aggiungo il ciclo infinito
*/

//array di oggetti che uso per popolare il mio DOM
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];
//dichiarazione di variabile dove verrà inserita la struttura nel dom
const containerImg = document.querySelector(".container-carousel div:last-child");
//dichiarazione di variabili contenenti il collegamento ai pulsanti del dom
const pulsanteUp = document.querySelector(".right");
const pulsanteDown = document.querySelector(".left");


//ciclo di lettura array
for (let i = 0; i < images.length; i++) {
    if (i == 0){
        containerImg.innerHTML += `
            <div class="item active">
                <img src="${images[i].url}" alt="">
            </div>
            <div class="text-img text-end pe-3 active">
                <h2>${images[i].title}</h2>
                <p>${images[i].description}</p>
            </div>
        `;    
    }
    else{
        containerImg.innerHTML += `
        <div class="item">
            <img src="${images[i].url}" alt="">
        </div>
        <div class="text-img text-end pe-3">
            <h2>${images[i].title}</h2>
            <p>${images[i].description}</p>
        </div>            
    `;
    }
}
//impementazione dinamica di "spostamento" immagini del carousel con ciclo infinito
let n = 0;
const items = document.querySelectorAll(".item")
const textItems = document.querySelectorAll(".text-img")

pulsanteUp.addEventListener("click", function () {
    items[n].classList.remove("active");
    textItems[n].classList.remove("active");
        if(n < (items.length -1)){
            n++;
        }
        else if(n == items.length-1){
            n = 0;
        }
    items[n].classList.add("active");
    textItems[n].classList.add("active");
})

pulsanteDown.addEventListener("click", function () {
    items[n].classList.remove("active");
    textItems[n].classList.remove("active");
        if(n > 0){
            n--;
        }
        else if(n == 0){
            n = items.length - 1;
        }
    items[n].classList.add("active");
    textItems[n].classList.add("active");
})
    