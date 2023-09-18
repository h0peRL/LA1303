# LA1303

Projektdokumentation

| **Datum**  | **Version** | **Änderung**                | **Autoren**     |
| ---------- | ----------- | --------------------------- | --------------- |
| 16.12.2022 | 0.0.1       | Erste Version               | Nico Delvecchio |
| 23.12.2022 | 0.0.2       | Planen                      | Nico Delvecchio |
| 13.1.2023  | 0.0.3       | Implementation              | Nico Delvecchio |
| 20.1.2023  | 0.0.4       | Realisieren der CRUD Funcs  | Nico Delvecchio |
| 27.1.2023  | 0.0.5       | Kontrollieren und Auswerten | Nico Delvecchio |
| 3.2.2023   | 1.0.0       | Finale Version              | Nico Delvecchio |

# 1. Informieren

## 1.1

### Projektidee: CRUD Application

CRUD Application:

Ich habe von dem Modul 294 das mir bereitgestellte Backend von Herrn Ajradini und Lauk bennutzt, um darum eine neue CRUD Applikatation zu erstellen. Ich habe mich dazu Entsschieden, einen ToDo-List Maker, den ich dann verwende, um meine Animeliste (Eine Liste an Anime die ich schauen möchte) zu erstellen.

## 1.2

Quellen

GitHub, Stack Overflow, YouTube,

## 1.3 Anforderungen

| **Nummer** | **Muss/Kann** | **Funktional, Qualität, Randbedingung?** | Beschreibung                                                    |
| ---------- | :------------ | ---------------------------------------- | :-------------------------------------------------------------- |
| 1          | Muss          | Funktional                               | Das Backend steht bereit ud wir hinzugefügt.                    |
| 2          | Muss          | Funktional                               | Das Backend kann gestarted werden.                              |
| 3          | Muss          | Funktional                               | Das Clientseitige beeinhaltet ein HTML, CSS und JS Pages.       |
| 4          | Muss          | Funktional                               | Es Gibt einen Router, der Seiten unterinander trennt.           |
| 5          | Muss          | Funktional                               | Es können Daten von der API Daten gelesen werden.               |
| 6          | Muss          | Funktional                               | Es können Daten auf der API Daten hinzugefügt werden.           |
| 7          | Muss          | Funktional                               | Es können Daten von der API Daten geändert werden.              |
| 8          | Muss          | Funktional                               | Es können Daten von der API Daten gelöscht werden.              |
| 9          | Kann          | Qualität                                 | Footer und Header sind im HTMl Hard Coded.                      |
| 10         | Muss          | Funktional                               | Das Manipulieren der Daten muss mit einem Login geschützt sein. |
| 11         | Muss          | Funktional                               | Das Schützen der Manipulationen wird mit JWT gewährleistet..    |

## 1.4 Diagramme

## 2. Planen

## 2.1 Zeitplan

| **Nummer** | **Frist** | **Beschreibung**   | **Zeit (geplant)** |
| :--------- | --------- | :----------------- | ------------------ |
| 1          | 3.2.2023  | Anforderung Nr. 1  | 15 Min             |
| 2          | 3.2.2023  | Anforderung Nr. 2  | 5 Min              |
| 3          | 3.2.2023  | Anforderung Nr. 3  | 30 Min             |
| 4          | 3.2.2023  | Anforderung Nr. 4  | 60 Min             |
| 5          | 3.2.2023  | Anforderung Nr. 5  | 15 Min             |
| 6          | 3.2.2023  | Anforderung Nr. 6  | 15 Min             |
| 7          | 3.2.2023  | Anforderung Nr. 7  | 15 Min             |
| 8          | 3.2.2023  | Anforderung Nr. 8  | 15 Min             |
| 9          | 3.2.2023  | Anforderung Nr. 9  | 15 Min             |
| 10         | 3.2.2023  | Anforderung Nr. 10 | 90 Min             |
| 11         | 3.2.2023  | Anforderung Nr. 11 | 60 Min             |

## 2.2 Testfälle

| **Nummer** | **Datum** | **Voraussetzungen**                                           | **Eingabe**                                                                                                                                            | **Erwartete Ausgabe**                                                                                           |
| ---------- | --------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| 1          | 3.2.2023  | Backend bereit, VSCode geöffnet                               | In VSCode den Server Ordner Inspizieren                                                                                                                | Darin sind verschiedene Datien mit der das Backend funktioniert                                                 |
| 2          | 3.2.2023  | Backend bereit, VSCode geöffnet                               | 1. cd server<br />2. node app.js                                                                                                                       | API listening @ http://localhost:3000                                                                           |
| 3          | 3.2.2023  | VSCode geöffnet                                               | In VSCode den client Ordner Inspizieren                                                                                                                | Darin sind verschiedene Datien mit dem das Frontend funktioniert                                                |
| 4          | 3.2.2023  | VSCode geöffnet                                               | 1.Router JS inspizieren 2.API und Live Server starten<br />3. Sich anmelden mit Username: Billy Batson und Passwort: Shazam! <br />4. URL betrachten.  | URL ändert sich von #login zu #home                                                                             |
| 5          | 3.2.2023  | VSCode geöffnet<br />API gestartet und Live Server gestartet  | 1. Login Page offen haben und nach unten scrollen                                                                                                       | 2. Daten werden agezeigt                                                                                  |
| 6          | 3.2.2023  | VSCode geöffnet<br /> API gestartet und Live Server gestartet | 1.Sich anmelden mit Username: Billy Batson und Passwort: Shazam! 2. Bei AddTodo unten die Daten eigeben. 3. Page refreshen und nach unten scrollen     | Neuer Datensatz wurde hinzugefügt.                                                                              |
| 7          | 3.2.2023  | VSCode geöffnet<br /> API gestartet und Live Server gestartet | 1.Sich anmelden mit Username: Billy Batson und Passwort: Shazam! 2. Bei Change Todo unten die Daten eigeben. 3. Page refreshen und nach unten scrollen | Der Datensatz wurde verändert                                                                                   |
| 8          | 3.2.2023  | VSCode geöffnet<br /> API gestartet und Live Server gestartet | 1.Sich anmelden mit Username: Billy Batson und Passwort: Shazam! 2. Bei Delete Todo unten die Daten eigeben. 3. Page refreshen und nach unten scrollen | Der Datensatz wurde gelösch                                                                                     |
| 9          | 3.2.2023  | VSCode geöffnet, HTML seite geöffnet                          | HTML inspizieren                                                                                                                                       | HTML sollte footer und header beinhalten.                                                                      |
| 10         | 3.2.2023  | VSCode geöffnet<br /> API gestartet und Live Server gestartet | 1.Sich anmelden mit falschen Daten (Auf die Tastatur hauen) 2.danach mit Username: Billy Batson und Passwort: Shazam!                                   | 1. Versuch wird fehlgschlagen: Alert wird ausgegeben. 2. Anmeldung erfolgreich und an kann die Daten bearbeiten |
| 11         | 3.2.2023  | VSCode geöffnet<br /> API gestartet und Live Server gestartet | -                                                                                                                                                      | -                                                                                                               |

## 3.Entscheiden

## 4. Realisieren

| **Nummer** | **Datum** | **Beschreibung**                                                      | **Zeit (geplant)** | **Zeit (effektiv)** |
| ---------- | --------- | --------------------------------------------------------------------- | ------------------ | ------------------- |
| 1          | 13.1.2023 | Anforderung komplett implementiert(Nummer entspricht der Anforderung) | 15 Min             | 10 Min              |
| 2          | 13.1.2023 | Anforderung komplett implementiert                                    | 5 Min              | 5 Min               |
| 3          | 13.1.2023 | Anforderung komplett implementiert                                    | 30 Min             | 40 Min              |
| 4          | 13.1.2023 | Anforderung komplett implementiert                                    | 60 Min             | 50 Min              |
| 5          | 20.1.2023 | Anforderung komplett implementiert                                    | 15 Min             | 15 Min              |
| 6          | 20.1.2023 | Anforderung komplett implementiert                                    | 15 Min             | 15 Min              |
| 7          | 20.1.2023 | Anforderung komplett implementiert                                    | 15 Min             | 15 Min              |
| 8          | 20.1.2023 | Anforderung komplett implementiert                                    | 15 Min             | 20 Min              |
| 9          | 20.1.2023 | Anforderung komplett implementiert                                    | 15 Min             | 15 Min              |
| 10         | 27.1.2023 | Anforderung komplett implementiert                                    | 90 Min             | 120 Min             |
| 11         | 27.1.2023 | Anforderung komplett implementiert                                    | 60 Min             | 90 Min              |

## 5. Kontrollieren

Testprotokoll

| **Nummer** | **Datum** | **Resultat** | **Durchgeführt** |
| :--------- | --------- | ------------ | ---------------- |
| 1          | 3.2.2023  | OK           | Nico Delvecchio  |
| 2          | 3.2.2023  | OK           | Nico Delvecchio  |
| 3          | 3.2.2023  | OK           | Nico Delvecchio  |
| 4          | 3.2.2023  | OK           | Nico Delvecchio  |
| 5          | 3.2.2023  | OK           | Nico Delvecchio  |
| 6          | 3.2.2023  | OK           | Nico Delvecchio  |
| 7          | 3.2.2023  | OK           | Nico Delvecchio  |
| 8          | 3.2.2023  | OK           | Nico Delvecchio  |
| 9          | 3.2.2023  | OK           | Nico Delvecchio  |
| 10         | 3.2.2023  | OK           | Nico Delvecchio  |
| 11         | 3.2.2023  | OK           | Nico Delvecchio  |

## 6. Auswerten

## Fazit:

Alles in allem hat eigentlich alles gut funktioniert. Ich habe einfach in der einen Realisier stunde nicht viel gearbeitet, was mich zuerst in einen Rückstand gebracht. Jedoch habe ich diesen Fehler wieder ausgebessert.
