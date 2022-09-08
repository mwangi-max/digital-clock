const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]



const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const seconds = document.querySelector('.seconds');
const ampm = document.querySelector('ampm');
const day = document.querySelector('.date');

const todaysDate = new Date().getDate();
const todaysDay = weekdays[new Date().getDay()];
const todaysMonth = months[new Date().getMonth()];
const todaysYear = new Date().getFullYear();

day.textContent = `${todaysDay}, ${todaysDate}, ${todaysMonth} ${todaysYear}`

function updateClock(){
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let secs = new Date().getSeconds();

  hr=hr<10 ? '0'+hr:hr;
  min=min<10 ? '0'+ min: min;
  secs=secs<10 ? '0'+ secs:secs;

  //  if(hr > 12){
  //   hr = hr - 12;
  //   ampm.textContent = 'PM';
  // }

  hour.textContent = hr;
  minute.textContent = min;
  seconds.textContent = secs;

 






  let countdown = setInterval(() => {
    updateClock();
  }, 1000);
}
updateClock();