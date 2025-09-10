function Greet() {
  console.log("Hello");
}

Greet();

function Test(fn) {
  fn();
}

Test(Greet);
