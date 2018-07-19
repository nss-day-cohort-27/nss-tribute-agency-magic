const executive = {
    collabs: ["Twista", "Jamie Foxx", "Jay Z", "Cam'ron", "Young Jeezy","Rick Ross", "Bon Iver",
    "Big Sean", "2 Chains", "Katie Perry","Donald Trump"],

    portrait:
        {
            picture: "./images/kanyebest.jpg",
            fullname:"Kanye Omari West"
        },
    
    aliases: ["Kanye", "Yeezy", "Ye"],
    
    country: ["United States"]
}

function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

setData("Executive", executive);