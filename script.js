document.getElementById('hoursForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const hours = document.getElementById('hours').value;

    const table = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const dateCell = newRow.insertCell(1);
    const hoursCell = newRow.insertCell(2);

    nameCell.textContent = name;
    dateCell.textContent = date;
    hoursCell.textContent = hours;

    document.getElementById('hoursForm').reset();
});
