
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
placeContent.innerHTML +=
    `<div class="collab1">
        <h2>Collaborators</h2>
        <ul>
            <li>${data.collabs[0]}${data.collabs.artpic[0]}</li>
            <li>${data.collabs[1]}</li>
            <li>${data.collabs[2]}</li>
            <li>${data.collabs[3]}</li>
            <li>${data.collabs[4]}</li>
            <li>${data.collabs[5]}</li>
            <li>${data.collabs[6]}</li>
            <li>${data.collabs[7]}</li>
            <li>${data.collabs[8]}</li>
            <li>${data.collabs[9]}</li>
            <li>${data.collabs[10]}</li>
        </ul>
    </div>`
