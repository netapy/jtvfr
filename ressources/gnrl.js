//favicon matching
matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
lightSchemeIcon = document.querySelector('link#light-scheme-favicon');
darkSchemeIcon = document.querySelector('link#dark-scheme-favicon');

function onUpdate() {
    if (matcher.matches) {
        lightSchemeIcon.remove();
        document.head.append(darkSchemeIcon);
    } else {
        document.head.append(lightSchemeIcon);
        darkSchemeIcon.remove();
    }
}
onUpdate();

let cguandcoHtml = ' <footer class="my-5 pt-5 text-muted text-center text-small"> <p class="mb-1">© 2020-2021 • bonjour@jetevois.fr</p><ul class="list-inline"> <li class="list-inline-item"><a href="docs/JTV-Confidentialite.pdf"><span class="meaJtv">Confidentialité</span></a></li><li class="list-inline-item"><a href="docs/JTV-CGU.pdf"><span class="meaJtv">Conditions</span></a></li><li class="list-inline-item"><a href="mailto:bonjour@jetevois.fr"><span class="meaJtv">Support</span></a></li></ul> </footer>'
document.body.querySelector("div").insertAdjacentHTML("beforeend", cguandcoHtml)

let navbarHtml = '<div class="fixed-bottom text-right" style="z-index: 9999;"> <nav class="navbar fixed-bottom navbar-light" style="background-color: #6219D8; height: 1px; z-index: 9999; padding: 3px;"> </nav>'
document.body.insertAdjacentHTML("beforeend", navbarHtml)

//remove .html in link
try {
    var link = String(window.location.href).split('.html')[0];
    window.history.replaceState( null, null, link );    
} catch(e) {console.log("Local launch.")}
//on remet à 0 le compteur 404 car on a  trouvé une page
localStorage.setItem("404", "0")

