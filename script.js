document.getElementById("opdForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const department = document.getElementById("department").value;
  const date = document.getElementById("date").value;

  const ticket = {
    name,
    age,
    department,
    date,
    id: 'OPD-' + Math.floor(Math.random() * 100000)
  };

  localStorage.setItem(ticket.id, JSON.stringify(ticket));

  document.getElementById("ticketOutput").innerHTML = `
    <div class="card">
      <h3>Ticket Booked</h3>
      <p>Name: ${ticket.name}</p>
      <p>Age: ${ticket.age}</p>
      <p>Department: ${ticket.department}</p>
      <p>Date: ${ticket.date}</p>
      <p>ID: ${ticket.id}</p>
      <button onclick="downloadTicket('${ticket.id}')">Download Ticket</button>
    </div>
  `;
});

function downloadTicket(id) {
  const ticket = JSON.parse(localStorage.getItem(id));
  const content = `
    Ticket ID: ${ticket.id}\n
    Name: ${ticket.name}\n
    Age: ${ticket.age}\n
    Department: ${ticket.department}\n
    Date: ${ticket.date}
  `;
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${ticket.id}.txt`;
  link.click();
}

document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("appName").value;
  const doctor = document.getElementById("appDoctor").value;
  const time = document.getElementById("appTime").value;

  const appointment = {
    name,
    doctor,
    time,
    id: 'APT-' + Math.floor(Math.random() * 100000)
  };

  localStorage.setItem(appointment.id, JSON.stringify(appointment));
  alert(`Appointment booked with ${doctor} at ${time}`);
});
