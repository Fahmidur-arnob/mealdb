

const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    fetch(url)//this line fetches the url;
        .then(res => res.json())//this line converts the response to json
        .then(data => displayMeals(data.meals))//this line just prints the json data;
}

// this function will display what various meals we have 
const displayMeals = meals => {
    const mealContainer = document.getElementById('mealContainer');//step-1
    mealContainer.innerHTML = ``

    //for each loop to get each meals;
    meals.forEach(meal => {//step-2
        const mealDiv = document.createElement('div');//step-3
        mealDiv.classList.add('col');

        mealDiv.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${meal.strMeal}</h3>
                <h4>${meal.strCategory}</h4>
                <h6>${meal.strArea}</h6>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}.</p>
            </div>
        </div>
        `;

        // step-4 
        mealContainer.appendChild(mealDiv);
    });
}

const searchFood = () => {
    const searchArea = document.getElementById('searchMeal'); //got the input field

    const searchText = searchArea.value;//got what the user is typing;

    loadMeals(searchText);//this will show all the search resultse;

    searchArea.value = '';//this will get rid of the previous searches;
}

const loadMealDetails = (mealId) => {
    const dynamicURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    fetch(dynamicURL)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;//to clear the first search;

    const detailDiv = document.createElement('div');

    detailDiv.classList.add('card');
    detailDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <h4>${meal.strCategory}</h4>
            <h6>${meal.strArea}</h6>
            <p class="card-text">${meal.strInstructions.slice(0, 400)}.</p>
        </div>
    `;
    detailContainer.appendChild(detailDiv);
}

loadMeals('');