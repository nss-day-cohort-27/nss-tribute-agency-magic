// Function to retrieve data from Local Storage
function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}

// Console Log for Maximum Effort
console.log(loadData("Career"));

// Set Parsed Data to a variable for less code when transporting data through functions below
const data = loadData("Career");

// Set data paths to variable for functions below
const intro = data.intro;
const skills = data.skills;
const works = data.works;
const homes = data.homes;
const collabs = data.collabs;
const awards = data.awards;

// Reached out to DOM to grab main div for placing data into DOM
const mainContent = document.querySelector(".flex-container");

mainContent.innerHTML +=
    `<div class="similar-content">

    </div>`;

const introContent = document.querySelector(".similar-content");    

// Simple Function to add intro information to DOM, is VERY specific to this information
function addIntro(info){
    introContent.innerHTML += 
        `<div class="intro-div">
            <h2>${info.name}</h2>
            <h3>Born ${info.birth}</h3>
            <h4>The Career of Yeezus</h4>
            <div class="flex-details">
                <p>${info.bio}</p>
            </div>
        </div>`;
}


// Function to populate skills variable, using a loop to add in list items
function addSkills(info){
    introDivContent.innerHTML +=
        `<div>
            <h3>Notable Skills:</h3>
            <ul class="skills-list"></ul>
        </div>`;
    let ul = document.querySelector(".skills-list");
    for(let i = 0; i < info.length; i++){
        ul.innerHTML +=
            `<li>${info[i]}</li>`
    }
}


// Function to create a div, build album cards, and place cards into the new div
function addAlbums(info){
    mainContent.innerHTML += 
    `<div class="album-container">
        <h2>Albums From the Greatest Person to Ever Live</h2>
        <div class="album-flex"></div>
    </div>` // add a class to top div for targeting purpose in function and styling 
    let div = document.querySelector(".album-flex"); // grab the new div by the class
    for(let i = 0; i < info.length; i++){
        div.innerHTML +=
            `<div class="album-card">
                <img src="${works[i].coverArt}" alt="${works[i].name} Cover">
                <div>
                    <h4>${works[i].name}</h4>
                    <h5>${works[i].releaseDate}</h5>
                </div>
            </div>` // use loop to add all album cards to above div
    }
}


// function, similar to the albums function, to build home cards instead.
function addHomes(info){
    mainContent.innerHTML +=
        `<div class="home-container">
            <h2>A Splash of Wealth to Complement a Rapidly Declining Mental Health</h2>
            <div class="mansion-flex">
            </div>
        </div>`
    let div = document.querySelector(".mansion-flex");
    for(let i = 0; i < info.length; i++){
        div.innerHTML +=
            `<div>
                <img src="${info[i].image}" alt="${info[i].title}" class="mansion-img">
                <h3>${info[i].title}</h3>            
            </div>`
    }
}


// Another list-item populating function to list the collaborators, this time targeting this ul
// Specifically because other ul's now exist in the DOM
function addCollabs(info){
    introDivContent.innerHTML +=
        `<div>
            <h3>Common Collaborators:</h3>
            <ul class="collabs-list"></ul>
        </div>`
    let ul = document.querySelector(".collabs-list"); // currently in love with querySelector. 
    for (let i = 0; i < info.length; i++) {
        ul.innerHTML +=
            `<li>${info[i]}</li>`
    }
}


// Another card building Function for awards this time, populating a slightly more complex HTML 
// Structure for the award cards
function addAwards(info){
    mainContent.innerHTML += 
        `<div class="awards-container">
            <h2>People Really Liked 'Old Kanye'</h2>
        </div>`;
    let div = document.querySelector(".awards-container");
    for (let i = 0; i < info.length; i++) {
        div.innerHTML += 
            `<div class="awards-flex">
                <img src="${info[i].image}" alt="Kanye at the Grammys">
                <div>
                    <h3>${info[i].award}</h3>
                    <ul>
                        <li>${info[i].from}</li>
                        <li>${info[i].work} - ${info[i].year}</li>
                    </ul>
                </div>
            </div>`
    }
}

// Functions called with intro variable passed into it
addIntro(intro);

const introDivContent = document.querySelector(".flex-details")

// Called in the skills variable
addSkills(skills);

// Called in the collabs variable
addCollabs(collabs);

// Called in the works variable
addAlbums(works)

// Called in homes variable
addHomes(homes);

// Called in final data structure variable, awards
addAwards(awards);

