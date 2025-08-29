// ---------------------------
// ✅ UPDATE CURRENT TIME
// ---------------------------
function updateTime() {
  const now = new Date();

  let hour = now.getHours();
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour === 0 ? 12 : hour;
  hour = hour.toString().padStart(2, "0");

  let min = now.getMinutes().toString().padStart(2, "0");
  let sec = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("time_box").textContent =
    `${hour} : ${min} : ${sec} ${ampm}`;
}

// ---------------------------
// ✅ GREETING
// ---------------------------
function greeting() {
  const now = new Date();
  const hour = now.getHours();

  let greeting = document.querySelector(".greeting");

  if (hour >= 5 && hour < 12) {
    greeting.innerHTML = "🌞 Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting.innerHTML = "☀️ Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting.innerHTML = "🌇 Good Evening";
  } else {
    greeting.innerHTML = "🌙 Good Night";
  }
}

// ---------------------------
// ✅ UPDATE DATE
// ---------------------------
function updateDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();

  document.getElementById("date_box").textContent =
    `${day} - ${monthName} ${year}`;
}

// ---------------------------
// ✅ INITIAL CALLS
// ---------------------------
updateTime();
updateDate();
greeting();

// ---------------------------
// ✅ AUTO UPDATES
// ---------------------------
setInterval(updateTime, 1000);

// ---------------------------
// ✅ DARK/LIGHT TOGGLE
// ---------------------------
let dark_lightmode = document.querySelector(".darkMode");
let darkModeBtn = document.querySelector(".darkMode i");

dark_lightmode.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  darkModeBtn.classList.toggle("hgi-sun-02");
  darkModeBtn.classList.toggle("hgi-moon-02");
});
