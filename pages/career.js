function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}
console.log(loadData("Career"));

let data = loadData("Career");

let intro = data.intro;
let skills = data.skills;
let works = data.works;
let homes = data.homes;
let collabs = data.collabs;
let awards = data.awards;

let mainContent = document.querySelector(".flex-container");


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
// mainContent.innerHTML +=
//     `<div>
//         <h2>Common Collaborators:</h2>
//         <ul>
//             <li>${collabs[0]}</li>
//             <li>${collabs[1]}</li>
//             <li>${collabs[2]}</li>
//             <li>${collabs[3]}</li>
//             <li>${collabs[4]}</li>
//             <li>${collabs[5]}</li>
//             <li>${collabs[6]}</li>
//             <li>${collabs[7]}</li>
//             <li>${collabs[8]}</li>
//             <li>${collabs[9]}</li>
//             <li>${collabs[10]}</li>
//         </ul>
//     </div>`;
// mainContent.innerHTML += 
//     `<div>
//         <h2>Awards</h2>
//         <div>
//             <img src="${awards[0].image}" alt="Kanye at the Grammys">
//             <h3>${awards[0].award}</h3>
//             <ul>
//                 <li>${awards[0].from}</li>
//                 <li>${awards[0].work} - ${awards[0].year}</li>
//             </ul>
//         </div>
//     </div>
//     <div>
//         <h2>Awards</h2>
//         <div>
//             <img src="${awards[1].image}" alt="Kanye at the Grammys">
//             <h3>${awards[1].award}</h3>
//             <ul>
//                 <li>${awards[1].from}</li>
//                 <li>${awards[1].work} - ${awards[1].year}</li>
//             </ul>
//         </div>
//     </div>
//     <div>
//         <h2>Awards</h2>
//         <div>
//             <img src="${awards[2].image}" alt="Kanye at the Grammys">
//             <h3>${awards[2].award}</h3>
//             <ul>
//                 <li>${awards[2].from}</li>
//                 <li>${awards[2].work} - ${awards[2].year}</li>
//             </ul>
//         </div>
//     </div>`
    