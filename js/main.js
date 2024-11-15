//DOM

const boutonEntrer = document.querySelector('.boutonEntrer');
const letterEnter = document.getElementById('letterEnter');
const response = document.querySelector('.response');
const paragraphe = document.createElement('p')


// Variables pour fonctions
let mots = ["arraignee","bois", "table","chaise", "curseur", "chantier", "elephant", "fenetre"];
let lettresAlphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let motCache = ['_']


//EventListener
boutonEntrer.addEventListener("click", findWordPendu);

// Fonctions


function getRandomWordFromDict(){
    const motPendu = Math.floor(Math.random() * mots.length);
    return  mots[motPendu]
}
let motDecettePartie = getRandomWordFromDict()
console.log( motDecettePartie)
motCache[0] = motDecettePartie[0]; // Première lettre
motCache[motDecettePartie.length - 1] = motDecettePartie[motDecettePartie.length - 1]; // Dernière lettre



function findWordPendu(){
    if(motDecettePartie.includes(letterEnter.value)){
        for(let j = 0; j < motDecettePartie.length; j++){
            if(motDecettePartie[j] === letterEnter.value){
                motCache[j] = letterEnter.value;
                console.log(motCache[j]);
                response.innerHTML = motCache;
            }
        }

    }
}

function sortFirstAndLastElement(){
    //underscore
        response.innerHTML += motCache;



}
sortFirstAndLastElement();






