// data
const products = [
  { id: 1, nom: 'Domaine Roblet-Monnot, Nerthus', année: 2014, img: 'ressources/img/BOURCHVSD11.JPEG'},
  { id: 2, nom: 'Marthe Henry Boillot, Les Grandes Gouttes', année: 2018, img: 'ressources/img/BOURMARTH.JPEG'},
  { id: 3, nom: 'Hubert Lamy, La Princée', année: 2019,  img: 'ressources/img/BOURHUBLAM.JPEG'},
  { id: 4, nom: 'Bourgogne AMI Liber Pater', année: 2018,  img: 'ressources/img/BOURAMI.JPEG'},
  { id: 5, nom: 'Domaine des Rouges queues, La Fussière', année: 2017,  img: 'ressources/img/BOURMARANGES.JPEG'},
  { id: 6, nom: 'Domaine Roblet-Monnot', année: 2017, img: 'ressources/img/BOURROBMON.JPEG'},
  { id: 7, nom: 'Domaine Follin-Arbelet, Romanée-Saint-Vivant', année: 2018,  img: 'ressources/img/BOURROMVI.JPEG'},
  { id: 8, nom: 'Domaine Cassini', année: 2020, img: 'ressources/img/BORDCASSI.JPG'},
  { id: 9, nom: 'Château Reynon, Clos de Reynon', année: 2013,  img: 'ressources/img/BORDREY.JPEG'},
  { id: 10, nom: 'Château La lagune, Moulin de la Lagune ', année: 2014, img: 'ressources/img/BORDMOUL.JPEG'},
  { id: 11, nom: 'Château des Graviers', année: 2014, img: 'ressources/img/BORDGRAV.JPEG'},
];

// set little red dot above icons nav
window.addEventListener("load", () => {
  let checkbox = document.getElementsByTagName('input'); 
  let notif = document.getElementById('nav-notif');

  // check if at least one of the checkboxes on the DOM is checked
  const checkboxCheck = () => { 
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        return true;
      }
    }
    return false;
  }

  // set red dot
  const setNotif = () => {
    if (checkboxCheck()){
      // console.log('true');
      notif.style.visibility = 'visible';
      notif.style.opacity = '1';
    } else {
      // console.log('false');
      notif.style.visibility = 'hidden';
      notif.style.opacity = '0';
    }
  }
  
  // check once if red dot is needed
  setNotif();

  // watch any change
  document.addEventListener('click', setNotif);

});

