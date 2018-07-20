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
const events = data.events

function buildNews(information){
    placeContent.innerHTML +=
        `<div class="newsfeed-flex">
            <h2>Headlines</h2>
        </div>`
    let div = document.querySelector(".newsfeed-flex")
    for (let i = 0; i < information.length; i++) {
        div.innerHTML +=
            `<div class="home">
                <img src="${information[i].image}" alt="Kanye Image">
                <h2>${information[i].type}</h2>
                <ul>
                    <li>Date: ${information[i].date}</li>
                    <li>Location: ${information[i].location}</li>
                    <li>Entry Cost: ${information[i].purchase}</li>
                </ul>
            </div>` 
    }
}
buildNews(events);



