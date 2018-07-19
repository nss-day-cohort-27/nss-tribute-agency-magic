const newsfeed = {
        events:[
        {
            date: "May 4, 2018",
            location: "Chuck E. Cheese, Dallas",
            type:"Star Wars Day",
            purchase:"$20.00",
            image: "../images/newsfeed-images/kanye_west_Chucke.png"
        },
    
        { 
            date:"June 6, 2018",
            location:"Kuipers Family Farm, Illinos",
            type:"#PROJECTWYOMING",
            purchase:"RSVP Free",
            image: "../images/newsfeed-images/Kanye-Chicago.png"
        
        }, 
        {
            date: "June 6, 2018",
            location: "RC Cola Plant, Miami",
            type:"#PROJECTWYOMING",
            purchase:"RSVP Free",
            image: "../images/newsfeed-images/Miami.png"
        }, 

        {
            date: "June 24, 2018",
            location: "Santa Claus, Indiana",
            type:"Holiday World fan club",
            purchase:"$18.00",
            image: "../images/newsfeed-images/kanyerollercoaster.png"
        }, 

        {
            date: "June 28, 2018",
            location: "Paris, Tennessee",
            type:"Trump fan club meet up",
            purchase:"Free",
            image: "../images/newsfeed-images/Kanyetrump.png"
        }, 

        {
            date: "July 2, 2018",
            location: "Nashville, Tennessee",
            type:"Bowling for Bees",
            purchase:"Free",
            image: "../images/newsfeed-images/kanyebowling"
        },
        
        {
            date: "July 7, 2018",
            location: "Denver, Colorado",
            type:"You've got a friend in me Lowes Event",
            purchase:"$1.00",
            image: "../images/newsfeed-images/kanyedenver.png"
        }, 

        {
            date: "July 11, 2018",
            location: "The Toy Box, Kentucky",
            type:"Bigger is Better",
            purchase:"$5.00",
            image: "../images/newsfeed-images/kanyebigger.png"
        }
    ]    
}

function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

setData("news", newsfeed);


