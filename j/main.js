// This code does NOT create any global variables.
// Promises can be chained together, with the previous promise
// passing its results to the next one responin the chain.
// the format is: fetch().then().then().catch()
// it's easier to read if we put each step in its own line,
// that's why the periods start the then lines.

fetch("houses.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // create a temp holder to append all the html generated inside the forEach iterator
        let html = "";
        // the argument "house" passed to the arrow function
        // holds each item in the array in turn.
        data.forEach((house) => {
            let family = house.members;
            let objInfo = `<dt class="house">${house.name}</dt>`;
            html += objInfo;
            let x = 0;
            // iterate through each name in the members array
            house.members.forEach((charater) => {
                let charInfo = `<dd class="character">${family[x]}</dd>`;
                x++;
                html += charInfo;
            });
        });
        // make a reference to the html container where
        // the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = `<dl>${html}</dl>`;
    })
    // this only runs if there is an error during the above process
    .catch((err) => {
        console.log("Oops!", err);
    });

// get random color and apply to background of page
fetch("https://x-colors.herokuapp.com/api/random")
    .then((xcolor) => {
        return xcolor.json();
    })
    .then((xcolorJson) => {
        document.body.style.backgroundColor = xcolorJson.hex;
    })
    .catch((error) => {
        console.error("Oops!!", error.message);
    });
