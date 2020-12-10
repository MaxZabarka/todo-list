const input = document.querySelector(".input-box")
const addButton = document.querySelector(".add-button")
const todoList = document.querySelector(".todo__items")

document.addEventListener('DOMContentLoaded',getTodos)
addButton.addEventListener("click",addTodo)
todoList.addEventListener("click",deleteTodo)

//Remove all cached list elements

// As long as <ul> has a child node, remove it
while (todoList.hasChildNodes()) {
  toDoList.removeChild(toDoList.firstChild);
}

getTodos()
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
   event.preventDefault();
   addButton.click()
  }
});

function createListElement(text) {
  //Create new list element
  const todoListElem = document.createElement("li")
  todoListElem.classList.add("todo__item")
  //Create label
  const todoLabel = document.createElement("p")
  todoLabel.innerText = text
  todoLabel.classList = "todo__label"
  //Create button
  const todoButton = document.createElement("button")
  todoButton.classList = "remove-button"
  todoButton.type = "button"
  //Create icon
  const todoButtonIcon = document.createElement("i")
  todoButtonIcon.classList = "fa fa-trash"
  todoButton.appendChild(todoButtonIcon)


  //Create structure
  todoList.appendChild(todoListElem)
  todoListElem.appendChild(todoLabel)
  todoListElem.appendChild(todoButton)
}

function addTodo(event) {
  event.preventDefault();

  if (input.value == "") return

  createListElement(input.value)
  //add to local storage
  saveLocalTodos(input.value);
  //clear input box
  input.value = ""

}

function deleteTodo(e) {
  const item = e.target
  if (item.classList[0] === "remove-button") {
    parent = item.parentElement
    parent.classList.add("fall")
    setTimeout( () => {
      parent.remove()
    },500)
    removeTodo(item)

  } else if (item.classList[0] === "todo__label") {
    item.classList.toggle("strikethrough")
  }
}
function saveLocalTodos(todo) {
  let todos;
  if(sessionStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(sessionStorage.getItem('todos'))
  }
  todos.push(todo)
  sessionStorage.setItem('todos',JSON.stringify(todos))
}
function getTodos() {
  let todos;
  if(sessionStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(sessionStorage.getItem('todos'))
  }
  todos.forEach(function(todo) {
    createListElement(todo)
  })
}
function removeTodo(todo) {
  let todos;
  if(sessionStorage.getItem('todos') === null) {
    todos = []
  } else {
    todos = JSON.parse(sessionStorage.getItem('todos'))
  }
  todosIndex = todos.indexOf(todo.parentElement.children[0].innerText)
  todos.splice(todosIndex,1)
  sessionStorage.setItem('todos',JSON.stringify(todos))
}
