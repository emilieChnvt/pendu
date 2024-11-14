const boutonEntrer = document.querySelector('.boutonEntrer');
const letterEnter = document.getElementById('letterEnter');



let mots = ["arraignee","bois", "table","chaise", "curseur", "chantier", "elephant", "fenetre"];
let lettresAlphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function motRanddomChoisi(){
    const motPendu = Math.floor(Math.random() * mots.length);
   return mots[motPendu];
}
console.log( motRanddomChoisi())


function findWordPendu(){
    if(motRanddomChoisi().includes(letterEnter.value)){
        console.log(letterEnter.value)
    }
}


boutonEntrer.addEventListener("click", findWordPendu);