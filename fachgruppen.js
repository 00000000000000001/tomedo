// check on reload
gynaekologieClick();
urologieClick();
psychiatrieClick();
diabetologieClick();
gastroenterologieClick();
orthopädieClick();
chirurgieClick();
dermatologieClick();
innereClick();
kardiologieClick();
kinderClick();

// listeners
document.getElementById('Gynäkologie').addEventListener("click", gynaekologieClick, false);
document.getElementById('Urologie').addEventListener("click", urologieClick, false);
document.getElementById('Psychiatrie').addEventListener("click", psychiatrieClick, false);
document.getElementById('Diabetologie').addEventListener("click", diabetologieClick, false);
document.getElementById('Gastroenterologie').addEventListener("click", gastroenterologieClick, false);
document.getElementById('Orthopädie').addEventListener("click", orthopädieClick, false);
document.getElementById('Chirurgie').addEventListener("click", chirurgieClick, false);
document.getElementById('Dermatologie').addEventListener("click", dermatologieClick, false);
document.getElementById('Innere').addEventListener("click", innereClick, false);
document.getElementById('Kardiologie').addEventListener("click", kardiologieClick, false);
document.getElementById('Kinder').addEventListener("click", kinderClick, false);

// callbackfunctions
// Überschneidungen mit anderen callbackfunctions müssen verodert werden
function gynaekologieClick() {
    document.getElementById('eHKS/FEK/oKFE').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Gastroenterologie').checked || document.getElementById('Dermatologie').checked;
    document.getElementById('Früherkennung').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Urologie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Gastroenterologie').checked || document.getElementById('Dermatologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked || document.getElementById('Kinder').checked;
    document.getElementById('DMP').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Psychiatrie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked;
}
function urologieClick() {
    document.getElementById('Früherkennung').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Urologie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Gastroenterologie').checked || document.getElementById('Dermatologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked || document.getElementById('Kinder').checked;
}
function psychiatrieClick() {
    document.getElementById('DMP').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Psychiatrie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked;
}
function diabetologieClick() {
    document.getElementById('DMP').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Psychiatrie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked;
    document.getElementById('Früherkennung').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Urologie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Gastroenterologie').checked || document.getElementById('Dermatologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked || document.getElementById('Kinder').checked;
}
function gastroenterologieClick() {
    document.getElementById('eHKS/FEK/oKFE').checked = document.getElementById('Gastroenterologie').checked;
    document.getElementById('Früherkennung').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Urologie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Gastroenterologie').checked || document.getElementById('Dermatologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked || document.getElementById('Kinder').checked;
}
function orthopädieClick() {
    document.getElementById('BG').checked = document.getElementById('Orthopädie').checked || document.getElementById('Chirurgie').checked;
    document.getElementById('DALE-UV').checked = document.getElementById('Orthopädie').checked || document.getElementById('Chirurgie').checked;
}
function chirurgieClick() {
    document.getElementById('BG').checked = document.getElementById('Orthopädie').checked || document.getElementById('Chirurgie').checked;
    document.getElementById('DALE-UV').checked = document.getElementById('Orthopädie').checked || document.getElementById('Chirurgie').checked;
}
function dermatologieClick() {
    document.getElementById('eHKS/FEK/oKFE').checked = document.getElementById('Dermatologie').checked;
    document.getElementById('Früherkennung').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Urologie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Gastroenterologie').checked || document.getElementById('Dermatologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked || document.getElementById('Kinder').checked;
}
function innereClick() {
    document.getElementById('DMP').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Psychiatrie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked;
    document.getElementById('HZV').checked = document.getElementById('Innere').checked;
    document.getElementById('Früherkennung').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Urologie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Gastroenterologie').checked || document.getElementById('Dermatologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked || document.getElementById('Kinder').checked;
}
function kardiologieClick() {
    document.getElementById('DMP').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Psychiatrie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked;
}
function kinderClick() {
    document.getElementById('Früherkennung').checked = document.getElementById('Gynäkologie').checked || document.getElementById('Urologie').checked || document.getElementById('Diabetologie').checked || document.getElementById('Gastroenterologie').checked || document.getElementById('Dermatologie').checked || document.getElementById('Innere').checked || document.getElementById('Kardiologie').checked || document.getElementById('Kinder').checked;
}