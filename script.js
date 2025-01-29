function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

 
  let ampm = hours >= 12 ? "PM" : "AM";

  
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  
  // Add leading zero if needed
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("time").textContent = formattedTime;
}

// Update time every second
setInterval(updateTime, 1000);

// Set time immediately on page load
updateTime();
