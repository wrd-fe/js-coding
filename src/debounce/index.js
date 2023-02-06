function debounce(callback, wait = 200, immediate = false) {
  let timer = null;
  let first = true;

  return function (...args) {
    if (immediate && first) {
      callback.apply(this, args);
      first = false;
      return;
    }

    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, wait);
  };
}

module.exports = debounce;
