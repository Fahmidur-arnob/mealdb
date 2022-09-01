

const loadMeals = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
    
    fetch(url)//this line fetches the url;
    .then(res => res.json())//this line converts the response to json
    .then(data => displayMeals(data.meals))//this line just prints the json data;
}

// this function will display what various meals we have 
const displayMeals = meals => {
    const mealContainer = document.getElementById('mealContainer');

    //for each loop to get each meals;
    meals.forEach(meal => {
        
    });
}


loadMeals();