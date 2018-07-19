const newsfeed = {
   
    protrait: [
        {
            picture:"",
            fullname:"Kanye Omari West"
        }],

        Events:[

        {
            date: "May 4, 2018",
            location: "Chuck E. Cheese, Dallas",
            type:"Star Wars Day",
            purchase:"$20.00",
        },
    
        { 
            date:"June 6, 2018",
            location:"Kuipers Family Farm, Illinos",
            type:"#PROJECTWYOMING",
            purchase:"RSVP Free",
        
        }, 
        {
            date: "June 6, 2018",
            location: "RC Cola Plant, Miami",
            type:"#PROJECTWYOMING",
            purchase:"RSVP Free",
        }, 

        {
            date: "June 24, 2018",
            location: "Santa Claus, Indiana",
            type:"Holiday World fan club",
            purchase:"$18.00",
        }, 

        {
            date: "June 28, 2018",
            location: "Paris, Tennessee",
            type:"Trump fan club meet up",
            Collaborators: "John McCoy",
            purchase:"Free",
        }, 

        {
            date: "July 2, 2018",
            location: "Nashville, Tennessee",
            type:"Bowling for Bees",
            purchase:"Free",
        },
        
        {
            date: "July 7, 2018",
            location: "Denver, Colorado",
            type:"You've got a friend in me Lowes Event",
            purchase:"$1.00",
        }, 

        {
            date: "July 11, 2018",
            location: "The Toy Box, Kentucky",
            type:"Bigger is Better",
            purchase:"$5.00",
        }] 
        
        
        
}

       
function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

setData("news", newsfeed);


