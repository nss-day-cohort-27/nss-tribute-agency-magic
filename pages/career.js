function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}

console.log(loadData("Career"));

const data = loadData("Career");
const intro = data.intro;
const skills = data.skills;
const works = data.works;
const homes = data.homes;
const collabs = data.collabs;
const awards = data.awards;
const mainContent = document.querySelector(".flex-container");


function addIntro(info){
    mainContent.innerHTML += 
        `<div>
            <h2>${info.name}</h2>
            <h3>Born ${info.birth}</h3>
            <p>${info.bio}</p>
        </div>`;
}

addIntro(intro);

function addSkills(info){
    mainContent.innerHTML +=
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

addSkills(skills);

function addAlbums(info){
    mainContent.innerHTML += 
    `<div class="album-flex">
        <h2>Albums:</h2>
    </div>`
    let div = document.querySelector(".album-flex");
    for(let i = 0; i < info.length; i++){
        div.innerHTML +=
            `<div>
                <img src="${works[i].coverArt}" alt="${works[i].name} Cover">
                <h4>${works[i].name}</h4>
                <h4>${works[i].releaseDate}</h4>
            </div>`
    }
}

addAlbums(works)

function addHomes(info){
    mainContent.innerHTML +=
        `<div class="mansion-flex">
            <h2>A Splash of Wealth to Complement a Rapidly Declining Mental Health</h2>
        </div>`
    let div = document.querySelector(".mansion-flex");
    for(let i = 0; i < info.length; i++){
        div.innerHTML +=
            `<div>
                <img src="${info[i].image}" alt="${info[i].title}">
                <h3>${info[i].title}</h3>            
            </div>`
    }
}

addHomes(homes);

function addCollabs(info){
    mainContent.innerHTML +=
        `<div>
            <h2>Common Collaborators:</h2>
            <ul class="collabs-list"></ul>
        </div>`
    let ul = document.querySelector(".collabs-list");
    for (let i = 0; i < info.length; i++) {
        ul.innerHTML +=
            `<li>${info[i]}</li>`
    }
}

addCollabs(collabs);

function addAwards(info){
    mainContent.innerHTML += 
        `<div class="awards-flex">
            <h2>People Really Liked 'Old Kanye'</h2>
        </div>`;
    let div = document.querySelector(".awards-flex");
    for (let i = 0; i < info.length; i++) {
        div.innerHTML += 
            `<div>
                <img src="${info[i].image}" alt="Kanye at the Grammys">
                <h3>${info[i].award}</h3>
                <ul>
                    <li>${info[i].from}</li>
                    <li>${info[i].work} - ${info[i].year}</li>
                </ul>
            </div>`
    }
}

addAwards(awards);

    