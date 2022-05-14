// Otkriva sakriven meni i ukoliko korisnik klikne ponovo ga takodje zatvara
function Burger() {
    var content = document.getElementById("burgerContent");
    if(content.style.display == "block") {
        content.style.display = "none";
    }
    else {
        content.style.display = "block";
        content.style.animationName = "fade";
        content.style.animationDuration = "1s";
    }
}
// Zatvara meni ukoliko korisnik klikne na jednu od opcija
function Close() {
    var content = document.getElementById("burgerContent");
    content.style.display = "none";
}