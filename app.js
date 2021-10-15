const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { get } = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get('/contact', function(req, res){
    res.sendFile(__dirname+"/contact.html")
})

app.get('/events', function(req, res){
    res.sendFile(__dirname+"/events.html")
})

app.get('/about', function(req, res){
    res.sendFile(__dirname+"/about.html")
})

app.get('/work', function(req, res){
    res.sendFile(__dirname+"/work.html")
})

app.get('/pet-care', function(req, res){
    res.sendFile(__dirname+"/petcare.html")
})

app.post("/", function(req, res){
    const email = req.body.email
    const name = req.body.name;

    var data = {
        members : [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME : name
            }
            }
        ]
    }

    var jsondata = JSON.stringify(data)
    
    var url = "https://us6.api.mailchimp.com/3.0/lists/40d8a160f8"

    var options = {
        method: "POST",
        auth : "vinuka:f021368fb1c4d28766584ebc2b69c81c-us6"
    }

    var request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data))

            if(response.statusCode === 200){
               setTimeout(function(){
                res.redirect("/")
               }, 3000) 
            } else {
                res.sendFile(__dirname+"/fail.html")
            }
        })
    })

    request.write(jsondata);
    request.end()
})

app.post("/pet-care", function(req, res){
    const email = req.body.email
    const name = req.body.name;

    var data = {
        members : [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME : name
            }
            }
        ]
    }

    var jsondata = JSON.stringify(data)
    
    var url = mailchimp-url;

    var options = {
        method: "POST",
        auth : mailchimp-id,
    }

    var request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data))

            if(response.statusCode === 200){
               setTimeout(function(){
                res.sendFile(__dirname+"/thanku.html")
               }, 3000) 
            } else {
                res.sendFile(__dirname+"/fail.html")
            }
        })
    })

    request.write(jsondata);
    request.end()
})

app.use(function(req, res, next){
    res.status(404).sendFile(__dirname+'/404.html')
})

app.listen(3000, function(){
    console.log("server is running")
})



