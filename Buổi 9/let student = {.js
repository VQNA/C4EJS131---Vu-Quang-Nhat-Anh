const todoList = ["Homework", "Jogging", "Shopping"]

const ul = document.createElement("ul")

for (let i = 0; i < todoList.length; i++) {
	const li = document.createElement("li")
	li.innerHTML = todoList[i]
	ul.appendChild(li)
}

document.appendChild(ul)