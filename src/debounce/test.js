const debounce = require("./index");

const fn = debounce(
  function (...args) {
    console.log("name:", this.name);
    console.log("args:", args);
  },
  200,
  true
);

const obj = {
  name: "obj",
  fn,
};

obj.fn(1);
obj.fn(2);
obj.fn(3);
