const loadMeals = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeals(data.meals));
};
const displayMeals = (meals) => {
  const mealsDiv = document.getElementById("meals-container");
  mealsDiv.innerHTML = "";
  for (const meal of meals) {
    const mealDiv = document.createElement("col");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
    <div onclick="loadMealsDetails(${meal.idMeal})" class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="Image" />
      <div class="card-body">
      <h3 class="card-title">Meal details</h3>
      <h6 class="card-title">Name: ${meal.strMeal}</h6>
        <h6 class="card-title">Meal Id: ${meal.idMeal}</h6>
        <h6 class="card-title">Desc: ${meal.strArea} ${meal.strCategory}</h6>

        <p class="card-text">
        Instruction: ${meal.strInstructions.slice(0, 100)}
        </p>
      </div>
    </div>
      `;
    mealsDiv.appendChild(mealDiv);
  }
};
const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchWord = searchField.value;
  loadMeals(searchWord);
  searchWord = "";
};

const loadMealsDetails = (idMeal) => {
  console.log("Button clicked", idMeal);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
  const mealDetails = document.getElementById("meal-details");
  mealDetails.innerHTML = "";
  mealDetails.classList.add("card");
  mealDetails.innerHTML = `
      <img src="${meal.strMealThumb}" class="card-img-top" alt="Image" />
      <div class="card-body">
      <h3 class="card-title">Meal details</h3>
      <h6 class="card-title">Name: ${meal.strMeal}</h6>
        <h6 class="card-title">Meal Id: ${meal.idMeal}</h6>
        <h6 class="card-title">Desc: ${meal.strArea} ${meal.strCategory}</h6>
        <h6 class="card-title">Meal Category: ${meal.strCategory}</h6>
        <h6 class="card-title">Meal Category: ${meal.strYoutube}</h6>
        <h6 class="card-title">Source: ${meal.strArea} ${meal.strSource}</h6>
        <p class="card-text">
        Instruction: ${meal.strInstructions.slice(0, 100)}
        </p>
      </div>
  `;
  const mealCard = document.createElement("div");

  mealDetails.appendChild(mealCard);
};
loadMeals("a");
