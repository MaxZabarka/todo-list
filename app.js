const input = document.querySelector(".input-box")
const addButton = document.querySelector(".add-button")
const todoList = document.querySelector(".todo__items")

addButton.addEventListener("click",addTodo)
todoList.addEventListener("click",deleteTodo)

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
   event.preventDefault();
   addButton.click()
  }
});

function addTodo(event) {
  event.preventDefault();

  if (input.value == "") return
  //Create new list element
  const todoListElem = document.createElement("li")
  todoListElem.classList.add("todo__item")
  //Create label
  const todoLabel = document.createElement("p")
  todoLabel.innerText = input.value
  input.value = ""
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

function deleteTodo(e) {
  const item = e.target
  console.log(item)
  if (item.classList[0] === "remove-button") {
    parent = item.parentElement
    parent.classList.add("fall")
    parent.addEventListener("transitionend", () => {
      parent.remove()
    })
    // parent.remove()
  } else if (item.classList[0] === "todo__label") {
    item.classList.toggle("strikethrough")
  }
}
