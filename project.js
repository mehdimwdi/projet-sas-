const prompt = require('prompt-sync')();


let candidats = [
  { cin: "AA123", nom: "Alaoui", prenom: "Ahmed", partiPolitique: "PI", age: 45, electeurs: ["EE1", "EE2"] },
  { cin: "BB456", nom: "Bennani", prenom: "Sara", partiPolitique: "PJD", age: 38, electeurs: ["EE3"] },
  { cin: "CC789", nom: "Cherkaoui", prenom: "Yassine", partiPolitique: "RNI", age: 50, electeurs: [] }
];

// Menu principal
console.log(`
1. Ajouter un nouveau candidat
2. Ajouter plusieurs candidats à la fois
3. Afficher la liste des candidats
4. Voter pour un candidat
5. Modifier les informations d'un candidat
6. Supprimer un candidat
7. Rechercher un candidat par nom
8. Afficher les statistiques de l'élection
9. Quitter

`);

let choix;
do {
    choix = prompt('Votre choix : ');
    switch (choix) {
        case '1': ajouterCandidat(); break;
        case '2': ajouterPlusieursCandidats(); break;
        case '3': afficherListeCandidats(); break;
        case '4': voterPourCandidat(); break;
        case '5': modifierCandidat(); break;
        case '6': supprimerCandidat(); break;
        case '7': rechercherCandidat(); break;
        case '8': afficherStatistiques(); break;
        case '9': console.log('Au revoir!'); break;
        default: console.log('Choix invalide, réessayez.');
    }
} while (choix!== '9');

// 1. AJOUTER UN CANDIDAT
function ajouterCandidat() {
    let cin = prompt("Entrer le CIN : ");
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            console.log("CIN déjà existant!");
            return;
        }
    }
    let candidat = {
        cin: cin,
        nom: prompt("Entrer le nom : "),
        prenom: prompt("Entrer le prénom : "),
        partiPolitique: prompt("Entrer le parti politique : "),
        age: Number(prompt("Entrer l'âge : ")),
        electeurs: []
    };
    candidats.push(candidat);
    console.log("Candidat ajouté avec succès!");
}

// 2. AJOUTER PLUSIEURS
function ajouterPlusieursCandidats() {
    let n = Number(prompt("Combien de candidats voulez-vous ajouter? "));
    for (let k = 0; k < n; k++) {
        console.log("--- Candidat  ---");
        ajouterCandidat();
    }
}


// 3. AFFICHER LISTE
function afficherListeCandidats() {
    if (candidats.length === 0) {
        console.log("Aucun candidat.");
        return;
    }
    for (let i = 0; i < candidats.length; i++) {
        let c = candidats[i];
        console.log(c.nom + " " + c.prenom + " - CIN: " + c.cin + " - Age: " + c.age);
    }
}
    
// 4. VOTER
function voterPourCandidat() {
    let cin = prompt("Entrer le CIN du candidat : ");
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            let cinElecteur = prompt("Entrer le CIN de l'électeur : ");
            candidats[i].electeurs.push(cinElecteur);
            console.log("Vote enregistré!");
            return;
        }
    }
    console.log("Candidat introuvable.");
}
 

// 5. MODIFIER
function modifierCandidat() {
    let cin = prompt("Entrer le CIN du candidat à modifier : ");
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            candidats[i].nom = prompt(`Nouveau nom (+{candidats[i].nom}) : `) || candidats[i].nom;
            candidats[i].prenom = prompt(`Nouveau prénom (+{candidats[i].prenom}) : `) || candidats[i].prenom;
            candidats[i].partiPolitique = prompt(`Nouveau parti (+{candidats[i].partiPolitique}) : `) || candidats[i].partiPolitique;
            candidats[i].age = Number(prompt(`Nouvel âge (+{candidats[i].age}) : `)) || candidats[i].age;
            console.log("Modifié avec succès!");
            return;
        }
    }
    console.log("Candidat introuvable.");
}

// 6. SUPPRIMER
function supprimerCandidat() {
    let cin = prompt("Entrer le CIN du candidat à supprimer : ");
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            candidats.splice(i, 1);
            console.log("Candidat supprimé!");
            return;
        }
    }
    console.log("Candidat introuvable.");
}


// 7. RECHERCHER
function rechercherCandidat() {
    let nom = prompt("Entrer le nom à rechercher : ").toLowerCase();
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom.toLowerCase() === nom) {
          console.log(`Nom: ${candidats[i].nom}`);
          console.log(`Prenom: ${candidats[i].prenom}`);
          console.log(`Parti: ${candidats[i].parti}`);
          console.log(`Votes: ${candidats[i].votes}`);
          console.log("----------------------");            
          trouve = true;
        }
        if (!trouve){
          console.log("ce nom ne trouve pas");            
        }
    }
  }