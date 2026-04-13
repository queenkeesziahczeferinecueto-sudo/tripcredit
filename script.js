let seat = "";
let price = 0;

function showPage(page) {
  document.querySelectorAll('.container > div').forEach(div => {
    div.classList.add('hidden');
  });

  document.getElementById(page).classList.remove('hidden');
}

function selectSeat(btn) {

  document.querySelectorAll(".seat").forEach(s => {
    s.classList.remove("selected");
  });

  btn.classList.add("selected");
  seat = btn.innerText;

}

function goSeat() {

  let dest = document.getElementById("destination").value.toLowerCase();

  if (!dest) {
    alert("Enter destination!");
    return;
  }

  if (dest.includes("cebu")) price = 3000;
  else if (dest.includes("boracay")) price = 3500;
  else if (dest.includes("davao")) price = 4000;
  else if (dest.includes("singapore")) price = 12000;
  else if (dest.includes("japan")) price = 18000;
  else price = 8000;

  showPage('seat');
}

function goPayment() {

  if (!seat) {
    alert("Select a seat!");
    return;
  }

  showPage('payment');
}

function generateTicket() {

  let name = document.getElementById("name").value;
  let dest = document.getElementById("destination").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let plan = document.getElementById("plan").value;

  let down = price * 0.2;
  let balance = price - down;

  showPage('ticketPage');

  document.getElementById("ticket").innerHTML = `
    <h3>✈️ SKYBOOK AIRLINES</h3>
    ---------------------------
    Name: ${name}
    Destination: ${dest}
    Date: ${date}
    Time: ${time}
    Seat: ${seat}
    ---------------------------
    Price: ₱${price}
    Down Payment: ₱${down}
    Plan: ${plan}
    Balance: ₱${balance}
    ---------------------------
    💳 Book Now, Pay Later
    <div class="barcode"></div>
  `;
}
