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

// Initialize the task array with some existing tasks
let tasks = [
  { id: 1, title: "launch career", description: "lanch epic career,conquer react,understand databases", status: "todo" },
  { id: 2, title: "launch career", description: "explore ES6 feature,have fun", status: "done" }
];

// Function to add a new task
function addTask() {
  if (tasks.length >= 5) {
    alert("There are enough tasks on your board, please check them in the console.");
    return;
  }

  // Prompt user for task details
  const title = prompt("Enter task title:");
  const description = prompt("Enter task description:");
  const status = prompt("Enter task status (e.g., 'pending' or 'done'):");

  // Determine the new task ID
  const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

  // Create the new task object
  const newTask = {
    id: newId,
    title: title,
    description: description,
    status: status.toLowerCase()
  };

  // Add the new task to the array
  tasks.push(newTask);
}

// Function to display all tasks
function displayAllTasks() {
  console.log("All Tasks:");
  tasks.forEach(task => {
    console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}, Status: ${task.status}`);
  });
}

// Function to display only completed tasks
function displayCompletedTasks() {
  const completedTasks = tasks.filter(task => task.status === "done");
  console.log("Completed Tasks:");
  completedTasks.forEach(task => {
    console.log(`ID: ${task.id}, Title: ${task.title}, Description: ${task.description}`);
  });
}

// Example usage:
// Add up to three new tasks
for (let i = 0; i < 3; i++) {
  addTask();
}

// Display all tasks
displayAllTasks();

// Display only completed tasks
displayCompletedTasks();
