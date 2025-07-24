import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n1: Add a task");
  console.log("2: View task");
  console.log("3: Exit");
  rl.question("Choose an option: ", handleInput);
};

const handleInput = (Option) => {
  if (Option === "1") {
    rl.question("Enter the task: ", (task) => {
      todos.push(task);
      console.log("Task added: ", task);
      showMenu();
    });
  } else if (Option === "2") {
    console.log("\n Your todo Lists");
    todos.forEach((task, index) => {
      console.log(`${index+1}. ${task}`);
    });
    showMenu();
  } else if (Option === "3") {
    console.log("Good By!");
    rl.close();
  } else {
    console.log("Invalid option. Please choose the right option");
    showMenu()
  }
};

showMenu();
