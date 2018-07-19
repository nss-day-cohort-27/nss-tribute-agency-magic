function loadData(nameTag) {
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}
console.log(loadData("Personal"));

let data = loadData("Personal");

const spouse = data.spouses;
const kids = data.kids;

const placeContent = document.getElementById("flex-container");

placeContent.innerHTML +=
    `<div>
    <img src= "${data.kanyePic}" alt="Smiling Kanye">
        <h2>${data.birthName}</h2>
        <h3>${data.birthDate}</h3>
        <h3>${data.countryOfOrigin}</h3>
        <h3>${data.countryOfResidence}</h3>
    </div>`



function addInfo(infoLocation, className, label) {
    placeContent.innerHTML +=
        `<div class="className">

        </div>`
    let div = document.querySelector(".className");
    for (let i = 0; i < infoLocation.length; i++) {
        div.innerHTML +=
            `<div>
                <img src= "${infoLocation[i].img}" alt="${infoLocation[i].name}">
                <h2>${infoLocation[i].name}</h2>
                <h4>${infoLocation[i][label]}</h4>
            </div>`
    }
}
addInfo(spouse, "spouse-container", "status");
addInfo(kids, "kid-container", "age");
