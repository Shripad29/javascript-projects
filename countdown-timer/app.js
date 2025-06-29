const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  
const updateCountDown = (deadline) => {
  const currentTime = new Date();
  const timeDifference = deadline - currentTime; // miliseconds

  // calculate days, mins, hours, secs from time difference
  let calSec = Math.floor(timeDifference / 1000) % 60;
  let calMins = Math.floor(timeDifference / 1000 / 60) % 60;
  let calHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  let calDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);



  days.textContent = formatTime(calDays);
  hours.textContent = formatTime(calHours);
  mins.textContent = formatTime(calMins);
  secs.textContent = formatTime(calSec);

};

const countDown = (targetDate) => {
  setInterval(() => updateCountDown(targetDate), 1000);
};

const targetDate = new Date("July 01 2025 07:00");
countDown(targetDate);
