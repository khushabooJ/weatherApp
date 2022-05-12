require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path")
const ejs = require("ejs")
const port = process.env.PORT || 3000;


console.log(process.env.WEATHER_API_KEY)

const static_path = path.join(__dirname, "../public")
const partials_path = path.join(__dirname, "../templates/partials")
const template_path = path.join(__dirname, "../templates/views")

console.log(partials_path)

app.use(express.static(static_path))
app.set("view engine", "ejs");
app.set("views", template_path)
app.set("partials", partials_path)




app.get("/", (req, res) => {
    res.render("index")

})



app.get("/about", (req, res) => {
    res.render("about")

})
app.get("/weather", (req, res) => {
    res.render("weather")
})

app.get("/404er", (req, res) => {
    res.render("404er", {
        errormsg: "Opps! Page Not Found"
    })
})



app.listen(port, () => {
    console.log("Connected")
})