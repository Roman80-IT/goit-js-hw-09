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

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//* Вибираємо необхідні елементи зі сторінки
const $startButton = document.querySelector('button[data-start]');
const $inputDate = document.querySelector('#datetime-picker');
const $timerValues = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

//* Вимикаємо кнопку "Start" на початку (вона буде неактивна до вибору користувачем дати):
$startButton.disabled = true;

//* Ініціалізуємо деякі змінні:
let currentDate = Date.now(); //*  Поточний час у мілісекундах
let timeLeft = 0; //*          Залишок часу в мілісекундах
let selectedDate = 0; //*      Вибрана дата у мілісекундах

//* Створюємо налаштування для flatpickr:
const options = {
  enableTime: true, //* Включаємо вибір часу
  time_24hr: true, //* Використовувати 24-годинний формат часу
  defaultDate: new Date(), //* Встановлюємо поточну дату та час за замовчуванням
  minuteIncrement: 1, //* Задаємо приріст мінут при виборі часу
  onClose(selectedDates) {
    //* При закритті вибору дати та часу викликається ця функція
    if (Date.parse(selectedDates[0]) < currentDate) {
      //* Якщо вибрана дата менша за поточну, виводимо повідомлення про помилку
      Notify.failure('Please choose a date in the future');
      $startButton.disabled = true; //* Вимикаємо кнопку "Start"
    } else {
      //* Інакше запам'ятовуємо вибрану дату та час
      selectedDate = Date.parse(selectedDates[0]);
      $startButton.disabled = false; //* Вмикаємо кнопку "Start"
    }
  },
};

//* Ініціалізуємо flatpickr з вказаними налаштуваннями:
const datePicker = flatpickr($inputDate, options);

//* Додаємо обробник події на кнопку "Start", який викликається при натисканні на неї:
$startButton.addEventListener('click', onStartButtonClick);

//* Визначаємо функцію onStartButtonClick(), яка стартує таймер:
function onStartButtonClick() {
  const interval = setInterval(() => {
    //* Отримуємо поточний час
    currentDate = Date.now();
    //* Обчислюємо залишок часу (різницю між вибраною датою та поточним часом)
    timeLeft = selectedDate - currentDate;
    if (timeLeft > 0) {
      //* Якщо залишок часу більше 0, оновлюємо значення таймера на сторінці
      const convertedTimeLeft = convertMs(timeLeft);
      $timerValues.days.textContent = convertedTimeLeft.days;
      $timerValues.hours.textContent = convertedTimeLeft.hours;
      $timerValues.minutes.textContent = convertedTimeLeft.minutes;
      $timerValues.seconds.textContent = convertedTimeLeft.seconds;
    } else {
      //* Інакше зупиняємо таймер
      clearInterval(interval);
    }
  }, 1000); //* Оновлюємо таймер кожну секунду
}

//* Визначаємо ф-цію, яка перетворює час в мілісекундах у формат "дні:години:хв:сек":
function convertMs(ms) {
  //* К-сть мілісекунд у одиниці часу
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //* К-сть залишених днів
  const days = addLeadingZero(Math.floor(ms / day));
  //* К-сть залишених годин
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  //* К-сть залишених хв
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  //* К-сть залишених сек
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

//* Визначаємо ф-цію, яка додає перед числом 'нуль', якщо число < 10:
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
