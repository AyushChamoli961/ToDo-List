const express = require("express")
const parser = require("body-parser")
const date =  require(__dirname + "/date.js")

const app = express();
app.set('view engine', 'ejs');
 
app.use(parser.urlencoded({extended:true}))
app.use(express.static("public"))

const items = ["Go school" , "do assignment"]
let Worklist = []

app.get("/" , function(req,res){
    let day = date.getDay();
    res.render("list" , {listTitle:day,newItems:items})
})

app.get("/work",function(req,res){
    res.render("list", {listTitle : "Work List", newItems:Worklist})
})

app.post("/work",function(req,res){
    let item = req.body.item
    Worklist.push(item)
})


app.post("/",function(req,res){
    let item = req.body.newItem
    if(req.body.list === "Work"){
    Worklist.push(item)
    res.redirect("/work")
    }else{
        items.push(item)
        res.redirect("/")
    }
})

app.listen(3000,function(req,res){
    console.log("server is running at port 3000")
})