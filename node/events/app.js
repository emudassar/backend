const EventEmiter = require("events");
const emiiter = new EventEmiter();

emiiter.on("greet", (userdetail) => {
  console.log(`Hello ${userdetail.name}, You are a ${userdetail.prof} right?`);
});

emiiter.emit("greet", {name: "Mudassar", prof: "web developer"})


