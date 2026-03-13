   console.log('JavaScript подключён и работает!');

// Находим кнопку на странице
   const button = document.querySelector('button');

// Проверяем, нашли ли кнопку
   console.log('Нашёл кнопку:', button);

 // Добавляем событие "клик" для всплывающего сообщения
    button.addEventListener('click', function() {
  alert('Привет! Ты нажал на кнопку!');
});

// Добавляем ещё одно событие "клик" для изменения стилей
   button.addEventListener('click', function() {
  // Находим заголовок <h1>
  const heading = document.querySelector('h1');
  
  // Меняем цвет текста и фон заголовка
  heading.style.color = '#ff5722';
  heading.style.backgroundColor = '#f0f0f0';
  heading.style.padding = '10px';
  heading.style.borderRadius = '5px';

  // Сообщение в консоль для проверки
    console.log('Стили изменены!');
});

 // Функция для смены фона
    button.addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});
    document.addEventListener("DOMContentLoaded", function() {
  console.log('JavaScript подключен и работает!');

  // Находим кнопку
      const button = document.querySelector("#changeColor");

     // Проверяем, найдена ли кнопка
     if (!button) {
      console.error("Ошибка: Кнопка #changeColor не найдена!");
      return;
  }

  console.log('Кнопка найдена:', button);

  // Добавляем клик на кнопку
     button.addEventListener('click', function() {
      alert('Привет! Ты нажал на кнопку!');
      document.body.style.backgroundColor = getRandomColor();
  });

  // Генерация случайного цвета
     function getRandomColor() 
     {
      return `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`; // ← Тут кавычки исправлены
  }
});
 document.addEventListener("DOMContentLoaded", function() {
  const heading = document.querySelector("h1");
  heading.classList.add("show");
});
const themeButton = document.querySelector("#themeToggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});