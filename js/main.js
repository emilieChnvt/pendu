// DOM
const boutonEntrer = document.querySelector('.boutonEntrer');
const containerLettres = document.querySelector('.lettresEssayees');
const letterEnter = document.getElementById('letterEnter');
const response = document.querySelector('.response');
const lettres = document.querySelector('.lettres');
const score = document.querySelector('.score');
const tentativesPendu = document.querySelector('.tentativesPendu');


// Variables pour le jeu
let mots = ["arraignee", "bois", "table", "chaise", "curseur", "chantier", "elephant", "fenetre"];
let motDecettePartie = getRandomWordFromDict(); // Mot aléatoire
let motCache = Array(motDecettePartie.length).fill("_"); // Masquer le mot avec des underscores
let tentatives = [];
let lettrePasDansMot = []
let nbTentatives = 3;

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


    for (let i = 0; i < motDecettePartie.split('').length; i++) {
       if(motDecettePartie[i] === motDecettePartie[0] || motDecettePartie[motDecettePartie.length - 1] === motDecettePartie[i] ) {
           motCache[i] = motDecettePartie[i];
       }

        response.innerHTML = motCache.join(" ");
    }
}


    // traiter une tentative de lettre
function findWordPendu() {
    const lettre = letterEnter.value.toLowerCase(); // Récupérer la lettre saisie et la convertir en minuscule
    letterEnter.value = ""; // Vider input



    if(tentatives.includes(lettre)) {
        console.log(tentatives);
        containerLettres.innerHTML = `<p style="color: orange;">Vous avez déjà essayé cette lettre : ${lettre}</p>`;
        return; // permet d'arrêter la boucle, de ne pas ajouter la lettre
    }


    // Vérifier si la lettre est dans le mot
    if (motDecettePartie.includes(lettre)) {
        for (let i = 0; i < motDecettePartie.length; i++) {
            if (motDecettePartie[i] === lettre) {
                motCache[i] = lettre; // Révéler la lettre correcte
            }
        }
        console.log(nbTentatives);
        response.innerHTML = motCache.join(" ");
    }else{
        lettrePasDansMot.push(lettre);
        lettres.innerHTML = `<p style="color: red;">${lettre}</p>`;
       nbTentatives--;
        console.log(nbTentatives);
       score.innerHTML = `<p style="color: black; font-size: 3rem">${nbTentatives}</p>`;
    }

    tentatives.push(lettre)


    // Vérifier si le joueur a gagné
    if (motCache.join("") === motDecettePartie) {
        response.innerHTML = `<p style="color: green;">Félicitations ! Vous avez trouvé le mot : ${motDecettePartie}</p>`;
        boutonEntrer.disabled = true; // Désactiver le bouton après la victoire
        return;
    }

    tentativesFaites()
}


// Tentatives
function tentativesFaites(){
    if(nbTentatives <= 0 ){

        tentativesPendu.innerHTML = `<h1>Game Over</h1>`
        boutonEntrer.disabled = true;
        containerLettres.style.color = 'red';
    }
}



