const executive = {
    collabs: ["Twista", "Jamie Foxx", "Jay Z", "Cam'ron", "Young Jeezy","Rick Ross", "Bon Iver",
    "Big Sean", "2 Chains", "Katie Perry"],

    protrait: [
        {
            picture:"",
            fullname:"Kanye Omari West"
        }],
    
    aliases: ["Kanye", "Yeezy", "Ye"],
    
    country: ["United States"]
}

function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

setData("Executive", executive);

function loadData(nameTag){
    let stringifiedObject = localStorage.getItem(nameTag);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}
console.log(loadData("Executive"));