// Funkcija za prikazovanje obrazca
function showForm(formId) {
    // Skrij vse obrazce
    document.querySelectorAll('.form-container').forEach(function (form) {
        form.style.display = 'none';
    });
    // Prikaz izbranega obrazca
    document.getElementById(formId).style.display = 'block';
}

// Funkcija za obdelavo vstavljanja
function handleInsert(event) {
    event.preventDefault();
    const rowValue = document.getElementById('rowValue').value;
    const columnValue = document.getElementById('columnValue').value;
    console.log('Vstavi:', rowValue, columnValue);
    // Tukaj dodajte logiko za pošiljanje podatkov na strežnik ali nadaljnjo obdelavo
}

// Funkcija za obdelavo modifikacije
function handleModify(event) {
    event.preventDefault();
    // Tukaj dodajte logiko za obdelavo modifikacije
}

// Funkcija za obdelavo filtriranja
function handleFilter(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    console.log('Filter:', date, time);
    // Tukaj dodajte logiko za filtriranje podatkov
}

// Funkcija za obdelavo poizvedb
function handleQuery(event) {
    event.preventDefault();
    const customQuery = document.getElementById('customQuery').value;
    console.log('Poizvedba:', customQuery);
    // Tukaj dodajte logiko za izvajanje uporabniško definiranih poizvedb
}

// Dodajanje poslušalcev dogodkov
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('insertForm').addEventListener('submit', handleInsert);
    document.getElementById('modifyForm').addEventListener('submit', handleModify);
    document.getElementById('filterForm').addEventListener('submit', handleFilter);
    document.getElementById('queryForm').addEventListener('submit', handleQuery);
});


// Funkcija za prikazovanje obrazca
function showForm(formId) {
    document.querySelectorAll('.form-container').forEach(function (form) {
        form.style.display = 'none';
    });
    document.getElementById(formId).style.display = 'block';
}
