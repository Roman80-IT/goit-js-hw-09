//! ------------------------------   ВАРІАНТ 2   ----------------------------------
//* Усунено зауваження ментора по 'Варіанту1':
//*    - якщо step <0 або delay <0 або  amount <=0 показуємо нотифікашку і не рендеримо проміси
//*    - інпут має бути дізейбл поки генератор промісів працює, щоб користувач не міг неконтрольовано замінити значення,
//*      можемо для зручності користувача винести додатково кнопку reset, яка обнулює всі дані і зробить інпут
//*      знову доступним для обрання промісів

//! Бібліотека повідомлень
//?    npm i notiflix

//* Імпортуємо бібліотеку для сповіщень
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// //* Вибираємо елементи - форму та поля вводу
// const $form = document.querySelector('.form');
// const $formInputs = {
//   delay: document.querySelector('input[name="delay"]'),
//   step: document.querySelector('input[name="step"]'),
//   amount: document.querySelector('input[name="amount"]'),
// };
// const $resetBtn = document.getElementById('resetBtn');

// //* Забороняємо користувачу вводити значення поки генератор працює
// $formInputs.delay.disabled = true;

// //* Обробник події для подання форми:
// $form.addEventListener('submit', event => {
//   event.preventDefault();

//   const delay = Number($formInputs.delay.value);
//   const step = Number($formInputs.step.value);
//   const amount = Number($formInputs.amount.value);

//   if (step < 0 || delay < 0 || amount <= 0) {
//     Notify.failure(
//       'Incorrect values ​​of entered parameters! Некоректні значення введених параметрів!'
//     );
//     return;
//   }

//   //* Деактивуємо поле вводу під час роботи генератора
//  $formInputs.delay.disabled = true;

//   //* створюємо проміси в залежності від к-сті
//   for (let i = 0; i < amount; i += 1) {
//     //* Рахуємо затримку проміса
//     const promiseDelay = delay + i * step;

//     //* Створюємо проміс
//     createPromise(i + 1, promiseDelay)
//       .then(value => {
//         Notify.success(value);
//       })
//       .catch(err => {
//         Notify.failure(err);
//       });
//   }

//   //* Після завершення таймера, активуємо поле вводу та видаляємо значення в ньому
//   setTimeout(() => {
//     $formInputs.delay.disabled = false;
//     $formInputs.delay.value = '';
//   }, delay + (amount - 1) * step + 100); //* Запасний час на виконання останнього проміса
// });

// $resetBtn.addEventListener('click', event => {
//   event.preventDefault();

//   //* Скидаємо значення полів вводу на стандартні
//   $formInputs.delay.disabled = false;
//   $formInputs.delay.value = 1000;
//   $formInputs.step.value = 100;
//   $formInputs.amount.value = 5;
// });

// //* Ф-ція для створення проміса
// function createPromise(position, delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         res(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         rej(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     }, delay);
//   });
// }

//! ------------------------------   ВАРІАНТ 3   ----------------------------------
//* Замість інпут, тут кнопка дізейбл:

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const $form = document.querySelector('.form');
// const $formInputs = {
//   delay: document.querySelector('input[name="delay"]'),
//   step: document.querySelector('input[name="step"]'),
//   amount: document.querySelector('input[name="amount"]'),
// };
// const $startBtn = document.querySelector('button[type="submit"]');
// const $resetBtn = document.getElementById('resetBtn');
// let isPromiseRunning = false;

// //* Деактивуємо кнопку "Start" при завантаженні сторінки
// $startBtn.disabled = true;

// //* Обробник події для подання форми:
// $form.addEventListener('submit', event => {
//   event.preventDefault();

//   const delay = Number($formInputs.delay.value);
//   const step = Number($formInputs.step.value);
//   const amount = Number($formInputs.amount.value);

//   if (step < 0 || delay < 0 || amount <= 0) {
//     Notify.failure(
//       'Incorrect values ​​of entered parameters! Некоректні значення введених параметрів!'
//     );
//     return;
//   }

//   //* Запобігаємо старту нових промісів, якщо генератор уже працює
//   if (isPromiseRunning) {
//     Notify.failure('Генератор вже запущений!');
//     return;
//   }

//   isPromiseRunning = true;
//   $startBtn.disabled = true; //* Деактивуємо кнопку "Start" під час роботи генератора

//   for (let i = 0; i < amount; i += 1) {
//     const promiseDelay = delay + i * step;

//     createPromise(i + 1, promiseDelay)
//       .then(value => {
//         Notify.success(value);
//       })
//       .catch(err => {
//         Notify.failure(err);
//       });
//   }

//   //* Після завершення промісів, активуємо кнопку "Start" та встановлюємо змінну isPromiseRunning в false
//   setTimeout(() => {
//     isPromiseRunning = false;
//     $startBtn.disabled = false;
//   }, delay + (amount - 1) * step + 100); //* Запасний час на виконання останнього проміса
// });

// $resetBtn.addEventListener('click', event => {
//   event.preventDefault();
//   //* Скидаємо значення полів вводу на стандартні
//   $formInputs.delay.disabled = false;
//   $formInputs.delay.value = 1500;
//   $formInputs.step.value = 1000;
//   $formInputs.amount.value = 5;
// });

//! ------------------------------   ВАРІАНТ 4   ----------------------------------

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const $form = document.querySelector('.form');
const $formInputs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

const $submitButton = document.querySelector('button[type="submit"]');
const $resetButton = document.querySelector('button[type="reset"]');

$form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number($formInputs.delay.value);
  const step = Number($formInputs.step.value);
  const amount = Number($formInputs.amount.value);

  if (step < 0 || delay < 0 || amount <= 0) {
    Notify.failure('Некоректні значення введених параметрів.');
    return;
  }

  // Деактивуємо кнопку "Submit" під час генерації промісів
  $submitButton.disabled = true;

  for (let i = 0; i < amount; i += 1) {
    const promiseDelay = delay + i * step;

    createPromise(i + 1, promiseDelay)
      .then(value => {
        Notify.success(value);
      })
      .catch(err => {
        Notify.failure(err);
      })
      .finally(() => {
        // Після завершення генерації промісів активуємо кнопку "Submit" знову
        if (i === amount - 1) {
          $submitButton.disabled = false;
        }
      });
  }
});

$resetButton.addEventListener('click', event => {
  // Скидуємо значення і робимо інпути доступними для обрання промісів
  $form.reset();
  $submitButton.disabled = false;
});
