function unique1(arr) {
  const seen = [];

  arr.forEach((item) => {
    if (!seen.includes(item)) {
      seen.push(item);
    }
  });

  return seen;
}

function unique2(arr) {
  const seen = new Set();

  arr.forEach((item) => {
    if (!seen.has(item)) {
      seen.add(item);
    }
  });

  return [...seen];
}

function unique3(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}

function unique4(arr) {
  // return Array.from(new Set(arr));
  return [...new Set(arr)];
}

function unique5(arr) {
  return arr.reduce((previousArr, currentItem) => {
    if (!previousArr.includes(currentItem)) {
      return [...previousArr, currentItem];
    }
    return previousArr;
  }, []);
}

module.exports = {
  unique1,
  unique2,
  unique3,
  unique4,
  unique5,
};
