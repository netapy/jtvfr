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