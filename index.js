const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(express.static("profimages"));

app.use(bodyparser.urlencoded({ extended: true }));

app.post("/profile.html", function (req, res) {
    if (req.body.Edit_Profile == "Edit_Profile") {
        res.send("Profile is Being Changed")
    }
    else if (req.body.About == "About") {
        res.send("About is Being Changed")
    }
     else if (req.body.Details == "Details") {
        res.send("Personal Details Are Being Changed")
    }
    else if (req.body.Take == "Take")
    {
        res.send("Taking image");
    }
    else if (req.body.upload == undefined)
    {
        res.send("found image");
    }
}
);

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/profile.html");
});

app.listen(3000, function () {
    console.log("Server Runnning on Port 3000");
}
);