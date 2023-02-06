function throttle1(callback, wait = 200, immediate = false) {
  let timer = null;
  let first = true;

  return function (...args) {
    if (immediate && first) {
      callback.apply(this, args);
      first = false;
      return;
    }

    if (timer === null) {
      timer = setTimeout(() => {
        callback.apply(this, args);
        clearTimeout(timer);
        timer = null;
      }, wait);
    }
  };
}

function throttle2(callback, wait = 200, immediate = false) {
  let previous = immediate ? 0 : Date.now();

  return function (...args) {
    const now = Date.now();

    if (now - previous > wait) {
      callback.apply(this, args);
      previous = now;
    }
  };
}

module.exports = {
  throttle1,
  throttle2,
};
