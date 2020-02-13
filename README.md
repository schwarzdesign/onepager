# One Pager - build with eleventy

## Usage

### Option 1 - Netlify
> Info: Netlify wird als als hoster für die static page genutzt und in den DNS Einstellungen des Kunden wird auf die jeweilige Netlify Domain verwiesen.
1. Von dieser Github Repository einen neuen Branch erstellen. (Wichtig: Nicht den Master branch überschreiben).
2. Bei Netlify einloggen und über "New site from Git" ein neues Projekt anlegen und als Continuous Deployment Methode "Github App" auswählen.
3. Als Repository "schwarzdesign/onepager" auswählen und anschließend anklicken. Nun kann der neu erstellte Branch ausgewählt werden.
4. "Deploy Site" -> Dadurch wird der Deploy Vorgang gestartet und bei erfolgreichem Abschluss automatisch eine netlify domain erstellt.
5. Alle Änderungen im jeweiligen branch werden von Netlify automatisch übernommen. Die Config kann also direkt über Github beaerbeitet werden. (**src/_data/project.js**)
5. Netlify Domain in DNS Eintrag des Kundenservers eintragen.


### Option 2 - Lokal installieren & kompilieren
> Info: Das One Pager projekt herunterladen und lokal kompilieren
1. Entwicklungsumgebung:
    - NVM installieren ``curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh``
    - Node.js/npm installieren (v13.7.0) ``nvm install node``
    - Genauere Beschreibung [hier](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/).
2. Über das Github interface oder die Console diese Repository herunterladen
3. Die Config in **src/_data/project.js** für den jeweiligen Kunden anpassen
4. Über Console ins Root directory navigieren und mit "npm run build" die statische Seite generieren
5. Die generierten Dateien liegen nun unter **_site/** und können per FTP oder SSH auf den Kundenserver geschoben werden.
