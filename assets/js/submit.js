// Funkcija koja se izvrsava kad kliknemo submit
function Klik() {
    // Hvata elemente forme i elemente dodataka
    var userMessage = document.getElementById("userMessage");
    var razmak = document.getElementById("delete");
    var email = document.getElementById("email"); 
    var name = document.getElementById("name");
    var message = document.getElementById("message");

    // Hvata njihove vrednosti
    var mejl = email.value;
    var ime = name.value;
    var poruka = message.value;
    // Broj errora
    var errorCount = 0;
    // Ukoliko je duzina premala hvata se label iznad polja i menja se da prikaze korisniku u cemu je problem
    if(mejl.length < 5) {
        var emailPoruka = document.getElementById("mejl");
        emailPoruka.innerHTML = "EMAIL (YOUR EMAIL IS TOO SHORT)";
        errorCount++;
    }
    if(ime.length < 3) {
        var imePoruka = document.getElementById("ime");
        imePoruka.innerHTML = "NAME (YOUR NAME IS TOO SHORT)";
        errorCount++;
    }
    if(poruka.length < 15) {
        var msgPoruka = document.getElementById("poruka");
        msgPoruka.innerHTML = "MESSAGE (YOUR MESSAGE IS TOO SHORT)";
        errorCount++;
    }
    // Vraca label iznad polja na staro i dodaje checkmark kada korisnik unese vrednost u polje kako treba i vrsi se dekrementacija errorCount-a
    if(mejl.length >= 5) {
        let checkmark = document.createElement("i");
        checkmark.style.animationName = "fadein";
        checkmark.style.animationDuration = "1s";
        checkmark.setAttribute("class", "fa fa-check");
        var emailPoruka = document.getElementById("mejl");
        emailPoruka.innerHTML = "EMAIL";
        emailPoruka.appendChild(checkmark);
        errorCount--;
    }
    if(ime.length >= 3) {
        let checkmark = document.createElement("i");
        checkmark.style.animationName = "fadein";
        checkmark.style.animationDuration = "1s";
        checkmark.setAttribute("class", "fa fa-check");
        var imePoruka = document.getElementById("ime");
        imePoruka.innerHTML = "NAME";
        imePoruka.appendChild(checkmark);
        errorCount--;
    }
    if(poruka.length >= 15) {
        let checkmark = document.createElement("i");
        checkmark.style.animationName = "fadein";
        checkmark.style.animationDuration = "1s";
        checkmark.setAttribute("class", "fa fa-check");
        var msgPoruka = document.getElementById("poruka");
        msgPoruka.innerHTML = "MESSAGE";
        msgPoruka.appendChild(checkmark);
        errorCount--;
    }
    // Ako je errorCount = 0 ili -3 to znaci da je sve u redu i izbacuje se poruka korisniku da je poruka uspesno poslata i kada je poslata
    if(errorCount == 0 || errorCount == -3) {
        var date = new Date();
        var hour = "0" + date.getHours();
        var minute = "0" + date.getMinutes();
        // Brise nulu ispred minuta i sata implicitnom konverzijom ukoliko je vrednost veca od 9, gde nam nula nije potrebna vise
        if(minute.length == 3) {
            minute -= 0;
        }
        if(hour.length == 3) {
            hour -= 0;
        }
        razmak.style.display = "none";
        userMessage.textContent = "Thank you " + ime + "! Your message was sent successfully at " + hour + ":" + minute + "!";
    }
    // ako je bilo koja druga vrednost izbacujemo poruku korisniku da poruka nije poslata
    else {
        razmak.style.display = "none";
        userMessage.textContent = "We are sorry! An error occured and your message was not sent.";
    }
}