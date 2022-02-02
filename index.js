// JSON for description data 
let descriptions = {
box1: "Our state-of-the-art studio is equipped with Pro Tools HD Ultimate and one of the best collections of vintage and modern analog microphones, mic preamps, compressors, equalizers, converters, as well as custom built microphones and preamps.",
box2: "At The People's Music, we are dedicated to always doing our best and making the recording process an inspiring and creative experience. We don't do things the same way every time - we personally tailor every approach for every client we work with.",
box3: "With a Live Room (about 100 m2) and two Iso Booths (each about 20 m2) the recording possibilities at Blackbird Music Studio are diverse. Live tracking of the entire band in the large recording room or rather a separation of signals? Whether solo artist, jazz trio, rock band, string quartet or gospel choir, we offer the ideal solution for every requirement",
box4: "With a Neve Genesys Black console, an optimal listening situation with monitors by Audio Optimum, Neumann and Dynaudio plus excellent acoustics, our control room offers best conditions for the perfect mix. Analog mixing with up to 48 mixdown channels in the console is just as possible as hybrid mixing in the box using the console as a summing mixer",
box5: "Regardless of whether it is a music video shoot in the live room or an interview in front of our mixing console in the control room, our studio regularly serves as a filming location and is also requested for photo shoots",
box6: "The Live Room offers the possibility to combine the atmosphere of a live concert with the convenience of a recording studio. With its capacity of up to 70 people, an excellent PA system and stage light, our Live Room is suited for concerts and showcases in an intimate environment. Our lounge area with bar is ideal for a meet & greet of the artists with their guests after the show",
box7: "We have been working successfully in the dubbing business for decades. With studio owner Andreas Hommelsheim as musical director synchronizations of numerous well-known productions have been created, such as “The Beauty and the Beast”, “Aladdin”, “The Lion King”",
box8: "Blackbird Music Studio offers a full service for all kinds of events: festivities, functions, conferences, production presentations, meetings. We give every event an individuel character including the right high-quality technical equipment",
box9: "Set up by artists, for artists, COMMUNITY is the home for Pirate creatives worldwide. Ask for advice and feedback on your music, put out a call for a collab, enter competitions, share the best-kept secret in your area… or simply connect with like-minded people. It’s all possible here.",
box10: "I love pirate and everything they do to support new artists!",
};


// JSON for title data 
let titles = {
box1: "About The Studio",
box2: "Services",
box3: "Recording",
box4: "Mixing",
box5: "Filming Location",
box6: "Studio Concerts",
box7: "Dubbing",
box8: "Events",
box9: "Join the Pirate Community",
box10: "From the Community",

};


// displays and hides the content box according to the click interaction with the buttons
function clickButton() {
    let toggleContainer = document.getElementById("toggleContainer");
    if(toggleContainer.style.display == "block") {
        toggleContainer.style.display = "none";
    } else {
        document.body.style.backgroundColor = "rgb(167, 168, 168)";
        toggleContainer.style.display = "block";
    }}

// Detect the Onmouseover event on the whole screen and filter according to the class and ID. Also show the title of the content according to the selected box
window.onmouseover = function(event) {
    let className = event.target.className;
    let idBox = event.target.id;
    if(className === 'box') {
        document.getElementById('contentBox').innerHTML = titles[idBox]+ "<br />" + "<br />"   + descriptions[idBox];
        document.getElementById('contentBox').style.color = ('#ffff');
    }};

//Detect the Onmouseout event on the entire screen and filter according to the class and clean the content box
window.onmouseout = function(event) {
    let className = event.target.className;
    if(className === 'box') {
        document.getElementById('contentBox').innerHTML = "";
    }}

