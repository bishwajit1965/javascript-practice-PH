function loadPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((posts) => displayPosts(posts));
}

function displayPosts(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const article = document.createElement("article");
    article.classList.add("post");
    article.innerHTML = `
        <h4>${post.id}</h4>
        <h4>${post.title}</h4>
        <h6>${post.userId}</h6>
        <p>${post.body}</p>
      `;
    postContainer.appendChild(article);
    article.style.padding = "30px";
    article.style.marginBottom = "20px";
    article.style.borderRadius = "10px";
    article.style.backgroundColor = "skyBlue";
  }
}
// loadPosts();
