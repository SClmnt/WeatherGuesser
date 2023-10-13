const leftBlock = document.getElementById("blocQuizz__choice--left");
const equalBlock = document.getElementById("blocQuizz__choice--equal")
const rightBlock = document.getElementById("blocQuizz__choice--right");
const quizzBlock = document.getElementById("blocQuizz");
const resultBlock = document.getElementById("blocResultat");
const choiceBtns = document.querySelectorAll('.blocQuizz__choice');
const retryButton = document.getElementById("retryButton");

const APIKey = "d4fc4f58451e23ec299d93fa1f4cf69c";
const importedData = window.capitals;


function getRandomCity(){
    const randomFraction = Math.random();
    const randomNumber = Math.floor(randomFraction * 193);
    return importedData[randomNumber];
}

async function fetchWeatherData() {
    let randomCity = getRandomCity();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${randomCity.name.replace(/ /g, "+")},${randomCity.country}&appid=${APIKey}&units=metric&lang=fr`;
    let fetchResult = 'There was an error with the api';
    await fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        fetchResult = data;
      })
      .catch(error => {
        console.error('Fetch error:', error);
        throw error;
      });

      return fetchResult;
};


async function getCity(block){
    let data = await fetchWeatherData();

    block.innerHTML +=`<div class="blocQuizz__choice--name" data-text="${data.name}">${data.name}</div>
    <div class="blocQuizz__choice--country">${data.sys.country}</div>
    <img class="blocQuizz__choice--flag" src="https://flagsapi.com/${data.sys.country}/flat/64.png">`

    return data;
}

function comparaison(firstCity, secondCity) {
  let roundFirstCityTemp = Math.round(firstCity.main.temp);
  let roundSecondCityTemp = Math.round(secondCity.main.temp);
  let result ="";
  if(roundFirstCityTemp === roundSecondCityTemp){
    result = {name: "equal", temp: roundFirstCityTemp};
  }else if(roundFirstCityTemp > roundSecondCityTemp){
    result = {name: firstCity.name, temp: roundFirstCityTemp, lowestName: secondCity.name, lowestTemp: roundSecondCityTemp};
  }else if(roundSecondCityTemp > roundFirstCityTemp){
    result = {name: secondCity.name, temp: roundSecondCityTemp, lowestName: firstCity.name, lowestTemp: roundFirstCityTemp};
  }
  return result;
}


async function displayCities() {
  let leftCityData = await getCity(leftBlock);
  let rightCityData = await getCity(rightBlock);
  equalBlock.innerHTML = `<div class="blocQuizz__choice--name" data-text="equal">Egalité</div>`
  const result = comparaison(leftCityData, rightCityData);

  cachedResult = result;

}

function tryAnswer(event) {
    let button = event.currentTarget;
    let answer = button.firstChild.getAttribute("data-text")
    if(answer === cachedResult.name){
      if(cachedResult.name === "equal"){
        resultBlock.innerHTML += `<div class="blocResultat__temp">${cachedResult.temp}°C</div>
        <div class="blocResultat__text">Bien joué! Il fait effectivement la même température dans ces deux villes!</div>`; 
      }else{
      resultBlock.innerHTML += `<div class="blocResultat__temp">${cachedResult.temp}°C</div>
      <div class="blocResultat__text">Bien joué! C'est effectivement à ${cachedResult.name} qu'il fait le plus chaud, alors qu'à ${cachedResult.lowestName} il fait ${cachedResult.lowestTemp}°C</div>`;
      
      }
    }else{
      if(cachedResult.name === "equal"){
        resultBlock.innerHTML += `<div class="blocResultat__temp">${cachedResult.temp}°C</div>
        <div class="blocResultat__text">Dommage! Il fait la même température dans ces deux villes!</div>`;  
      }else{
      resultBlock.innerHTML += `<div class="blocResultat__temp">${cachedResult.temp}°C</div>
      <div class="blocResultat__text">Dommage! C'est à ${cachedResult.name} qu'il fait le plus chaud, alors qu'à ${cachedResult.lowestName} il fait ${cachedResult.lowestTemp}°C</div>`;
      }
    }
    choiceBtns.forEach((button)=>{
      button.innerHTML = '';
    })
    quizzBlock.style.display = "none";
    retryButton.style.display = "block";
} 

displayCities();

retryButton.addEventListener('click', () => {
  retryButton.style.display = "none";
  quizzBlock.style.display = "flex";
  resultBlock.innerHTML ='';
  displayCities();
});

choiceBtns.forEach((button) =>{
  button.addEventListener('click',tryAnswer);
});

