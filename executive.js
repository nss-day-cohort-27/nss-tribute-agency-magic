

function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}
console.log(loadData("Executive"));

//Set parse data to a virable for less code when transporting data through
//functions
const data = loadData("Executive")

const placeContent = document.getElementById("place-content");

placeContent.innerHTML +=
    `<div class=pic1>
        <h1><stong>${data.portrait.fullname}</strong></h1>
    </div>`
placeContent.innerHTML +=
    `<div class=alias1>
        <h2>Alias</h2>
        <ul>
            <li>${data.aliases[0]}</li>
            <li>${data.aliases[1]}</li>
            <li>${data.aliases[2]}</li>
        </ul>
    </div>`
placeContent.innerHTML +=
    `<div class=country1>
        <h1>Country of Origin</h1>
        <p>${data.country[0]}</p>
    </div>`

    
function addCollabs(info){
    placeContent.innerHTML +=
        `<div class="collab-container">
            <h2>Collaborators</h2>
            <div class="collab1">
            </div>
        </div>`
    let div = document.querySelector(".collab1");
    for (let i = 0; i < info.length; i++) {
        div.innerHTML +=
        `<div class="collabs-card">
            <img src="${info[i].artpic}" alt="Collabs Pic">    
            <p>${info[i].artist}</p>
        </div>`
    }
}

addCollabs(data.collabs);
