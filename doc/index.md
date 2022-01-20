# Functioneel Ontwerp

Groep Zero

80 uur (per persoon) te verdelen
Inschatting verdeeld door: 

* Tim: 80

* Jelle: 80

* Damian: 80

* Kevin: 80

* Ewout: 80

# Student

Als Student kan ik inloggen zodat ik gebruik kan maken van de applicatie om vakken op te zoeken. 

Als Student kan ik uitloggen zodat mijn sessie wordt afgesloten.

Als Student kan ik vakken opzoeken zodat ik informatie kan vinden over een vak. 40 uur

Als Student kan ik zoekopdrachten filteren zodat ik gemakkelijk en snel precies kan zoeken. 40 uur

Als Student kan ik de gegevens van het vervangende vak inzien zodat ik deze informatie kan gebruiken voor het inschrijven. 40 uur

Als Student kan ik vakken bekijken zodat ik het overzicht kan houden.

# Onderwijscommissie

Als onderwijscommissie kan ik inloggen zodat ik gebruik kan maken van de applicatie om vakken op te zoeken. 

Als onderwijscommissie kan ik een excel template importeren om zo de gegevens in het systeem te zetten. 40 uur

Als onderwijscommissie kan ik exporteren naar excel om informatie vanuit het systeem makkelijk in kan lezen. 40 uur

Als onderwijscommissie kan ik een opmerking bij een vak achterlaten om zo extra informatie door te kunnen geven aan andere bevoegde leden.40 uur

Als onderwijscommissie kan ik een nieuw bezem vak voorstellen zodat de examencommissie dit goed kan keuren zodra zij het er mee eens zijn. 40 uur

Als onderwijscommissie kan ik vakken bekijken zodat ik het overzicht kan houden.

# Examencommissie

Als examencommissie kan ik inloggen zodat ik gebruik kan maken van de applicatie om vakken op te zoeken. 

Als examencommissie kan ik een bezem vak aanpassen zodat wanneer er een bezem vak wordt aangepast, dit zichtbaar is online. 40 uur

Als examencommissie kan ik een bezem vak archiveren zodat er zodra er een bezem vak niet meer gedoceerd wordt, deze geen verwarring kan brengen onder studenten en docenten. 40 uur

Als examencommissie kan ik een voorstel beoordelen zodat degenen die dit voorstel hebben toegestuurd daar online antwoord op krijgen. 40 uur

Als examencommissie kan ik vakken bekijken zodat ik het overzicht kan houden.

Als examencommissie kan ik exporteren naar excel om informatie vanuit het systeem makkelijk in kan lezen. 

# Onderwijscoördinator

Als onderwijscoördinator  kan ik inloggen zodat ik gebruik kan maken van de applicatie om vakken op te zoeken. 

Als onderwijscoördinator kan ik een excel template importeren om zo de gegevens in het systeem te zetten. 

Als onderwijscoördinator kan ik exporteren naar excel om informatie vanuit het systeem makkelijk in kan lezen. 

Als onderwijscoördinator kan ik vakken bekijken zodat ik het overzicht kan houden.

Als Admin  kan ik inloggen zodat ik gebruik kan maken van de applicatie om vakken op te zoeken. 

# Admin

Als Admin kan ik accounts aanmaken zodat mensen dit kunnen gebruiken

Als Admin kan ik een rol geven aan een account zodat het account rechten heeft:

Als Admin kan ik vakken bekijken zodat ik het overzicht kan houden.

Use cases, klassen en toestandsdiagrammen

#  Tim

___________________________________________________________________________

## Use case

![image alt text](./../.assets/wiki/images/image_0.png)

## Use case templates

<table>
  <tr>
    <td>UC-01</td>
    <td>Beschrijving</td>
  </tr>
  <tr>
    <td>Naam</td>
    <td>Vakken opzoeken</td>
  </tr>
  <tr>
    <td>Beschrijving</td>
    <td>Actor kan vakken filteren door middel van een zoekbalk</td>
  </tr>
  <tr>
    <td>Actors</td>
    <td>Student, Onderwijscoördinator, Examencommissie, Onderwijscommissie</td>
  </tr>
  <tr>
    <td>Preconditie</td>
    <td>Actor moet ingelogd zijn</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op
        <br/>
        Actor klikt op de zoekbalk
        <br/>
        Actor voert zoekterm(en) in
        <br/>
        Systeem sluit af</td>
  </tr>
  <tr>
    <td>Postconditie</td>
    <td>Systeem laat een tabel zien met daarin de juiste gegevens gebaseerd op de zoekterm(en)</td>
  </tr>
  <tr>
    <td>Alternatief Scenario</td>
    <td>n.v.t</td>
  </tr>
  <tr>
    <td>Exception scenario</td>
    <td>UC-E-01</td>
  </tr>
  <tr>
    <td>Trigger</td>
    <td>Actor heeft een zoekterm ingevoerd die geen resultaten geeft</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Systeem start op
      Actor klikt op de zoekbalk
      <br/>
      Actor voert zoekterm(en) in
      <br/>
      Systeem geeft foutmelding dat er niet is om te laten zien
      <br/>
      Systeem stuurt actor terug naar stap 2
    </td>
  </tr>
  <tr>
    <td>E-Postconditie</td>
    <td>n.v.t</td>
  </tr>
</table>


<table>
  <tr>
    <td>UC-02</td>
    <td>Beschrijving</td>
  </tr>
  <tr>
    <td>Naam</td>
    <td>Vakken filteren</td>
  </tr>
  <tr>
    <td>Beschrijving</td>
    <td>Actor kan vakken filteren door middel van een dropdown</td>
  </tr>
  <tr>
    <td>Actors</td>
    <td>Student, Onderwijscoördinator, Examencommissie, Onderwijscommissie</td>
  </tr>
  <tr>
    <td>Preconditie</td>
    <td>Actor moet ingelogd zijn</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op
      Actor klikt op de filter knop
      <br/>
      Systeem toont verschillende opties
      <br/>
      Actor kiest een van de gegeven opties
      <br/>
      Systeem sluit af
    </td>
  </tr>
  <tr>
    <td>Postconditie</td>
    <td>Systeem laat een tabel zien met daarin de juiste gegevens gebaseerd op het filter</td>
  </tr>
  <tr>
    <td>Alternatief Scenario</td>
    <td>n.v.t</td>
  </tr>
  <tr>
    <td>Exception scenario</td>
    <td>n.v.t</td>
  </tr>
</table>


## Toestandsdiagrammen

![image alt text](./../.assets/wiki/images/image_1.png)

![image alt text](./../.assets/wiki/images/image_2.png)

## Klassendiagram

![image alt text](./../.assets/wiki/images/image_3.png)

___________________________________________________________________________

# Jelle

___________________________________________________________________________

## Klassendiagram

![image alt text](./../.assets/wiki/images/image_4.png)

## **Bezem vak archiveren**

*"Als examencommissie kan ik een bezem vak archiveren zodat er zodra er een bezem vak niet meer gedoceerd wordt, deze geen verwarring kan brengen onder studenten en docenten."*

### Use case diagram

![image alt text](./../.assets/wiki/images/image_5.png)

### Use case templates

  <table class="c10">
    <tbody>
        <tr class="c3">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">UC-01</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">&nbsp;</span></p>
            </td>
        </tr>
        <tr class="c3">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Naam</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Cursus archiveren</span></p>
            </td>
        </tr>
        <tr class="c3">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Beschrijving</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Actor kan een cursus archiveren.</span></p>
            </td>
        </tr>
        <tr class="c3">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Actors</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Examencommissie</span></p>
            </td>
        </tr>
        <tr class="c38">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Main scenario</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7 c12"><span class="c4"></span></p><a
                    id="t.76b4f186c2c547b71be904c336f7079a239d6443"></a><a id="t.3"></a>
                <table class="c10">
                    <tbody>
                        <tr class="c3">
                            <td class="c33" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Pre conditie</span></p>
                            </td>
                            <td class="c50" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Cursus moet zijn geactiveerd.</span></p>
                            </td>
                        </tr>
                        <tr class="c60">
                            <td class="c33" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Scenario</span></p>
                            </td>
                            <td class="c50" colspan="1" rowspan="1">
                                <p class="c7 c17"><span class="c4">1. &nbsp; &nbsp; &nbsp;Systeem toont
                                        cursus.</span></p>
                                <p class="c7 c17"><span class="c4">2. &nbsp; &nbsp; &nbsp;Als Actor is
                                        geautoriseerd.</span></p>
                                <p class="c7 c45"><span class="c4">2.1. &nbsp; Systeem toont
                                        &ldquo;archiveren&rdquo; knop</span></p>
                                <p class="c7 c45"><span class="c4">2.2. &nbsp; Actor drukt op
                                        &ldquo;archiveren&rdquo; knop</span></p>
                                <p class="c7 c45"><span class="c4">2.3. &nbsp; Systeem archiveert cursus.</span></p>
                                <p class="c7 c17"><span class="c4">3. &nbsp; &nbsp; &nbsp;Usecase eindigt.</span>
                                </p>
                            </td>
                        </tr>
                        <tr class="c3">
                            <td class="c33" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Postconditie</span></p>
                            </td>
                            <td class="c50" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Cursus is gearchiveerd.</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="c7 c12"><span class="c4"></span></p>
            </td>
        </tr>
        <tr class="c73">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Alternatief scenario</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7 c12"><span class="c4"></span></p><a
                    id="t.a927e69fcf2d42b0274cfe4d6e412cd96ff34e0b"></a><a id="t.4"></a>
                <table class="c10">
                    <tbody>
                        <tr class="c3">
                            <td class="c24" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">ID</span></p>
                            </td>
                            <td class="c13" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Niet geautoriseerd</span></p>
                            </td>
                        </tr>
                        <tr class="c3">
                            <td class="c24" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Trigger</span></p>
                            </td>
                            <td class="c13" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Actor is in stap 2 niet geautoriseerd</span></p>
                            </td>
                        </tr>
                        <tr class="c47">
                            <td class="c24" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Scenario</span></p>
                            </td>
                            <td class="c13" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">1. Systeem toont cursus</span></p>
                                <p class="c68"><span class="c4">2. Usecase eindigt</span></p>
                            </td>
                        </tr>
                        <tr class="c3">
                            <td class="c24" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Postconditie</span></p>
                            </td>
                            <td class="c13" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">n.v.t.</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="c7 c12"><span class="c4"></span></p>
            </td>
        </tr>
        <tr class="c69">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Exception scenario</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">n.v.t.</span></p>
            </td>
        </tr>
    </tbody>
</table>


<table class="c10">
    <tbody>
        <tr class="c3">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">UC-02</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">&nbsp;</span></p>
            </td>
        </tr>
        <tr class="c3">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Naam</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Cursus activeren</span></p>
            </td>
        </tr>
        <tr class="c3">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Beschrijving</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Actor kan een cursus activeren.</span></p>
            </td>
        </tr>
        <tr class="c3">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Actors</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Examencommissie</span></p>
            </td>
        </tr>
        <tr class="c38">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Main scenario</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7 c12"><span class="c4"></span></p><a
                    id="t.3250696ea9924a4bca67c0cca213d4b9f1c164ee"></a><a id="t.6"></a>
                <table class="c10">
                    <tbody>
                        <tr class="c3">
                            <td class="c26" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Pre conditie</span></p>
                            </td>
                            <td class="c63" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Actor is geautoriseerd</span></p>
                            </td>
                        </tr>
                        <tr class="c60">
                            <td class="c26" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Scenario</span></p>
                            </td>
                            <td class="c63" colspan="1" rowspan="1">
                                <p class="c7 c17"><span class="c4">1. &nbsp; &nbsp; &nbsp;Systeem toont lijst met
                                        cursussen</span></p>
                                <p class="c7 c17"><span class="c4">2. &nbsp; &nbsp; &nbsp;Actor selecteert cursussen
                                        die geactiveerd moeten worden.</span></p>
                                <p class="c7 c17"><span class="c4">3. &nbsp; &nbsp; &nbsp;Actor drukt na selectie op
                                        &ldquo;Activeren&rdquo; knop.</span></p>
                                <p class="c7 c17"><span class="c4">4. &nbsp; &nbsp; &nbsp;Systeem activeert
                                        geselecteerde cursussen.</span></p>
                                <p class="c7 c17"><span class="c4">5. &nbsp; &nbsp; &nbsp;Usecase eindigt</span></p>
                            </td>
                        </tr>
                        <tr class="c3">
                            <td class="c26" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Postconditie</span></p>
                            </td>
                            <td class="c63" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Cursussen zijn geactiveerd.</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="c7 c12"><span class="c4"></span></p>
            </td>
        </tr>
        <tr class="c22">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Alternatief scenario</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7 c12"><span class="c4"></span></p><a
                    id="t.68e8507df9063a475549685bf1992166e0c14567"></a><a id="t.7"></a>
                <table class="c10">
                    <tbody>
                        <tr class="c3">
                            <td class="c24" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">ID</span></p>
                            </td>
                            <td class="c13" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Niet geautoriseerd</span></p>
                            </td>
                        </tr>
                        <tr class="c3">
                            <td class="c24" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Trigger</span></p>
                            </td>
                            <td class="c13" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Actor is in preconditie niet geautoriseerd</span></p>
                            </td>
                        </tr>
                        <tr class="c56">
                            <td class="c24" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Scenario</span></p>
                            </td>
                            <td class="c13" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">1. Systeem laadt in plaats van pagina een 405 error
                                        zien.</span></p>
                                <p class="c68"><span class="c4">2. Usecase eindigt.</span></p>
                            </td>
                        </tr>
                        <tr class="c3">
                            <td class="c24" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Postconditie</span></p>
                            </td>
                            <td class="c13" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">n.v.t.</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="c7 c12"><span class="c4"></span></p>
            </td>
        </tr>
        <tr class="c62">
            <td class="c35" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Exception scenario</span></p>
            </td>
            <td class="c41" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">n.v.t.</span></p>
            </td>
        </tr>
    </tbody>
</table>
 

### Toestandsdiagram

![image alt text](./../.assets/wiki/images/image_6.png)

## **Gegevens vervangend vak inzien**

*"Als gebruiker kan ik de gegevens van het vervangende vak inzien zodat ik deze informatie kan gebruiken voor het inschrijven."*

*Zelfde klassendiagram gebruikt als Bezem vak archiveren.*

### Use case diagram

![image alt text](./../.assets/wiki/images/image_7.png)

### Use case template(s)

<table class="c10">
    <tbody>
        <tr class="c3">
            <td class="c49" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">UC-04</span></p>
            </td>
            <td class="c36" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">&nbsp;</span></p>
            </td>
        </tr>
        <tr class="c3">
            <td class="c49" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Naam</span></p>
            </td>
            <td class="c36" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Gegevens vervangend vak inzien</span></p>
            </td>
        </tr>
        <tr class="c3">
            <td class="c49" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Beschrijving</span></p>
            </td>
            <td class="c36" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Actor de gegevens van een gekozen vak bekijken.</span></p>
            </td>
        </tr>
        <tr class="c3">
            <td class="c49" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Actors</span></p>
            </td>
            <td class="c36" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Examencommissie, Student, enzo.</span></p>
            </td>
        </tr>
        <tr class="c75">
            <td class="c49" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Main scenario</span></p>
            </td>
            <td class="c36" colspan="1" rowspan="1">
                <p class="c7 c12"><span class="c4"></span></p><a
                    id="t.97be574fda389b9f4f04e2b2e3953925d98be6d2"></a><a id="t.9"></a>
                <table class="c10">
                    <tbody>
                        <tr class="c3">
                            <td class="c33" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Pre conditie</span></p>
                            </td>
                            <td class="c59" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">-</span></p>
                            </td>
                        </tr>
                        <tr class="c66">
                            <td class="c33" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Scenario</span></p>
                            </td>
                            <td class="c59" colspan="1" rowspan="1">
                                <p class="c7 c17"><span class="c4">1. &nbsp; &nbsp; &nbsp;Systeem toont lijst met
                                        cursussen.</span></p>
                                <p class="c7 c17"><span class="c4">2. &nbsp; &nbsp; &nbsp;Actor selecteert
                                        cursus.</span></p>
                                <p class="c7 c17"><span class="c4">3. &nbsp; &nbsp; &nbsp;Systeem toont
                                        cursus.</span></p>
                                <p class="c7 c17"><span class="c4">4. &nbsp; &nbsp; &nbsp;Use case eindigt.</span>
                                </p>
                            </td>
                        </tr>
                        <tr class="c3">
                            <td class="c33" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">Postconditie</span></p>
                            </td>
                            <td class="c59" colspan="1" rowspan="1">
                                <p class="c7"><span class="c4">-</span></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="c7 c12"><span class="c4"></span></p>
            </td>
        </tr>
        <tr class="c3">
            <td class="c49" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Alternatief scenario</span></p>
            </td>
            <td class="c36" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">n.v.t.</span></p>
            </td>
        </tr>
        <tr class="c62">
            <td class="c49" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">Exception scenario</span></p>
            </td>
            <td class="c36" colspan="1" rowspan="1">
                <p class="c7"><span class="c4">n.v.t.</span></p>
            </td>
        </tr>
    </tbody>
</table>


### Toestandsdiagram

![image alt text](./../.assets/wiki/images/image_8.png)

# Damian

___________________________________________________________________________

## Use case

# ![image alt text](./../.assets/wiki/images/image_9.png)

## Use case templates

<table>
  <tr>
    <td>UC-03</td>
    <td>Beschrijving</td>
  </tr>
  <tr>
    <td>Naam</td>
    <td>Opmerking plaatsen</td>
  </tr>
  <tr>
    <td>Beschrijving</td>
    <td>Actor kan een opmerking plaatsen onder een bezemvak</td>
  </tr>
  <tr>
    <td>Actors</td>
    <td>Onderwijscoördinator</td>
  </tr>
  <tr>
    <td>Preconditie</td>
    <td>Actor moet ingelogd zijn</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op
      Actor gaat naar de vakkenlijst
      <br/>
      Actor klikt op een vak
      <br/>
      Actor schrijft een opmerking
      <br/>
      Actor klikt op verzenden
      <br/>
      Systeem sluit af
    </td>
  </tr>
  <tr>
    <td>Postconditie</td>
    <td>Er komt een opmerking te staan onder die aan een vak is gekoppeld</td>
  </tr>
  <tr>
    <td>Alternatief Scenario</td>
    <td>UC-A-03

</td>
  </tr>
  <tr>
    <td>Trigger</td>
    <td>Actor wil zijn opmerking annuleren</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op
      <br/>
      Actor gaat naar de vakkenlijst
      <br/>
      Actor klikt op een vak
      <br/>
      Actor schrijft een opmerking
      <br/>
      Actor klikt op annuleren
      <br/>
      Systeem sluit af
    </td>
  </tr>
  <tr>
    <td>A-Postconditie</td>
    <td>n.v.t</td>
  </tr>
  <tr>
    <td>Exception scenario</td>
    <td>UC-E-03</td>
  </tr>
  <tr>
    <td>Trigger</td>
    <td>Actor heeft een ongeldige invoer gegeven</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op
      <br/>
      Actor gaat naar de vakkenlijst
      <br/>
      Actor klikt op een vak
      <br/>
      Actor schrijft een opmerking
      <br/>
      er komt een foutmelding die aangeeft dat er niets is ingevuld / te veel is ingevuld
      <br/>
      Systeem sluit af
    </td>
  </tr>
  <tr>
    <td>E-Postconditie</td>
    <td>n.v.t
</td>
  </tr>
</table>


<table>
  <tr>
    <td>UC-04</td>
    <td>Beschrijving</td>
  </tr>
  <tr>
    <td>Naam</td>
    <td>Bezemvak voorstellen</td>
  </tr>
  <tr>
    <td>Beschrijving</td>
    <td>Actor kan een Bezemvak voorstellen</td>
  </tr>
  <tr>
    <td>Actors</td>
    <td>Onderwijscoördinator</td>
  </tr>
  <tr>
    <td>Preconditie</td>
    <td>Actor moet ingelogd zijn</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op
      <br/>
      Actor gaat naar bezemvak aanmaken en voorstellen
      <br/>
      Actor maakt een volledig bezemvak aan
      <br/>
      Actor stelt de bezemvak voor
      <br/>
      het systeem sluit af
    </td>
  </tr>
  <tr>
    <td>Postconditie</td>
    <td>Bezemvak is voorgesteld</td>
  </tr>
  <tr>
    <td>Alternatief Scenario</td>
    <td>UC-A-04

</td>
  </tr>
  <tr>
    <td>trigger</td>
    <td>Actor wil bezemvak tijdelijk opslaan</td>
  </tr>
  <tr>
    <td>scenario</td>
    <td>Het systeem start op
      <br/>
      Actor gaat naar bezemvak aanmaken en voorstellen
      <br/>
      Actor maakt niet volledige bezemvak aan
      <br/>
      Actor klikt op tijdelijk opslaan
      <br/>
      actor maakt de bezemvak af
      <br/>
      Actor stelt de bezemvak voor
      <br/>
      het systeem sluit af
    </td>
  </tr>
  <tr>
    <td>Exception scenario</td>
    <td>UC-E-04</td>
  </tr>
  <tr>
    <td>Trigger</td>
    <td>Actor heeft een ongeldige invoer gegeven</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op
      <br/>
      Actor gaat naar de vakkenlijst
      <br/>
      Actor klikt op een vak
      <br/>
      Actor schrijft een opmerking
      <br/>
      er komt een foutmelding die aangeeft dat er niets is ingevuld / te veel is ingevuld
      <br/>
      Systeem sluit af
    </td>
  </tr>
  <tr>
    <td>E-Postconditie</td>
    <td>n.v.t
</td>
  </tr>
</table>


<table>
  <tr>
    <td>UC-05</td>
    <td>Beschrijving</td>
  </tr>
  <tr>
    <td>Naam</td>
    <td>Bezemvak goedkeuren</td>
  </tr>
  <tr>
    <td>Beschrijving</td>
    <td>Actor kan een Bezemvak goedkeuren</td>
  </tr>
  <tr>
    <td>Actors</td>
    <td>Examencommisie</td>
  </tr>
  <tr>
    <td>Preconditie</td>
    <td>Actor moet ingelogd en de juiste rol hebben</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op
      <br/>
      Actor gaat naar de voorgestelde bezemvakken pagina
      <br/>
      Actor keurt bezemvak goed
      <br/>
      Het systeem sluit af
    </td>
  </tr>
  <tr>
    <td>Postconditie</td>
    <td>De bezemvak is toegevoegd aan de lijst met bezemvakken</td>
  </tr>
  <tr>
    <td>Alternatief Scenario</td>
    <td>UC-A-05

</td>
  </tr>
  <tr>
    <td>trigger</td>
    <td>Actor wil bezemvak weigeren</td>
  </tr>
  <tr>
    <td>scenario</td>
    <td>Het systeem start op
      <br/>
      Actor gaat naar de voorgestelde bezemvakken pagina
      <br/>
      Actor weigerd de bezemvak
      <br/>
      bezemvak
      <br/>
      Het systeem sluit af
    </td>
  </tr>
  <tr>
    <td>Postconditie</td>
    <td>n.v.t</td>
  </tr>
  <tr>
    <td>Exception scenario</td>
    <td>n.v.t</td>
  </tr>
</table>


## Toestandsdiagrammen

![image alt text](./../.assets/wiki/images/image_10.png)

![image alt text](./../.assets/wiki/images/image_11.png)

![image alt text](./../.assets/wiki/images/image_12.png)

## Klassendiagram

![image alt text](./../.assets/wiki/images/image_13.png)

# Kevin

___________________________________________________________________________

## Use case

![image alt text](./../.assets/wiki/images/image_14.png)

## Use case templates

<table>
  <tr>
    <td>UC-10</td>
    <td>Beschrijving</td>
  </tr>
  <tr>
    <td>Naam</td>
    <td>Excel sheet importeren </td>
  </tr>
  <tr>
    <td>Beschrijving</td>
    <td>Actor kan een excel sheet met bezemvakken importeren in het systeem</td>
  </tr>
  <tr>
    <td>Actors</td>
    <td>Onderwijscommissie</td>
  </tr>
  <tr>
    <td>Preconditie</td>
    <td>Actor moet ingelogd zijn</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Systeem start op
      <br/>
      Actor drukt op importeren knop
      <br/>
      Actor selecteert excel bestand
      <br/>
      Systeem sluit af
    </td>
  </tr>
  <tr>
    <td>Postconditie</td>
    <td>De bezemvakken zijn geïmporteerd en opgeslagen op het systeem</td>
  </tr>
  <tr>
    <td>Alternatief Scenario</td>
    <td>
n.v.t
</td>
  </tr>
  <tr>
    <td>Exception scenario</td>
    <td>UC-E-10
</td>
  </tr>
  <tr>
    <td>trigger</td>
    <td>Actor selecteer onjuist bestand</td>
  </tr>
  <tr>
    <td>scenario</td>
    <td>Het systeem start op
      <br/>
      Actor drukt op importeren knop
      <br/>
      Actor selecteert bestand
      <br/>
      Systeem toont foutmelding
      <br/>
      Systeem sluit af
    </td>
  </tr>
  <tr>
    <td>postconditie</td>
    <td>n.v.t</td>
  </tr>
</table>


<table>
  <tr>
    <td>UC-11</td>
    <td>Beschrijving</td>
  </tr>
  <tr>
    <td>Naam</td>
    <td>Bezemvakken exporteren naar excel sheet</td>
  </tr>
  <tr>
    <td>Beschrijving</td>
    <td>Actor kan alle bezemvakken exporten tot een excel sheet</td>
  </tr>
  <tr>
    <td>Actors</td>
    <td>Onderwijscommissie</td>
  </tr>
  <tr>
    <td>Preconditie</td>
    <td>Actor moet ingelogd zijn</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Systeem start op
      <br/>
      Actor drukt op exporteren knop
      <br/>
      Systeem sluit af
    </td>
  </tr>
  <tr>
    <td>Postconditie</td>
    <td>De actor heeft een excel sheet met bezemvakken</td>
  </tr>
  <tr>
    <td>Alternatief Scenario</td>
    <td>
n.v.t
</td>
  </tr>
  <tr>
    <td>Exception scenario</td>
    <td>n.v.t
</td>
  </tr>
</table>


## Toestandsdiagrammen

![image alt text](./../.assets/wiki/images/image_15.png)

## Klassendiagram

![image alt text](./../.assets/wiki/images/image_16.png)

# Ewout

___________________________________________________________________________

## Use case

![image alt text](./../.assets/wiki/images/image_17.png)

## Use case templates

<table>
  <tr>
    <td>UC-05</td>
    <td>Beschrijving</td>
  </tr>
  <tr>
    <td>Naam</td>
    <td>Bezemvak aanpassen</td>
  </tr>
  <tr>
    <td>Beschrijving</td>
    <td>Actor kan een Bezemvak aanpassen</td>
  </tr>
  <tr>
    <td>Actors</td>
    <td>Examencommissie</td>
  </tr>
  <tr>
    <td>Preconditie</td>
    <td>Actor moet ingelogd zijn</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op.
      Actor gaat naar bezemvakken overzicht scherm.
      <br/>
      Actor maakt een kiest bij het aan te passen bezemvak "aanpassen".
      <br/>
      Actor gaat naar bezemvak aanpassen scherm.
      <br/>
      Actor past het bezemvak aan.
      <br/>
      Actor selecteert “submit”.
      <br/>
      het systeem sluit af
    </td>
  </tr>
  <tr>
    <td>Postconditie</td>
    <td>Het bezemvak is aangepast.</td>
  </tr>
  <tr>
    <td>Alternatief Scenario</td>
    <td>n.v.t.</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Exception scenario</td>
    <td>UC-E-05</td>
  </tr>
  <tr>
    <td>Trigger</td>
    <td>Actor heeft niets aangepast</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op.
      <br/>
      Actor gaat naar bezemvak aanpassen scherm.
      <br/>
      Actor past niets aan.
      <br/>
      Actor klikt op “submit”.
      <br/>
      er komt een foutmelding die aangeeft dat er niets is veranderd
      <br/>
      Systeem sluit af
    </td>
  </tr>
  <tr>
    <td>E-Postconditie</td>
    <td>n.v.t
</td>
  </tr>
</table>


<table>
  <tr>
    <td>UC-06</td>
    <td>Beschrijving</td>
  </tr>
  <tr>
    <td>Naam</td>
    <td>Voorstel beoordelen</td>
  </tr>
  <tr>
    <td>Beschrijving</td>
    <td>Actor kan een voorstel beoordelen</td>
  </tr>
  <tr>
    <td>Actors</td>
    <td>Examencommissie</td>
  </tr>
  <tr>
    <td>Preconditie</td>
    <td>Actor moet ingelogd zijn</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op.
      <br/>
      Actor gaat naar het voorstel beoordelen scherm.
      <br/>
      Actor leest het voorstel door.
      <br/>
      Actor klikt op goedkeuren of afkeuren.
      <br/>
      het systeem sluit af
    </td>
  </tr>
  <tr>
    <td>Postconditie</td>
    <td>Het voorstel is beoordeeld</td>
  </tr>
  <tr>
    <td>Alternatief Scenario</td>
    <td>n.v.t.</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Exception scenario</td>
    <td>UC-E-06</td>
  </tr>
  <tr>
    <td>Trigger</td>
    <td>Er is geen voorstel om te beoordelen</td>
  </tr>
  <tr>
    <td>Scenario</td>
    <td>Het systeem start op.
      <br/>
      Actor gaat naar voorstel beoordelen scherm.
      <br/>
      Systeem heeft geen voorstellen.
      <br/>
      Systeem geeft een foutmelding die aangeeft dat alle voorstellen al beoordeeld zijn.
      <br/>
      Actor wordt teruggestuurd naar hoofdscherm.
      <br/>
      Systeem sluit af
    </td>
  </tr>
  <tr>
    <td>E-Postconditie</td>
    <td>n.v.t
</td>
  </tr>
</table>


## Toestandsdiagrammen

![image alt text](./../.assets/wiki/images/image_18.png)

![image alt text](./../.assets/wiki/images/image_19.png)

## Klassendiagram

![image alt text](./../.assets/wiki/images/image_20.png)
