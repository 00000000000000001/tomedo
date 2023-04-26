// check on reload
neugruendungClick();
privatpraxisClick();

// listeners
document.getElementById('Neugründung').addEventListener("click", neugruendungClick, false);
document.getElementById('Privatpraxis').addEventListener("click", privatpraxisClick, false);

// callbackfunctions
function neugruendungClick() {
    document.getElementById('KV-Connect').disabled = document.getElementById('Neugründung').checked || document.getElementById('Privatpraxis').checked; // Überschneidungen mit anderen callbackfunctions müssen verodert werden
}
function privatpraxisClick() {
    document.getElementById('TI').disabled = document.getElementById('Privatpraxis').checked;
    // document.getElementById('KIM').disabled = document.getElementById('Privatpraxis').checked;
    document.getElementById('KV-Connect').disabled = document.getElementById('Privatpraxis').checked || document.getElementById('Neugründung').checked; // Überschneidungen mit anderen callbackfunctions müssen verodert werden
    document.getElementById('DMP').disabled = document.getElementById('Privatpraxis').checked;
    document.getElementById('EBM-Favoriten').disabled = document.getElementById('Privatpraxis').checked;
    document.getElementById('HZV').disabled = document.getElementById('Privatpraxis').checked;
    document.getElementById('eHKS/FEK/oKFE').disabled = document.getElementById('Privatpraxis').checked;
}