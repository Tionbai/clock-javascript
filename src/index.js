const clock = document.getElementById('clock');

let time;

const getCurrentTime = () => {
  [time] = new Date().toTimeString().split(' ');
  clock.innerHTML = time;
};

getCurrentTime();
setInterval(() => {
  getCurrentTime();
}, 1000);
