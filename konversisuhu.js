const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors")
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
 
 
app.get("/test", (req,res) => {
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})
 
// menjalankan server pada port 8080
app.listen(8080, () =>{
    console.log("Server run on port 8080");
})
 
// end-point "/Celcius" dengan method POST
app.post("/convert/celcius", (req,res) => {
    let c = Number(req.body.c) 
 
    let r = 4/5 * c
    let k = c * 273
    let f = 9/5 * c + 32
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Celcius: c,
        Reamur: r,
        Kelvin: k,
        Fahrenheit: f
    }
    res.json(response)
})
 
// end-point "/Reamur" dengan method POST
app.post("/convert/reamur", (req,res) => {
    let r = Number(req.body.r) 
 
    let c = 5/4 * r
    let k = 5/4 * r + 273
    let f = 9/4 * r + 32
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Reamur: r,
        Celcius: c,
        Kelvin: k,
        Fahrenheit: f
    }
    res.json(response)
})
 
// end-point "/Kelvin" dengan method POST
app.post("/convert/kelvin", (req,res) => {
    let k = Number(req.body.k) 
 
    let c = k - 273
    let r = 4/5 * (k - 273)
    let f = 9/5 * (k - 273) + 32
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Kelvin: k,
        Reamur: r,
        Celcius: c,
        Fahrenheit: f
    }
    res.json(response)
})
 
// end-point "/Fahrenheit" dengan method POST
app.post("/convert/fahrenheit", (req,res) => {
    let f = Number(req.body.f) 
 
    let c = 5/9 * (f - 32)
    let r = 4/9 * (f - 32)
    let k = 5/9 * (f - 32) + 273
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        Fahrenheit: f,
        Kelvin: k,
        Reamur: r,
        Celcius: c
    }
    res.json(response)
})
