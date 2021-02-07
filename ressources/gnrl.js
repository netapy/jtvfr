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


let cguandcoHtml = ' <footer class="my-5 pt-5 text-muted text-center text-small"> <p class="mb-1">© 2020-2021 - Je te vois.</p><ul class="list-inline"> <li class="list-inline-item"><a href="docs/JTV-Confidentialite.pdf"><span class="meaJtv">Confidentialité</span></a></li><li class="list-inline-item"><a href="docs/JTV-CGU.pdf"><span class="meaJtv">Conditions</span></a></li><li class="list-inline-item"><a href="mailto:bonjour@jetevois.fr"><span class="meaJtv">Support</span></a></li></ul> </footer>'
document.body.querySelector("div").insertAdjacentHTML("beforeend", cguandcoHtml)

let navbarHtml = '<div class="fixed-bottom text-right" style="z-index: 9999;"> <button type="button" style="background-color: #6219D8; color: white; padding: 3px 20px; margin-right: 20px; border-radius: 10px; z-index: 99999;border-color: transparent;" onclick="window.open(\'index.html\',\'_self\')">Accueil</button></div> <nav class="navbar fixed-bottom navbar-light" style="background-color: #6219D8; height: 1px; z-index: 9999; padding: 5px;"> </nav>'
document.body.insertAdjacentHTML("beforeend", navbarHtml)