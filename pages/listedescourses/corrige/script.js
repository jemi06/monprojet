// let rnom;

/* -------------------------------------------------------------------------- */
/*                               PRISE DES INPUT                              */
/* -------------------------------------------------------------------------- */



const jsNomRecettes = document.getElementById("nomRecettes").value;
const jsNombresPersonnes = document.getElementById("nombresPersonnes").value;
const jsTemperature = document.getElementById("temperature").value;
const jsMinutes = document.getElementById("minutes").value;
const jsSupprimer = document.getElementById("supprimer");
const jsAffichage = document.getElementById("affichage");
const jsAjouter = document.getElementById("ajouter");
const jsRselect = document.getElementById("rselect");
const jskul = document.getElementById("kul");

const jsajoutIngredient = document.getElementById("ajoutIngredient");

jsajoutIngredient.addEventListener("click", function() {
    const jsIngredient = document.getElementById("ingredient").value;
    const jsQuantite = document.getElementById("quantite").value;
    var index = recupSelect.selectedIndex;
    index -= 1
    if (index >= 0) {
        tabInformation[index].ingredient += "<br>" + jsIngredient
        tabInformation[index].quantite += "<br>" + jsQuantite
        tabInformation[index].affichageRecette()
    }


})




/* -------------------------------------------------------------------------- */
/*                   CLASSE RECETTE QUI CONTIENT LA FONCTION DE LAFFICHAGE                   */
/* -------------------------------------------------------------------------- */

class recette {

    constructor(nomRecette, nbrPersonnes, temperature, temps, ingredient, quantite) {
        this.nomRecette = nomRecette;
        this.nbrPersonnes = nbrPersonnes;
        this.temperature = temperature;
        this.temps = temps;
        this.ingredient = ingredient;
        this.quantite = quantite;
    }

    affichageRecette() {

        jsAffichage.innerHTML = ` <div id="divr"> <h3> ${this.nomRecette } </h3>     <br>  <span>Nombre de personnes : </span> ${this.nbrPersonnes}  <br>  <span> Température : </span> ${this.temperature} <br>  <span> Nombres de minutes : </span>  ${this.temps }  <br> <span> Ingredient : </span>  ${this.ingredient } <br> <span>Quantité : </span> ${this.quantite}  <br> <br>  <br> </div> `;


        document.getElementById("affichage")
    };
}


let tabInformation = [];



/* -------------------------------------------------------------------------- */
/*                   CREATION RECETTE / AFFICHAGE DE LA RECETTE / STOCKAGE DE LA RECETTE DANS LE TABLEAU                         */
/* -------------------------------------------------------------------------- */

jsAjouter.addEventListener('click', function() {
    const jsNomRecettes = document.getElementById("nomRecettes").value;
    const jsNombresPersonnes = document.getElementById("nombresPersonnes").value;
    const jsTemperature = document.getElementById("temperature").value;
    const jsMinutes = document.getElementById("minutes").value;
    const jsIngredient = document.getElementById("ingredient").value;
    const jsQuantite = document.getElementById("quantite").value;





    let information = new recette(jsNomRecettes, jsNombresPersonnes, jsTemperature, jsMinutes, jsIngredient, jsQuantite);
    tabInformation.push(information);


    information.affichageRecette();


    jskul.innerHTML += `<option value="">${jsNomRecettes}</option>`




})


const recupSelect = document.getElementById("kul");


recupSelect.addEventListener("change", function() {

    var index = recupSelect.selectedIndex;
    index -= 1
    tabInformation[index].affichageRecette();
})












jsSupprimer.addEventListener('click', function() {

    // document.getElementById("nomRecettes").value = "";
    document.getElementById("divr").remove();






})


const tableauRecettes = [{

        nombresPersonnes: "f",
        temps: "f",
        ingredient: "zef",
        quantite: "ezf",
    },


];

const tabaffichage = tableauRecettes.map(liste => { return liste.temps, liste.quantite })




var tableauOrig = [{ clé: 1, valeur: 10 }, { clé: 2, valeur: 20 }, { clé: 3, valeur: 30 }];
var tableauFormaté = tableauOrig.map(obj => {
    var rObj = {};
    rObj[obj.clé] = obj.valeur;
    return rObj;
});



// recuperer les valeur de input=> au moment du click => les enregistrer dans une variable=>faire une fonction qui ajouter une  nouvelle option dans la liste => et au moment du click elle push uun object sur la div qui affiche le tableau





































// jsAjouter.addEventListener('click', function() {



//     const jsNomRecettes = document.getElementById("nomRecettes").value;
//     const jsNombresPersonnes = document.getElementById("nombresPersonnes").value;
//     const jsTemperature = document.getElementById("temperature").value;
//     const jsMinutes = document.getElementById("minutes").value;
//     const jsIngredient = document.getElementById("ingredient").value;
//     const jsQuantite = document.getElementById("quantite").value;
//     // const newOption = document.createElement("option");
//     const jsselect = document.querySelector("select").value;





//     jsAffichage.innerHTML += ` <h3> ${jsNomRecettes } </h3>     <br>  <span>Nombre de personnes : </span> ${jsNombresPersonnes}  <br>  <span> Temparature : </span> ${jsTemperature } <br>  <span> Nombres de minutes : </span>  ${jsMinutes }  <br> <span> Igredient : </span>  ${jsIngredient } <br> <span>Quantité : </span> ${jsQuantite}  <br> <br>  <br>  `;


//     if (jsNomRecettes !== jsSelect) {
//         jskul.innerHTML += `<option>${jsNomRecettes}</option>`
//     } else {
//         document.write("entrer existante")

//     }

// jsNomRecettes.addEventListener('click', function() {

//     const jsNomRecettes = document.getElementById("nomRecettes").value;
//     const jsNombresPersonnes = document.getElementById("nombresPersonnes").value;
//     const jsTemperature = document.getElementById("temperature").value;
//     const jsMinutes = document.getElementById("minutes").value;
//     const jsIngredient = document.getElementById("ingredient").value;
//     const jsQuantite = document.getElementById("quantite").value;
//     const newOption = document.createElement("option");




//     jsAffichage.innerHTML += ` <h3> ${jsNomRecettes } </h3>     <br>  <span>Nombre de personnes : </span> ${jsNombresPersonnes}  <br>  <span> Temparature : </span> ${jsTemperature } <br>  <span> Nombres de minutes : </span>  ${jsMinutes }  <br> <span> Igredient : </span>  ${jsIngredient } <br> <span>Quantité : </span> ${jsQuantite}  <br> <br>  <br>  `;

// })


// })



















































// / const jsNomRecettes = document.getElementById("nomRecettes").value;
// const jsNombresPersonnes = document.getElementById("nombresPersonnes").value;
// const jsTemperature = document.getElementById("temperature").value;
// const jsMinutes = document.getElementById("minutes").value;
// const jsIngredient = document.getElementById("ingredient").value;
// const jsQuantite = document.getElementById("quantite").value;
// const jsSupprimer = document.getElementById("supprimer");
// const jsAffichage = document.getElementById("affichage");
// const jsAjouter = document.getElementById("ajouter");
// // const jsRselect = document.getElementById("rselect");
// const jskul = document.getElementById("kul");



// jsAjouter.addEventListener('click', function() {
//     const jsNomRecettes = document.getElementById("nomRecettes").value;
//     const jsNombresPersonnes = document.getElementById("nombresPersonnes").value;
//     const jsTemperature = document.getElementById("temperature").value;
//     const jsMinutes = document.getElementById("minutes").value;
//     const jsIngredient = document.getElementById("ingredient").value;
//     const jsQuantite = document.getElementById("quantite").value;
//     const newOption = document.createElement("option");




//     jsAffichage.innerHTML += ` <h3> ${jsNomRecettes } </h3>     <br>  <span>Nombre de personnes : </span> ${jsNombresPersonnes}  <br>  <span> Temparature : </span> ${jsTemperature } <br>  <span> Nombres de minutes : </span>  ${jsMinutes }  <br> <span> Igredient : </span>  ${jsIngredient } <br> <span>Quantité : </span> ${jsQuantite}  <br> <br>  <br>  `;



//     jskul.innerHTML += `<div> ${jsNomRecettes}</div>`


// })