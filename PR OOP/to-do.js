class ToDoList {
  constructor(taskListElement) {
    this.taskListElement = taskListElement;
    this.tasks = [];
  }

  addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    this.tasks.push(task);
    this.renderTask(task);
    taskInput.value = "";
  }

  renderTask(task) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("data-id", task.id);

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        this.completeTask(task.id);
      }
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task.text));
    this.taskListElement.appendChild(li);
  }

  completeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    const checkbox = document.querySelector(`input[data-id="${taskId}"]`);
    if (checkbox) {
      const taskElement = checkbox.parentElement;
      this.taskListElement.removeChild(taskElement);
    }
  }
}

const taskListElement = document.getElementById("taskList");
const todoList = new ToDoList(taskListElement);
