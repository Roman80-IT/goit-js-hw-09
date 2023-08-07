//! Генератор промісів

//* HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку в мілісекундах, крок збільшення затримки для кожного промісу після першого і кількість промісів, яку необхідно створити.

//* Напиши скрипт, який на момент сабміту форми викликає ф-цію createPromise(position, delay) стільки разів,
//*  скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку,
//* враховуючи першу затримку(delay) і крок(step).
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     //* Fulfill
//   } else {
//     //* Reject
//   }
// }

//* Доповни код ф-ції createPromise так, щоб вона повертала один проміс, який виконується або відхиляється через delay часу.
//*  Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів.
//*  Використовуй початковий код ф-ції для вибору того, що потрібно зробити з промісом - виконати або відхилити.

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

//! Бібліотека повідомлень
//?    npm i notiflix
// УВАГА    Наступний функціонал не обов'язковий, але буде хорошою додатковою практикою.

//* Для відображення повідомлень користувачеві, замість console.log(), використовуй бібліотеку notiflix.

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     //* Fulfill
//   } else {
//     //* Reject
//   }
// }

//! ------------------------------   ВАРІАНТ 1   ----------------------------------

//!---------------------------------- Виправити ------------------------------------
//* Додаємо обробник події для подання форми
// $form.addEventListener('submit', event => {
//   event.preventDefault(); //* запобігаємо стандартній поведінці (перезавантаженню сторінки)

//   //* Отримуємо значення з поля "amount" і створюємо проміси в залежності від к-сті
//   for (let i = 0; i < $formInputs.amount.value; i += 1) {
//     //* Рахуємо затримку проміса
//     const promiseDelay =
//       Number($formInputs.delay.value) + i * Number($formInputs.step.value);

//     //* Створюємо проміс
//     createPromise(i + 1, promiseDelay)
//       .then(value => {
//         Notify.success(value); //* Виводимо сповіщення про успішне виконання проміса
//       })
//       .catch(err => {
//         Notify.failure(err); //* Виводимо сповіщення про невдале виконання проміса
//       });
//   }
// });
//! -------------------------------------------------------------------------
//*  Створимо форму, яка дозволяє виконувати кілька промісів (асинхронних операцій) з різними затримками та к-стю повторень
//*    і виводить сповіщення про їх результати за допомогою бібліотеки 'Notiflix Notify'

//* Імпортуємо бібліотеку для сповіщень
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//* Вибираємо елементи - форму та поля вводу
const $form = document.querySelector('.form');
const $formInputs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

//!--------------------------------- Виправлення ---------------------------
//! якщо step <0 або delay <0 або  amount <=0 показуємо нотифікашку і не рендеримо проміси

$form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number($formInputs.delay.value);
  const step = Number($formInputs.step.value);
  const amount = Number($formInputs.amount.value);

  if (step < 0 || delay < 0 || amount <= 0) {
    //* Скористаймося бібліотекою Notiflix Notify, яка дозволяє виводити різні типи сповіщень (нотифікацій)(notification message) на сторінці.
    //*  використовується ф-ція Notify.success() для виведення сповіщення зі статусом успішного виконання промісу та
    //*  Notify.failure() для виведення сповіщення зі статусом невдалого виконання промісу
    Notify.failure('Некоректні значення введених параметрів!');
    return; //* Припиняємо виконання ф-ції, щоб не створювати проміси
  }

  for (let i = 0; i < amount; i += 1) {
    const promiseDelay = delay + i * step;

    createPromise(i + 1, promiseDelay)
      .then(value => {
        Notify.success(value);
      })
      .catch(err => {
        Notify.failure(err);
      });
  }
});

//* Ф-ція для створення проміса
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
