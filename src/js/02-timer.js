//! Таймер зворотнього відліку

//* Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.
//* Такий таймер може використовуватися у блогах та інтернет-магазинах, сторінках реєстрації подій, під час тех. обслуговування

//! Бібліотека flatpickr
//?     npm i flatpickr --save
//* Використовуй цю бібліотеку, щоб дозволити користувачеві кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу.
//* Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

//? Описаний в документації
// import flatpickr from "flatpickr";
//? Додатковий імпорт стилів
// import "flatpickr/dist/flatpickr.min.css";

//* Бібліотека очікує, що її ініціалізують на елементі input[type="text"], тому ми додали до HTML документу поле input#datetime-picker
//            <input type="text" id="datetime-picker" />

//* Другим аргументом ф-ції flatpickr(selector, options) можна передати необов'язковий об'єкт параметрів.
//* Ми підготували об'єкт, який потрібен для виконання завдання. Розберися, за що відповідає кожна властивість в документації «Options», і використовуй його у своєму коді.

//! Вибір дати
//* Метод onClose() з об'єкта параметрів викликається щоразу під час закриття елемента інтерфейсу, який створює flatpickr.
//* Саме у ньому варто обробляти дату, обрану користувачем. Параметр selectedDates - це масив обраних дат, тому ми беремо перший елемент.
//*   - Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом "Please choose a date in the future".
//*   - Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає активною.
//*   - Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату в майбутньому.
//*   - Натисканням на кнопку «Start» починається відлік часу до обраної дати з моменту натискання.

//! Відлік часу
//* Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду, скільки часу залишилось до вказаної дати, і оновлювати інтерфейс таймера,
//* показуючи 4 цифри: дні, години, хвилини і секунди у форматі xx:xx:xx:xx.
//*   - К-сть днів може складатися з більше, ніж 2-ох цифр.
//*   - Таймер повинен зупинятися, коли дійшов до кінцевої дати, тобто 00:00:00:00

//* Для підрахунку значень використовуй готову ф-цію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.

// function convertMs(ms) {
//   //* Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   //* Remaining days
//   const days = Math.floor(ms / day);
//   //* Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   //* Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   //* Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
// console.log(convertMs(2000)); //* {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); //* {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); //* {days: 0, hours: 6 minutes: 42, seconds: 20}

//! Форматування часу
//* Ф-ція convertMs() повертає об'єкт з розрахованим часом, що залишився до кінцевої дати.
//* Зверни увагу, що вона не форматує результат. Тобто, якщо залишилося 4 хв або будь-якої іншої складової часу, то ф-ція поверне 4, а не 04.
//* В інтерфейсі таймера необхідно додавати 0, якщо в числі менше 2-ох символів.
//* Напиши ф-цію addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення.

//! Бібліотека повідомлень
//?    npm i notiflix
//* Для відображення повідомлень користувачеві, замість window.alert(), використовуй бібліотеку notiflix.

//! ---------------------------   ВАРІАНТ 4   -------------------------------

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const $startButton = document.querySelector('button[data-start]');
// const $resetButton = document.querySelector('button[data-reset]');
// const $inputDate = document.querySelector('#datetime-picker');
// const $timerValues = {
//   days: document.querySelector('span[data-days]'),
//   hours: document.querySelector('span[data-hours]'),
//   minutes: document.querySelector('span[data-minutes]'),
//   seconds: document.querySelector('span[data-seconds]'),
// };

// let timerInterval;
// let currentDate = Date.now();
// let timeLeft = 0;
// let selectedDate = 0;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (Date.parse(selectedDates[0]) < currentDate) {
//       Notify.failure('Please choose a date in the future');
//       $startButton.disabled = true;
//     } else {
//       selectedDate = Date.parse(selectedDates[0]);
//       $startButton.disabled = false;
//     }
//   },
// };

// const datePicker = flatpickr($inputDate, options);

// $startButton.addEventListener('click', () => {
//   onStartButtonClick();
// });

// $resetButton.addEventListener('click', () => {
//   onResetButtonClick();
// });

// function onStartButtonClick() {
//   clearInterval(timerInterval);
//   $inputDate.disabled = true;
//   $startButton.disabled = true;

//   const interval = setInterval(() => {
//     currentDate = Date.now();
//     timeLeft = selectedDate - currentDate;

//     if (timeLeft > 0) {
//       const convertedTimeLeft = convertMs(timeLeft);
//       $timerValues.days.textContent = addLeadingZero(convertedTimeLeft.days);
//       $timerValues.hours.textContent = addLeadingZero(convertedTimeLeft.hours);
//       $timerValues.minutes.textContent = addLeadingZero(
//         convertedTimeLeft.minutes
//       );
//       $timerValues.seconds.textContent = addLeadingZero(
//         convertedTimeLeft.seconds
//       );
//     } else {
//       clearInterval(interval);
//       resetTimerValues();
//       Notify.success('Time is up!');
//       $inputDate.disabled = false;
//     }
//   }, 1000);
//   timerInterval = interval;
// }

// function onResetButtonClick() {
//   clearInterval(timerInterval);
//   $inputDate.disabled = false;
//   $startButton.disabled = true;
//   resetTimerValues();
// }

// function resetTimerValues() {
//   $timerValues.days.textContent = '00';
//   $timerValues.hours.textContent = '00';
//   $timerValues.minutes.textContent = '00';
//   $timerValues.seconds.textContent = '00';
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

//! ---------------------------   ВАРІАНТ 6   -------------------------------

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const $startButton = document.querySelector('button[data-start]');
// const $resetButton = document.querySelector('button[data-reset]');
// const $inputDate = document.querySelector('#datetime-picker');
// const $timerValues = {
//   days: document.querySelector('span[data-days]'),
//   hours: document.querySelector('span[data-hours]'),
//   minutes: document.querySelector('span[data-minutes]'),
//   seconds: document.querySelector('span[data-seconds]'),
// };

// let timerInterval;
// let currentDate = Date.now();
// let timeLeft = 0;
// let selectedDate = 0;

// // Змінні опцій для датапікера таймера
// const timerOptions = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (Date.parse(selectedDates[0]) < currentDate) {
//       Notify.failure('Please choose a date in the future');
//       $startButton.disabled = true;
//     } else {
//       selectedDate = Date.parse(selectedDates[0]);
//       $startButton.disabled = false;
//     }
//   },
// };

// // Створення нового екземпляра датапікера для таймера
// const timerDatePicker = flatpickr($inputDate, timerOptions);

// $startButton.addEventListener('click', () => {
//   onStartButtonClick();
// });

// $resetButton.addEventListener('click', () => {
//   onResetButtonClick();
// });

// function onStartButtonClick() {
//   clearInterval(timerInterval);
//   $inputDate.disabled = true; // Блокуємо вибір дати
//   $startButton.disabled = true;

//   const interval = setInterval(() => {
//     currentDate = Date.now();
//     timeLeft = selectedDate - currentDate;

//     if (timeLeft > 0) {
//       const convertedTimeLeft = convertMs(timeLeft);
//       $timerValues.days.textContent = addLeadingZero(convertedTimeLeft.days);
//       $timerValues.hours.textContent = addLeadingZero(convertedTimeLeft.hours);
//       $timerValues.minutes.textContent = addLeadingZero(
//         convertedTimeLeft.minutes
//       );
//       $timerValues.seconds.textContent = addLeadingZero(
//         convertedTimeLeft.seconds
//       );
//     } else {
//       clearInterval(interval);
//       resetTimerValues();
//       Notify.success('Time is up!');
//       $inputDate.disabled = false;
//     }
//   }, 1000);
//   timerInterval = interval;
// }

// function onResetButtonClick() {
//   clearInterval(timerInterval);
//   $inputDate.disabled = false;
//   $startButton.disabled = true;
//   resetTimerValues();
// }

// function resetTimerValues() {
//   $timerValues.days.textContent = '00';
//   $timerValues.hours.textContent = '00';
//   $timerValues.minutes.textContent = '00';
//   $timerValues.seconds.textContent = '00';
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

//! ---------------------------   ВАРІАНТ 7   -------------------------------

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const $startButton = document.querySelector('button[data-start]');
const $resetButton = document.querySelector('button[data-reset]');
const $inputDate = document.querySelector('#datetime-picker');
const $timerValues = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

$startBtn.disabled = true; //* Кнопка "Start" є неактивною на початку
let timerInterval;
let currentDate = Date.now();
let timeLeft = 0;
let selectedDate = 0;

// Options for flatpickr initialization
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.parse(selectedDates[0]) < currentDate) {
      Notify.failure('Please choose a date in the future');
      $startButton.disabled = true;
    } else {
      selectedDate = Date.parse(selectedDates[0]);
      $startButton.disabled = false;
    }
  },
};

const datePicker = flatpickr($inputDate, options);

$startButton.addEventListener('click', () => {
  onStartButtonClick();
});

$resetButton.addEventListener('click', () => {
  onResetButtonClick();
});

function onStartButtonClick() {
  clearInterval(timerInterval);
  $inputDate.disabled = true;
  $startButton.disabled = true;

  const interval = setInterval(() => {
    currentDate = Date.now();
    timeLeft = selectedDate - currentDate;

    if (timeLeft > 0) {
      const convertedTimeLeft = convertMs(timeLeft);
      $timerValues.days.textContent = addLeadingZero(convertedTimeLeft.days);
      $timerValues.hours.textContent = addLeadingZero(convertedTimeLeft.hours);
      $timerValues.minutes.textContent = addLeadingZero(
        convertedTimeLeft.minutes
      );
      $timerValues.seconds.textContent = addLeadingZero(
        convertedTimeLeft.seconds
      );
    } else {
      clearInterval(interval);
      resetTimerValues();
      Notify.success('Time is up!');
      $inputDate.disabled = false;
      $startButton.disabled = true; // Disable Start button after completion
    }
  }, 1000);
  timerInterval = interval;
}

function onResetButtonClick() {
  clearInterval(timerInterval);
  $inputDate.disabled = false;
  $startButton.disabled = true;
  resetTimerValues();
}

function resetTimerValues() {
  $timerValues.days.textContent = '00';
  $timerValues.hours.textContent = '00';
  $timerValues.minutes.textContent = '00';
  $timerValues.seconds.textContent = '00';
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
