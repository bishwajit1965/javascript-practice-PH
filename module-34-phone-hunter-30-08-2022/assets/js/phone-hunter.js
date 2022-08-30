const loadPhones = async (searchByText, dataRange) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchByText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, dataRange);
};
const displayPhones = (phones, dataRange) => {
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";

  /* Display ten phones only
  =========================== */
  const showAll = document.getElementById("show-all-phones");
  if (dataRange && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }
  /* Display no phone found message
  ================================= */
  const noPhoneFound = document.getElementById("message-no-phone-found");
  if (phones.length === 0) {
    noPhoneFound.classList.remove("d-none");
  } else {
    noPhoneFound.classList.add("d-none");
  }
  //Fetch phones
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    // console.log(phoneDiv);
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
    <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="Phone Image">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">Click the button below to see the detailed features of the product. Wish you good luck.</p>
            <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#loadPhoneDetails">Show Details</button>
        </div>
    </div>`;
    phonesContainer.appendChild(phoneDiv);
    // stop spinner
    spinnerToggler(false);
  });
};

const searchProcess = (dataRange) => {
  spinnerToggler(true);
  const searchField = document.getElementById("search-input-field");
  const searchTerm = searchField.value;
  loadPhones(searchTerm, dataRange);
};

/* Search handler click
======================= */
document.getElementById("btn-searcher").addEventListener("click", function () {
  // Start loader
  searchProcess(10);
});

/* Enabling search on pressing enter key
======================================== */
document
  .getElementById("search-input-field")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchProcess(10);
    }
  });

/* Spinner toggler
================== */
const spinnerToggler = (isLoadingSpinner) => {
  const loaderArea = document.getElementById("spinnerLoader");
  if (isLoadingSpinner) {
    loaderArea.classList.remove("d-none");
  } else {
    loaderArea.classList.add("d-none");
  }
};

document
  .getElementById("btn-show-all-phones")
  .addEventListener("click", function () {
    searchProcess();
  });

/* Loading phone details using id
================================= */
const loadPhoneDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  displayPhoneDetails(data.data);
};

/* Displays phone details
========================= */
const displayPhoneDetails = (phone) => {
  console.log(phone);
  const modalTitle = document.getElementById("loadPhoneDetailsLabel");
  modalTitle.innerText = phone.name;
  const phoneDetail = document.getElementById("phone-details");
  console.log(phone.mainFeatures.sensors[0]);

  phoneDetail.innerHTML = `
    <p>Release data: ${
      phone.releaseData ? phone.releaseData : "No release data is available"
    }</p>

    <p>Storage: ${
      phone.mainFeatures
        ? phone.mainFeatures.storage
        : "No storage data is available"
    }</p>

    <p>Others: ${
      phone.others ? phone.others.Bluetooth : "No blue-tooth data is available"
    }</p>

    <p>Sensors: ${
      phone.mainFeatures.sensors
        ? phone.mainFeatures.sensors[0]
        : "No sensor features available"
    }</p> `;
};

/* Loads phones
=============== */
loadPhones("apple");
