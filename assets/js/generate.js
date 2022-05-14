// Generisanje sadrzaja navigacije
var sadrzaj = new Array("Home", "About", "Offers", "Contact");
var div = new Array("one", "two", "three", "footer");
var nav = document.getElementById("nav");
for(var i = 0; i < sadrzaj.length; i++) {
    var link = document.createElement("a");
    var navSadrzaj = document.createTextNode(sadrzaj[i]);
    link.appendChild(navSadrzaj);
    link.setAttribute("href", "#" + div[i]);
    nav.appendChild(link);
}
// Generisanje social media ikonica u footeru
var ikonice = new Array("facebook", "twitter", "instagram", "linkedin");
var futer = document.querySelector("#fut");
for(var k = 0; k < ikonice.length; k++) {
    var elementIkonice = document.createElement("a");
    elementIkonice.setAttribute("class", "icon" + " " + "fa-" + ikonice[k]);
    elementIkonice.setAttribute("href", "https://www." + ikonice[k] + ".com");
    elementIkonice.setAttribute("target", "_blank");
    futer.appendChild(elementIkonice);
}
// Generisanje drop down liste za modal gde se bira tip transporta
var opcije = new Array("SELECT", "Van", "Bus", "Plane");
var mod = document.getElementById("mod");
for(var j = 0; j < opcije.length; j++) {
    var elementOpcije = document.createElement("option");
    elementOpcije.innerHTML = opcije[j];
    mod.appendChild(elementOpcije);
}
// Generisanje zvezdica u review modalu
var rev1 = document.getElementById("rev1");
var rev2 = document.getElementById("rev2");
var rev3 = document.getElementById("rev3");
for(var l = 0; l < 5; l++) {
    let zvezda = document.createElement("i");
    zvezda.setAttribute("class", "icon fa-star");
    rev1.appendChild(zvezda);
}
for(var a = 0; a < 5; a++) {
    let zvezda = document.createElement("i");
    zvezda.setAttribute("class", "icon fa-star");
    rev2.appendChild(zvezda);
}
for(var b = 0; b < 5; b++) {
    let zvezda = document.createElement("i");
    zvezda.setAttribute("class", "icon fa-star");
    rev3.appendChild(zvezda);
}
// Uzima prazne zvezdice iz modala za ostavljanje user review-a
var star1 = document.getElementById("star1");
var star2 = document.getElementById("star2");
var star3 = document.getElementById("star3");
var star4 = document.getElementById("star4");
var star5 = document.getElementById("star5");
// Funkcije koje pretvaraju prazne zvezdice u pune u zavisnosti na koju kliknemo
function review1() {
    star1.setAttribute("class", "icon fa-star");
    star2.setAttribute("class", "icon fa-star-o");
    star3.setAttribute("class", "icon fa-star-o");
    star4.setAttribute("class", "icon fa-star-o");
    star5.setAttribute("class", "icon fa-star-o");
}
function review2() {
    star1.setAttribute("class", "icon fa-star");
    star2.setAttribute("class", "icon fa-star");
    star3.setAttribute("class", "icon fa-star-o");
    star4.setAttribute("class", "icon fa-star-o");
    star5.setAttribute("class", "icon fa-star-o");
}
function review3() {
    star1.setAttribute("class", "icon fa-star");
    star2.setAttribute("class", "icon fa-star");
    star3.setAttribute("class", "icon fa-star");
    star4.setAttribute("class", "icon fa-star-o");
    star5.setAttribute("class", "icon fa-star-o");
}
function review4() {
    star1.setAttribute("class", "icon fa-star");
    star2.setAttribute("class", "icon fa-star");
    star3.setAttribute("class", "icon fa-star");
    star4.setAttribute("class", "icon fa-star");
    star5.setAttribute("class", "icon fa-star-o");
}
function review5() {
    star1.setAttribute("class", "icon fa-star");
    star2.setAttribute("class", "icon fa-star");
    star3.setAttribute("class", "icon fa-star");
    star4.setAttribute("class", "icon fa-star");
    star5.setAttribute("class", "icon fa-star");
}