

const loadMeals = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
    
    fetch(url)//this line fetches the url;
    .then(res => res.json())//this line converts the response to json
    .then(data => displayMeals(data.meals))//this line just prints the json data;
}

// this function will display what various meals we have 
const displayMeals = meals => {
    const mealContainer = document.getElementById('mealContainer');//step-1

    //for each loop to get each meals;
    meals.forEach(meal => {//step-2
        const mealDiv = document.createElement('div');//step-3

        mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${meal.strMeal}</h3>
                <h4>${meal.strCategory}</h4>
                <h6>${meal.strArea}</h6>
                <p class="card-text">${meal.strInstructions.slice(0, 300)}.</p>
            </div>
        </div>
        `;

        // step-4 
        mealContainer.appendChild(mealDiv);
    });
}

loadMeals();