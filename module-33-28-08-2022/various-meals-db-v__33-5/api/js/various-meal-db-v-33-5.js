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
    <div class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="Image" />
      <div class="card-body">
      <h3 class="card-title">Meal details</h3>
      <h6 class="card-title">Name: ${meal.strMeal}</h6>
        <h6 class="card-title">Meal Id: ${meal.idMeal}</h6>
        <h6 class="card-title">Desc: ${meal.strArea} ${meal.strCategory}</h6>
        <p class="card-text">
        Category: ${meal.strInstructions.slice(0, 100)}
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
};
loadMeals("a");