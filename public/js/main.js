

const submitBtn = document.getElementById("submitBtn");
const tempform = document.getElementById("tempform");
const cityname = document.getElementById("cityname");
const cityerr = document.getElementById("city-name");

const tempvalue = document.getElementById("tempvalue");

const tempstatus = document.getElementById("temp-status")
const todaydate = document.getElementById("todaydate")
const todayday = document.getElementById("day")

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const date = new Date();
const day = weekdays[date.getDay()];
const month = months[date.getMonth()];
const today = date.getDate()

console.log(today)

todaydate.innerText = `${today} ${month}`
todayday.innerText = day


tempform.addEventListener('submit', async (e) => {
    e.preventDefault();

    let cityval = cityname.value

    if (cityval === "") {
        cityerr.textContent = "Please enter the name "
        cityerr.style.fontSize = "2rem"
        cityerr.style.color = "yellow"
        // cityerr.classList.add("data-hide")
        temp.classList.add("data-hide")
        tempstatus.classList.add("data-hide")


    } else {
        try {

            temp.classList.remove("data-hide")
            tempstatus.classList.remove("data-hide")


            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=process.env.WEATHER_API_KEY `;
            const response = await fetch(url);
            const data = await response.json()
            console.log(data)
            const arrData = [data];

          
            cityerr.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            tempvalue.innerText = arrData[0].main.temp;
            const statuswea = arrData[0].weather[0].main;
          

            if (statuswea == "Clear") {
                tempstatus.innerHTML = `<i class ="fas fa-sun" style="color:yellow; text="clear"><i>`;
            } else if (statuswea == "Clouds") {
                tempstatus.innerHTML = `<i class = "fas fa-cloud" style="color:#f1f2f6;"><i>`;
            } else if (statuswea == "Rain") {
                tempstatus.innerHTML = `<i class = "fas fa-cloud-rain" style="color:white;"><i>`;
            } else if (statuswea == "Snow") {
                tempstatus.innerHTML = `<i class= "fa-solid fa-snowflake" style="color:white;"><i>`;
            }
            else if (statuswea == "Dust") {
                tempstatus.innerHTML = `<i class= "fa-solid fa-sun-dust" style="color:grey;"><i>`;
            }
            else {
                tempstatus.innerHTML == statuswea
            }

        } catch (e) {
            cityerr.textContent = "Pls Enter Proper Value "
            cityerr.style.fontSize = "2rem"
            cityerr.style.color = "orange"
            temp.classList.add("data-hide")
            tempstatus.classList.add("data-hide")
        }


    }
})