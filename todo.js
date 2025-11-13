const inputtask = document.getElementById("task");
const addbtn = document.querySelector(".add button");
const tasklist = document.querySelector(".tasklists");

function addTask(taskText) {
  if (taskText.trim() === "") return;

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const taskContent = document.createElement("div");
  taskContent.classList.add("task-text");
  taskContent.textContent = taskText;

  const actions = document.createElement("div");
  actions.classList.add("task-actions");

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("task-btn");
  completeBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  completeBtn.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("task-btn");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  taskItem.appendChild(taskContent);
  taskItem.appendChild(actions);
  tasklist.appendChild(taskItem);
}

addbtn.addEventListener("click", () => {
  const txt = inputtask.value;
  addTask(txt);
  inputtask.value = "";
});
