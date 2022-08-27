function loadComments() {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((response) => response.json())
    .then((comments) => displayComments(comments));
}
function displayComments(comments) {
  console.log(comments);
  const commentContainer = document.getElementById("comment-container");
  for (const comment of comments) {
    const article = document.createElement("article");
    article.classList.add("post");
    article.innerHTML = `
        <h4>${comment.postId}</h4>
        <h4>${comment.id}</h4>
        <h4>${comment.name}</h4>
        <h6>${comment.email}</h6>
        <p>${comment.body}</p>
      `;
    commentContainer.appendChild(article);
    article.style.padding = "30px";
    article.style.marginBottom = "20px";
    article.style.borderRadius = "10px";
    article.style.backgroundColor = "skyBlue";
  }
}
// loadComments();
