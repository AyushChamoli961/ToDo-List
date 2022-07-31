const express = require("express")
const parser = require("body-parser")

const app = express();
app.set('view engine', 'ejs');
 
app.use(parser.urlencoded({extended:true}))
app.use(express.static("public"))

let items = []
let Worklist = []

app.get("/" , function(req,res){
    // let today = new Date()
    // let DayName = today.getDay()
    // const day = ["Sunday" , "Monday" , "Tuesday" ,"Wednesday" , "Thrusday" ,"Friday" , "Saturday"]

    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let today = new Date()
    let DayName = today.toLocaleDateString("en-US",options) 
    res.render("list" , {listTitle:DayName,newItems:items})
})
app.get("/work",function(req,res){
    res.render("list", {listTitle : "Work List", newItems:Worklist})
})

app.post("/work",function(req,res){
    var item = req.body,item
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