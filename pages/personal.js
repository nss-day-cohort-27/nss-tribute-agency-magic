const personal = {
    birthName: "Kanye Omari West",
    intro: "June 8, 1922",
    countryOfOrigin: "United States",
    countryOfResidence: "United States",
    deathDate: "Living",
    spouce: "Kim Kardashian West",
    kids: [
        { 
            name: "North West",
            age: "5",
            img: "northWest.jpg"
        }, 
        {
            name: "Saint West",
            age: "2"
        }, 
    ],
}

// localStorage.setItem("personal", "personal");
// console.log("personal");

// 
const northWestImg = document.querySelector("#imgloc");
northWestImg.innerHTML= `<img src="../images/${personal.kids[0].img}">`



function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

setData("Personal", personal);

function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}
console.log(loadData("Personal"));