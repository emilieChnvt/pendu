//DOM

const boutonEntrer = document.querySelector('.boutonEntrer');
const letterEnter = document.getElementById('letterEnter');
const response = document.querySelector('.response');
const paragraphe = document.createElement('p')


// Variables pour fonctions
let mots = ["arraignee","bois", "table","chaise", "curseur", "chantier", "elephant", "fenetre"];
let lettresAlphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//EventListener
boutonEntrer.addEventListener("click", findWordPendu);



// Fonctions
function motRanddomChoisi(){
    const motPendu = Math.floor(Math.random() * mots.length);

    return  mots[motPendu]
}
let motDecettePartie = motRanddomChoisi()
console.log( motDecettePartie)


function findWordPendu(){
    if(motDecettePartie.includes(letterEnter.value)){

        response.innerHTML +=  letterEnter.value;
    }
}

function sortFirstAndLastElement(){
    let output = motDecettePartie[0] + motDecettePartie[motDecettePartie.length-1];
    console.log(output);

}
sortFirstAndLastElement()



