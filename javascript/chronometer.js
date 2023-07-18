class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(
      (callback) => {
        if (callback === undefined) this.currentTime++;
        else {
          this.currentTime++;
          callback();
        }
      },
      1000,
      callback
    );
  }

  getMinutes() {
    if (this.currentTime) return Math.floor(this.currentTime / 60);
    else return 0;
  }

  getSeconds() {
    if (this.currentTime) return this.currentTime % 60;
    else return 0;
  }

  computeTwoDigitNumber(value) {
    // Ensureing the value is at least 2 characters long
    const temp = Math.floor(value / 10);

    if (temp >= 1 && temp <= 9) return value.toString();
    if (!temp) return '0' + value.toString();
    if (value > 99) return '99';
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const seconds = this.getSeconds();
    const Minutes = this.getMinutes();

    return (
      this.computeTwoDigitNumber(Minutes) +
      ':' +
      this.computeTwoDigitNumber(seconds)
    );
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
