//Requirements Importer
const Express = require("express")
const Serp = require("serp")

//Variables
const Port = process.env.PORT || 3500
const Web = Express()

//Function
async function QueryScraper(Query, res){
    var options = {
        qs:{
            q: "test"
        },
        num: 100,
        delay: 2000
    };
 
    try{
        const links = await Serp.search(options);
        res.json(JSON.parse(links))
    }catch{
        res.json({
            "error": "Something went wrong."
        })
    }
}

//Express
Web.get("/", function(req, res){
    res.send("Visit https://searchscrapev.herokuapp.com/api/searchscrape/ then type the thing you want to search scrape in the last line.")
})
Web.get("/api/searchscrape/:query", function(req, res){
    QueryScraper(req.params.query, res)
})
Web.listen(Port, ()=>{
console.log(`==============================
    Server Status: Online
    Port: ${Port}
==============================`)
})