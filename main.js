(function(){
  'use strict';

  var currentDate = new Date();
  currentDate = currentDate.toString();
  console.log(currentDate);
  var todaysDate = document.querySelector('.date');
  todaysDate.textContent = currentDate;

  var hexString;
  var hoursNode = document.querySelector('.hours');
  var minutesNode = document.querySelector('.minutes');
  var secondsNode = document.querySelector('.seconds');
  var lineNode = document.getElementById('secondsLine');
  var background = document.getElementById('body');
  var clockNode = document.querySelector('.displayTime');

  // ====== zeropad fns add 0s in front of num or str if needed
  function zeroPad(numToFormat, compareNum) {
    if (numToFormat < compareNum) {
      numToFormat = '0' + numToFormat;
    }
    return numToFormat;
  }

  function zeroPadStr(string) {
    if (string.length < 2) {
      string = '0' + string;
    }
    return string;
  }

  // ====== creates hex num based on time

  function randomColor(timeNumber1, timeNumber2, timeNumber3) {
    hexString = '#'

    hexString += zeroPadStr(timeNumber1.toString(16));
    hexString += zeroPadStr(timeNumber2.toString(16));
    hexString += zeroPadStr(timeNumber3.toString(16));

    console.log(hexString);
    return hexString;
  };


// ================ clock function
  function changeTime() {
    window.setInterval(function(){
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      background.style.background = randomColor(hours, minutes, seconds);

      function printTime() {
        hoursNode.textContent = zeroPad(hours, 10);
        minutesNode.textContent = zeroPad(minutes, 10);
        secondsNode.textContent = zeroPad(seconds, 10);
      }
      printTime();

      var pctMinute = (seconds/60) * 100;
      lineNode.style.width = pctMinute + '%';

      // ====== changes display to hex on mouseover
      clockNode.addEventListener('mouseover', changeToHex);
      function changeToHex () {
        var hexColor = randomColor(hours, minutes, seconds);
        hoursNode.textContent = hexColor[1] + hexColor[2];
        minutesNode.textContent = hexColor[3] + hexColor[4];
        secondsNode.textContent = hexColor[5] + hexColor[6];
      }

    }, 1000);
  }
  changeTime();

}());
