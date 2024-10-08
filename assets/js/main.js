const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const lunchDay = new Date(`Novemeber 29 ${currentYear} 08:00:00 GMT+02:00`);

//update Countdowntime
function updateCountdown() {
  const currentTime = new Date();
  const diff = lunchDay - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d <10 ? '0' + d : d;
  hours.innerHTML = h <10 ? '0' + h : h;
  minutes.innerHTML = m <10 ? '0' + m : m;
  seconds.innerHTML = s <10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);
