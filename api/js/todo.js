function loadTodo() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((response) => response.json())
    .then((toDos) => displayTodo(toDos));
}

function displayTodo(toDos) {
  console.log(toDos);
  const toDosContainer = document.getElementById("todos-container");
  for (const todo of toDos) {
    const article = document.createElement("article");
    article.classList.add("post");
    article.innerHTML = `
        <h4>${todo.userId}</h4>
        <h4>${todo.id}</h4>
        <h4>${todo.title}</h4>
        <h6>${todo.completed}</h6>
      `;
    toDosContainer.appendChild(article);
    article.style.padding = "30px";
    article.style.marginBottom = "20px";
    article.style.borderRadius = "10px";
    article.style.backgroundColor = "skyBlue";
  }
}
