function flatten1(arr) {
  let res = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flatten1(item));
    } else {
      res.push(item);
    }
  });

  return res;
}

function flatten2(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }

  return arr;
}

function flatten3(arr) {
  const queue = [...arr];
  const res = [];

  while (queue.length > 0) {
    const front = queue.shift();

    if (Array.isArray(front)) {
      queue.push(...front);
    } else {
      res.push(front);
    }
  }

  return res;
}

function flatten4(arr) {
  return arr.reduce((previousArr, currentItem) => {
    return previousArr.concat(
      Array.isArray(currentItem) ? flatten4(currentItem) : currentItem
    );
  }, []);
}

function flatten5(arr) {
  return arr.flat(Infinity);
}

module.exports = {
  flatten1,
  flatten2,
  flatten3,
  flatten4,
  flatten5,
};
