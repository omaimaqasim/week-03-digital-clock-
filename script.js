// 🌟 DIGITAL CLOCK PROJECT 🌟
// ---------------------------
// This script updates Time ⏰, Date 📅, and Greeting 👋 dynamically.

// ---------------------------
// ✅ UPDATE CURRENT TIME
// ---------------------------
function updateTime() {
  const now = new Date(); // Get the current date and time

  // --- HOURS ---
  let hour = now.getHours();                  // Get hours (0–23)
  let ampm = hour >= 12 ? "PM" : "AM";        // Decide AM or PM
  hour = hour % 12;                           // Convert 24 → 12-hour format
  hour = hour === 0 ? 12 : hour;              // Replace 0 with 12
  hour = hour.toString().padStart(2, "0");    // Show 2 digits

  // --- MINUTES ---
  let min = now.getMinutes().toString().padStart(2, "0");

  // --- SECONDS ---
  let sec = now.getSeconds().toString().padStart(2, "0");

  // --- FINAL TIME OUTPUT ---
  document.getElementById("time_box").textContent =
    `${hour} : ${min} : ${sec} ${ampm}`;
}

// ---------------------------
// ✅ GREETING MESSAGE
// ---------------------------
function greeting() {
  const now = new Date();
  const hour = now.getHours();

  let greeting = document.querySelector(".greeting");

  if (hour >= 5 && hour < 12) {
    greeting.innerHTML = "🌞 Good Morning";
  }
  else if (hour >= 12 && hour < 17) {
    greeting.innerHTML = "☀️ Good Afternoon";
  }
  else if (hour >= 17 && hour < 21) {
    greeting.innerHTML = "🌇 Good Evening";
  }
  else {
    greeting.innerHTML = "🌙 Good Night";
  }
}

// ---------------------------
// ✅ UPDATE CURRENT DATE
// ---------------------------
function updateDate() {
  const now = new Date(); // Get today’s date

  // --- DAY ---
  const day = now.getDate().toString().padStart(2, "0");

  // --- MONTH (array of names) ---
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = months[now.getMonth()];

  // --- YEAR ---
  const year = now.getFullYear();

  // --- FINAL DATE OUTPUT ---
  document.getElementById("date_box").textContent =
    `${day} - ${monthName} ${year}`;
}

// ---------------------------
// ✅ INITIAL CALLS
// ---------------------------
updateTime();   // Show current time on page load
updateDate();   // Show current date on page load
greeting();     // Show greeting on page load

// ---------------------------
// ✅ AUTO UPDATES
// ---------------------------
setInterval(updateTime, 1000); // Update time every second

// add event to dark mode

let dark_lightmode = document.querySelector(".darkMode")
let darkModeBtn = document.querySelector(".darkMode i")
dark_lightmode.addEventListener("click",()=>{

    // If sun → change to moon
  if (darkModeBtn.classList.contains("hgi-sun-02")) {
    darkModeBtn.classList.remove("hgi-sun-02");
    darkModeBtn.classList.add("hgi-moon-02");
       document.body.style.backgroundColor = "black"
  } 
  // If moon → change back to sun
  else {
    darkModeBtn.classList.remove("hgi-moon-02");
    darkModeBtn.classList.add("hgi-sun-02");
    document.body.style.backgroundColor = "white"
  }

})
