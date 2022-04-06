const updateTime = () => {
  const hourEL = document.querySelector('#hour');
  const minuteEL = document.querySelector('#minute');
  const secondEL = document.querySelector('#second');

  const d = new Date();

  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  const year = d.getFullYear();

  if (hours >= 0 && hours <= 9) { hours = `0${hours}`; }
  if (minutes >= 0 && minutes <= 9) { minutes = `0${minutes}`; }
  if (seconds >= 0 && seconds <= 9) { seconds = `0${seconds}`; }
  if (date >= 0 && date <= 9) { date = `0${date}`; }
  if (month >= 0 && month <= 9) { month = `0${month}`; }

  hourEL.innerText = hours;
  minuteEL.innerText = minutes;
  secondEL.innerText = seconds;

  const dateEl = document.querySelector('#date');
  dateEl.innerText = `${date}.${month}.${year}`;

  const dayEl = document.querySelector('#day');
  const daynumber = d.getDay();
  let day = '';

  switch (daynumber) {
    case 0: day = 'вс'; break;
    case 1: day = 'пн'; break;
    case 2: day = 'вт'; break;
    case 3: day = 'ср'; break;
    case 4: day = 'чт'; break;
    case 5: day = 'пт'; break;
    case 6: day = 'сб'; break;
  }

  dayEl.innerText = day;
};

window.addEventListener('load', () => {
  updateTime();
  setInterval(updateTime, 1000);
});

export {updateTime};
