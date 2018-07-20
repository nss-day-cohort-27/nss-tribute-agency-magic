const executive = {
    
    collabs: [
    {
        
        artist: "Twista",
        artpic: "images/twista.jpg"
    },
    {
        artist: "Jamie Foxx",
        artpic: "images/jamiefoxx.jpg"
    },
    {
        artist: "Jay Z",
        artpic: "images/jayz.jpg"
    },
    {  
        artist: "Camron",
        artpic: "images/camron.jpg"
    },
    {   
        artist: "Young Jeezy",
        artpic: "images/youngjeezy.jpg"
    },
    { 
        artist: "Rick Ross",
        artpic: "../images/twista.jpg"
    },
    {
        artist: "Bon Iver",
        artpic: "../images/twista.jpg"
    },
    {        
        artist: "Big Sean",
        artpic: "../images/twista.jpg"
    },
    {
        artist: "2 Chains",
        artpic: "../images/twista.jpg"
    },
    {  
        artist: "Katie Perry",
        artpic: "../images/twista.jpg"
    },
    {
        artist: "Donald Trump",
        artpic: "../images/twista.jpg"
    }
],
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