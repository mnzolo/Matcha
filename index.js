const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(express.static("profimages"));

app.use(bodyparser.urlencoded({extended: true}));

app.get("/" , function(req, res)
{
    res.sendFile(__dirname + "/profile.html");
});

app.listen(3000, function()
{
    console.log("Server Runnning on Port 3000");
}
);
