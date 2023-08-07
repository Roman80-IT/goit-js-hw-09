//! ------------------------------   ВАРІАНТ 2   ----------------------------------

//* Імпортуємо бібліотеку для сповіщень
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//* Вибираємо елементи - форму та поля вводу
const $form = document.querySelector('.form');
const $formInputs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};
const $resetBtn = document.getElementById('resetBtn');

//* Забороняємо користувачу вводити значення поки таймер працює
$formInputs.delay.disabled = true;

//* Обробник події для подання форми:
$form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number($formInputs.delay.value);
  const step = Number($formInputs.step.value);
  const amount = Number($formInputs.amount.value);

  if (step < 0 || delay < 0 || amount <= 0) {
    Notify.failure(
      'Incorrect values ​​of entered parameters. Некоректні значення введених параметрів'
    );
    return;
  }

  //* Деактивуємо поле вводу під час роботи таймера
  $formInputs.delay.disabled = true;

  //* створюємо проміси в залежності від к-сті
  for (let i = 0; i < amount; i += 1) {
    //* Рахуємо затримку проміса
    const promiseDelay = delay + i * step;

    //* Створюємо проміс
    createPromise(i + 1, promiseDelay)
      .then(value => {
        Notify.success(value);
      })
      .catch(err => {
        Notify.failure(err);
      });
  }

  //* Після завершення таймера, активуємо поле вводу та видаляємо значення в ньому
  setTimeout(() => {
    $formInputs.delay.disabled = false;
    $formInputs.delay.value = '';
  }, delay + (amount - 1) * step + 100); //* Запасний час на виконання останнього проміса
});

$resetBtn.addEventListener('click', event => {
  event.preventDefault();

  //* Скидаємо значення полів вводу на стандартні
  $formInputs.delay.disabled = false;
  $formInputs.delay.value = 1000;
  $formInputs.step.value = 100;
  $formInputs.amount.value = 5;
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
