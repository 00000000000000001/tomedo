document.getElementById('alle_markieren').addEventListener("click", alleMarkieren, false);
document.getElementById('keine_markieren').addEventListener("click", keineMarkieren, false);

function alleMarkieren() {
    let checkboxes = document.getElementById('checkboxes').querySelectorAll('input');
    for (const cb of checkboxes) {
        cb.checked = true;
    }
}

function keineMarkieren() {
    let checkboxes = document.getElementById('checkboxes').querySelectorAll('input');
    for (const cb of checkboxes) {
        cb.checked = false;
    }
}