// DOM
const boutonEntrer = document.querySelector('.boutonEntrer');
const letterEnter = document.getElementById('letterEnter');
const response = document.querySelector('.response');
const containerLettres = document.querySelector('.lettresEssayees');


// Variables pour le jeu
let mots = ["arraignee", "bois", "table", "chaise", "curseur", "chantier", "elephant", "fenetre"];
let motDecettePartie = getRandomWordFromDict(); // Mot aléatoire
let motCache = Array(motDecettePartie.length).fill("_"); // Masquer le mot avec des underscores
let tentatives = [];

// Initialiser la première et la dernière lettre
initializeFirstAndLastLetter();

// Ajouter un EventListener pour gérer les clics sur le bouton
boutonEntrer.addEventListener("click", findWordPendu);

// Fonction :
    // choisir un mot aléatoire
function getRandomWordFromDict() {
    const motIndex = Math.floor(Math.random() * mots.length);
    return mots[motIndex];
}

    // initialiser la première et la dernière lettre
function initializeFirstAndLastLetter() {
    motCache[0] = motDecettePartie[0];
    motCache[motDecettePartie.length - 1] = motDecettePartie[motDecettePartie.length - 1];
    response.innerHTML = motCache.join(" "); // pour enlever les virgules
}

    // traiter une tentative de lettre
function findWordPendu() {
    const lettre = letterEnter.value.toLowerCase(); // Récupérer la lettre saisie et la convertir en minuscule
    letterEnter.value = ""; // Vider input

    // Vérifier si la lettre est dans le mot
    if (motDecettePartie.includes(lettre)) {
        for (let i = 0; i < motDecettePartie.length; i++) {
            if (motDecettePartie[i] === lettre) {
                motCache[i] = lettre; // Révéler la lettre correcte
                tentatives.push(lettre);
                containerLettres.innerHTML = tentatives;

            }
        }
        response.innerHTML = motCache.join(" ");
    }else {
        tentatives.push(lettre);
        containerLettres.innerHTML = tentatives
        alert("Mauvaise lettre ! Essayez encore.");
    }
    tentativesFaites()



    // Vérifier si le joueur a gagné
    if (motCache.join("") === motDecettePartie) {
        response.innerHTML = `Félicitations ! Vous avez trouvé le mot : ${motDecettePartie}`;

    }
}
// Tentatives
function tentativesFaites(){
    if(tentatives.length >= 10){
        containerLettres.innerHTML += "Nombres de tentatives dépassées"
        containerLettres.style.color = 'red';

    }


}


