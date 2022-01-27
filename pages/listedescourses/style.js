//ajouter ingredient et GRAMMES
function ajouter(){
  document.getElementById("divers").innerHTML =  `<label id="ing" for="ingredient">INGREDIENTS : </label><input id="ingredient" type="text">
  <label id="quant" for="quantite">GRAMMES: </label><input id="quantite" type="number"><label id="supp" for="supping"> </label><button id="supping" onclick="supprimer()"> delete </button><br><br>
  <label for="Valider">VALIDER LA RECETTE : </label><button id="Valide" onclick="divrecette()"> VALIDER</button>`;

}

function supprimer(){
  document.getElementById ("ingredient").remove();
  document.getElementById ("quantite").remove();
  document.getElementById ("ing").remove();
  document.getElementById ("quant").remove();
  document.getElementById ("supping").remove();
  document.getElementById ("supp").remove();
  document.getElementById ("valide").remove();
  document.getElementById ("valider").remove();

}


class recette {
  constructor(nomrecette, nbpersonne, temperature, tempcuit )    {
      this.nomrecette = nomrecette;
      this.nbpers = nbpersonne;
      this.temp = temperature;
      this.tempcuit = tempcuit;
  }
 
infosrecette() {
      document.getElementById('toto').innerHTML +=
          'la recette  ' + $(this.nomrecette) + ' nombre personnes:  ' + $(this.nbpers) + ` temperature: ` + $(this.temp) + ` minute: ` + $(this.tempcuit) + '<br>'
  }
}

function divrecette (){
  let nomrecette = document.getElementById("nomrecette").value;
  let nbpers = parseFloat(document.getElementById("nbpers")).value;
  let temp = parseFloat(document.getElementById("temperature")).value;
  let tempcuit = parseFloat(document.getElementById("tempcuit")).value;
  let ingredient = document.getElementById("ingredient").value;
  let quantite = parseFloat(document.getElementById("quantite")).value;
  
  let newrecette= newRecette (nomrecette, nbpers, temp, tempcuit, ingredient, quantite );
  newrecette.infosrecette();

}
