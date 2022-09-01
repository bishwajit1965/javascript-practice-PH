const loadRandomUsers = () => {
  const url = "https://randomuser.me/api/?results=10";
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
      <h4>Name: ${user.name.title} ${user.name.first}${user.name.last}</h4>
      <h4>Id: ${user.id.name} - ${user.id.value}</h4>
      <h4>Email: ${user.email}</h4>
      <h4>Phone: ${user.phone}</h4>
      <h4>Street: ${user.location.street.name}</h4>
      <h4>City: ${user.location.city}</h4>
      <h4>Latitude: ${user.location.coordinates.latitude}</h4>
      <h4>Longitude: ${user.location.coordinates.longitude}</h4>
      <h4>State: ${user.location.state}</h4>
      <h4>Country: ${user.location.country}</h4>
      <h4>Pin code: ${user.location.postcode}</h4>
      <h4>City: ${user.location.city}</h4>
      `;
    usersDiv.appendChild(userDiv);
    userDiv.style.backgroundColor = "#ddd";
    userDiv.style.marginBottom = "15px";
    userDiv.style.padding = "10px";
    userDiv.style.borderRadius = "10px";
  }
};

loadRandomUsers();
