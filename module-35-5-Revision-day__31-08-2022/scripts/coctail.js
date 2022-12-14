const loadCocktailItems = async (search) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`;
  const response = await fetch(url);
  const data = await response.json();
  displayCocktailItems(data.drinks);
};

const displayCocktailItems = (cocktails) => {
  const cocktailItems = document.getElementById("cocktail-items");
  cocktailItems.innerHTML = "";
  cocktails.forEach((cocktail) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("col");
    itemDiv.innerHTML = `
    <div class="card">
      <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="Cocktail image">
      <div class="card-body">
        <h5 class="card-title">Title: ${cocktail.strAlcoholic}</h5>
        <p class="card-text">Instructions: ${cocktail.strInstructionsDE}</p>
        <p class="card-text">Drink Id: ${cocktail.idDrink} </p>

        <button type="button" onclick="loadCocktail(${cocktail.idDrink})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         <i class="fas fa-book-open"></i> Show details
        </button>
      </div>
    </div>
    `;
    cocktailItems.appendChild(itemDiv);
  });
};

/* Search option begins
=======================*/
const searchCocktail = () => {
  const searchField = document.getElementById("search-field");
  const searchWord = searchField.value;
  loadCocktailItems(searchWord);
  searchField.value = "";
};

// Enabling search on pressing enter key
document
  .getElementById("search-field")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchCocktail();
    }
  });

// display empty field message
const displayMessage = () => {
  const data = document.getElementById("search-field");
  if (data.value === "") {
    alert("Search field is empty !!!");
  } else {
    searchCocktail();
  }
};
/* Search option ends
=====================*/

const loadCocktail = async (idDrink) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.drinks);
  displayCocktailItemDetails(data.drinks);
};

const displayCocktailItemDetails = (item) => {
  console.log(item);
  const modalTitle = document.getElementById("cocktail-title");
  modalTitle.innerText = "Item: " + item[0].strCategory;
  const modalBody = document.getElementById("body-elements");

  modalBody.innerHTML = `<p>Instruction: ${
    item[0].strInstructionsDE
      ? item[0].strInstructionsDE
      : "No data is available."
  }</p>
  <img src="${
    item[0].strDrinkThumb ? item[0].strDrinkThumb : "No thumbnail found."
  }" class="img-fluid" alt="Cocktail imd" style="width:250px; height:250px; float:left;margin-right: 10px; border-radius:10px;" />
  <p>Ingredient: ${
    item[0].strIngredient1 ? item[0].strIngredient1 : "No ingredient is found."
  } ${
    item[0].strIngredient2 ? item[0].strIngredient2 : "No ingredient is found."
  } ${
    item[0].strIngredient3 ? item[0].strIngredient3 : "No ingredient is found."
  }</p>
  <p>It: ${
    item[0].strInstructionsIT
      ? item[0].strInstructionsIT
      : "No data is available."
  }</p>
  `;
};

// Loading all available by default
loadCocktailItems("a");
