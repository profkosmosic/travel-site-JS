// Generisanje sadrzaja navigacije za about
var sadrzaj = new Array("Home", "About", "Offers", "Contact");
var nav = document.getElementById("nav");
for(var i = 0; i < sadrzaj.length; i++) {
    var link = document.createElement("a");
    var navSadrzaj = document.createTextNode(sadrzaj[i]);
    link.appendChild(navSadrzaj);
    link.setAttribute("href", "index.html");
    nav.appendChild(link);
}
// Generisanje social media ikonica u footeru od about-a
var ikonice = new Array("facebook", "twitter", "instagram", "linkedin");
var futer = document.querySelector("#fut");
for(var k = 0; k < ikonice.length; k++) {
    var elementIkonice = document.createElement("a");
    elementIkonice.setAttribute("class", "icon" + " " + "fa-" + ikonice[k]);
    elementIkonice.setAttribute("href", "https://www." + ikonice[k] + ".com");
    elementIkonice.setAttribute("target", "_blank");
    futer.appendChild(elementIkonice);
}