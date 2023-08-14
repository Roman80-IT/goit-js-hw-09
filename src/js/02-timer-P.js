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

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

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

//? НЕ БУДЕМО УСКЛАДНЮВАТИ
//* Якщо таймер запущений, для того щоб вибрати нову дату і перезапустити його - необхідно перезавантажити сторінку.

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
// УВАГА
//* Наступний функціонал не обов'язковий для здавання завдання, але буде хорошою додатковою практикою.
//* Для відображення повідомлень користувачеві, замість window.alert(), використовуй бібліотеку notiflix.

//! ---------------------------   ВАРІАНТ 1   -------------------------------

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// //* Вибираємо необхідні елементи зі сторінки
// const $startButton = document.querySelector('button[data-start]');
// const $inputDate = document.querySelector('#datetime-picker');
// const $timerValues = {
//   days: document.querySelector('span[data-days]'),
//   hours: document.querySelector('span[data-hours]'),
//   minutes: document.querySelector('span[data-minutes]'),
//   seconds: document.querySelector('span[data-seconds]'),
// };

// //* Вимикаємо кнопку "Start" на початку (вона буде неактивна до вибору користувачем дати):
// $startButton.disabled = true;

// //* Ініціалізуємо деякі змінні:
// let currentDate = Date.now(); //*  Поточний час у мілісекундах
// let timeLeft = 0; //*          Залишок часу в мілісекундах
// let selectedDate = 0; //*      Вибрана дата у мілісекундах

// //* Створюємо налаштування для flatpickr:
// const options = {
//   enableTime: true, //* Включаємо вибір часу
//   time_24hr: true, //* Використовувати 24-годинний формат часу
//   defaultDate: new Date(), //* Встановлюємо поточну дату та час за замовчуванням
//   minuteIncrement: 1, //* Задаємо приріст мінут при виборі часу
//   onClose(selectedDates) {
//     //* При закритті вибору дати та часу викликається ця функція
//     if (Date.parse(selectedDates[0]) < currentDate) {
//       //* Якщо вибрана дата менша за поточну, виводимо повідомлення про помилку
//       Notify.failure('Please choose a date in the future');
//       $startButton.disabled = true; //* Вимикаємо кнопку "Start"
//     } else {
//       //* Інакше запам'ятовуємо вибрану дату та час
//       selectedDate = Date.parse(selectedDates[0]);
//       $startButton.disabled = false; //* Вмикаємо кнопку "Start"
//     }
//   },
// };

// //* Ініціалізуємо flatpickr з вказаними налаштуваннями:
// const datePicker = flatpickr($inputDate, options);

// //* Додаємо обробник події на кнопку "Start" (викликається при натисканні на неї):
// $startButton.addEventListener('click', onStartButtonClick);

// //* Ф-ція, яка стартує таймер:
// function onStartButtonClick() {
//   const interval = setInterval(() => {
//     //* Отримуємо поточний час
//     currentDate = Date.now();
//     //* Обчислюємо залишок часу (різницю між вибраною датою та поточним часом)
//     timeLeft = selectedDate - currentDate;
//     if (timeLeft > 0) {
//       //* Якщо залишок часу більше 0, оновлюємо значення таймера на сторінці
//       const convertedTimeLeft = convertMs(timeLeft);
//       $timerValues.days.textContent = convertedTimeLeft.days;
//       $timerValues.hours.textContent = convertedTimeLeft.hours;
//       $timerValues.minutes.textContent = convertedTimeLeft.minutes;
//       $timerValues.seconds.textContent = convertedTimeLeft.seconds;
//     } else {
//       //* Інакше зупиняємо таймер
//       clearInterval(interval);
//     }
//   }, 1000); //* Оновлюємо таймер кожну секунду
// }

// //* Ф-ція, яка перетворює час в мілісекундах у формат "дні:години:хв:сек":
// function convertMs(ms) {
//   //* К-сть мілісекунд у одиниці часу
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   //* К-сть залишених днів
//   const days = addLeadingZero(Math.floor(ms / day));
//   //* К-сть залишених годин
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   //* К-сть залишених хв
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   //* К-сть залишених сек
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// //* Ф-ція, яка додає перед числом 'нуль' (якщо число < 10):
// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

//! ---------------------------   ВАРІАНТ 2   -------------------------------
//! інпут має бути дізейбл поки таймер працює, щоб користувач не міг неконтрольовано замінити значення дати,
//!   можемо для зручності користувача винести додатково кнопку reset, яка обнулює всі дані таймера і зробить інпут знову доступним для обрання дати

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

// //* Вимикаємо кнопки "Start" і "Reset" на початку (будуть неактивні до вибору дати):
// $startButton.disabled = true;
// $resetButton.disabled = true;

// //* Ініціалізуємо деякі змінні:
// let currentDate = Date.now(); //*  Поточний час у мс
// let timeLeft = 0; //*          Залишок часу в мс
// let selectedDate = 0; //*      Вибрана дата у мс
// let interval; //* Змінна для збереження ідентифікатора таймера
// let timerStarted = false; //* Змінна для відстеження початку/зупинки таймера

// //* Створюємо налаштування для flatpickr:
// const options = {
//   enableTime: true, //* Включаємо вибір часу
//   time_24hr: true, //* Використовувати 24-годинний формат часу
//   defaultDate: new Date(), //* Встановлюємо поточну дату та час за замовчуванням
//   minuteIncrement: 1, //* Задаємо приріст мінут при виборі часу
//   onClose(selectedDates) {
//     //* При закритті вибору дати та часу викликається ця ф-ція
//     if (Date.parse(selectedDates[0]) < currentDate) {
//       //* Якщо вибрана дата менша за поточну, виводимо повідомлення про помилку
//       alert('Please choose a date in the future');
//       $startButton.disabled = true; //* Вимикаємо кнопку "Start"
//     } else {
//       //* Інакше запам'ятовуємо вибрану дату та час
//       selectedDate = Date.parse(selectedDates[0]);
//       $startButton.disabled = false; //* Вмикаємо кнопку "Start"
//     }
//   },
// };

// //* Ініціалізуємо flatpickr з вказаними налаштуваннями:
// const datePicker = flatpickr($inputDate, options);

// //* Обробники подій для кнопок "Start" та "Reset":
// $startButton.addEventListener('click', onStartButtonClick);
// $resetButton.addEventListener('click', onResetButtonClick);

// //* Ф-ція, яка стартує таймер:
// function onStartButtonClick() {
//   if (!timerStarted) {
//     interval = setInterval(updateTimer, 1000);
//     timerStarted = true;
//     $inputDate.disabled = true; //* Вимикаємо інпут після натискання на кнопку "Start"
//     $resetButton.disabled = true; //* Вимикаємо кнопку "Reset" після натискання на кнопку "Start"
//   }
// }

// //* Ф-ція зупиняє та скидає таймер:
// function onResetButtonClick() {
//   clearInterval(interval); //* Зупиняємо таймер, якщо він активний
//   timerStarted = false;
//   $inputDate.disabled = false; //* Зробити інпут доступним
//   $startButton.disabled = true; //* Вимкнути кнопку "Start"
//   $resetButton.disabled = true; //* Вимкнути кнопку "Reset"
//   $timerValues.days.textContent = '00';
//   $timerValues.hours.textContent = '00';
//   $timerValues.minutes.textContent = '00';
//   $timerValues.seconds.textContent = '00';
// }

// //* Ф-ція оновлює значення таймера на сторінці:
// function updateTimer() {
//   currentDate = Date.now();
//   timeLeft = selectedDate - currentDate;
//   if (timeLeft > 0) {
//     const convertedTimeLeft = convertMs(timeLeft);
//     $timerValues.days.textContent = convertedTimeLeft.days;
//     $timerValues.hours.textContent = convertedTimeLeft.hours;
//     $timerValues.minutes.textContent = convertedTimeLeft.minutes;
//     $timerValues.seconds.textContent = convertedTimeLeft.seconds;
//   } else {
//     clearInterval(interval);
//     timerStarted = false;
//     $inputDate.disabled = false; // Зробити інпут доступним після закінчення таймера
//     $startButton.disabled = true; // Вимкнути кнопку "Start"
//     $resetButton.disabled = false; // Зробити кнопку "Reset" доступною
//   }
// }

// //* Ф-ція, яка перетворює час в мс у формат "дні:години:хв:сек":
// function convertMs(ms) {
//   //* К-сть мс у одиниці часу
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   //* К-сть залишених днів
//   const days = addLeadingZero(Math.floor(ms / day));
//   //* К-сть залишених годин
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   //* К-сть залишених хв
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   //* К-сть залишених с
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// //* Ф-ція, яка додає перед числом '0' (якщо число < 10):
// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

//! ---------------------------   ВАРІАНТ 3   -------------------------------

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

// $startButton.addEventListener('click', onStartButtonClick);
// $resetButton.addEventListener('click', onResetButtonClick);

// function onStartButtonClick() {
//   const interval = setInterval(() => {
//     currentDate = Date.now();
//     timeLeft = selectedDate - currentDate;
//     if (timeLeft > 0) {
//       const convertedTimeLeft = convertMs(timeLeft);
//       updateTimerValues(convertedTimeLeft);
//     } else {
//       clearInterval(interval);
//     }
//   }, 1000);
//   $inputDate.disabled = true;
// }

// function onResetButtonClick() {
//   clearInterval(timerInterval);
//   $inputDate.disabled = false;
//   $startButton.disabled = true;
//   resetTimerValues();
// }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = addLeadingZero(Math.floor(ms / day));
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function updateTimerValues({ days, hours, minutes, seconds }) {
//   $timerValues.days.textContent = days;
//   $timerValues.hours.textContent = hours;
//   $timerValues.minutes.textContent = minutes;
//   $timerValues.seconds.textContent = seconds;
// }

// function resetTimerValues() {
//   updateTimerValues({ days: '00', hours: '00', minutes: '00', seconds: '00' });
// }

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
// console.log('Reset button clicked1'); // Перевірка кнопки
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

// // $startButton.addEventListener('click', onStartButtonClick);
// // $resetButton.addEventListener('click', onResetButtonClick);

// $startButton.addEventListener('click', () => {
//   onStartButtonClick();
// });

// $resetButton.addEventListener('click', () => {
//   onResetButtonClick();
// });

// // function onStartButtonClick()
// // window.onStartButtonClick = function ()
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

// console.log('Reset button clicked2'); // Перевірка кнопки
// // function onResetButtonClick()
// // window.onResetButtonClick = function ()
// function onResetButtonClick() {
//   console.log('Reset button clicked'); // Перевірка кнопки
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

//! ---------------------------   ВАРІАНТ 5   -------------------------------

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
// let isTimerRunning = false; //* Нова змінна для відстеження стану таймера

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (Date.parse(selectedDates[0]) < currentDate) {
//       Notify.failure('Please choose a date in the future');
//       $startButton.disabled = true;
//     } else if (!isTimerRunning) {
//       // Enable "Start" button only if timer is not running
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
//   isTimerRunning = true; // Start timer
//   $inputDate.disabled = true;
//   $startButton.disabled = true;

//   const interval = setInterval(() => {
//     if (!isTimerRunning) {
//       clearInterval(interval);
//       return;
//     }

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
//       isTimerRunning = false; // Timer finished
//       resetTimerValues();
//       Notify.success('Time is up!');
//       $inputDate.disabled = false;
//     }
//   }, 1000);
//   timerInterval = interval;
// }

// function onResetButtonClick() {
//   clearInterval(timerInterval);
//   isTimerRunning = false; // Stop timer
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

//! ---------------------------   Existing   -------------------------------

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const $startBtn = document.querySelector('button[data-start]');
const $inputDate = document.querySelector('#datetime-picker');
const $timerValue = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

$startBtn.disabled = true; //* Кнопка "Start" є неактивною на початку
let currentDate = Date.now();
let timeLeft = 0;
let selectedDate = 0;
let timerInterval = null; // Added to keep track of the timer interval

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //* При обранні поточної дати або дати в минулому, відображає повідомлення та блокує кнопку "Start":
    if (Date.parse(selectedDates[0]) < currentDate) {
      Notify.failure('Please choose a date in the future');
      $startBtn.disabled = true;
      //* Кнопку "Start" активуємо тільки після вибору дати в майбутньому:
    } else {
      selectedDate = Date.parse(selectedDates[0]);
      $startBtn.disabled = false;
    }
  },
};

const fp = flatpickr($inputDate, options);

$startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  if (timerInterval) {
    clearInterval(timerInterval); // Clear any existing interval to avoid overlapping timers
  }

  timerInterval = setInterval(() => {
    currentDate = Date.now();
    timeLeft = selectedDate - currentDate;
    if (timeLeft > 0) {
      const convertTimeLeft = convertMs(timeLeft);
      $timerValue.days.textContent = convertTimeLeft.days;
      $timerValue.hours.textContent = convertTimeLeft.hours;
      $timerValue.minutes.textContent = convertTimeLeft.minutes;
      $timerValue.seconds.textContent = convertTimeLeft.seconds;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);

  //* Дату блокуємо, коли таймер вже запущено:
  fp.destroy(); // Disable further date changes once the timer starts
  $inputDate.disabled = true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
