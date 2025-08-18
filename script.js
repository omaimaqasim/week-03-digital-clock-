 // ✅ UPDATE CURRENT TIME
    function updateTime() {
      const now = new Date();
      const hour = now.getHours().toString().padStart(2, "0");
      const min = now.getMinutes().toString().padStart(2, "0");
      const sec = now.getSeconds().toString().padStart(2, "0");

      document.getElementById("time_box").textContent = `${hour} : ${min} : ${sec}`;
    }

    // ✅ UPDATE CURRENT DATE
    function updateDate() {
      const now = new Date();
      const day = now.getDate().toString().padStart(2, "0");
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const monthName = months[now.getMonth()];
      const year = now.getFullYear();

      document.getElementById("date_box").textContent = `${day} - ${monthName} ${year}`;
    }

    // ✅ INITIAL DISPLAY
    updateTime();
    updateDate();

    // 🔁 UPDATE TIME EVERY SECOND
    setInterval(updateTime, 1000);