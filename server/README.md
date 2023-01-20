# Backend für LB M294

Dieser Backend-Server wurde für die Leistungsbeurteilung im Modul 294 individualisiert.

- Klasse: IM21b
- Lernender: Nico Delvecchio
- Lehrperson: Daniel J. Lauk
- Datum: 22.11.2022

## Hinweise zum Server

- Der Server nutzt den Port 3000. Wenn ein anderes Programm diesen Port bereits verwendet, müssen Sie das andere Programm zunächst beenden und den Server neu starten.
- Der Server speichert keine Daten. Nach einem Neustart des Servers sind alle Änderungen weg. (Wie in den LAs zur Vorbereitung auch.)
- Um den Server zu starten...
  - öffnen Sie eine Konsole (ein Terminal),
  - wechseln Sie in das Verzeichnis
  - und starten Sie den Server mit: `node app.js`.
    Zum Beispiel so:
    ```
    C:
    cd \LB-M294\backend_Delvecchio
    node app.js
    ```
- Um den Server zu stoppen drücken Sie <kbd>Ctrl</kbd> + <kbd>C</kbd>.

## Hinweise zur API

- Beachten Sie, dass diese API in gewissen Punkten von der API im Auftrag LA_294_8429_CRUD abweicht, insbesondere in Bezug auf die IDs der einzelnen Datenelemente.
- Lesen Sie die Files [00_login.http] und [01_api.http] aufmerksam durch!
- Das File [01_api.http] müssen Sie bei jedem Login anpassen (Bearer-Token bei schreibenden Zugriffen).
