function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}

console.log(loadData("news"));

//Set parse data to a virable for less code when transporting data through
//functions
const data = loadData("news")

const placeContent = document.getElementById("place-content");

placeContent.innerHTML +=
    `<div class="collab1">
        <h2>Recent News</h2>
        <ul>
            <li>${data.events[0]}</li>
            <li>${data.events[1]}</li>
            <li>${data.events[2]}</li>
            <li>${data.events[3]}</li>
            <li>${data.events[4]}</li>
            <li>${data.events[5]}</li>
            <li>${data.events[6]}</li>
            <li>${data.events[7]}</li>
            <li>${data.events[8]}</li>
            <li>${data.events[9]}</li>
            <li>${data.events[10]}</li>
            
        </ul>
    </div>`
placeContent.innerHTML +=
    `<div class=pic1>
        <img src="${data.portrait.picture}" alt="Kanyes Portrait">
        <h3>${data.portrait.fullname}</h3>
    </div>`
 placeContent.innerHTML +=
    `<div class=country1>
        <h2>Country of Origin</h2>
        <p>${data.country[0]}</p>
    </div>`
placeContent.innerHTML +=
    `<div class=alias1>
        <h2>Alias</h2>
        <ul>
            <li>${data.aliases[0]}</li>
            <li>${data.aliases[1]}</li>
            <li>${data.aliases[2]}</li>
        </ul>
    </div>