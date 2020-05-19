// gets the json
fetch("https://www.reddit.com/r/videos/new.json?limit=1")
    .then ((resp) => resp.json())
    .then(function(data) { // here you get to do stuff
        console.log(data.data.children[0].data)
    })