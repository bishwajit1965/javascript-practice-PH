// fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
//   response.json(response)
// );
//   .then((json) => console.log(json));

function loadData() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function loadUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(users) {
  const ul = document.getElementById("user-data");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
    console.log(user.name);
  }
}
