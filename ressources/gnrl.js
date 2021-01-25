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

let navbarHtml = '<div class="fixed-bottom text-right" style="z-index: 9999;"> <button type="button" style="background-color: #6219D8; color: white; padding: 3px 20px; margin-right: 20px; border-radius: 10px; z-index: 99999;" onclick="window.open(\'index.html\',\'_self\')">Accueil</button></div> <nav class="navbar fixed-bottom navbar-light" style="background-color: #6219D8; height: 1px; z-index: 9999; padding: 5px;"> </nav>'
document.body.insertAdjacentHTML("beforeend", navbarHtml)