const express = require("express");
const app = express();
app.use(express.static(`public`));

app.get(`/`,(req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get(`/api/albums`,(req,res)=>{
    albums = [];
    albums[0] = {
        title:"Californication",
        artist:"Red Hot Chili Peppers",
        cover:"images/californication.jpg",
        genre:"Funk rock",
        year:"1999",
        topTracks: ["Californication", "Otherside", "Scar Tissue"]
    }
    albums[1] = {
        title:"6 Feet Beneath the Moon",
        artist:"King Krule",
        cover:"images/6FeetBeneathTheMoon.jpeg",
        genre:"Jazz fusion",
        year:"2013",
        topTracks: ["Baby Blue", "Easy Easy", "Border Line"]
    }
    albums[2] = {
        title:"The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        artist:"David Bowie",
        cover:"images/ziggy.jpg",
        genre:"Glam rock",
        year:"1972",
        topTracks: ["Five Years", "Moonage Daydream", "Soul Love"]
    }
    albums[3] = {
        title:"Good Kid, M.A.A.D City",
        artist:"Kendrick Lamar",
        cover:"images/gkmc.jpg",
        genre:"Rap",
        year:"2012",
        topTracks: ["Sing About Me, I'm Dying of Thirst", "Now or Never", "M.A.A.D City"]
    }
    albums[4] = {
        title:"Paranoid",
        artist:"Black Sabbath",
        cover:"images/paranoid.jpg",
        genre:"Heavy metal",
        year:"1970",
        topTracks: ["Hand of Doom", "Paranoid", "War Pigs / Luke's Wall"]
    }
    albums[5] = {
        title:"Innerspeaker",
        artist:"Tame Impala",
        cover:"images/innerspeaker.png",
        genre:"Psychedelic rock",
        year:"2010",
        topTracks: ["Alter Ego", "The Bold Arrow Of Time", "Solitude Is Bliss"]
    }

    res.json(albums);
});

app.listen(3000,()=>{
    console.log("Listening on port 3000...");
});