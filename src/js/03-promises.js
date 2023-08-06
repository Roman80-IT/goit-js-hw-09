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
//* Імпортуємо бібліотеку для сповіщень
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//* Знаходимо посилання на форму та поля вводу
const $form = document.querySelector('.form');
const $formInputs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

//* Додаємо обробник події для подання форми
$form.addEventListener('submit', event => {
  event.preventDefault();

  //* Отримуємо значення з поля "amount" і створюємо проміси в залежності від к-сті
  for (let i = 0; i < $formInputs.amount.value; i += 1) {
    //* Обраховуємо затримку для проміса
    const promiseDelay =
      Number($formInputs.delay.value) + i * Number($formInputs.step.value);

    //* Створюємо проміс
    createPromise(i + 1, promiseDelay)
      .then(value => {
        Notify.success(value); //* Виводимо сповіщення про успішне виконання обіцянки
      })
      .catch(err => {
        Notify.failure(err); //* Виводимо сповіщення про невдале виконання обіцянки
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
