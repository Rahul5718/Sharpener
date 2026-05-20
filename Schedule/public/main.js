document.addEventListener('DOMContentLoaded', fetchScheduleData);

const slotsContainer = document.getElementById('slots-container');
const bookingsDashboard = document.getElementById('bookings-dashboard');
const bookingModal = document.getElementById('bookingModal');
const overlay = document.getElementById('overlay');
const bookingForm = document.getElementById('bookingForm');

async function fetchScheduleData() {
    try {
        const response = await fetch('/slots');
        const data = await response.json();
        
        renderSlots(data.slots);
        renderDashboard(data.bookings);
    } catch (err) {
        console.log(err);
    }
}

function renderSlots(slots) {
    slotsContainer.innerHTML = '';
    slots.forEach(slot => {
        const div = document.createElement('div');
        div.className = `slot-card ${slot.available === 0 ? 'disabled' : ''}`;
        div.innerHTML = `
            <strong>${slot.time}</strong>
            <span>${slot.available} Available</span>
        `;
        if (slot.available > 0) {
            div.onclick = () => openModal(slot.time);
        }
        slotsContainer.appendChild(div);
    });
}

function renderDashboard(bookings) {
    bookingsDashboard.innerHTML = '';
    if(bookings.length === 0) {
        bookingsDashboard.innerHTML = '<li>No bookings scheduled yet.</li>';
        return;
    }
    bookings.forEach(b => {
        const li = document.createElement('li');
        li.textContent = `${b.name} (${b.email}) registered for ${b.time}`;
        bookingsDashboard.appendChild(li);
    });
}

function openModal(time) {
    document.getElementById('selectedTime').value = time;
    document.getElementById('modalTitle').textContent = `Book Slot for ${time}`;
    bookingModal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    bookingModal.style.display = 'none';
    overlay.style.display = 'none';
    bookingForm.reset();
}

bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const payload = {
        time: document.getElementById('selectedTime').value,
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value
    };

    try {
        const response = await fetch('/api/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            closeModal();
            fetchScheduleData(); // Refresh UI layout & dashboard
        } else {
            const errData = await response.json();
            alert(errData.message || 'Error executing booking.');
        }
    } catch (err) {
        console.error('Submission error:', err);
    }
});