const express = require("express")
const mongoose = require("mongoose")
const app = express()
const path = require("path")

app.use(express.json())
app.use(express.static('assets'))
app.get("/" , (req,res) => {

res.sendFile(path.join(__dirname+'/index.html'));
}
)

app.get(

"/confirm" ,

(req,res) => {




}


)

app.get(
"/passwords" ,
(req,res) => {




}


)
app.post("/" ,   
(req,res) => {




}
)


app.listen(8080 , err =>  {
console.log("conniction succefully")

}
)
