const executive = {
    
    collabs: {
        
        artist: "Twista",
        artpic: "../images/twista.jpg";
        
        artist: "Jamie Foxx",
        artpic: "";

        artist: "Jay Z",
        artpic: "",
        
        artist: "Cam'ron",
        artpic: "",
        
        artist: "Young Jeezy",
        artpic: "",
        
        artist: "Rick Ross",
        artpic: "",
        
        artist: "Bon Iver",
        artpic: "",
        
        artist: "Big Sean",
        artpic: "",

        artist: "2 Chains",
        artpic: "",
        
        artist: "Katie Perry",
        artpic: "",
        
        artist: "Donald Trump",
        artpic: ""
    },

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