const loadRandomUsers = () => {
  const url = "https://randomuser.me/api/?results=30";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayRandomUsers(data.results));
};

const displayRandomUsers = (users) => {
  const usersDiv = document.getElementById("user-container");

  for (const user of users) {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");

    userDiv.innerHTML = `
        <img src="${user.picture.large}" class="user-thumb" alt="Image" />
        <h5>Name: ${user.name.title} ${user.name.first}${user.name.last}</h5>
        <h5>Id: ${user.id.name} - ${user.id.value}</h5>
        <h5>Email: ${user.email}</h5>
        <h5>Phone: ${user.phone}</h5>
        <h5>Street: ${user.location.street.name}</h5>
        <h5>City: ${user.location.city}</h5>
        <h5>Latitude: ${user.location.coordinates.latitude}</h5>
        <h5>Longitude: ${user.location.coordinates.longitude}</h5>
        <h5>State: ${user.location.state}</h5>
        <h5>Country: ${user.location.country}</h5>
        <h5>Pin code: ${user.location.postcode}</h5>
        `;
    usersDiv.appendChild(userDiv);
  }
};
loadRandomUsers();
