const career = {
    intro: {
            name: "Kanye Omari West",
            birth: "June 8th, 1977",
            bio: "An American rapper, singer, songwriter, record producer, entrepreneur and fashion designer. Born in Atlanta and raised in Chicago, West first became known as a producer for Roc-A-Fella Records in the early 2000s, contributing to hit singles for artists such as Jay-Z, Ludacris and Alicia Keys. Intent on pursuing a solo career as a rapper, West released his debut album The College Dropout in 2004 to widespread critical and commercial success, and founded the record label GOOD Music. He went on to pursue a variety of styles on subsequent albums, including the polarizing but influential 808s & Heartbreak (2008). He released the critically acclaimed album My Beautiful Dark Twisted Fantasy in 2010, and followed with albums such as the abrasive Yeezus (2013) and fragmented The Life of Pablo (2016), full-length collaborations with Jay-Z and Kid Cudi, and production work for artists such as Pusha T and Nas."
    }
    ,
    skills: ["Rapping", "Producing Music", "Antoagonizing his Fanbase"],
    works: [
        { 
            name: "The College Dropout",
            releaseDate: "February 10, 2004",
            coverArt: "../images/collegedropout.jpg"
        }, 
        {
            name: "Late Registration",
            releaseDate: "August 30, 2005",
            coverArt: "../images/lateregistration.jpg"
        }, 
        {
            name: "Graduation",
            releaseDate: "September 11, 2007",
            coverArt: "../images/graduation.jpg"
        }, 
        {   
            name: "808's and Heartbreaks",
            releaseDate: "November 24, 2008",
            coverArt: "../images/808heartbreak.jpg"
        },
        {
            name: "My Beautiful Dark Twisted Fantasy",
            releaseDate: "November 22, 2010",
            coverArt: "../images/twisteddark.jpg"
        }
    ],
    homes: [
        {
            title: "Kanye's Bachelor Pad",
            image: "../images/kanyebachelorpad.jpg"
        }, 
        {
            title: "Kanye and Kim's Starter Home",
            image: "../images/kanyemansion2.jpg"
        }, 
        {
            title: "Kanye and Kim's Massive Mansion",
            image: "../images/kanyemansion1.jpg"
        }, 
        {
            title: "What Kanye hopes is his Future Home",
            image: "../images/kanyefuturehouse.jpg"
        }
    ],
    collabs: ["Twista", "Jamie Foxx", "Jay Z", "Cam'ron", "Young Jeezy", "Rick Ross", "Bon Iver",
    "Big Sean", "2 Chains", "Katie Perry", "Donald Trump"],
    awards: [
        {
            from: "The Grammy's",
            award: "Best Rap Album",
            work: "The College Dropout",
            year: "2005",
            image: "../images/kanyegrammy1.jpg"
        },
        {
            from: "The Grammy's",
            award: "Best Rap Album",
            work: "Late Registration",
            year: "2006",
            image: "../images/kanyegrammy2.jpg"
        },
        {
            from: "The Grammy's",
            award: "Best Rap Album",
            work: "Graduation",
            year: "2008",
            image: "../images/kanyegrammy3.jpg"
        },
    ] ,
}

function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

setData("Career", career);