const loadPhoto = async () => {
  const url = `https://jsonplaceholder.typicode.com/photos`;
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  displayPhotos(data.slice(0, 120));
};
const displayPhotos = (photos) => {
  const photoContainer = document.getElementById("photo-container");
  photos.forEach((photo) => {
    // console.log(photo);
    const photoDiv = document.createElement("div");
    photoDiv.classList.add("col");
    photoDiv.innerHTML = `
    <div class="card">
    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="Photo">
    <div class="card-body">
      <h5 class="card-title">Title: ${photo.title.slice(0, 50)}</h5>
      <p class="card-text">URL: <a href="${photo.url}">visit</a> </p>
      <button type="button" onclick="loadPhotoDetail(${
        photo.id
      })" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Show details of photo:  ${photo.id}
    </div>
    `;
    photoContainer.appendChild(photoDiv);
  });
};
const loadPhotoDetail = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  displayPhotoDetails(data);
};

const displayPhotoDetails = (photo) => {
  console.log(photo);
  const modalTitle = document.getElementById("exampleModalLabel");
  modalTitle.innerText = "Photo title: " + photo.title;

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `
  <img src="${
    photo.thumbnailUrl ? photo.thumbnailUrl : "No thumbnail found."
  }" class="img-fluid" alt="Cocktail imd" style="width:250px; height:250px; float:left;margin-right: 10px; border-radius:10px;" />
  <h5>Album Id: ${photo.albumId}</h5>
  <p>Hello viewers of all categories. You are most welcome here to practice API with photos. You can help us. Think logically and wisely in using apis especially while using object or array. wish you all a very happy and prosperous future.</p>
  `;
};
loadPhoto();
