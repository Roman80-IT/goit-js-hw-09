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

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const $form = document.querySelector('.form');
// const $formInputs = {
//   delay: document.querySelector('input[name="delay"]'),
//   step: document.querySelector('input[name="step"]'),
//   amount: document.querySelector('input[name="amount"]'),
// };

// const $submitButton = document.querySelector('button[type="submit"]');
// const $resetButton = document.querySelector('button[type="reset"]');

// $form.addEventListener('submit', event => {
//   event.preventDefault();

//   const delay = Number($formInputs.delay.value);
//   const step = Number($formInputs.step.value);
//   const amount = Number($formInputs.amount.value);

//   if (step < 0 || delay < 0 || amount <= 0) {
//     Notify.failure('Некоректні значення введених параметрів.');
//     return;
//   }

//   $submitButton.disabled = true; // Деактивація кнопки "Submit"
//   $resetButton.disabled = true; // Деактивація кнопки "Reset"

//   let promisesToExecute = []; // Зберігаємо проміси для майбутнього виконання

//   for (let i = 0; i < amount; i += 1) {
//     const promiseDelay = delay + i * step;

//     const promise = createPromise(i + 1, promiseDelay)
//       .then(value => {
//         Notify.success(value);
//       })
//       .catch(err => {
//         Notify.failure(err);
//       })
//       .finally(() => {
//         // Після завершення промісу видаляємо його з масиву промісів
//         promisesToExecute = promisesToExecute.filter(p => p !== promise);

//         // Після виконання всіх промісів активуємо кнопки "Submit" і "Reset" знову
//         if (promisesToExecute.length === 0) {
//           $submitButton.disabled = false;
//           $resetButton.disabled = false;
//         }
//       });

//     promisesToExecute.push(promise);
//   }
// });

// $resetButton.addEventListener('click', event => {
//   $form.reset(); // Скидуємо значення форми
// });

//! ------------------------------   ВАРІАНТ 5   ----------------------------------

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const $form = document.querySelector('.form');
const $formInputs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};
const $submitBtn = document.getElementById('submitBtn');
const $resetBtn = document.getElementById('resetBtn');

$form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number($formInputs.delay.value);
  const step = Number($formInputs.step.value);
  const amount = Number($formInputs.amount.value);

  if (step < 0 || delay < 0 || amount <= 0) {
    Notify.failure('Некоректні значення введених параметрів!');
    return;
  }

  // Disable the Submit button while promises are being generated
  $submitBtn.disabled = true;
  $resetBtn.disabled = true;

  const promises = [];

  for (let i = 0; i < amount; i += 1) {
    const promiseDelay = delay + i * step;
    promises.push(createPromise(i + 1, promiseDelay));
  }

  Promise.all(promises)
    .then(values => {
      for (const value of values) {
        Notify.success(value);
      }
    })
    .catch(err => {
      Notify.failure(err);
    })
    .finally(() => {
      // Enable the Submit button after all promises are resolved
      $submitBtn.disabled = false;
      $resetBtn.disabled = false;
    });
});

// Reset button functionality
$resetBtn.addEventListener('click', () => {
  $formInputs.delay.value = '1000';
  $formInputs.step.value = '500';
  $formInputs.amount.value = '5';
});

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
