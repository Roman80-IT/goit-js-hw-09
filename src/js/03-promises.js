//! ------------------------------   ВАРІАНТ 5   ----------------------------------
//! неактивна кнопка

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const $form = document.querySelector('.form');
const $formInputs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

const $submitBtn = document.getElementById('submitBtn');
const $resetBtn = document.getElementById('resetBtn');

$resetBtn.addEventListener('click', () => {
  $formInputs.delay.value = '1000';
  $formInputs.step.value = '500';
  $formInputs.amount.value = '5';
  $submitBtn.disabled = false; //* Активуємо кнопку "Submit" при натисканні "Reset"
});

$form.addEventListener('submit', event => {
  event.preventDefault();
  $submitBtn.disabled = true; //* Робимо кнопку "Submit" неактивною перед початком створення промісів

  const delay = Number($formInputs.delay.value);
  const step = Number($formInputs.step.value);
  const amount = Number($formInputs.amount.value);

  if (step < 0 || delay < 0 || amount <= 0) {
    Notify.failure('Некоректні значення введених параметрів!');
    $submitBtn.disabled = false; //* Активуємо кнопку "Submit", якщо є помилки
    return;
  }

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
        if (i === amount - 1) {
          $submitBtn.disabled = false; //* Активуємо кнопку "Submit" після закінчення створення промісів
        }
      });
  }
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
