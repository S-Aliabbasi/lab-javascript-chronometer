const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  const mins = chronometer.getMinutes();
  const minConvert = chronometer.computeTwoDigitNumber(mins);
  minDecElement.innerHTML = minConvert[0];
  minUniElement.innerHTML = minConvert[1];
}

function printSeconds() {
  const seconds = chronometer.getSeconds();
  const secConvert = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.innerHTML = secConvert[0];
  secUniElement.innerHTML = secConvert[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  splitsElement.style.display = 'block';
  newLI = document.createElement('li');
  newText = document.createTextNode(chronometer.split());
  newLI.appendChild(newText);
  splitsElement.appendChild(newLI);
}

function clearSplits() {
  while (splitsElement.firstChild) splitsElement.firstChild.remove();
}

function setStopBtn() {
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button

btnLeftElement.addEventListener('click', function (event) {
  //btn is start
  if (event.target.classList.contains('start')) {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
    return;
  }

  //btn is stop
  if (event.target.classList.contains('stop')) {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
    return;
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', function (event) {
  //btn is Reset
  if (event.target.classList.contains('reset')) {
    chronometer.reset();
    clearSplits();
    minDecElement.innerHTML = '0';
    minUniElement.innerHTML = '0';
    secDecElement.innerHTML = '0';
    secUniElement.innerHTML = '0';

    return;
  }

  //btn is Split
  if (event.target.classList.contains('split')) {
    printSplit();

    return;
  }
});
