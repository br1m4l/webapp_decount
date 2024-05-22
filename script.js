const dateVI = new Date('2025-06-01T00:00:00');
const dateVII = new Date('2027-06-01T00:00:00');
const dateVIII = new Date('2030-06-01T00:00:00');
const startDate = new Date('2023-03-01T00:00:00'); // Date de départ

function updateCountdown(element, targetDate) {
    const now = new Date();
    const timeRemaining = targetDate - now;

    if (timeRemaining < 0) {
        element.innerHTML = 'EXPIRED';
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    element.innerHTML = `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes`;
}

function calculateElapsedTime(element, startDate) {
    const now = new Date();
    const elapsedTime = now - startDate;
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    element.innerHTML = `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes`;
}

setInterval(() => {
    updateCountdown(document.getElementById('countdown1'), dateVI);
    updateCountdown(document.getElementById('countdown2'), dateVII);
    updateCountdown(document.getElementById('countdown3'), dateVIII);
    calculateElapsedTime(document.getElementById('elapsed-time'), startDate);
}, 1000);
