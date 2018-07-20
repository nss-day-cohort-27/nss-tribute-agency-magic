
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
            <li>${data.collabs[0].artist}</li><img src="${data.collabs[0].artpic}" alt="Twista Pic">
            <li>${data.collabs[1].artist}</li><img src="${data.collabs[1].artpic}" alt="Twista Pic">
            <li>${data.collabs[2].artist}</li><img src="${data.collabs[2].artpic}" alt="Twista Pic">
            <li>${data.collabs[3].artist}</li><img src="${data.collabs[3].artpic}" alt="Twista Pic">
            <li>${data.collabs[4].artist}</li><img src="${data.collabs[4].artpic}" alt="Twista Pic">
            <li>${data.collabs[5].artist}</li><img src="${data.collabs[5].artpic}" alt="Twista Pic">
            <li>${data.collabs[6].artist}</li><img src="${data.collabs[6].artpic}" alt="Twista Pic">
            <li>${data.collabs[7].artist}</li><img src="${data.collabs[7].artpic}" alt="Twista Pic">
            <li>${data.collabs[8].artist}</li><img src="${data.collabs[8].artpic}" alt="Twista Pic">
            <li>${data.collabs[9].artist}</li><img src="${data.collabs[9].artpic}" alt="Twista Pic">
            <li>${data.collabs[10].artist}</li><img src="${data.collabs[10].artpic}" alt="Twista Pic">
            
           
        </ul>
    </div>`
