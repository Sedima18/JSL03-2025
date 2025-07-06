const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];
// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}

// Initial tasks array 
const tasks = [
  { id: 1, title: "understanding databases", description: "learn databases everyday", status: "todo" },
  { id: 2, title: "have", description: "do fun activities with friends", status: "done" },
  // …other existing tasks
];

// Function to prompt and validate a string input
function promptForString(message) {
  let input;
  do {
    input = prompt(message)?.trim();
    if (!input) alert("This field cannot be empty. Please try again.");
  } while (!input);
  return input;
}

// Function to prompt and validate status (must be "todo" or "done")
function promptForStatus(message) {
  let status;
  do {
    status = prompt(message)?.trim().toLowerCase();
    if (status !== "todo" && status !== "done") {
      alert("Status must be either 'todo' or 'done'. Please try again.");
      status = null;
    }
  } while (!status);
  return status;
}

// Main loop: up to 3 new tasks
for (let i = 0; i < 3; i++) {
  const limitReached = tasks.length >= 3 + (tasks.length - i); 
  // note: tasks always grow; this check is mainly illustrative
  if (tasks.length >= 3 + (tasks.length - i)) {
    alert("There are enough tasks on your board, please check them in the console.");
    break;
  }

  const addMore = confirm(
    `You can add ${3 - i} more task(s). Do you want to add a new task?`
  );
  if (!addMore) break;

  const title = promptForString("Enter task title:get  an internship");
  const description = promptForString("Enter task description:approach companies for learning more tech skills");
  const status = promptForStatus("Enter task status ('todo' or 'done'):todo");

  const lastId = tasks.length ? tasks[tasks.length - 1].id : 0;
  const newTask = {
    id: lastId + 1,
    title,
    description,
    status,
  };
  tasks.push(newTask);
}

// Log all tasks
console.log("=== All Tasks ===");
tasks.forEach((t) => {
  console.log(
    `ID: ${t.id} | Title: ${t.title} | Description: ${t.description} | Status: ${t.status}`
  );
});

// Filter and log completed tasks
const doneTasks = tasks.filter((t) => t.status === "done");
console.log("=== Completed Tasks ===");
doneTasks.forEach((t) => {
  console.log(
    `ID: ${t.id} | Title: ${t.title} | Description: ${t.description}`
  );
});

