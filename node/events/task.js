const eventEmitter = require("events");
const emitter = new eventEmitter();

const EventCounts = {
  "user-login": 0,
  "user-purchase": 0,
  "profile-update": 0,
  "user-logout": 0,
};

emitter.on("user-login", (username) => {
  EventCounts["user-login"]++;
  console.log(`${username} logged in`);
});

emitter.on("user-purchase", (userdetail) => {
  EventCounts["user-purchase"]++;
  console.log(
    `Hi ${userdetail.username}, are you purchased ${userdetail.item}`
  );
});

emitter.on("profile-update", (userupdate) => {
  EventCounts["profile-update"]++;
  console.log(`Hi ${userupdate.username}, are you update ${userupdate.email}`);
});

emitter.on("user-logout", (username) => {
  EventCounts["user-logout"]++;
  console.log(`${username} Logout`);
});

emitter.on("summary", () => {
  console.log(EventCounts);
});

emitter.emit("user-login", "mudassar");
emitter.emit("user-purchase", { username: "mudassar", item: "Laptop" });
emitter.emit("profile-update", { username: "mudassar", email: "email" });
emitter.emit("user-logout", "mudassar");
emitter.emit("summary", EventCounts);
