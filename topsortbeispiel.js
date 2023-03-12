function addTask(id) {
    const caption = id.getElementsByClassName('caption');
    const list = id.getElementsByClassName('list');
    let key = list[0].id;
    let i = list[0].children.length;
    list[0].innerHTML += createCheckboxHTML(`${key}_${i}`, `${key}_${i}`, `test(${key}, ${i})`, `${caption[0].value}`);
}

function gather() {
    aufgaben.clear();
    for (i = 1; i <= 49; ++i) { // TODO: Anzahl der Konfigurationen dynamisch ermitteln
        const cb = document.getElementById(`${i}`);
        if (cb.checked === true) {
            add(i - 1);
        }
    }
}

// TODO: eigene topsortlisten für kunde, zollsoft...berechnen
function getSortedLists() {
    let lists = {};
    lists.todo = aufgaben.topsort(aufgaben.tasks());
    lists.kunde = aufgaben.succ(TASK_KUNDE);
    lists.zollsoft = aufgaben.succ(TASK_ZOLLSOFT);
    lists.doctolib = aufgaben.succ(TASK_DOCTOLIB);
    lists.labor = aufgaben.succ(TASK_LABOR);
    lists.schreiber = aufgaben.succ(TASK_SCHREIBER);
    return lists;
}

function test(list, checkbox) {
    const listName = list.id;
    const checkboxName = `${list.id}_${checkbox}`;
    const checked = document.getElementById(checkboxName).checked;
    console.log(`list: ${listName}, checkbox: ${checkboxName}, checked: ${checked}`);
}

function emptyLists() {
    // if (document.getElementById('todo'))
    //     document.getElementById('todo').remove();
    // if (document.getElementById('kunde'))
    //     document.getElementById('kunde').remove();
    // if (document.getElementById('zollsoft'))
    //     document.getElementById('zollsoft').remove();
    // if (document.getElementById('doctolib'))
    //     document.getElementById('doctolib').remove();
    // if (document.getElementById('labor'))
    //     document.getElementById('labor').remove();
    // if (document.getElementById('schreiber'))
    //     document.getElementById('schreiber').remove();

    if (document.getElementById('todo'))
        document.getElementById('todo').innerHTML = "";
    if (document.getElementById('kunde'))
        document.getElementById('kunde').innerHTML = "";
    if (document.getElementById('zollsoft'))
        document.getElementById('zollsoft').innerHTML = "";
    if (document.getElementById('doctolib'))
        document.getElementById('doctolib').innerHTML = "";
    if (document.getElementById('labor'))
        document.getElementById('labor').innerHTML = "";
    if (document.getElementById('schreiber'))
        document.getElementById('schreiber').innerHTML = "";
}

function createCheckboxHTML(checkbox_id, checkbox_name, checkbox_onchange, caption) {
    return `<input type="checkbox" id="${checkbox_id}" name="${checkbox_name}" onchange="${checkbox_onchange}" class="checkbox"><label for="${checkbox_name}">${caption}</label><br>`;
}

function showLists() {
    // Listen leeren
    emptyLists();
    // const lists = getSortedLists();
    // for (const [key, value] of Object.entries(lists)) {
    //     if (value.length > 0) {
    //         let list = document.createElement('div');
    //         list.className = 'list';
    //         list.id = key;
    //         document.getElementById(`container_${key}`).appendChild(list);
    //     }
    //     for (let i = 0; i < value.length; ++i) {
    //         document.getElementById(key).innerHTML += createCheckboxHTML(`${key}_${i}`, `${key}_${i}`, `test(${key}, ${i})`, `${value[i]}`);
    //     }
    // }

    const lists = getSortedLists();
    // Listen durchlaufen
    for (const [key, value] of Object.entries(lists)) {
        // Listenelemente erzeugen
        for (let i = 0; i < value.length; ++i) {
            document.getElementById(key).innerHTML += createCheckboxHTML(`${key}_${i}`, `${key}_${i}`, `test(${key}, ${i})`, `${value[i]}`);
        }
    }
}

const TASK_FORMULARE = 'Formulare erstellen';
const TASK_BETRIEBSSTAETTEN = 'Betriebsstätten erstellen';
const TASK_KUNDE = 'Kundengespräch führen';
const TASK_BSNR = 'Betriebsstättennummer hinterlegen';
const TASK_UST_IDNR = 'USt-IdNr hinterlegen';
const TASK_FACHGRUPPEN = 'Fachgruppen eintragen';
const TASK_BANKDATEN = 'Geschäftskonto hinterlegen';
const TASK_ZOLLSOFT = 'Zollsoft kontaktieren';
const TASK_TI = 'TI einrichten';
const TASK_TESTS = 'Testung der Funktionalität durchführen*';
const TASK_KIM = 'KIM-Account einrichten';
const TASK_DALE_UV = 'DALE-UV einrichten';
const TASK_HBA = 'eHBA freischalten und in Funktion setzen';
const TASK_HZV = 'HZV-Dongle einbinden';
const TASK_AP_ERSTELLEN = 'Arbeitsplätze erstellen';
const TASK_KV_BEREICH = 'KV-Bereich eintragen';
const TASK_AP_SICHERN = 'Arbeitsplätze sichern';
const TASK_SYMBOLLEISTE = 'Symbolleiste einrichten*';
const TASK_BRIEFKOPF_HINTERGRUND = 'Hintergrund für Briefe i. d. Einstellungen hinterlegen';
const TASK_ARBEITSPLATZGRUPPEN = 'Arbeitsplatzgruppen erstellen';
const TASK_NUTZER = 'Nutzer anlegen';
const TASK_LANR = 'Lebenslange Arztnummern hinterlegen (falls vorhanden)';
const TASK_STEMPEL = 'Arztstempel erstellen und hinterlegen';
const TASK_UNTERSCHRIFT = 'Arztunterschriften sammeln und hinterlegen';
const TASK_KV_CONNECT = 'KV-Connect Daten hinterlgen';
const TASK_TODOS = 'Todos erstellen';
const TASK_TODO_RAUM_ZUORDNUNG = 'Todos den Räumen zuordnen';
const TASK_RAEUME = 'Räume erstellen';
const TASK_KALENDER = 'Kalender erstellen';
const TASK_OTK = 'OTK erstellen';
const TASK_DRUCKERZUWEISUNG = 'Druckerzuweisung vornhemen';
const TASK_DRUCKEINSTELLUNGEN = 'Druckereinstellungen vornehmen';
const TASK_BRIEFVORLAGEN = 'Briefvorlagen erstellen';
const TASK_ARZEKO = 'Arzeko installieren';
const TASK_EINSTELLUNGEN_ZOLLSOFT = 'Zollsoft-Einstellungen anpassen';
const TASK_DMP = 'DMP-Modul aktivieren (Zollsoft-Einstellungen)';
const TASK_IMPFDOCNE = 'ImpfDocNE installieren';
const TASK_ARZT_DIREKT = 'arzt-direkt Account erstellen';
const TASK_VSS = 'VSS einrichten';
const TASK_AKTIONSKETTEN = 'Aktionsketten erstellen';
const TASK_HAUSDIAGNOSEN = 'Hausdiagnosen erstellen';
const TASK_ANALOGZIFFERN = 'Analogziffern erstellen';
const TASK_SACHKOSTEN = 'Sachkosten hinterlegen';
const TASK_TEXTBAUSTEINE = 'Textbausteine hinterlegen';
const TASK_KARTEIEINTRAGSTYPEN = 'Karteieintragstypen erstellen';
const TASK_ARZTBRIEF = 'Arztbriefvorlage erstellen';
const TASK_EBM_FAVORITEN = 'EBM-Favoriten erstellen';
const TASK_GOAE_FAVORITEN = 'GOÄ-Favoriten erstellen';
const TASK_ICD_FAVORITEN = 'ICD-Favoriten erstellen';
const TASK_SELBSTANMELDUNG = 'Selbstanmeldung einrichten';
const TASK_RECHTEVERWALTUNG = 'Rechteverwaltung einstellen';
const TASK_KASSENBUCH = 'Kassenbücher erstellen';
const TASK_PRAXISNOTRUF = 'Praxisnotruf einrichten';
const TASK_SCHREIBER = 'Herrn Schreiber kontaktieren';
const TASK_HITPANEL = 'Hitpanel einrichten';
const TASK_UCC_CLIENT = 'UCC-Client installieren';
const TASK_UCC_KOPPLUNG = 'UCC-Tomedo Kopplung durchführen';
const TASK_UCC_ANMELDUNG = 'Benutzer an den UCC-Clients anmelden';
const TASK_EMAIL = 'Praxis E-Mails hinterlegen';
const TASK_TERMINERINNERUNG = 'Terminerinnerung einrichten';
const TASK_SMS = 'SMS-Kontingent erstellen';
const TASK_FAX = 'Fax-Versandt einstellen';
const TASK_PRIVATREZEPT = 'Individuelles Privatrezept einstellen';
const TASK_BRIEFKOPF = 'Briefkopf einstellen';
const TASK_FONTS = 'Individuelle Fonts installieren';
const TASK_APPLE_ID = 'Apple-ID erstellen';
const TASK_IPAD = 'iPads einrichten';
const TASK_IPAD_VPN = 'iPads mit VPN versehen';
const TASK_MOBIL = 'Mobilnummer des Arztes für Apple-ID erstellung in Erfahrung bringen';
const TASK_GEB = 'Geburtdatum des Arztes für Apple-ID erstellung in Erfahrung bringen';
const TASK_IPHONE = 'iPhones einrichten';
const TASK_IPHONE_VPN = 'iPhones mit VPN versehen';
const TASK_LABOR = 'Labor kotaktieren';
const TASK_LABOR_DFUE = 'Laboranbindug erstellen';
const TASK_LABOR_ZIFFERN = 'Laborziffernübernahme einstellen';
const TASK_LABORMASCHINEN = 'Labormaschinen anbinden';
const TASK_DOCTOLIB_TOMEDO = 'Doctolib Schnittstelle freischalten';
const TASK_DOCTOLIB_KOPPLUNG = 'Tomedo-Doctolib Kopplug durchführen';
const TASK_DOCTOLIB = 'Doctolib kontaktieren';
const TASK_DOCTOLIB_CLIENT = 'Doctolib Client installieren';
const TASK_SPRACHERKENNUNG = 'Spracherkennung installieren';
const TASK_SCANNER = 'Scanner einrichten';
const TASK_DATEIIMPORT = 'Dateiimport einrichten (Scanner)';
const TASK_SCANNER_FARBIG = 'Farbigen scan einstellen';
const TASK_FRUEHERKENNUNG = 'Früherkenungsmodul einstellen';
const TASK_MODULE_IMPFDOCNE = 'ImpfDocNE Modul aktivieren';
const TASK_OKFE = 'oKFE Modul aktivieren';
const TASK_BG = 'BG Modul aktivieren';
const TASK_TERMINAL_MOBIL = 'Mobiles Kartenterminal konfigurieren';
const TASK_KALENDER_ZUSAMMENFUEHREN = 'Alten Kalender mit neuemn Kalender zusammenführen';
const TASK_SCHULBESCHEINIGUNG = 'Schulbescheinigung importieren';
const TASK_TERMINZETTEL = 'Terminzettel importieren';
// Organisatorisch
const TASK_MAPPE = 'Mappe fertig machen';

function add(n) {
    switch (n) {
        case 0: // Betriebsstätten
            aufgaben.add([TASK_KUNDE, TASK_BSNR]);
            aufgaben.add([TASK_KUNDE, TASK_UST_IDNR]);
            aufgaben.add([TASK_KUNDE, TASK_FACHGRUPPEN]);
            aufgaben.add([TASK_KUNDE, TASK_BANKDATEN]);
            break;
        case 1: // TI
            aufgaben.add([TASK_ZOLLSOFT, TASK_TI]);
            aufgaben.add([TASK_TI, TASK_TESTS]);
            break;
        case 2: // KIM
            aufgaben.add([TASK_KUNDE, TASK_KIM]);
            aufgaben.add([TASK_ZOLLSOFT, TASK_KIM]);
            aufgaben.add([TASK_KIM, TASK_TESTS]);
            aufgaben.add([TASK_TI, TASK_KIM]);
            break;
        case 3: // DALE-UV
            aufgaben.add([TASK_KUNDE, TASK_DALE_UV]);
            aufgaben.add([TASK_DALE_UV, TASK_TESTS]);
            break;
        case 4: // eHBA
            aufgaben.add([TASK_KUNDE, TASK_HBA]);
            aufgaben.add([TASK_HBA, TASK_TESTS]);
            break;
        case 5: // HZV
            aufgaben.add([TASK_KUNDE, TASK_HZV]);
            aufgaben.add([TASK_HZV, TASK_TESTS]);
            break;
        case 6: // AP's
            aufgaben.add([TASK_KUNDE, TASK_AP_ERSTELLEN]);
            aufgaben.add([TASK_BETRIEBSSTAETTEN, TASK_AP_ERSTELLEN]);
            aufgaben.add([TASK_KV_BEREICH, TASK_AP_ERSTELLEN]);
            aufgaben.add([TASK_AP_ERSTELLEN, TASK_AP_SICHERN]);
            aufgaben.add([TASK_SYMBOLLEISTE, TASK_AP_SICHERN]);
            aufgaben.add([TASK_DRUCKEINSTELLUNGEN, TASK_AP_SICHERN]);
            aufgaben.add([TASK_BRIEFKOPF_HINTERGRUND, TASK_TESTS]);
            aufgaben.add([TASK_AP_ERSTELLEN, TASK_ARBEITSPLATZGRUPPEN]);
            aufgaben.add([TASK_TESTS, TASK_AP_SICHERN]);
            break;
        case 7: // Nutzer
            aufgaben.add([TASK_KUNDE, TASK_NUTZER]);
            aufgaben.add([TASK_KUNDE, TASK_LANR]);
            aufgaben.add([TASK_KUNDE, TASK_STEMPEL]);
            aufgaben.add([TASK_KUNDE, TASK_UNTERSCHRIFT]);
            break;
        case 8: // KV-Connect
            aufgaben.add([TASK_KUNDE, TASK_KV_CONNECT]);
            aufgaben.add([TASK_TI, TASK_KV_CONNECT]);
            aufgaben.add([TASK_KV_CONNECT, TASK_TESTS]);
            break;
        case 9: // Todos
            aufgaben.add([TASK_KUNDE, TASK_TODOS]);
            aufgaben.add([TASK_TODOS, TASK_TODO_RAUM_ZUORDNUNG]);
            aufgaben.add([TASK_RAEUME, TASK_TODO_RAUM_ZUORDNUNG]);
            aufgaben.add([TASK_KUNDE, TASK_TODO_RAUM_ZUORDNUNG]);
            break;
        case 10: // Kalender
            aufgaben.add([TASK_KUNDE, TASK_KALENDER]);
            aufgaben.add([TASK_KALENDER, TASK_TESTS]);
            break;
        case 11: // OTK
            aufgaben.add([TASK_KUNDE, TASK_OTK]);
            aufgaben.add([TASK_ZOLLSOFT, TASK_OTK]);
            aufgaben.add([TASK_ARZT_DIREKT, TASK_OTK]);
            aufgaben.add([TASK_ZOLLSOFT, TASK_ARZT_DIREKT]);
            aufgaben.add([TASK_OTK, TASK_TESTS]);
            aufgaben.add([TASK_KALENDER, TASK_OTK]);
            break;
        case 12: // Drucker
            aufgaben.add([TASK_DRUCKERZUWEISUNG]);
            aufgaben.add([TASK_FORMULARE, TASK_DRUCKEINSTELLUNGEN]);
            aufgaben.add([TASK_BRIEFVORLAGEN, TASK_DRUCKEINSTELLUNGEN]);
            aufgaben.add([TASK_DRUCKEINSTELLUNGEN, TASK_TESTS]);
            break;
        case 13: // Arzeko
            aufgaben.add([TASK_ARZEKO]);

            break;
        case 14: // DMP
            aufgaben.add([TASK_EINSTELLUNGEN_ZOLLSOFT, TASK_DMP]);
            break;
        case 15: // ImpfDocNE
            aufgaben.add([TASK_ZOLLSOFT, TASK_IMPFDOCNE]);
            aufgaben.add([TASK_MODULE_IMPFDOCNE, TASK_IMPFDOCNE]);
            break;
        case 16: // VSS
            aufgaben.add([TASK_KUNDE, TASK_ARZT_DIREKT]);
            aufgaben.add([TASK_ZOLLSOFT, TASK_ARZT_DIREKT]);
            aufgaben.add([TASK_ARZT_DIREKT, TASK_VSS]);
            aufgaben.add([TASK_VSS, TASK_TESTS]);
            break;
        case 17: // Aktionsketten
            aufgaben.add([TASK_KUNDE, TASK_AKTIONSKETTEN]);
            break;
        case 18: // Hausdiagnosen
            aufgaben.add([TASK_KUNDE, TASK_HAUSDIAGNOSEN]);
            break;
        case 19: // Analogziffern
            aufgaben.add([TASK_KUNDE, TASK_ANALOGZIFFERN]);
            break;
        case 20: // Sachkosten
            aufgaben.add([TASK_KUNDE, TASK_SACHKOSTEN]);
            break;
        case 21: // Textbausteine
            aufgaben.add([TASK_KUNDE, TASK_TEXTBAUSTEINE]);
            break;
        case 22: // Karteieintragstypen
            aufgaben.add([TASK_KUNDE, TASK_KARTEIEINTRAGSTYPEN]);
            aufgaben.add([TASK_ARZTBRIEF, TASK_KARTEIEINTRAGSTYPEN]);
            aufgaben.add([TASK_BRIEFVORLAGEN, TASK_KARTEIEINTRAGSTYPEN]);
            break;
        case 23: // EBM-Favoriten
            aufgaben.add([TASK_KUNDE, TASK_EBM_FAVORITEN]);
            break;
        case 24: // GOÄ-Favoriten
            aufgaben.add([TASK_KUNDE, TASK_GOAE_FAVORITEN]);
            break;
        case 25: // ICD-Favoriten
            aufgaben.add([TASK_KUNDE, TASK_ICD_FAVORITEN]);
            break;
        case 26: // Selbstanmeldung
            aufgaben.add([TASK_NUTZER, TASK_SELBSTANMELDUNG]);
            aufgaben.add([TASK_TODOS, TASK_SELBSTANMELDUNG]);
            aufgaben.add([TASK_FORMULARE, TASK_SELBSTANMELDUNG]);
            break;
        case 27: // Rechte
            aufgaben.add([TASK_NUTZER, TASK_RECHTEVERWALTUNG]);
            aufgaben.add([TASK_KUNDE, TASK_RECHTEVERWALTUNG]);
            aufgaben.add([TASK_EMAIL, TASK_RECHTEVERWALTUNG]);
            aufgaben.add([TASK_RECHTEVERWALTUNG, TASK_TESTS]);
            break;
        case 28: // Kassenbuch
            aufgaben.add([TASK_KASSENBUCH]);

            break;
        case 29: // Notruf
            aufgaben.add([TASK_PRAXISNOTRUF]);

            break;
        case 30: // Hitpanel
            aufgaben.add([TASK_SCHREIBER, TASK_HITPANEL]);
            aufgaben.add([TASK_KUNDE, TASK_HITPANEL]);
            aufgaben.add([TASK_HITPANEL, TASK_TESTS]);
            break;
        case 31: // Starface
            aufgaben.add([TASK_UCC_CLIENT, TASK_UCC_KOPPLUNG]);
            aufgaben.add([TASK_UCC_ANMELDUNG, TASK_UCC_KOPPLUNG]);
            aufgaben.add([TASK_UCC_CLIENT, TASK_UCC_ANMELDUNG]);
            aufgaben.add([TASK_UCC_KOPPLUNG, TASK_AP_SICHERN]);
            aufgaben.add([TASK_UCC_KOPPLUNG, TASK_TESTS]);
            break;
        case 32: // E-Mail
            aufgaben.add([TASK_KUNDE, TASK_EMAIL]);
            aufgaben.add([TASK_EMAIL, TASK_TESTS]);
            break;
        case 33: // Erinnerung
            aufgaben.add([TASK_KUNDE, TASK_TERMINERINNERUNG]);
            aufgaben.add([TASK_EMAIL, TASK_TERMINERINNERUNG]);
            aufgaben.add([TASK_TERMINERINNERUNG, TASK_TESTS]);
            break;
        case 34: // SMS
            aufgaben.add([TASK_ZOLLSOFT, TASK_SMS]);
            aufgaben.add([TASK_SMS, TASK_TESTS]);
            break;
        case 35: // Fax
            aufgaben.add([TASK_UCC_ANMELDUNG, TASK_FAX]);
            aufgaben.add([TASK_FAX, TASK_TESTS]);
            aufgaben.add([TASK_KUNDE, TASK_FAX]);
            break;
        case 36: // PrivRez
            aufgaben.add([TASK_KUNDE, TASK_PRIVATREZEPT]);
            break;
        case 37: // Briefe
            aufgaben.add([TASK_KUNDE, TASK_BRIEFVORLAGEN]);
            aufgaben.add([TASK_BRIEFKOPF, TASK_BRIEFVORLAGEN]);
            aufgaben.add([TASK_KUNDE, TASK_BRIEFKOPF]);
            aufgaben.add([TASK_KUNDE, TASK_ARZTBRIEF]);
            aufgaben.add([TASK_BRIEFVORLAGEN, TASK_BRIEFKOPF_HINTERGRUND]);
            aufgaben.add([TASK_ARZTBRIEF, TASK_BRIEFKOPF_HINTERGRUND]);
            aufgaben.add([TASK_BRIEFKOPF, TASK_BRIEFKOPF_HINTERGRUND]);
            aufgaben.add([TASK_FONTS, TASK_BRIEFVORLAGEN]);
            break;
        case 38: // Formulare
            aufgaben.add([TASK_KUNDE, TASK_FORMULARE]);
            aufgaben.add([TASK_FORMULARE, TASK_SYMBOLLEISTE]);
            aufgaben.add([TASK_FONTS, TASK_FORMULARE]);
            break;
        case 39: // iPads
            aufgaben.add([TASK_KUNDE, TASK_APPLE_ID]);
            aufgaben.add([TASK_APPLE_ID, TASK_IPAD]);
            aufgaben.add([TASK_IPAD_VPN, TASK_IPAD]);
            aufgaben.add([TASK_MOBIL, TASK_APPLE_ID]);
            aufgaben.add([TASK_GEB, TASK_APPLE_ID]);
            break;
        case 40: // iPhones
            aufgaben.add([TASK_IPHONE_VPN, TASK_IPHONE]);
            break;
        case 41: // Labore
            aufgaben.add([TASK_LABOR, TASK_LABOR_DFUE]);
            aufgaben.add([TASK_LABOR_ZIFFERN]);
            break;
        case 42: // Labormaschinen
            aufgaben.add([TASK_LABORMASCHINEN]);
            break;
        case 43: // Doctolib
            aufgaben.add([TASK_EINSTELLUNGEN_ZOLLSOFT, TASK_DOCTOLIB_TOMEDO]);
            aufgaben.add([TASK_DOCTOLIB, TASK_DOCTOLIB_KOPPLUNG]);
            aufgaben.add([TASK_DOCTOLIB_CLIENT, TASK_DOCTOLIB_KOPPLUNG]);
            break;
        case 44: // Räume
            aufgaben.add([TASK_KUNDE, TASK_RAEUME]);
            break;
        case 45: // Tomedo Spracherkennung
            aufgaben.add([TASK_ZOLLSOFT, TASK_SPRACHERKENNUNG]);
            break;
        case 46: // Scanner
            aufgaben.add([TASK_SCANNER, TASK_DATEIIMPORT]);
            aufgaben.add([TASK_SCANNER, TASK_SCANNER_FARBIG]);
            break;
        case 47:
            aufgaben.add([TASK_KUNDE, TASK_FRUEHERKENNUNG]);
            aufgaben.add([TASK_OKFE]);
        case 48:
            aufgaben.add([TASK_BG]);
            break;
        default:
            console.log(`${n} gibts nicht`);
    }

}

/* Topsort */

var Aufgaben = {
    regeln: [],
    add: function (dep) {
        this.regeln.push(dep);
    },
    // returns a list of all tasks. Each task occurs just ones.
    tasks: function () {
        var res = [];
        for (var i = 0; i < this.regeln.length; ++i) {
            if (!res.includes(this.regeln[i][0])) {
                res.push(this.regeln[i][0]);
            }
            if (!res.includes(this.regeln[i][1]) && typeof (this.regeln[i][1]) !== "undefined") {
                res.push(this.regeln[i][1]);
            }
        }
        return res;
    },
    topsort: function () {
        var res = [];
        var tasks = this.tasks();
        var i = 0;
        while (tasks.length > 0) {
            var dep = this.dep(tasks[i]);
            if (dep.every(val => res.includes(val))) {
                res.push(tasks[i]);
                tasks.splice(i, 1);
                i = 0;
            }
            else {
                ++i;
            }
        }
        return res;
    },
    // returns all dependencies of one task
    dep: function (task) {
        var res = [];
        for (var i = 0; i < this.regeln.length; ++i) {
            if (this.regeln[i][1] === task) {
                res.push(this.regeln[i][0]);
            }
        }
        return res;
    },
    // returns a list of all successors of a task
    succ: function (task) {
        var res = [];
        for (var i = 0; i < this.regeln.length; ++i) {
            if (this.regeln[i][0] === task) {
                res.push(this.regeln[i][1]);
            }
        }
        return res;
    },
    clear: function () {
        this.regeln = [];
    }
};

let aufgaben = Object.create(Aufgaben);

// to JSON

function itCheckboxes(checkboxes){
    for (const checkbox of checkboxes){
        console.log(checkbox.checked);
    }
}

function itLabel(labels){
    for (const label of labels){
        console.log(label.textContent);
    }
}

function toJSON() {
    let lists = document.getElementsByClassName('list');
    for (const el of lists){
        itCheckboxes(el.getElementsByClassName('checkbox'));
        itLabel(el.querySelectorAll('label'));
    }
}

function doAll() {
    gather();
    aufgaben.add([TASK_SCHULBESCHEINIGUNG]);
    aufgaben.add([TASK_TERMINZETTEL]);
    aufgaben.add([TASK_TESTS, TASK_MAPPE]);
    showLists();
    toJSON();
}

doAll();
