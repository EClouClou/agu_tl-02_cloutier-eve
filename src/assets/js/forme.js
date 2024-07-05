
const canvas = document.getElementById("canvasCercle");
const ctx = canvas.getContext('2d');

let blurAmount = 0; // Valeur de départ du blurAmount
let blurDirection = 0.5; // Valeur de départ de blurDirection

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canevas
    ctx.filter = `blur(${blurAmount}px)`; // Applique le flou défini par blurAmount
    ctx.fillStyle = '#F2BFAF70';
    ctx.beginPath();
    ctx.arc(195, 195, 150, 0, 2 * Math.PI);
    ctx.closePath(); 
    ctx.fill(); // Dessine le cercle
}

function animateBlur() {
    drawCircle(); //Appel du dessin du cercle
    
    // BlurAmount est incrémenté par blurDirection
    blurAmount += blurDirection; 

    // Changement de direction du flou : Si blurAmount est plus grand ou égal à 10 ou que blurAmount est plus petit ou égale à 0, blurdirection est multiplié par -1 et devient 1
    if (blurAmount >= 10 || blurAmount <= 0) {  
      blurDirection *= -1;
    }
}

setInterval(animateBlur, 30); //Intervalle de la fonction animateBlur