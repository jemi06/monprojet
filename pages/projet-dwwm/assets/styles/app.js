const jsimg = document.getElementById("imgcli");
const imgs = ["url(../projet-dwwm/assets/img/img1.jpg)", "url(../projet-dwwm/assets/img/img2.jpg)", "url(../projet-dwwm/assets/img/img3.jpg)"]
let count = 0;
jsimg.addEventListener('mouseup', function() {
 
    if (count == 3) {
        count = 0
    } else {
        count += 1
    }

    this.style.backgroundImage = imgs[count]
});


document.getElementById("formulaire").addEventListener("submit", function() {

alert('formulaire envoyé !');
});