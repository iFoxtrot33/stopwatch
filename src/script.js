const stopwatch = () => {
  const temp = document.getElementsByTagName(h6);
  temp.textContent = 'hello world';
  let seconds = '00';
  let tens = '00';
  const appendTens = document.getElementById('tens');
  const appendSeconds = document.getElementById('seconds');
  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');
  let Interval;

  const startTimer = () => {
    tens += 1;
    if (tens <= 9) {
      appendTens.innerHTML = `0${tens}`;
    }
    if (tens > 9) {
      appendTens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log('seconds');
      seconds += 1;
      appendSeconds.innerHTML = `0${seconds}`;
      tens = 0;
      appendTens.innerHTML = `0${0}`;
    }
    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  };
  buttonStart.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };
  buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
  });
  buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = '00';
    seconds = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  });
};

stopwatch();
