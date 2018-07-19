const personal = {
    birthName: "Kanye Omari West",
    kanyePic: "../images/kanyeWest.jpg",
    birthDate: "Born on June 8, 1922",
    countryOfOrigin: "Born in the United States",
    countryOfResidence: "Currently living in the United States",
    spouses: [
        {
            name: "Kim Kardashian West",
            status: "Currently Married",
            img: "../images/kimKardashian.png",
            title: "spouse",
            id: "1"
        },
        {
            name: "Alexis Phifer",
            status: "Formerly Engaged",
            img: "../images/alexisPhifer.jpg",
            title: "spouse",
            id: "2"
        }
    ],
    kids: [
        {
            name: "North West",
            age: "5 years old",
            img: "../images/northWest.jpg",
            title: "kid",
            id: "3"
        },
        {
            name: "Saint West",
            age: "2 years old",
            img: "../images/saintWest.jpg",
            title: "kid",
            id: "4"
        }
    ]
}


function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

setData("Personal", personal); //change yours to whatever your page is and nametag you want





// const northWestImg = document.querySelector("#imgloc");
// northWestImg.innerHTML= `<img src="../images/${personal.kids[0].img}">`



// function loadData(nameTag){
//     let stringifiedObject = localStorage.getItem(nameTag);
//     let parsedObject = JSON.parse(stringifiedObject);
//     return parsedObject;
// }
// console.log(loadData("Personal"));