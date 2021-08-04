window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(json) {
            console.log(json);
            buildAstronauts(json);
        });
    });
});

function buildAstronauts(astronauts) {
    for (let i=0; i < astronauts.length; i++){
        const divAstro = document.createElement("div");
        divAstro.className = "astronaut";

        const divBio = document.createElement("div");
        divBio.className = "bio";

        divAstro.appendChild(divBio);
        const astronautName = document.createElement("h3");
        astronautName.innerHTML = astronauts[i].firstName + " " + astronauts[i].lastName;

        divBio.appendChild(astronautName);

        const astronautList = document.createElement("ul");

        const hours = document.createElement("li");
        hours.innerHTML = "Hours in space: " + astronauts[i].hoursInSpace;
        astronautList.appendChild(hours);

        const active = document.createElement("li");
        active.innerHTML = "Active: " + astronauts[i].active;
        astronautList.appendChild(active);

        const skills = document.createElement("li");
        skills.innerHTML = "Skills: " + astronauts[i].skills;
        astronautList.appendChild(skills);

        divBio.appendChild(astronautList);

        const image = document.createElement("img");
        image.className = "avatar";
        image.src = astronauts[i].picture;

        divAstro.appendChild(image);

        const container = document.getElementById("container");
        container.appendChild(divAstro);

        console.log(divAstro);

    }
}