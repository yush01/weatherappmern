const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
// const today_date = document.getElementById('today_date');

// const getCurrentTime = () => {
//     var months = [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "June",
//         "July",
//         "Aug",
//         "Sept",
//         "Oct",
//         "Nov",
//         "Dec",
//     ]

//     var now = new Date();
//     var month = months[now.getMonth()] ;
//     var day = now.getDate();

    

    

//     today_date.innerText = `${month} ${day}`  ;
// };
// getCurrentTime();


// const getCurrentDay = () => {
//     var weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";
//     let currentTime = new Date();
//     let today = weekday[currentTime.getDay()];
//     let day = document.getElementById("day");
//     day.innertext = today;
// };

// getCurrentDay();

const getinfo = async(event)=>{
    event.preventDefault();
    let city_val = cityName.value;

    if(city_val === ""){
        city_name.innerText = `Please write the name of city before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city_val}&appid=8a94e22a255df05d7b33ca4a40b2718f&`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;

        const tempMood =  arrData[0].weather[0].main;
        if(tempMood == 'Clear'){
            temp_status.innerHTML = "<i class='fas fa-sun' style=color:#eccc68;'></i>";
        }
        else if(tempMood == 'clouds'){
            temp_status.innerHTML = "<i class='fas fa-cloud' style=color:#f1f2f6;'></i>";
        }
        else if(tempMood == 'Rain'){
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style=color:#a4b0be;'></i>";
        }
        else{
            temp_status.innerHTML = "<i class='fas fa-sun' style=color:#eccc68;'></i>";
        }

        datahide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText = `Please write the name of city Properly`;
            datahide.classList.add('data_hide');
        }
    }


};

submitBtn.addEventListener('click',getinfo);




