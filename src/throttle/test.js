const { throttle1, throttle2 } = require("./index");

const fn1 = throttle1(
  function (...args) {
    console.log("throttle1");
    console.log("name:", this.name);
    console.log("args:", args);
  },
  200,
  true
);

const fn2 = throttle2(
  function (...args) {
    console.log("throttle2");
    console.log("name:", this.name);
    console.log("args:", args);
  },
  200,
  true
);

const obj = {
  name: "obj",
  fn1,
  fn2,
};

obj.fn1(1);
obj.fn1(2);
obj.fn1(3);

obj.fn2(1);
obj.fn2(2);
obj.fn2(3);
