//* HTML містить кнопки «Start» і «Stop».
//*    <button type="button" data-start>Start</button>
//*    <button type="button" data-stop>Stop</button>

//* Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль.
//* Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

//* УВАГА
//* Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

//* Для генерування випадкового кольору використовуй функцію getRandomHexColor

//! ---------------------------   ВАРІАНТ 1   -------------------------------

// const $startBtn = document.querySelector('button[data-start]'); //* використанням селекторів    // Приклад використанням атрибуту: ('[data-start]')
// const $stopBtn = document.querySelector('button[data-stop]');

// $startBtn.addEventListener('click', onStartBtnClick); //* додаємо обробник подій до кнопок
// $stopBtn.disabled = true;

// let colorSwitch = null;

// //* ф-ції для кожної кнопки (onStartBtnClick і onStopBtnClick) додамо або видалимо обробники подій (addEventListener / removeEventListener) та змінюємо стан кнопок
// function onStartBtnClick() {
//   colorSwitch = setInterval(() => {
//     document.body.style.backgroundColor = `${getRandomHexColor()}`;
//   }, 1000);

//   $startBtn.removeEventListener('click', onStartBtnClick);
//   $stopBtn.addEventListener('click', onStopBtnClick);
//   $startBtn.disabled = true;
//   $stopBtn.disabled = false;
// }

// function onStopBtnClick() {
//   clearInterval(colorSwitch);

//   $stopBtn.removeEventListener('click', onStopBtnClick);
//   $startBtn.addEventListener('click', onStartBtnClick);
//   $startBtn.disabled = false;
//   $stopBtn.disabled = true;
// }

// //* Генерування випадкового кольору (з завдання ДЗ)
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

//! ---------------------------   ВАРІАНТ 2   -------------------------------

//* Add event listeners to the buttons
const $startBtn = document.querySelector('[data-start]');
const $stopBtn = document.querySelector('[data-stop]');

$startBtn.addEventListener('click', startColorChange);
$stopBtn.addEventListener('click', stopColorChange);

let intervalId = null;

function startColorChange() {
  //* Disable the "Start" button while the color change is in progress
  $startBtn.disabled = true;
  $stopBtn.disabled = false;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopColorChange() {
  //* Enable the "Start" button and stop the color change
  $startBtn.disabled = false;
  $stopBtn.disabled = true;

  clearInterval(intervalId); //* Stop Interval
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
