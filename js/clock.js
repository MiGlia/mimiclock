'use strict';
(function () {
// Объявляем переменные
  var secondHand = document.querySelector('.hand-second');
  var minuteHand = document.querySelector('.hand-minute');
  var hourHand = document.querySelector('.hand-hour');


// Функция устанавливает часы, минуты и секунды
// Задает угол поворота стрелок
  function setData() {
    var now = new Date();
    var second = now.getSeconds();
    var secondDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';

    var minute = now.getMinutes();
    var minuteDegrees = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)';

    var hour = now.getHours();
    var hourDegrees = ((hour/ 12) * 360) + 90;
    hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
  }

  // Функция выполняет setData() каждые 1000мс
  function setTime() {
    var timerId = setInterval(setData, 1000);
  }

  setTime();

})();
