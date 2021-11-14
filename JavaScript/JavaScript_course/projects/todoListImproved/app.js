//add new todos
const addForm = document.querySelector(".add");

//reference to inject the "generateTemplete" function into the Ul
const list = document.querySelector(".todos");

//create a function to generate a templete every tame a todo is added
const generateTemplate = (todo) => {
  const html = `<li
          class=" list-group-item d-flex justify-content-between align-items-center
          " >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  console.log(todo);
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});
