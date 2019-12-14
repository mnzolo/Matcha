const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const formidable = require('formidable');
const fs = require('fs');


app.use(express.static("profimages"));

app.use(bodyparser.urlencoded({ extended: true }));

app.post("/profile.html", function (req, res) {
    if (req.body.Edit_Profile == "Edit_Profile") {
        res.send("Profile is Being Changed")
    }
    else if (req.body.About == "About") {
        console.log("About is Being Changed")
        res.sendFile(__dirname + "/edit_profile.html");
    }
    else if (req.body.Details == "Details") {
        console.log("Personal Details Are Being Changed")
        res.sendFile(__dirname + "/edit_profile.html");
    }
    else if (req.body.Take == "Take") {
        console.log("Taking image");
        res.sendFile(__dirname + "/profile.html");
    }
    else if (req.body.Geolocation == "Geolocation") {
        console.log("Finding your current location");
        res.sendFile(__dirname + "/profile.html");
    }
    else if (req.body.upload == undefined) {
        var form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {
            var oldpath = files.fileuploaded.path;
            var newpath = __dirname + "/profimages/" + files.fileuploaded.name;
            fs.rename(oldpath, newpath, function(err)
            {
                if(err) throw err;
                console.log(newpath);
                console.log("file has been moved");
            }
            );
            res.end();
        });
    }
}
);

/*  app.post("/uploadprofile.html", function(req, res)
{
    var form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {
            var oldpath = files.fileuploaded.path;
            var newpath = __dirname + "/profimages/" + files.fileuploaded.name;
            fs.rename(oldpath, newpath, function(err)
            {
                if(err) throw err;
                console.log(newpath);
                console.log("file has been moved");
            }
            );
            res.end();
        });
}); */

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/profile.html");
});

app.listen(3000, function () {
    console.log("Server Runnning on Port 3000");
}
);