// constants
const TASK_BANKDATEN =
  "Geschäftskonto hinterlegen. IBAN hier auf Gültigkeit prüfen: https://www.iban-rechner.de/";
const TASK_DRUCKERZUWEISUNG = "Druckerzuweisung";
const TASK_KUNDE = "Kundengespräch";
const TASK_SKRIPTE = "Skripte";
const TASK_STEMPEL =
  "Arzt-Stempel erstellen [An Internal Link](/guides/content/editing-an-existing-page)";
const TASK_EMAIL_TOMEDO = "E-Mail Konten hinteregen (tomedo)";
const TASK_EMAIL_MAIL = "E-Mail Konten hinterlegen (Apple Mail)";
const TASK_EMNAIL_SIGNATUREN =
  "(AP)E-Mail Signaturen erstellen (tomedo, Apple-Mail)";
const TASK_RECHTEVERWALTUNG = "Rechteverwaltung";
const TASK_ARZTBRIEF = "Arztbrief erstellen";
const TASK_BRIEFKOPF = "Briefkopf hinterlegen (falls vorhanden)";
const TASK_PRIVATRECHNUNG =
  "Privatrechnung erstellen (zollsoft-Vorlage anpassen)";
const TASK_RAEUME = "Räume hinterlegen";
const TASK_TODOS = "TODOs hinterlegen";
const TASK_LABOR = "Labor kontaktieren";
const TASK_ARBEITSPLATZGRUPPEN = "Arbeitsplatzgruppen erstellen (kein Muss)";
const TASK_PRIVATREZEPT =
  "individuelles Privatrezept erstellen (falls vorhanden)";
const TASK_UNTERSCHRIFT = "Unterschrift in den Nutzereinstellungen hinterlegen";
const TASK_EINSTELLUNGEN_ZOLLSOFT =
  "Zollsoft Einstellungen anpassen (KV-Bereich, Module)";
const TASK_VSS = "VSS einrichten (arzt-direkt)";
const TASK_AKTIONSKETTEN = "Aktionsketten erstellen";
const TASK_HAUSKATALOGE = "Hauskatalog hinterlegen (Mediks)";
const TASK_TEXTBAUSTEINE = "Textbausteine hinterlegen";
const TASK_GOAE_FAVORITEN = "GOÄ-Favoriten hinterlegen";
const TASK_FAX = "(AP)Fax-Drucker konfigurieren (Druckereinstellungen)";
const TASK_PVS = "PVS-Konto hinterlegen (benötigt Mitgliedsnummer)";
const TASK_GERAETEVIDEOS = "Gerätevideos drehen und im Praxisordner speichern";
const TASK_FORMULARE = "Formulare erstellen";
const TASK_ZOLLSOFT = "Zollsoft kontaktieren";
const TASK_RESECO = "Reseco kontaktieren";
const TASK_KALENDER = "Kalender konfigurieren";
const TASK_TERMINERINNERUNG = "Terminerinnerung konfigurieren";
const TASK_OTK = "OTK konfigurieren";
const TASK_BSNR = "BSNR hinterlegen";
const TASK_BETRIEBSSTAETTEN = "Betriebsstätten erstellen";
const TASK_KASSENBUCH = "Kassenbücher erstellen";
const TASK_IMPFDOCNE = "ImpfDocNE installieren (macht Zollsoft)";
const TASK_HZV = "HZV Modul konfigurieren";
const TASK_LANR = "LANR hinterlegen (Nutzer-Einstellungen)";
const TASK_FACHRICHTUNG =
  "Fachrichtungen hinterlegen (Betriebsstätten und Nutzer)";
const TASK_NUTZER = "tomedo-Nutzer erstellen";
const TASK_SYMBOLLEISTE_IMPFDOC = "(AP)Symbolleiste ImpfDocNE";
const TASK_BRIEFKOPF_HINTERGRUND =
  "(AP)Briefkopfhintergrund hinterlegen (Einstellungen -> Briefschreibung)";
const TASK_OSX_DRUCKER = "(AP)Drucker im Betriebssystem installieren";
const TASK_SPRACHERKENNUNG = "Spracherkennung installieren";
const TASK_EMAIL_CLIENT =
  "(AP)E-Mail Client in tomedo anpassen (Einstellungen -> Brief/Fax/Mail)";
const TASK_DRUCKEINSTELLUNGEN =
  "(AP)Rechnerspez. Druckeinstellungen konfigurieren";
const TASK_SYMBOLLEISTE_PRAXIS =
  "(AP)Praxis Ordner in die Symbolleiste einfügen (falls nicht vorhanden)";
const TASK_AP_ERSTELLEN = "(AP)Arbeitsplätze erstellen";
const TASK_AP_SICHERN = "(AP)Arbeitsplätze sichern";
const TASK_DUPLEX = "(AP)Duplexdruck deaktivieren";
const TASK_ARZEKO = "(AP)Arzeko installieren";
const TASK_DOCTOLIB_CLIENT = "(AP)DoctoLib App installieren";
const TASK_DOCTOLIB_TOMEDO = "(AP)DoctoLib mit tomedo koppeln";
const TASK_SCANNER = "(AP)Scanner installieren";
const TASK_UCC_CLIENT = "(AP)UCC Client installieren";
const TASK_UCC_ANMELDUNG = "(AP)UCC Benutzer anmelden";
const TASK_UCC_KOPPLUNG = "(AP)UCC Client mit tomedo koppeln";
const TASK_UCC_CALLMANAGER =
  "(AP)UCC Callmanager anpassen (im Standartimage schon enthalten)";
const TASK_IPAD =
  "(AP)iPad's einrichten (tomedo Installieren und mit dem Server verbinden)";
const TASK_TERMINALS = "(AP)Kartenterminals konfigueren";
const TASK_IPAD_VPN = "(AP)iPad's mit VPN versehen";
const TASK_FACHGRUPPEN = "Fachgruppen eintragen";
const TASK_BGRECHNUNG = "BG-Rechnung anpassen";
const TASK_KV_CONNECT = "KV-Connect Konto hinterlegen";
const TASK_DMP = "DMP Modul aktivieren";
const TASK_HAUSDIAGNOSEN = "Hausdiagnosen hinterlegen (falls vorhanden)";
const TASK_ANALOGZIFFERN = "Analogziffern erstellen (falls vorhanden)";
const TASK_SACHKOSTEN = "Sachkosten hinterlegen";
const TASK_KARTEIEINTRAGSTYPEN =
  "Karteieintragstypen erstellen (falls erforderlich)";
const TASK_EBM_FAVORITEN = "EBM-Favoriten anlegen";
const TASK_ICD_FAVORITEN = "ICD-Favoriten anlegen";
const TASK_SELBSTANMELDUNG =
  "Selbstanmeldung konfigurieren: Einstellungen > Arbeitsplatz > Kiosk";
const TASK_PRAXISNOTRUF = "Notruf-Knopf in der Symbolleiste hinterlegen";
const TASK_HITPANEL = "Hitpanel installieren";
const TASK_SCHREIBER = "Herrn Schreiber kontaktieren (+49 5551- 908490)";
const TASK_TELEFONANBINDUNG = "Telefonanbindung installieren";
const TASK_SMS = "SMS Kontingent hinterlegen";
const TASK_BRIEFVORLAGEN = "Briefvorlagen erstellen";
const TASK_IPHONE = "iPhone's mit tomedo und VPN versehen";
const TASK_LABOR_DFUE = "Labor-DFÜ installieren";
const TASK_LABOR_ZIFFERN =
  "Labor-Ziffernübernahme aktivieren (Verwaltung -> Laboreingang)";
const TASK_LABORMASCHINEN = "Labormaschinen einbinden";
const TASK_UST_IDNR = "USt-idNr. hinterlegen (Betriebsstätte)";
const TASK_KIM =
  "KIM-Addresse konfigurieren (muss von Zollsoft gemacht werden)";
const TASK_DALE_UV = "DALE-UV Modul aktivieren";
const TASK_DALE_U_LAUFENDE_NUMMER =
  "Laufende Nr. Dale in Zollsoft-Einstellungen hinzufügen";
const TASK_HBA = "eHBA einrichten";
const TASK_ARZT_DIREKT = "arzt-direkt Konto erstellen und konfigurieren";
const TASK_ARZT_DIREKT_PASSWORTLISTE =
  "arzt-direkt-Passwortliste ausdrucken und in die Kundenmappe heften";
const TASK_KV_BEREICH = "KV-Bereich in den Zollsoft-Einstellungen auswählen";
const TASK_SYMBOLLEISTE =
  "(AP)Symbolleiste (KBV, Attest, Schulbesch., Anwesenheit, Terminzettel, Früherkennung)";
const TASK_TI = "TI konfigurieren (muss von Zollsoft gemacht werden)";
const TASK_MODULE_IMPFDOCNE = "ImpfDocNE-Modul aktivieren";
const TASK_IPHONE_VPN = "iPhone VPN Konfiguration einspielen";
const TASK_VPN = "VPN Konfiguration erstellen";
const TASK_DOCTOLIB = "Doctolib kontaktieren";
const TASK_DOCTOLIB_KOPPLUNG = "Doctolib mit tomedo koppeln";
const TASK_DATEIIMPORT = "Dateiimport konfigureren (Server oder Clientseitig)";
const TASK_TODO_RAUM_ZUORDNUNG = "ToDo-Raum-Zuordnung konfigurieren";
const TASK_SCANNER_FARBIG = "farbigen Scan einstellen";
const TASK_FONTS = "(AP)spezielle Fonts installieren";
const TASK_APPLE_ID = "Apple ID in Erfahrung bringen / erstellen";
const TASK_MOBIL = "Mobilnummer des Arztes erfragen (für Apple-ID)";
const TASK_GEB = "Geburtsdatum des Arztes (für Apple-ID & OTK Ärzte-Account)";
const TASK_FRUEHERKENNUNG =
  "Früherkennungsmodul konfigurieren und in der Symbolleiste hinterlegen";
const TASK_TESTS = "Abschließende Testung der Funktionalität";
const TASK_KAMERALOGIN = "Kameralogin konfigurieren";
const TASK_SCHULBESCHEINIGUNG = "Schulbescheinigung erstellen";
const TASK_TERMINZETTEL = "Terminzettel erstellen";
const TASK_ATTEST = "Attest erstellen";
const TASK_ANWESENHEIT = "Anwesenheitsbescheinigung erstellen";
const TASK_KBV = "KBV-Kopf konfigurieren";
const TASK_PAPIER = "Papier in die Drucker legen";
const TASK_BG = "BG Modul aktivieren";
const TASK_HKS = "eDoku Modul aktivieren";
const TASK_OPS = "OPS-Favoriten konfigurieren";
const TASK_PRAXIS_TAGESLISTE =
  'abgerechnet und dokumentiert: Haken entfernen bei "Feld ist nutzerspezifisch"';
const TASK_PRAXIS_MEDIKS =
  "Bei Betätigung des Medik-Buttons: 'alle Medikamente'. Beim Erstellen eines Rezepts: 'alle Medikamente'";
const TASK_BRIEF_SICHTBARKEIT = "Standartbriefvorlagen ausblenden";
const TASK_NUTZER_FARBEN = "Nutzerfarben einstellen";
const TASK_ARZT_DIREKT_AERZTE_REGISTRIEREN =
  "Ärzte bei arzt-direkt registrieren";
const TASK_VSS_AERZTE_BESTAETIGEN =
  "Aktivierungslink von arzt-direkt der Ärzte bestätigen";
const TASK_VSS_AERZTE_FREISCHALTEN = "Ärzte bei arzt-direkt freischalten";
const TASK_DRUCK_SPARSAM = "sparsamen Formulardruck aktivieren";
const TASK_OFFENE_SPRECHSTUNDE =
  "Offene Sprechstunde in den Einstellungen ausstellen";
const TASK_NUTZER_BETRIEBSSTAETTEN =
  "Den Nutzern ihre Betriebsstaette zuordnen (Nutzerverwaltung)";
const TASK_PRIVATRECHNUNG_BETRIEBSSTAETTE =
  "Privatrechnungstyp (Privatrechnung) als Standartauswahl in den Betriebsstaetten setzen (s. Betriebsstaetten>Sonstiges)";
const TASK_DALE_UV_BETRIEBSSTAETTEN =
  "Ansprechpartner für DALE-UV in den Betriebsstaetten hinterlegen (s. Betriebsstaetten>Sonstiges)";
const TASK_KIM_BETRIEBSSTAETTEN =
  "KIM E-Mail-Konto in den Betriebsstaetten hinterlegen (s. Betriebsstaetten>Sonstiges)";
const TASK_BG_BETRIEBSSTAETTE =
  "Privatrechnungstyp (BG) als Standartauswahl in den Betriebsstaetten setzen (s. Betriebsstaetten>Sonstiges)";
const TASK_BETRIEBSSTAETTEN_FARBE =
  "Bei mehreren Betriebsstaetten: Farbe der Betriebsstaette einstellen (s. Betriebsstaetten>Sonstiges)";
const TASK_VSS_KOPPLUNG =
  "VSS-Kopplung: https://oraculum.system-helden.de/books/tomedo---client/page/videosprechstunde-tomedo-kopplung";
const TASK_ORDINATIONSGEBUEHR = "Ordinationsgebühr im Arzt-Nutzer hinterlegen";
const TASK_KOSTENVORANSCHLAG = "Kostenvoranschlag anpassen";
const TASK_MAHNUNGEN = "Mahnungsvorlagen anpassen";
const TASK_LOGO = "Praxislogo einholen";
const TASK_BUCHUNG =
  "Zeitkontingent des Projektangebots prüfen (s. Projektüberblick im Auftrag.). Ggf. Kunden darüber informieren, dass Überstunden anfallen.";
const TASK_ARZT_DIREKT_QR_CODE = "QR-Code von arzt-direkt für die Patienten zum hinzufügen des Arztes ausdrucken und auslegen. [Howto: https://oraculum.system-helden.de/books/tomedo---client/page/arzt-direkt-ausdruck-fur-praxis-erstellen]"
// TODO:
// - Laborziffernübernahme
// - UV-GOÄ
// - iPad- Nutzer erstellen
// - Terminzettel als Task auf der

// listeners
document
  .getElementById("speichern")
  .addEventListener("click", speichern, false);
document.getElementById("filename").addEventListener(
  "keypress",
  function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Cancel the default action, if needed
      document.getElementById("speichern").click();
    }
  },
  false
);

// callbackfunctions
function notizen() {
  let notizen = new Map();

  if (document.getElementById("Betriebsstätten_Notiz").value != "")
    notizen.set(
      "Betriebsstätten",
      document.getElementById("Betriebsstätten_Notiz").value
    );
  if (document.getElementById("TI_Notiz").value != "")
    notizen.set("TI", document.getElementById("TI_Notiz").value);
  // if (document.getElementById('KIM_Notiz').value != "")
  //     notizen.set('KIM', document.getElementById('KIM_Notiz').value);
  if (document.getElementById("BG_Notiz").value != "")
    notizen.set("BG", document.getElementById("BG_Notiz").value);
  if (document.getElementById("DALE-UV_Notiz").value != "")
    notizen.set("DALE-UV", document.getElementById("DALE-UV_Notiz").value);
  // if (document.getElementById('eHBA_Notiz').value != "")
  //     notizen.set('eHBA', document.getElementById('eHBA_Notiz').value);
  if (document.getElementById("HZV_Notiz").value != "")
    notizen.set("HZV", document.getElementById("HZV_Notiz").value);
  if (document.getElementById("Arbeitsplätze_Notiz").value != "")
    notizen.set(
      "Arbeitsplätze",
      document.getElementById("Arbeitsplätze_Notiz").value
    );
  if (document.getElementById("Nutzer_Notiz").value != "")
    notizen.set("Nutzer", document.getElementById("Nutzer_Notiz").value);
  if (document.getElementById("KV-Connect_Notiz").value != "")
    notizen.set(
      "KV-Connect",
      document.getElementById("KV-Connect_Notiz").value
    );
  if (document.getElementById("Todos_Notiz").value != "")
    notizen.set("Todos", document.getElementById("Todos_Notiz").value);
  if (document.getElementById("Kalender_Notiz").value != "")
    notizen.set("Kalender", document.getElementById("Kalender_Notiz").value);
  if (document.getElementById("OTK_Notiz").value != "")
    notizen.set("OTK", document.getElementById("OTK_Notiz").value);
  if (document.getElementById("Drucker_Notiz").value != "")
    notizen.set("Drucker", document.getElementById("Drucker_Notiz").value);
  if (document.getElementById("Arzeko_Notiz").value != "")
    notizen.set("Arzeko", document.getElementById("Arzeko_Notiz").value);
  if (document.getElementById("DMP_Notiz").value != "")
    notizen.set("DMP", document.getElementById("DMP_Notiz").value);
  if (document.getElementById("ImpfDocNE_Notiz").value != "")
    notizen.set("ImpfDocNE", document.getElementById("ImpfDocNE_Notiz").value);
  if (document.getElementById("Ust-Nr._Notiz").value != "")
    notizen.set("Ust-Nr.", document.getElementById("Ust-Nr._Notiz").value);
  if (document.getElementById("VSS_Notiz").value != "")
    notizen.set("VSS", document.getElementById("VSS_Notiz").value);
  if (document.getElementById("Aktionsketten_Notiz").value != "")
    notizen.set(
      "Aktionsketten",
      document.getElementById("Aktionsketten_Notiz").value
    );
  if (document.getElementById("Sachkosten_Notiz").value != "")
    notizen.set(
      "Sachkosten",
      document.getElementById("Sachkosten_Notiz").value
    );
  if (document.getElementById("Textbausteine_Notiz").value != "")
    notizen.set(
      "Textbausteine",
      document.getElementById("Textbausteine_Notiz").value
    );
  if (document.getElementById("Karteieintragstypen_Notiz").value != "")
    notizen.set(
      "Karteieintragstypen",
      document.getElementById("Karteieintragstypen_Notiz").value
    );
  if (document.getElementById("EBM-Favoriten_Notiz").value != "")
    notizen.set(
      "EBM-Favoriten",
      document.getElementById("EBM-Favoriten_Notiz").value
    );
  if (document.getElementById("GOÄ-Favoriten_Notiz").value != "")
    notizen.set(
      "GOÄ-Favoriten",
      document.getElementById("GOÄ-Favoriten_Notiz").value
    );
  if (document.getElementById("ICD-Favoriten_Notiz").value != "")
    notizen.set(
      "ICD-Favoriten",
      document.getElementById("ICD-Favoriten_Notiz").value
    );
  if (document.getElementById("Selbstanmeldung_Notiz").value != "")
    notizen.set(
      "Selbstanmeldung",
      document.getElementById("Selbstanmeldung_Notiz").value
    );
  if (document.getElementById("Rechte_Notiz").value != "")
    notizen.set("Rechte", document.getElementById("Rechte_Notiz").value);
  if (document.getElementById("Kassenbuch_Notiz").value != "")
    notizen.set(
      "Kassenbuch",
      document.getElementById("Kassenbuch_Notiz").value
    );
  // if (document.getElementById('Notruf_Notiz').value != "")
  //     notizen.set('Notruf', document.getElementById('Notruf_Notiz').value);
  if (document.getElementById("Hitpanel_Notiz").value != "")
    notizen.set("Hitpanel", document.getElementById("Hitpanel_Notiz").value);
  if (document.getElementById("Starface_Notiz").value != "")
    notizen.set("Starface", document.getElementById("Starface_Notiz").value);
  if (document.getElementById("E-Mail_Notiz").value != "")
    notizen.set("E-Mail", document.getElementById("E-Mail_Notiz").value);
  if (document.getElementById("Erinnerung_Notiz").value != "")
    notizen.set(
      "Erinnerung",
      document.getElementById("Erinnerung_Notiz").value
    );
  // if (document.getElementById('Hausdiagnosen_Notiz').value != "")
  //     notizen.set('Hausdiagnosen', document.getElementById('Hausdiagnosen_Notiz').value);
  if (document.getElementById("SMS_Notiz").value != "")
    notizen.set("SMS", document.getElementById("SMS_Notiz").value);
  if (document.getElementById("Fax_Notiz").value != "")
    notizen.set("Fax", document.getElementById("Fax_Notiz").value);
  if (document.getElementById("Privatrezept_Notiz").value != "")
    notizen.set(
      "Privatrezept",
      document.getElementById("Privatrezept_Notiz").value
    );
  if (document.getElementById("Briefe_Notiz").value != "")
    notizen.set("Briefe", document.getElementById("Briefe_Notiz").value);
  if (document.getElementById("Formulare_Notiz").value != "")
    notizen.set("Formulare", document.getElementById("Formulare_Notiz").value);
  if (document.getElementById("iPads_Notiz").value != "")
    notizen.set("iPads", document.getElementById("iPads_Notiz").value);
  if (document.getElementById("iPhones_Notiz").value != "")
    notizen.set("iPhones", document.getElementById("iPhones_Notiz").value);
  if (document.getElementById("Labore_Notiz").value != "")
    notizen.set("Labore", document.getElementById("Labore_Notiz").value);
  if (document.getElementById("Labormaschinen_Notiz").value != "")
    notizen.set(
      "Labormaschinen",
      document.getElementById("Labormaschinen_Notiz").value
    );
  if (document.getElementById("Doctolib_Notiz").value != "")
    notizen.set("Doctolib", document.getElementById("Doctolib_Notiz").value);
  if (document.getElementById("Räume_Notiz").value != "")
    notizen.set("Räume", document.getElementById("Räume_Notiz").value);
  if (document.getElementById("Spracherkennung_Notiz").value != "")
    notizen.set(
      "Spracherkennung",
      document.getElementById("Spracherkennung_Notiz").value
    );
  if (document.getElementById("Scanner_Notiz").value != "")
    notizen.set("Scanner", document.getElementById("Scanner_Notiz").value);
  if (document.getElementById("Kameralogin_Notiz").value != "")
    notizen.set(
      "Kameralogin",
      document.getElementById("Kameralogin_Notiz").value
    );
  if (document.getElementById("Früherkennung_Notiz").value != "")
    notizen.set(
      "Früherkennung",
      document.getElementById("Früherkennung_Notiz").value
    );
  if (document.getElementById("eHKS/FEK/oKFE_Notiz").value != "")
    notizen.set(
      "eHKS/FEK/oKFE",
      document.getElementById("eHKS/FEK/oKFE_Notiz").value
    );
  // if (document.getElementById('Analogziffern_Notiz').value != "")
  //     notizen.set('Analogziffern', document.getElementById('Analogziffern_Notiz').value);
  if (document.getElementById("OPS-Favoriten_Notiz").value != "")
    notizen.set(
      "OPS-Favoriten",
      document.getElementById("OPS-Favoriten_Notiz").value
    );

  return notizen;
}
function addRulesAndReturnTopsort() {
  let ts = Object.create(TopSort);

  ts.add([TASK_PRAXIS_TAGESLISTE]);
  ts.add([TASK_PRAXIS_MEDIKS]);
  ts.add([TASK_BRIEF_SICHTBARKEIT]);
  ts.add([TASK_DRUCK_SPARSAM]);
  ts.add([TASK_OFFENE_SPRECHSTUNDE]);
  ts.add([TASK_GERAETEVIDEOS]);
  ts.add([TASK_TERMINZETTEL, TASK_SYMBOLLEISTE]);
  ts.add([TASK_TERMINZETTEL, TASK_TESTS]);
  ts.add([TASK_FONTS, TASK_TERMINZETTEL]);
  ts.add([TASK_LOGO, TASK_TERMINZETTEL]);
  ts.add([TASK_KUNDE, TASK_LOGO]);
  ts.add([TASK_KOSTENVORANSCHLAG]);
  ts.add([TASK_TESTS, TASK_BUCHUNG]);

  if (
    document.getElementById("Betriebsstätten").checked &&
    !document.getElementById("Betriebsstätten").disabled
  ) {
    ts.add([TASK_NUTZER, TASK_BETRIEBSSTAETTEN]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_BANKDATEN]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_BSNR]);
    ts.add([TASK_KUNDE, TASK_BSNR]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_FACHGRUPPEN]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_BETRIEBSSTAETTEN_FARBE]);
    // Nutzer-Betriebsstaettenzuordnung
    ts.add([TASK_NUTZER, TASK_NUTZER_BETRIEBSSTAETTEN]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_NUTZER_BETRIEBSSTAETTEN]);
    // Standartrechnungsvorlagen einstellen
    ts.add([TASK_PRIVATRECHNUNG, TASK_PRIVATRECHNUNG_BETRIEBSSTAETTE]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_PRIVATRECHNUNG_BETRIEBSSTAETTE]);
  }
  if (
    document.getElementById("TI").checked &&
    !document.getElementById("TI").disabled
  ) {
    ts.add([TASK_ZOLLSOFT, TASK_TI]);
    ts.add([TASK_TI, TASK_TESTS]);
    // KIM
    ts.add([TASK_KUNDE, TASK_KIM]);
    ts.add([TASK_ZOLLSOFT, TASK_KIM]);
    ts.add([TASK_KIM, TASK_TESTS]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_KIM_BETRIEBSSTAETTEN]);
    ts.add([TASK_KIM, TASK_KIM_BETRIEBSSTAETTEN]);
    // eHBA
    ts.add([TASK_KUNDE, TASK_HBA]);
    ts.add([TASK_HBA, TASK_TESTS]);
  }
  // if (document.getElementById('KIM').checked && !document.getElementById('KIM').disabled) {
  //     ts.add([TASK_KUNDE, TASK_KIM]);
  //     ts.add([TASK_ZOLLSOFT, TASK_KIM]);
  //     ts.add([TASK_KIM, TASK_TESTS]);
  // }
  if (
    document.getElementById("BG").checked &&
    !document.getElementById("BG").disabled
  ) {
    ts.add([TASK_BG, TASK_BGRECHNUNG]);
    // Standartrechnungsvorlagen in den Betriebsstaetten hinterlegen
    ts.add([TASK_BG, TASK_BG_BETRIEBSSTAETTE]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_BG_BETRIEBSSTAETTE]);
  }
  if (
    document.getElementById("DALE-UV").checked &&
    !document.getElementById("DALE-UV").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_DALE_UV]);
    ts.add([TASK_KUNDE, TASK_DALE_U_LAUFENDE_NUMMER]);
    ts.add([TASK_DALE_UV, TASK_TESTS]);
    // Ansprechpartner in den Betriebsstaetten hinterlegen
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_DALE_UV_BETRIEBSSTAETTEN]);
    ts.add([TASK_NUTZER, TASK_DALE_UV_BETRIEBSSTAETTEN]);
    ts.add([TASK_KUNDE, TASK_DALE_UV_BETRIEBSSTAETTEN]);
  }
  // if (document.getElementById('eHBA').checked && !document.getElementById('eHBA').disabled) {
  //     ts.add([TASK_KUNDE, TASK_HBA]);
  //     ts.add([TASK_HBA, TASK_TESTS]);
  // }
  if (
    document.getElementById("HZV").checked &&
    !document.getElementById("HZV").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_HZV]);
    ts.add([TASK_HZV, TASK_TESTS]);
  }
  if (
    document.getElementById("Arbeitsplätze").checked &&
    !document.getElementById("Arbeitsplätze").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_AP_ERSTELLEN]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_AP_ERSTELLEN]);
    ts.add([TASK_KV_BEREICH, TASK_AP_ERSTELLEN]);

    ts.add([TASK_AP_ERSTELLEN, TASK_AP_SICHERN]);
    ts.add([TASK_SYMBOLLEISTE, TASK_AP_SICHERN]);
    ts.add([TASK_SCHULBESCHEINIGUNG, TASK_SYMBOLLEISTE]);
    ts.add([TASK_SCHULBESCHEINIGUNG, TASK_TESTS]);
    ts.add([TASK_ATTEST, TASK_SYMBOLLEISTE]);
    ts.add([TASK_ATTEST, TASK_TESTS]);
    ts.add([TASK_ANWESENHEIT, TASK_SYMBOLLEISTE]);
    ts.add([TASK_ANWESENHEIT, TASK_TESTS]);
    ts.add([TASK_KBV, TASK_SYMBOLLEISTE]);
    ts.add([TASK_DRUCKEINSTELLUNGEN, TASK_AP_SICHERN]);

    ts.add([TASK_BRIEFKOPF_HINTERGRUND, TASK_AP_SICHERN]);

    ts.add([TASK_AP_ERSTELLEN, TASK_ARBEITSPLATZGRUPPEN]);
    ts.add([TASK_TESTS, TASK_AP_SICHERN]);
  }
  if (
    document.getElementById("Nutzer").checked &&
    !document.getElementById("Nutzer").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_NUTZER]);
    ts.add([TASK_KUNDE, TASK_LANR]);
    ts.add([TASK_KUNDE, TASK_STEMPEL]);
    ts.add([TASK_KUNDE, TASK_UNTERSCHRIFT]);
    ts.add([TASK_NUTZER, TASK_FACHGRUPPEN]);
    ts.add([TASK_NUTZER, TASK_NUTZER_FARBEN]);
    // Nutzer-Betriebsstaettenzuordnung
    ts.add([TASK_NUTZER, TASK_NUTZER_BETRIEBSSTAETTEN]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_NUTZER_BETRIEBSSTAETTEN]);
    // Ordinationsgebühr
    ts.add([TASK_KUNDE, TASK_ORDINATIONSGEBUEHR]);
    ts.add([TASK_NUTZER, TASK_ORDINATIONSGEBUEHR]);
  }
  if (
    document.getElementById("KV-Connect").checked &&
    !document.getElementById("KV-Connect").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_KV_CONNECT]);
    ts.add([TASK_TI, TASK_KV_CONNECT]);
    ts.add([TASK_KV_CONNECT, TASK_TESTS]);
  }
  if (
    document.getElementById("Todos").checked &&
    !document.getElementById("Todos").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_TODOS]);
    ts.add([TASK_TODOS, TASK_TODO_RAUM_ZUORDNUNG]);
    ts.add([TASK_RAEUME, TASK_TODO_RAUM_ZUORDNUNG]);
    ts.add([TASK_KUNDE, TASK_TODO_RAUM_ZUORDNUNG]);
  }
  if (
    document.getElementById("Kalender").checked &&
    !document.getElementById("Kalender").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_KALENDER]);
    ts.add([TASK_KALENDER, TASK_TESTS]);
    ts.add([TASK_NUTZER, TASK_KALENDER]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_KALENDER]);
    ts.add([TASK_TODOS, TASK_KALENDER]);
    ts.add([TASK_KV_BEREICH, TASK_KALENDER]);
  }
  if (
    document.getElementById("OTK").checked &&
    !document.getElementById("OTK").disabled
  ) {
    ts.add([TASK_ZOLLSOFT, TASK_ARZT_DIREKT]);
    ts.add([TASK_ARZT_DIREKT, TASK_ARZT_DIREKT_PASSWORTLISTE]);
    ts.add([
      TASK_ARZT_DIREKT_AERZTE_REGISTRIEREN,
      TASK_ARZT_DIREKT_PASSWORTLISTE,
    ]);
    ts.add([TASK_ARZT_DIREKT, TASK_ARZT_DIREKT_AERZTE_REGISTRIEREN]);
    ts.add([TASK_GEB, TASK_ARZT_DIREKT_AERZTE_REGISTRIEREN]);
    ts.add([TASK_ARZT_DIREKT, TASK_TESTS]);
    ts.add([TASK_KUNDE, TASK_GEB]);
    ts.add([TASK_ARZT_DIREKT, TASK_ARZT_DIREKT_QR_CODE]);

    ts.add([TASK_ARZT_DIREKT, TASK_OTK]);
    ts.add([TASK_KALENDER, TASK_OTK]);
    ts.add([TASK_KUNDE, TASK_OTK]);
    ts.add([TASK_OTK, TASK_TESTS]);
  }
  if (
    document.getElementById("Drucker").checked &&
    !document.getElementById("Drucker").disabled
  ) {
    ts.add([TASK_DRUCKERZUWEISUNG]);
    ts.add([TASK_FORMULARE, TASK_DRUCKEINSTELLUNGEN]);
    ts.add([TASK_BRIEFVORLAGEN, TASK_DRUCKEINSTELLUNGEN]);
    ts.add([TASK_DRUCKEINSTELLUNGEN, TASK_TESTS]);
    ts.add([TASK_DRUCKERZUWEISUNG, TASK_PAPIER]);
  }
  if (
    document.getElementById("Arzeko").checked &&
    !document.getElementById("Arzeko").disabled
  ) {
    ts.add([TASK_ARZEKO]);
  }
  if (
    document.getElementById("DMP").checked &&
    !document.getElementById("DMP").disabled
  ) {
    ts.add([TASK_EINSTELLUNGEN_ZOLLSOFT, TASK_DMP]);
  }
  if (
    document.getElementById("ImpfDocNE").checked &&
    !document.getElementById("ImpfDocNE").disabled
  ) {
    ts.add([TASK_ZOLLSOFT, TASK_MODULE_IMPFDOCNE]);
    ts.add([TASK_MODULE_IMPFDOCNE, TASK_IMPFDOCNE]);
  }
  if (
    document.getElementById("Ust-Nr.").checked &&
    !document.getElementById("Ust-Nr.").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_UST_IDNR]);
  }
  if (
    document.getElementById("VSS").checked &&
    !document.getElementById("VSS").disabled
  ) {
    ts.add([TASK_ZOLLSOFT, TASK_ARZT_DIREKT]);
    ts.add([TASK_ARZT_DIREKT, TASK_ARZT_DIREKT_PASSWORTLISTE]);
    ts.add([
      TASK_ARZT_DIREKT_AERZTE_REGISTRIEREN,
      TASK_ARZT_DIREKT_PASSWORTLISTE,
    ]);
    ts.add([TASK_ARZT_DIREKT, TASK_ARZT_DIREKT_AERZTE_REGISTRIEREN]);
    ts.add([TASK_GEB, TASK_ARZT_DIREKT_AERZTE_REGISTRIEREN]);
    ts.add([TASK_ARZT_DIREKT, TASK_TESTS]);
    ts.add([TASK_KUNDE, TASK_GEB]);
    ts.add([TASK_ARZT_DIREKT_AERZTE_REGISTRIEREN, TASK_VSS_AERZTE_BESTAETIGEN]);
    ts.add([TASK_ARZT_DIREKT, TASK_VSS]);
    ts.add([TASK_VSS, TASK_TESTS]);
    ts.add([TASK_VSS, TASK_ARZT_DIREKT_PASSWORTLISTE]);
    ts.add([TASK_ARZT_DIREKT, TASK_VSS_KOPPLUNG]);
    ts.add([TASK_ARZT_DIREKT, TASK_ARZT_DIREKT_QR_CODE]);
  }
  if (
    document.getElementById("Aktionsketten").checked &&
    !document.getElementById("Aktionsketten").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_AKTIONSKETTEN]);
    ts.add([TASK_KARTEIEINTRAGSTYPEN, TASK_AKTIONSKETTEN]);
    ts.add([TASK_AKTIONSKETTEN, TASK_TESTS]);
    if (document.getElementById("Briefe").checked) {
      ts.add([TASK_BRIEFVORLAGEN, TASK_AKTIONSKETTEN]);
    }
    if (document.getElementById("DMP").checked) {
      ts.add([TASK_DMP, TASK_AKTIONSKETTEN]);
    }
    if (document.getElementById("E-Mail").checked) {
      ts.add([TASK_DMP, TASK_AKTIONSKETTEN]);
    }
    if (document.getElementById("Formulare").checked) {
      ts.add([TASK_FORMULARE, TASK_AKTIONSKETTEN]);
    }
    if (document.getElementById("GOÄ-Favoriten").checked) {
      ts.add([TASK_GOAE_FAVORITEN, TASK_AKTIONSKETTEN]);
    }
    if (document.getElementById("Sachkosten").checked) {
      ts.add([TASK_SACHKOSTEN, TASK_AKTIONSKETTEN]);
    }
    if (document.getElementById("Kalender").checked) {
      ts.add([TASK_KALENDER, TASK_AKTIONSKETTEN]);
    }
    if (document.getElementById("Todos").checked) {
      ts.add([TASK_TODOS, TASK_AKTIONSKETTEN]);
    }
  }
  if (
    document.getElementById("Sachkosten").checked &&
    !document.getElementById("Sachkosten").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_SACHKOSTEN]);
  }
  if (
    document.getElementById("Textbausteine").checked &&
    !document.getElementById("Textbausteine").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_TEXTBAUSTEINE]);
  }
  if (
    document.getElementById("Karteieintragstypen").checked &&
    !document.getElementById("Karteieintragstypen").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_KARTEIEINTRAGSTYPEN]);
    ts.add([TASK_ARZTBRIEF, TASK_KARTEIEINTRAGSTYPEN]);
    ts.add([TASK_BRIEFVORLAGEN, TASK_KARTEIEINTRAGSTYPEN]);
  }
  if (
    document.getElementById("EBM-Favoriten").checked &&
    !document.getElementById("EBM-Favoriten").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_EBM_FAVORITEN]);
  }
  if (
    document.getElementById("GOÄ-Favoriten").checked &&
    !document.getElementById("GOÄ-Favoriten").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_GOAE_FAVORITEN]);
    ts.add([TASK_ANALOGZIFFERN, TASK_GOAE_FAVORITEN]);
    // Analogziffern
    ts.add([TASK_KUNDE, TASK_ANALOGZIFFERN]);
  }
  if (
    document.getElementById("ICD-Favoriten").checked &&
    !document.getElementById("ICD-Favoriten").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_ICD_FAVORITEN]);
    // Hausdiagnosen
    // ts.add([TASK_KUNDE, TASK_HAUSDIAGNOSEN]);
  }
  if (
    document.getElementById("Selbstanmeldung").checked &&
    !document.getElementById("Selbstanmeldung").disabled
  ) {
    ts.add([TASK_NUTZER, TASK_SELBSTANMELDUNG]);
    ts.add([TASK_TODOS, TASK_SELBSTANMELDUNG]);
    ts.add([TASK_FORMULARE, TASK_SELBSTANMELDUNG]);
  }
  if (
    document.getElementById("Rechte").checked &&
    !document.getElementById("Rechte").disabled
  ) {
    ts.add([TASK_NUTZER, TASK_RECHTEVERWALTUNG]);
    ts.add([TASK_KUNDE, TASK_RECHTEVERWALTUNG]);
    ts.add([TASK_EMAIL_TOMEDO, TASK_RECHTEVERWALTUNG]); // kein "must"
    ts.add([TASK_RECHTEVERWALTUNG, TASK_TESTS]);
  }
  if (
    document.getElementById("Kassenbuch").checked &&
    !document.getElementById("Kassenbuch").disabled
  ) {
    ts.add([TASK_KASSENBUCH]);
  }
  // if (document.getElementById('Notruf').checked && !document.getElementById('Notruf').disabled) {
  //     ts.add([TASK_PRAXISNOTRUF]);
  // }
  if (
    document.getElementById("Hitpanel").checked &&
    !document.getElementById("Hitpanel").disabled
  ) {
    ts.add([TASK_SCHREIBER, TASK_HITPANEL]);
    ts.add([TASK_KUNDE, TASK_HITPANEL]);
    ts.add([TASK_HITPANEL, TASK_TESTS]);
  }
  if (
    document.getElementById("Starface").checked &&
    !document.getElementById("Starface").disabled
  ) {
    ts.add([TASK_UCC_CLIENT, TASK_UCC_KOPPLUNG]);
    ts.add([TASK_UCC_ANMELDUNG, TASK_UCC_KOPPLUNG]);
    ts.add([TASK_UCC_CLIENT, TASK_UCC_ANMELDUNG]);
    ts.add([TASK_UCC_KOPPLUNG, TASK_AP_SICHERN]);
    ts.add([TASK_UCC_KOPPLUNG, TASK_TESTS]);
  }
  if (
    document.getElementById("E-Mail").checked &&
    !document.getElementById("E-Mail").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_EMAIL_TOMEDO]);
    ts.add([TASK_KUNDE, TASK_EMAIL_MAIL]);
    ts.add([TASK_EMAIL_TOMEDO, TASK_TESTS]);
    ts.add([TASK_EMAIL_CLIENT]);
    ts.add([TASK_EMAIL_TOMEDO, TASK_EMNAIL_SIGNATUREN]);
    ts.add([TASK_EMAIL_MAIL, TASK_EMNAIL_SIGNATUREN]);
    ts.add([TASK_KUNDE, TASK_EMNAIL_SIGNATUREN]);
  }
  if (
    document.getElementById("Erinnerung").checked &&
    !document.getElementById("Erinnerung").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_TERMINERINNERUNG]);
    ts.add([TASK_EMAIL_TOMEDO, TASK_TERMINERINNERUNG]);
    ts.add([TASK_TERMINERINNERUNG, TASK_TESTS]);
  }
  // if (document.getElementById('Hausdiagnosen').checked && !document.getElementById('Hausdiagnosen').disabled) {
  //     ts.add([TASK_KUNDE, TASK_HAUSDIAGNOSEN]);
  // }
  if (
    document.getElementById("SMS").checked &&
    !document.getElementById("SMS").disabled
  ) {
    ts.add([TASK_ZOLLSOFT, TASK_SMS]);
    ts.add([TASK_SMS, TASK_TESTS]);
  }
  if (
    document.getElementById("Fax").checked &&
    !document.getElementById("Fax").disabled
  ) {
    ts.add([TASK_UCC_ANMELDUNG, TASK_FAX]);
    ts.add([TASK_FAX, TASK_TESTS]);
    ts.add([TASK_KUNDE, TASK_FAX]);
  }
  if (
    document.getElementById("Privatrezept").checked &&
    !document.getElementById("Privatrezept").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_PRIVATREZEPT]);
    ts.add([TASK_KUNDE, TASK_PVS]);
  }
  if (
    document.getElementById("Briefe").checked &&
    !document.getElementById("Briefe").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_BRIEFVORLAGEN]);
    ts.add([TASK_BRIEFKOPF, TASK_BRIEFVORLAGEN]);
    ts.add([TASK_KUNDE, TASK_BRIEFKOPF]);
    ts.add([TASK_KUNDE, TASK_ARZTBRIEF]);
    ts.add([TASK_BRIEFVORLAGEN, TASK_BRIEFKOPF_HINTERGRUND]);
    ts.add([TASK_ARZTBRIEF, TASK_BRIEFKOPF_HINTERGRUND]);
    ts.add([TASK_BRIEFKOPF, TASK_BRIEFKOPF_HINTERGRUND]);
    ts.add([TASK_BRIEFKOPF_HINTERGRUND, TASK_TESTS]);
    ts.add([TASK_FONTS, TASK_BRIEFVORLAGEN]);
    ts.add([TASK_FONTS, TASK_BRIEFVORLAGEN]);
    ts.add([TASK_BANKDATEN, TASK_PRIVATRECHNUNG]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_PRIVATRECHNUNG]);
    // Standartrechnungsvorlagen in den Betriebsstaetten hinterlegen
    ts.add([TASK_KUNDE, TASK_BANKDATEN]);
    ts.add([TASK_BANKDATEN, TASK_PRIVATRECHNUNG]);
    ts.add([TASK_PRIVATRECHNUNG, TASK_PRIVATRECHNUNG_BETRIEBSSTAETTE]);
    ts.add([TASK_BETRIEBSSTAETTEN, TASK_PRIVATRECHNUNG_BETRIEBSSTAETTE]);
    ts.add([TASK_PRIVATRECHNUNG, TASK_MAHNUNGEN]);
    ts.add([TASK_LOGO, TASK_BRIEFVORLAGEN]);
    ts.add([TASK_LOGO, TASK_MAHNUNGEN]);
    ts.add([TASK_LOGO, TASK_MAHNUNGEN]);
  }
  if (
    document.getElementById("Formulare").checked &&
    !document.getElementById("Formulare").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_FORMULARE]);
    ts.add([TASK_FORMULARE, TASK_SYMBOLLEISTE]);
    ts.add([TASK_FONTS, TASK_FORMULARE]);
    ts.add([TASK_FONTS, TASK_PRIVATRECHNUNG]);
  }
  if (
    document.getElementById("iPads").checked &&
    !document.getElementById("iPads").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_APPLE_ID]);
    ts.add([TASK_APPLE_ID, TASK_IPAD]);
    ts.add([TASK_IPAD_VPN, TASK_IPAD]);
    ts.add([TASK_VPN, TASK_IPAD_VPN]);
    ts.add([TASK_IPHONE_VPN, TASK_IPHONE]);
    ts.add([TASK_MOBIL, TASK_APPLE_ID]);
    ts.add([TASK_GEB, TASK_APPLE_ID]);
  }
  if (
    document.getElementById("iPhones").checked &&
    !document.getElementById("iPhones").disabled
  ) {
    ts.add([TASK_IPHONE_VPN, TASK_IPHONE]);
    ts.add([TASK_VPN, TASK_IPHONE_VPN]);
  }
  if (
    document.getElementById("Labore").checked &&
    !document.getElementById("Labore").disabled
  ) {
    ts.add([TASK_LABOR, TASK_LABOR_DFUE]);
    ts.add([TASK_KUNDE, TASK_LABOR]);
  }
  if (
    document.getElementById("Labormaschinen").checked &&
    !document.getElementById("Labormaschinen").disabled
  ) {
    ts.add([TASK_LABORMASCHINEN]);
  }
  if (
    document.getElementById("Doctolib").checked &&
    !document.getElementById("Doctolib").disabled
  ) {
    ts.add([TASK_EINSTELLUNGEN_ZOLLSOFT, TASK_DOCTOLIB_TOMEDO]);
    ts.add([TASK_DOCTOLIB, TASK_DOCTOLIB_KOPPLUNG]);
    ts.add([TASK_DOCTOLIB_CLIENT, TASK_DOCTOLIB_KOPPLUNG]);
  }
  if (
    document.getElementById("Räume").checked &&
    !document.getElementById("Räume").disabled
  ) {
    ts.add([TASK_RAEUME]);
  }
  if (
    document.getElementById("Spracherkennung").checked &&
    !document.getElementById("Spracherkennung").disabled
  ) {
    ts.add([TASK_ZOLLSOFT, TASK_SPRACHERKENNUNG]);
  }
  if (
    document.getElementById("Scanner").checked &&
    !document.getElementById("Scanner").disabled
  ) {
    ts.add([TASK_SCANNER, TASK_SCANNER_FARBIG]);
    ts.add([TASK_DATEIIMPORT]);
  }
  if (
    document.getElementById("Kameralogin").checked &&
    !document.getElementById("Kameralogin").disabled
  ) {
    ts.add([TASK_NUTZER, TASK_KAMERALOGIN]);
  }
  if (
    document.getElementById("Früherkennung").checked &&
    !document.getElementById("Früherkennung").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_FRUEHERKENNUNG]);
    ts.add([TASK_FRUEHERKENNUNG, TASK_SYMBOLLEISTE]);
  }
  if (
    document.getElementById("eHKS/FEK/oKFE").checked &&
    !document.getElementById("eHKS/FEK/oKFE").disabled
  ) {
    ts.add([TASK_HKS]);
  }
  // if (document.getElementById('Analogziffern').checked && !document.getElementById('Analogziffern').disabled) {
  //     ts.add([TASK_KUNDE, TASK_ANALOGZIFFERN]);
  // }
  if (
    document.getElementById("OPS-Favoriten").checked &&
    !document.getElementById("OPS-Favoriten").disabled
  ) {
    ts.add([TASK_KUNDE, TASK_OPS]);
  }

  return ts;
}
function speichern() {
  let todo_list = "";
  let kunde_list = "";
  let zollsoft_list = "";
  let labor_list = "";
  let schreiber_list = "";
  let docto_list = "";
  let notizen_list = "";
  let list = "";

  for (const task of addRulesAndReturnTopsort().topsort()) {
    todo_list += `- [ ] ${task}\n`;
    if (addRulesAndReturnTopsort().dep(task).includes(TASK_KUNDE)) {
      kunde_list += `* ${task}\n`;
    }
  }
  for (const task of addRulesAndReturnTopsort().succ(TASK_KUNDE)) {
    //let tsKunde = Object.create(TopSort);
    //kunde_list += `* ${task}\n`;
    //for (i in topsort().regeln) {
    //  console.log(topsort().regeln[i]);
    //}
  }
  for (const task of addRulesAndReturnTopsort().succ(TASK_ZOLLSOFT)) {
    zollsoft_list += `- [ ] ${task}\n`;
  }
  for (const task of addRulesAndReturnTopsort().succ(TASK_LABOR)) {
    labor_list += `- [ ] ${task}\n`;
  }
  for (const task of addRulesAndReturnTopsort().succ(TASK_SCHREIBER)) {
    schreiber_list += `- [ ] ${task}\n`;
  }
  for (const task of addRulesAndReturnTopsort().succ(TASK_DOCTOLIB)) {
    docto_list += `- [ ] ${task}\n`;
  }
  for (const [key, value] of notizen().entries()) {
    notizen_list += `* ${key}: ${value}\n`;
  }

  if (todo_list != "") list += `## TODO:\n${todo_list}\n`;
  if (kunde_list != "") list += `## Kundengespräch:\n${kunde_list}\n`;
  if (zollsoft_list != "")
    list += `## Zollsoft kontaktieren:\n${zollsoft_list}\n`;
  if (labor_list != "") list += `## Labor kontaktieren:\n${labor_list}\n`;
  if (schreiber_list != "")
    list += `## Hr. Schreiber kontaktieren:\n${schreiber_list}\n`;
  if (docto_list != "") list += `## Doctolib kontaktieren:\n${docto_list}\n`;
  if (notizen_list != "") list += `## Notizen:\n${notizen_list}\n`;

  download(`${document.getElementById("filename").value}.md`, list);
}

function download(filename, text) {
  const fileBlob = new Blob([text], { type: "application/octet-binary" });
  const url = URL.createObjectURL(fileBlob);

  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);

  if (document.createEvent) {
    const event = document.createEvent("MouseEvents");
    event.initEvent("click", true, true);
    link.dispatchEvent(event);
  } else {
    link.click();
  }

  // Deallocate resources
  if (URL.revokeObjectURL) URL.revokeObjectURL(url);
}

// logic
const TopSort = {
  regeln: [],
  arr: [],
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
      if (
        !res.includes(this.regeln[i][1]) &&
        typeof this.regeln[i][1] !== "undefined"
      ) {
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
      if (dep.every((val) => res.includes(val))) {
        res.push(tasks[i]);
        tasks.splice(i, 1);
        i = 0;
      } else {
        ++i;
      }
    }
    return res;
  },
  // returns all dependencies of one task
  dep: function (task) {
    let res = [];
    for (var i = 0; i < this.regeln.length; ++i) {
      if (this.regeln[i][1] === task) {
        res.push(this.regeln[i][0]);
      }
    }
    return res;
  },
  // returns a list of all successors of a task
  succ: function (task) {
    let res = new Set();
    for (var i = 0; i < this.regeln.length; ++i) {
      if (this.regeln[i][0] === task) {
        res.add(this.regeln[i][1]);
      }
    }
    return res;
  },
  clear: function () {
    this.regeln = [];
  },
};
