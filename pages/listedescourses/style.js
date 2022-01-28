// ajouter ingredient et GRAMMES

function ajouter() {
    document.getElementById("divers").innerHTML = `<label id="ing" for="ing">INGREDIENTS : </label><input id="ingredient" type="text">
  <label id="quant" for="quantite">GRAMMES: </label><input id="quantite" type="number"><button id="ajouter" onclick="ajouter()">+</button><label id="supp" for="supping"> </label><button id="supping" onclick="supprimer()"> delete </button>`;
    document.getElementById("divers" + 1).innerHTML = (i <= 10) ? `<label id="ing" for="ing">INGREDIENTS : </label><input id="ingredient" type="text">
  <label id="quant" for="quantite">GRAMMES: </label><input id="quantite" type="number"><button id="ajouter" onclick="ajouter()">+</button><label id="supp" for="supping"> </label><button id="supping" onclick="supprimer()"> delete </button>`;
}



function supprimer() {
    document.getElementById("ingredient").remove();
    document.getElementById("quantite").remove();
    document.getElementById("ing").remove();
    document.getElementById("quant").remove();
    document.getElementById("supping").remove();
    document.getElementById("supp").remove();

}


class recette {
    constructor(nomrecette, nbpers, temp, tempcuit, ingredient, quantite) {
        this.nomrecette = nomrecette;
        this.nbpers = nbpers;
        this.temp = temp;
        this.tempcuit = tempcuit;
        this.ingredient = ingredient;
        this.quantite = quantite;
    }

    infosrecette() {
        document.getElementById("toto").innerHTML = `la recette :  ${this.nomrecette} <br> nombre personnes :  ${this.nbpers} <br> temperature: ${this.temp} <br> minute:   ${this.tempcuit} <br> ingredient: ${this.ingredient}  gramme:  ${this.quantite} <br> `
    };
};


function divrecette() {
    let nomrecette = document.getElementById("nomrecette").value;
    let nbpers = document.getElementById("nbpers").value;
    let temp = document.getElementById("temp").value;
    let tempcuit = document.getElementById("tempcuit").value;
    let ingredient = document.getElementById("ingredient").value;
    let quantite = document.getElementById("quantite").value;
    let newrec = new recette(nomrecette, nbpers, temp, tempcuit, ingredient, quantite);
    newrec.infosrecette();
}