const input = document.getElementById('Search');

// when the spacebar is pressed something happens
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        console.log(input.value)
        apiSearch();
    }
})

// gets the json
function apiSearch() {
    fetch("https://www.reddit.com/r/" + input.value + "/top.json?limit=1&t=day")
        .then ((resp) => resp.json())
        .then(function(data) { // here you get to do stuff
            console.log(data)
        })
    console.log("https://www.reddit.com/r/" + input.value + "/top.json?limit=1&t=day")
}
