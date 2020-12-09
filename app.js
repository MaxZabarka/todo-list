const input = document.querySelector(".input-box")
const addButton = document.querySelector(".add-button")
const todoList = document.querySelector(".todo__items")

addButton.addEventListener("click",addTodo)

function addTodo(event) {
  console.log("Add!")

  //Create new list element
  const todoListElem = document.createElement("li")
  todoListElem.classList.add("todo__item")
  //Create label
  const todoLabel = document.createElement("p")
  todoLabel.innerText = "hello!"
  todoLabel.classList = "todo__label"
  //Create button
  const todoButton = document.createElement("button")
  todoButton.classList = "remove-button"
  const todoButtonIcon = document.createElement("i")
  todoButtonIcon.classList = "fa fa-trash"
  todoButton.appendChild(todoButtonIcon)

  //Append to List
  todoListElem.appendChild(todoLabel)
  todoList.appendChild(todoListElem)
  todoList.appendChild(todoButton)
}
