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
    `<div class="kanye-container">
    <h1>${data.pageTitle}</h1>
    <div class="kanye-container-flex">
    <img src= "${data.kanyePic}" alt="Smiling Kanye">
    <div>
        <h2>${data.birthName}</h2>
        <h3>${data.birthDate}</h3>
        <h3>${data.countryOfOrigin}</h3>
        <h3>${data.countryOfResidence}</h3>
        <p>Lorem ipsum lame dolor sit amet, consectetur i don't have my own clothing line adipiscing elit, sed this placeholder text isn't creative do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    </div>
    </div>`



function addInfo(infoLocation, label) {
    placeContent.innerHTML +=
        `<div class="content-flex">
            <div class="insert-content">
                            
            </div>
        </div>`
    let div = document.querySelector(".insert-content");
    for (let i = 0; i < infoLocation.length; i++) {
        div.innerHTML +=
            `<div class = "${infoLocation[i].title}${infoLocation[i].id}">
                <img src= "${infoLocation[i].img}" alt="${infoLocation[i].name}">
                <div>
                    <h2>${infoLocation[i].name}</h2>
                    <h4>${infoLocation[i][label]}</h4>
                    <p>Lorem ipsum lame dolor sit amet, consectetur i don't have my own clothing line adipiscing elit, sed this placeholder text isn't creative do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>`
    }
}
addInfo(spouse, "status");
addInfo(kids, "age");
