//Requirements Importer
const Express = require("express")

//Variables
const Port = process.env.PORT || 3500
const Web = Express()

//Express
Web.get("/", function(req, res){
    res.send("Hello World")
})
Web.listen(Port, ()=>{
console.log(`==============================
    Server Status: Online
    Port: ${Port}
==============================`)
})