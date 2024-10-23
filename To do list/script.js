// Listen for Enter key on the input field
const taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    document.querySelector("button").click(); // Simulate button click
  }
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    return; // Ignore empty tasks
  }

  // Create a new list item
  const listItem = document.createElement("li");

  // Create a checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = () => {
    // Toggle a completed class when the checkbox is clicked
    listItem.classList.toggle("completed");
  };

  // Create a span to hold the task text
  const taskText = document.createElement("span");
  taskText.textContent = taskValue;

  // Create a remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-btn";
  removeButton.onclick = () => {
    taskList.removeChild(listItem);
    if (taskList.children.length === 0) {
      addEmptyStateMessage();
    }
  };

  // Add the checkbox and text to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(removeButton);

  // Add the new task to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";

  // Remove the empty state message if it exists
  removeEmptyStateMessage();
}

function addEmptyStateMessage() {
  const emptyStateMessage = document.createElement("li");
  emptyStateMessage.className = "empty-state";
  emptyStateMessage.textContent = "Your tasks will appear here";
  document.getElementById("taskList").appendChild(emptyStateMessage);
}

function removeEmptyStateMessage() {
  const emptyStateMessage = document.querySelector(".empty-state");
  if (emptyStateMessage) {
    emptyStateMessage.remove();
  }
}
