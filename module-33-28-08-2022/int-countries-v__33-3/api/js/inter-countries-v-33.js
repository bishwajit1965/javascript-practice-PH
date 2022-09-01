const loadRandomUsers = () => {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  const countriesDiv = document.getElementById("countries-container");
  for (const country of countries) {
    console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");

    countryDiv.innerHTML = `
      <h3>Country: ${country.name.common}</h3>
      <h4>Capital: ${country.capital ? country.capital[0] : "No capital"}</h4>
      <button onclick="loadCountryDetail('${
        country.cca2
      }')">View country details</button>
      `;
    countriesDiv.appendChild(countryDiv);
    countryDiv.style.backgroundColor = "#ddd";
    countryDiv.style.padding = "10px";
    countryDiv.style.borderRadius = "10px";
  }
};

loadRandomUsers();
loadCountryDetail = (code) => {
  //https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  // console.log("Get country detail", code);
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCountryDetail(data[0]));
};

const displayCountryDetail = (country) => {
  const countryDetail = document.getElementById("country-detail");
  countryDetail.classList.add("flag-style");
  countryDetail.innerHTML = `
  <h1>Country: </h1>
  <hr />
  <h2>${country.name.common}</h2>

  <img src="${country.flags.png}" alt="" />
  `;
  countryDetail.style.textAlign = "center";
  countryDetail.style.margin = "20px";
};
