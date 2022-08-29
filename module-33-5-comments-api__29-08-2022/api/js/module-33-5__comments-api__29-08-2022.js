function loadComments() {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then((response) => response.json())
    .then((comments) => displayComments(comments.slice(0, 20)));
}
function loadPost(id) {
  const url = `https://jsonplaceholder.typicode.com/posts?id=${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPost(data[0]));
}

function displayComments(comments) {
  console.log(comments);
  const commentContainer = document.getElementById("comment-container");
  for (const comment of comments) {
    const commentColumn = document.createElement("div");
    commentColumn.classList.add("col");
    commentColumn.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h4>Comment detail</h4><hr />
        <h6 class="card-title">Comment post id: ${comment.postId}</h6>
        <h6>Comment id: ${comment.id}</h6>
        <h6>Commenter: ${comment.name.slice(0, 20)}</h6>
        <h6>Email: ${comment.email}</h6>
        <p><strong>Comment:</strong> ${comment.body.slice(0, 100)}</p>
      </div>
      <div className="card-footer">
        <button onclick="loadPost(${
          comment.postId
        })" class="btn btn-sm btn-primary m-3">View Post</button>
      </div>
    </div>`;
    commentContainer.appendChild(commentColumn);
  }
}

const displayPost = (post) => {
  const postContainer = document.getElementById("post-container");
  const postColumn = document.createElement("div");
  postColumn.classList.add("col");
  postContainer.innerHTML = "";
  postColumn.innerHTML = `
  <div class="card">
    <div class="card-body">
    <h4>Post details</h4><hr />
      <h6 class="card-title">Post id: ${post.id}</h6>
      <h6>${post.title}</h6>
      <p>${post.body}</p>
    </div>
  </div>`;

  postContainer.appendChild(postColumn);
  console.log("Button clicked", id);
};
loadComments();
