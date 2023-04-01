//Deze JavaScript regelt de werking van de vragenlijst.

//De Main functie bevat de logica achter de vragenlijst als geheel.
function Main() {
    var vandaag = new Date();//Geeft de huidige datum, tijd en tijdzone.
    var vandaagString = vandaag.toString();//Converteert de datum datatype naar string.
    document.getElementById("instructie").style.fontSize = "0";//De instructie op het scherm van voordat de vragenlijst is begonnen wordt weggehaald.
    output.innerHTML += "<br><b>Vragenlijst opgestart</b>";//Melding van het beginnen van een nieuwe vragenlijst. "output" is het id van een <p>.
    //InvoerlijstCancelbaar, Checklijst en InvoerlijstOncancelbaar zijn functions.
    if(InvoerlijstCancelbaar("Voer hier de naam in:",
                             "Geen naam ingevoerd, voer een naam in:",
                             "<br>De naam van de klant is: ",
                             "") == false) {
        return;//Return beëindigt Main in dit geval. Ik denk niet of dit de bedoeling van return is, maar het doet wat het moet doen.
    }
    //De huidige datum en tijd wordt automatisch ingevuld als defaultwaarde.
    if(InvoerlijstCancelbaar("Voer hier de datum en tijd in:",
                             "Geen datum en tijd ingevoerd, voer een datum in:",
                             "<br>Klant heeft gebeld op: ",
                             vandaagString) == false) {
        return;
    }
    
    if(InvoerlijstCancelbaar("Voer hier het merk en type van de modem in:",
                             "Geen merk en type ingevoerd, voer een merk en type in:",
                             "<br>Het merk en type van de modem is: ",
                             "") == false) {
        return;
    }
    //InvoerlijstCancelbaar, Checklijst en InvoerlijstOncancelbaar zijn functions.
    //Hier wordt gecontroleerd of er problemen met het internet zijn.
    if(Checklijst("Is er een klacht over het product \"Internet\"?",
                  "<br>Er is een klacht over het product \"Internet\"",
                  "") == true) {
        if(Checklijst("Kan http://xvideos.com bereikt worden?",
                      "<br>Browsen naar xvideos lukt",
                      "<br>Browsen naar xvideos lukt niet. Ga naar <a href=\"Oplossingen/Internet/WebsiteNietGevonden.html\" target=\"_blank\">oplossing</a>") == true) {
            if(Checklijst("Reageert de pagina snel na het indrukken van F5?",
                          "<br>De pagina laadt snel",
                          "<br>De pagina laadt langzaam.  Ga naar <a href=\"Oplossingen/Internet/PaginaLaadtLangzaam.html\" target=\"_blank\">oplossing</a>")) {
                var internetProbleem = false;
            }
            else{
                var internetProbleem = true;
            }
        }
        else{
            var internetProbleem = true;
        }
    }
    //Hier wordt gecontroleerd of er problemen met telefonie zijn.
    if(Checklijst("Is er een klacht over het product \"Internet en Bellen\"?",
                  "<br>Er is een klacht over het product \"Internet en Bellen\"",
                  "") == true) {
        if(Checklijst("Is er een kiestoon te horen?",
                      "<br>Er is een kiestoon te horen",
                      "<br>Er is geen kiestoon te horen. Ga naar <a href=\"Oplossingen/Bellen/KiestoonNietGevonden.html\" target=\"_blank\">oplossing</a>") == true) {
            if(Checklijst("Kan de klant zichzelf bellen? Bijvoorbeeld een mobiel nummer.",
                          "<br>De klant kan zichzelf bellen",
                          "<br>De klant kan zichzelf niet bellen. Ga naar <a href=\"Oplossingen/Bellen/KanZichzelfNietBellen.html\" target=\"_blank\">oplossing</a>") == true) {
                if(Checklijst("Kan de klant met zijn/haar mobiele nummer bellen over de klacht?",
                              "<br>De klant met het mobiele nummer bellen over de klacht",
                              "<br>De klant niet met het mobiele nummer bellen over de klacht") == true) {
                    var bellenProbleem = false;
                }
            }
            else{
                var bellenProbleem = true;
            }
        }
        else{
            var bellenProbleem = true;
        }
    }
    //Hier wordt gecontroleerd of er problemen met de televisie zijn.
    if(Checklijst("Is er een klacht over het product \"Internet, Bellen en Televisie\"?",
                  "<br>Er is een klacht over het product \"Internet, Bellen en Televisie\"",
                  "") == true) {
        //InvoerlijstCancelbaar, Checklijst en InvoerlijstOncancelbaar zijn functions.
        if(InvoerlijstOncancelbaar("Hoeveel televisietoestellen heeft de klant?",
                                "<br>De klant heeft geen televisietoestellen. Ga naar <a href=\"Oplossingen/Televisie/HeeftGeenTV.html\" target=\"_blank\">oplossing</a>",
                                "<br>Het aantal televisietoestellen van de klant: ",
                                "") == true) {
            if(Checklijst("Is de splitter goed aangesloten?",
                          "<br>De splitter is goed aangesloten",
                          "<br>De splitter is niet goed aangesloten. Ga naar <a href=\"Oplossingen/Televisie/SplitterNietGoedAangesloten.html\" target=\"_blank\">oplossing</a>")) {
                if(Checklijst("Is de setup-box goed aangesloten?",
                          "<br>De setup-box is goed aangesloten",
                          "<br>De setup-box is niet goed aangesloten. Ga naar <a href=\"Oplossingen/Televisie/SetupNietGoedAangesloten.html\" target=\"_blank\">oplossing</a>")) {
                    if(Checklijst("Worden de zenders gevonden?",
                          "<br>De zenders worden gevonden",
                          "<br>De zenders worden niet gevonden. Ga naar <a href=\"Oplossingen/Televisie/ZendersNietGevonden.html\" target=\"_blank\">oplossing</a>")) {
                        var televisieProbleem = false;
                    }
                    else{
                        var televisieProbleem = true;
                    }
                }
                else{
                    var televisieProbleem = true;
                }
            }
            else{
                var televisieProbleem = true;
            }
        }
        else{
                var televisieProbleem = true;
            }
    }
    
    if(internetProbleem == false) {
        output.innerHTML += "<br>De oorzaak van het internetprobleem is niet gevonden. Raadpleeg 2e-lijns support.";
    }
    else if(internetProbleem == true) {
        
    }
    else {
        output.innerHTML += "<br>Er is geen internetprobleem gevonden";
    }
    
    if(bellenProbleem == false) {
        output.innerHTML += "<br>De oorzaak van het internetprobleem is niet gevonden. Raadpleeg 2e-lijns support.";
    }
    else if(bellenProbleem == true) {
        
    }
    else {
        output.innerHTML += "<br>Er is geen telefonieprobleem gevonden";
    }
    
    if(televisieProbleem == false) {
        output.innerHTML += "<br>De oorzaak van het internetprobleem is niet gevonden. Raadpleeg 2e-lijns support.";
    }
    else if(televisieProbleem == true) {
        
    }
    else {
        output.innerHTML += "<br>Er is geen televisieprobleem gevonden";
    }
    output.innerHTML = output.innerHTML + "<br><b>Vragenlijst afgesloten</b>";
}
//De InvoerlijstCancelbaar wordt aan het begin van een vragenlijst gebruikt voor o.a. de naam van de klant.
function InvoerlijstCancelbaar(instructie, foutmeldingGeenInvoer, bevestiging, defaultWaarde) {
    var invoer = prompt(instructie, defaultWaarde);
    //invoer == null (niet "") is true wanneer het prompt gecancelled wordt. Wanneer dit gebeurt wordt de vragenlijst afgebroken.
    if (invoer == null) {
        output.innerHTML = output.innerHTML + "<br><b>Vragenlijst afgebroken</b>";
        return false;
    }
    //Als de invoer leeg is, wordt een ander prompt geladen met dezelfde functionaliteit als de orginele. Deze laat de actor ook weten dat er niets ingevuld is.
    else if (invoer == ""){
        while (invoer == "") {
            invoer = prompt(foutmeldingGeenInvoer, defaultWaarde);
        }
        //invoer == null (niet "") is true wanneer het prompt gecancelled wordt. Wanneer dit gebeurt wordt de vragenlijst afgebroken.
        if (invoer == null) {
            output.innerHTML = output.innerHTML + "<br><b>Vragenlijst afgebroken</b>";
            return false;
        }
        else {
            output.innerHTML = output.innerHTML + bevestiging + invoer;
        }
    }
    //Easter egg
    else if (invoer == "Fabio") {
        output.innerHTML += "<br>Fabio Mode activated!<br><b>Vragenlijst afgesloten</b>";
        var html = document.getElementsByTagName('html')[0];
        html.style.backgroundImage = 'url(Images/Fabio.jpg)';
        document.getElementById('Muziekspeler').play();
        document.getElementById('FabioButton').style.display = "block";
        document.getElementById('Titel').innerHTML = "Bonjourno, I'm Fabio.";
        return false;
    }
    //Andere easter egg
    else if (invoer == "cheat" || invoer == "cheatcode") {
        output.innerHTML += "<br>Sorry, er zijn geen cheatcodes.<br><b>Vragenlijst afgesloten</b>";
        return false;
    }
    else {
        output.innerHTML = output.innerHTML + bevestiging + invoer;
    }
}
//InvoerlijstOncancelbaar wordt alleen voor het aantal TV's gebruikt.
function InvoerlijstOncancelbaar(instructie, bevestigingFalse, bevestigingTrue, defaultWaarde) {
    var invoer = prompt(instructie, defaultWaarde);
    if (invoer == null || invoer == "0") {
        output.innerHTML = output.innerHTML + bevestigingFalse;
        return false;
    }
    //Easter egg
    else if (invoer == "-1"){
        output.innerHTML = output.innerHTML + "<br>mkay...";
        return true;
    }
    //Easter egg
    else if (invoer =="42") {
        output.innerHTML = output.innerHTML + bevestigingTrue + "het antwoord op alles in het universum.";
        return true;
    }
    else {
        output.innerHTML = output.innerHTML + bevestigingTrue + invoer;
        return true;
    }
}
//Checklijst wordt voor alertboxes gebruikt die alleen een ja/nee antwoord nodig hebben.
function Checklijst(instructie, bevestigingTrue, bevestigingFalse) {
    if (confirm(instructie) == true) {
        output.innerHTML = output.innerHTML + bevestigingTrue;
        return true;
    }
    else {
        output.innerHTML = output.innerHTML + bevestigingFalse;
        return false;
    }
}

//Maakt het outputveld leeg
function Clear() {
    output.innerHTML = "";
}

//Laat een alertbox zien met een korte uitleg.
function Help () {
    alert("Als de vragenlijst gestart wordt, verschijnen er vragen in alertboxen zoals deze. Bij sommige moet er zelf een antwoord ingevuld worden en andere kan u met de \"OK\" en \"cancel\"-knoppen beantwoorden. Selecteer \"Begin\" om met de vragenlijst te beginnen. Met \"Clear\" kan het prompt geleegd worden.");
}

//Alertbox voor een easter egg
function Fabio () {
    alert("Gefeliciteerd, u heeft de geheime Fabio-mode geactiveerd. Om Fabio-mode te deactiveren kan u de pagina herladen. Fabio is love, Fabio is life.");
}