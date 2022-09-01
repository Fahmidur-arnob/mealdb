

const loadMeals = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
    
    fetch(url)//this line fetches the url;
    .then(res => res.json())//this line converts the response to json
    .then(data => console.log(data.meals))//this line just prints the json data;
}

loadMeals();