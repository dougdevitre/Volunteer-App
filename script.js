function calculateTotals() {
    let totalHours = 0;
    let totalFood = 0;
    let totalPeople = 0;

    const hoursInputs = document.querySelectorAll('.hours');
    const foodInputs = document.querySelectorAll('.food');
    const peopleInputs = document.querySelectorAll('.people');

    hoursInputs.forEach(input => totalHours += Number(input.value));
    foodInputs.forEach(input => totalFood += Number(input.value));
    peopleInputs.forEach(input => totalPeople += Number(input.value));

    document.getElementById('totalHours').textContent = totalHours;
    document.getElementById('totalFood').textContent = totalFood;
    document.getElementById('totalPeople').textContent = totalPeople;

    const firstNames = Array.from(document.querySelectorAll('.first-name')).map(input => input.value).filter(name => name);
    const lastNames = Array.from(document.querySelectorAll('.last-name')).map(input => input.value).filter(name => name);

    const summary = `In total, volunteers worked ${totalHours} hours, processed ${totalFood} pounds of food, and helped ${totalPeople} people.`;
    const namesSummary = firstNames.length > 0 ? ` Volunteers: ${firstNames.join(', ')} ${lastNames.join(', ')}.` : '';
    document.getElementById('summary').textContent = summary + namesSummary;
}