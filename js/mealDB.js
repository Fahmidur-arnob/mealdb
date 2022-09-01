

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
        const mealDiv = document.createElement('div');
        mealDiv.innerHTML = `
        <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        
        `;
    });
}

loadMeals();