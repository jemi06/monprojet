// ajouter ingredient et GRAMMES+
let cpt = 1;

function ajouter() {


    let ingredient = `ingredient${cpt}`;
    let quantite = `quantite${cpt}`;
    console.log(ingredient);
    console.log(quantite);


    document.getElementById("divers").innerHTML += `<br><label for=ingredient>INGREDIENTS : </label><input id=ingredient type="text">
    <label for=quantite>GRAMMES: </label><input id=quantite type="text"><button id="ajouter" onclick="ajouter()">+</button><label id="supp" for="supping"> </label><button id="supping" onclick="supprimer()"> delete </button><br>`;
    cpt++;

    // function newFunction() {
    //     let cpt = 0;
    //     let ingredient = "ingredient" + cpt;
    //     let quantite = "quant" + cpt;

    //     for (i = 0; i < cpt; i++) {
    //         ingredient = "ingredient" + cpt;
    //         quantite = "quantite" + cpt;
    //     }
    // }
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
        document.getElementById("toto").innerHTML = `la recette :  ${this.nomrecette} <br> nombre personnes :  ${this.nbpers} <br> temperature: ${this.temp} <br> minute:   ${this.tempcuit} <br>  `
        for (i = 1; i <= cpt; i++) {
            document.getElementById("toto").innerHTML += `<br> ingredient: ${this.ingredient}  gramme:  ${this.quantite} `
        }

    }

};

// class info extends recette {
//     constructor(ingredient, quantite) {
//         super(nomrecette, nbpers, temp, tempcuit, ingredient, quantite); //Appelle le constructeur 
//         // parent
//         this.ingredient = ingredient;
//         this.quantite = quantite;
//     }
//     ingrequant() {
//         document.getElementById("toto2").innerHTML = `ingredient: ${this.ingredient}  gramme:  ${this.quantite}  `
//         console.log(this.ingredient)
//     };
// };


function divrecette() {
    let nomrecette = document.getElementById("nomrecette").value;
    let nbpers = document.getElementById("nbpers").value;
    let temp = document.getElementById("temp").value;
    let tempcuit = document.getElementById("tempcuit").value;


    for (i = 1; i <= cpt; i++) {
        ingredient = `ingredient${i}`;
        quantite = `quantite${i}`;
        var ingredient = document.getElementById('ingredient').value;
        var quantite = document.getElementById('quantite').value;
        console.log(ingredient)
        console.log(quantite);

    }

    let newrec = new recette(nomrecette, nbpers, temp, tempcuit, ingredient, quantite);
    newrec.infosrecette();
}

function supprimer() {
    document.getElementById("ingredient").remove();
    document.getElementById("quantite").remove();
    document.getElementById("supping").remove();
    document.getElementById("supp").remove();
    document.getElementById("ajouter").remove();



}

// C'est toujours le même problème, comême id ça va juste chercher le premier "id" de la page donc soit faut faire des id différents quand tu les crées, soit fonctionner avec des classes (css)me ils ont le m
// pourquoi ajouter dans le class css
// C'est une class en html

// En faite un "id" tu es censé en avoir qu'un seul identique dans ta page, donc si tu en as plusieurs ça fonctionnera pas

// alors que quand tu fais 
// getElementsByClassname tu recuperes tout les elements avec la même classe (et pas juste un)